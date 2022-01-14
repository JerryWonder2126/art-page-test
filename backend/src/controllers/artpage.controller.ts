import express from 'express';
import {OfferModel, SectionModel} from '../models/artpictures.model';
import {IParsedResponse} from '../models/general.interface';
import {ISocialInterface} from '../services/social/social.interface';
import {telegram, whatsapp} from '../services/social/social.service';

// const {title} = require('process');
const router = express.Router();

router.get('/sections/', async (req: any, res: any) => {
  const result: IParsedResponse = await SectionModel.fetchSections();
  if (result.error) {
    res.statusCode = 404;
  }
  res.send(result);
});

router.post('/sections', async (req: any, res: any) => {
  const imageFile = req['files'].image;
  const result = await SectionModel.addSection(req.body.title, imageFile);
  if (result.error) {
    res.statusCode = 404;
  }
  res.send(result);
});

router.put('/sections/', async (req: any, res: any) => {
  const result = (await SectionModel.update(
    req.body.uhash,
    req.body.newValue,
    req.query.type
  )) as IParsedResponse;
  if (result.error) {
    res.statusCode = 404;
  }
  res.send(result);
});

router.delete('/sections', async (req: any, res: any) => {
  const result = await SectionModel.deleteSection(req.query.section_hash);
  if (result.error) {
    res.statusCode = 404;
  }
  res.send(result);
});

router.get('/offers/', async (req, res) => {
  const response = await OfferModel.fetchOffers(req.query.section as string);

  if (response.error) {
    res.statusCode = 400;
  }

  res.send(response);
});

router.post('/offers/', async (req: any, res: any) => {
  let result: IParsedResponse = {
    rows: [],
    error: '',
  };
  try {
    const body = JSON.parse(req.body.data);
    const images: any[] = [];
    Object.keys(req['files']).forEach((key: any) =>
      images.push(req.files[key])
    );
    result = await OfferModel.createOffer(
      body.title,
      body.short_description,
      body.long_description,
      body.price,
      images,
      body.section_hash
    );
    if (result.error) {
      res.statusCode = 404;
    }
  } catch (err) {
    res.statusCode = 400;
    result.error += `\n${err}`;
  }
  res.send(result);
});

router.put('/offers/', async (req: any, res: any) => {
  const result = await OfferModel.update(req.body.body);
  if (result.error) {
    res.statusCode = 404;
  }
  res.send(result);
});

router.delete('/offers/', async (req: any, res: any) => {
  const result = await OfferModel.deleteOffer(req.query.offer_hash);
  if (result.error) {
    res.statusCode = 404;
  }
  res.send(result);
});

// router.post('/social/', async (req: any, res: any) => {
//   const result: IParsedResponse = {
//     rows: [],
//     error: '',
//   };
//   const response: ISocialInterface = {ok: false};
//   const form = JSON.parse(req.body.data);
//   const type: string = req.query.type;
//   console.log(form.message);
//   console.log(type);

//   res.send(result);
// });

router.post('/social/', async (req: any, res: any, next: any) => {
  const result: IParsedResponse = {
    rows: [],
    error: '',
  };
  try {
    let response: ISocialInterface = {ok: false};
    const form = JSON.parse(req.body.data);
    const type: string = req.query.type;
    console.log(req.body.data);
    console.log(type);
    if (type === 'whatsapp') {
      response = whatsapp(form);
      if (!response.ok) {
        throw new Error('Invalid request arguments');
      }
      console.log(response);
    } else if (type === 'telegram') {
      response = await telegram(form);
    }
    if (!response.ok) {
      throw new Error('Invalid request arguments');
    }
    // res.statusCode = 301;
    result.rows.push(response.message);
  } catch (err: any) {
    res.statusCode = 400;
    result.error += `\n${err}`;
  }
  res.send(result);
});

export {router};

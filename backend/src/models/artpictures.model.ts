import {v4} from 'uuid';
import {client} from '../db';
import {IParsedResponse} from './general.interface';
import {AzureService} from '../services/azure/azure.service';
import {
  saveImage,
  saveImageBatch,
} from '../services/upload/upload-image.service';

class SectionsModel {
  constructor(public tableName: string = 'sections') {}

  async init() {
    try {
      return await new AzureService('images', 'culdevtest');
    } catch (err) {
      throw new Error(
        JSON.stringify({
          stack: "Couldn't connect to Azure Server, please try again.",
        })
      );
    }
  }

  async fetchSections() {
    const response: IParsedResponse = {
      rows: [],
      error: '',
    };
    try {
      const query = `SELECT * FROM ${this.tableName}`;
      const res = await client.query(query);
      response.rows = res.rows;
    } catch (err: any) {
      response.error = err.stack;
    }

    return response;
  }

  async addSection(title: string, image: any) {
    const response: IParsedResponse = {
      rows: [],
      error: '',
    };
    try {
      const azureResponse = await saveImage(image);
      const query = `INSERT INTO ${
        this.tableName
      } (title, imgurl, uhash) VALUES ( '${title}', '${azureResponse}', '${v4()}') RETURNING *`;
      const res = await client.query(query);
      response.rows = res.rows;
    } catch (err: any) {
      // console.log(err.stack);
      response.error = err.stack;
    }

    return response;
  }

  async updateTitle(uhash: string, title: string) {
    const response: IParsedResponse = {
      rows: [],
      error: '',
    };
    try {
      const query = `UPDATE ${this.tableName} SET title = '${title}' WHERE uhash = '${uhash}' RETURNING *`;
      const res = await client.query(query);
      response.rows = res.rows;
    } catch (err: any) {
      response.error = err.stack;
    }

    return response;
  }

  async updateImgurl(uhash: string, imgURL: string) {
    const response: IParsedResponse = {
      rows: [],
      error: '',
    };
    try {
      const query = `UPDATE ${this.tableName} SET imgurl = '${imgURL}' WHERE uhash = '${uhash}' RETURNING *`;
      const res = await client.query(query);
      response.rows = res.rows;
    } catch (err: any) {
      response.error = err.stack;
    }

    return response;
  }

  async update(uhash: string, newValue: string, type: string) {
    let response: IParsedResponse = {
      rows: [],
      error: '',
    };
    if (type === 'title') {
      response = await this.updateTitle(uhash, newValue);
    } else if (type === 'imgurl') {
      response = await this.updateImgurl(uhash, newValue);
    } else {
      response.error = 'Input error - undefined update type for section';
    }

    return response;
  }

  async deleteSection(uhash: string) {
    const response: IParsedResponse = {
      rows: [],
      error: '',
    };
    try {
      const query = `DELETE FROM ${this.tableName} WHERE uhash = '${uhash}'`;
      const res = await client.query(query);
      if (res) {
        response.rows = [{message: 'Section deleted successfully'}];
      }
    } catch (err: any) {
      response.error = err.stack;
    }

    return response;
  }
}

class OffersModel {
  constructor(public tableName: string = 'offers') {}

  async createOffer(
    title: string,
    short_description: string,
    long_description: string,
    price: string,
    images: any[],
    section_hash: string
  ) {
    const response: IParsedResponse = {
      rows: [],
      error: '',
    };
    try {
      const azureResponse = await saveImageBatch(images);
      const parsedImgURL = `{${azureResponse}}`;
      const query = `INSERT INTO ${this.tableName} (
        title, short_description, long_description, price, imgurl, uhash, section_hash)
        VALUES ('${title}', '${short_description}','${long_description}', '${price}', '${parsedImgURL}', '${v4()}', '${section_hash}') RETURNING *;`;
      const res = await client.query(query);
      response.rows = res.rows;
    } catch (err: any) {
      response.error = err.stack;
    }

    return response;
  }

  async fetchOffers(section_hash: string) {
    const response: IParsedResponse = {
      rows: [],
      error: '',
    };
    try {
      const query = `SELECT * FROM ${this.tableName} WHERE section_hash = '${section_hash}'`;
      const res = await client.query(query);
      response.rows = res.rows;
    } catch (err: any) {
      if ('stack' in err) {
        response.error = err.stack;
      } else {
        response.error = JSON.stringify(err);
      }
      response.error = err.stack;
    }

    return response;
  }

  async fetchOffer(offer_hash: string) {
    const response: IParsedResponse = {
      rows: [],
      error: '',
    };
    try {
      const query = `SELECT * FROM ${this.tableName} WHERE uhash = '${offer_hash}'`;
      const res = await client.query(query);
      response.rows = res.rows;
    } catch (err: any) {
      if ('stack' in err) {
        response.error = err.stack;
      } else {
        response.error = JSON.stringify(err);
      }
      response.error = err.stack;
    }

    return response;
  }

  async deleteOffer(uhash: string) {
    const response: IParsedResponse = {
      rows: [],
      error: '',
    };
    try {
      const query = `DELETE FROM ${this.tableName} WHERE uhash = '${uhash}'`;
      const res = await client.query(query);
      if (res) {
        response.rows = [{message: 'Offer deleted successfully'}];
      }
    } catch (err: any) {
      response.error = err.stack;
    }

    return response;
  }

  async update(body: any) {
    const response: IParsedResponse = {
      rows: [],
      error: '',
    };
    try {
      const query = `UPDATE ${this.tableName} SET 
      title='${body.title}', 
      long_description='${body.long_description}', 
      short_description='${body.short_description}', 
      price='${body.price}'
      WHERE uhash = '${body.uhash}' RETURNING *`;
      const res = await client.query(query);
      if (res) {
        response.rows = res.rows;
      }
    } catch (err: any) {
      response.error = err.stack;
    }

    return response;
  }
}

const SectionModel = new SectionsModel();
const OfferModel = new OffersModel();

export {SectionModel, OfferModel};

import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import bodyParser from 'body-parser';
import {router} from './controllers/artpage.controller';

// const {router} = require('./controllers/artpage.controller');

const app = express();
const whitelist = ['http://localhost:4200', 'http://example2.com'];
const corsOptions = {
  origin: whitelist[0],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(fileUpload());

app.listen(3000, () => {
  console.log('application now running on port 3000');
});

app.use('/resources', router);

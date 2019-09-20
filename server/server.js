const express = require('express');
const cors = require('cors')
const parser = require('body-parser');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());
app.use(parser.json());

// const apiKey = process.env.API_KEY;
// fetch(url, {
//   headers: {
//     'X-API-KEY': apiKey
//   }
// })
// .then(response => response.json())
// .then(data => this.dogImgURL = data.message);

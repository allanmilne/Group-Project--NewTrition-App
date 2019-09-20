const express = require('express');
const cors = require('cors')
const parser = require('body-parser');
const dotenv = require('dotenv');
const fetch = require("node-fetch");

const app = express();
const apiKey = process.env.API_KEY;
const apiID = process.env.API_ID;

const data = null

dotenv.config();
app.use(cors());
app.use(parser.json());

const api = fetch('https://trackapi.nutritionix.com/v2/search/item?nix_item_id=513fc9e73fe3ffd40300109f', {
  headers: {
    'X-API-KEY': apiKey,
    'X-APP-ID': apiID,
    'query': "Cookies `n Cream"
  }
})
.then(response => response.json())
.then(data => this.data = data);

app.get('/', function (req, res) {
  res.send("Hello world");
})

app.listen(3000, function () {
  console.log("App running on port 3000");
});
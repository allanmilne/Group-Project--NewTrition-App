const express = require('express');
const cors = require('cors')
const parser = require('body-parser');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

const app = express();
const apiKey = process.env.API_KEY;
const apiID = process.env.API_ID;

let storedData = null

dotenv.config();
app.use(cors());
app.use(parser.json());

// fetch('https://trackapi.nutritionix.com/v2/search/item?nix_item_id=513fc9e73fe3ffd40300109f', {
//   headers: {
//     'x-app-key': apiKey,
//     'x-app-id': apiID
//   }
// })
// .then(response => response.json())
// .then(data => this.storedData = data)
// .then(console.log(this.storedData));

app.get('/', function (req, res) {
  res.send(`Hello!`);
})

app.listen(3000, function () {
  console.log('App running on port 3000');
});
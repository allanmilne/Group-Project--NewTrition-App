const express = require('express');
const cors = require('cors')
const parser = require('body-parser');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

const app = express();
dotenv.config();
  

const apiKey = process.env.API_KEY;
const apiID = process.env.API_ID;

let storedData = null
let query = 'cheese'

app.use(cors());
app.use(parser.json());

console.log(apiKey);

fetch('https://trackapi.nutritionix.com/v2/search/instant?query=' + query, {
  headers: {
    'x-app-key': apiKey,
    'x-app-id': apiID
  }
})
.then(response => response.json())
.then(data => storedData = data)
.then(() => console.log(storedData))
.catch( err => {
console.log(err);
})

app.get('/', function (req, res) {
  res.send(`Hello!`);
})

app.listen(3000, function () {
  console.log('App running on port 3000');
});
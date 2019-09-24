const express = require('express');
const cors = require('cors')
const parser = require('body-parser');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

const app = express();
dotenv.config();

const apiKey = process.env.API_KEY;
const apiID = process.env.API_ID;

app.use(cors());
app.use(parser.json());

// Get Details on Specific Item

app.get('/api/items/specific_item', function(req, res) {
  console.log("req.body:", req.body);
  
  requestBody = JSON.stringify(req.body);
  console.log(requestBody);
  
  fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
  method: 'POST', 
  headers: {
    'x-app-key': apiKey,
    'x-app-id': apiID
  },
  body: requestBody
})
  .then(response => response.json())
  .then(data => res.json(data))
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
  });
});

// Get Many Items

app.get('/api/items', function (req, res) {
  query = ((Object.values(req.query)[0]))
  console.log("req.query:", req.query);
  console.log("query:", query);
  
  fetch('https://trackapi.nutritionix.com/v2/search/instant?query=' + query, {
    headers: {
      'x-app-key': apiKey,
      'x-app-id': apiID
    }
  })
    .then(response => response.json())
    .then(data => res.json(data))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
});

// Listen

app.listen(3000, function () {
  console.log('App running on port 3000');
});
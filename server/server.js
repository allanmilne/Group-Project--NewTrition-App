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

// app.get('/api/items', function (req, res) {
//   let query = 'banana'

//   fetch('https://trackapi.nutritionix.com/v2/search/instant?query=' + query, {
//     headers: {
//       'x-app-key': apiKey,
//       'x-app-id': apiID
//     }
//   })
//     .then(response => response.json())
//     .then(data => res.json(data))
// });

app.get('/api/items', function (req, res) {
  query = ((Object.values(req.query)[0]))

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

app.get('/', function (req, res) {
  res.send(`Hello!`);
})

app.listen(3000, function () {
  console.log('App running on port 3000');
});
const express = require('express');
const cors = require('cors')
const parser = require('body-parser');
const app = express();

app.use(cors());
app.use(parser.json());
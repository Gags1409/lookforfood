/**
 * Setup express server
 * @module app
 *
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const trucks = require('./trucks');

app.set('port', 3000);
app.listen(app.get('port'), function () {
  console.log('Server running on port 3000');
});

// configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// allow origin to work on localhost different ports
app.use((req, res, next) => {
  if (req.headers.origin) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
  }
  res.header('Access-Control-Allow-Headers', 'Origin,Content-Type');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
});

// routes
app.use('/trucks', trucks);

module.exports = app;

const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const model = require('../db/model.js');

const server = express();
const port = 8005;

server.use(morgan('dev'));
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname, '../client/dist')));

// Routes:
// route get for limited number of ads
server.get(/* '[route]', */ (req, res) => {
  console.log('request body', req.body);
  model.getAds((err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

// route get for limited number of similar items

// route get for related searches

// route get for related categories and searches

server.listen(port, () => console.log(`listening on ${port}`));

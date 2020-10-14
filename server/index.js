const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
const router = require('./router');
// const model = require('../db/models/model');

const server = express();
const port = 8005;

server.use(morgan('dev'));
server.use(cors());
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname, '../client/dist')));
server.use('/related', router);

// Routes:
// route get for limited number of ads

// server.get('/related/ads/:id', (req, res) => {
//   model.getAds(req.params.id, (err, results) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(200).send(results);
//     }
//   });
// });

// // route get for limited number of similar items

// server.get('/related/items/:id', (req, res) => {
//   model.getItems(req.params.id, (err, results) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(200).send(results);
//     }
//   });
// });

// // route get for related searches

// server.get('/related/searches/:id', (req, res) => {
//   model.getRelatedSearches(req.params.id, (err, results) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(200).send(results);
//     }
//   });
// });

// // route get for related categories and searches

// server.get('/related/categories/:id', (req, res) => {
//   model.getRelatedCategories(req.params.id, (err, results) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(200).send(results);
//     }
//   });
// });

// // route to check if email is already subscribed

// server.get('/related/subscribe/:email', (req, res) => {
//   model.getOneEmail(req.params.email, (err, results) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(200).send(results);
//     }
//   });
// });

// // route to update subscriptions (if email not already subscribed)

// server.post('/related/subscribe', (req, res) => {
//   model.addEmail(req.body, (err, results) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(200).send(results);
//     }
//   });
// });

server.listen(port, () => console.log(`listening on ${port}`));

// server, routers and database helpers all working (via Postman Testing)

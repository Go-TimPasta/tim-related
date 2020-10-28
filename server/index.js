const newrelic = require('newrelic');
const redis = require('redis');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
const router = require('./router');

const client = redis.createClient();
const server = express();
const port = 8005;

server.use(morgan('dev'));
server.use(cors());
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));
server.use(compression());

const redisMiddleware = (req, res, next) => {
  const key = '__express__' + req.originalUrl || req.url;
  client.get(key, (err, reply) => {
    if (reply) {
      res.send(reply);
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        client.set(key, JSON.stringify(body));
        res.sendResponse(body);
      };
      next();
    }
  });
};

server.use(express.static(path.join(__dirname, '../client/dist')));
server.use('/related', router, redisMiddleware);
server.listen(port, () => console.log(`listening on ${port}`));

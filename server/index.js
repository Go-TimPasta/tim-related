const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const server = express();
const port = 8005;
const router = require('./router');

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../client/dist')));
server.use('/related', router);

server.listen(port, () => console.log(`listening on ${port}`));

module.exports = server;

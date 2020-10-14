const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
const router = require('./router');

const server = express();
const port = 8005;

server.use(morgan('dev'));
server.use(cors());
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname, '../client/dist')));
server.use('/related', router);

server.listen(port, () => console.log(`listening on ${port}`));

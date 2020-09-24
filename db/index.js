const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'related',
});

connection.connect();

module.exports = connection;

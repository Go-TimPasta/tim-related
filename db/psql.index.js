const { Pool } = require('pg');

const pool = new Pool({
  user: 'tkang',
  host: 'localhost',
  database: 'related',
  password: '',
  port: 5432,
});

module.exports = pool;

const db = require('../psql.index');

const products = {
  getAds: (id, callback) => {
    db.query(`SELECT * FROM products WHERE categoryid = ${id} AND ad = true ORDER BY clicks DESC LIMIT 12;`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  getItems: (id, callback) => {
    db.query(`SELECT * FROM products WHERE categoryid = ${id} AND ad = false ORDER BY clicks DESC LIMIT 6;`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  getRelatedSearches: (id, callback) => {
    const howMany = Math.ceil(Math.random() * 12);
    db.query(`SELECT * FROM products WHERE issearch = true AND categoryid = ${id} LIMIT ${howMany};`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  getRelatedCategories: (id, callback) => {
    const howMany = Math.ceil(Math.random() * 8);
    db.query(`SELECT name FROM products WHERE categoryid = ${id} LIMIT ${howMany};`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
};

module.exports = products;

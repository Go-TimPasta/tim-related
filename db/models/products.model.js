const db = require('..');

const products = {
  getAds: (id, callback) => {
    db.query(`SELECT * FROM products WHERE categoryid = ${id} AND ad = true LIMIT 12;`, (err, results) => {
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
};

module.exports = products;

const db = require('..');

const products = {
  getAds: (id, callback) => {
    db.query(`SELECT * FROM relatedProducts WHERE Ad = true AND CategoryId = ${id} LIMIT 12;`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  getItems: (id, callback) => {
    db.query(`SELECT * FROM relatedProducts WHERE Ad = false AND CategoryId = ${id} LIMIT 6;`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
};

module.exports = products;

const db = require('.');

const related = {
  getAds: (callback) => {
    db.query('SELECT * FROM relatedProducts WHERE Ad = true;', (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
};

module.exports = related;

const db = require('.');

const related = {
  getAds: (id, callback) => {
    db.query(`SELECT * FROM relatedProducts WHERE Ad = true AND CategoryId = ${id} ORDER BY RAND() LIMIT 12;`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  getItems: (id, callback) => {
    db.query(`SELECT * FROM relatedProducts WHERE Ad = false AND CategoryId = ${id} ORDER BY RAND() LIMIT 6;`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  getRelatedSearches: (id, callback) => {
    db.query(`SELECT * FROM relatedSearches WHERE IsSearch = true AND CategoryId = ${id} ORDER BY RAND() LIMIT 8;`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  getRelatedCategories: (id, callback) => {
    db.query(`SELECT relatedSearches.Search FROM relatedSearches WHERE CategoryId = ${id} ORDER BY RAND() LIMIT 8;`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  getOneEmail: (email, callback) => {
    db.query(`SELECT * FROM subscribers WHERE Email = '${email}';`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  addEmail: (data, callback) => {
    db.query(`INSERT INTO subscribers (Email) VALUES ('${data.email}')`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
};

module.exports = related;

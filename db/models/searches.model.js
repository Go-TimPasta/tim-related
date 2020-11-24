const db = require('..');

const searches = {
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

module.exports = searches;

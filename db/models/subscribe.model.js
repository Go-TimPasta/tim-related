const db = require('..');

const subscribe = {
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

module.exports = subscribe;

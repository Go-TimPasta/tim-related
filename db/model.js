const db = require('.');

const related = {
  getAds: (callback) => {
    // TODO: add your code here to fetch all students
    db.query('SELECT * FROM students INNER JOIN images ON students.id = images.id', (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
};

module.exports = related;

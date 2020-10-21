const db = require('../mongo.index.js');

module.exports = {
  getAds: (id, callback) => {
    db.Product.find({ categoryId: id })
      .sort({ clicks: -1 })
      .limit(12)
      .exec((err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });
  },

};

const productsModel = require('../../db/models/products.model');

exports.getAds = (req, res) => {
  productsModel.getAds(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};

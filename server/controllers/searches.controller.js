const productsModel = require('../../db/psql.models/products.model');

exports.getRelatedSearches = (req, res) => {
  productsModel.getRelatedSearches(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
};

exports.getRelatedCategories = (req, res) => {
  productsModel.getRelatedCategories(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
};

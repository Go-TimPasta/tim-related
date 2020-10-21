const productsModel = require('../../db/psql.models/products.model');

exports.getItems = (req, res) => {
  productsModel.getItems(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
};

const searchesModel = require('../../db/models/searches.model');

exports.getRelatedSearches = (req, res) => {
  searchesModel.getRelatedSearches(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};

exports.getRelatedCategories = (req, res) => {
  searchesModel.getRelatedCategories(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};

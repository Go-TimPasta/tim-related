const searchesModels = require('../../db/psql.models/searches.model');

exports.getRelatedSearches = (req, res) => {
  searchesModels.getRelatedSearches(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
};

exports.getRelatedCategories = (req, res) => {
  searchesModels.getRelatedCategories(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
};

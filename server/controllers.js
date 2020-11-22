const productsModel = require('../db/psql.models/products.model');
const searchesModels = require('../db/psql.models/searches.model');
const subcscribeModel = require('../db/psql.models/subscribe.model');

module.exports = {
  getAds: (req, res) => {
    productsModel.getAds(req.params.id, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results.rows);
      }
    });
  },

  getItems: (req, res) => {
    productsModel.getItems(req.params.id, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results.rows);
      }
    });
  },

  getRelatedSearches: (req, res) => {
    searchesModels.getRelatedSearches(req.params.id, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results.rows);
      }
    });
  },

  getRelatedCategories: (req, res) => {
    searchesModels.getRelatedCategories(req.params.id, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results.rows);
      }
    });
  },

  getOneEmail: (req, res) => {
    subcscribeModel.getOneEmail(req.params.email, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  addEmail: (req, res) => {
    subcscribeModel.addEmail(req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
};

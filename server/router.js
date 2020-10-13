const router = require('express').Router();
const adsController = require('./controllers/ads.controller');
const itemsController = require('./controllers/items.controller');
const searchesController = require('./controllers/searches.controller');

// route get for limited number of ads
router
  .route('/ads/:id')
  .get(adsController.getAds);

// route get for limited number of items
router
  .route('/items/:id')
  .get(itemsController.getItems);

// route get for related searches
router
  .route('/searches/:id')
  .get(searchesController.getRelatedSearches);

// route get for related categories and searches
router
  .route('/categories/:id')
  .get(searchesController.getRelatedCategories);

module.exports = router;

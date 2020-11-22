const router = require('express').Router();
const controllers = require('./controllers');

router.get('/ads/:id', controllers.getAds);
router.get('/items/:id', controllers.getItems);
router.get('/searches/:id', controllers.getRelatedSearches);
router.get('/categories/:id', controllers.getRelatedCategories);
router.get('/subscribe/:email', controllers.getOneEmail);
router.post('/subscribe', controllers.addEmail);

module.exports = router;

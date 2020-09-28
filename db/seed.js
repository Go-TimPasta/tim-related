const faker = require('faker');
const db = require('./index.js');

const booleans = [true, false];
const freeShippingCondition = [1, 2, 3];
const sale = [null, null, null, null, null, 10, 20, 30, 40, 50];
const pictures = ['http://bit.ly/etsycats1', 'http://bit.ly/etsycats2', 'http://bit.ly/etsycats3', 'http://bit.ly/etsycats4', 'http://bit.ly/etsycats5', 'http://bit.ly/etsycats6', 'http://bit.ly/etsycats7', 'http://bit.ly/etsycats8', 'http://bit.ly/etsycats9', 'http://bit.ly/etsycats10', 'http://bit.ly/etsycats11', 'http://bit.ly/etsycats12', 'http://bit.ly/etsycats13', 'http://bit.ly/etsycats14', 'http://bit.ly/etsycats15', 'http://bit.ly/etsycats16', 'http://bit.ly/etsycats17', 'http://bit.ly/etsycats18', 'http://bit.ly/etsycats19', 'http://bit.ly/etsycats20', 'http://bit.ly/etsycats21', 'http://bit.ly/etsycats22', 'http://bit.ly/etsycats23', 'http://bit.ly/etsycats24', 'http://bit.ly/etsycats25', 'http://bit.ly/etsycats26', 'http://bit.ly/etsycats27', 'http://bit.ly/etsycats28', 'http://bit.ly/etsycats29', 'http://bit.ly/etsycats30', 'http://bit.ly/etsycats31', 'http://bit.ly/etsycats32', 'http://bit.ly/etsycats33', 'http://bit.ly/etsycats34', 'http://bit.ly/etsycats35', 'http://bit.ly/etsycats36', 'http://bit.ly/etsycats37', 'http://bit.ly/etsycats38', 'http://bit.ly/etsycats39', 'http://bit.ly/etsycats40', 'http://bit.ly/etsydog1', 'http://bit.ly/etsydog2', 'http://bit.ly/etsydog3', 'http://bit.ly/etsydog4', 'http://bit.ly/etsydog5', 'http://bit.ly/etsydog6', 'http://bit.ly/etsydog7', 'http://bit.ly/etsydog8', 'http://bit.ly/etsydog9', 'http://bit.ly/etsydog10', 'http://bit.ly/etsydog11', 'http://bit.ly/etsydog12', 'http://bit.ly/etsydog13', 'http://bit.ly/etsydog14', 'http://bit.ly/etsydog15', 'http://bit.ly/etsydog16', 'http://bit.ly/etsydog17', 'http://bit.ly/etsydog18', 'http://bit.ly/etsydog19', 'http://bit.ly/etsydog20', 'http://bit.ly/etsydog21', 'http://bit.ly/etsydog22', 'http://bit.ly/etsydog23', 'http://bit.ly/etsydog24', 'http://bit.ly/etsydog25', 'http://bit.ly/etsydog26', 'http://bit.ly/etsydog27', 'http://bit.ly/etsydog28', 'http://bit.ly/etsydog29', 'http://bit.ly/etsydog30', 'http://bit.ly/etsydog31', 'http://bit.ly/etsydog32', 'http://bit.ly/etsydog33', 'http://bit.ly/etsydog34', 'http://bit.ly/etsydog35', 'http://bit.ly/etsydog36', 'http://bit.ly/etsydog37', 'http://bit.ly/etsydog38', 'http://bit.ly/etsydog39', 'http://bit.ly/etsydog40'];

const createProduct = () => {
  const product = {};
  product.ProductName = faker.commerce.productName();
  product.Imgurl = pictures[Math.floor(Math.random() * 80)];
  product.Shop = faker.lorem.words();
  product.Price = parseFloat(Math.ceil(Math.random() * Math.ceil(1000)));
  product.Sale = sale[Math.floor(Math.random() * 10)];
  product.FreeShipping = freeShippingCondition[Math.floor(Math.random() * 3)];
  product.Ad = booleans[Math.floor(Math.random() * 2)];
  product.CategoryId = Math.ceil(Math.random() * 5);
  return product;
};

const createProducts = () => {
  const productsArr = [];
  for (let i = 0; i < 500; i += 1) {
    productsArr.push(createProduct());
  }
  return productsArr;
};

const insertMockProductData = () => {
  const products = createProducts();
  products.forEach((product) => {
    const queryString = `INSERT INTO relatedProducts (ProductName, Imgurl, Shop, Price, Sale, FreeShipping, Ad, CategoryId) VALUES ('${product.ProductName}', '${product.Imgurl}', '${product.Shop}', ${product.Price}, ${product.Sale}, ${product.FreeShipping}, ${product.Ad}, ${product.CategoryId});`;
    db.query(queryString);
  });
};

insertMockProductData();

const createSearch = () => {
  const search = {};
  search.Search = faker.lorem.words();
  search.Imgurl = pictures[Math.floor(Math.random() * 80)];
  search.IsSearch = booleans[Math.floor(Math.random() * 2)];
  search.CategoryId = Math.ceil(Math.random() * 5);
  return search;
};

const createSearches = () => {
  const searchesArr = [];
  for (let i = 0; i < 500; i += 1) {
    searchesArr.push(createSearch());
  }
  return searchesArr;
};

const insertMockSearches = () => {
  const searches = createSearches();
  searches.forEach((search) => {
    const queryString = `INSERT INTO relatedSearches (Search, Imgurl, IsSearch, CategoryId) VALUES ('${search.Search}', '${search.Imgurl}',${search.IsSearch}, ${search.CategoryId});`;
    db.query(queryString);
  });
};

insertMockSearches();

const createSubscriber = () => {
  const subscriber = {};
  subscriber.Email = faker.internet.exampleEmail();
  return subscriber;
};

const createSubscribers = () => {
  const subscribersArr = [];
  for (let i = 0; i < 100; i += 1) {
    subscribersArr.push(createSubscriber());
  }
  return subscribersArr;
};

const insertMockSubscribers = () => {
  const subscribers = createSubscribers();
  subscribers.forEach((subscriber) => {
    const queryString = `INSERT INTO subscribers (Email) VALUES ('${subscriber.Email}');`;
    db.query(queryString);
  });
};

insertMockSubscribers();

// seed file complete

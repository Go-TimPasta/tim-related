const faker = require('faker');
const db = require('./index.js');

const booleans = [true, false];
const sale = [null, null, null, null, null, 10, 20, 30, 40, 50];

const createProduct = () => {
  const product = {};
  product.ProductName = faker.commerce.productName();
  product.Imgurl = faker.image.animals();
  product.Shop = faker.lorem.words();
  product.Price = parseFloat(Math.ceil(Math.random() * Math.ceil(1000)));
  product.Sale = sale[Math.floor(Math.random() * 10)];
  product.FreeShipping = booleans[Math.floor(Math.random() * 2)];
  product.Ad = booleans[Math.floor(Math.random() * 2)];
  product.CategoryId = Math.ceil(Math.random() * 5);
  return product;
};

const createProducts = () => {
  const productsArr = [];
  for (let i = 0; i < 100; i += 1) {
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
  search.Imgurl = faker.image.animals();
  search.IsSearch = booleans[Math.floor(Math.random() * 2)];
  search.CategoryId = Math.ceil(Math.random() * 5);
  return search;
};

const createSearches = () => {
  const searchesArr = [];
  for (let i = 0; i < 100; i += 1) {
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

const faker = require('faker');
const db = require('./index.js');

const booleans = [true, false];
const freeShippingCondition = [1, 2, 3];
const sale = [null, null, null, null, null, 10, 20, 30, 40, 50];
const pictures = [
  'https://bit.ly/3l356cA',
  'https://bit.ly/3iqXxuO',
  'https://bit.ly/3l0pong',
  'https://bit.ly/3ipLE8n',
  'https://bit.ly/33ozWXh',
  'https://bit.ly/3jqOuLG',
  'https://bit.ly/3nbbbWo',
  'https://bit.ly/2SoZQ6M',
  'https://bit.ly/3iy13DP',
  'https://bit.ly/34ijEyy',
  'https://bit.ly/34nOiGA',
  'https://bit.ly/30tsFU8',
  'https://bit.ly/2GiWgc0',
  'https://bit.ly/33m9UnE',
  'https://bit.ly/2SjUcTN',
  'https://bit.ly/36qiN1d',
  'https://bit.ly/3nee0WQ',
  'https://bit.ly/34hEXjz',
  'https://bit.ly/2GpZr1n',
  'https://bit.ly/30p92ww',
  'https://bit.ly/36qThZO',
  'https://bit.ly/3nctXg9',
  'https://bit.ly/3lcl8kL',
  'https://bit.ly/2SnzPoF',
  'https://bit.ly/36qTg8c',
  'https://bit.ly/30r5V7g',
  'https://bit.ly/33pBvEh',
  'https://bit.ly/3jta4is',
  'https://bit.ly/36r6mlP',
  'https://bit.ly/30tcFla',
  'https://bit.ly/2EUQVXT',
  'https://bit.ly/3jqISkr',
  'https://bit.ly/3l8JOul',
  'https://bit.ly/3l84thZ',
  'https://bit.ly/3iqWgE2',
  'https://bit.ly/3cWeBb0',
  'https://bit.ly/2HSScQn',
  'https://bit.ly/34cX1LC',
  'https://bit.ly/2SirBy7',
  'https://bit.ly/34iYQHd',
  'https://bit.ly/33mYRKM',
  'https://bit.ly/30u7qSf',
  'https://bit.ly/3jr73zc',
  'https://bit.ly/2GbS0LG',
  'https://bit.ly/3cQNWw2',
  'https://bit.ly/2SrCwoZ',
  'https://bit.ly/2Gk6ZTH',
  'https://bit.ly/3cPOG4G',
  'https://bit.ly/3irGVD7',
  'https://bit.ly/3ncCTC7',
  'https://bit.ly/34m5EDM',
  'https://bit.ly/3itHX1o',
  'https://bit.ly/3iq23tl',
  'https://bit.ly/3cS6SdI',
  'https://bit.ly/3jt9a5y',
  'https://bit.ly/33qfZiR',
  'https://bit.ly/3im8xJX',
  'https://bit.ly/2HV0RBX',
  'https://bit.ly/3lcyInV',
  'https://bit.ly/34jxW1F',
  'https://bit.ly/2Ge3f6i',
  'https://bit.ly/3jreoia',
  'https://bit.ly/2F063mU',
  'https://bit.ly/3jqXXmf',
  'https://bit.ly/30v4tAP',
  'https://bit.ly/33m9v4z',
  'https://bit.ly/3jolkgg',
  'https://bit.ly/2Snynmd',
  'https://bit.ly/3cWduYS',
  'https://bit.ly/30pxxJR',
  'https://bit.ly/2Gx0LiS',
  'https://bit.ly/30sHqqa',
  'https://bit.ly/34o7RP0',
  'https://bit.ly/2Syne29',
  'https://bit.ly/2GbRfSQ',
  'https://bit.ly/33ozcS5',
  'https://bit.ly/3jqMAe0',
  'https://bit.ly/30u6A83',
  'https://bit.ly/3cQ9vNp',
  'https://bit.ly/3nfLnIy',
  'https://bit.ly/34n5dJx',
  'https://bit.ly/33osRWI',
  'https://bit.ly/3ireG7o',
  'https://bit.ly/2Sm86EI',
  'https://bit.ly/3imDKwp',
  'https://bit.ly/2SkDMuf',
  'https://bit.ly/3cTab4t',
  'https://bit.ly/30w97ia',
  'https://bit.ly/3cUiehx',
  'https://bit.ly/3cUidtZ',
  'https://bit.ly/33lhP4y',
  'https://bit.ly/36F8lDt',
  'https://bit.ly/34jwSLd',
  'https://bit.ly/33oYzTR',
  'https://bit.ly/2SipvOL',
  'https://bit.ly/2Ge23Qm',
  'https://bit.ly/3irEKiV',
  'https://bit.ly/2HR0p7E',
  'https://bit.ly/3l4Xzu3',
  'https://bit.ly/30srEvE',
];

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

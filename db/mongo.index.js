const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/related', { useNewUrlParser: true, useUnifiedTopology: true });

const { connection } = mongoose;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log('Connected to db');
});

const product = new mongoose.Schema({
  id: Number,
  name: String,
  imgUrl: String,
  shop: String,
  price: Number,
  sale: Number,
  freeShipping: Number,
  categoryId: Number,
  ad: Boolean,
  clicks: Number,
  isSearch: Boolean,
});

const subscribe = new mongoose.Schema({
  email: String,
});

const Product = mongoose.model('Product', product);
const Subscribe = mongoose.model('Subscribe', subscribe);

module.exports = {
  Product,
  Subscribe,
  connection,
};

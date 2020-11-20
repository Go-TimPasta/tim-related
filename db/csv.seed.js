const faker = require('faker');
const fs = require('fs');

const writeProducts = fs.createWriteStream('db/products.csv');
writeProducts.write('id,isSearch,imgUrl,categoryId,name,shop,price,sale,freeShipping,ad,clicks\n', 'utf8');

const booleans = [true, false];
const freeShippingCondition = [1, 2, 3];
const sales = [null, null, null, null, null, 10, 20, 30, 40, 50];

function writeTenMillionProducts(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const isSearch = booleans[Math.floor(Math.random() * 2)];
      const imgUrl = `https://etsyportraits.s3-us-west-1.amazonaws.com/etsy${Math.floor(Math.random() * 1000 + 1)}.jpg`;
      const categoryId = Math.floor(Math.random() * 100 + 1);
      let name;
      let shop = null;
      let price = null;
      let sale = null;
      let freeShipping = null;
      let ad = null;
      const clicks = Math.floor(Math.random() * 1000 + 1);

      if (isSearch) {
        name = faker.lorem.words();
      } else {
        name = faker.commerce.productName();
        shop = faker.lorem.words();
        price = parseFloat(Math.ceil(Math.random() * Math.ceil(1000)));
        sale = sales[Math.floor(Math.random() * 10)];
        freeShipping = freeShippingCondition[Math.floor(Math.random() * 3)];
        ad = booleans[Math.floor(Math.random() * 2)];
      }
      const data = `${id},${isSearch},${imgUrl},${categoryId},${name},${shop},${price},${sale},${freeShipping},${ad},${clicks}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionProducts(writeProducts, 'utf-8', () => {
  writeProducts.end();
});

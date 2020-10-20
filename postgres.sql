DROP DATABASE IF EXISTS related;

CREATE DATABASE related;

\c related;

CREATE TABLE products (
  id int NOT NULL PRIMARY KEY,
  isSearch BOOLEAN,
  imgUrl varchar(255) NOT NULL,
  categoryId int NOT NULL,
  name varchar(255) NOT NULL,
  shop varchar(255),
  price numeric(10, 2),
  sale int,
  freeShipping int,
  ad BOOLEAN,
  clicks int
);

\copy products FROM './db/products.csv' DELIMITER ',' NULL 'null' CSV HEADER;

CREATE INDEX products_cc_idx ON products (categoryid ASC, clicks DESC);
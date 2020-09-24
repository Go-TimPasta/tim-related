/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS related;

CREATE DATABASE related;

USE related;

CREATE TABLE relatedProducts (
  ID int NOT NULL AUTO_INCREMENT,
  Imgurl varchar(255) NOT NULL,
  Picture varchar(255) NOT NULL,
  Shop varchar(255) NOT NULL,
  Price numeric(10, 2) NOT NULL,
  Sale int,
  FreeShipping BOOLEAN,
  CategoryId int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE relatedSearchesAndCategories (
  ID int NOT NULL AUTO_INCREMENT,
  SearchOrCategory varchar(255) NOT NULL,
  Imgurl varchar(250) NOT NULL,
  Search BOOLEAN,
  CategoryId int NOT NULL,
  PRIMARY KEY (ID)
);
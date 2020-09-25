/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS related;

CREATE DATABASE related;

USE related;

CREATE TABLE relatedProducts (
  ID int NOT NULL AUTO_INCREMENT,
  ProductName varchar(255) NOT NULL,
  Imgurl varchar(255) NOT NULL,
  Shop varchar(255) NOT NULL,
  Price numeric(10, 2) NOT NULL,
  Sale int,
  FreeShipping BOOLEAN,
  Ad BOOLEAN NOT NULL,
  CategoryId int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE relatedSearches (
  ID int NOT NULL AUTO_INCREMENT,
  Search varchar(255) NOT NULL,
  Imgurl varchar(250) NOT NULL,
  CategoryId int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE subscribers (
  ID int NOT NULL AUTO_INCREMENT,
  Email varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);
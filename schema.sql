/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS related;

CREATE DATABASE related;

USE related;

CREATE TABLE relatedProducts (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE relatedSearchesAndCategories (
  id int NOT NULL AUTO_INCREMENT,
  imgurl varchar(250) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO students (id, name) VALUES (1, "Alphina");
INSERT INTO students (id, name) VALUES (2, "Alvin");
INSERT INTO students (id, name) VALUES (3, "Jason");
INSERT INTO students (id, name) VALUES (4, "Jeffrey");
INSERT INTO students (id, name) VALUES (5, "Justin");
INSERT INTO students (id, name) VALUES (6, "Nicholas");
INSERT INTO students (id, name) VALUES (7, "Paul");
INSERT INTO students (id, name) VALUES (8, "Tiffany");
INSERT INTO students (id, name) VALUES (9, "Timothy");
INSERT INTO students (id, name) VALUES (10, "Tracy");


INSERT INTO images (id, imgurl) VALUES (1, "https://ca.slack-edge.com/T2SV1LBC6-U01944GJ2Q1-63ae9897f747-512");
INSERT INTO images (id, imgurl) VALUES (2, "https://ca.slack-edge.com/T2SV1LBC6-U018RMK0R3M-c905aaf9db43-512");
INSERT INTO images (id, imgurl) VALUES (3, "https://ca.slack-edge.com/T2SV1LBC6-U018XLZ93RA-69eb2245e800-512");
INSERT INTO images (id, imgurl) VALUES (4, "https://ca.slack-edge.com/T2SV1LBC6-U01944GL2D7-2d6cd71f5940-512");
INSERT INTO images (id, imgurl) VALUES (5, "https://ca.slack-edge.com/T2SV1LBC6-U0165TTRDMY-49c3380fb57d-512");
INSERT INTO images (id, imgurl) VALUES (6, "https://ca.slack-edge.com/T2SV1LBC6-U018JPEEGNS-43069ee1dfb5-512");
INSERT INTO images (id, imgurl) VALUES (7, "https://ca.slack-edge.com/T2SV1LBC6-U018Q4K9SJH-54fdc3290b2b-512");
INSERT INTO images (id, imgurl) VALUES (8, "https://ca.slack-edge.com/T2SV1LBC6-U018JPEFD38-e739b80da0ef-512");
INSERT INTO images (id, imgurl) VALUES (9, "https://ca.slack-edge.com/T2SV1LBC6-U018AP2AAK1-587a2c9f4f97-512");
INSERT INTO images (id, imgurl) VALUES (10, "https://ca.slack-edge.com/T2SV1LBC6-U018RMJRAAF-ff7cb885febf-512");

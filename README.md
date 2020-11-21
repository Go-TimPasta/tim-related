# Etsy-Related
This is an application that was inherited from gEtsy's legacy codebase. The goal of this project was to build a scalable RESTful API service for a retail website and optimize to handle web-scale traffic. The database is scaled to 10 million data points and the server layer is extended to support production-level traffic while maintaining its service-oriented architecture. The service was incrementally optimized through database multicolumn-indexing, horizontal scaling, and Nginx caching to handle a throughput of 10k client requests per second with an average response time of 60ms.

---

Related Products and Searches Repo
## Table of Contents
* [Installation Guide](#installation-guide)
* [Tech Stack](#tech-stack)
* [Database Schema](#database-schema)
* [Routes API](#routes-api)
* [Request and Response Examples](#request-and-response-examples)
* [Note](#note)

---

## Installation Guide

### Navigate to the root directory and run the following in your terminal:

>*Install dependencies*
```
npm install
```
>*Generate 10 million mock product data in CSV*
```
npm run seed
```
>*Import CSV to PostgreSQL database*
```
npm run postgres:import
```
>*Start the server*
```
npm start
```
Open `http://localhost:8005`

---

### Tech Stack
- ExpressJS
- MongoDB
- PostgreSQL

### Database Schema

#### Product
- name
- imgurl
- shop
- price
- sale
- freeShipping
- ad
- categoryId
- clicks

#### Search
- name
- imgurl
- isSearch
- categoryId
- clicks

#### Subsrcibe
- email


### Routes API
#### Product
Routes | HTTP | Description
--- | --- | ---
**/related/ads/:id** | `GET` | Get ads
**/related/items/:id** | `GET` | Get items

#### Search
Routes | HTTP | Description
--- | --- | ---
**/related/searches/:id** | `GET` | Get searches
**/related/categories/:id** | `GET` | Get categories

#### Subscribe
Routes | HTTP | Description
--- | --- | ---
**/related/subscribe/:email** | `GET` | Get an email
**/related/subscribe/** | `POST` | Create a subscription email


### Request and Response Examples

#### API Resources

  - [GET /related/ads/:id](#get-relatedads)
  - [POST /related/subscribe](#post-relatedemail)

#### GET /related/ads/:id

Example: http://localhost:8005/related/ads/1

Response body:
```javascript
[
    {
        "id": 740,
        "name": "Handcrafted Rubber Mouse",
        "imgurl": "https://bit.ly/3jqISkr",
        "shop": "ut magni neque",
        "price": 84,
        "sale": 30,
        "freeShipping": 2,
        "ad": 1,
        "categoryId": 1
    },
    ...
]
```

#### POST /related/subscribe

Example: Create – POST  http://localhost:8005/related/subscribe

Request body:
```javascript
{
    "email": "example@gmail.com"
}
```


### Note
- Datas have no relationship; not dependent on one another
- Parallel computations supported by document-type DB (MongoDB)

#### Release 0
- Documenting first. READ.ME
  - Description
  - Step
  - Schema

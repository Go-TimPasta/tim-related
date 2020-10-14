# Etsy-Related
Related Products and Searches Repo

* [Tech Stack](#tech-stack)
* [Database Schema](#database-schema)
* [Routes API](#routes-api)
* [Request & Response Examples](#request-&-response-examples)
* [Note](#note)
* [Installation Guide](#installation-guide)

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

### Request & Response Examples

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

### Installation Guide
```
git clone
cd
npm install
npm run build
```
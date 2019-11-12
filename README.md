# Surprise-CRUD

It's a package which creates default CRUD options for Your applications. You don't have to care about:
* GET,
* GET By ID, 
* GET with Pagination, 
* POST, 
* PUT By ID, 
* DELETE By ID

It will setup it for You.

## Prerequisites

You will need the following things installed on your computer.
At this moment, this package works only with MongoDB and Express, but soon will be working also with PostgreSQL database and Koa.js framework

* [Node.js](http://nodejs.org/) (with NPM)
* [Express](http://expressjs.com/)
* [MongoDB](http://mongodb.com/)
* [Mongoose](https://mongoosejs.com/)

* Project configured with working `express.Router()`, connection to MongoDB and bodyParser / or just use my example app described below in Examples section.

## Installation

* `npm install --save surprise-crud`

## Setup
After installing package, go to any of Your route file ( or create new one ) and import: 
* `import { crud } from 'surprise-crud'`

OR 

* `const { crud } = require('surprise-crud')`

Your imports should look like: 
```
const express = require('express');
const router = express.Router();
const { crud } = require('surprise-crud')
```

Now we can move to configuration.

## Configuration
After setup, just add this line to Your router file: 

```crud(model, router, options)```

You probably think, what model and options are? So let's start talking about how this CRUD function works.
It needs model as first argument. I'm sure You have a model for Your collection, if not, read it: [Mongoose Models](https://mongoosejs.com/docs/models.html) Just import it and simply replace the first argument with Your model.

As second argument, it takes router, which You already have imported.

As last argument, it takes `options`. **THEY ARE OPTIONAL!** `options` is an object containing: 
```
{
	sort: String (You can pass here any name of value from collection. Default is 'createDate')
	methods: Array[] (You can pass here any methods from available methods mentioned below in Available Methods section. By default all of them are active)
	pathFromCollection: Boolean
}
```

**By default URLs for Your endpoints are /api/your-collection-name/:method, cause pathFromCollection option is set to TRUE**

You can disable it by using setting it to `false` in `options` object and defining endpoint name on Your own as first parameter of app.use() in Your app

Some endpoints examples:
 
For example:
* Collection name: Users
* Example method: Get
* HTTP Method: GET
* Path: /api/users

------------------------

* Collection name: Users
* Example method: GetPagination
* HTTP Method: GET
* Path: /api/users/page/:page/limit/:limit

------------------------

* Collection name: Projects
* Example method: Post
* HTTP Method: POST
* Path: /api/projects

------------------------

* Collection name: Projects
* Example method: Put
* HTPP Method: PUT
* Path: /api/projects/:id

## Available Methods
* Get - /
* GetById - /:id
* GetPagination - /page/:page/limit/:limit
* Post - /
* Put - /:id
* Delete - /:id

## Real code examples

:heavy_exclamation_mark: [Example app](https://github.com/RobertMrowiec/surprise-crud-example-app) :heavy_exclamation_mark:

* Example route file with only Get and GetById method and sort by name: 

```
const express = require('express');
const router = express.Router();
const Currency = require('../models/Currency');
const { crud } = require('surprise-crud');

crud(Currency, router, { methods: ['Get', 'GetById'], sort: 'name' });

module.exports = router;
```
------------------------
* Example route file with custom path ( `pathFromCollection` set to false ) : 

```
const express = require('express');
const router = express.Router();
const Currency = require('../models/Currency');
const { crud } = require('surprise-crud');

crud(Currency, router, { pathFromCollection: false });

module.exports = router;
```
------------------------
* Example route file with every methods ( remember they're default, so if You don't pass any method array, every method will be available ) and default sort: 

```
const express = require('express');
const router = express.Router();
const Users = require('../models/core/Users');
const { crud } = require('surprise-crud');

crud(Users, router);

module.exports = router;
```

## Tests
`Soon`

## Problems
If You get some problems, don't be afraid to contact or create an issue :) 

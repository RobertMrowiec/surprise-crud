# Surprise-CRUD

It's package which creates default CRUD options for Your applications. You don't have to care about:
* GET,
* GET By ID, 
* GET Pagination, 
* POST, 
* PUT By ID, 
* DELETE By ID

It will setup it for You.

## Prerequisites

You will need the following things properly installed on your computer.
At this moment, this package works only with MongoDB and Express, but soon will be also with PostgreSQL database and Koa.js framework
* [Node.js](http://nodejs.org/) (with NPM)
* [Express](http://expressjs.com/)
* [MongoDB](http://mongodb.com/)
* [Mongoose](https://mongoosejs.com/)

* Project configured with working `express.Router()`, connection to MongoDB and bodyParser

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
After setup, just add this line to Your file: 

```crud(model, router, options)```

You probably think, what model and options are? So let's start talking about how this CRUD function works.
It needs model as first parameter. I'm sure You have a model for Your collection, if not, read it: [Mongoose Models](https://mongoosejs.com/docs/models.html)

As second parameter, it takes router, which You already have imported.

As last ( at this moment ) parameter, it takes options. **THEY ARE OPTIONAL!** Options is an object: 
```
{
	sort: String (You can pass here any name of value from collection. Default is 'createDate')
	methods: Array[] (You can pass here any methods from available methods mentioned below in Available Methods section. By default all of them are active)
	pathFromCollection: Boolean
}
```

**By default URL for Your endpoints are /api/your-collection-name/:method, cause pathFromCollection option is set to TRUE**

You can disable it by using option "pathFromCollection: false" and defining name on Your own as first parameter of app.use()

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

## Example
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
```Very Soon```

### Problems
If get some problems, don't be afraid to create an Issue :) 

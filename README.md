# Surprise-CRUD

It's package which creates default CRUD options for Your applications. You don't have to care about:
* GET /,
* GET By ID /:id, 
* GET Pagination /page/:page/limit/:limit, 
* POST /, 
* PUT By ID /:id, 
* DELETE By ID /:id

It will setup it for You.

## Prerequisites

You will need the following things properly installed on your computer.
At this moment, this package works only with MongoDB and Express, but soon will be also with PostgreSQL database and Koa.js framework
* [Node.js](http://nodejs.org/) (with NPM)
* [Express](http://expressjs.com/)
* [MongoDB](http://mongodb.com/)
* [Mongoose](https://mongoosejs.com/)

* Project configured with working express.Router() and connection to MongoDB

## Installation

* `npm install --save surprise-crud`

## Setup
After installing package, go to any of Your route file ( or create new one ) and import: 
* `import { crud } from 'surprise-crud'`
OR 
* `const { crud } = require('surprise-crud')`

Your file should look like: 

* ```shell
	const express = require('express');
	const router = express.Router();
	const { crud } = require('surprise-crud')```

Now we can move to configuration.

## Configuration
After setup, just add this line to Your file: 
* `crud(model, router, options)`

You probably think, what model and options are? So let's start to talk about how crud function works.
It needs model as first parameter. I'm sure You have a model for Your collection, if not, read it: (https://mongoosejs.com/docs/models.html)

As second parameter, it takes router, which You already have.

As last ( at this moment ) parameter, it takes options. Options is an object: 
* ```shell
	{
		sort: String (You can pass here any name of value from collection. Default is 'createDate')
		methods: Array[] (You can pass here any methods from available methods mentioned below. Default are all of them)
	}```

## Available Methods
[] - Get
[] - GetById
[] - GetPagination
[] - Post
[] - Put
[] - DELETE

## Example
* Example route file with only Get and GetById method and sort by name: 

```
const express = require('express');
const router = express.Router();
const Currency = require('../../../models/core/Currency');
const { crud } = require('surprise-crud');

crud(Currency, router, { methods: ['Get', 'GetById'], sort: 'name' });

module.exports = router;
```

* Example route file with every methods ( remember they're default, so if You don't pass any method array, every method will be available ) and default sort: 

```
const express = require('express');
const router = express.Router();
const Currency = require('../../../models/core/Currency');
const { crud } = require('surprise-crud');

crud(Currency, router);

module.exports = router;

```

## Tests
* ```Very Soon```

### Problems
If get some problems, don't be afraid to create an Issue :) 

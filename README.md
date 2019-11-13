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

* Project configured with: 
	* working `express.Router()`, 
	* working connection to MongoDB
	* bodyParser

* or just use my example app described below in Real code examples section.

# Installation

Just simply install package with npm: </br>
`npm install --save surprise-crud`

# Setup
After installing package, go to any of Your route file ( or create new one ) and import package:

```
import { crud } from 'surprise-crud'
```
OR
```
const { crud } = require('surprise-crud')
```

Your imports should now looks like:

```
const express = require('express');
const router = express.Router();
const { crud } = require('surprise-crud')
```

Now we can move to configuration.

# Configuration
After setup, just add this line to Your router file: 

```
crud(model, router, options)
```

You probably think, what model and options are? So let's start talking about how this CRUD function works. <br>

`model` - It's the first argument. I'm sure You have a model for Your collection already, but if not: 
* read [Mongoose Models docs](https://mongoosejs.com/docs/models.html),
* create model, 
* import it to route file
* replace the first argument with Your model.

`router` - Is the second argument which You already have imported from express.Router().

`options` - Is the last argument. **THIS ARGUMENT IS OPTIONAL!** `options` is an object containing: 
```
{
	sort: String (You can pass here any name of key from collection. Default is 'createdAt')
	methods: Array of strings (You can pass here any of available methods mentioned below in Available Methods section. By default all of them are selected)
	pathFromCollection: { type: Boolean, default: true } (described below)
}
```

# Available Methods
* Get - /
* GetById - /:id
* GetPagination - /page/:page/limit/:limit
* Post - /
* Put - /:id
* Delete - /:id

# URLs 
**By default URLs for Your endpoints are `/api/your-collection-name/:method`, cause pathFromCollection option is set to TRUE**

You can disable it by setting 
```
{
	pathFromCollection: false
}
```
in `options` object and defining endpoint name on Your own as first parameter of `app.use()` in Your app

## Endpoints name examples

------------------------

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

------------------------

# Real code examples

:heavy_exclamation_mark: [Example app](https://github.com/RobertMrowiec/surprise-crud-example-app) :heavy_exclamation_mark:

* Example route file with only Get and GetById method and sort by name: 

_routes/currencies/route.js_

```
const express = require('express');
const router = express.Router();
const Currency = require('../models/Currency');
const { crud } = require('surprise-crud');

crud(Currency, router, { methods: ['Get', 'GetById'], sort: 'name' });

module.exports = router;
```
------------------------
* Example route file with custom route name ( `pathFromCollection` set to false ) : 

_routes/users/route.js_

```
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { crud } = require('surprise-crud');

crud(User, router, { pathFromCollection: false });

module.exports = router;
```

and You have to define route name in Your app.use():

_app.js_

```
app.use('/superusers', require('./routes/users/route'))
```
------------------------
* Example route file with every methods ( remember they're default, so if You don't pass any method array, every method will be available ) and default sort: 

_routes/users/route.js_

```
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { crud } = require('surprise-crud');

crud(User, router);

module.exports = router;
```
## Tests
`Soon`

## Problems
If You get some problems, don't be afraid to contact or create an issue :) 

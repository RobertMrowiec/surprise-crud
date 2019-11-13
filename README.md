# Surprise-CRUD

:blue_book: [Documentation page](https://robertmrowiec.github.io/surprise-crud-page) :orange_book:

It's a package which creates default CRUD options for Your applications. You don't have to care about:
* GET,
* GET By ID, 
* GET with Pagination, 
* POST, 
* PUT By ID, 
* DELETE By ID

It will setup it for You.

You can also check out my [surprisejs-cors](https://www.npmjs.com/package/surprisejs-cors) library, which setup cors in Your express app very quickly, with small amount of work from Your side.

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

* or just use my example app from `Configuration with examples` section.

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

Now we can move to configuration.

# Configuration with examples
In documentation & example app

:heavy_exclamation_mark: [Example app](https://github.com/RobertMrowiec/surprise-crud-example-app) :heavy_exclamation_mark:
:blue_book: [Documentation page](https://robertmrowiec.github.io/surprise-crud-page) :orange_book:

## Tests
`Soon`

## Problems
If You get some problems, don't be afraid to contact or create an issue :) 

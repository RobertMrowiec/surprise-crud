const { defaultResponse, getFilter } = require('./common')

exports.crud = function (
	collection,
	router,
	options = {}
) {
	if (!options || !options.methods) options.methods = ['Get', 'GetById', 'Pagination', 'Post', 'Put', 'Delete']

	console.log(options);
	if (!options.sort) options.sort = '-createDate'

	if (options) {
		return options.methods.map(method => {
	
			switch (method) {
				case 'Get':
					return router.get('/', defaultResponse(200, () => collection.find().sort(options.sort)))
				case 'GetById':
					return router.get('/:id', defaultResponse(200, req => collection.findById(req.params.id)))
				case 'Pagination':
					return router.get('/page/:page/limit/:limit', defaultResponse(200, req => {
						req.query.sort = options.sort
						return pagination(req, collection)
					}))
				case 'Post':
					return router.post('/', defaultResponse(201, req => new collection(req.body).save()))
				case 'Put':
					return router.put('/:id', defaultResponse(200, req => collection.findByIdAndUpdate(req.params.id, req.body, { new: true })))
				case 'Delete':
					return router.delete('/:id', defaultResponse(200, req => collection.findByIdAndRemove(req.params.id)))
			}
		})
	}
}

const pagination = ( req, collection ) => {
	const page = req.params.page;
	const sort = req.query.sort.toString()
	const filter = getFilter(req.query)
	const limit = +req.params.limit;

	return Promise.all([
		collection.countDocuments(filter),
		collection.find(filter)
			.sort(sort)
			.skip(limit * (page - 1))
			.limit(limit)
	]).then(([total, results]) => ({ 
		total,
		pages: Math.ceil(total / limit),
		results,
	}))
}
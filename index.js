const { defaultResponse, getFilter } = require('./common')

exports.crud = function (collection, router) {
	router.get('/', defaultResponse(200, () => collection.find().exec()))

				.get('/:id', defaultResponse(200, req => collection.findById(req.params.id).exec()))

				.get('/page/:page/limit/:limit', defaultResponse(200, req => {
					const page = req.params.page;
					const sort = req.query.sort ? req.query.sort.toString() : '-createDate'
					const filter = getFilter(req.query)
					const limit = +req.params.limit;

					return Promise.all([
						collection.countDocuments(filter).exec(),
						collection.find(filter)
							.sort(sort)
							.skip(limit * (page - 1))
							.limit(limit)
							.exec()
					]).then(([total, result]) => ({ total, result }))
				}))

				.post('/', defaultResponse(201, req => new collection(req.body).save()))

				.put('/:id', defaultResponse(200, req => collection.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec()))

				.delete('/:id', defaultResponse(200, req => collection.findByIdAndRemove(req.params.id).exec()))
}
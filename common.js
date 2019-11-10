const ObjectId = require('mongoose').mongo.ObjectId
const isId = require('mongoose').Types.ObjectId.isValid

module.exports.getFilter = getFilter;
	function getFilter(query) {
		if (query.filter === '' && query.filterBy === '') return {}

		if (isId(query.filterBy)) {
			return { [query.filter]: ObjectId(query.filterBy) }
		}

		if (query.filterBy === 'true' || query.filterBy === 'false'){
			query.filterBy = query.filterBy === 'true' ? true : false
			return { [query.filter]: query.filterBy }
		}

		if (!isNaN(query.filterBy) && !query.filter.includes('phone')) {
			return { [query.filter]: +query.filterBy }
		}

		return { [query.filter]: query.filterBy }
	}

module.exports.defaultResponse = defaultResponse
	function defaultResponse(status, func) {
		return (req, res) => func(req, res)
			.then(x => res.status(status).json(x))
			.catch(err => {
				if (err instanceof Error || err instanceof TypeError) {
					console.log(err);
					err = err.message;
				}
				res.status(400).json({ message: err });
			});
	}
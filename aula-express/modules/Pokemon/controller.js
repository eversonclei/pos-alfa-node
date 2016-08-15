var Model = require('./model');

const Controller = {
	find : function (callback) {
		Model.find({}, callback);
	},
	
	create: function(data, callback){
		Model.create(data, callback);
	},
	
	findOne: (query, callback) => {
		Model.findOne(query, callback);
	},
	
	update: (query, data, callback) => {
		Model.update(query, data, callback);
	},
	
	delete: (query, callback) => {
		Model.remove(query, callback);
	}
}

module.exports = Controller;

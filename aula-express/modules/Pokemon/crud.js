var Controller= require('./controller');

const CRUD = {
	create : (req, res) =>   {
		var callback = function (err, data) {
			if (err)
				return console.log('ERRO: ', err);
			res.json(data);
		};
		Controller.create(req.body, callback);		
	},

	find : (req, res) => {
		var query = {};		
		console.log(1);		
		var callback = function (err, data) {
			if (err)
				return console.log('ERRO: ', err);
			res.json(data);
		};		
		Controller.find(query, callback);		
	},

	findOne : (req, res) => {		
		var query = {
			_id : req.params.id
		};		
		var callback = function (err, data) {
		  if (err) return console.log('ERRO: ', err);
			 res.json(data);
		};
		Controller.findOne(query, callback);		
	},

	update : (req, res) => {		
		Controller.update({_id : req.params.id
		}, req.body, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			   res.json(data);
		})
	},

	remove : (req, res) => {		
		Controller.remove({_id : req.params.id
		}, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			   res.json(data);
		});		
	}
};

module.exports = CRUD;

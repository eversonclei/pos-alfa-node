var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
	name : String,
	attack : Number,
	defense : Number
};

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

router.get('/', function (req, res, next) {	
	var query = {};
	PokemonModel.find(query, function (err, data) {
		if (err) return console.log('ERRO: ', err);
		res.json(data);
	});
});

router.get('/:id', function (req, res, next) {	
	var query = {_id : req.params.id};
	PokemonModel.findOne(query, function (err, data) {
		if (err) return console.log('ERRO: ', err);
		res.json(data);
	});
});

router.delete('/:id', function (req, res, next) {	
	let query = {_id : req.params.id};
	PokemonModel.remove(query, function (err, data) {
		if (err) return console.log('ERRO: ', err);
		res.json(data);
	});
	
});
	
router.put('/:id', function (req, res, next) {	
	let query = {_id : req.params.id};
	let mod = req.body;
	PokemonModel.update(query, mod, function (err, data) {
		if (err) return console.log('ERRO: ', err);
		res.json(data);
	});
});

router.post('/', function (req, res, next) {	
	let query = req.body;
	PokemonModel.create(query, function (err, data) {
		if (err) return console.log('ERRO: ', err);
		res.json(data);
	});
});

module.exports = router;

require('./../../../db/config.test');
const assert = require('assert')
const Controller = require('./../controller');

describe('Pokemon Module', () => {
	describe('#create', () => {		
		it('Quando cadastrar um novo pokemon', function(done) {			
			let mod = {
					name:'TESTE',
					attack:900,
					defense:8001
			};			
			let callback = (err, data) => {
				assert.equal('object', typeof data._id ,  'O retorno deverá ser o mesmo objeto passado como referência!')
				done();
			}			
			Controller.create(mod, callback);			
		})		
	})
	
	describe('#find', () => {		
		it('Quando localizar todos os pokemons', function(done) {			
			let callback = (err, data) => {
				assert.equal(true,  (function(){return data.length > 0}()) ,  'Registros > 0')
				done();
			}			
			Controller.find(callback);			
		})		
	})
	
	describe('#findOne', () => {		
		it('Quando localizar um pokemon por Id', function(done) {			
			let query = {_id : "53jf6d68e421ef1d5e099178"};			
			let callback = (err, data) => {
				assert.equal(data._id, query._id , 'Os IDs são iguais!')
				done();
			}			
			Controller.findOne(query, callback);			
		})
		
	})
	
	describe('#update', () => {		
		it('Quando alterar um pokemon', function(done) {			
			let callback = (err, data) => {
				assert.equal(data.ok, 1,  'OK = 1')
				done();
			}			            
			Controller.update({_id:"53bm3d68e577ef1c2e099033"},  
						   	  {name:"NOVO TESTE - ALTERANDO CAMPO NOME"}, callback);			
		})		
	})
	
	describe('#delete', () => {		
		it('Quando excluir um novo pokemon', function(done) {			
			let callback = (err, data) => {
				assert.equal(data.result.ok, 1, 'OK = 1')
				done();
			}			
			Controller.delete({_id : "53bm3d68e577ef1c2e099033"}, callback);			
		})		
	})	
})
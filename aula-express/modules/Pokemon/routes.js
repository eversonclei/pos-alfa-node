var express 	= require('express');
var CRUD 	= require('./crud');
var router = express.Router();

router.get('/',CRUD.find);
router.post('/', CRUD.create);

module.exports = router;

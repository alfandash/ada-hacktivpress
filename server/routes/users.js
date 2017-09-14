var express = require('express');
var router = express.Router();
// require users controller 
var userController = require('../controllers/user')

/* GET users listing. */
router.post('/', userController.create);

module.exports = router;

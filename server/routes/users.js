var express = require('express');
var router = express.Router();
// require users controller 
var userController = require('../controllers/user')

/* GET users listing. */
router.post('/', userController.create)
router.post('/signin', userController.signin)

module.exports = router;

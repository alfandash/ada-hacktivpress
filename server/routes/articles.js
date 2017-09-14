var express = require('express');
var router = express.Router();
// require article controller
var articleController = require('../controllers/article')
// require helper jwt to decoded
var jwt = require('../helper/jwt')

router.get('/', articleController.findAll)
router.get('/:id')
router.post('/', jwt.tokenDecoded, articleController.create)

module.exports = router;
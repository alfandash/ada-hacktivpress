var express = require('express');
var router = express.Router();
// require article controller
var articleController = require('../controllers/article')
// require helper jwt to decoded
var jwt = require('../helper/jwt')

router.get('/', articleController.findAll)
router.get('/:id', articleController.findByIdArticle)
router.get('/author/:id', articleController.findByAuthor)
router.get('/category/:id', articleController.findByCategory)
router.post('/', jwt.tokenDecoded, articleController.create)
router.put('/:id', jwt.tokenDecoded, articleController.update)
router.delete('/:id', jwt.tokenDecoded, articleController.destroy)

module.exports = router;
'use strict'

// require model
const Article = require('../models/articles')

exports.findAll = (req, res) => {
  var query = {}
  Article.find(query)
  .populate('author')
  .then((documents) => {
    res.send(documents)
  })
  .catch((error) => {
    res.send(error)
  })
}
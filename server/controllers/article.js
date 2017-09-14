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

exports.findByIdArticle = (req, res) => {
  var query = {
    '_id': `${req.params.id}`
  }
  Article.find(query)
  .populate('author')
  .then(( document ) => {
    res.send(document[0])
  })
  .catch(( error ) => {
    res.send(error)
  })
}

exports.findByAuthor = (req, res) => {
  var query = {
    'author': `${req.params.id}`
  }
  Article.find(query)
  .populate('author')
  .then(( documents ) => {
    res.send(documents)
  })
  .catch(( error ) => {
    res.send(error)
  })
}

exports.findByCategory = (req, res) => {
  var query = {
    'category': `${req.params.id}`
  }
  Article.find(query)
  .populate('author')
  .then(( documents ) => {
    res.send(documents)
  })
  .catch(( error ) => {
    res.send(error)
  })
}

exports.create = (req, res) => {
  let user = req.locals
  let add = {
    title: `${req.body.title}`,
    content: `${req.body.content}`,
    category: `${req.body.category}`,
    author: `${user.id}`
  }
  Article.create(add)
  .then(( response ) => {
    res.send( response )
  })
  .catch(( error ) => {
    res.send( error )
  })
}

exports.update = (req, res) => {
  let user = req.locals
  let query = {
    '_id': `${req.params.id}`
  }
  let update = {
    title: `${req.body.title}`,
    content: `${req.body.content}`,
    category: `${req.body.category}`,
    author: `${user.id}`
  }
  Article.update(query, {$set: update})
  .then(( response ) => {
    res.send( response )
  })
  .catch(( error ) => {
    res.send( error )
  })
}

exports.destroy = (req, res) => {
  let query = {
    '_id': `${req.params.id}`
  }
  Article.deleteOne(query)
  .then((result) => {
    res.send(result)
  })
  .catch((error) => {
    res.send(error)
  })
}
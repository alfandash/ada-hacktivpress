'use strict'

const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true},
  category: { type: String, required: true}
  author: [{ type: Schema.ObjectId, ref: 'user' }]
})

var Articles = mongoose.Schema('article', articleSchema)

module.exports = Articles
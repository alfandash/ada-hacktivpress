'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true},
  category: { type: String, required: true},
  author: [{ type: Schema.ObjectId, ref: 'user' }]
})

var Articles = mongoose.model('article', articleSchema)

module.exports = Articles


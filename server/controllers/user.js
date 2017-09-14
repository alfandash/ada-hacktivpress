'use strict'

// require model
const User = require('../models/users')
// require helper to generate random secret
const generateSecret = require('../helper/generateSecret')
// require jwt gelper
const jwt = require('../helper/jwt')
// require convert pass
const convertPass = require('../helper/convertPass')


exports.create = (req, res) => {
  var secretLength = process.env.SECRET_LENGTH
  generateSecret(secretLength, (secretKey) => {
    var rawPass = {
      pass: `${req.body.password}`,
      secret: `${secretKey}`
    }
    convertPass(rawPass, (hashPassword) => {
      var add = {
        username: `${req.body.username}`,
        password: `${hashPassword}`,
        email: `${req.body.email}`,
        secret: `${secretKey}`
      }
      User.create(add)
        .then((response) => {
          var success = {
            "success": {},
            "message": `Register username ${response.username} berhasil`
          }
          res.send(success)
        })
        .catch((error) => {
          res.send(error)
        })
    })
  })
} 
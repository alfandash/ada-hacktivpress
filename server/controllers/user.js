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
  generateSecret(process.env.SECRET_LENGTH, (secretKey) => {
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

exports.signin = (req, res) => {
  let query = {email: `${req.body.email.toLowerCase()}`}
  User.find(query)
  .then((document) => {
    var rawPass = {
      pass: req.body.password,
      secret: document[0].secret
    }
    convertPass(rawPass, (hashPassword) => {
      if (hashPassword === document[0].password) {
        var payload = {
          id: `${document[0]._id}`,
          username: `${document[0].username}`,
          email: `${document[0].email}`
        }
        jwt.login(payload, (token) => {
          var success = {
            'success' : {},
            'message' : 'Login success',
            'token' : token,
            'username': payload.username,
            'email' : payload.email,
            'id' : payload.id
          }
          res.send(success)
        })
      } else {
        var error = {
          "errors": {},
          "_message": "Password wrong",
          "message": "Password wrong",
          "name": "ValidationError"
        }
        res.send(error)
      }
    })
  })
  .catch((error) => {
    var error = {
      'errors': {},
      '_message': `Cannot find email ${req.body.email}`,
      'message': `Cannot find email ${req.body.email}`,
      'name': 'ValidationError'
    }
    res.send(error)
  })
}
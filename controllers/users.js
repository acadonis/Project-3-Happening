const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')


//or create
function registerRoute(req, res) {
  User.create(req.body)
    .then(() => res.json({ message: 'Registration successful' }))

}

function loginRoute(req, res) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.sendStatus(401)
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      res.json({ message: `Welcome back ${user.name}!`, token })
    })

}

function userIndexRoute(req, res) {
  User.find(req.query)
    .then(users => res.json(users))

}

function userShowRoute(req, res) {
  User.findById(req.params.id)
    .then(user => {
      if(!user) return res.sendStatus(404)

      return res.json(user)
    })

}

function userUpdateRoute(req, res) {
  User.findById(req.params.id)
    .then(user => {
      if(!user) return res.sendStatus(404)
      return user.set(req.body)
    })
    .then(user => user.save())
    .then(user => res.json(user))

}

function userDeleteRoute(req, res) {
  User.findById(req.params.id)
    .then(user => {
      if(!user) return res.sendStatus(404)
      return user.remove()
        .then(() => res.sendStatus(204))
    })
}

module.exports = {
  register: registerRoute,
  login: loginRoute,
  userIndex: userIndexRoute,
  userShow: userShowRoute,
  userUpdate: userUpdateRoute,
  userDelete: userDeleteRoute
}

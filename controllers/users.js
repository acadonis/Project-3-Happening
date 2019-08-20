const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')


//or create
function registerRoute(req, res, next) {
  User.create(req.body)
    .then(() => res.json({ message: 'Registration successful' }))
    .catch(next)

}

function userFollowRoute (req, res, next) {
  req.currentUser.following.addToSet(req.params.id) // push with no duplicates...

  req.currentUser.save()
    .then(user => res.json(user))
    .catch(next)
}

function loginRoute(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.sendStatus(401)
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      res.json({ message: `Welcome back ${user.name}!`, token })
    })
    .catch(next)

}

function userIndexRoute(req, res, next) {
  User.find(req.query)
    .then(users => res.json(users))
    .catch(next)

}

function userShowRoute(req, res, next) {
  User.findById(req.params.id)
    .populate({ path: 'happenings', select: 'name photo', model: 'Happening'})
    .populate({ path: 'following', select: 'name photo', model: 'User'})
    .then(user => {
      if(!user) return res.sendStatus(404)

      return res.json(user)
    })
    .catch(next)

}

function userUpdateRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => {
      if(!user) return res.sendStatus(404)
      return user.set(req.body)
    })
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next)

}

function userDeleteRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => {
      if(!user) return res.sendStatus(404)
      return user.remove()
        .then(() => res.sendStatus(204))
        .catch(next)
    })
}

module.exports = {
  register: registerRoute,
  login: loginRoute,
  userIndex: userIndexRoute,
  userShow: userShowRoute,
  userUpdate: userUpdateRoute,
  userDelete: userDeleteRoute,
  userFollow: userFollowRoute
}

const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const User = require('../models/User')

function secureRoute(req, res, next) {
  // if there's no Authorization header OR it doesn't stat with Bearer
  if(!req.headers.authorization ||
  !req.headers.authorization.startsWith('Bearer ')) {
    // send back a 401 response
    return res.sendStatus(401)
  }
  // get the token from the header(i.e remove 'Bearer')
  const token = req.headers.authorization.replace('Bearer ', '')
  // validate the token with the same secret we used to create the token
  jwt.verify(token, secret, (err, payload) => {
    if (err) res.sendStatus(401) // if it's invalid send a 401 response

    User.findById(payload.sub) // Attempt to find the user using the sub from their token.
      .then(user => {
        if (!user) return res.sendStatus(401)

        // Add the current user to the request object. This is a property we've created for this purpose.
        req.currentUser = user
        next() // otherwise let the request go through
      })
  })
}

module.exports = secureRoute

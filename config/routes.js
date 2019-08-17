const router = require('express').Router()
const happeningsController = require('../controllers/happenings')
const usersController = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')

// ### Happenings Routes ###

// ## Basic Routes ##

router.route('/happenings')
  .get(happeningsController.index)
  .post(secureRoute, happeningsController.create)

router.route('/happenings/:id')
  .get(happeningsController.show)
  .put(secureRoute, happeningsController.update)
  .delete(secureRoute, happeningsController.delete)

// ## Comment Routes ##

router.post('/happenings/:id/comments', secureRoute, happeningsController.commentCreate)
router.delete('/happenings/:id/comments/:commentId', secureRoute, happeningsController.commentDelete)

//### User Routes ###

router.get('/users', usersController.userIndex)
router.post('/register', usersController.register)
router.post('/login', usersController.login)

router.route('/users/:id')
  .get(usersController.userShow)
  .put(usersController.userUpdate)
  .delete(usersController.userDelete)

module.exports = router

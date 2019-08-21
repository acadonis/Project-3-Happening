const router = require('express').Router()
const happeningsController = require('../controllers/happenings')
const usersController = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')

// #### Happenings Routes ####

// ## Basic Routes ##

router.route('/happenings')
  .get(happeningsController.index)
  .post(secureRoute, happeningsController.create)

router.route('/happenings/:id')
  .get(happeningsController.show)
  .put(secureRoute, happeningsController.update)
  .delete(secureRoute, happeningsController.delete)

router.route('/happenings/limit/:n')
  .get(happeningsController.index)

// ## Comment Routes ##

router.post('/happenings/:id/comments', secureRoute, happeningsController.commentCreate)
router.delete('/happenings/:id/comments/:commentId', secureRoute, happeningsController.commentDelete)

// ## Attend Routes ##

router.put('/happenings/:id/attend', secureRoute, happeningsController.attend)

//#### User Routes ####

router.get('/users', usersController.userIndex)
router.post('/register', usersController.register)
router.post('/login', usersController.login)

router.route('/users/:id')
  .get(usersController.userShow)
  .put(usersController.userUpdate)
  .delete(usersController.userDelete)

router.put('/users/:id/follow', secureRoute, usersController.userFollow)
router.put('/users/:id/unfollow', secureRoute, usersController.userUnfollow)

router.get('/users/:id/followingAll', secureRoute, usersController.followingAll)

module.exports = router

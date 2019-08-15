const router = require('express').Router()
const happeningsController = require('../controllers/happenings')
const usersController = require('../controllers/users')
// const secureRoute = require('../lib/secureRoute')

// ## Happenings Routes

router.route('/happenings')
  .get(happeningsController.index)
  .post(happeningsController.create)

router.route('/happenings/:id')
  .get(happeningsController.show)
  .put(happeningsController.update)
  .delete(happeningsController.delete)

//## User Routes

router.get('/users', usersController.userIndex)
router.post('/register', usersController.register)
router.post('/login', usersController.login)

router.route('/users/:id')
  .get(usersController.userShow)
  .push(usersController.userUpdate)
  .delete(usersController.userDelete)

module.exports = router

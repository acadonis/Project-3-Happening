const router = require('express').Router()
const usersController = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')

router.post('/register', usersController.register)
router.post('/login', usersController.login)

router.get('/users', usersController.userIndex)

router.route('/users/:id')
  .get(usersController.userShow)
  .push(usersController.userUpdate)
  .delete(usersController.userDelete)

module.exports = router

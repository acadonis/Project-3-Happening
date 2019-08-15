const router = require('express').Router()
const happeningsController = require('../controllers/happenings')

router.route('/happenings')
  .get(happeningsController.index)
  .post(happeningsController.create)

router.route('/happenings/:id')
  .get(happeningsController.show)
  .put(happeningsController.update)
  .delete(happeningsController.delete)

module.exports = router

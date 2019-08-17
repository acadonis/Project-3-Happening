const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const Happening = require('../models/Happening')
const User = require('../models/User')
const happeningData = require('./data/happeningData')
const usersData = require('./data/usersData')
const { dbURI } = require('../config/environment')

// I've changed the seeds so that they seed all the happenings with users. However this breaks the finally function. After you seed, you need to use control c to disconnect the database. Sorry for the incovenience.
let retrieved = null

mongoose.connect(dbURI, { useNewUrlParser: true })
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => Happening.create(happeningData))
  .then(happenings => retrieved = happenings)
  .then(() => User.create(usersData))
  .then(user => retrieved.forEach(happening => {
    happening.set({ user: user[0]._id })
    happening.save()
  }))
  .then(() => console.log('Successfully seeded!'))
  .catch((err) => console.log(err))
  // .finally(() => mongoose.connection.close())

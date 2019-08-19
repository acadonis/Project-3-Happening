const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const Happening = require('../models/Happening')
const User = require('../models/User')
const happeningData = require('./data/happeningData')
const usersData = require('./data/usersData')
const { dbURI } = require('../config/environment')

/*
- I've changed the seeds so that they seed all the happenings with users. However this breaks the finally function. After you seed, you need to use control c to disconnect the database. Sorry for the incovenience.
- I've also left the original code commented out below if want to use that instead.
*/
let retrieved = null

mongoose.connect(dbURI, { useNewUrlParser: true })
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => Happening.create(happeningData))
  .then(happenings => retrieved = happenings)
  .then(() => User.create(usersData))
  .then(users => retrieved.forEach(happening => {
    happening.set({ user: users[0]._id })
    happening.attendees.push(...users)
    const commentContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    happening.comments.push(
      {
        content: commentContent,
        user: users[0]
      },
      {
        content: commentContent,
        user: users[1]
      },
    )
    happening.save()
  }))
  .then(() => console.log('Successfully seeded!'))
  .catch((err) => console.log(err))
  // .finally(() => mongoose.connection.close())

// mongoose.connect(dbURI, { useNewUrlParser: true })
//   .then(() => mongoose.connection.db.dropDatabase())
//   .then(() => Happening.create(happeningData))
//   .then(() => User.create(usersData))
//   .then(() => console.log('Successfully seeded!'))
//   .catch((err) => console.log(err))
//   .finally(() => mongoose.connection.close())

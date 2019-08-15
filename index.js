const express = require('express')
const mongoose = require('mongoose')
//Not yet using the below
// mongoose.plugin(require('mongoose-unique-validator'), {
//   message: 'Please choose another {PATH}'
// })

const bodyParser = require('body-parser')

const router = require('./config/routes')
//Not yet using the below
// const queryHandler = require('./lib/queryHandler')
// const errorHandler = require('./lib/errorHandler')
const { dbURI } = require('./config/environment')

const app = express()
mongoose.connect(dbURI, { useNewUrlParser: true })
app.use(bodyParser.json())
app.listen(4000, () => console.log('Mind the gap on port 4000'))

//Not using the below yet. This is needed once we set up testing
// module.exports = app

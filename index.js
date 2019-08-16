const express = require('express')
const mongoose = require('mongoose')
//Not yet using the below
// mongoose.plugin(require('mongoose-unique-validator'), {
//   message: 'Please choose another {PATH}'
// })

const bodyParser = require('body-parser')
//Not yet using the below
const router = require('./config/routes')
// const queryHandler = require('./lib/queryHandler')
// const errorHandler = require('./lib/errorHandler')
const { dbURI } = require('./config/environment')
const app = express()
//Not yet using the below
// app.use(queryHandler)
// app.use(errorHandler)
app.use(bodyParser.json())


app.use(router)
mongoose.connect(dbURI, { useNewUrlParser: true })

app.listen(4000, () => console.log('Listening to port 4000'))

//Not using the below yet. This is needed once we set up testing
// module.exports = app

module.exports = app // Export the app for testing

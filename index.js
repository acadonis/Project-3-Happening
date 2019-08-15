const express = require('express')
const mongoose = require('mongoose')
//Not yet using the below
// mongoose.plugin(require('mongoose-unique-validator'), {
//   message: 'Please choose another {PATH}'
// })

const bodyParser = require('body-parser')

//Not yet using the below
// const router = require('./config/routes')
// const queryHandler = require('./lib/queryHandler')
// const errorHandler = require('./lib/errorHandler')
const { dbURI } = require('./config/environment')

//Not yet using the below
// app.use(queryHandler)
// app.use('/api', router)
// app.use(errorHandler)

const app = express()
mongoose.connect(dbURI, { useNewUrlParser: true })
app.use(bodyParser.json())
app.listen(4000, () => console.log('Mind the gap on port 4000'))

//Not using the below yet. This is needed once we set up testing
// module.exports = app

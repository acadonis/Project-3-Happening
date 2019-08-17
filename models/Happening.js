const mongoose = require('mongoose')

const happeningSchema = new mongoose.Schema({
  name: {type: String, required: 'Please provide a {PATH}'},
  city: {type: String, required: 'Please provide a {PATH}'},
  lat: {type: Number},
  lon: {type: Number},
  local_date: {type: String, required: 'YYYY-MM-DD'},
  local_time: {type: String},
  time: {type: Number, required: 'Please provide a {PATH}'},
  description: {type: String, required: 'Please provide a {PATH}'},
  photo: {type: String, required: 'Please provide a {PATH}'},
  venue: {type: String, required: 'Please provide a {PATH}'},
  attendance_count: {type: Number},
  event_hosts: {type: [String]},
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Happening', happeningSchema)

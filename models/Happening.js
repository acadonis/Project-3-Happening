const mongoose = require('mongoose')

const happeningSchema = new mongoose.Schema({
  name: {type: String, required: 'Please provide a {PATH}'},
  city: {type: String, required: 'Please provide a {PATH}'},
  lat: {type: Number, required: 'Please'},
  lon: {type: Number, required: 'Please provide a {PATH}'},
  local_date: {type: String, required: 'YYYY-MM-DD'},
  local_time: {type: String, required: 'hh:mm in 24'},
  time: {type: Number, required: 'Please provide a {PATH}'},
  description: {type: String, required: 'Please provide a {PATH}'},
  photo: {type: String, required: 'Please provide a {PATH}'},
  venue: {type: String, required: 'Please provide a {PATH}'},
  attendance_count: {type: Number, required: 'Please provide a {PATH}'},
  event_hosts: {type: [String], required: 'Please provide a {PATH}'},
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Happening', happeningSchema)

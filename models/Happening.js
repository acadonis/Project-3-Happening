const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  content: {type: String, required: 'Please provide a {PATH}'},
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const happeningSchema = new mongoose.Schema({

  name: { type: String, required: 'Please provide a {PATH}' },
  city: { type: String, required: 'Please provide a {PATH}' },
  lat: { type: Number },
  lon: { type: Number },
  local_date: { type: String, required: 'YYYY-MM-DD' },
  local_time: { type: String, required: 'Please provide a {PATH}'},
  time: { type: Number},
  description: { type: String, required: 'Please provide a {PATH}' },
  photo: { type: String, required: 'Please provide a {PATH}' },
  venue: { type: String, required: 'Please provide a {PATH}' },
  attendance_count: { type: Number },
  event_hosts: { type: [ String ] },
  comments: { type: [ commentSchema ], required: false },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  // I've haven't made this required for testing etc, but I think it would be good to give this a required validators so someone has to give it at least one catagory
  categories: { type: [ String ]}

})

module.exports = mongoose.model('Happening', happeningSchema)

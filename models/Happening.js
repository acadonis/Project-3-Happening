const mongoose = require('mongoose')
const axios = require('axios')

const commentSchema = new mongoose.Schema({
  content: {type: String, required: 'Please provide {PATH}', maxlength: [450, 'Comment exeeds maximum (450). Please enter a shorter comment.']},
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const happeningSchema = new mongoose.Schema({
  name: { type: String, required: 'Please provide a {PATH}' },
  city: { type: String, required: 'Please provide a {PATH}' },
  postcode: { type: String, required: 'Please provide a {PATH}' },
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
  time: { type: Number},
  description: { type: String, required: 'Please provide a {PATH}' },
  photo: { type: String, required: 'Please provide a {PATH}' },
  venue: { type: String, required: 'Please provide a {PATH}' },
  attendees: { type: [mongoose.Schema.ObjectId] , ref: 'User' },
  attendance_count: { type: Number }, //FM: Do we want to remove this and use the attendees to determine count?
  event_hosts: { type: [ String ] },
  comments: { type: [ commentSchema ], required: false },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  // FM: I've haven't made this required for testing etc, but I think it would be good to give this a required validators so someone has to give it at least one catagory
  categories: { type: [ String ], required: 'Please provide a {PATH}'}
})

happeningSchema.pre('validate', function getGeolocation(done) {
  if(!this.isModified('postcode')) return done()

  axios.post('https://postcodes.io/postcodes?filter=longitude,latitude', { postcodes: [this.postcode] })
    .then((res) => {
      if(!res.data.result[0].result) return done()
      const { latitude, longitude } = res.data.result[0].result
      this.lat = latitude
      this.lon = longitude
      done()
    })
})

module.exports = mongoose.model('Happening', happeningSchema)

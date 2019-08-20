const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: 'Please provide a {PATH}' },
  email: { type: String, unique: true, required: 'Please provide a {PATH}' },
  password: { type: String, required: 'Please provide a {PATH}' },
  birthday: { type: String, required: false },
  gender: { type: String, required: false },
  photo: { type: String, required: false },
  bio: { type: String, required: false },
  city: { type: String, required: false },
  // FM: We need to make how we're representing arrays consistent before we finish
  following: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  happenings: [{ type: mongoose.Schema.ObjectId, ref: 'Happening', required: false }],
  categories: {type: [String], required: false}
}, {
  toJSON: {
    transform(doc, json){
      delete json.password
      return json
    }
  }
})

userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(plaintext){
    this._passwordConfirmation = plaintext
  })

userSchema.pre('validate', function checkPasswords(next){
  if(this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }
  next()
})

userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }
  next()
})

userSchema.methods.validatePassword = function validatePassword(plaintext){
  return bcrypt.compareSync(plaintext, this.password)
}

module.exports = mongoose.model('User', userSchema)

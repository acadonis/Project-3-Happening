/* global api, describe, it, expect, beforeEach, afterEach */
const User = require('../../models/User')
const userData = require('../../db/data/usersData')

describe('GET /users', () => {

  beforeEach(done => {
    User.create(userData)
      .then(() => done())
  })

  afterEach(done => {
    User.remove({})
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api.get('/users')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an array', done => {
    api.get('/users')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })

  it('should return an array of objects', done => {
    api.get('/users')
      .end((err, res) => {
        res.body.forEach(user => {
          expect(user).to.be.an('object')
        })
        done()
      })
  })

  it('should return the correct fields', done => {
    api.get('/users')
      .end((err, res) => {
        res.body.forEach(user => {
          expect(user).to.contains.keys([
            '_id',
            'name',
            'email',
            'birthday',
            'gender',
            'photo',
            'bio',
            'city',
            'categories',
            'following',
            'events',
            '__v'
          ])
        })
        done()
      })
  })

  it('should return the correct data types', done => {
    api.get('/users')
      .end((err, res) => {
        res.body.forEach(user => {
          expect(user._id).to.be.a('string')
          expect(user.name).to.be.a('string')
          expect(user.email).to.be.an('string')
          expect(user.birthday).to.be.a('string')
          expect(user.gender).to.be.a('string')
          expect(user.photo).to.be.a('string')
          expect(user.bio).to.be.a('string')
          expect(user.city).to.be.a('string')
          expect(user.categories).to.be.a('array')
          expect(user.following).to.be.a('array')
          expect(user.events).to.be.a('array')
        })
        done()
      })
  })
})

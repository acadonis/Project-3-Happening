/* global api, describe, beforeEach, afterEach, it, expect */

const User = require('../../models/User')
const userData = require('../../db/data/usersData')

describe('Get /users/:id',() => {

  let user = null

  beforeEach(done => {
    User.create(userData)
      .then(users => {
        user = users[0]
        done()
      })
  })

  afterEach(done => {
    User.remove({})
      .then(() => done())
  })

  it('should send a 200 response', done => {
    api.get(`/users/${user._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an object', done => {
    api.get(`/users/${user._id}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return the correct fields', done => {
    api.get(`/users/${user._id}`)
      .end((err, res) => {
        expect(res.body).to.contains.keys([
          'name',
          'email',
          'birthday',
          'gender',
          'photo',
          'bio',
          'city',
          'categories',
          'following',
          'happenings'
        ])
        done()
      })
  })

  it('should return the correct data types', done => {
    api.get(`/users/${user._id}`)
      .end((err, res) => {
        expect(res.body.name).to.be.a('string')
        expect(res.body.email).to.be.a('string')
        expect(res.body.birthday).to.be.a('string')
        expect(res.body.gender).to.be.a('string')
        expect(res.body.photo).to.be.a('string')
        expect(res.body.bio).to.be.a('string')
        expect(res.body.city).to.be.a('string')
        expect(res.body.categories).to.be.an('array')
        // expect(res.body.categories[0]).to.be.an('string')
        expect(res.body.following).to.be.an('array')
        // expect(res.body.following[0]).to.be.an('object')
        expect(res.body.happenings).to.be.an('array')
        // expect(res.body.happenings[0]).to.be.an('object')
        done()
      })
  })
})

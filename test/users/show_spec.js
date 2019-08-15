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
          'events'
        ])
        done()
      })
  })

  xit('should return the correct data types', done => {
    api.get(`/users/${user._id}`)
      .end((err, res) => {
        expect(res.body.name).to.be.a('string')
        expect(res.body.lat).to.be.a('number')
        expect(res.body.lon).to.be.a('number')
        expect(res.body.local_date).to.be.a('string')
        expect(res.body.local_time).to.be.a('string')
        expect(res.body.time).to.be.a('number')
        expect(res.body.plain_text_description).to.be.a('string')
        expect(res.body.photo).to.be.a('string')
        expect(res.body.venue).to.be.a('string')
        expect(res.body.city).to.be.a('string')
        expect(res.body.attendance_count).to.be.a('number')
        expect(res.body.event_hosts).to.be.an('array')
        done()
      })
  })
})

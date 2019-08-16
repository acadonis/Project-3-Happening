/* global api, describe, it, expect, afterEach, beforeEach */
const Happening = require('../../models/Happening')
// const User = require('../../models/User')
// const jwt = require('jsonwebtoken')
// const { secret } = require('../../config/environment')
// const testUser = require('../../db/data/userData')
const testData = {
  name: 'test',
  lat: 51.555486,
  lon: -0.109682,
  local_date: '2019-08-16',
  local_time: '12:00',
  time: 1565956800000,
  plain_text_description: 'test',
  photo: 'test',
  venue: 'test',
  city: 'test',
  attendance_count: 1000,
  happening_hosts: ['test','test']
}

describe('POST /happenings', () => {

  // let token = null

  // beforeEach(done => {
  //   User.create(testUser)
  //     .then(user => {
  //       token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
  //       done()
  //     })
  // })

  afterEach(done => {
    Happening.remove({})
      // .then(() => User.remove({}))
      .then(() => done())
  })


  // it('should return a 401 response without a token', done => {
  //   api.post('/api/stations')
  //     .send(testData)
  //     .end((err, res) => {
  //       expect(res.status).to.eq(401)
  //       done()
  //     })
  // })

  it('should return a 201 response', done => {
    api.post('/happenings')
      .send(testData)
      .end((err, res) => {
        expect(res.status).to.eq(201)
        done()
      })
  })
  // it('should return a 201 response with a token', done => {
  //   api.post('/api/stations')
  //     .set('Authorization', `Bearer ${token}`)
  //     .send(testData)
  //     .end((err, res) => {
  //       expect(res.status).to.eq(201)
  //       done()
  //     })
  // })

  it('should return an object', done => {
    api.post('/happenings')
      .send(testData)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })
  it('should return the correct fields', done => {
    api.post('/happenings')
      .send(testData)
      .end((err, res) => {
        expect(res.body).to.contains.keys([
          '_id',
          'name',
          'lat',
          'lon',
          'local_date',
          'local_time',
          'time',
          'plain_text_description',
          'photo',
          'venue',
          'city',
          'attendance_count',
          'happening_hosts',
          '__v'
        ])
        done()
      })
  })

  it('should return the correct data', done => {
    api.post('/happenings')
      .send(testData)
      .end((err, res) => {
        expect(res.body.name).to.eq(testData.name)
        expect(res.body.lat).to.eq(testData.lat)
        expect(res.body.lon).to.eq(testData.lon)
        expect(res.body.local_date).to.eq(testData.local_date)
        expect(res.body.local_time).to.eq(testData.local_time)
        expect(res.body.time).to.eq(testData.time)
        expect(res.body.plain_text_description).to.eq(testData.plain_text_description)
        expect(res.body.photo).to.eq(testData.photo)
        expect(res.body.venue).to.eq(testData.venue)
        expect(res.body.city).to.eq(testData.city)
        expect(res.body.attendance_count).to.eq(testData.attendance_count)
        expect(res.body.happening_hosts).to.deep.eq(testData.happening_hosts)
        done()
      })
  })
})

/* global api, describe, it, expect, beforeEach, afterEach */
const Happening = require('../../models/Happening')
const happeningData = require('../../db/data/happeningData')

describe('GET /happenings/:id', () => {

  let happening = null

  beforeEach(done => {
    Happening.create(happeningData)
      .then(happenings => {
        happening = happenings[0]
        done()
      })
  })

  afterEach(done => {
    Happening.remove({})
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api.get(`/happenings/${happening._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an object', done => {
    api.get(`/happenings/${happening._id}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return the correct fields', done => {
    api.get(`/happenings/${happening._id}`)
      .end((err, res) => {
        expect(res.body).to.contains.keys([
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
          'happening_hosts'
        ])
        done()
      })
  })

  it('should return the correct data types', done => {
    api.get(`/happenings/${happening._id}`)
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
        expect(res.body.happening_hosts).to.be.an('array')
        done()
      })
  })
})

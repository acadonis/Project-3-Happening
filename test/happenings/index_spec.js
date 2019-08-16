/* global api, describe, it, expect, beforeEach, afterEach */
const Happening = require('../../models/Happening')
const happeningData = require('../../db/data/happeningData')

describe('GET /happenings', () => {

  beforeEach(done => {
    Happening.create(happeningData)
      .then(() => done())
  })

  afterEach(done => {
    Happening.remove({})
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api.get('/happenings')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an array', done => {
    api.get('/happenings')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })

  it('should return an array of objects', done => {
    api.get('/happenings')
      .end((err, res) => {
        res.body.forEach(station => {
          expect(station).to.be.an('object')
        })
        done()
      })
  })

  it('should return the correct fields', done => {
    api.get('/happenings')
      .end((err, res) => {
        res.body.forEach(happening => {
          expect(happening).to.contains.keys([
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
            'event_hosts',
            '__v'
          ])
        })
        done()
      })
  })

  it('should return the correct data types', done => {
    api.get('/happenings')
      .end((err, res) => {
        res.body.forEach(happening => {
          expect(happening._id).to.be.a('string')
          expect(happening.name).to.be.a('string')
          expect(happening.lat).to.be.an('number')
          expect(happening.lon).to.be.an('number')
          expect(happening.local_date).to.be.a('string')
          expect(happening.local_time).to.be.a('string')
          expect(happening.plain_text_description).to.be.a('string')
          expect(happening.photo).to.be.a('string')
          expect(happening.venue).to.be.a('string')
          expect(happening.city).to.be.a('string')
          expect(happening.time).to.be.a('number')
          expect(happening.attendance_count).to.be.a('number')
          expect(happening.event_hosts).to.be.a('array')
        })
        done()
      })
  })
})

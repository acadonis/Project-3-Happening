const env = process.env.NODE_ENV || 'development'
const dbURI = `mongodb://localhost:27017/happenings-db-${env}`
const secret = 'f99^l@ngnsHi5'

module.exports = { dbURI, secret }

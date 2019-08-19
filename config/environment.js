const port = process.env.PORT || 4000
const env = process.env.NODE_ENV || 'development'
const dbURI = process.env.MONGODB_URI || `mongodb://localhost:27017/happenings-db-${env}`
const secret = process.env.SECRET || 'f99^l@ngnsHi5'

module.exports = { port, env, dbURI, secret }

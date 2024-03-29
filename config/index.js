if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const config = {
  dev: process.env.NODE_ENV === 'development',
  port: process.env.PORT || 3001,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST
}

module.exports = config

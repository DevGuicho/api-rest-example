require('./lib/db')
const debug = require('debug')('app:server')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const notFoundHandler = require('./middlewares/notFoundHandler')
const { port } = require('./config')
const apiPost = require('./routes/posts')
const {
  wrapErrors,
  logErrors,
  errorHandler
} = require('./middlewares/errorHandler')

app.use(cors())
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

apiPost(app)

app.use(notFoundHandler)

app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(port, () => debug(`Server on port ${port}`))

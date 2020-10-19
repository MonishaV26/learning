const express = require('express')
const app = express()
const cors = require('cors') // enable all cors request
const helmet = require('helmet') // wrap all 11 secure middleware
const logger = require('morgan') // for logs

app.use(helmet())
app.use(cors())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => console.log('Server is running on port 3000'))
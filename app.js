const express = require('express')
const port = process.env.PORT || 8000
const cors = require('cors')
const app = express()

require('dotenv').config()

console.log('Hitting app.js')

app.use(cors())
app.options('*', cors())

app.use('/', require('./src/routes/index'))
app.use('/events', require('./src/routes/event'))

app.listen(port, () => console.log(`App running on ${port}`))

module.exports = express
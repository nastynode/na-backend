const indexRouter = require('express').Router()
const userController = require('./controllers/userController')

indexRouter.get('/', (req, res) => {
    console.log('Got it')
    res.status(200).send('Welcome to me')
})

module.exports = indexRouter
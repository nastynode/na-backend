const eventController = require('../controllers/event')
const eventRouter = require('express').Router()

eventRouter.get('/', eventController.getEventExternal)

module.exports = eventRouter
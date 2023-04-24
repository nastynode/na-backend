const EventModel = require('../models/event')

const getEvents = (eventId) => {
    let event = null
    try {
        const ev = new EventModel(eventId)
        event = ev.getEvent()
    } catch(err) {
        console.log('Error in /src/controllers/event.js - getEvent(): ', err)
    }
    return event
}
const eventController = {
    async getEventInternal() {
        try {

        } catch(err) {
            console.log('Error in /src/controllers/event.js - eventController.getEventInternal(): ', err)
        }
    },
    async getEventExternal(req, res) {
        let event = null
        try {
            event = await getEvents(req.body?.eventId)
        } catch(err) {
            console.log('Error in /src/controllers/event.js - eventController.getEventExternal(): ', err)
        }
        res.status(event ? 200 : 500).send(event)
    }
}

module.exports = eventController
class EventModel {
    constructor(eventId) {
        this.eventId = eventId
        this.eventData = null
    }
    async getEvent() {
        let event = null
        try {
            //event = await searchFn()
        } catch(err) {
            console.log('Error in /src/models/event.js - getEvent(): ', err)
        }
        return event
    }
}

module.exports = EventModel
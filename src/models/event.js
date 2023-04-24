class EventModel {
    constructor(eventId, creator, fellowship, startDate, endDate, area, address, featuredImg, description, title, contactInfo) {
        this.eventId = eventId
        this.creator = creator
        this.fellowship = fellowship
        this.startDate = startDate
        this.endDate = endDate
        this.area = area
        this.address = address
        this.featuredImg = featuredImg
        this.description = description
        this.title = title
        this.contactInfo = contactInfo
    }
    #getMultipleEvents(filt, condition) {
        let eventArr
        try {
            eventArr = filt && condition ? events.filter(e => e[filt] === condition) : events
        } catch(err) {
            console.log('Error in /src/models/event.js - EventModel.getMultipleEvents(): ', err)
        }
        return eventArr
    }
    getEvent() {
        let event = null
        try {
            event = this.eventId ? events.find(e => e.id === this.eventId) : this.#getMultipleEvents()
        } catch(err) {
            console.log('Error in /src/models/event.js - EventModel.getEvent(): ', err)
        }
        return event
    }
    createEvent() {
        let success = false
        try {
            
        } catch(err) {
            console.log('Error in /src/models/event.js - EventModel.createEvent(): ', err)
        }
    }
}

//Test data-------------
const testContact = {
    name: 'Nate O',
    phone: '219-307-6839',
    email: 'nathaniel.orona98@gmail.com'
}
const testContactTwo = {
    name: 'Matt D',
    phone: '555-555-5555',
    email: 'mdavis@cumalot.com'
}
const testDate = new Date().toDateString()
const events = [
    //eventId, creator, startDate, endDate, area, address, featuredImg, description, title, contactInfo
    new EventModel(1, 'userIdNateTest', 'NA', testDate, testDate, 'South Shore', '1234 Event Street, Valparaiso, IN 46383', '#', 'Description for event 1', 'Event 1', testContact),
    new EventModel(2, 'userIdMattTest', 'NA', testDate, testDate, 'Southwest Michigan', '1234 Event Street, Kalamazoo, MI', '#', 'Description for event 2', 'Event 2', testContactTwo)
]
//-----------------------

module.exports = EventModel
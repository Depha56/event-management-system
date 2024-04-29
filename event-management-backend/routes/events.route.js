const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/event.controller.js');

// Get all events
router.get('/', eventsController.getEvents);

// Get a single event by ID
router.get('/:id', eventsController.getEventById);

// Create a new event
router.post('/', eventsController.createEvent);

// Update an event by ID
router.put('/:id', eventsController.updateEvent);

// Delete an event by ID
router.delete('/:id', eventsController.deleteEvent);

module.exports = router;



module.exports = router;

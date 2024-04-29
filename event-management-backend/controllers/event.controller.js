const Event = require('../models/event.model.js');
const { check, validationResult } = require('express-validator');

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createEvent = async (req, res) => {
  const newEvent = new Event({
    title: req.body.title,
    date: req.body.date,
    location: req.body.location,
    ticketsAvailable: req.body.ticketsAvailable,
  });

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createEvent = [
  // Validation checks
  check('title').notEmpty().withMessage('Title is required'),
  check('date').isISO8601().withMessage('Date must be in ISO 8601 format'),
  check('location').notEmpty().withMessage('Location is required'),
  check('ticketsAvailable').isInt({ gt: 0 }).withMessage('Tickets available must be a positive integer'),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newEvent = new Event({
      title: req.body.title,
      date: req.body.date,
      location: req.body.location,
      ticketsAvailable: req.body.ticketsAvailable,
    });

    try {
      const savedEvent = await newEvent.save();
      res.status(201).json(savedEvent);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
];

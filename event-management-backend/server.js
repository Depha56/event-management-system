const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/events.route.js');
const bookingRoutes = require('./routes/bookings.route.js');
const app = express();
const errorHandler = require('./middleware/errorHandler');
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/event-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});




app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes)
app.use(errorHandler);

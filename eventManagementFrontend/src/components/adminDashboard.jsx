import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
 const [events, setEvents] = useState(); 
 const [bookings, setBookings] = useState([]);


 return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">All Events</h3>
          <ul>
            {events && events.map((event, index) => ( 
              <li key={index} className="mb-2">
                <h4 className="font-bold">{event.title}</h4>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
                <p>Tickets Available: {event.ticketsAvailable}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Edit Event</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete Event</button>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2 mt-4">All Bookings</h3>
          <ul>
            {bookings.map((booking, index) => (
              <li key={index} className="mb-2">
                <h4 className="font-bold">{booking.eventTitle}</h4>
                <p>Booked By: {booking.userName}</p>
                <p>Tickets Booked: {booking.ticketsBooked}</p>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Cancel Booking</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
 );
};

export default AdminDashboard;

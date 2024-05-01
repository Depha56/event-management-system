import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
 const [events, setBookedEvents] = useState([]);



 return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <nav className="bg-gray-800 p-4 fixed top-0 left-0 h-screen w-64">
                <ul className="flex flex-col justify-start">
                    <li><a href="/" className="text-white p-2">Home</a></li>
                    <li><a href="events" className="text-white p-2">Events</a></li>
                    <li><a href="user-dashboard" className="text-white p-2">Dashboard</a></li>
                    <li><a href="/contact" className="text-white p-2">Contact</a></li>
                    <li><a href="/logout" className="text-white p-2">Logout</a></li>
                </ul>
            </nav>
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Your Booked Events</h3>
          <ul>
          {events.length > 0 ? (
    events.map((event, index) => (
      <li key={index} className="mb-2">
        <h4 className="font-bold">{event.title}</h4>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <p>Tickets Available: {event.ticketsAvailable}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Edit Event</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete Event</button>
      </li>
    ))
  ) : (
    <li>No events available</li>
  )}
          </ul>
        </div>
      </div>
    </div>
 );
};

export default UserDashboard;

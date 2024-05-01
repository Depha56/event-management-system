import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        
        fetch(`http://localhost:3000/api/event/id/${id}`)
            .then(response => response.json())
            .then(data => setEvent(data));
    }, [id]);

    if (!event) {
        return <div>Loading event details...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
             <nav className="bg-gray-800 p-4 fixed top-0 left-0 h-screen w-64">
                <ul className="flex flex-col justify-start">
                    <li><a href="/" className="text-white p-2">Home</a></li>
                    <li><a href="events" className="text-white p-2">Events</a></li>
                    <li><a href="user-dashboard" className="text-white p-2">Dashboard</a></li>
                    <li><a href="/contact" className="text-white p-2">Contact</a></li>
                    <li><a href="/logout" className="text-white p-2">Logout</a></li>
                </ul>
            </nav>
            <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
            <p><strong>Date:</strong> {event.dueDate.startDate.toLocaleDateString()}</p>
            <p><strong>Start Time:</strong> {event.dueDate.startTime}</p>
            <p><strong>Duration:</strong> {event.dueDate.duration} {event.dueDate.durationType}</p>
            <p><strong>Available Tickets:</strong> {event.ticketAvailability}</p>
            <p><strong>Location:</strong> {event.location}</p>
            
        </div>
    );
};

export default EventDetails;

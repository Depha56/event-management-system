
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
 const [searchTerm, setSearchTerm] = useState("");
 const [searchResults, setSearchResults] = useState([]);

 const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/events/:id`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
 };

 return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="bg-gray-800 p-4 fixed top-0 left-0 h-screen w-64">
        <ul className="flex flex-col justify-start">
          <li><Link to="/" className="text-white p-2">Home</Link></li>
          <li><Link to="/events" className="text-white p-2">Events</Link></li>
          <li><Link to="/user-dashboard" className="text-white p-2">Dashboard</Link></li>
          <li><Link to="/contact" className="text-white p-2">Contact</Link></li>
          <li><Link to="/logout" className="text-white p-2">Logout</Link></li>
        </ul>
      </nav>
      <header className="flex items-center justify-center bg-white p-4">
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Search events..."
            className="rounded-lg p-2 border-2 border-gray-300 flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
            Search
          </button>
        </form>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Event Management Platform</h1>
        <p className="text-lg text-gray-700">Manage your events efficiently with our platform.</p>
        <div className="mt-8">
          <Link to="/events" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </Link>
        </div>
        {searchResults.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Search Results:</h2>
            <ul>
              {searchResults.map((event) => (
                <li key={event._id} className="mb-2">
                 <Link to={`/events/${event._id}`} className="text-blue-500 hover:text-blue-700">
                    {event.title}
                 </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
 );
};

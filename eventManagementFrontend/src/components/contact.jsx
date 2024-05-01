

import React from 'react';
import { useState } from 'react';

function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
    };
   
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:3000/api/user/contact', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      })
      .then(response => response.text())
      .then(data => alert(data))
      .catch((error) => {
          console.error('Error:', error);
      });
  };
  
 return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <form className="space-y-6" onSubmit={handleSubmit}>
                 <div>
                    <label htmlFor="name" className="sr-only">Your name</label>
                    <input id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm" placeholder="Your name" onChange={handleChange}/>
                 </div>
                 <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm" placeholder="Email" />
                 </div>
                 <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea id="message" name="message" rows="4" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm" placeholder="Message"></textarea>
                 </div>
                 <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                      Submit
                    </button>
                 </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
}

export default ContactPage;

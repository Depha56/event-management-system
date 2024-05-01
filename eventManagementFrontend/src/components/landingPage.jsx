
import React from 'react';
import landingImage from '../assets/landing.jpg';
import party from '../assets/party.jpg';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-500 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <img src={landingImage} className="h-7 sm:h-8" alt="Landing Image" />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>An advanced event management system designed to help you plan, organize, and manage events efficiently.</p>
                <p className="font-bold text-lg">Features:</p>
                <ul className="list-disc space-y-2">
                </ul>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>Start your free trial today.</p>
              </div>
              <div className="mt-8">
                <div className="rounded-lg shadow-md">
                  <a href="signup" className="block w-full text-center rounded-lg border border-transparent px-4 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out">
                    Get started
                  </a>
                </div>
              </div>
              <div className="pt-8">
                <h2 className="text-2xl font-bold mb-4 text-purple-600">Testimonials</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out">
                    <img src={party} alt="Testimonial" className="h-10 w-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-gray-800">John Doe</p>
                      <p className="text-sm text-gray-600">"This platform has made organizing events a breeze. Highly recommended!"</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <h2 className="text-2xl font-bold mb-4 text-purple-600">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <details className="mb-4">
                    <summary className="font-semibold cursor-pointer">How do I create an event?</summary>
                    <p className="text-sm text-gray-600">To create an event, simply click on the "Create Event" button on the dashboard and fill in the required details.</p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

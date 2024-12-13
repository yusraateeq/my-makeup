'use client';

import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-r from-pink-200 to-pink-400 min-h-screen flex items-center justify-center p-20 mt-20">
        <div className="bg-white rounded-xl shadow-xl max-w-4xl p-8 space-y-6 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
            Get in Touch with Us
          </h1>
          <p className="text-center text-gray-600">
            Have questions, feedback, or collaboration ideas? We'd love to hear from you!
          </p>

          {/* Formspree Form */}
          <form
            action="https://formspree.io/f/movqrnrw" // Replace {form_id} with your Formspree form ID
            method="POST"
            className="space-y-6"
          >
            {/* Name Input */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                required
                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 h-32"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-md transition-all transform hover:scale-105 shadow-md"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              <strong>Email:</strong> support@makeupglow.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +1 (234) 567-8901
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

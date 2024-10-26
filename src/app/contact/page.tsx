import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-purple-600 text-black min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-purple-100 p-3 rounded-full">
            <Mail className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center mb-5">Contact Us</h1>
        <p className="text-lg text-center mb-5">
          We would love to hear from you! Reach out to us through the form below or via our social
          media channels.
        </p>
        <form className="mt-5">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="text"
              id="name"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="email"
              id="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              id="message"
              rows={4} 
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
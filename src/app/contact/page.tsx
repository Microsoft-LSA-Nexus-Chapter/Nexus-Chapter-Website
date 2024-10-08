import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto my-10 p-10">
        <h1 className="text-3xl font-bold text-center mb-5">Contact Us</h1>
        <p className="text-lg text-center mb-5">
          We would love to hear from you! Reach out to us through the form below or via our social
          media channels.
        </p>
        <form className="mt-5 max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              id="name"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              className="border rounded w-full py-2 px-3"
              type="email"
              id="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea
              className="border rounded w-full py-2 px-3"
              id="message"
              rows={4}  // Use a number instead of a string for the rows attribute
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';

const Events = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto my-10 p-10">
        <h1 className="text-3xl font-bold text-center mb-5">Upcoming Events(Dummy Content)</h1> {/* In future to use RESTAPI for Event Data fetch */}
        <p className="text-lg text-center text-gray-700 mb-10">
          Stay tuned for the latest events, workshops, and activities hosted by the Nexus Chapter.
        </p>
        
        {/* Dummy events list */}
        <div className="space-y-8">
          <div className="bg-gray-100 p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Tech Talk: The Future of AI</h2>
            <p className="text-gray-700">Date: October 20, 2024</p>
            <p className="text-gray-700">Location: Nexus Auditorium</p>
            <p className="text-gray-700">Join us for an insightful session on the advancements and future of AI.</p>
          </div>
          
          <div className="bg-gray-100 p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Hackathon 2024</h2>
            <p className="text-gray-700">Date: November 5-7, 2024</p>
            <p className="text-gray-700">Location: Online</p>
            <p className="text-gray-700">Participate in our 48-hour coding challenge and showcase your skills!</p>
          </div>

          <div className="bg-gray-100 p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Web Development Bootcamp</h2>
            <p className="text-gray-700">Date: December 1, 2024</p>
            <p className="text-gray-700">Location: Nexus Lab</p>
            <p className="text-gray-700">Learn the latest trends and technologies in web development with hands-on projects.</p>
          </div>
        </div>
      </div>
    </div>   
  );
};

export default Events;
 
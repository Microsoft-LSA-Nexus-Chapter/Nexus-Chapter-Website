import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto my-10 p-10">
        <h1 className="text-3xl font-bold text-center mb-5">About Us</h1>
        <p className="text-lg text-center">
          We are the Microsoft Learn Student Ambassadors, a group dedicated to empowering students
          with the skills and knowledge to thrive in the tech industry. Our mission is to foster
          learning, collaboration, and innovation among students through various events, workshops,
          and community projects.
        </p>
      </div>
    </div>
  );
};

export default About;

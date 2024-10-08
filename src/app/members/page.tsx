import React from 'react';

const Members = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto my-10 p-10">
        <h1 className="text-3xl font-bold text-center mb-5">Our Members</h1>
        <p className="text-lg text-center text-gray-700">
          Our chapter is made up of passionate student leaders who are eager to make a difference
          in their communities. Below are some of our dedicated members:
        </p>
        <ul className="mt-5 list-disc list-inside">
        <li className="text-lg">Debaditya - Lead</li>
          <li className="text-lg">Shinjan Saha - Cypher Co-Associate</li>
          <li className="text-lg">Komal - Cypher Member</li>
           <li className="text-lg">Aditya - Associate</li>
        </ul>
      </div>
    </div>
  );
};

export default Members;

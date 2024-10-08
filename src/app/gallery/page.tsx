import React from 'react';

const Gallery = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto my-10 p-10">
        <h1 className="text-3xl font-bold text-center mb-5">Gallery</h1>
        <p className="text-lg text-center text-gray-700">
          Check out some moments from our events and workshops:
        </p>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="bg-gray-300 h-40 flex items-center justify-center">Image 1</div>
          <div className="bg-gray-300 h-40 flex items-center justify-center">Image 2</div>
          <div className="bg-gray-300 h-40 flex items-center justify-center">Image 3</div>
          <div className="bg-gray-300 h-40 flex items-center justify-center">Image 4</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

"use client";
import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import CountUp from "react-countup";
export default function Hero() {
  return (
    <>
    <div className='bg-white min-h-screen flex flex-col items-center justify-center'>
      <Image src={logo} alt="logo" />
      <h1 className='text-5xl text-slate-900 text-center m-10 font-bold'>
        Welcome to Microsoft LSA Nexus Chapter
      </h1>
    </div>
    <div className='bg-gray-200 min-h-3/4 flex flex-col items-center justify-start pt-16'>
  {/* Heading at the Top */}
  <h1 className='text-5xl text-slate-900 font-bold text-center mt-10'>
    Our Journey So Far !!!
  </h1>
  
  {/* Statistics Section */}
  <div className="flex flex-col md:flex-row min-h-1/2 w-1/2 items-center justify-center space-y-8 md:space-y-0 md:space-x-16 lg:space-x-32">
    {/* First Stat */}
    <div className="text-center flex flex-col items-center justify-center">
      <h2 className="text-slate-800 text-6xl font-bold">
      <CountUp end={1100} duration={3} suffix="+" />
        
      </h2>
      <p className="text-xl text-blue-800">Members</p>
    </div>
    
    {/* Second Stat */}
    <div className="text-center flex flex-col items-center justify-center">
      <h2 className="text-slate-800 text-6xl font-bold">
      <CountUp end={20} duration={3} suffix="+" />
      </h2>
      <p className="text-xl text-blue-600">Events</p>
    </div>
    
    {/* Third Stat */}
    <div className="text-center flex flex-col items-center justify-center">
      <h2 className="text-slate-800 text-6xl font-bold">
      <CountUp end={10} duration={3} suffix="+" />
      </h2>
      <p className="text-xl text-blue-600">Projects</p>
    </div>
  </div>
</div>

    </>
  );
}

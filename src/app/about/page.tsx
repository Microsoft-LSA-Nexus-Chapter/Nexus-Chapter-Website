"use client";

import React from "react";
import Image from "next/image";
import logo from "../../../public/images/mlsalogo-removebg.png";

const About = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto my-10 p-10 relative">
        <div className="relative mb-10 pl-4 mt-10 md:mt-6">
          <div className="absolute top-0 left-0 w-1 h-10 bg-black"></div>
          <h1 className="text-4xl md:text-[50px] font-bold text-left flex items-center">
            <span className="mr-2">About</span>
            <span className="blue-text">Us</span>
          </h1>
        </div>

        <div className="flex justify-end mb-10 relative">
          <blockquote className="text-2xl md:text-[50px] leading-relaxed text-right text-gray-700 max-w-lg mb-10">
            <span className="font-bold">&ldquo;We&apos;re </span>
            <span className="font-italiana">
              learners, enthusiasts, and freaks
            </span>
            <span className="font-bold">
              {" "}
              in this world of tech and knowledge..&rdquo;
            </span>
          </blockquote>
          <div className="absolute top-0 -right-4 w-1 h-full bg-black"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 relative pl-4">
          <div className="absolute top-0 left-0 w-1 h-full bg-black mt-6 lg:mt-0"></div>
          <div className="lg:w-3/4">
            <p className="text-gray-700 text-base leading-relaxed text-left lg:w-3/4">
              Welcome to the Microsoft Learn Student Ambassadors (MLSA) Nexus
              Chapter, a vibrant community of passionate students dedicated to
              learning, growing, and empowering others through technology. As we
              strive to build a nexus of collaboration, innovation, and
              real-world problem-solving skills for students interested in
              Microsoft technologies and beyond.&nbsp;
              <br />
              <br />
              At the Nexus Chapter, we believe in fostering a supportive
              environment where students of all skill levels can come together
              to learn, teach, and inspire one another.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end w-full lg:w-1/4">
            <Image
              src={logo}
              alt="MLSA Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

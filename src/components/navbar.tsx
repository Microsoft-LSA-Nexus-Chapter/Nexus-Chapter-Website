"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/mlsalogo-removebg.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white p-4 shadow-md w-full fixed top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="MLSA Logo" width={50} height={50} />
          <div>
            <h1 className="text-xl font-bold text-black">
              Microsoft Learn Student Ambassador
            </h1>
            <p className="text-sm text-gray-600">Nexus Chapter</p>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links - Default for larger screens */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-black hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-gray-600">
            About Us
          </Link>
          <Link href="/events" className="text-black hover:text-gray-600">
            Events
          </Link>
          <Link href="/members" className="text-black hover:text-gray-600">
            Members
          </Link>
          <Link href="/gallery" className="text-black hover:text-gray-600">
            Gallery
          </Link>
          <Link href="/faq" className="text-black hover:text-gray-600">
            FAQ
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-600">
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Mobile Menu - Visible when toggled */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-black hover:text-gray-600">
              Home
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600">
              About Us
            </Link>
            <Link href="/events" className="text-black hover:text-gray-600">
              Events
            </Link>
            <Link href="/members" className="text-black hover:text-gray-600">
              Members
            </Link>
            <Link href="/gallery" className="text-black hover:text-gray-600">
              Gallery
            </Link>
            <Link href="/faq" className="text-black hover:text-gray-600">
            FAQ
          </Link>
            <Link href="/contact" className="text-black hover:text-gray-600">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/mlsalogo.png'; // Assuming this is the logo you're using

export default function Navbar() {
    return (
      <header className="bg-white p-4 shadow-md w-full fixed top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <Image src={logo} alt="MLSA Logo" width={50} height={50} />
            <div>
              <h1 className="text-xl font-bold text-black">Microsoft Learn Student Ambassador</h1>
              <p className="text-sm text-gray-600">Nexus Chapter</p>
            </div>
          </div>
  
          {/* Navigation Links */}
          <div className="space-x-6">
            <Link href="/" className="text-black hover:text-gray-600">Home</Link>
            <Link href="/about" className="text-black hover:text-gray-600">About Us</Link>
            <Link href="/events" className="text-black hover:text-gray-600">Events</Link>
            <Link href="/members" className="text-black hover:text-gray-600">Members</Link>
            <Link href="/gallery" className="text-black hover:text-gray-600">Gallery</Link>
            <Link href="/contact" className="text-black hover:text-gray-600">Contact Us</Link>
          </div>
        </nav>
      </header>
    );
  }
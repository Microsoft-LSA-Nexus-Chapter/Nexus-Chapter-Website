// app/layout.tsx

import React from 'react';
import './globals.css'; // Ensure to import your global CSS
import Navbar from '../components/navbar'; // Adjust the path as needed

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children} {/* This renders the page content */}
      </body>
    </html>
  );
}

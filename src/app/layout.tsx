import React from "react";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Microsoft LSA Nexus Chapter",
  description: "A chapter website for Microsoft Learn Student Ambassadors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

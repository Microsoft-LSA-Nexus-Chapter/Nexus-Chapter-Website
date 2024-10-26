"use client";
import React from 'react';
import Hero from '../components/Hero';
import { useState } from 'react'

import { ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { id: 1, content: 'Slide 1 Content' },
    { id: 2, content: 'Slide 2 Content' },
    { id: 3, content: 'Slide 3 Content' },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white p-4">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="MLSA Logo" className="h-10 w-10 mr-2" />
            <span className="font-semibold text-lg">Microsoft Learn Student Ambassador</span>
          </div>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Members</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Gallery</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="bg-[#B5EAD7] py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative">
              <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <div className="flex justify-center items-center">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MLSA-epPezdbaexu3YY93ODT7FFwJo4HoNc.png" alt="MLSA Badge" className="h-48 w-48" />
              </div>
              <div className="flex justify-center mt-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full mx-1 ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </section>
       

        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#B5EAD7] p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">MLSA</h2>
                <p className="text-gray-700">Learn about the Microsoft Learn Student Ambassador program and its benefits.</p>
              </div>
              <div className="bg-[#0078D4] p-6 rounded-lg text-white">
                <h2 className="text-xl font-semibold mb-4">TEAMS PHOTOS</h2>
                <p>Check out photos from our recent team events and activities.</p>
              </div>
              <div className="bg-[#B5EAD7] p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">NOTICE</h2>
                <p className="text-gray-700">Stay updated with the latest announcements and upcoming events.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0078D4] text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MLSA-epPezdbaexu3YY93ODT7FFwJo4HoNc.png" alt="MLSA Logo" className="h-10 w-10 mb-2" />
              <p className="text-sm">© 2023 Microsoft Learn Student Ambassador</p>
            </div>
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-sm">Email: info@mlsanexus.com</p>
              <p className="text-sm">Phone: +1 (123) 456-7890</p>
            </div>
            <div className="w-full md:w-auto">
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-200">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
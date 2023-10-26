'use client'

import React from 'react'; // Don't forget to import React if it's not already imported
import { useState } from 'react';
import Image from 'next/image'; // Import the Image component

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        {/* Center the image on mobile screens and align to the left on larger screens */}
        <div className="md:ml-auto"> {/* Use the `md:ml-auto` class to push to the left on larger screens */}
          <Image
            src="/assets/nav-logo.png"
            alt="Restaurant Logo"
            width={100}
            height={100}
            className="mx-auto" // Center the image horizontally on small screens
          />
        </div>
        
        {/* Your existing code for desktop menu */}
        <ul className="hidden md:flex space-x-4 text-white">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:underline">
              Menu
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              Reservations
            </a>
          </li>
          <li>
            <a href="/booking" className="hover:underline">
              Order Online
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              Login
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger menu icon for mobile, with menu toggle */}
      <div className="md:hidden">
        <button className="text-white" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <ul className="flex flex-col space-y-2 text-white bg-gray-800 absolute top-16 left-0 right-0 mt-4">
            {/* Mobile menu items */}
            <li>
              <a href="/home" className="hover:underline" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline" onClick={toggleMenu}>
                Menu
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline" onClick={toggleMenu}>
                Reservations
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline" onClick={toggleMenu}>
                Order Online
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline" onClick={toggleMenu}>
                Login
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

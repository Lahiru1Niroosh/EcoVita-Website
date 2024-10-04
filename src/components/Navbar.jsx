/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/website img/Logo.png';

const Navbar = () => {
  // State for managing mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-300 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center text-white font-bold text-2xl sm:text-3xl tracking-wider font-cursive"
          >
            <img
              src={Logo}
              alt="Logo"
              className="w-25 h-14 mr-1 rounded-full transition-transform duration-500 transform hover:rotate-12"
            />
            EcoVita
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-lg font-semibold">
          {['Home', 'About Us', 'Our Products', 'Services', 'Blog'].map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
              className="px-4 py-2 hover:text-black hover:bg-white hover:rounded-lg transition-all duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <FaTimes className="text-3xl hover:rotate-180 transition-transform duration-300" />
            ) : (
              <FaBars className="text-3xl transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden fixed inset-0 bg-green-600 bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-2xl font-semibold transform transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {['Home', 'About Us', 'Our Products', 'Services', 'Blog'].map((link, index) => (
          <a
            key={index}
            href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
            className="px-6 py-2 hover:bg-white hover:text-green-800 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(false)} // Close the menu on link click
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

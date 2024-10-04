// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <FaLeaf className="text-4xl text-green-400 mr-2" />
              <h2 className="text-3xl font-bold font-cursive">EcoVita</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Bringing natures best products to help you achieve a healthy, balanced lifestyle.
              Our commitment to sustainability ensures you can feel great about every purchase.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-green-400 transition-colors">Our Products</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact Us</a></li>
              <li><a href="#faq" className="hover:text-green-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest products, special offers, and eco-friendly tips.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-4 sm:mb-0 sm:mr-2 rounded-md outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          
          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/lahiru-niroshan/"
              className="bg-green-600 p-3 rounded-full text-white hover:bg-green-500 transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/lahiru-niroshan/"
              className="bg-green-600 p-3 rounded-full text-white hover:bg-green-500 transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/lahiru-niroshan/"
              className="bg-green-600 p-3 rounded-full text-white hover:bg-green-500 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Contact Information */}
          <div className="flex items-center space-x-3">
            <AiOutlineMail className="text-green-400 text-2xl" />
            <span className="text-gray-300">contact@ecovita.com</span>
          </div>

          {/* Copyright */}
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} EcoVita. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

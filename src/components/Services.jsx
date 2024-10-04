// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaLeaf, FaSpa, FaRecycle } from 'react-icons/fa';
import Img1 from '../assets/website img/card1.jpg';
import Img2 from '../assets/website img/card2.jpg';
import Img3 from '../assets/website img/card3.jpg';

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="bg-gradient-to-r from-blue-300 to-green-500 py-16">
        <div className="container mx-auto px-6">

          {/* Header Section */}
          <div className="text-center mb-16">
            <h1
              data-aos="fade-up"
              className="text-5xl font-bold font-cursive text-black"
            >
              Our Services
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-4 text-lg text-gray-700"
            >
              Experience the best in organic wellness and sustainable living with EcoVita.
            </p>
          </div>

          {/* Services Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center mb-16">

            {/* Service Card 1 */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="relative rounded-2xl bg-green-200 overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700 group"
            >
              {/* Service Image */}
              <div className="h-[250px] overflow-hidden">
                <img
                  src={Img1}
                  alt="Organic Products"
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                />
              </div>

              {/* Service Info */}
              <div className="p-6 text-center transition-colors duration-500 group-hover:bg-green-800 group-hover:text-white">
                <FaLeaf className="text-green-500 text-4xl mb-4 group-hover:text-white transition-all duration-300" />
                <h3 className="text-2xl font-bold mb-3">Organic Products</h3>
                <p className="text-gray-600 group-hover:text-white transition-all duration-300">
                  Our organic products are crafted with the finest ingredients sourced sustainably to nurture your health.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="relative rounded-2xl bg-green-200 overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700 group"
            >
              {/* Service Image */}
              <div className="h-[250px] overflow-hidden">
                <img
                  src={Img2}
                  alt="Spa Treatments"
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                />
              </div>

              {/* Service Info */}
              <div className="p-6 text-center transition-colors duration-500 group-hover:bg-green-800 group-hover:text-white">
                <FaSpa className="text-blue-500 text-4xl mb-4 group-hover:text-white transition-all duration-300" />
                <h3 className="text-2xl font-bold mb-3">Relaxing Spa Treatments</h3>
                <p className="text-gray-600 group-hover:text-white transition-all duration-300">
                  Indulge in our all-natural spa treatments designed to refresh your mind and rejuvenate your spirit.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="relative rounded-2xl bg-green-200 overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700 group"
            >
              {/* Service Image */}
              <div className="h-[250px] overflow-hidden">
                <img
                  src={Img3}
                  alt="Recycling Programs"
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                />
              </div>

              {/* Service Info */}
              <div className="p-6 text-center transition-colors duration-500 group-hover:bg-green-800 group-hover:text-white">
                <FaRecycle className="text-yellow-500 text-center text-4xl mb-4 group-hover:text-white transition-all duration-300" />
                <h3 className="text-2xl font-bold mb-3">Recycling Programs</h3>
                <p className="text-gray-600 group-hover:text-white transition-all duration-300">
                  Be part of our recycling initiatives that promote environmental sustainability and reduce waste.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center mt-16" data-aos="zoom-in">
            <h2 className="text-3xl font-bold text-black mb-6">
              Ready to Transform Your Lifestyle?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Explore our services and experience the power of nature with EcoVita.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

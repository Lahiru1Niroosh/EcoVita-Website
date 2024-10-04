/* eslint-disable no-unused-vars */
import React from 'react';
// import Logo from '../assets/website img/organicLogo.png';
import BackgroundImage from '../assets/website img/backgrond.jpg'; // Import your background image
import HeroImg from '../assets/website img/SpinImg.png';

const LandingPage = () => {
  return (
    <>
      <span id="home"></span>
      <div
        className="min-h-screen bg-green-800 flex items-center text-white relative"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">

            {/* Text Section */}
            <div className="flex flex-col justify-center items-start gap-6 order-2 sm:order-1 text-center sm:text-left">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                data-aos="fade-up"
              >
                <span className="text-green-400 text-7xl font-cursive">
                  EcoVita
                </span>{" "}
                - Bringing You Sustainable Products for a Balanced Lifestyle.
              </h1>
              <p
                className="text-lg text-gray-200"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Experience the natural way to nurture yourself. EcoVita offers
                organic solutions crafted with care to help you live a healthy
                and balanced life.
              </p>
              <a
                href="#products"
                className="inline-block px-8 py-3 mt-4 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Explore Our Products
              </a>
            </div>

            {/* Image Section */}
            <div
              className="flex justify-center items-center order-1 sm:order-2"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <img
                src={HeroImg}
                alt="Hero"
                className="w-[1150px] sm:w-[550px] lg:w-[950px] rounded-full mx-auto spin transform hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

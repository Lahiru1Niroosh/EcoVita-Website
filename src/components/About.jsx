// eslint-disable-next-line no-unused-vars
import React from "react";
import BannerImg from "../assets/website img/Logo.png";
import { FaLeaf, FaSeedling } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

const About = () => {
  return (
    <>
      <span id="aboutus"></span>
      <div className="bg-gradient-to-r from-blue-300 to-green-500 py-16">
        <div className="min-h-[550px] flex justify-center items-center">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* Image Section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="EcoVita Logo"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,0.3)] rounded-full transform hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Text Content Section */}
              <div className="flex flex-col justify-center gap-6">
                <h1
                  data-aos="fade-up"
                  className="text-5xl font-bold font-cursive text-black leading-tight"
                >
                  Embrace Nature with EcoVita
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-lg text-gray-700 tracking-wide leading-relaxed"
                >
                  At EcoVita, we bring you the finest organic products crafted
                  with love and care. Each product is designed to nourish your
                  body and spirit while respecting the Earth. Let nature guide
                  you to a healthier, balanced lifestyle.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  
                  {/* Feature Icons Section */}
                  <div className="space-y-6">
                    <div data-aos="fade-up" className="flex items-center gap-4">
                      <FaLeaf className="text-4xl h-16 w-16 shadow-lg p-4 rounded-full bg-green-100 text-green-600 transform hover:scale-110 transition-transform duration-500" />
                      <span className="font-semibold text-xl text-gray-700">
                        100% Organic Ingredients
                      </span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-4"
                    >
                      <GiWaterDrop className="text-4xl h-16 w-16 shadow-lg p-4 rounded-full bg-blue-100 text-blue-600 transform hover:scale-110 transition-transform duration-500" />
                      <span className="font-semibold text-xl text-gray-700">
                        Sustainably Sourced
                      </span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-4"
                    >
                      <FaSeedling className="text-4xl h-16 w-16 shadow-lg p-4 rounded-full bg-yellow-100 text-yellow-600 transform hover:scale-110 transition-transform duration-500" />
                      <span className="font-semibold text-xl text-gray-700">
                        Eco-Friendly Packaging
                      </span>
                    </div>
                  </div>
                  
                  {/* Movement Information Section */}
                  <div
                    data-aos="fade-left"
                    className="border-l-4 border-green-500/50 pl-6 space-y-6"
                  >
                    <h1 className="text-3xl font-semibold font-cursive text-black">
                      Join the EcoVita Movement
                    </h1>
                    <p className="text-base text-gray-600">
                      Discover how our products can help you lead a sustainable
                      and balanced lifestyle. Together, we can make a positive
                      impact on the environment, one step at a time.
                    </p>
                    <a
                      href="#products"
                      className="inline-block mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-500 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

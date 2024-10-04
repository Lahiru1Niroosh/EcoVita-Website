/* eslint-disable no-unused-vars */
import React from 'react';
import Img3 from '../assets/website img/Img3.jpg';
import Img4 from '../assets/website img/Img4.jpg';
import Img5 from '../assets/website img/Img5.jpg';
import 'aos/dist/aos.css';

const productsData = [
  {
    id: 1,
    img: Img3,
    name: "EcoVita Organic Hair Care Set",
    description: "Nourishing hair care products for healthy, radiant hair.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img4,
    name: "EcoVita Glow Skincare Bundle",
    description: "A complete organic skincare set for a natural, glowing complexion.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img5,
    name: "Herbal Relaxation Tea Collection",
    description: "Organic herbal teas crafted for relaxation and wellness.",
    aosDelay: "300",
  },
];

const Products = () => {
  return (
    <>
      <span id="ourproducts"></span>
      <div className="bg-gradient-to-r from-blue-300 to-green-500 py-16">
        <div className="container mx-auto px-6">

          {/* Header Title */}
          <div className="text-center mb-16">
            <h1
              data-aos="fade-up"
              className="text-5xl font-bold font-cursive text-black"
            >
              Our Products For You!
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-4 text-lg text-gray-700"
            >
              Explore our range of organic products crafted to bring balance and health to your lifestyle.
            </p>
          </div>

          {/* Products Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {productsData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="rounded-2xl bg-green-200 shadow-lg hover:shadow-2xl transition-transform transform duration-500 max-w-[350px] group relative overflow-hidden"
              >
                {/* Product Image */}
                <div className="h-[250px] overflow-hidden">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-full h-full object-cover rounded-t-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 text-center group-hover:bg-green-800 group-hover:text-white transition-colors duration-500">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                    {data.name}
                  </h3>
                  <p className="text-gray-600 mb-4 group-hover:text-white">
                    {data.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block px-6 py-3 mt-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-500 transition-all duration-300 group-hover:bg-white group-hover:text-green-800"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

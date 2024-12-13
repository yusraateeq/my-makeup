'use client';
import Image from "next/image";
import banner1 from '../assets/OIP (4).jpg';
import banner2 from '../assets/OIP (5).jpg';

const HeroSection = () => {
  return (
    <div className="relative bg-pink-200 py-16 px-6 sm:px-8 lg:px-12 mx-4 sm:mx-8 lg:mx-10 rounded-2xl">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Section - Text Content */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Get the best product <br /> at your home
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Explore our exclusive range of high-quality products that meet all your needs.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full sm:w-64 lg:w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <button className="w-full sm:w-auto px-4 py-2 bg-pink-600 text-white font-medium rounded-md">
              Search
            </button>
          </div>
        </div>

        {/* Right Section - Image Content */}
        <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
          {/* Featured Images */}
          <div className="flex flex-col items-center">
            <Image
              src={banner2}
              alt="MakeUp"
              className="w-36 sm:w-44 h-36 sm:h-40 rounded-lg shadow-md"
            />
            <p className="mt-2 text-gray-700 font-medium">MakeUp</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={banner1}
              alt="Brands"
              className="w-36 sm:w-44 h-36 sm:h-40 rounded-lg shadow-md"
            />
            <p className="mt-2 text-gray-700 font-medium">Brands</p>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-pink-300 rounded-full opacity-30 blur-lg"></div>
      <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-yellow-300 rounded-full opacity-30 blur-lg"></div>
    </div>
  );
};

export default HeroSection;

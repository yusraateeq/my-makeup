import React from 'react';
import backgroundImage from '../assets/back1.jpg'; // Adjust the path as per your folder structure
import Image from 'next/image';
import cartIcon from '../assets/carte.png'; // Your icon image path
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative h-[750px] flex items-center justify-center text-center bg-cover bg-center px-8 sm:px-16 lg:px-32 pt-20"
      style={{
        backgroundImage: `url(${backgroundImage.src})`, // Use .src if imported with Next.js
      }}
    >
      {/* Overlay to darken the background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

      {/* Text content */}
      <div className="relative z-10 text-white">
        {/* New Collection Text */}
        <p className="border-2 py-2 px-8 sm:mx-24 md:mx-96 rounded-full mb-4 mt-20 text-sm sm:text-base">
          New winter collection 2025
        </p>
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Transform Your Look with Our Makeup Collection
        </h1>
        
        {/* Subheading */}
        <p className="mt-4 text-base sm:text-lg lg:text-xl mb-4 max-w-xl mx-auto">
          Enhance your natural beauty with our makeup collection. From bold shades to subtle finishes, find everything you need to create a flawless look and express your unique style.
        </p>

        {/* Animated Button with Image */}
        <Link href="/Shop">
          <span className="mt-6 inline-block py-3 px-10 bg-pink-600 text-white font-semibold text-lg rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-pink-700 relative overflow-hidden animate-pulse">
            {/* Icon inside the button */}
            <span className="mr-2">Shop Now</span>
            <Image
              src={cartIcon}
              alt="Cart Icon"
              width={20}
              height={20}
              className="inline-block ml-2 animate-bounce"
            />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

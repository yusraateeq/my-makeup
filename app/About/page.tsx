'use client';

import React from 'react';
import Image from 'next/image';
import makeupImage from '../assets/blush.jpg'; // Replace with the actual image path
import 'animate.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 text-center mb-8 sm:mb-12 animate__animated animate__fadeInDown">
          About Us
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 animate__animated animate__zoomIn">
            <Image
              src={makeupImage}
              alt="Makeup Products"
              className="rounded-lg shadow-lg mx-auto"
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 text-center md:text-left animate__animated animate__fadeInRight">
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Welcome to our world of makeup and beauty, where every product tells a story of elegance, creativity, and self-expression. Our mission is to empower individuals to shine inside and out.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              At our store, you’ll find a curated collection of high-quality makeup products crafted for all skin tones and styles. From radiant lipsticks to captivating eye shadows, we aim to inspire your beauty journey.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We’re passionate about innovation and inclusivity, bringing you the latest trends while celebrating the timeless art of makeup. Let us be part of your glow-up story.
            </p>
          </div>
        </div>
      </div>

      {/* Animation Section */}
      <div className="bg-pink-100 py-10 sm:py-12 mb-16 sm:mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-pink-600 mb-6 animate__animated animate__bounce">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeInLeft">
              <h3 className="text-lg sm:text-2xl font-bold text-pink-500">Quality</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Premium makeup products sourced from trusted brands.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeInUp">
              <h3 className="text-lg sm:text-2xl font-bold text-pink-500">Variety</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                A wide range of products to match every occasion and style.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeInRight">
              <h3 className="text-lg sm:text-2xl font-bold text-pink-500">Inclusivity</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Products crafted for all skin tones and beauty preferences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

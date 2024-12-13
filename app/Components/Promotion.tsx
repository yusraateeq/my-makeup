"use client";
import React from "react";
import Link from "next/link";
const PromotionalSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-4">
          Transform Your Look Today!
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Let us redefine your beauty routine. Our premium-quality products are
          designed to help you feel confident and bring out your natural charm.
        </p>
        <Link href="/Shop"><button className="mt-8 px-8 py-4 bg-pink-600 text-white rounded-lg shadow-lg hover:bg-pink-500 transition-all duration-300">
          Discover Now
        </button></Link>
      </div>
    </div>
  );
};

export default PromotionalSection;

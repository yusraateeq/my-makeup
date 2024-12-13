"use client";
import React from 'react';
import Header from '@/app/Components/Header';
import Footer from '@/app/Components/Footer';

const ThankYouPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-8 mt-24 text-center">
        <h1 className="text-4xl font-bold mb-6">Thank You for Your Order!</h1>
        <p className="text-lg">Your order has been placed successfully. We will process it soon!</p>
      </div>
      <Footer />
    </>
  );
};

export default ThankYouPage;

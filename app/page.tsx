'use client';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Image from 'next/image';
import image1 from './assets/shadow.jpg';
import image2 from './assets/blush.jpg';
import image3 from './assets/lipstick.jpg';
import image4 from './assets/blander.jpg';
import image5 from './assets/eyeshadow.jpg';
import image6 from './assets/mascara.jpg';
import image7 from './assets/pomade.jpg';
import image8 from './assets/shadow1.jpg';
import Grid from './Components/Grid';
import Slider from './Components/Slider';
import Member from './Components/user';
import Promotion from './Components/Promotion';

const Home = () => {
  const products = [
    { id: 1, name: 'BLUSH ON | FLUSHED BEAUTY | LUXE COLLECTION', price: 299.99, rate: 4.5, image: image1 },
    { id: 2, name: 'FLUSH BLUSH ON | 3 SHADES | LUXURY GLOW', price: 49.99, rate: 3.8, image: image2 },
    { id: 3, name: 'LIPSTICK COLLECTION | FLIRTY FINISH | LUXE-5', price: 19.99, rate: 4.2, image: image3 },
    { id: 4, name: 'MAKEUP BLENDER | FLAWLESS FINISH | LUXE-12', price: 390.99, rate: 4.7, image: image4 },
    { id: 5, name: 'EYE SHADOW PALETTE | VIBRANT HUES | LUXE-7', price: 59.99, rate: 4.0, image: image5 },
    { id: 6, name: 'VOLUMIZING MASCARA | LASH-BOOST 24H | LUXE-8', price: 248.99, rate: 4.3, image: image6 },
    { id: 7, name: 'LIPSTICK ESSENCE | BOLD & BEAUTIFUL | LUXE-7', price: 19.99, rate: 4.6, image: image7 },
    { id: 8, name: 'EYE SHADOW COLLECTION | RADIANT SHADES | LUXE-5', price: 34.99, rate: 4.1, image: image8 },
  ];

  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: any) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Header />
      <Hero />
      <main className="container mx-auto py-8 min-h-screen mt-24">
        <h1 className="text-6xl text-pink-600 font-bold mb-10 text-center">New Products</h1>
        <section className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="relative group">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 group-hover:scale-105 transition-all duration-300 rounded-lg"
                  width={400}
                  height={400}
                />
              </div>
              <h2 className="text-xl font-bold mt-4">{product.name}</h2>
              <p className="mt-2 text-gray-600">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full py-2 px-4 bg-pink-600 text-white rounded-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </section>
      </main>
      <Grid />
      <Slider />
      <Member />
      <Promotion />
      <Footer />
    </>
  );
};

export default Home;



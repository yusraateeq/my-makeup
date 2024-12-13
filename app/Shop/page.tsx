'use client';

import { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Image from 'next/image';
import image1 from '../assets/shadow.jpg';
import image2 from '../assets/blush.jpg';
import image3 from '../assets/lipstick.jpg';
import image4 from '../assets/blander.jpg';
import image5 from '../assets/eyeshadow.jpg';
import image6 from '../assets/mascara.jpg';
import image7 from '../assets/pomade.jpg';
import image8 from '../assets/shadow1.jpg';
import Shophero from '../Components/Shophero';

interface Product {
  id: number;
  name: string;
  price: number;
  image: any;
  category: string;
}

const Shop = () => {
  const [filter, setFilter] = useState<string>(''); // Search filter
  const [categoryFilter, setCategoryFilter] = useState<string>(''); // Category filter
  const [minPrice, setMinPrice] = useState<number>(0); // Minimum price for filtering
  const [maxPrice, setMaxPrice] = useState<number>(1000); // Maximum price for filtering

  const products: Product[] = [
    { id: 1, name: 'BLUSH ON | FLUSHED BEAUTY', price: 299.99, image: image1, category: 'Blush' },
    { id: 2, name: 'FLUSH BLUSH ON | LUXURY GLOW', price: 49.99, image: image2, category: 'Blush' },
    { id: 3, name: 'LIPSTICK COLLECTION | FLIRTY FINISH', price: 19.99, image: image3, category: 'Lipstick' },
    { id: 4, name: 'MAKEUP BLENDER | FLAWLESS FINISH', price: 390.99, image: image4, category: 'Makeup' },
    { id: 5, name: 'EYE SHADOW PALETTE | VIBRANT HUES', price: 59.99, image: image5, category: 'Eye shadow' },
    { id: 6, name: 'VOLUMIZING MASCARA | LASH-BOOST', price: 248.99, image: image6, category: 'Makeup' },
    { id: 7, name: 'LIPSTICK ESSENCE | BOLD & BEAUTIFUL', price: 19.99, image: image7, category: 'Lipstick' },
    { id: 8, name: 'EYE SHADOW COLLECTION | RADIANT SHADES', price: 34.99, image: image8, category: 'Eye shadow' },
  ];

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(filter.toLowerCase()) &&
      (categoryFilter ? product.category === categoryFilter : true) &&
      product.price >= minPrice &&
      product.price <= maxPrice
    );
  });

  const categories = ['Blush', 'Eye shadow', 'Lipstick'];

  return (
    <div>
      <Header />
      <div className="mt-28 mb-20">
        <Shophero />
        <main className="flex flex-col lg:flex-row min-h-screen mt-20">
          {/* Left Sidebar for Filters */}
          <div className="w-full lg:w-1/4 p-6 bg-gray-50 lg:bg-white rounded-md">
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">Filters</h2>

            {/* Search Filter */}
            <input
              type="text"
              placeholder="Search products..."
              className="border p-2 mb-4 w-full rounded-md"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-700">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li
                    key={category}
                    onClick={() => setCategoryFilter(category)}
                    className={`cursor-pointer ${
                      categoryFilter === category ? 'text-pink-600 font-bold' : ''
                    }`}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-700">Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full mb-2"
              />
              <p className="text-sm">Min Price: ${minPrice}</p>

              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full mb-2"
              />
              <p className="text-sm">Max Price: ${maxPrice}</p>
            </div>
          </div>

          {/* Right Side - Products */}
          <div className="flex-1 p-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-pink-600 font-bold mb-6">
              Shop Now
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border p-4 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-60 sm:h-72 mb-2 rounded-lg"
                      width={300}
                      height={300}
                    />
                    <h2 className="font-bold text-gray-800">{product.name}</h2>
                    <p className="text-gray-700">${product.price}</p>

                    {/* Rating */}
                    <div className="flex items-center mt-2 text-yellow-500">
                      {Array.from({ length: 5 }, (_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={index < 4 ? 'currentColor' : 'none'}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                          />
                        </svg>
                      ))}
                    </div>

                    {/* Add to Cart button */}
                    <button className="mt-4 w-full py-2 px-4 bg-pink-600 text-white rounded-full">
                      Add to Cart
                    </button>
                  </div>
                ))
              ) : (
                <p>No products match your filter criteria.</p>
              )}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;

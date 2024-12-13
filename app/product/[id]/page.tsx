'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Sample product data
const products = [
  { id: 1, name: 'Blush On', price: 29.99, rate: 4.5, image: '/assets/blush.jpg', description: 'A high-quality blush for vibrant cheeks.' },
  { id: 2, name: 'Lipstick', price: 19.99, rate: 4.2, image: '/assets/lipstick.jpg', description: 'Luxurious lipstick with a bold finish.' },
  { id: 3, name: 'Mascara', price: 24.99, rate: 4.3, image: '/assets/mascara.jpg', description: 'Volumizing mascara for stunning lashes.' },
];

const ProductPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <p>Product not found!</p>;
  }

  const handleAddToCart = () => {
    // Add product to cart logic
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Product added to cart!');
    router.push('/cart'); // Redirect to cart page
  };

  return (
    <main className="container mx-auto py-8 flex gap-8">
      {/* Left side: Image */}
      <div className="flex-1">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right side: Details */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-pink-600">{product.name}</h1>
        <p className="mt-4 text-gray-600 text-lg">{product.description}</p>
        <p className="mt-4 text-2xl font-bold text-gray-800">${product.price.toFixed(2)}</p>

        {/* Show rating */}
        <div className="mt-4 flex items-center text-yellow-500">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill={index < product.rate ? 'currentColor' : 'none'}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
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

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-6 py-3 px-6 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </main>
  );
};

export default ProductPage;

'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const CartPage = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [shipping, setShipping] = useState<number>(5.0); // Example shipping cost
  const [promoCode, setPromoCode] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (id: number, increment: boolean) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + (increment ? 1 : -1)) }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const applyPromoCode = () => {
    if (promoCode === 'DISCOUNT10') {
      setDiscount(10); // Example 10% discount
    } else {
      setDiscount(0);
      alert('Invalid promo code');
    }
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalCost = subtotal + shipping - (subtotal * discount) / 100;

  return (
    <div>
      <Header />
      <div className="container mx-auto py-16 px-4 mt-14">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Cart Items */}
          <div className="lg:col-span-2">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                <h2 className="text-lg font-semibold mb-4">{totalItems} Items</h2>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border p-4 rounded mb-4"
                  >
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">PS4</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-sm mt-1"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => updateQuantity(item.id, false)}
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, true)}
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <p>${item.price}</p>
                      <p className="font-semibold">${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <button className="text-blue-500 mt-4">← Continue Shopping</button>
          </div>

          {/* Right Section - Order Summary */}
          <div className="border p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>- ${((subtotal * discount) / 100).toFixed(2)}</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold">
                <span>Total Cost</span>
                <span>${totalCost.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Promo Code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="border p-2 w-full mb-4"
              />
              <button
                onClick={applyPromoCode}
                className="bg-pink-500 text-white py-2 px-4 w-full rounded"
              >
                Apply
              </button>
            </div>
            <Link href="/checkout"><button className="bg-blue-600 text-white py-2 px-4 w-full rounded mt-4">
              Checkout
            </button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;

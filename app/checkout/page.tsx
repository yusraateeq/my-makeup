// "use client";
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Header from '@/app/Components/Header';
// import Footer from '@/app/Components/Footer';

// const CheckoutPage = () => {
//   const router = useRouter();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [cart, setCart] = useState<any[]>([]);

//   // Load the cart from localStorage
//   React.useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCart(storedCart);
//   }, []);

//   const handleCheckout = async () => {
//     const orderDetails = {
//       name,
//       email,
//       address,
//       products: cart,
//     };

//     // Call API to send email
//     const response = await fetch('/api/sendEmail', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(orderDetails),
//     });

//     const data = await response.json();

//     if (data.success) {
//       alert('Order placed successfully!');
//       localStorage.removeItem('cart'); // Clear cart
//       router.push('/thank-you'); // Redirect to Thank You page
//     } else {
//       alert('Error placing order. Please try again.');
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="container mx-auto p-8 mt-24">
//         <h1 className="text-4xl font-bold mb-6 text-center">Checkout</h1>
//         <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="address" className="block text-gray-700">Shipping Address</label>
//             <textarea
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg"
//               required
//             ></textarea>
//           </div>
//           <div className="mb-6">
//             <h3 className="text-xl font-bold">Order Summary</h3>
//             <ul className="mt-4">
//               {cart.map((item) => (
//                 <li key={item.id} className="flex justify-between mb-2">
//                   <span>{item.name} (x{item.quantity})</span>
//                   <span>${(item.price * item.quantity).toFixed(2)}</span>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex justify-between mt-4 font-bold">
//               <span>Total:</span>
//               <span>
//                 $
//                 {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
//               </span>
//             </div>
//           </div>
//           <button
//             onClick={handleCheckout}
//             className="w-full py-3 bg-pink-600 text-white rounded-lg"
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CheckoutPage;





'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../Components/Header';  // Import Header component
import Footer from '../Components/Footer';  // Import Footer component

const Checkout = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('cart', JSON.stringify(cart));
    formDataToSend.append('totalAmount', cart.reduce((total, item) => total + item.price * item.quantity, 0).toString());

    // Send email using Formspree
    fetch('https://formspree.io/f/xkgwyprr', {
      method: 'POST',
      body: formDataToSend,
    })
    .then(response => {
      if (response.ok) {
        alert('Order placed successfully!');
        router.push('/thank-you'); // Redirect to a thank-you page after successful order
      } else {
        alert('There was an error placing the order.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Something went wrong!');
    });
  };

  return (
    <>
      <Header /> {/* Include the Header */}
      <main className="container mx-auto py-8 min-h-screen mt-24">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-8">Checkout</h2>

        <form  onSubmit={handlePlaceOrder} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold">Message:</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
          </div>

          <button type="submit" className="w-full py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700">
            Place Order
          </button>
        </form>

        <h3 className="text-2xl font-bold text-center mt-8">Your Cart</h3>
        <ul className="mt-4">
          {cart.map((item: any, index: number) => (
            <li key={index} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <span>${item.price} x {item.quantity}</span>
            </li>
          ))}
        </ul>
        <h4 className="text-xl font-bold text-right mt-4">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h4>
      </main>
      <Footer /> {/* Include the Footer */}
    </>
  );
};

export default Checkout;


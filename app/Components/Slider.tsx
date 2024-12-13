// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import product1 from "../assets/shadow.jpg";
// import product2 from "../assets/blush.jpg";
// import product3 from "../assets/lipstick.jpg";
// import product4 from "../assets/blander.jpg";
// import product5 from "../assets/eyeshadow.jpg";
// import product6 from "../assets/mascara.jpg";
// import product7 from "../assets/pomade.jpg";
// import product8 from "../assets/shadow1.jpg";
// import leftArrow from "../assets/left.jpg";
// import rightArrow from "../assets/right.jpg";

// const SmoothSlider = () => {
//   const products = [
//     { id: 1, name: "Eye Shadow", price: "Rs: 1300", rate: 4.5, image: product1 },
//     { id: 2, name: "Blush", price: "Rs: 2600", rate: 4.7, image: product2 },
//     { id: 3, name: "Lipstick", price: "Rs: 2800", rate: 4.2, image: product3 },
//     { id: 4, name: "Blander", price: "Rs: 2700", rate: 4.0, image: product4 },
//     { id: 5, name: "Eye Shadow", price: "Rs: 3000", rate: 4.8, image: product5 },
//     { id: 6, name: "Mascara", price: "Rs: 3000", rate: 4.8, image: product6 },
//     { id: 7, name: "Lipstick", price: "Rs: 3000", rate: 4.8, image: product7 },
//     { id: 8, name: "Eye Shadow", price: "Rs: 3000", rate: 4.8, image: product8 },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cart, setCart] = useState<any[]>([]);

//   const handleNext = () => {
//     if (currentIndex < products.length - 4) {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   const addToCart = (product: any) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.name} has been added to your cart!`);
//   };

//   return (
//     <div className="relative w-full bg-gray-100 py-10">
//       <h2 className="text-6xl text-pink-600 font-bold text-center mb-16">
//         Top Selling Products
//       </h2>

//       <div className="flex items-center justify-center">
//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className={`absolute left-4 bg-white p-2 rounded-full shadow-lg ${
//             currentIndex === 0
//               ? "opacity-50 cursor-not-allowed"
//               : ""
//           }`}
//         >
//           <Image src={leftArrow} alt="Previous" width={30} height={30} />
//         </button>

//         {/* Slider */}
//         <div className="overflow-hidden w-11/12">
//           <div
//             className="flex transition-transform duration-500"
//             style={{
//               transform: `translateX(-${currentIndex * 25}%)`,
//             }}
//           >
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="min-w-[25%] p-4 bg-white rounded-lg shadow-md mx-2"
//               >
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-80 rounded"
//                 />
//                 <h3 className="text-lg font-bold mt-2 text-center">
//                   {product.name}
//                 </h3>
//                 <p className="text-center text-gray-600">{product.price}</p>

//                 {/* Star Rating */}
//                 <div className="flex justify-center items-center mt-2 text-yellow-500">
//                   {Array.from({ length: 5 }, (_, index) => (
//                     <svg
//                       key={index}
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill={index < product.rate ? "currentColor" : "none"}
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       className="w-4 h-4"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
//                       />
//                     </svg>
//                   ))}
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="bg-pink-500 text-white font-semibold py-2 px-4 mt-4 transition-all rounded hover:bg-pink-600 w-full"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           disabled={currentIndex >= products.length - 4}
//           className={`absolute right-4 bg-white p-2 rounded-full shadow-lg ${
//             currentIndex >= products.length - 4
//               ? "opacity-50 cursor-not-allowed"
//               : ""
//           }`}
//         >
//           <Image src={rightArrow} alt="Next" width={30} height={30} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SmoothSlider;






"use client";
import React, { useState } from "react";
import Image from "next/image";
import product1 from "../assets/shadow.jpg";
import product2 from "../assets/blush.jpg";
import product3 from "../assets/lipstick.jpg";
import product4 from "../assets/blander.jpg";
import product5 from "../assets/eyeshadow.jpg";
import product6 from "../assets/mascara.jpg";
import product7 from "../assets/pomade.jpg";
import product8 from "../assets/shadow1.jpg";
import leftArrow from "../assets/left.jpg";
import rightArrow from "../assets/right.jpg";

const SmoothSlider = () => {
  const products = [
    { id: 1, name: "Eye Shadow", price: "Rs: 1300", rate: 4.5, image: product1 },
    { id: 2, name: "Blush", price: "Rs: 2600", rate: 4.7, image: product2 },
    { id: 3, name: "Lipstick", price: "Rs: 2800", rate: 4.2, image: product3 },
    { id: 4, name: "Blander", price: "Rs: 2700", rate: 4.0, image: product4 },
    { id: 5, name: "Eye Shadow", price: "Rs: 3000", rate: 4.8, image: product5 },
    { id: 6, name: "Mascara", price: "Rs: 3000", rate: 4.8, image: product6 },
    { id: 7, name: "Lipstick", price: "Rs: 3000", rate: 4.8, image: product7 },
    { id: 8, name: "Eye Shadow", price: "Rs: 3000", rate: 4.8, image: product8 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState<any[]>([]);

  const handleNext = () => {
    if (currentIndex < products.length - 4) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const addToCart = (product: any) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="relative w-full bg-gray-100 py-10">
      <h2 className="text-4xl md:text-6xl text-pink-600 font-bold text-center mb-16">
        Top Selling Products
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute left-4 bg-white p-2 rounded-full shadow-lg ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <Image src={leftArrow} alt="Previous" width={30} height={30} />
        </button>

        {/* Slider */}
        <div className="overflow-hidden w-full sm:w-11/12">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-full sm:min-w-[45%] md:min-w-[25%] p-4 bg-white rounded-lg shadow-md mx-2"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover rounded"
                />
                <h3 className="text-lg font-bold mt-2 text-center">{product.name}</h3>
                <p className="text-center text-gray-600">{product.price}</p>

                {/* Star Rating */}
                <div className="flex justify-center items-center mt-2 text-yellow-500">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={index < product.rate ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4"
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
                  onClick={() => addToCart(product)}
                  className="bg-pink-500 text-white font-semibold py-2 px-4 mt-4 transition-all rounded hover:bg-pink-600 w-full"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= products.length - 4}
          className={`absolute right-4 bg-white p-2 rounded-full shadow-lg ${
            currentIndex >= products.length - 4 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <Image src={rightArrow} alt="Next" width={30} height={30} />
        </button>
      </div>
    </div>
  );
};

export default SmoothSlider;

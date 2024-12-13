// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import logo from '../assets/logo.jpg'; // Ensure correct path
// import lips from '../assets/OIP (6).jpg'; // Ensure correct path
// import icon from '../assets/carte.png'; // Ensure correct path

// interface HeaderProps {
//   // No props needed for search now
// }

// const Header = ({ }: HeaderProps) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

//   // Handle menu toggle for mobile view
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="fixed top-0 w-full bg-white shadow-md z-50">
//       <nav className="flex justify-between items-center max-w-6xl mx-auto py-4 px-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Image src={logo} alt="Logo" width={100} height={50} />
//         </div>

//         {/* Menu Toggle Button for Mobile */}
//         <div className="block lg:hidden">
//           <button onClick={toggleMenu} className="text-gray-600">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-8 h-8"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         <hr className='border-pink-600 border-4 w-40 ml-10' />

//         {/* Add your lipstick image here */}
//         <div className="flex justify-center my-4">
//           <Image 
//             src={lips}  // Use your desired image URL here
//             alt="Black Lipstick"
//             width={30}  // Adjust the width according to your needs
//             height={30} // Adjust the height accordingly
//             className="object-contain"
//           />
//         </div>

//         <hr className='border-pink-600 border-4 w-40 mr-10' />

//         {/* Menu Items for Desktop */}
//         <ul className="hidden lg:flex space-x-10 items-center text-lg font-bold text-gray-500">
//           <li className="hover:text-pink-600 transition-all">
//             <Link href="/">Home</Link>
//           </li>
//           <li className="hover:text-pink-600 transition-all">
//             <Link href="/Shop">Shop</Link>
//           </li>
//           <li className="hover:text-pink-600 transition-all">
//             <Link href="/About">About</Link>
//           </li>
//           <li className="hover:text-pink-600 transition-all">
//             <Link href="/Contact">Contact</Link>
//           </li>
         
          
//           <div className="relative">
//             <Link href="/Cart">
//               <Image src={icon} alt="Cart Icon" width={35} height={35} />
//             </Link>
//           </div>
//         </ul>
//       </nav>

//       {/* Mobile Menu (for small screens) */}
//       <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
//         <ul className="flex flex-col items-center space-y-4 py-4">
//           <li className="hover:text-pink-600 transition-all">
//             <Link href="/">Home</Link>
//           </li>
//           <li className="hover:text-pink-600 transition-all">
//             <Link href="/Shop">Shop</Link>
//           </li>
//           <li className="hover:text-pink-600 transition-all">
//             <Link href="/About">About</Link>
//           </li>
//           <li className="hover:text-pink-600 transition-all">
//             <Link href="/Contact">Contact</Link>
//           </li>
//           <li className="hover:text-pink-600 transition-all">
//             <Link href="/Cart">Cart</Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;






'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.jpg'; // Ensure correct path
import lips from '../assets/OIP (6).jpg'; // Ensure correct path
import icon from '../assets/carte.png'; // Ensure correct path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  // Handle menu toggle for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={100} height={50} />
        </div>

        {/* Menu Toggle Button for Mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <hr className="border-pink-600 border-4 w-40 ml-10 hidden lg:block" />

        {/* Lipstick image */}
        <div className="flex justify-center my-4">
          <Image
            src={lips}
            alt="Black Lipstick"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>

        {/* Divider */}
        <hr className="border-pink-600 border-4 w-40 mr-10 hidden lg:block" />

        {/* Menu Items for Desktop */}
        <ul className="hidden lg:flex space-x-10 items-center text-lg font-bold text-gray-500">
          <li className="hover:text-pink-600 transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-pink-600 transition-all">
            <Link href="/Shop">Shop</Link>
          </li>
          <li className="hover:text-pink-600 transition-all">
            <Link href="/About">About</Link>
          </li>
          <li className="hover:text-pink-600 transition-all">
            <Link href="/Contact">Contact</Link>
          </li>
          <div className="relative">
            <Link href="/Cart">
              <Image src={icon} alt="Cart Icon" width={35} height={35} />
            </Link>
          </div>
        </ul>
      </nav>

      {/* Mobile Menu (for small screens) */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-md transition-all duration-300`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li className="hover:text-pink-600 transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-pink-600 transition-all">
            <Link href="/Shop">Shop</Link>
          </li>
          <li className="hover:text-pink-600 transition-all">
            <Link href="/About">About</Link>
          </li>
          <li className="hover:text-pink-600 transition-all">
            <Link href="/Contact">Contact</Link>
          </li>
          <li className="hover:text-pink-600 transition-all">
            <Link href="/Cart">Cart</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

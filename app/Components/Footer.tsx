// const Footer = () => {
//   return (
//     <footer className="bg-pink-800 text-white py-8 ">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Shop Section */}
//         <div>
//           <h3 className="font-bold text-lg mb-4">Shop</h3>
//           <ul className="space-y-2">
//             <li>
//               <a href="#" className="hover:text-pink-500">
//                 All Products
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-pink-500">
//                 Collections
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-pink-500">
//                 Deals
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-pink-500">
//                 New Arrivals
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Customer Service Section */}
//         <div>
//           <h3 className="font-bold text-lg mb-4">Customer Service</h3>
//           <ul className="space-y-2">
//             <li>
//               <a href="#" className="hover:text-pink-500">
//                 Contact Us
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-pink-500">
//                 FAQ
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-pink-500">
//                 Shipping & Returns
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-pink-500">
//                 Privacy Policy
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* About Us Section */}
//         <div>
//           <h3 className="font-bold text-lg mb-4">About Us</h3>
//           <ul className="space-y-2">
//             <li>
//               <a href="#" className="hover:text-pink-500">
//                 Our Story
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-pink-500">
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-pink-500">
//                 Careers
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-pink-500">
//                 Press
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Stay Connected Section */}
//         <div>
//           <h3 className="font-bold text-lg mb-4">Stay Connected</h3>
//           <p className="mb-4">
//             Subscribe to our newsletter for exclusive offers and updates.
//           </p>
//           <div className="flex">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="p-2 flex-grow rounded-l-md border-none focus:ring-2 focus:ring-pink-500"
//             />
//             <button className="bg-pink-500 px-4 py-2 text-white rounded-r-md hover:bg-pink-600">
//               Subscribe
//             </button>
//           </div>
//           <div className="flex space-x-4 mt-4">
//             <a href="#" className="hover:text-pink-500">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="#" className="hover:text-pink-500">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="#" className="hover:text-pink-500">
//               <i className="fab fa-twitter"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="text-center mt-12  border-t border-white pt-4">
//         <p>© 2024 Your Brand Name. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;









const Footer = () => {
  return (
    <footer className="bg-pink-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Shop Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Shop</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-pink-500">
                All Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Deals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                New Arrivals
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-pink-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-pink-500">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Stay Connected</h3>
          <p className="mb-4">
            Subscribe to our newsletter for exclusive offers and updates.
          </p>
          <div className="flex flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 flex-grow sm:w-72 md:w-96 rounded-l-md border-none focus:ring-2 focus:ring-pink-500 mb-4 sm:mb-0"
            />
            <button className="bg-pink-500 px-4 py-2 text-white rounded-r-md hover:bg-pink-600 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 border-t border-white pt-4">
        <p>© 2024 Your Brand Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

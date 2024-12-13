import React from 'react';
import Image from 'next/image';
import grid1 from '../assets/th (3).jpg';
import grid2 from '../assets/beuty.webp';
import grid3 from '../assets/beauty-skin-care-background_52683-731.jpg';

const Grid = () => {
  return (
    <div>
      <div className='lg:flex gap-10 px-10 justify-center mb-10 my-20'>
        {/* Image 1 */}
        <div className="sm:w-1/3">
          <Image
            src={grid1}
            alt=''
            width={400}
            height={100}
            className='w-full h-auto rounded-lg hover:-translate-y-4 hover:drop-shadow-2xl transition-all'
          />
        </div>

        {/* Image 2 */}
        <div className=" sm:w-1/3">
          <Image
            src={grid2}
            alt=''
            width={450}
            height={500}
            className='w-full h-auto rounded-lg hover:-translate-y-4 hover:drop-shadow-2xl transition-all'
          />
        </div>

        {/* Image 3 */}
        <div className="sm:w-1/3">
          <Image
            src={grid3}
            alt=''
            width={300}
            height={100}
            className='w-full h-auto rounded-lg hover:-translate-y-4 hover:drop-shadow-2xl transition-all'
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;

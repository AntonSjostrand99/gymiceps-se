import React from 'react';
import Image from 'next/image';

function Brands() {
  return (
    <div className='container mx-auto'>

      <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {[...Array(5)].map((_, index) => (
          <div key={index} className='flex justify-center items-center'>
            <div className='p-4 border-2 border-black rounded-full flex justify-center items-center w-24 h-24 sm:w-40 sm:h-40'>
              <Image
                width={120}
                height={120}
                src='/Gymiceps.png'
                alt='logga'
                className='cursor-pointer object-contain'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;

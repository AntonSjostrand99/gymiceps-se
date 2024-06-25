import React from 'react';
import Image from 'next/image';

function Brands() {
  return (
    <div className='container mx-auto'>
        <div className='flex justify-start items-start mb-2'>
        <h2 className=' text-2xl'>POPULÄRA MÄRKEN</h2>
        </div>
 
      <div className='grid grid-cols-1 sm:flex sm:justify-between sm:items-center gap-4 '>
        <div className='p-4 border-2 border-black rounded-full'>
          <Image
            width={120}
            height={40}
            src='/Gymiceps.png'
            alt='logga'
            className='cursor-pointer'
          />
        </div>
        <div className='p-4 border-2 border-black rounded-full'>
          <Image
            width={120}
            height={40}
            src='/Gymiceps.png'
            alt='logga'
            className='cursor-pointer'
          />
        </div>
        <div className='p-4 border-2 border-black rounded-full'>
          <Image
            width={120}
            height={40}
            src='/Gymiceps.png'
            alt='logga'
            className='cursor-pointer'
          />
        </div>
        <div className='p-4 border-2 border-black rounded-full'>
          <Image
            width={120}
            height={40}
            src='/Gymiceps.png'
            alt='logga'
            className='cursor-pointer'
          />
        </div>
        <div className='p-4 border-2 border-black rounded-full'>
          <Image
            width={120}
            height={40}
            src='/Gymiceps.png'
            alt='logga'
            className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
}

export default Brands;

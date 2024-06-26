'use client';

import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

const items = [
  <Image key="1" src="/Gymiceps.png" alt="Bild 1" width={300} height={300} />,
  <Image key="2" src="/Gymiceps.png" alt="Bild 2" width={300} height={300} />,
  <Image key="3" src="/Gymiceps.png" alt="Bild 3" width={300} height={300} />,
  <Image key="4" src="/Gymiceps.png" alt="Bild 4" width={300} height={300} />,
];

const Carousel: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className='flex justify-center items-center'>
    <AliceCarousel
      items={items}
      autoPlay={true}
      autoPlayInterval={3000}
      infinite={true}
      responsive={responsive}
      disableButtonsControls={true}
      disableDotsControls={true}
    />
    </div>
    
  );
};

export default Carousel;
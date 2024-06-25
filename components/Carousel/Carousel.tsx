
'use client'

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <img src="/Gymiceps.png" alt="Bild 1" />,
  <img src="/Gymiceps.png" alt="Bild 2" />,
  <img src="/Gymiceps.png" alt="Bild 3" />,
  <img src="/Gymiceps.png" alt="Bild 4" />,
 
];

const Carousel: React.FC = () => {
  return (
    <AliceCarousel
      items={items}
      autoPlay={true}
      autoPlayInterval={1000}
      buttonsDisabled={false}
      indicators={true}
      itemsPerSlide={4} // Justera detta värde för att visa det önskade antalet bilder
      mouseTracking={true}
    />
  );
};

export default Carousel;


"use client"

import React, { useState, useEffect, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';


const items = [
  <div key="1" className="w-full h-full pr-2">
     <div className="bg-white rounded-full h-40 w-40 p-5 flex flex-col items-center justify-center border border-custom-ligt-blue cursor-pointer hover:bg-custom-ligt-blue hover:border-white">
     <SentimentSatisfiedAltIcon/>
     <p className="text-gray-800 text-sm font-medium text-center">Kosttillskott</p>
   
   </div>
  </div>,
  <div key="2" className=" w-full h-full pr-2">
       <div className="bg-white rounded-full h-40 w-40 p-5 flex flex-col items-center justify-center border border-custom-ligt-blue cursor-pointer hover:bg-custom-ligt-blue hover:border-white">
     <SentimentSatisfiedAltIcon/>
     <p className="text-gray-800 text-sm font-medium text-center">Dryck</p>
   
   </div>
  </div>,
  <div key="3" className=" w-full h-full pr-2">
       <div className="bg-white rounded-full h-40 w-40 p-5 flex flex-col items-center justify-center border border-custom-ligt-blue cursor-pointer hover:bg-custom-ligt-blue hover:border-white">
     <SentimentSatisfiedAltIcon/>
     <p className="text-gray-800 text-sm font-medium text-center">Bars</p>
   
   </div>
  </div>,
  <div key="4" className=" w-full h-full pr-2">
        <div className="bg-white rounded-full h-40 w-40 p-5 flex flex-col items-center justify-center border border-custom-ligt-blue cursor-pointer hover:bg-custom-ligt-blue hover:border-white">
     <SentimentSatisfiedAltIcon/>
     <p className="text-gray-800 text-sm font-medium text-center">Damkläder</p>
   
   </div>
  </div>,
    <div key="5" className=" h-full pr-2">
       <div className="bg-white rounded-full h-40 w-40 p-5 flex flex-col items-center justify-center border border-custom-ligt-blue cursor-pointer hover:bg-custom-ligt-blue hover:border-white">
     <SentimentSatisfiedAltIcon/>
     <p className="text-gray-800 text-sm font-medium text-center">Herrkläder</p>
   
   </div>
   </div>,
     <div key="6" className=" w-full h-full pr-2">
       <div className="bg-white rounded-full h-40 w-40 p-5 flex flex-col items-center justify-center border border-custom-ligt-blue cursor-pointer hover:bg-custom-ligt-blue hover:border-white">
     <SentimentSatisfiedAltIcon/>
     <p className="text-gray-800 text-sm font-medium text-center">Barnkläder</p>
   
   </div>
    </div>,
     <div key="7" className=" w-full h-full pr-2">
     <div className="bg-white rounded-full h-40 w-40 p-5 flex flex-col items-center justify-center border border-custom-ligt-blue cursor-pointer hover:bg-custom-ligt-blue hover:border-white">
   <SentimentSatisfiedAltIcon/>
   <p className="text-gray-800 text-sm font-medium text-center">Träningstillbehör</p>
 
 </div>
  </div>,
 
];

const CategoryCarousel: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const carouselRef = useRef<AliceCarousel>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
    1224: { items: 5 },
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative">
      <AliceCarousel
        items={items}
        infinite={true}
        responsive={responsive}
        disableButtonsControls={true}
        disableDotsControls={true}
        ref={carouselRef}
      />
      <div className=" bottom-4 left-0 w-full flex items-center gap-2 mt-2">
        <button
          className=" p-2 text-black px-4 rounded-md shadow-md focus:outline-none border border-black hover:bg-white"
          onClick={() => carouselRef.current?.slidePrev()}
        >
          <ArrowBackIosIcon />
        </button>
        <button
          className=" p-2 text-black px-4 rounded-md shadow-md focus:outline-none border border-black hover:bg-white"
          onClick={() => carouselRef.current?.slideNext()}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default CategoryCarousel;

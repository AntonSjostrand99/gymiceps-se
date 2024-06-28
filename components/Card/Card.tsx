import React from 'react';
import Image from 'next/image';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

// Definiera ett interface för props
interface CardProps {
  title: string;
  size: string;
  price: string;
  imageSrc: string; // Lägg till imageSrc prop
}

// Card-komponenten tar emot props som matchar CardProps
const Card: React.FC<CardProps> = ({ title, size, price, imageSrc }) => {
  return (
    <article className='flex flex-col justify-start items-start border border-black p-4'>
      <div className="relative w-full h-56 sm:h-72 border-black bg-custom-ligt-blue">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        <button className="absolute bottom-2 right-2 text-black p-2 rounded-full shadow-md focus:outline-none border border-custom-ligt-blue bg-white hover:bg-custom-ligt-blue hover:border-white">
          <ShoppingBasketIcon />
        </button>
      </div>
      <div className="mt-4 flex flex-col justify-between w-full">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm">{size}</p>
          <p className="text-sm">{price}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;


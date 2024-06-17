"use client"

import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import ContactPageIcon from '@mui/icons-material/ContactPage';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-custom-black border-b-8 border-custom-yellow sm:p-6 md:p-5 lg:p-10 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Länkar - dolda på mindre skärmar */}
        <div className="hidden lg:flex items-center space-x-4">

          <div className="relative group">
            <Link href="/shop" className="text-white hover:text-gray-300 flex items-center" title="Produkter">
              <InventoryIcon />
            </Link>
            <div className="absolute left-0 mt-2 w-56 bg-white border-4 border-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="/shop" className="block px-4 py-2 text-gray-800 hover:bg-yellow-500">Snapbacks</Link>
              <Link href="/shop" className="block px-4 py-2 text-gray-800 hover:bg-yellow-500">Beanies</Link>
              <Link href="/shop" className="block px-4 py-2 text-gray-800 hover:bg-yellow-500">Trucker Hats</Link>
            </div>
          </div>
          <Link href={'/contact'} className="text-white hover:text-gray-300" title="Kontakt"><ContactPageIcon /></Link>

        </div>

        {/* Logga - placerad till vänster på mindre skärmar och centrerad på större skärmar */}
        <div className="flex lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <Link href={'/'}>
            <h1>Gymiceps</h1>
          </Link>
        </div>

        {/* Kassa och inloggning - alltid till höger på större skärmar */}
        <div className="hidden lg:flex items-center space-x-4">

          
          <Link href={'/login'} className="text-white hover:text-gray-300" title="Mina sidor"><SentimentSatisfiedAltIcon /></Link>

        </div>

        {/* Hamburgermeny och Kassa/Inloggning - endast synlig på mindre skärmar */}
        <div className="flex lg:hidden items-center space-x-4">
          
          <Link href={'/login'} className="text-white hover:text-gray-300" title="Mina sidor"><SentimentSatisfiedAltIcon /></Link>

          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 15H5v-2h14v2zm0-5H5V8h14v2zm0-5H5V3h14v2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown-meny för mindre skärmar */}
      {isOpen && (
        <div className="lg:hidden mt-2">
          <div className="block px-2 pt-2 pb-4 space-y-1">
            <Link href={'/'} className="text-white block hover:text-gray-300">Hem</Link>
            <Link href={'/shop'} className="text-white block hover:text-gray-300">Produkter</Link>
            <Link href={'/contact'} className="text-white block hover:text-gray-300">Kontakt</Link>
            <Link href={'/cart'} className="text-white block hover:text-gray-300">Kassa</Link>
            <Link href={'/login'} className="text-white block hover:text-gray-300">Inloggning</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

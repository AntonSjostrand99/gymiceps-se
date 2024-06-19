"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" bg-custom-blue shadow-lg ">
      <div className="container mx-auto">
      <div className=" flex justify-center items-center pt-6">
            <Image
              width={190}
              height={40}
              src="/Gymiceps.png"
              alt="logga"
           
            />
          </div>

        <div className="flex justify-between items-center py-4">
          <div className='hidden md:flex space-x-6'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
           <InstagramIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon/>
            </a>

          </div>
            <div className="hidden md:flex space-x-6">
              <Link href="/kosttillskott" className="hover:text-yellow-500">Kosttillskott</Link>
              <Link href="/drycker" className="hover:text-yellow-500">Drycker</Link>
              <Link href="/klader" className="hover:text-yellow-500">Kläder</Link>
              <Link href="/traningstillbehor" className="hover:text-yellow-500">Träningstillbehör</Link>
            </div>
        
          <div className="hidden md:flex items-center space-x-6">
         
            <ShoppingBasketIcon />
            <SentimentSatisfiedAltIcon />
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <Link href="/kosttillskott" className="hover:text-yellow-500">Kosttillskott</Link>
            <Link href="/drycker" className="hover:text-yellow-500">Drycker</Link>
            <Link href="/klader" className="hover:text-yellow-500">Kläder</Link>
            <Link href="/traningstillbehor" className="hover:text-yellow-500">Träningstillbehör</Link>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <ShoppingBasketIcon />
              <SentimentSatisfiedAltIcon />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
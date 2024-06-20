"use client";

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
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav className="bg-custom-blue shadow-lg">
      <div className="container mx-auto">
        {/* Logo and hamburger menu for small screens */}
        <div className="flex justify-between items-center pt-6 md:hidden">
          <Link href={'/'}>
            <Image
              width={190}
              height={40}
              src="/Gymiceps.png"
              alt="logga"
              className='cursor-pointer'
            />
          </Link>
          <button onClick={toggleMenu}>
            {menuOpen ? <CloseIcon className='text-red-500' /> : <MenuIcon className='text-white' />}
          </button>
        </div>

        {/* Search bar for small screens, always visible */}
        <div className="md:hidden flex justify-center items-center mt-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Sök..."
          />
        </div>

        {/* Main navbar content for larger screens */}
        <div className="hidden md:flex flex-col items-center">
          <div className="flex justify-center items-center pt-6">
            <Link href={'/'}>
              <Image
                width={190}
                height={40}
                src="/Gymiceps.png"
                alt="logga"
                className='cursor-pointer'
              />
            </Link>
          </div>

          <div className="flex justify-between items-center py-4 w-full">
            <div className="flex space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-110">
                <InstagramIcon className='text-white' />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-110">
                <FacebookIcon className='text-white' />
              </a>
              <a href="https://github.com/AntonSjostrand99" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-110">
                <GitHubIcon className='text-white' />
              </a>
            </div>
            <div className="flex space-x-6">
              <Link href="/kosttillskott" className="text-white hover:text-yellow-500">Kosttillskott</Link>
              <Link href="/drycker" className="text-white hover:text-yellow-500">Drycker</Link>
              <Link href="/klader" className="text-white hover:text-yellow-500">Kläder</Link>
              <Link href="/traningstillbehor" className="text-white hover:text-yellow-500">Träningstillbehör</Link>
            </div>
            <div className="flex items-center space-x-6">
              <SearchIcon onClick={toggleSearch} className="transform transition-transform duration-200 hover:scale-110 text-white cursor-pointer" />
              <ShoppingBasketIcon className="transform transition-transform duration-200 hover:scale-110 text-white cursor-pointer" />
              <SentimentSatisfiedAltIcon className="transform transition-transform duration-200 hover:scale-110 text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Dropdown menu for small screens */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center justify-center space-y-4 mt-4">
            <Link href="/kosttillskott" className="text-white hover:text-yellow-500">Kosttillskott</Link>
            <Link href="/drycker" className="text-white hover:text-yellow-500">Drycker</Link>
            <Link href="/klader" className="text-white hover:text-yellow-500">Kläder</Link>
            <Link href="/traningstillbehor" className="text-white hover:text-yellow-500">Träningstillbehör</Link>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-110">
                <FacebookIcon className='text-white' />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-110">
                <InstagramIcon className='text-white' />
              </a>
              <a href="https://github.com/AntonSjostrand99" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-110">
                <GitHubIcon className='text-white' />
              </a>
              <ShoppingBasketIcon className="transform transition-transform duration-200 hover:scale-110 text-white" />
              <SentimentSatisfiedAltIcon className="transform transition-transform duration-200 hover:scale-110 text-white" />
            </div>
          </div>
        )}

        {/* Search bar for larger screens, toggled by search icon */}
        {searchOpen && (
          <div className="hidden md:flex justify-center items-center mt-4">
            <input
              type="text"
              className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
              placeholder="Sök..."
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

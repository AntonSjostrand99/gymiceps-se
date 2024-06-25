"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
      >
        Menu <ArrowDropDownIcon className="ml-2" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <Link href="/kosttillskott">
            <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Kosttillskott</p>
          </Link>
          <Link href="/drycker">
            <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Drycker</p>
          </Link>
          <Link href="/klader">
            <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Kläder</p>
          </Link>
          <Link href="/traningstillbehor">
            <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Träningstillbehör</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

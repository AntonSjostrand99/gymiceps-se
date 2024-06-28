"use client";

import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const FilterSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && !document.getElementById('sidebar')?.contains(event.target as Node)) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Knappen för att öppna sidomenyn */}
      <button
        onClick={toggleSidebar}
        className="text-black px-4 py-2 rounded-md shadow-md focus:outline-none border border-black hover:bg-white md:w-auto w-full min-w-56"
      >
        Filter & Sortera
      </button>

      {/* Sidomenyn */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-end md:justify-end">
          <div id="sidebar" className="bg-white w-full sm:w-96 p-4 shadow-md h-full md:w-64">
            {/* Stängningsknapp */}
            <button
              onClick={closeSidebar}
              className="text-gray-500 hover:text-gray-800 focus:outline-none mb-2"
            >
              <CloseIcon className='text-red-500' /> 
            </button>

            {/* Innehåll i sidomenyn */}
            <h2 className="text-lg font-semibold mb-4">Filtrera och sortera</h2>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-800 hover:text-blue-500 focus:outline-none">Filteralternativ 1</button>
              </li>
              <li>
                <button className="text-gray-800 hover:text-blue-500 focus:outline-none">Filteralternativ 2</button>
              </li>
              <li>
                <button className="text-gray-800 hover:text-blue-500 focus:outline-none">Filteralternativ 3</button>
              </li>
              <li>
                <DropdownMenu/>
              </li>
              {/* Lägg till fler filter- och sorteralternativ här */}
            </ul>

            <div className='flex flex-col sm:flex-row justify-between items-center gap-2 mt-5 w-full'>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-1/2'>Rensa</button>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-1/2'>Visa</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSidebar;
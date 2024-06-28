import React, { useState, useEffect, useRef } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
      <button onClick={openDropdown} className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Menu
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 1</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 2</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Option 3</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

"use client"
import React, { useEffect, useState } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Funktion för att visa knappen när användaren scrollar nedåt
  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Lägg till eventlyssnare för scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Ta bort eventlyssnare när komponenten unmountas
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Funktion för att scrolla till toppen av sidan
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          title="Gå till toppen"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#ffffff',
            color: 'black',
            border: '2px solid #87CEFA',
            borderRadius: '50%',
            padding: '10px',
            cursor: 'pointer',
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
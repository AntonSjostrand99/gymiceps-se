// components/ImageOverlayComponent.js

import React from 'react';

const ImageOverlayComponent = () => {
  return (
    <div className="relative  bg-cyan-400">
      <img
        src="/Gymiceps.png"
        alt="Beskrivande text"
        className="w-full h-auto"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold text-black">Text över bilden</h1>
          <p className="mt-2">Beskrivningstext här</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Knapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlayComponent;

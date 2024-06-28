
import React from 'react';

interface ImageOverlayComponentProps {
  imgSrc: string;
  altText: string;
  mainText: string;
  descriptionText: string;
  buttonText: string;
}

const ImageOverlayComponent: React.FC<ImageOverlayComponentProps> = ({
  imgSrc,
  altText,
  mainText,
  descriptionText,
  buttonText,
}) => {
  return (
    <div className="relative bg-custom-ligt-blue p-4">
      <img
        src={imgSrc}
        alt={altText}
        className="w-full h-auto mb-4"
      />
      <div className="text-center">
        <h1 className="text-2xl font-bold text-black mb-2">{mainText}</h1>
        <p className="mb-4">{descriptionText}</p>
        <button className="hover:bg-custom-ligt-blue border hover:border-white bg-white text-black border-custom-ligt-blue font-bold py-2 px-4">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ImageOverlayComponent;
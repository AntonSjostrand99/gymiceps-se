import React from 'react'
import ImageOverlayComponent from '../ImageOverlayComponent/ImageOverlayComponent'

function ImageSection() {
  return (
    <div className="container mx-auto flex flex-col sm:flex-row gap-4 h-auto">
    <div className="w-full sm:w-1/2">
      <ImageOverlayComponent imgSrc={'/Piller.png'} altText={''} mainText={'Pre workout'} descriptionText={'Lorem ipsum dolor sit amet consectetur'} buttonText={'Köp nu'} />
    </div>
    <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
      <ImageOverlayComponent imgSrc={'Bars.png'} altText={''} mainText={'Proteinbar'} descriptionText={'Lorem ipsum dolor sit amet consectetur'} buttonText={'Köp nu'} />
    </div>
  </div>
  )
}

export default ImageSection

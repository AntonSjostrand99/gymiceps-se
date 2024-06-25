import React from 'react'
import ImageOverlayComponent from '../ImageOverlayComponent/ImageOverlayComponent'

function ImageSection() {
  return (
    <div className="container mx-auto flex flex-col sm:flex-row gap-4">
    <div className="w-full sm:w-1/2">
      <ImageOverlayComponent />
    </div>
    <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
      <ImageOverlayComponent />
    </div>
  </div>
  )
}

export default ImageSection

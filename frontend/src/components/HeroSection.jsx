// Completed

import React, { useState, padding, useEffect } from 'react';

function HeroSection({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(current => (current + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval); 
  }, [images.length]);


  const handleClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div
    className='
    px-0 py-0 mx-0 my-0 
    w-[100vw] 
    h-[100vh]
    overflow-hidden 
    relative 
    items-center
    '
    style={{ padding: "0", width: '100%', height: '100%' }}

    >
      <div
        className='w-full h-full transition-transform duration-1000 ease-in-out flex'
        style={{ 
            width: `${images.length * 100}%`, 
            height: '100%',
            display: 'flex', 
            transform: `translateX(-${currentIndex * 100 / images.length}%)` }}
      >
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image.src} 
            alt={`Slide ${index}`}
            onClick={() => handleClick(image.link)} // handle Click
            // className="w-full h-full object-cover"
            className="w-full h-full flex items-center justify-center"
            style={{ 
                width: `${100 / images.length}%`, 
                // height: `${100 / images.length}%`, 
                height: `auto`, 
                objectFit: 'cover' 
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;

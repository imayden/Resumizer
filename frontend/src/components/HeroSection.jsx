// Updated by Earth https://github.com/earthcha
// Modified by Ayden - https://github.com/imayden

import React from 'react';

const HeroSection = () => {
  return (
    <div className="h-96 flex items-center justify-center text-white p-4 transition duration-300 ease-in transform hover:scale-110">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Welcome to Resumizer</h1>
        <p className="text-3xl md:text-5xl text-5xl mb-4">-The Efficient AI resume maker-</p>
      </div>
    </div>
  );
};

export default HeroSection;
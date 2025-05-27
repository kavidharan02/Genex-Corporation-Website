import React, { useState, useEffect } from 'react';
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.jpg';
import home4 from '../assets/home4.jpg';

const images = [
  {
    url: home1,
    alt: 'Business Technology'
  },
  {
    url: home2,
    alt: 'Team Collaboration'
  },
  {
    url: home3,
    alt: 'Digital Innovation'
  },
  {
    url: home4,
    alt: 'Business Growth'
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const handleImageError = () => {
    setError(true);
  };

  if (error) {
    return (
      <div className="relative w-full h-[350px] overflow-hidden rounded-xl shadow-2xl bg-gray-800 flex items-center justify-center">
        <p className="text-white text-lg">Failed to load images</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[350px] overflow-hidden rounded-xl shadow-2xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </div>
      ))}
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-red-600' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
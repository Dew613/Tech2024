"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface SlideItem {
  image: string;
  description: string;
}

const slides: SlideItem[] = [
  { image: '/assests/blue splash right.png', description: 'Description 1' },
  { image: '/assests/blue splash right.png', description: 'Description 2' },
  { image: '/assests/blue splash right.png', description: 'Description 3' },
  { image: '/assests/blue splash right.png', description: 'Description 4' },
  { image: '/assests/blue splash right.png', description: 'Description 5' },
  { image: '/assests/blue splash right.png', description: 'Description 6' },
];

const InfiniteSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, forceUpdate] = useState({});

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    forceUpdate({});
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    forceUpdate({});
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md z-0"></div>
      <div className="relative flex items-center justify-center h-full">
        {slides.map((slide, index) => {
          const offset = ((index - currentIndex + slides.length) % slides.length) - 2;
          return (
            <div
              key={`slide-${index}-${currentIndex}`}
              className={`absolute w-[80%] h-[90%] transition-all duration-500 ease-in-out`}
              style={{
                transform: `translateX(${offset * 110}%) scale(${Math.abs(offset) === 0 ? 1 : 0.8})`,
                zIndex: Math.abs(offset) === 0 ? 10 : 5,
                opacity: Math.abs(offset) <= 1 ? 1 : 0,
              }}
            >
              <img src={slide.image} alt={slide.description} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
                {slide.description}
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-20"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-20"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default InfiniteSlider;
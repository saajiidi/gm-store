import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2670&auto=format&fit=crop",
    alt: "Cycling Passion",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2670&auto=format&fit=crop",
    alt: "Mountain Biking",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c311a6?q=80&w=2670&auto=format&fit=crop",
    alt: "Urban Cycling",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1520696956272-9b2512f7f90f?q=80&w=2670&auto=format&fit=crop",
    alt: "Gear Up",
  },
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
            }`}
          key={slide.id}
        >
          {index === current && (
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}

      {/* Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-colors z-10"
        onClick={prevSlide}
      >
        <FaChevronLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-colors z-10"
        onClick={nextSlide}
      >
        <FaChevronRight size={30} />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${current === index ? "bg-white" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

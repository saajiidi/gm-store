import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618176580970-f65555d49ba3?q=80&w=2670&auto=format&fit=crop", // Moody black motorcycle
    alt: "Dark Aesthetic Moto",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=2670&auto=format&fit=crop", // Classic motorbike / Biker vibe
    alt: "Ride Free",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1614165936126-2ed18e471b10?q=80&w=2670&auto=format&fit=crop", // Neon/Night bike aesthetic
    alt: "Neon Night Ride",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1511993226957-cd1667ef9d33?q=80&w=2670&auto=format&fit=crop", // Misty aesthetic cycling
    alt: "Misty Journey",
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

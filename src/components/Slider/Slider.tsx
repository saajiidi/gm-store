// src/components/Slider.tsx

import React from "react";
import slider1 from "../../assets/img/gear-master-slider.png"; // Ensure this path is correct
import slider2 from "../../assets/img/slider2.jpg"; // Ensure this path is correct
import slider3 from "../../assets/img/slider3.png"; // Ensure this path is correct

const Slider: React.FC = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div className="carousel-inner relative w-full overflow-hidden h-96">
        {" "}
        {/* Set a fixed height */}
        <div className="carousel-item active relative float-left w-full h-full">
          <img
            src={slider1}
            className="block w-full h-full object-cover"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item relative float-left w-full h-full">
          <img
            src={slider2}
            className="block w-full h-full object-cover"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item relative float-left w-full h-full">
          <img
            src={slider3}
            className="block w-full h-full object-cover"
            alt="Slide 3"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 no-underline hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 no-underline hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider;

import React, { useState, useEffect } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

const images = ["/p1.jpg", "/p2.jpg", "/p3.jpg"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* SLIDER */}
      <div className="w-full h-screen relative overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover ease-in-out duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Points de navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
        {/* CONTENU TEXTE */}
        <div className="w-1/2 flex flex-col justify-center items-center p-4 absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 gap-10">
          <img src="/example-logo.png" alt="logo" />
          <div className="text-center md:text-4xl font-bold font-stretch-extra-condensed ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            suscipit numquam nobis unde accusantium? Amet, a labore expedita,
            ullam quaerat eveniet, et ut modi non magni cumque fuga pariatur
            minima.
          </div>
          <button className="bg-blue-500 text-white px-6 py-4 rounded-lg shadow-md hover:bg-blue-400 md:text-xl font-bold cursor-pointer flex justify-center items-center gap-2">
          <IoInformationCircleOutline className="md:text-4xl" />
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;

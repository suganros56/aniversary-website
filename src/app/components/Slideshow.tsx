'use client';
import React, { useState } from "react";

const images = [
  "/images/first_meet.jpg",
  "/images/first_date.jpg",
  "/images/pondy_trip.jpg",
  // Add more image paths here!
];

const captions = [
  "That first magical meet 💞",
  "Our first date—so many laughs!",
  "Pondy trip: sunsets & memories 🌊",
  // Match with images index
];

const Slideshow: React.FC = () => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const prevSlide = () => setIndex((i) => (i <= 0 ? total - 1 : i - 1));
  const nextSlide = () => setIndex((i) => (i >= total - 1 ? 0 : i + 1));

  return (
    <div className="w-full max-w-2xl mx-auto py-8 flex flex-col items-center">
      <div className="relative w-full h-64 bg-gray-100 rounded-xl shadow overflow-hidden flex items-center justify-center">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="object-cover w-full h-full transition-all duration-700"
        />
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-pink-200 hover:bg-pink-400 text-pink-900 rounded-full p-2 shadow"
          onClick={prevSlide}
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-200 hover:bg-pink-400 text-pink-900 rounded-full p-2 shadow"
          onClick={nextSlide}
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
      <div className="mt-4 text-lg text-center text-pink-600 font-semibold">
        {captions[index]}
      </div>
      <div className="flex mt-2 gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-pink-500" : "bg-pink-200"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

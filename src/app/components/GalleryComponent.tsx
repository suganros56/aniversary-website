'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";

// List your image paths here
const images: string[] = [
  "/gallery/blue.jpg",
  "/gallery/birthday.jpg",
  "/gallery/coolers.jpg",
  "/gallery/ice.jpg",
  "/gallery/inde.jpg",
  "/gallery/mumbai.jpg",
  "/gallery/purple.jpg",
  "/gallery/saf.jpg",
  "/gallery/shopping.jpg",
  "/gallery/sleep.jpg",
  "/gallery/terrace.jpg",
  "/gallery/zing1.jpg",
"/gallery/pinkpotato.jpg",
"/gallery/vase.jpg",
"/gallery/Kovil.png",
  // ...add more
];

const HeartFloat: React.FC = () => (
  <motion.div
    initial={{ y: 40, opacity: 0.6 }}
    animate={{ y: -40, opacity: 1 }}
    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    className="absolute left-1/2 -translate-x-1/2 top-3 text-5xl text-pink-400 z-20 pointer-events-none"
    style={{ filter: "drop-shadow(0 2px 8px #f472b6)" }}
  >
    ❤️
  </motion.div>
);

const Gallery: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="flex flex-col items-center relative min-h-[480px]">
      <HeartFloat />
      <div className="w-full flex justify-center items-center mt-10 relative">
        <button
          onClick={prev}
          className="absolute left-0 px-3 py-2 text-2xl text-pink-600 bg-white/70 rounded-full z-10 hover:bg-pink-50 transition"
          aria-label="Previous Photo"
        >
          💗⬅️
        </button>
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={`Gallery image ${current + 1}`}
          className="rounded-2xl shadow-2xl border-4 border-pink-200 max-h-[300px] md:max-h-[380px] max-w-[90vw] object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        />
        <button
          onClick={next}
          className="absolute right-0 px-3 py-2 text-2xl text-pink-600 bg-white/70 rounded-full z-10 hover:bg-pink-50 transition"
          aria-label="Next Photo"
        >
          💗➡️
        </button>
      </div>
      <div className="mt-6 text-gray-600 text-lg">
        {current + 1} / {images.length}
      </div>
    </div>
  );
};

export default Gallery;

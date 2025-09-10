'use clinet';
import React from "react";
import { motion } from "framer-motion";



// Edit your romantic timeline stories & images here!
const timelineData = [
  {
    date: "2023-09-09",
    title: "We Fell in Love",
    description: "Two souls, one spark—our very first magical moment together.",
    image: "/images/love_begins.jpg",
  },
  {
    date: "2024-02-14",
    title: "A Valentine to Remember",
    description: "Dancing, laughter, and promises under city lights.",
    image: "/images/valentine.jpg",
  },
  {
    date: "2024-06-07",
    title: "Seaside Dreams",
    description: "Sunsets, ice-cream, and endless hand-holding by the beach.",
    image: "/images/beach.jpg",
  },
  {
    date: "2025-09-09",
    title: "Second Anniversary",
    description: "A deeper bond, new adventures, and countless cherished memories.",
    image: "/images/anniversary_2.jpg",
  },
];

const polaroidRotations = ["rotate-[-6deg]", "rotate-[4deg]", "rotate-[-3deg]", "rotate-[7deg]"]; // alternate for dreamy feel

const DeluxeRomanticTimeline: React.FC = () => (
  <div className="relative min-h-screen py-16 lg:py-28 flex flex-col items-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
    {/* Dreamy animated hearts background */}
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {[...Array(17)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute select-none"
          style={{
            left: `${Math.random() * 98}%`,
            top: `${Math.random() * 96}%`,
            opacity: 0.17 + Math.random() * 0.21,
            fontSize: `${24 + Math.random() * 52}px`,
            filter: "blur(0.7px)",
          }}
          animate={{
            y: [0, -110, 0],
            opacity: [0.14, 0.31, 0.07],
          }}
          transition={{
            duration: 12 + Math.random() * 7,
            repeat: Infinity,
            delay: Math.random() * 5,
            repeatType: "reverse",
          }}
        >💖</motion.div>
      ))}
    </div>

    {/* Timeline Title */}
    <motion.h2
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="text-5xl md:text-7xl font-black text-center bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent mb-16 drop-shadow-xl"
    >
      Our Love Timeline
    </motion.h2>

    {/* Main timeline and moments */}
    <div className="relative w-full flex flex-col items-center max-w-2xl px-4">
      {/* Dreamy glowing timeline strip */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-pink-300 via-white/60 to-fuchsia-200 opacity-70 blur-md rounded-full shadow-xl" />

      <div className="flex flex-col gap-24 w-full z-10">
        {timelineData.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          const rotClass = polaroidRotations[idx % polaroidRotations.length];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isLeft ? -100 : 100, scale: 0.94 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.7, type: "spring" }}
              className={`w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
            >
              <div className={`relative group ${rotClass} w-[330px] md:w-[400px]`}>
                {/* Glowing connector heart */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-14 flex flex-col items-center z-10">
                  <motion.span
                    animate={{ scale: [1, 1.19, 1], rotate: [0, 9, -7, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3 + Math.random(),
                      type: "tween",
                      ease: "easeInOut",
                    }}
                    className="text-4xl md:text-5xl text-pink-500 drop-shadow-xl"
                    style={{
                      textShadow:
                        "0 0 14px #fb7185, 0 0 36px #fca5a5, 0 0 40px #e879f9",
                    }}
                  >
                    💗
                  </motion.span>
                  <div className="w-1 h-8 bg-pink-200 rounded-full opacity-70" />
                </div>
                {/* Polaroid Card */}
                <motion.div
                  whileHover={{
                    y: -22,
                    scale: 1.045,
                    boxShadow: "0 10px 60px #f9a8d4, 0 1.5px 8px #fb7185",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="relative bg-white/90 backdrop-blur-md rounded-3xl border-2 border-pink-200 p-6 pb-4 shadow-2xl"
                  style={{
                    minHeight: 238,
                  }}
                >
                  <div className="mb-2 flex items-center">
                    <span className="text-lg text-pink-600 font-bold mr-3">{item.date}</span>
                    <span className="text-2xl">🌸</span>
                  </div>
                  <div className="text-2xl font-extrabold text-fuchsia-700 mb-1 font-cursive leading-tight">{item.title}</div>
                  <div className="text-gray-700 font-serif mb-2">{item.description}</div>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-xl mt-3 border-2 border-pink-200 shadow-lg max-h-44 w-full object-cover"
                    />
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
);

export default DeluxeRomanticTimeline;

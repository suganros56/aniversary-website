'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Change to your actual relationship start date!
const RELATIONSHIP_START = new Date("2023-09-14");

function getTimeDetails() {
  const now = new Date();
  let years = now.getFullYear() - RELATIONSHIP_START.getFullYear();
  let months = now.getMonth() - RELATIONSHIP_START.getMonth();
  let days = now.getDate() - RELATIONSHIP_START.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const diffInMs = now.getTime() - RELATIONSHIP_START.getTime();
  const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  return { years, months, days, totalDays };
}

const WowAnniversaryTime: React.FC = () => {
  const [details, setDetails] = useState(getTimeDetails());

  // Update every day at midnight
  useEffect(() => {
    const tick = setInterval(() => setDetails(getTimeDetails()), 60 * 60 * 1000);
    return () => clearInterval(tick);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center min-h-[340px] px-6 pt-6 pb-8 mx-auto bg-gradient-to-br from-pink-50 to-fuchsia-100 shadow-2xl rounded-3xl max-w-md ring-2 ring-pink-200"
    >
      {/* Floating animated heart */}
      <motion.span
        className="absolute left-6 top-4 text-4xl text-pink-500 drop-shadow-lg glow-heart pointer-events-none"
        animate={{
          scale: [1, 1.29, 1],
          rotate: [0, 21, -13, 0]
        }}
        transition={{ repeat: Infinity, duration: 3, type: "tween", ease: "easeInOut" }}
      >💖</motion.span>

      <div className="text-center mb-2">
        <span className="block text-lg font-semibold text-pink-400 tracking-widest uppercase">
          Our journey began:
        </span>
        <span className="block text-2xl md:text-3xl font-extrabold text-pink-600 drop-shadow">
          {RELATIONSHIP_START.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
        </span>
      </div>

      {/* Years / Months / Days */}
      <div className="flex items-center justify-center gap-6 mt-7 mb-3">
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-bold text-fuchsia-500 drop-shadow pb-1">{details.years}</span>
          <span className="text-md text-pink-700 font-semibold">Years</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-bold text-pink-400 drop-shadow pb-1">{details.months}</span>
          <span className="text-md text-fuchsia-700 font-semibold">Months</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-bold text-pink-600 drop-shadow pb-1">{details.days}</span>
          <span className="text-md text-rose-600 font-semibold">Days</span>
        </div>
      </div>

      {/* Total Days Line */}
      <div className="mt-2 text-lg text-fuchsia-500 font-semibold">
        💑 {details.totalDays} days & counting!
      </div>

      {/* Decorative floating mini hearts */}
      <div className="absolute bottom-4 left-6 flex gap-1">
        <motion.span
          animate={{
            y: [0, -7, 0], opacity: [0.7, 1, 0.68]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
        >💕</motion.span>
        <motion.span
          animate={{
            y: [0, -7, 0], opacity: [0.5, 0.98, 0.65]
          }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 0.83 }}
        >💞</motion.span>
      </div>
      <style jsx>{`
        .glow-heart { text-shadow: 0 0 18px #fb7185, 0 0 38px #f9a8d4;}
      `}</style>
    </motion.div>
  );
};

export default WowAnniversaryTime;

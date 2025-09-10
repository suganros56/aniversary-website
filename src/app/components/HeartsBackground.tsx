'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NUM_HEARTS = 22;

const HeartsBackground: React.FC = () => {
  const [hearts, setHearts] = useState<any[]>([]);

  useEffect(() => {
    // Only runs on the client!
    const arr = Array.from({ length: NUM_HEARTS }).map(() => {
      const left = Math.random() * 100;
      const size = 32 + Math.random() * 48;
      const colorArr = ["#fb7185", "#fda4af", "#f472b6", "#e879f9"];
      const color = colorArr[Math.floor(Math.random() * colorArr.length)];
      const delay = Math.random() * 4;
      const duration = 8 + Math.random() * 9;
      return { left, size, color, delay, duration };
    });
    setHearts(arr);
  }, []);

  // Do not render anything on SSR, only render once hearts are set on client
  if (hearts.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            color: heart.color,
            position: "absolute",
            bottom: `-${heart.size * 2}px`,
            textShadow:
              "0 0 16px #fca5a5, 0 0 60px #fdb3c4, 0 0 24px #f472b6",
            opacity: 0.19 + Math.random() * 0.17, // optionally remove randomness for opacity here for consistency
          }}
          initial={{ y: 0, opacity: 0.25 }}
          animate={{
            y: -window.innerHeight * 1.12,
            opacity: [0.26, 0.38, 0.12],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          💖
        </motion.div>
      ))}
    </div>
  );
};

export default HeartsBackground;

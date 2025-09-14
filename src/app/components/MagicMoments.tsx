'use client';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ringEmoji = "💍";
const heartEmoji = "❤️";

const RingMoment: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Hearts float when video is playing
  const floatingHearts = (
    <AnimatePresence>
      {playing && (
        <>
          {/* Several animated hearts over video */}
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0, scale: 0.7 }}
              animate={{ y: -120 - i * 30, opacity: 1, scale: 1 }}
              exit={{ y: 0, opacity: 0, scale: 0.5 }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                repeatType: 'loop',
                delay: i * 0.6
              }}
              className="absolute pointer-events-none select-none"
              style={{
                left: `${40 + i * 18}%`,
                top: '35%',
                fontSize: '2.2rem',
                filter: 'drop-shadow(0 2px 8px #f472b6)'
              }}
            >
              {heartEmoji}
            </motion.span>
          ))}
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="w-full flex flex-col items-center my-12">
      {/* Animated Header */}
      <motion.h3
        className="text-2xl md:text-3xl font-bold text-pink-800 mb-2 flex items-center gap-2"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <motion.span
          animate={{
            rotate: [0, 22, -15, 0],
            scale: [1, 1.2, 1],
            transition: { repeat: Infinity, repeatType: "reverse", duration: 2 }
          }}
          style={{ display: "inline-block" }}
        >
          {ringEmoji}
        </motion.span>
        The Magical Moment
      </motion.h3>

      {/* Video, floating hearts overlay */}
      <div className="relative bg-gradient-to-r from-pink-100 via-pink-50 to-pink-200 rounded-2xl p-4 shadow-xl max-w-[95vw]">
        {floatingHearts}
        <video
          ref={videoRef}
          controls
          poster="/gallery/ring-thumb.jpg"
          className="rounded-xl border-4 border-pink-300 shadow-lg max-h-[340px] md:max-h-[410px] mx-auto bg-black"
          style={{ zIndex: 10 }}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          <source src="/gallery/ring.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional: overlay heart when paused */}
        {!playing && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="absolute left-1/2 top-[44%] -translate-x-1/2 text-5xl select-none pointer-events-none"
            style={{ filter: "drop-shadow(0 3px 15px #fb7185)" }}
          >
            {heartEmoji}
          </motion.span>
        )}
      </div>

      {/* Caption */}
      <div className="text-center text-gray-700 mt-6 text-lg font-medium italic px-2">
        The moment I put the ring on your hand the amount of joy I had can&apos;t be explained in words or in any language.
      </div>
    </div>
  );
};

export default RingMoment;

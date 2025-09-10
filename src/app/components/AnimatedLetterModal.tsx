'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import LetterBody from "./LetterBody";

const AnimatedLetterModal: React.FC = () => {
  const [show, setShow] = useState(true);
  const router = useRouter();

  // For confetti: you can trigger a confetti effect here on transition, e.g., using react-confetti (optional)

  const handleMemoriesClick = () => {
    setShow(false);
    setTimeout(() => {
      router.push("/memories");
    }, 800); // matches exit animation duration
    // Optionally, trigger confetti here if desired
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl text-center relative"
          >
            <LetterBody />
            <motion.button
              className="mt-8 px-8 py-3 bg-pink-600 text-white rounded-full font-bold shadow-lg text-lg outline-none focus:ring-2 focus:ring-pink-300"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                scale: [1, 1.06, 1],
                boxShadow: [
                  "0 4px 24px 0 rgba(245, 114, 199, 0.20)",
                  "0 4px 34px 0 rgba(245, 114, 199, 0.33)",
                  "0 4px 24px 0 rgba(245, 114, 199, 0.20)",
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.1,
                type: "tween",
                ease: "easeInOut"
              }}
              onClick={handleMemoriesClick}
            >
              {`See Our Memories ❤️`}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedLetterModal;

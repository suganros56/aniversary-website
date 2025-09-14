'use client';
import React, { useState } from "react";
import Confetti from "react-confetti";

const LoveConfessionModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center my-8">
      <button
        className="bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white px-6 py-3 rounded-xl text-xl font-bold shadow-lg hover:scale-105 transition-transform"
        onClick={() => setOpen(true)}
      >
        Click Me for a Surprise 💌
      </button>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
          <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={300} />
          <div className="bg-white rounded-3xl p-10 max-w-md mx-auto shadow-2xl border-4 border-pink-400 relative animate__animated animate__fadeInDown overflow-y-auto max-h-[80vh]">

            <button
              className="absolute top-3 right-4 text-pink-400 text-2xl"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <div className="font-cursive text-2xl text-pink-700 mb-2">Happy Anniversary, My Love!</div>
            <div className="text-lg text-gray-600 mt-4 leading-relaxed" >
              <div className="flex justify-center items-center w-full">
  <img src="/gallery/Kovil.png" width={300} height={100} className="mx-auto"/>
</div>
              <span className="font-semibold text-pink-600">You are my best story, my forever love. 💖</span>
            </div>
            <div className="mt-6 text-center w-full">
              <span className="inline-block text-4xl animate-bounce">🥹💕</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoveConfessionModal;

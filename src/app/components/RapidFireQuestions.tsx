'use client';
import React, { useState } from 'react';
import SecretQuizUnlock from './SecretMessageUnlock';
import LoveConfessionModal from './LoveConfessionModal';

const rapidFireQuestions = [
  "What was our most memorable date together?",
  "What’s your funniest memory from the early days of our relationship?",
  "If we were a superhero duo, what would our superpowers be?",
  "If you could describe our relationship as a song, which song would it be?",
  "Our go-to food order?",
  "If you could learn a new skill with me, what would it be?",
  "What’s the name of our favorite hangout spot?",
  "What song reminds you the most of us?",
  "If we were stuck on a deserted island, what three things would you want with us",
  "One word I use a lot when talking to you?",
  "What’s the most memorable gift you’ve received from me?"
];

const RapidFireQuestions: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const [finished, setFinished] = useState(false);

  function nextSlide() {
    if (idx < rapidFireQuestions.length - 1) {
      setIdx(idx + 1);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setIdx(0);
    setFinished(false);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] py-10">
      <div className="bg-white/90 rounded-xl shadow-xl px-8 py-8 max-w-lg w-full text-center transition-all duration-500">
        <h2 className="text-xl font-bold text-pink-600 mb-4">Rapid Fire</h2>
        {!finished ? (
          <>
            <div className="text-lg text-gray-800 mb-5 animate-fadeIn">
              {rapidFireQuestions[idx]}
            </div>
            <button
              onClick={nextSlide}
              className="px-6 py-2 bg-pink-500 text-white rounded-full font-bold mt-4 hover:bg-pink-700 transition"
            >
              {idx === rapidFireQuestions.length - 1 ? "Finish" : "Next"}
            </button>
          </>
        ) : (
          <div className="animate-fadeIn">
            <div className="text-2xl font-bold text-green-500 mb-3">Done!</div>
            <div className="mb-3">You’ve completed all the questions! ❤️</div>
            <button
              onClick={restart}
              className="px-5 py-1.5 mt-2 bg-pink-100 text-pink-700 rounded-full font-semibold"
            >
              Replay
            </button>
          </div>
        )}
      </div>
      <style jsx>{`
        .bg-white\\/90 { background: rgba(255,255,255,0.90); }
        .animate-fadeIn {
          animation: fadeInUp 0.6s;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(28px);}
          100% { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
};

export default RapidFireQuestions;

'use client';
import React, { useState } from "react";

// Change as needed
const AUDIO_SRC = "/audio/my_promise_to_you.mp3";

const EnvelopeAudioGift: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="mx-auto mt-10 max-w-md p-8 bg-gradient-to-b from-pink-100 to-fuchsia-100 rounded-3xl shadow-2xl text-center">
      {!opened ? (
        <div>
          <button
            className="flex flex-col items-center justify-center w-full focus:outline-none"
            onClick={() => setOpened(true)}
            aria-label="Open Envelope"
          >
            <span className="text-7xl animate-bounce mb-2 transition-transform duration-700 hover:scale-110">
              ✉️
            </span>
            <span className="text-lg text-pink-600 font-semibold">
              Tap to open your anniversary letter!
            </span>
          </button>
        </div>
      ) : (
        <div className="animate-scaleIn">
          <span className="text-7xl mb-2">💌</span>
          <div className="text-xl font-bold text-pink-700 mt-2 mb-1 animate-fadeInDown">From My Heart To Yours</div>
          <div className="text-base text-gray-700 italic mb-4">
            I poured my feelings into this—listen with love…
          </div>
          <audio
            controls
            className="w-full rounded-xl focus:outline-pink-400 animate-fadeIn"
            src={AUDIO_SRC}
          >
            Your browser does not support the audio element.
          </audio>
          <div className="mt-6 text-sm text-gray-400">
            (Trouble hearing? Try headphones!)
          </div>
        </div>
      )}
      <style jsx>{`
        .animate-scaleIn {
          animation: scaleIn 0.7s cubic-bezier(0.32, 1.25, 0.47, 1.16) both;
        }
        @keyframes scaleIn {
          0% {
            transform: scale(0.7);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.8s both;
        }
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.1s both;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default EnvelopeAudioGift;

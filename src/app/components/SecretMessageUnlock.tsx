'use client';
import React, { useState } from "react";

// Fill in your personalized quiz!
const QUIZ = [
  {
    question: "What is the name of the cafe where we had our first date?",
    answer: "amethyst",
  },
  {
    question: "Which movie did we rewatch together three times? (one word, lowercase)",
    answer: "kimi",
  },
  {
    question: "My nickname for you based on your WhatsApp dp on 2022-03-12?",
    answer: "sunflower",
  },
  {
    question: "What is the city of our first outstation trip?",
    answer: "pondicherry",
  },
];

const SECRET_MESSAGE = (
  <div>
    <div className="font-cursive text-2xl text-pink-700 mb-2">Your Surprise Gift! 🎁</div>
    <div className="text-lg text-gray-600 mt-4 leading-relaxed">
      You did it! Because you remember all our precious moments, here’s my promise and your secret surprise:
      <br /><br />
      <span className="text-pink-600 font-semibold">I love you forever—and I have something even more special for you today…</span>
      <br /><br />
      {/* You can put a poem, a video link, a future promise, or anything here! */}
    </div>
  </div>
);

const SecretQuizUnlock: React.FC = () => {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const currentQuestion = QUIZ[step];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim().toLowerCase() === currentQuestion.answer) {
      setError("");
      setStep(s => s + 1);
      setInput("");
    } else {
      setError("Try thinking back to our stories, my love!");
    }
  }

  if (step >= QUIZ.length) {
    // All questions done: show the secret
    return (
      <div className="w-full max-w-md mx-auto my-10 p-8 bg-yellow-50 rounded-3xl shadow-xl text-center animate-fadeInUp">
        <div className="text-4xl mb-2 animate-pulse">🎉</div>
        {SECRET_MESSAGE}
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto my-10 p-8 bg-pink-50 rounded-3xl shadow-xl text-center">
      <h2 className="text-2xl font-bold text-pink-600 mb-3">
        Secret Quiz: Unlock Your Gift! 🔐
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-lg text-gray-800">{currentQuestion.question}</div>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full focus:border-pink-400 outline-none"
          placeholder="Type your answer…"
          //autoFocus
        />
        {error && <div className="mt-2 text-red-500 text-sm">{error}</div>}
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-full font-bold shadow hover:bg-pink-500 transition"
        >
          Next
        </button>
      </form>
      <div className="mt-3 text-sm text-gray-600">{step + 1} / {QUIZ.length} questions</div>
    </div>
  );
};

export default SecretQuizUnlock;

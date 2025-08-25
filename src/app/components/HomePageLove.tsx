'use client';
import React, { useState, useEffect } from 'react';
import LetterBody from './LetterBody';

const HomePageLove = ({ 
  onOpen = () => {}, 
  className = "",
  isClickable = true,
  letterContent = {
    title: "Dear Bubliee,",
    content: "I want to offer my sincerest apologies for the ways I have let you down.\n\nI want not being there when you needed me most and for the pain I caused due to my thoughtlessness.\n\nPlease forgive me for my mistakes. I promise to learn, to grow, and to always cherish our bond.\n\nYour sincerely,\nMadam Ji"
  }
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<Array<{
    id: number;
    left: number;
    animationDelay: number;
    size: number;
    opacity: number;
  }>>([]);

  // Create floating hearts animation
  useEffect(() => {
    const hearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 10,
      size: Math.random() * 0.8 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setFloatingHearts(hearts);
  }, []);

  const handleLetterClick = () => {
    if (isClickable) {
      setIsModalOpen(true);
      onOpen();
    }
  };

  return (
    <>
      {/* Romantic Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Hearts */}
          {floatingHearts.map((heart) => (
            <div
              key={heart.id}
              className="absolute text-pink-400 animate-bounce opacity-30"
              style={{
                left: `${heart.left}%`,
                animationDelay: `${heart.animationDelay}s`,
                animationDuration: `${3 + heart.size}s`,
                transform: `scale(${heart.size})`,
                opacity: heart.opacity,
                top: `${Math.random() * 100}%`,
              }}
            >
              💖
            </div>
          ))}

          {/* Sparkle Effects */}
          <div className="absolute top-20 left-20 text-yellow-300 animate-pulse opacity-60">✨</div>
          <div className="absolute top-32 right-32 text-pink-300 animate-ping opacity-50">💫</div>
          <div className="absolute bottom-40 left-40 text-purple-300 animate-pulse opacity-40">⭐</div>
          <div className="absolute top-60 right-60 text-rose-300 animate-bounce opacity-50">🌸</div>
          <div className="absolute bottom-60 right-20 text-pink-400 animate-pulse opacity-60">🌹</div>
        </div>

        {/* Romantic Title */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text mb-4 animate-pulse">
            Happy Anniversary
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light italic">
            A love letter just for you 💕
          </p>
        </div>

        {/* Modal Overlay */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto relative border-2 border-pink-200">
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-pink-100 transition-all duration-200"
              >
                ×
              </button>

              {/* Letter Content */}
              <div className="p-8">
                {/* Heart and Title */}
                <div className="flex items-center mb-6">
                  <div className="text-red-500 text-3xl mr-3 animate-pulse">♥</div>
                  <h2 className="text-2xl font-bold text-gray-800 italic">
                    {letterContent.title}
                  </h2>
                </div>

                {/* Letter Body */}
                <div className="text-gray-700 leading-relaxed space-y-4 font-serif text-lg">
                 <LetterBody/>
                </div>

                {/* Decorative hearts at bottom */}
                <div className="flex justify-center mt-8 space-x-2">
                  <span className="text-red-500 text-xl animate-bounce">💖</span>
                  <span className="text-pink-500 text-xl animate-bounce" style={{animationDelay: '0.1s'}}>💕</span>
                  <span className="text-red-500 text-xl animate-bounce" style={{animationDelay: '0.2s'}}>💖</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Letter Component - Centered */}
        <div className="flex items-center justify-center min-h-screen">
          <div 
            className={`relative cursor-pointer transform transition-all duration-500 ${isHovered ? 'scale-110 rotate-3' : ''} ${className}`}
            onClick={handleLetterClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glowing Effect */}
            <div className="absolute inset-0 bg-pink-300 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            
            {/* SVG Envelope */}
            <svg 
              width="320" 
              height="220" 
              viewBox="0 0 320 220" 
              className="drop-shadow-2xl relative z-10"
            >
              {/* Gradients */}
              <defs>
                <linearGradient id="envelopeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fce7f3" />
                  <stop offset="50%" stopColor="#fbcfe8" />
                  <stop offset="100%" stopColor="#f9a8d4" />
                </linearGradient>
                <linearGradient id="flapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f9a8d4" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Envelope Body */}
              <rect 
                x="20" 
                y="60" 
                width="280" 
                height="140" 
                rx="15" 
                fill="url(#envelopeGradient)" 
                stroke="#ec4899" 
                strokeWidth="3"
                filter="url(#glow)"
              />
              
              {/* Envelope Flap */}
              <polygon 
                points="20,60 160,130 300,60" 
                fill="url(#flapGradient)" 
                stroke="#ec4899" 
                strokeWidth="3"
                filter="url(#glow)"
              />
              
              {/* Floating Hearts around envelope */}
              <g className={isHovered ? "animate-pulse" : ""}>
                <text x="60" y="40" fontSize="20" fill="#ef4444">💖</text>
                <text x="250" y="50" fontSize="16" fill="#f97316">💕</text>
                <text x="280" y="100" fontSize="18" fill="#ec4899">💗</text>
                <text x="40" y="120" fontSize="14" fill="#f59e0b">💝</text>
                <text x="270" y="160" fontSize="20" fill="#ef4444">💖</text>
                <text x="50" y="180" fontSize="16" fill="#ec4899">💕</text>
              </g>
              
              {/* Main Heart in Center */}
              <g transform="translate(160, 130)">
                <circle 
                  cx="0" 
                  cy="0" 
                  r="25" 
                  fill="rgba(255,255,255,0.9)" 
                  stroke="#ec4899" 
                  strokeWidth="3"
                  filter="url(#glow)"
                  className={isHovered ? "animate-ping" : ""}
                />
                <text 
                  x="0" 
                  y="8" 
                  textAnchor="middle" 
                  fontSize="24" 
                  className={isHovered ? "animate-bounce" : ""}
                >
                  💖
                </text>
              </g>
              
              {/* Romantic Text */}
              <rect 
                x="110" 
                y="180" 
                width="100" 
                height="25" 
                rx="12" 
                fill="rgba(255,255,255,0.9)"
                stroke="#ec4899"
                strokeWidth="2"
              />
              <text 
                x="160" 
                y="198" 
                textAnchor="middle" 
                className="text-sm font-bold fill-pink-600"
                style={{ fontSize: '14px' }}
              >
                Open with love
              </text>

              {/* Sparkle effects */}
              <text x="100" y="80" fontSize="12" fill="#fbbf24" className="animate-ping">✨</text>
              <text x="220" y="90" fontSize="10" fill="#a855f7" className="animate-pulse">⭐</text>
              <text x="80" y="150" fontSize="14" fill="#f59e0b" className="animate-bounce">💫</text>
              <text x="240" y="140" fontSize="12" fill="#ec4899" className="animate-pulse">🌟</text>
            </svg>

            {/* Additional Floating Hearts on Hover */}
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 text-2xl text-red-500 animate-bounce">💖</div>
                <div className="absolute top-5 right-5 text-xl text-pink-500 animate-pulse">💕</div>
                <div className="absolute bottom-10 left-5 text-lg text-red-400 animate-ping">💗</div>
                <div className="absolute bottom-5 right-10 text-2xl text-pink-600 animate-bounce">💝</div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-lg text-gray-600 italic font-light">
            "Every love story is beautiful, but ours is my favorite" 💕
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePageLove;
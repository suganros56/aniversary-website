'use client';
import React from 'react';
import { useState } from "react"

const LetterInterface = ({ 
  onOpen = () => {}, 
  className = "",
  isClickable = true,
  size = "medium",
  letterContent = {
    title: "Dear Kuchupuchu,",
    content: "I want to offer my sincerest apologies for the ways I have let you down.\n\nI want not being there when you needed me most and for the pain I caused due to my thoughtlessness.\n\nPlease forgive me for my mistakes. I promise to learn, to grow, and to always cherish our bond.\n\nYour sincerely,\nMadam Ji"
  }
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sizeClasses = {
    small: "w-48 h-32",
    medium: "w-64 h-40", 
    large: "w-80 h-50"
  };

  const handleLetterClick = () => {
    if (isClickable) {
      setIsModalOpen(true);
      onOpen();
    }
  };

  return (
    <>
      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-pink-50 rounded-lg shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto relative">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
            >
              ×
            </button>

            {/* Letter Content */}
            <div className="p-8">
              {/* Heart and Title */}
              <div className="flex items-center mb-6">
                <div className="text-red-500 text-2xl mr-3">♥</div>
                <h2 className="text-xl font-semibold text-gray-800 italic">
                  {letterContent.title}
                </h2>
              </div>

              {/* Letter Body */}
              <div className="text-gray-700 leading-relaxed space-y-4 font-serif">
                {letterContent.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="italic">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Letter Component */}
    <div 
      className={`flex items-center justify-center relative ${sizeClasses.medium} cursor-pointer transform transition-all duration-200  ${isHovered ? 'scale-105' : ''} ${className}`}
      onClick={handleLetterClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Envelope Base */}
      <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg border border-blue-300">
        
        {/* Envelope Flap */}
        <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-blue-200 to-blue-300 rounded-t-lg border-b border-blue-400"></div>
        
        {/* Hello Kitty Character */}
        <div className="absolute top-3 right-4 flex items-center justify-center">
          {/* Kitty Head */}
          <div className="relative">
            {/* Main head */}
            <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-300 relative">
              {/* Left ear */}
              <div className="absolute -top-2 -left-1 w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></div>
              {/* Right ear */}
              <div className="absolute -top-2 -right-1 w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></div>
              
              {/* Red bow */}
              <div className="absolute -top-1 right-0 w-3 h-2 bg-red-500 rounded-sm transform rotate-12"></div>
              <div className="absolute -top-1 right-1 w-1 h-1 bg-red-600 rounded-full"></div>
              
              {/* Eyes */}
              <div className="absolute top-2 left-1.5 w-1 h-1 bg-black rounded-full"></div>
              <div className="absolute top-2 right-1.5 w-1 h-1 bg-black rounded-full"></div>
              
              {/* Nose */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Play Button/Open Indicator */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${isHovered ? 'bg-opacity-100 scale-110' : ''}`}>
            {/* Play Triangle */}
            <div className="w-0 h-0 border-l-4 border-l-blue-600 border-t-3 border-t-transparent border-b-3 border-b-transparent ml-1"></div>
          </div>
        </div>

        {/* Click to open text */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <span className="text-xs text-blue-700 font-medium bg-white bg-opacity-80 px-2 py-1 rounded-full">
            Click to open
          </span>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-8 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-8 left-6 w-1 h-1 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute top-12 left-8 w-1 h-1 bg-blue-400 rounded-full opacity-40"></div>
      </div>

      {/* Shadow effect */}
      <div className="absolute inset-0 bg-blue-300 rounded-lg transform translate-y-1 translate-x-1 -z-10 opacity-30"></div>
    </div>
    </>
  );
};

export default LetterInterface;
'use client';
import React from 'react'
import { useState } from "react"
import Image from "next/image";
import LetterBody from './LetterBody';


const MainLove = ({
      onOpen = () => {}, 
  className = "",
  isClickable = true,
  size = "medium",
  letterContent = {
    title: "Dear Bubliee,",
    content: "I want to offer my sincerest apologies for the ways I have let you down.\n\nI want not being there when you needed me most and for the pain I caused due to my thoughtlessness.\n\nPlease forgive me for my mistakes. I promise to learn, to grow, and to always cherish our bond.\n\nYour sincerely,\nMadam Ji"
  }
}) => {
    const [isHovered, setIsHovered] = useState(false);
      const [isModalOpen, setIsModalOpen] = useState(false);
      
    const handleLetterClick = () => {
    if (isClickable) {
      setIsModalOpen(true);
      onOpen();
    }
  };

  return (
    <>
    <div>
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
                <LetterBody/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <div className='h-screen flex items-center justify-center bg-white hover:bg-white relative"'   onClick={handleLetterClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        <Image src="/love-letter.png" alt="Description" width={500} height={300} />
    </div>

    </>
  )
}

export default MainLove
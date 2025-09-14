'use client';
import React from 'react';

const RingLetter: React.FC<{ message: string }> = ({ message }) => (
  <div className="ringletter-outer">
    <div className="ringletter-paper animate-in">
      <div className="ring-emoji">💍</div>
      <div className="ringletter-message">{message}</div>
      <div className="ring-sign">— Yours forever</div>
    </div>
    <style jsx>{`
      .ringletter-outer {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 60vh;
        /* No extra background */
        background: transparent;
      }
      .ringletter-paper {
        background: transparent; /* Let's it blend with any site bg */
        border: 1.5px solid #efc8e6;
        box-shadow: none; /* Remove shadow if you want it flat */
        border-radius: 18px;
        padding: 2.5rem 2.6rem 2rem;
        max-width: 430px;
        min-width: 280px;
        font-family: 'Dancing Script', cursive, serif;
        color: #c05470;
        text-align: center;
        animation: fadeInLetter 0.95s cubic-bezier(0.24, 0.74, 0.39, 1.21);
      }
      .animate-in {
        animation: fadeInLetter 0.95s cubic-bezier(0.24, 0.74, 0.39, 1.21);
      }
      @keyframes fadeInLetter {
        0%   { opacity: 0; transform: translateY(36px) scale(0.96);}
        85%  { opacity: 1; transform: translateY(-6px) scale(1.03);}
        100% { opacity: 1; transform: translateY(0px) scale(1);}
      }
      .ring-emoji {
        font-size: 2.4rem;
        margin-bottom: 10px;
        animation: pop 1.15s cubic-bezier(0.25, 1.5, 0.45, 1.12);
      }
      @keyframes pop {
        0% { transform: scale(0);}
        65% { transform: scale(1.36);}
        80% { transform: scale(0.87);}
        100% { transform: scale(1);}
      }
      .ringletter-message {
        font-size: 1.25rem;
        letter-spacing: .05em;
        margin-bottom: 1.6rem;
        padding: .5rem 0;
      }
      .ring-sign {
        font-size: 1.07rem;
        color: #b66787ad;
        margin-top: 1.7rem;
      }
    `}</style>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"/>
  </div>
);

export default RingLetter;

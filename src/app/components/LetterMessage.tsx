'use client';
import React from 'react';

interface LetterMessageProps {
  message: string;
}

const LetterMessage: React.FC<LetterMessageProps> = ({ message }) => (
  <div className="letter-message">
    <p>{message}</p>
    {/* Add animation classes or effects here */}
    <style jsx>{`
      .letter-message {
        margin: 2rem auto 1.5rem;
        padding: 1.5rem 2rem;
        background: #fffafa;
        border: 1.5px solid #f0dada;
        border-radius: 12px;
        max-width: 480px;
        font-family: 'Dancing Script', cursive, serif;
        font-size: 1.25rem;
        color: #ca4d6f;
        box-shadow: 0 2px 8px #eedcee33;
        text-align: center;
      }
    `}</style>
  </div>
);

export default LetterMessage;

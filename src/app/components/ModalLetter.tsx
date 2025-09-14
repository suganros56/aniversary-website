'use client';
import React, { useState, useEffect } from 'react';

interface ModalLetterProps {
  message: string;
}

const ModalLetter: React.FC<ModalLetterProps> = ({ message }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // Optionally lock scrolling when modal is open
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  if (!open) return null;
  return (
    <div className="backdrop">
      <div className="modal">
        <div className="letter">
          <p>{message}</p>
          <button onClick={() => setOpen(false)}>Continue</button>
        </div>
      </div>
      <style jsx>{`
        .backdrop {
          position: fixed; left: 0; top: 0; width: 100vw; height: 100vh;
          background: rgba(22,0,25,0.42); z-index: 9999; display: flex; align-items: center; justify-content: center;
        }
        .modal {
          background: #fffefa; border-radius: 20px; padding: 2.5rem 2rem 2rem 2rem;
          min-width: 320px; max-width: 450px; box-shadow: 0 8px 40px #b6678733;
          border: 2px solid #efc8e6;
        }
        .letter {
          font-family: 'Dancing Script', cursive, serif;
          font-size: 1.13rem; color: #b66787; text-align: center;
        }
        button {
          margin-top: 1.6rem; padding: 0.7rem 2.5rem;
          background: #fcddec; color: #b66787; border: none; border-radius: 5px; font-size: 1rem;
          cursor: pointer; font-weight: 600; transition: background 0.15s;
        }
        button:hover { background: #ffd7ef; }
      `}</style>
    </div>
  );
};

export default ModalLetter;

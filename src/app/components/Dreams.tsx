'use client';
import React from 'react';

const dreams = [
  {
    icon: "🌍",
    text: "Travel the world together and explore new places."
  },
  {
    icon: "🏠",
    text: "Build our dream home filled with laughter and love."
  },
  {
    icon: "👫",
    text: "Grow hand in hand in all aspects, supporting each other’s dreams."
  },
  {
    icon: "🎉",
    text: "Celebrate every little and big milestone as a team."
  },
  {
    icon: "❤️",
    text: "Always love fearlessly and endlessly, no matter what."
  }
  // Add or customize your own dreams!
];

const Dreams: React.FC = () => (
  <div className="final-dreams-outer py-12 min-h-[60vh] flex flex-col items-center justify-center">
    <div className="dreams-card bg-white/90 rounded-xl shadow-lg px-8 py-10 max-w-xl w-full">
      <h2 className="text-2xl font-bold mb-6 text-pink-600 text-center">Our Dreams Together</h2>
      <ul className="space-y-4 text-lg">
        {dreams.map((d, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="text-2xl">{d.icon}</span>
            <span className="text-gray-700">{d.text}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10 text-center text-pink-700 font-semibold text-xl">
        Here’s to a lifetime of making all our dreams real together.
      </div>
    </div>
    <style jsx>{`
      .bg-white\\/90 { background: rgba(255,255,255,0.90); }
    `}</style>
  </div>
);

export default Dreams;

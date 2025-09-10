import React from "react";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
  image?: string; // Optional: path to an image in /public/images
  icon?: React.ReactNode; // Optional: pass a JSX icon
};

const timelineData: TimelineItem[] = [
  {
    date: "2022-01-10",
    title: "We Met for the First Time",
    description: "A magical day when destiny brought us together—I'll never forget that first conversation!",
    image: "/images/first_meet.jpg",
  },
  {
    date: "2022-04-15",
    title: "Our First Date",
    description: "Dinner at Amethyst Cafe—nervous, excited, and so much laughter.",
    image: "/images/first_date.jpg",
  },
  {
    date: "2022-09-09",
    title: "1st Anniversary Trip",
    description: "Pondicherry getaway—beach walks, starry skies, and endless memories. ❤️",
    image: "/images/pondy_trip.jpg",
  },
  // Add more milestones as you like!
];

const Timeline: React.FC = () => (
  <div className="max-w-2xl mx-auto py-12">
    <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Our Love Story Timeline</h2>
    <div className="relative border-l-4 border-pink-400 pl-6">
      {timelineData.map((item, idx) => (
        <div key={idx} className="mb-8 flex items-start">
          <div className="flex-shrink-0 w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center shadow-md border-2 border-pink-400">
            {item.image ? (
              <img src={item.image} alt={item.title} className="w-10 h-10 object-cover rounded-full" />
            ) : (
              <span role="img" aria-label="milestone" className="text-2xl">🌸</span>
            )}
          </div>
          <div className="ml-4">
            <div className="text-sm text-pink-600 font-semibold">{item.date}</div>
            <div className="text-xl font-bold">{item.title}</div>
            <div className="text-gray-600">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Timeline;

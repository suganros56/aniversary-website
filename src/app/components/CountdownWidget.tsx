'use client';
import React, { useEffect, useState } from "react";

// Set your actual relationship start date here!
const START_DATE = new Date("2023-09-14"); // Change to your actual date

function getDaysSinceStart(date: Date): number {
  const today = new Date();
  const diffMs = today.getTime() - date.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

function getYearsAndMonthsSince(date: Date) {
  const today = new Date();
  let years = today.getFullYear() - date.getFullYear();
  let months = today.getMonth() - date.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months };
}

const CountdownWidget: React.FC = () => {
  const [days, setDays] = useState(() => getDaysSinceStart(START_DATE));
  const { years, months } = getYearsAndMonthsSince(START_DATE);

  useEffect(() => {
    const timer = setInterval(() => {
      setDays(getDaysSinceStart(START_DATE));
    }, 60 * 60 * 1000); // update every hour
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto my-8 max-w-sm p-6 bg-pink-50 rounded-2xl shadow text-center">
      <div className="text-lg text-gray-600 mb-2">
        We started our journey on{" "}
        <span className="font-semibold text-pink-600">
          {START_DATE.toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </span>
      </div>
      <div className="text-5xl font-extrabold text-pink-600 mb-2">
        {days}
      </div>
      <div className="text-lg font-semibold text-pink-500">
        days together 💗
      </div>
      <div className="mt-3 text-base text-gray-700">
        {years > 0 && (
          <span>
            <span className="text-pink-600 font-semibold">{years}</span> year{years !== 1 ? "s" : ""}{" "}
            {months > 0 && (
              <>
                <span className="text-pink-600 font-semibold">{months}</span> month{months !== 1 ? "s" : ""}
              </>
            )}{" "}
            completed!
          </span>
        )}
      </div>
    </div>
  );
};

export default CountdownWidget;

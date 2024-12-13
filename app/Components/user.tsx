"use client";
import React, { useEffect, useState, useRef } from "react";

const CounterSection = () => {
  const stats = [
    { id: 1, label: "Happy Clients", value: 623 },
    { id: 2, label: "Years in Beauty Business", value: 12 },
    { id: 3, label: "Makeup Products", value: 320 },
    { id: 4, label: "Beautiful Shades", value: 800 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setStartAnimation(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Counter animation logic
  useEffect(() => {
    if (startAnimation) {
      stats.forEach((stat, index) => {
        const increment = Math.ceil(stat.value / 100);
        let currentValue = 0;
        const interval = setInterval(() => {
          currentValue += increment;
          if (currentValue >= stat.value) {
            currentValue = stat.value;
            clearInterval(interval);
          }
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = currentValue;
            return newCounts;
          });
        }, 20); // Speed of animation
      });
    }
  }, [startAnimation]);

  return (
    <div ref={sectionRef} className="bg-pink-600 py-10 my-20">
      <div className="text-center mb-6 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Unleash Your Inner Beauty
        </h2>
        <p className="text-white text-sm md:text-base mt-2">
          Discover the perfect makeup products to elevate your beauty and
          confidence. We're here to bring out the best in you!
        </p>
      </div>
      <div className="flex flex-wrap justify-around items-center max-w-4xl mx-auto gap-6 px-4">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className="text-center flex-1 min-w-[150px]"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-white">
              {counts[index]}
            </h3>
            <p className="text-white text-sm md:text-lg mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;

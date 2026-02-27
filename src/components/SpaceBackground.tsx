"use client";

import React, { useEffect, useState } from "react";

export function SpaceBackground() {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    // Generate static random positions once on mount to avoid hydration mismatch
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 200}%`, // Use 200% to cover the drift area
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`
    }));
    setStars(newStars);
  }, []);

  if (stars.length === 0) return null;

  return (
    <>
      <div className="nebula-glow" />
      <div className="star-layer stars-twinkle">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full opacity-40"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animation: `twinkle ${star.duration} ease-in-out infinite`,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>
      <div className="star-layer stars-twinkle-fast opacity-30">
        {stars.slice(0, 50).map((star) => (
          <div
            key={`fast-${star.id}`}
            className="absolute bg-primary rounded-full"
            style={{
              top: `${(parseFloat(star.top) + 50) % 200}%`,
              left: `${(parseFloat(star.left) + 30) % 100}%`,
              width: star.size,
              height: star.size,
              animation: `twinkle ${parseFloat(star.duration) * 0.7}s ease-in-out infinite`,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>
    </>
  );
}

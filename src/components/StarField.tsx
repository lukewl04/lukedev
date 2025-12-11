import React, { useMemo, useEffect, useState, useRef } from "react";

type Star = {
  top: number;
  left: number;
  size: number;
  delay: number;
  opacity: number;
};

type ScrollStar = {
  id: number;
  top: number;
  left: number;
  size: number;
};

const StarField: React.FC = () => {
  // Background stars (your original logic)
  const stars = useMemo(() => {
    const count = 150 + Math.floor(Math.random() * 71);
    return Array.from({ length: count }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 1 + Math.random() * 2,
      delay: Math.random() * 10,
      opacity: 0.4 + Math.random() * 0.6
    }));
  }, []);

  // Smooth scroll-stars
  const [scrollStars, setScrollStars] = useState<ScrollStar[]>([]);
  const lastSpawn = useRef(0);
  const idCounter = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();

      // Throttle so it triggers at most every 120ms
      if (now - lastSpawn.current < 120) return;
      lastSpawn.current = now;

      // Create 1–3 stars per burst
      const count = 1 + Math.floor(Math.random() * 3);

      const newStars: ScrollStar[] = Array.from({ length: count }).map(() => ({
        id: idCounter.current++,
        top: 85 + Math.random() * 10, // bottom of the screen
        left: Math.random() * 100,
        size: 2 + Math.random() * 2
      }));

      setScrollStars((prev) => [...prev, ...newStars]);

      // Remove stars after animation ends
      setTimeout(() => {
        setScrollStars((prev) =>
          prev.filter((s) => !newStars.includes(s))
        );
      }, 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="starfield">
      {/* background stars */}
      {stars.map((star, i) => (
        <div
          key={`bg-${i}`}
          className="star"
          style={{
            top: `${star.top}vh`,
            left: `${star.left}vw`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity
          }}
        />
      ))}

      {/* scroll stars */}
      {scrollStars.map((star) => (
        <div
          key={star.id}
          className="scroll-star"
          style={{
            top: `${star.top}vh`,
            left: `${star.left}vw`,
            width: `${star.size}px`,
            height: `${star.size}px`
          }}
        />
      ))}
    </div>
  );
};

export default StarField;

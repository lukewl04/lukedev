import { useEffect } from "react";

const NebulaParallax = () => {
  useEffect(() => {
    const back = document.querySelector(".nebula-back") as HTMLElement | null;
    const front = document.querySelector(".nebula-front") as HTMLElement | null;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Move UP as you scroll down (negative values)
      const backOffset = scrollY * -0.01;   // slow, far layer
      const frontOffset = scrollY * -0.02;  // faster, nearer layer

      if (back) back.style.transform = `translateY(${backOffset}px)`;
      if (front) front.style.transform = `translateY(${frontOffset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default NebulaParallax;

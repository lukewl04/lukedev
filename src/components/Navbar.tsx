import { useEffect, useState } from "react";
import { FiBriefcase, FiHome, FiMail, FiUser } from "react-icons/fi";

const MyNavbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isHomeActive, setIsHomeActive] = useState(true);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const homeSection = document.getElementById("home");
      const homeBounds = homeSection?.getBoundingClientRect();
      const homeIsActive = Boolean(
        homeBounds &&
          homeBounds.top <= window.innerHeight / 2 &&
          homeBounds.bottom >= window.innerHeight / 2,
      );

      setIsHomeActive(homeIsActive);
      setIsHidden(
        !homeIsActive || (currentScrollY > 80 && currentScrollY > previousScrollY),
      );
      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`space-navbar${isHidden || !isHomeActive ? " space-navbar--hidden" : ""}`}
      aria-label="Main navigation"
      inert={!isHomeActive}
      onFocusCapture={() => setIsHidden(false)}
    >
      <a href="#home" className="space-nav-link" aria-label="Home">
        <FiHome aria-hidden="true" />
        <span className="space-nav-tooltip" aria-hidden="true">Home</span>
      </a>
      <a href="#about" className="space-nav-link" aria-label="About">
        <FiUser aria-hidden="true" />
        <span className="space-nav-tooltip" aria-hidden="true">About</span>
      </a>
      <a href="#projects" className="space-nav-link" aria-label="Projects">
        <FiBriefcase aria-hidden="true" />
        <span className="space-nav-tooltip" aria-hidden="true">Projects</span>
      </a>
      <a href="#contact" className="space-nav-link" aria-label="Contact">
        <FiMail aria-hidden="true" />
        <span className="space-nav-tooltip" aria-hidden="true">Contact</span>
      </a>
    </nav>
  );
};

export default MyNavbar;

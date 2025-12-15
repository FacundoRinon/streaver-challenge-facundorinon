"use client";

import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`
      cursor-pointer
        fixed bottom-4 right-4 z-50 rounded-xl
        bg-white px-4 py-2 text-black shadow-md
        border-2 border-gray-200
        dark:bg-zinc-900 dark:text-white dark:border-gray-700
        transition-all duration-300 ease-in-out
        ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      <HiArrowUp size={30} />
    </button>
  );
};

export default ScrollToTopButton;

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

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className="fixed bottom-4 right-4 z-50 rounded-xl bg-white px-4 py-2 text-black shadow-md border-3 border-gray-200
                 cursor-pointer transition-opacity duration-300
                 dark:bg-zinc-900 dark:text-white dark:border-gray-700"
    >
      <HiArrowUp size={30} />
    </button>
  );
};

export default ScrollToTopButton;

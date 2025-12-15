"use client";

import { useTheme } from "@/context/ThemeContext";
import { HiMoon, HiSun } from "react-icons/hi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        p-2 rounded-lg
        bg-gray-200 dark:bg-gray-800
        text-gray-700 dark:text-gray-200
        hover:opacity-80 transition
        cursor-pointer
      "
      aria-label="Toggle theme"
    >
      {theme === "light" ? <HiMoon size={20} /> : <HiSun size={20} />}
    </button>
  );
}

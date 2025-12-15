"use client";

import { useState, useEffect } from "react";

interface SearchBarProps {
  inputType?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  debounce?: number;
}

export default function SearchBar({
  inputType = "text",
  placeholder = "Search...",
  onChange,
  debounce = 500,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(value);
    }, debounce);
    return () => {
      clearTimeout(handler);
    };
  }, [value, onChange, debounce]);

  return (
    <input
      type={inputType}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border-3 border-gray-200 dark:border-gray-700 outline-none ring-0 focus:border-gray-300 focus:dark:border-gray-800 text-black dark:text-white p-3 rounded w-full rounded-full"
    />
  );
}

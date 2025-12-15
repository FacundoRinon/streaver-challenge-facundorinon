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
      className="border p-3 rounded w-full rounded-full"
    />
  );
}

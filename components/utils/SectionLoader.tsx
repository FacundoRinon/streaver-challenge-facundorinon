"use client";

import { ClipLoader } from "react-spinners";

interface SectionLoaderProps {
  size?: number;
}

export default function SectionLoader({ size = 40 }: SectionLoaderProps) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-10 col-span-3">
        <ClipLoader size={size} color="#4B5563" />
      </div>
    </div>
  );
}

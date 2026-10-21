import React from "react";

export default function LeafIcon({ className = "w-7 h-9 text-[#c89255]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2C12 2 13 8 18 10C23 12 23 18 20 22C17 26 13 28 12 30C11 28 7 26 4 22C1 18 1 12 6 10C11 8 12 2 12 2Z" fillOpacity="0.85" />
      <path d="M12 5V27M12 12C14 11 17 11.5 18 13M12 16C10 15 7 15.5 6 17M12 20C14 19 16 19.5 17 21" stroke="#12100e" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

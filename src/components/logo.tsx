"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="relative">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          {/* Outer geometric frame */}
          <path
            d="M4 8C4 5.79086 5.79086 4 8 4H24C26.2091 4 28 5.79086 28 8V24C28 26.2091 26.2091 28 24 28H8C5.79086 28 4 26.2091 4 24V8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          
          {/* Neural network nodes */}
          <circle cx="10" cy="10" r="2" fill="currentColor" />
          <circle cx="22" cy="10" r="2" fill="currentColor" />
          <circle cx="16" cy="16" r="2.5" fill="currentColor" />
          <circle cx="10" cy="22" r="2" fill="currentColor" />
          <circle cx="22" cy="22" r="2" fill="currentColor" />
          
          {/* Connection lines representing automation/workflow */}
          <path
            d="M12 10L14 14M18 14L20 10M14 18L12 22M18 18L20 22M10 12L10 20M22 12L22 20"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.6"
          />
          
          {/* Central processor symbol */}
          <rect
            x="13.5"
            y="13.5"
            width="5"
            height="5"
            rx="0.5"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          
          {/* Innovation spark */}
          <path
            d="M24 8L26 6M26 10L24 8M24 8H26"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
        </svg>
      </div>
      
      {!iconOnly && (
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Noah Kellner
        </span>
      )}
    </div>
  );
}
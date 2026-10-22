"use client";

import React, { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "text-slide-up";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 800,
  className = "",
  threshold = 0.15,
  once = true,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Initial hidden states
  const getHiddenClasses = () => {
    switch (animation) {
      case "fade-up":
        return "opacity-0 translate-y-10";
      case "fade-down":
        return "opacity-0 -translate-y-10";
      case "fade-left":
        return "opacity-0 translate-x-10";
      case "fade-right":
        return "opacity-0 -translate-x-10";
      case "zoom-in":
        return "opacity-0 scale-95";
      case "text-slide-up":
        return "translate-y-full opacity-0";
      default:
        return "opacity-0 translate-y-8";
    }
  };

  const getVisibleClasses = () => {
    return "opacity-100 translate-y-0 translate-x-0 scale-100";
  };

  const isTextMask = animation === "text-slide-up";

  return (
    <div
      ref={elementRef}
      className={`${isTextMask ? "overflow-hidden inline-block" : ""} ${className}`}
    >
      <div
        style={{
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className={`transform transition-all will-change-transform ${
          isVisible ? getVisibleClasses() : getHiddenClasses()
        }`}
      >
        {children}
      </div>
    </div>
  );
}

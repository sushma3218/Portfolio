"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if the device has a fine pointer (mouse)
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setIsFinePointer(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 5);
      cursorY.set(e.clientY - 3);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);

    // Hide default cursor on body if fine pointer
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "auto";
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        a, button, [role="button"], input, select, textarea {
          cursor: none !important;
        }
      `}} />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] drop-shadow-lg"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="hsl(var(--primary))" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinejoin="round" 
          strokeLinecap="round"
          xmlns="http://www.w3.org/2000/svg" 
          className="text-primary"
        >
          <path d="M5.5 3L18.5 11L12.5 12.5L9 21L5.5 3Z" />
        </svg>
      </motion.div>
    </>
  );
}

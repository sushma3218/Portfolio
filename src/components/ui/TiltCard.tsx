"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Use spring physics for smooth interpolation
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation (-15 to +15 degrees)
    const rotateY = ((mouseX / width) - 0.5) * 20;
    const rotateX = ((mouseY / height) - 0.5) * -20;
    
    x.set(rotateY);
    y.set(rotateX);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative perspective-1000 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: y,
        rotateY: x,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none rounded-xl" style={{ opacity: isHovered ? 1 : 0, transform: "translateZ(10px)" }} />
      {children}
    </motion.div>
  );
}

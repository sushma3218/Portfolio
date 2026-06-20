"use client";

import { motion } from "framer-motion";

export function ScrollTransition({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Premium easing curve
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Roadmap", href: "#roadmap" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Determine if scrolled down enough to add background
    setIsScrolled(latest > 50);

    // Hide navbar when scrolling down, show when scrolling up
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled 
          ? "glass border-b border-white/5 shadow-lg shadow-black/20" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <MagneticWrapper>
          <Link href="/" className="flex items-center gap-2 text-primary font-mono font-bold text-lg group">
            <Terminal className="h-5 w-5 group-hover:text-foreground transition-colors" />
            <span className="text-foreground group-hover:text-primary transition-colors">Sushma.</span>AI
          </Link>
        </MagneticWrapper>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              {item.name}
              {/* Animated underline on hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4" />
      </div>
    </motion.header>
  );
}

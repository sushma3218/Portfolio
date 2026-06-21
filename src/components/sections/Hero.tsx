"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ChevronRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { ParallaxSection } from "@/components/ui/ParallaxSection";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden">
      {/* Background decorations */}
      <ParallaxSection offset={80} className="absolute inset-0 w-full h-full -z-10">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />
      </ParallaxSection>
      
      <ParallaxSection offset={-150} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </ParallaxSection>

      {/* Floating abstract AI/Tech elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute left-[5%] md:left-[10%] top-[15%] md:top-[25%] opacity-40"
          animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-emerald-500/30 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-emerald-500/40" />
          </div>
        </motion.div>

        <motion.div 
          className="absolute right-[5%] md:right-[12%] top-[20%] md:top-[30%] opacity-30"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
        >
          <div className="font-mono text-[10px] md:text-xs text-primary/80 select-none">
            {"function train() {"}<br/>
            &nbsp;&nbsp;{"model.compile();"}<br/>
            &nbsp;&nbsp;{"await optimize();"}<br/>
            {"}"}
          </div>
        </motion.div>

        <motion.div 
          className="absolute left-[8%] md:right-[15%] md:left-auto bottom-[15%] md:bottom-[25%] opacity-30"
          animate={{ rotate: [0, 45, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
        >
          <div className="w-20 h-20 md:w-24 md:h-24 grid grid-cols-3 grid-rows-3 gap-1 md:gap-2">
            {[...Array(9)].map((_, i) => (
              <motion.div 
                key={i} 
                className="bg-blue-400/50 rounded-sm"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-10 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticWrapper>
            <Avatar className="h-32 w-32 md:h-40 md:w-40 border-2 border-primary/50 shadow-2xl shadow-primary/20 transition-transform duration-500 hover:scale-105">
              <AvatarImage src={`${process.env.NODE_ENV === "production" ? "/Portfolio" : ""}/avatar.jpg`} alt="Sushma Karthikeyan" className="object-cover object-[50%_25%] scale-150" />
              <AvatarFallback className="bg-secondary text-3xl font-mono text-primary">SK</AvatarFallback>
            </Avatar>
          </MagneticWrapper>
        </motion.div>

        <div className="space-y-4 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
            className="flex flex-wrap justify-center gap-x-4"
          >
            {["Sushma", "Karthikeyan"].map((word, i) => (
              <motion.h1
                key={i}
                className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                {word}
              </motion.h1>
            ))}
          </motion.div>

          <motion.div
            className="font-mono text-lg sm:text-xl md:text-2xl text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 flex-wrap mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gradient font-bold tracking-tight">&lt;AI/ML Engineer /&gt;</span>
            <span className="hidden sm:inline-block text-border">|</span>
            <span className="text-emerald-400 tracking-tight">Cloud Computing</span>
          </motion.div>

          <motion.p
            className="text-lg md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto mt-6 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Passionate about developing scalable AI applications and transforming data into impactful solutions.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center w-full justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticWrapper>
            <Link href="#projects" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto gap-2 rounded-full font-medium h-14 px-8 text-lg" })}>
              View Projects <ChevronRight className="h-5 w-5" />
            </Link>
          </MagneticWrapper>
          <MagneticWrapper>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto gap-2 rounded-full font-medium bg-background/50 backdrop-blur-sm hover:bg-primary/10 border-white/10 h-14 px-8 text-lg cursor-pointer" })}
            >
              Contact Me
            </button>
          </MagneticWrapper>
        </motion.div>

        <motion.div
          className="flex gap-8 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <MagneticWrapper>
            <Link href="https://github.com/sushmakai27" target="_blank" className="text-muted-foreground hover:text-primary transition-colors flex p-3 rounded-full hover:bg-primary/10">
              <GithubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </MagneticWrapper>
          <MagneticWrapper>
            <Link href="https://linkedin.com/in/sushma-karthikeyan" target="_blank" className="text-muted-foreground hover:text-primary transition-colors flex p-3 rounded-full hover:bg-primary/10">
              <LinkedinIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </MagneticWrapper>
          <MagneticWrapper>
            <Link href="mailto:sushmakai27@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex p-3 rounded-full hover:bg-primary/10">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </MagneticWrapper>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] font-mono">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent"
          animate={{ height: ["0%", "100%", "0%"], y: [0, 24, 48] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

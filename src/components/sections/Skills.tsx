"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Cloud, Brain, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillTimeline = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["C", "Python"],
  },
  {
    title: "Cloud & AI Tools",
    icon: Cloud,
    skills: ["Google Cloud Console", "Cloud Native AI", "API Ecosystem"],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    skills: [
      "Problem Solving",
      "Model Development",
      "Real-World AI Applications",
      "Team Leadership",
      "Critical & Logical Thinking",
      "Decision-Making"
    ],
  }
];

export function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="skills" ref={containerRef} className="py-32 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-sans tracking-tighter text-primary">
            Technical Stack.
          </h2>
          <div className="h-1 w-24 bg-primary/50 rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto font-light mt-6">
            My engineering foundation, visualized over time.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Background Line */}
          <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2" />
          
          {/* Animated Glowing Line */}
          <motion.div 
            className="absolute left-4 md:left-[50%] top-0 w-[2px] bg-gradient-to-b from-primary via-emerald-400 to-transparent -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
            style={{ height: lineHeight }}
          />

          {skillTimeline.map((item, idx) => (
            <div key={idx} className="relative mb-16">
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-[50%] top-8 w-4 h-4 bg-background border-2 border-primary rounded-full -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

              <div className={`flex flex-col md:flex-row w-full ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                
                {/* Empty side on Desktop to push content */}
                <div className="hidden md:block w-[45%]" />

                {/* Card Side */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full md:w-[45%] py-2 pl-12 md:pl-0 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
                >
                  <div className="bg-secondary/10 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 shadow-xl relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIdx) => (
                          <Badge 
                            key={skillIdx}
                            variant="secondary"
                            className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

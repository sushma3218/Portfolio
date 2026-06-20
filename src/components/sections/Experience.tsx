"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building2 } from "lucide-react";
import type { Variants } from "framer-motion";

const experiences = [
  {
    title: "AI & IoT Intern",
    company: "Armada Industrial Automation",
    description: "Developed and integrated robust AI solutions into industrial monitoring ecosystems. Architected real-time IoT pipelines and predictive maintenance models.",
    icon: Briefcase,
    color: "from-blue-500/20 to-blue-500/0",
    border: "group-hover:border-blue-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-sans tracking-tighter text-foreground">
            Experience.
          </h2>
          <div className="h-1 w-24 bg-primary/50 rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto font-light mt-6">
            Where I've applied my skills to build real-world intelligent systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid grid-cols-1 ${experiences.length > 1 ? "md:grid-cols-2 max-w-6xl" : "max-w-3xl"} gap-8 mx-auto`}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className={`group relative h-full bg-secondary/5 backdrop-blur-xl border-white/5 transition-all duration-500 overflow-hidden ${exp.border} ${exp.glow}`}>
                {/* Internal animated gradient hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10 h-full flex flex-col p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 text-foreground">
                      <exp.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium mt-1">
                        <Building2 className="h-4 w-4" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

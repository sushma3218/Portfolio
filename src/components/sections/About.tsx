"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cloud, Cpu, GraduationCap, Lightbulb, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/TiltCard";

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Maintaining an 8.97/10 CGPA in Computer Science Engineering with a focus on Artificial Intelligence and Machine Learning.",
  },
  {
    icon: BrainCircuit,
    title: "AI/ML Specialization",
    description: "Deep expertise in predictive modeling, speech signal analysis, and building intelligent recommendation systems.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Proficient in deploying and managing cloud-native AI solutions using Oracle Cloud Infrastructure and Google Cloud.",
  },
  {
    icon: Cpu,
    title: "Industrial AI Experience",
    description: "Hands-on experience developing industrial IoT monitoring solutions and intelligent automation systems.",
  },
  {
    icon: Target,
    title: "Technical Leadership",
    description: "Mentoring young innovators and conducting technical sessions to promote AI awareness and skill development.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Always adapting to the latest AI paradigms, striving to engineer solutions that solve meaningful real-world problems.",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-24 text-center sm:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-sans tracking-tighter text-primary">
            The Engineer.
          </h2>
          <div className="h-1 w-24 bg-primary/50 rounded-full mx-auto sm:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5 space-y-12">
            <motion.h3 
              className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Engineering <span className="text-primary italic">Intelligent Systems</span> for a Smarter Future.
            </motion.h3>
            
            <div className="space-y-8 text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                I am a dedicated software engineer specializing in Artificial Intelligence and Machine Learning. 
                My focus is on bridging the gap between cutting-edge AI research and practical, scalable applications.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Currently pursuing a B.Tech in CSE with AIML at SRM Institute of Science and Technology, I possess a strong foundation in algorithmic problem solving and predictive analytics. 
                My experience spans from building healthcare AI diagnostics to engineering cloud-native recommendation architectures.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                I thrive in environments that challenge me to design robust models, optimize data pipelines, and deploy impactful cloud solutions.
              </motion.p>
            </div>
            
            <motion.div 
              className="p-4 rounded-xl bg-secondary/30 border border-white/5 inline-block font-mono text-sm text-primary shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              <span className="text-muted-foreground">Location:</span> Thanjavur, Tamil Nadu, India
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full -z-10" />
            
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <TiltCard className="h-full">
                  <Card className="h-full bg-background/60 backdrop-blur-md border-white/5 hover:border-primary/50 transition-colors duration-500 shadow-xl">
                    <CardContent className="p-8 space-y-6 flex flex-col h-full justify-between">
                      <div>
                        <div className="p-3 rounded-xl bg-primary/10 inline-block text-primary mb-4 ring-1 ring-primary/20">
                          <highlight.icon className="h-8 w-8" />
                        </div>
                        <h4 className="text-xl font-semibold tracking-tight text-foreground">{highlight.title}</h4>
                      </div>
                      <p className="text-muted-foreground/80 leading-relaxed">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

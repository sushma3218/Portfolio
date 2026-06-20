"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Trophy, Users, Presentation, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/TiltCard";

const certifications = [
  {
    title: "Software Engineering in AI",
    issuer: "Coursera / Equivalent", // Generic placeholder
    icon: Award,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    title: "Oracle Cloud Infrastructure",
    issuer: "Oracle",
    icon: Award,
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
];

const achievements = [
  {
    title: "AI Trends for Young Innovators",
    description: "Conducted technical sessions and mentored students in modern AI architectures.",
    impact: [
      { text: "students reached", count: 45, icon: Users },
      { text: "hours of mentoring", count: 20, icon: Zap },
    ],
  },
];

// Animated Counter Component
function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <span ref={ref} className="tabular-nums">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {/* A simple CSS/framer motion trick for counting up without heavy JS interval logic */}
          <motion.span
            initial={{ "--num": 0 } as any}
            animate={{ "--num": value } as any}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ counterReset: "num var(--num)" }}
            className="before:content-[counter(num)]"
          />
        </motion.span>
      ) : (
        "0"
      )}
      +
    </span>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="py-32 bg-secondary/5 relative overflow-hidden border-b border-white/5">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10 translate-x-1/3" />
      
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-sans tracking-tighter text-foreground">
            Milestones.
          </h2>
          <div className="h-1 w-24 bg-primary/50 rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto font-light mt-6">
            Certifications, awards, and the impact made along the journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-semibold tracking-tight">Certifications</h3>
            </div>
            
            <div className="grid gap-6">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <TiltCard>
                    <Card className="bg-white/5 backdrop-blur-xl border-white/5 hover:border-primary/30 transition-colors duration-500 shadow-xl group">
                      <CardHeader className="flex flex-row items-center gap-6 py-6 px-8">
                        <div className={`p-4 rounded-2xl ${cert.bg} ${cert.color} group-hover:scale-110 transition-transform duration-500`}>
                          <cert.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <CardTitle className="text-xl md:text-2xl font-semibold">{cert.title}</CardTitle>
                          <p className="text-md text-muted-foreground mt-2 font-light tracking-wide">{cert.issuer}</p>
                        </div>
                      </CardHeader>
                    </Card>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <Trophy className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="text-3xl font-semibold tracking-tight">Impact & Leadership</h3>
            </div>

            {achievements.map((achievement, idx) => (
              <TiltCard key={idx}>
                <Card className="bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl border-white/5 overflow-hidden relative group shadow-xl">
                  {/* Subtle animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <CardHeader className="p-8">
                    <CardTitle className="text-2xl font-semibold leading-tight mb-2">
                      {achievement.title}
                    </CardTitle>
                    <p className="text-muted-foreground/80 text-lg font-light">
                      {achievement.description}
                    </p>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <div className="grid grid-cols-2 gap-4">
                      {achievement.impact.map((item, iIdx) => (
                        <div key={iIdx} className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                          <item.icon className="h-6 w-6 text-primary mb-2" />
                          <span className="text-4xl font-bold font-sans tracking-tighter text-foreground">
                            <AnimatedCounter value={item.count} />
                          </span>
                          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

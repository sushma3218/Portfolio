"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CircleDashed, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const roadmapItems = [
  { title: "Parkinson's Disease Detection using FT-Transformer", status: "Completed" },
  { title: "News Recommender System using Cloud Computing", status: "Completed" },
  { title: "UnDo: A Gaming App (Apple WWDC 2026 Swift Student Challenge)", status: "Completed" },
  { title: "AI-Based Emotion Detection & Health Monitoring System using ESP32", status: "In Development" },
  { title: "AI Personal Memory Assistant", status: "Planned" },
  { title: "AI Meeting Assistant for Students", status: "Planned" },
];

export function Roadmap() {
  const completed = roadmapItems.filter((i) => i.status === "Completed");
  const inDevelopment = roadmapItems.filter((i) => i.status === "In Development");
  const planned = roadmapItems.filter((i) => i.status === "Planned");

  return (
    <section id="roadmap" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-primary">
            &lt;Future Roadmap /&gt;
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded-full mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A continuous pipeline of intelligent systems designed for real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Completed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-6 border-b border-border/50 pb-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <h3 className="text-xl font-semibold">Completed</h3>
            </div>
            {completed.map((item, idx) => (
              <Card key={idx} className="bg-secondary/10 border-emerald-500/20">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-medium text-sm">{item.title}</span>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* In Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-6 border-b border-border/50 pb-2">
              <CircleDashed className="h-5 w-5 text-blue-500 animate-[spin_4s_linear_infinite]" />
              <h3 className="text-xl font-semibold">In Development</h3>
            </div>
            {inDevelopment.map((item, idx) => (
              <Card key={idx} className="bg-secondary/10 border-blue-500/20">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="font-medium text-sm">{item.title}</span>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Planned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-6 border-b border-border/50 pb-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-xl font-semibold">Planned</h3>
            </div>
            {planned.map((item, idx) => (
              <Card key={idx} className="bg-secondary/10 border-border/50 opacity-70">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <span className="font-medium text-sm">{item.title}</span>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Activity, Globe, ExternalLink, ArrowRight, Smartphone } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { TiltCard } from "@/components/ui/TiltCard";

const projects = [
  {
    title: "Parkinson's Disease Detection",
    description: "An AI-powered healthcare solution that detects Parkinson's Disease using voice biomarkers, featuring FT-Transformer models to process highly complex speech features with near-instant inference times.",
    icon: Activity,
    highlights: ["Speech Signal Analysis", "FT-Transformer", "Healthcare AI", "Python"],
    githubUrl: "",
    liveUrl: "",
    gradient: "from-blue-600/20 via-primary/10 to-transparent",
    imagePlaceholder: "bg-gradient-to-br from-blue-900/50 to-slate-900",
  },
  {
    title: "News Recommender System",
    description: "A personalized intelligent news platform that recommends relevant content using AI-driven recommendation techniques and cloud computing technologies. Features a scalable microservices architecture.",
    icon: Globe,
    highlights: ["Recommendation Engine", "Cloud Architecture", "User Behavior", "GCP", "FastAPI"],
    githubUrl: "",
    liveUrl: "https://www.linkedin.com/posts/sushmaai_artificialintelligence-machinelearning-cloudcomputing-activity-7385525109962432512-1Swi?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEYUm5YBD3tN6JvqZP_uxfNUy8LYrzxsoGI",
    gradient: "from-emerald-600/20 via-emerald-500/10 to-transparent",
    imagePlaceholder: "bg-gradient-to-bl from-emerald-900/50 to-slate-900",
  },
  {
    title: "UnDo: iOS Gaming App",
    description: "An innovative gaming iOS application built for the Apple Swift Student Challenge WWDC 2026. Designed natively in Swift with a focus on immersive UX, interactive mechanics, and high performance.",
    icon: Smartphone,
    highlights: ["Swift", "Xcode", "WWDC Swift Challenge", "iOS Development", "UI/UX Design"],
    githubUrl: "",
    liveUrl: "https://www.linkedin.com/posts/sushmaai_swiftstudentchallenge-ssc2026-wwdc26-activity-7435022457838845952-S5i-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEYUm5YBD3tN6JvqZP_uxfNUy8LYrzxsoGI",
    gradient: "from-purple-600/20 via-purple-500/10 to-transparent",
    imagePlaceholder: "bg-gradient-to-tr from-purple-900/50 to-slate-900",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter text-foreground">
            Featured Work.
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-2xl font-light">
            Showcasing intelligent solutions engineered to solve real-world problems with precision and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <TiltCard className="w-full h-full">
                <div className="group relative w-full h-full rounded-3xl overflow-hidden bg-secondary/5 border border-white/5 hover:border-white/10 transition-colors duration-500 flex flex-col p-8 lg:p-10">
                  
                  {/* Subtle Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />



                  <div className="p-3 bg-primary/10 w-fit rounded-xl mb-6 relative z-10">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold tracking-tight mb-4 text-foreground relative z-10">
                    {project.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground/80 leading-relaxed mb-8 font-light relative z-10 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                    {project.highlights.map((highlight, hIndex) => (
                      <Badge key={hIndex} variant="secondary" className="bg-white/5 hover:bg-white/10 text-white/70 border-none px-3 py-1 text-xs font-medium">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <div className="relative z-10 mt-auto pt-4 border-t border-white/5">
                    {project.liveUrl ? (
                      <Link href={project.liveUrl} target="_blank" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium tracking-tight transition-colors group/link w-fit text-sm">
                        View Details <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-muted-foreground/50 font-medium tracking-tight cursor-not-allowed w-fit text-sm">
                        Proprietary Research 
                      </span>
                    )}
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

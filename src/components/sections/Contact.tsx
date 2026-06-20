"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="pt-16 pb-32 relative overflow-hidden bg-background border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-16">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter text-foreground">
              Let's build <br/><span className="text-primary italic">something.</span>
            </h2>
            <p className="text-xl text-muted-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
              Whether you have an opportunity in mind or just want to chat about the future of AI, my inbox is always open.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24 pt-12 border-t border-white/5 w-full"
          >
            <div className="flex flex-col items-center gap-4 group">
              <div className="p-5 rounded-full bg-white/5 border border-white/5 group-hover:border-primary/50 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-mono mb-2">Email</div>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sushmakai27@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2 justify-center"
                >
                  sushmakai27@gmail.com <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <div className="p-5 rounded-full bg-white/5 border border-white/5 group-hover:border-emerald-500/50 transition-colors">
                <MapPin className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-mono mb-2">Location</div>
                <div className="text-lg font-medium text-foreground">
                  Thanjavur, TN, India
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

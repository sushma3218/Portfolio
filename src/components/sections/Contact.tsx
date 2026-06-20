"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";

export function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("https://formsubmit.co/ajax/sushmakai27@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter text-foreground mb-6">
                Let's build <br/><span className="text-primary italic">something.</span>
              </h2>
              <p className="text-xl text-muted-foreground/80 font-light max-w-md leading-relaxed">
                Whether you have an opportunity in mind or just want to chat about the future of AI, my inbox is always open.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/5">
              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-full bg-white/5 border border-white/5 group-hover:border-primary/50 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest font-mono mb-1">Email</div>
                  <a href="mailto:sushmakai27@gmail.com" className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2">
                    sushmakai27@gmail.com <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-full bg-white/5 border border-white/5 group-hover:border-emerald-500/50 transition-colors">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest font-mono mb-1">Location</div>
                  <div className="text-lg font-medium text-foreground">
                    Thanjavur, TN, India
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center lg:justify-end"
          >
            <Card className="w-full max-w-md bg-secondary/5 backdrop-blur-2xl border-white/10 shadow-2xl p-8 rounded-[2rem] relative overflow-hidden group/form hover:border-primary/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/form:opacity-100 transition-opacity duration-700" />
              
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                
                <div className="relative group">
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-4 px-0 text-foreground focus:outline-none focus:border-primary focus:ring-0 transition-colors peer placeholder-transparent"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-0 top-4 text-muted-foreground cursor-text transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-2 peer-valid:text-xs font-medium">
                    Your Name
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-4 px-0 text-foreground focus:outline-none focus:border-primary focus:ring-0 transition-colors peer placeholder-transparent"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 top-4 text-muted-foreground cursor-text transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-2 peer-valid:text-xs font-medium">
                    Your Email
                  </label>
                </div>

                <div className="relative group mt-2">
                  <textarea 
                    name="message" 
                    id="message" 
                    required 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-white/10 rounded-xl py-4 px-4 text-foreground focus:outline-none focus:border-primary focus:ring-0 transition-colors peer placeholder-transparent resize-none"
                    placeholder="Message"
                  />
                  <label htmlFor="message" className="absolute left-4 top-4 text-muted-foreground cursor-text transition-all peer-focus:-top-3 peer-focus:left-2 peer-focus:bg-background peer-focus:px-2 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:left-2 peer-valid:bg-background peer-valid:px-2 peer-valid:text-xs font-medium">
                    Message
                  </label>
                </div>

                <MagneticWrapper>
                  <button 
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`w-full h-14 rounded-xl font-bold tracking-wide flex items-center justify-center gap-3 overflow-hidden relative group/btn transition-all duration-300 ${
                      status === "success" 
                        ? "bg-emerald-500 text-white" 
                        : "bg-foreground text-background"
                    }`}
                  >
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
                    <span className="relative z-10 flex items-center gap-2 group-hover/btn:text-primary-foreground transition-colors">
                      {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"} 
                      <motion.div animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}>
                        <Send className="h-4 w-4" />
                      </motion.div>
                    </span>
                  </button>
                </MagneticWrapper>

                {status === "error" && (
                  <p className="text-destructive text-sm text-center mt-2">
                    Oops! Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

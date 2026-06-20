"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogDrafts = [
  {
    title: "Demystifying Machine Learning for Cloud Computing",
    excerpt: "Exploring the intersection of AI models and scalable cloud infrastructure for modern applications.",
    date: "Draft - Coming Soon",
    category: "Machine Learning",
    readTime: "5 min read",
  },
  {
    title: "My Internship Experience: Engineering Industrial AI",
    excerpt: "Lessons learned while building IoT monitoring solutions and intelligent automation systems at Armada.",
    date: "Draft - Coming Soon",
    category: "Career Growth",
    readTime: "7 min read",
  },
  {
    title: "Data Science in Healthcare: The Predictive Future",
    excerpt: "How predictive analytics and speech signal analysis are transforming early disease detection.",
    date: "Draft - Coming Soon",
    category: "Data Science",
    readTime: "6 min read",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-primary">
            &lt;Technical Blog /&gt;
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded-full mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and reflections on AI, Cloud Computing, and Engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogDrafts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-secondary/10 border-border/50 hover:border-primary/50 transition-colors group cursor-not-allowed opacity-80">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="text-primary border-primary/30">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground gap-1">
                      <BookOpen className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center text-sm text-muted-foreground border-t border-border/50 pt-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

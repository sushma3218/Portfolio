import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/10 py-12">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 font-mono font-bold text-lg">
            <span className="text-foreground">Sushma.</span><span className="text-primary">AI</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
            Building Intelligent Solutions for Real-World Impact. Designed with focus on performance, accessibility, and scalability.
          </p>
        </div>
        
        <div className="flex gap-4">
          <Link href="https://github.com/sushmakai27" target="_blank" className="p-2 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all text-muted-foreground">
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/sushma-karthikeyan" target="_blank" className="p-2 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all text-muted-foreground">
            <LinkedinIcon className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:sushmakai27@gmail.com" className="p-2 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all text-muted-foreground">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-8 pt-8 border-t border-border/50 text-center">
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Sushma Karthikeyan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

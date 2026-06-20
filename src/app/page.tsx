import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InitialLoader } from "@/components/ui/InitialLoader";
import { ScrollTransition } from "@/components/ui/ScrollTransition";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Roadmap } from "@/components/sections/Roadmap";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <InitialLoader />
      <Navbar />
      <main className="flex-grow pt-16 overflow-hidden">
        <Hero />
        
        <ScrollTransition>
          <About />
        </ScrollTransition>
        
        <ScrollTransition>
          <Skills />
        </ScrollTransition>
        
        <ScrollTransition>
          <Experience />
        </ScrollTransition>
        
        <ScrollTransition>
          <Projects />
        </ScrollTransition>
        
        <ScrollTransition>
          <Roadmap />
        </ScrollTransition>
        
        <ScrollTransition>
          <Certifications />
        </ScrollTransition>

        <ScrollTransition>
          <Contact />
        </ScrollTransition>
      </main>
      <Footer />
    </>
  );
}

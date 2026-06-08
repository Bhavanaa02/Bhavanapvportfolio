import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Achievements } from "./components/Achievements";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { ResumePage } from "./components/ResumePage";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero onResumeClick={() => setResumeOpen(true)} />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <ResumePage isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
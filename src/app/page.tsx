import About from "@/components/sections/About";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <Hero />

      <FeaturedProjects />

      <About />

      <Experience />

      <Education />

      <Skills />

      <Contact />

      {/* Future homepage sections */}
    
    </main>
  );
}

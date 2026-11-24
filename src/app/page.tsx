import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <Hero />

      <FeaturedProjects />

      {/* Future homepage sections */}
      <div id="about" className="scroll-mt-20" />
      <div id="contact" className="scroll-mt-20" />
    </main>
  );
}

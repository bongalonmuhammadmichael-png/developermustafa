import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <Hero />

      {/* Future homepage sections */}
      <div id="work" className="scroll-mt-20" />
      <div id="about" className="scroll-mt-20" />
      <div id="contact" className="scroll-mt-20" />
    </main>
  );
}

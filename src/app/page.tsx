import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f10] text-[#f5f3ee]">
      <Header />
      <Hero />
      <FeaturedWork />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
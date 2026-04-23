'use client';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Homelab from '@/components/Homelab';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import AboutLanding from '@/components/AboutLanding';

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  if (!showPortfolio) {
    return <AboutLanding onEnter={() => setShowPortfolio(true)} />;
  }

  return (
    <main className="bg-nord-0 min-h-screen animate-fade-in">
      <Nav onLogoClick={() => setShowPortfolio(false)} />
      <Hero />
      <Homelab />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}

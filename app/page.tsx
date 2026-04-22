import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Homelab from '@/components/Homelab';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-nord-0 min-h-screen">
      <Nav />
      <Hero />
      <Homelab />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}

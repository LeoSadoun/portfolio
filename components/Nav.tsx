'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'homelab', href: '#homelab' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'experience', href: '#experience' },
  { label: 'blog', href: '/blog' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = ['homelab', 'projects', 'skills', 'experience'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-nord-0/90 backdrop-blur-xl border-b border-nord-3/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Terminal logo */}
        <Link href="/" className="flex items-center gap-0.5 group select-none">
          <span className="text-nord-11 text-sm font-semibold">leo</span>
          <span className="text-nord-3 text-sm">@</span>
          <span className="text-nord-4 text-sm">sadoun</span>
          <span className="text-nord-3 text-sm">:~</span>
          <span className="text-nord-8 text-sm">$</span>
          <span className="ml-1 w-[7px] h-[14px] bg-nord-8 animate-blink opacity-90" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-3 py-1.5 text-xs transition-all duration-200 rounded ${
                  isActive
                    ? 'text-nord-8'
                    : 'text-nord-4 hover:text-nord-8'
                }`}

              >
                <span
                  className={`absolute left-1 transition-opacity duration-200 text-nord-8 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                  }`}
                >
                  #
                </span>
                <span className="pl-2">{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-px bg-nord-8/60" />
                )}
              </Link>
            );
          })}
          <div className="ml-3 flex items-center gap-2">
            <a
              href="https://github.com/LeoSadoun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 border border-nord-6/40 text-nord-6 hover:border-nord-6/70 hover:bg-nord-6/10 transition-all duration-200 rounded"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/leo-sadoun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 border border-nord-9/40 text-nord-9 hover:border-nord-9/70 hover:bg-nord-9/10 transition-all duration-200 rounded"
            >
              linkedin
            </a>
            <a
              href="/leo-sadoun-resume.pdf"
              download
              className="text-xs px-3 py-1.5 border border-nord-14/40 text-nord-14 hover:border-nord-14/70 hover:bg-nord-14/10 transition-all duration-200 rounded"
            >
              resume ↓
            </a>
          </div>
        </div>

        {/* Mobile: just GitHub */}
        <a
          href="https://github.com/LeoSadoun"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden text-xs text-nord-4 hover:text-nord-8 transition-colors"
        >
          github ↗
        </a>
      </div>
    </nav>
  );
}

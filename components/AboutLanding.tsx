'use client';

interface AboutLandingProps {
  onEnter: () => void;
}

export default function AboutLanding({ onEnter }: AboutLandingProps) {
  return (
    <div className="min-h-screen bg-nord-0 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-grid opacity-10" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-nord-8/5 to-transparent h-1/2 animate-scan" />

      <div className="max-w-4xl w-full z-10 space-y-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Photo Placeholder */}
          <div className="shrink-0 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-nord-8 to-nord-14 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-nord-1 border-2 border-nord-3/30 flex items-center justify-center overflow-hidden">
              {/* This is where the photo will go later */}
              <div className="flex flex-col items-center gap-3 text-nord-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="text-xs font-mono uppercase tracking-widest">photo_placeholder</span>
              </div>
            </div>
          </div>

          {/* Intro Text */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-nord-14/10 border border-nord-14/20 rounded-full">
              <span className="text-nord-14 text-xs font-mono tracking-wider">SYSTEM_INIT_COMPLETE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-nord-6 tracking-tight">
              I&apos;m <span className="text-nord-8">Leo Sadoun</span>.
            </h1>
            <p className="text-nord-4 text-lg md:text-xl leading-relaxed max-w-2xl">
              A Cybersecurity Analyst and Developer dedicated to building secure systems and exploring the boundaries of technology.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-nord-1/40 border border-nord-3/20 rounded-xl p-6 hover:border-nord-8/30 transition-colors">
            <div className="text-nord-8 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/></svg>
            </div>
            <h3 className="text-nord-6 font-semibold mb-2">Interests</h3>
            <p className="text-nord-4 text-sm leading-relaxed">
              Fascinated by network security, digital forensics, and the intersection of AI with defensive security operations.
            </p>
          </div>

          <div className="bg-nord-1/40 border border-nord-3/20 rounded-xl p-6 hover:border-nord-14/30 transition-colors">
            <div className="text-nord-14 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 21a4.5 4.5 0 0 0 0-9 4.5 4.5 0 0 0 0 9z"/><circle cx="4.5" cy="4.5" r="2.5"/><path d="m21 16-4-4"/><path d="m11 16 4-4"/><path d="m21 6-4 4"/><path d="m11 6 4 4"/></svg>
            </div>
            <h3 className="text-nord-6 font-semibold mb-2">Hobbies</h3>
            <p className="text-nord-4 text-sm leading-relaxed">
              When I&apos;m not in the terminal, you can find me fine-tuning my homelab, exploring new coffee spots, or training for my next certification.
            </p>
          </div>

          <div className="bg-nord-1/40 border border-nord-3/20 rounded-xl p-6 hover:border-nord-15/30 transition-colors">
            <div className="text-nord-15 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </div>
            <h3 className="text-nord-6 font-semibold mb-2">Dreams</h3>
            <p className="text-nord-4 text-sm leading-relaxed">
              Aspiring to contribute to a safer digital world by engineering resilient security infrastructures and mentoring the next generation of analysts.
            </p>
          </div>
        </div>

        {/* Enter Button */}
        <div className="flex justify-center pt-8">
          <button
            onClick={onEnter}
            className="group relative px-8 py-3 bg-nord-8 text-nord-0 font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              INITIALIZE CONNECTION
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

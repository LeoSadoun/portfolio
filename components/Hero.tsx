'use client';
import { useState, useEffect } from 'react';

interface TerminalLine {
  type: 'cmd' | 'out' | 'blank';
  text: string;
  delay: number;
  className?: string;
}

const SEQUENCE: TerminalLine[] = [
  { type: 'cmd', text: 'whoami', delay: 400 },
  { type: 'out', text: 'Leo Sadoun', delay: 1100, className: 'text-nord-6 text-2xl sm:text-3xl font-bold tracking-tight text-glow-frost' },
  { type: 'blank', text: '', delay: 1700 },
  { type: 'cmd', text: 'cat /etc/role.conf', delay: 1800 },
  { type: 'out', text: 'ROLE="Aspiring SOC Analyst | Full-Stack & AI Developer"', delay: 2500, className: 'text-nord-8' },
  { type: 'blank', text: '', delay: 3000 },
  { type: 'cmd', text: 'cat /etc/education', delay: 3100 },
  { type: 'out', text: 'B.A. Computer Science + Cybersecurity Certificate', delay: 3900, className: 'text-nord-14' },
  { type: 'out', text: 'Florida International University  ·  GPA: 3.47  ·  Dean\'s List  ·  May 2026', delay: 4400, className: 'text-nord-3 text-sm' },
  { type: 'blank', text: '', delay: 5000 },
  { type: 'cmd', text: 'ls ~/certs/ --status', delay: 5100 },
  { type: 'out', text: '[●] Security+  Q2 2026    [●] Network+  Q3 2026    [●] CySA+  Q4 2026', delay: 5900, className: 'text-nord-13' },
  { type: 'blank', text: '', delay: 6400 },
  { type: 'cmd', text: 'echo $STACK', delay: 6500 },
  { type: 'out', text: 'Wazuh · Splunk · OPNsense · Proxmox · Python · Next.js · Docker', delay: 7300, className: 'text-nord-15 text-sm' },
];

const SOCIAL_LINKS = [
  { label: '--github', href: 'https://github.com/LeoSadoun', color: 'text-nord-4 hover:text-nord-8' },
  { label: '--linkedin', href: 'https://linkedin.com/in/leo-sadoun', color: 'text-nord-4 hover:text-nord-9' },
  { label: '--email', href: 'mailto:leosadoun4@gmail.com', color: 'text-nord-4 hover:text-nord-14' },
];

export default function Hero() {
  const [shown, setShown] = useState<Set<number>>(new Set());
  const [currentTyping, setCurrentTyping] = useState<number | null>(null);
  const [typedText, setTypedText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [lineDone, setLineDone] = useState(false);
  const [socialsVisible, setSocialsVisible] = useState(false);

  useEffect(() => {
    let charInterval: ReturnType<typeof setInterval>;
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    SEQUENCE.forEach((line, i) => {
      const t = setTimeout(() => {
        if (line.type === 'cmd') {
          setCurrentTyping(i);
          setTypedText('');
          setTypingIndex(0);
          setLineDone(false);
          let ci = 0;
          charInterval = setInterval(() => {
            ci++;
            setTypedText(line.text.slice(0, ci));
            if (ci >= line.text.length) {
              clearInterval(charInterval);
              setLineDone(true);
              setTimeout(() => {
                setShown((prev) => { const s = new Set(Array.from(prev)); s.add(i); return s; });
                setCurrentTyping(null);
              }, 200);
            }
          }, 38);
        } else {
          setShown((prev) => { const s = new Set(Array.from(prev)); s.add(i); return s; });
        }
      }, line.delay);
      timeouts.push(t);
    });

    const socialTimeout = setTimeout(() => setSocialsVisible(true), 8600);
    timeouts.push(socialTimeout);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(charInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nord-0">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Radial glow behind terminal */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-nord-8/5 blur-3xl" />
      </div>

      {/* Terminal window */}
      <div className="relative z-10 w-full max-w-3xl mx-4 sm:mx-6">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-nord-1 rounded-t-lg border border-nord-3/30 border-b-nord-2/20">
          <span className="w-3 h-3 rounded-full bg-nord-11/80" />
          <span className="w-3 h-3 rounded-full bg-nord-13/80" />
          <span className="w-3 h-3 rounded-full bg-nord-14/80" />
          <span className="ml-3 text-xs text-nord-3 flex-1 text-center">
            leo@fiu: ~/portfolio — bash
          </span>
          <span className="text-xs text-nord-3 opacity-40">●</span>
        </div>

        {/* Terminal body */}
        <div className="bg-nord-1/60 backdrop-blur-sm border border-t-0 border-nord-3/30 rounded-b-lg p-6 sm:p-8 min-h-[420px]">
          {SEQUENCE.map((line, i) => {
            const isCurrentlyTyping = currentTyping === i;
            const isDone = shown.has(i);

            if (!isDone && !isCurrentlyTyping) return null;

            if (line.type === 'blank') {
              return <div key={i} className="h-3" />;
            }

            return (
              <div
                key={i}
                className={`flex items-start gap-2 mb-1 animate-fade-in ${line.className ?? ''}`}
              >
                {line.type === 'cmd' ? (
                  <>
                    <span className="text-nord-14 select-none shrink-0 mt-0.5">$</span>
                    <span className="text-nord-4">
                      {isCurrentlyTyping ? typedText : line.text}
                      {isCurrentlyTyping && (
                        <span className="inline-block w-[7px] h-[1em] bg-nord-8 ml-0.5 animate-blink align-middle" />
                      )}
                    </span>
                  </>
                ) : (
                  <span className="pl-6 leading-relaxed">{line.text}</span>
                )}
              </div>
            );
          })}

          {/* Final prompt line */}
          {socialsVisible && (
            <div className="mt-4 flex items-center gap-2 animate-fade-in">
              <span className="text-nord-14 select-none">$</span>
              <span className="text-nord-3 text-sm">./connect.sh</span>
              <span className="ml-2 flex items-center gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`text-xs transition-all duration-200 underline underline-offset-4 ${s.color}`}
                  >
                    {s.label}
                  </a>
                ))}
              </span>
            </div>
          )}

          {/* Idle blinking cursor */}
          {socialsVisible && (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-nord-14 select-none">$</span>
              <span className="inline-block w-[7px] h-[14px] bg-nord-8/70 animate-blink" />
            </div>
          )}
        </div>

        {/* Scroll hint */}
        {socialsVisible && (
          <div className="mt-8 flex justify-center animate-fade-in">
            <a
              href="#homelab"
              className="text-xs text-nord-3 hover:text-nord-8 transition-colors flex flex-col items-center gap-1 group"
            >
              <span>scroll to explore</span>
              <span className="text-lg leading-none group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

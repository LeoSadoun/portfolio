const LINKS = [
  { label: 'github', href: 'https://github.com/LeoSadoun' },
  { label: 'linkedin', href: 'https://linkedin.com/in/leo-sadoun' },
  { label: 'email', href: 'mailto:leosadoun4@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-nord-0 border-t border-nord-3/15">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left: terminal close */}
          <div className="font-mono">
            <p className="text-nord-3 text-xs mb-1">
              <span className="text-nord-14">$</span> exit
            </p>
            <p className="text-nord-3 text-xs">
              [Process completed with exit code 0]
            </p>
          </div>

          {/* Center: links */}
          <div className="flex items-center gap-4">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-xs text-nord-3 hover:text-nord-8 transition-colors font-mono"
              >
                ./{l.label}
              </a>
            ))}
          </div>

          {/* Right: built with */}
          <div className="text-right">
            <p className="text-nord-3 text-xs">
              Built with{' '}
              <span className="text-nord-8">Next.js</span> ·{' '}
              <span className="text-nord-8">TypeScript</span> ·{' '}
              <span className="text-nord-8">Tailwind</span>
            </p>
            <p className="text-nord-3/50 text-xs mt-1">© 2026 Leo Sadoun</p>
          </div>
        </div>

        {/* Bottom: contact line */}
        <div className="mt-10 pt-6 border-t border-nord-3/10 text-center">
          <p className="text-nord-3 text-xs">
            <span className="text-nord-14">$</span>{' '}
            <span className="text-nord-4">leosadoun4@gmail.com</span>
            <span className="text-nord-3"> · </span>
            <span className="text-nord-4">(305) 780-3045</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

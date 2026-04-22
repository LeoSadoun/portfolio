import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leo Sadoun | SOC Analyst & Developer',
  description:
    'Aspiring SOC Analyst and Full-Stack Developer. B.A. Computer Science with Cybersecurity Certificate at FIU. Home lab: Proxmox, Wazuh, Splunk, OPNsense.',
  keywords: [
    'SOC Analyst',
    'Cybersecurity',
    'Wazuh',
    'Splunk',
    'SIEM',
    'Full-Stack Developer',
    'Next.js',
    'TypeScript',
    'Florida International University',
  ],
  authors: [{ name: 'Leo Sadoun' }],
  openGraph: {
    title: 'Leo Sadoun | SOC Analyst & Developer',
    description: 'Aspiring SOC Analyst & Full-Stack Developer — FIU CS \'26',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-nord-0 text-nord-4 font-mono antialiased">{children}</body>
    </html>
  );
}

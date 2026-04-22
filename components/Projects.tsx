interface Project {
  title: string;
  subtitle?: string;
  period: string;
  stack: string[];
  bullets: string[];
  accent: string;
  borderColor: string;
  github?: string;
  type: 'security' | 'ai' | 'ml';
  badge: string;
}

const PROJECTS: Project[] = [
  {
    title: 'SOC Analysis Homelab',
    period: 'Sep 2025 – Present',
    stack: ['Wazuh', 'Splunk', 'Kali Linux', 'Cisco IOS', 'MITRE ATT&CK', 'OPNsense'],
    badge: 'ACTIVE',
    type: 'security',
    accent: '#BF616A',
    borderColor: 'border-nord-11/30 hover:border-nord-11/60',
    bullets: [
      'Deployed Wazuh SIEM + forwarded alerts to Splunk via Universal Forwarder; used SPL to detect and confirm simulated brute-force across 3 endpoints.',
      'Simulated credential dumping and lateral movement with Kali against Windows/Linux endpoints to validate detection rules.',
      'Segmented lab into VLANs via Cisco hardware; SPAN capture confirmed malware detonation fully contained.',
      'Mapped attacks to MITRE ATT&CK TTPs (T1003, T1021, T1059) to prioritize detection gaps.',
    ],
  },
  {
    title: 'SOAR Pipeline',
    subtitle: 'Automated Incident Response',
    period: 'Jan 2026 – Present',
    stack: ['Shuffle', 'TheHive', 'Python', 'VirusTotal API', 'AbuseIPDB API', 'Proxmox'],
    badge: 'ACTIVE',
    type: 'security',
    accent: '#D08770',
    borderColor: 'border-nord-12/30 hover:border-nord-12/60',
    bullets: [
      'Orchestrated Shuffle SOAR to auto-create TheHive cases from Wazuh alerts — eliminating manual case creation.',
      'Developed playbooks querying VirusTotal + AbuseIPDB to enrich alerts with threat intel and auto-classify severity.',
      'Scripted active response triggers that isolate compromised Proxmox VMs and update OPNsense blocklists within seconds.',
    ],
  },
  {
    title: 'Voxtant',
    subtitle: 'AI Mock Interview Coach',
    period: '2024',
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'Gemini LLM', 'MediaPipe', 'Python'],
    badge: 'FULLSTACK',
    type: 'ai',
    accent: '#88C0D0',
    borderColor: 'border-nord-8/30 hover:border-nord-8/60',
    github: 'https://github.com/LeoSadoun',
    bullets: [
      'AI-driven mock-interview coach with real-time posture + eye-contact feedback via MediaPipe pose estimation.',
      'Gemini LLM generates dynamic follow-up questions and detailed answer scoring with actionable feedback.',
      'FastAPI backend streams LLM responses; Next.js frontend renders live video overlay with landmark detection.',
    ],
  },
  {
    title: 'HeliosAI',
    subtitle: 'Dual-Axis Solar Tracking System',
    period: '2024',
    stack: ['Flask', 'Python', 'Gemini AI', 'Arduino', 'REST API'],
    badge: 'HARDWARE + AI',
    type: 'ai',
    accent: '#EBCB8B',
    borderColor: 'border-nord-13/30 hover:border-nord-13/60',
    github: 'https://github.com/LeoSadoun',
    bullets: [
      'Dual-axis solar tracking system maximizing panel efficiency via servo-motor control and LDR sensor arrays.',
      'Flask dashboard visualizes real-time energy output, tracking angles, and efficiency gains over static panels.',
      'Gemini AI integration provides predictive optimization based on time-of-day and weather pattern inputs.',
    ],
  },
  {
    title: 'Deep Learning Systems',
    subtitle: 'CNN · MobileNetV2',
    period: '2024',
    stack: ['Python', 'TensorFlow', 'Keras', 'MobileNetV2', 'CNN', 'OpenCV'],
    badge: 'ML / AI',
    type: 'ml',
    accent: '#B48EAD',
    borderColor: 'border-nord-15/30 hover:border-nord-15/60',
    bullets: [
      'Deepfake detection model (CNN) trained to classify manipulated facial imagery with high precision.',
      'Pediatric Pneumonia detection system using MobileNetV2 transfer learning on chest X-ray datasets.',
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const badgeColors: Record<string, string> = {
    'ACTIVE': 'border-nord-14/40 text-nord-14',
    'FULLSTACK': 'border-nord-8/40 text-nord-8',
    'HARDWARE + AI': 'border-nord-13/40 text-nord-13',
    'ML / AI': 'border-nord-15/40 text-nord-15',
  };

  return (
    <div
      className={`group bg-nord-1/40 border rounded-lg overflow-hidden transition-all duration-300 hover:bg-nord-1/60 ${project.borderColor}`}
      style={{ '--accent': project.accent } as React.CSSProperties}
    >
      {/* Terminal chrome */}
      <div className="px-4 py-2.5 bg-nord-1/80 border-b border-nord-3/20 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: project.accent, opacity: 0.7 }} />
        <span className="w-2.5 h-2.5 rounded-full bg-nord-3/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-nord-3/40" />
        <span className="ml-2 text-xs text-nord-3 flex-1 truncate">
          {project.title.toLowerCase().replace(/ /g, '_')}.sh
        </span>
        <span className={`text-[10px] px-1.5 py-0.5 border rounded font-mono ${badgeColors[project.badge] ?? 'border-nord-3/40 text-nord-3'}`}>
          {project.badge}
        </span>
      </div>

      <div className="p-5">
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-nord-6 font-bold text-base leading-tight">{project.title}</h3>
          {project.subtitle && (
            <p className="text-nord-3 text-xs mt-0.5">{project.subtitle}</p>
          )}
          <p className="text-nord-3 text-xs mt-1 opacity-60">{project.period}</p>
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 bg-nord-0/60 border border-nord-3/20 text-nord-3 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bullets */}
        <ul className="space-y-2">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-nord-4 leading-relaxed">
              <span className="shrink-0 mt-0.5" style={{ color: project.accent }}>▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Links */}
        {project.github && (
          <div className="mt-4 pt-3 border-t border-nord-3/15">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-nord-3 hover:text-nord-8 transition-colors"
            >
              $ open --github ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-nord-0/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-nord-3 text-xs mb-2 font-mono">// 02_PROJECTS</p>
          <h2 className="text-nord-6 text-2xl sm:text-3xl font-bold tracking-tight">
            Projects
          </h2>
          <p className="text-nord-3 text-sm mt-2">
            SOC labs, SOAR pipelines, AI systems, full-stack apps.
          </p>
          <div className="mt-4 h-px bg-gradient-to-r from-nord-8/50 via-nord-3/30 to-transparent" />
        </div>

        {/* Security projects — featured, larger */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {PROJECTS.filter((p) => p.type === 'security').map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        {/* Other projects — 3-col grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.filter((p) => p.type !== 'security').map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

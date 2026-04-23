interface TimelineEntry {
  org: string;
  role: string;
  period: string;
  location: string;
  color: string;
  dotColor: string;
  bullets: string[];
  tags?: string[];
}

const TIMELINE: TimelineEntry[] = [
  {
    org: 'Florida International University',
    role: 'B.A. Computer Science + Cybersecurity Certificate',
    period: 'Aug 2022 – May 2026',
    location: 'Miami, FL',
    color: 'text-nord-8',
    dotColor: 'bg-nord-8',
    bullets: [
      'GPA: 3.47 / 4.00  —  Dean\'s List (multiple semesters)',
      'Courses: Data Structures · Systems Programming · Computer Architecture · AI · Deep Learning · Ethical Hacking · Database Management · AWS Fundamentals',
    ],
    tags: ['CS', 'Cybersecurity', 'Dean\'s List'],
  },
  {
    org: 'INIT',
    role: 'Technical Contributor',
    period: 'Jul 2023 – Present',
    location: 'Miami, FL',
    color: 'text-nord-14',
    dotColor: 'bg-nord-14',
    bullets: [
      'Contributed to a network security monitoring tool — owned the data ingestion pipeline and delivered a working prototype in 6 weeks.',
      'Mentored 5 students in architecting a Proxmox-based SOC virtualization environment, covering VLAN segmentation and firewall rule configuration.',
    ],
    tags: ['SOC', 'Proxmox', 'Mentorship'],
  },
  {
    org: 'AMICON',
    role: 'Estimator Intern',
    period: 'Oct 2022 – Jul 2023',
    location: 'Miami, FL',
    color: 'text-nord-12',
    dotColor: 'bg-nord-12',
    bullets: [
      'Maintained precise documentation and stakeholder communication across 15+ concurrent projects totaling $135M+ in value — same discipline applied to incident ticketing and escalation.',
      'Audited 120+ technical documents under deadline pressure, improving retrieval speed by 20%; structured triage habits directly transferable to log review and evidence organization.',
    ],
    tags: ['Documentation', 'Triage', 'Stakeholder Comms'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-nord-0/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-nord-14 text-xs mb-2 font-mono">// 04_EXPERIENCE</p>
          <h2 className="text-nord-6 text-2xl sm:text-3xl font-bold tracking-tight">Experience</h2>
          <p className="text-nord-4 text-sm mt-2">Education, internships, and technical involvement.</p>
          <div className="mt-4 h-px bg-gradient-to-r from-nord-8/50 via-nord-3/30 to-transparent" />
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-nord-8/40 via-nord-3/20 to-transparent hidden sm:block" />

          <div className="space-y-10 sm:pl-10">
            {TIMELINE.map((entry, i) => (
              <div key={i} className="relative group">
                {/* Dot */}
                <div
                  className={`absolute -left-10 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-nord-0 hidden sm:block ${entry.dotColor}`}
                  style={{ boxShadow: `0 0 8px currentColor` }}
                />

                <div className="bg-nord-1/40 border border-nord-3/20 rounded-lg overflow-hidden hover:border-nord-3/40 transition-all duration-200">
                  {/* Header */}
                  <div className="px-5 py-3.5 border-b border-nord-3/15 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className={`font-semibold text-sm ${entry.color}`}>{entry.org}</h3>
                      <p className="text-nord-5 text-sm mt-0.5">{entry.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-nord-4 text-xs">{entry.period}</p>
                      <p className="text-nord-4 text-xs opacity-70">{entry.location}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="px-5 py-4">
                    <ul className="space-y-2">
                      {entry.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-nord-4 leading-relaxed">
                          <span className={`shrink-0 mt-0.5 ${entry.color}`}>▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {entry.tags && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 bg-nord-0/60 border border-nord-3/20 text-nord-4 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


interface SkillGroup {
  label: string;
  prompt: string;
  color: string;
  borderColor: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Security & Infrastructure',
    prompt: 'cat /etc/security_tools',
    color: 'text-nord-11',
    borderColor: 'border-nord-11/25',
    skills: [
      'Wazuh SIEM', 'Splunk', 'OPNsense', 'Proxmox VE',
      'Linux (Arch, Debian, Kali)', 'Docker', 'Kubernetes', 'AWS',
      'Nmap', 'Wireshark', 'Metasploit', 'Nessus', 'Snort',
      'WireGuard', 'OpenVPN', 'Shuffle SOAR', 'TheHive',
      'Neovim', 'Git', 'GitHub',
    ],
  },
  {
    label: 'Languages',
    prompt: 'cat /etc/languages',
    color: 'text-nord-8',
    borderColor: 'border-nord-8/25',
    skills: [
      'Python', 'Bash / Shell', 'Java', 'C',
      'JavaScript', 'TypeScript', 'SQL',
    ],
  },
  {
    label: 'Web & Full-Stack',
    prompt: 'cat /etc/web_stack',
    color: 'text-nord-14',
    borderColor: 'border-nord-14/25',
    skills: [
      'Next.js', 'React', 'Tailwind CSS', 'Node.js',
      'FastAPI', 'Flask', 'Spring Boot',
      'PostgreSQL', 'MongoDB',
      'REST APIs', 'MediaPipe', 'Gemini AI',
    ],
  },
  {
    label: 'CS Coursework',
    prompt: 'cat /etc/courses',
    color: 'text-nord-15',
    borderColor: 'border-nord-15/25',
    skills: [
      'Data Structures', 'Systems Programming', 'Computer Architecture',
      'Software Engineering', 'AI', 'Deep Learning',
      'Database Management', 'Ethical Hacking', 'AWS Fundamentals',
      'Discrete Structures',
    ],
  },
];

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <div className={`bg-nord-1/40 border rounded-lg overflow-hidden ${group.borderColor}`}>
      {/* Terminal header */}
      <div className="px-4 py-2.5 bg-nord-1/80 border-b border-nord-3/20 flex items-center gap-2">
        <span className={`text-[10px] font-mono ${group.color}`}>›</span>
        <span className="text-xs text-nord-3 font-mono">{group.prompt}</span>
      </div>

      <div className="p-4">
        <h3 className={`text-sm font-semibold mb-3 ${group.color}`}>{group.label}</h3>
        <div className="flex flex-wrap gap-1.5">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-1 bg-nord-0/60 border border-nord-3/20 text-nord-4 rounded hover:border-nord-3/40 hover:text-nord-5 transition-all duration-150 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const PROFICIENCY = [
  { label: 'SIEM Operations (Wazuh + Splunk)', pct: 85, color: 'var(--nord-11)' },
  { label: 'Python (scripting, automation, ML)', pct: 88, color: 'var(--nord-8)' },
  { label: 'Linux Administration', pct: 90, color: 'var(--nord-14)' },
  { label: 'Network Security & Firewall Config', pct: 78, color: 'var(--nord-12)' },
  { label: 'Full-Stack Web Development', pct: 80, color: 'var(--nord-9)' },
  { label: 'Incident Response / SOAR', pct: 75, color: 'var(--nord-13)' },
  { label: 'Machine Learning / Deep Learning', pct: 70, color: 'var(--nord-15)' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-nord-0">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-nord-3 text-xs mb-2 font-mono">// 03_SKILLS_MATRIX</p>
          <h2 className="text-nord-6 text-2xl sm:text-3xl font-bold tracking-tight">Skills</h2>
          <p className="text-nord-3 text-sm mt-2">Tools, languages, and frameworks — production and lab environments.</p>
          <div className="mt-4 h-px bg-gradient-to-r from-nord-8/50 via-nord-3/30 to-transparent" />
        </div>

        {/* Proficiency bars */}
        <div className="bg-nord-1/40 border border-nord-3/20 rounded-lg overflow-hidden mb-8">
          <div className="px-4 py-2.5 bg-nord-1/80 border-b border-nord-3/20 flex items-center gap-2">
            <span className="text-xs text-nord-3 font-mono">htop — proficiency_monitor</span>
            <span className="ml-auto text-xs text-nord-14">● live</span>
          </div>
          <div className="p-5 space-y-4">
            {PROFICIENCY.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-nord-4 font-mono">{item.label}</span>
                  <span className="text-xs text-nord-3">{item.pct}%</span>
                </div>
                <div className="h-1.5 bg-nord-0 rounded-full overflow-hidden border border-nord-3/15">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${item.pct}%`, background: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill group cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group) => (
            <SkillCard key={group.label} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

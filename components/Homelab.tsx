const SERVICES = [
  { name: 'Proxmox VE', desc: 'Hypervisor — 8 VMs active', status: 'active', color: 'text-nord-14' },
  { name: 'Wazuh SIEM', desc: 'Log aggregation + alerting', status: 'active', color: 'text-nord-14' },
  { name: 'Splunk', desc: 'SPL queries + dashboards', status: 'active', color: 'text-nord-14' },
  { name: 'OPNsense', desc: 'Perimeter firewall + VLAN segmentation', status: 'active', color: 'text-nord-14' },
  { name: 'Shuffle SOAR', desc: 'Automated playbook orchestration', status: 'active', color: 'text-nord-14' },
  { name: 'TheHive', desc: 'Case management + incident tracking', status: 'active', color: 'text-nord-14' },
  { name: 'Kali Linux', desc: 'Adversary simulation endpoint', status: 'active', color: 'text-nord-14' },
];

const TTPS = [
  { id: 'T1003', name: 'Credential Dumping', tactic: 'Credential Access' },
  { id: 'T1021', name: 'Remote Services', tactic: 'Lateral Movement' },
  { id: 'T1059', name: 'Command & Scripting', tactic: 'Execution' },
  { id: 'T1110', name: 'Brute Force', tactic: 'Credential Access' },
  { id: 'T1046', name: 'Network Scanning', tactic: 'Discovery' },
];

const CERTS = [
  { name: 'CompTIA Security+', eta: 'Q2 2026', status: 'studying', pct: 75 },
  { name: 'CompTIA Network+', eta: 'Q3 2026', status: 'upcoming', pct: 30 },
  { name: 'CompTIA CySA+', eta: 'Q4 2026', status: 'upcoming', pct: 10 },
];

const VLANS = [
  { id: '10', name: 'Management', color: 'text-nord-8' },
  { id: '20', name: 'SOC Analysts', color: 'text-nord-14' },
  { id: '30', name: 'Malware Detonation', color: 'text-nord-11' },
  { id: '40', name: 'Red Team / Kali', color: 'text-nord-12' },
];

function SectionHeader({ index, title, sub }: { index: string; title: string; sub?: string }) {
  return (
    <div className="mb-12">
      <p className="text-nord-3 text-xs mb-2 font-mono">// {index}</p>
      <h2 className="text-nord-6 text-2xl sm:text-3xl font-bold tracking-tight">
        {title}
      </h2>
      {sub && <p className="text-nord-3 text-sm mt-2">{sub}</p>}
      <div className="mt-4 h-px bg-gradient-to-r from-nord-8/50 via-nord-3/30 to-transparent" />
    </div>
  );
}

export default function Homelab() {
  return (
    <section id="homelab" className="py-24 px-6 bg-nord-0">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="01_HOMELAB"
          title="SOC Analysis Lab"
          sub="Production-grade home lab built on Proxmox — simulating real SOC workflows end-to-end."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left column: Active services + VLAN topology */}
          <div className="space-y-6">
            {/* Active services card */}
            <div className="bg-nord-1/50 border border-nord-3/20 rounded-lg overflow-hidden">
              <div className="px-4 py-2.5 bg-nord-1 border-b border-nord-3/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-nord-14 animate-pulse" />
                <span className="text-xs text-nord-3">active_services.sh</span>
                <span className="ml-auto text-xs text-nord-14">7 running</span>
              </div>
              <div className="p-4 space-y-2.5">
                {SERVICES.map((svc) => (
                  <div key={svc.name} className="flex items-start gap-3 group">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-nord-14 shrink-0 group-hover:shadow-[0_0_6px_rgba(163,190,140,0.8)] transition-all" />
                    <div className="flex-1 min-w-0">
                      <span className="text-nord-5 text-sm font-medium">{svc.name}</span>
                      <span className="text-nord-3 text-xs ml-2">— {svc.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Network topology */}
            <div className="bg-nord-1/50 border border-nord-3/20 rounded-lg overflow-hidden">
              <div className="px-4 py-2.5 bg-nord-1 border-b border-nord-3/20 flex items-center gap-2">
                <span className="text-xs text-nord-3">network_topology.conf</span>
              </div>
              <div className="p-4">
                <p className="text-xs text-nord-3 mb-3">VLAN segmentation via Cisco hardware:</p>
                <div className="space-y-2">
                  {VLANS.map((v) => (
                    <div key={v.id} className="flex items-center gap-3 text-sm font-mono">
                      <span className="text-nord-3 w-8">v{v.id}</span>
                      <span className={`${v.color}`}>──</span>
                      <span className="text-nord-4">{v.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-nord-3/20">
                  <p className="text-xs text-nord-3">
                    <span className="text-nord-14">✓</span> SPAN capture confirmed: malware detonation traffic fully contained
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: MITRE ATT&CK + cert roadmap */}
          <div className="space-y-6">
            {/* MITRE ATT&CK Coverage */}
            <div className="bg-nord-1/50 border border-nord-3/20 rounded-lg overflow-hidden">
              <div className="px-4 py-2.5 bg-nord-1 border-b border-nord-3/20 flex items-center gap-2">
                <span className="text-xs text-nord-3">mitre_coverage.json</span>
                <span className="ml-auto text-xs text-nord-11">ATT&CK Framework</span>
              </div>
              <div className="p-4">
                <p className="text-xs text-nord-3 mb-3">Simulated + detected TTPs:</p>
                <div className="flex flex-wrap gap-2">
                  {TTPS.map((ttp) => (
                    <div
                      key={ttp.id}
                      className="group relative border border-nord-11/30 rounded px-2.5 py-1.5 hover:border-nord-11/60 hover:bg-nord-11/5 transition-all duration-200 cursor-default"
                    >
                      <span className="text-nord-11 text-xs font-semibold">{ttp.id}</span>
                      <span className="text-nord-4 text-xs ml-1.5">{ttp.name}</span>
                      <div className="absolute bottom-full left-0 mb-1 px-2 py-1 bg-nord-0 border border-nord-3/30 rounded text-xs text-nord-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {ttp.tactic}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-nord-3 mt-3">
                  Used as framework to identify detection gaps and prioritize new Wazuh rules.
                </p>
              </div>
            </div>

            {/* Certification roadmap */}
            <div className="bg-nord-1/50 border border-nord-3/20 rounded-lg overflow-hidden">
              <div className="px-4 py-2.5 bg-nord-1 border-b border-nord-3/20 flex items-center gap-2">
                <span className="text-xs text-nord-3">cert_roadmap.sh</span>
                <span className="ml-auto text-xs text-nord-13">● In progress</span>
              </div>
              <div className="p-4 space-y-5">
                {CERTS.map((cert) => (
                  <div key={cert.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-nord-5 text-sm">{cert.name}</span>
                      <span className="text-nord-3 text-xs">{cert.eta}</span>
                    </div>
                    <div className="h-1.5 bg-nord-0 rounded-full overflow-hidden border border-nord-3/20">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${cert.pct}%`,
                          background:
                            cert.pct >= 70
                              ? 'var(--nord-14)'
                              : cert.pct >= 30
                              ? 'var(--nord-13)'
                              : 'var(--nord-3)',
                        }}
                      />
                    </div>
                    <p className="text-xs text-nord-3 mt-1">{cert.pct}% complete</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools enrichment */}
            <div className="bg-nord-1/50 border border-nord-3/20 rounded-lg p-4">
              <p className="text-xs text-nord-3 mb-3">Threat intel enrichment (SOAR pipeline):</p>
              <div className="flex flex-wrap gap-2">
                {['VirusTotal API', 'AbuseIPDB API', 'SPL Queries', 'WireGuard VPN', 'OpenVPN', 'Nmap', 'Wireshark', 'Metasploit', 'Nessus', 'Snort'].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 border border-nord-9/25 text-nord-9 rounded hover:border-nord-9/50 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

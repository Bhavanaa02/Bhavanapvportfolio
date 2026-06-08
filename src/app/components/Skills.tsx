import { motion } from "motion/react";
import { Code2, Terminal, Network, Shield, Server, GitBranch, Globe } from "lucide-react";

const categories = [
  {
    icon: Shield,
    label: "Security",
    accent: "#6366f1",
    tags: [
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "OWASP Top 10",
      "MITRE ATT&CK",
      "SonarQube",
      "Secure Code Analysis",
      "Vulnerability Assessment",
    ],
  },
  {
    icon: Terminal,
    label: "Operating Systems",
    accent: "#22d3ee",
    tags: [
      "Kali Linux",
      "Ubuntu Server",
      "Linux CLI",
      "Windows",
      "VirtualBox",
      "VMware",
    ],
  },
  {
    icon: Network,
    label: "Networking",
    accent: "#34d399",
    tags: [
      "TCP/IP",
      "DNS",
      "HTTP/HTTPS",
      "Packet Analysis",
      "Traffic Analysis",
      "Network Troubleshooting",
      "VPN Fundamentals",
    ],
  },
  {
    icon: Code2,
    label: "Programming & Scripting",
    accent: "#f472b6",
    tags: [
      "Python",
      "Bash Scripting",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    icon: Server,
    label: "Infrastructure",
    accent: "#fb923c",
    tags: [
      "Apache",
      "MySQL",
      "WordPress",
      "SSL/TLS",
      "DNS Management",
    ],
  },
  {
    icon: GitBranch,
    label: "Tools & Platforms",
    accent: "#a78bfa",
    tags: [
      "Git",
      "GitHub",
      "VS Code",
      "Semgrep",
      "Gitleaks",
    ],
  },
];
export function Skills() {
  return (
    <section id="Skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="text-center space-y-3">
            <h2 className="text-3xl lg:text-4xl" style={{ color: "#f0f2f7" }}>Skills</h2>
            <div className="w-12 h-px mx-auto" style={{ background: "linear-gradient(90deg,transparent,#6366f1,transparent)" }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border p-5 space-y-4"
                style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center border"
                    style={{ background: `rgba(${hr(cat.accent)},0.1)`, borderColor: `rgba(${hr(cat.accent)},0.25)` }}>
                    <cat.icon className="w-4 h-4" style={{ color: cat.accent }} />
                  </div>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{cat.label}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 text-xs rounded-lg border cursor-default transition-colors"
                      style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function hr(hex: string): string {
  return `${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)}`;
}

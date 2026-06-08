import { motion } from "motion/react";
import { Github, ExternalLink, Shield, Zap, Vote, Activity, Server, Globe } from "lucide-react";

const projects = [
  {
    title: "SecureOps",
    description: "Automated Security Analysis & Developer Guidance Platform",
    details: "Comprehensive security operations platform that automates vulnerability scanning, provides real-time threat intelligence, and offers actionable developer guidance for security best practices.",
    icon: Shield,
    tags: ["Python", "Security Operations", "Automation", "Threat Intelligence"],
    github: "https://github.com/Bhavanaa02/SecureOps",
    accent: "#6366f1",
  },
  {
    title: "Slowloris DoS Attack Automation",
    description: "Python-based attack simulation and traffic behaviour analysis",
    details: "Educational framework for simulating Slowloris denial-of-service attacks in controlled lab environments, analysing network traffic patterns and testing server resilience under stress.",
    icon: Zap,
    tags: ["Python", "Network Security", "Attack Simulation", "Wireshark"],
    github: "https://github.com/Bhavanaa02/Slowloris-Attack",
    accent: "#f472b6",
  },
  {
    title: "VoteChain",
    description: "Blockchain-based secure electronic voting system",
    details: "Decentralised voting platform using blockchain technology to ensure vote integrity, prevent tampering, and provide transparent, auditable election processes while maintaining voter privacy.",
    icon: Vote,
    tags: ["Blockchain", "Solidity", "Cryptography", "Web3"],
    github: "https://github.com/Bhavanaa02/Vote-chain",
    accent: "#22d3ee",
  },
  {
    title: "Linux Infrastructure Monitoring System",
    description: "Lightweight server health and event monitoring dashboard",
    details: "Bash and Python-based infrastructure monitoring solution that tracks CPU, memory, disk usage, network activity, and security events on Linux servers with automated alerting.",
    icon: Activity,
    tags: ["Linux", "Bash", "Python", "Infrastructure", "Monitoring"],
    github: "https://github.com/Bhavanaa02",
    accent: "#34d399",
  },
  {
    title: "Secure WordPress Hosting Lab",
    description: "Hardened WordPress deployment on Ubuntu Server",
    details: "Full self-hosted WordPress lab on Ubuntu with Apache, MySQL, SSL/TLS hardening, firewall configuration, DNS setup, and security best-practice implementation for web hosting environments.",
    icon: Server,
    tags: ["WordPress", "Apache", "Ubuntu", "SSL/TLS", "Firewall"],
    github: "https://github.com/Bhavanaa02",
    accent: "#fb923c",
  },
  {
    title: "QR Threat Analyser",
    description: "QR code-based phishing and malicious URL detection",
    details: "Tool developed during internship at Albus Security LLP that decodes QR codes and analyses the embedded URLs for phishing indicators, malicious domains, and suspicious redirect chains.",
    icon: Globe,
    tags: ["Python", "URL Analysis", "Phishing Detection", "Security Research"],
    github: "https://github.com/Bhavanaa02",
    accent: "#a78bfa",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="text-center space-y-3">
          
            <h2 className="text-3xl lg:text-4xl" style={{ color: "#f0f2f7" }}>Projects</h2>
            <div className="w-12 h-px mx-auto" style={{ background: "linear-gradient(90deg,transparent,#6366f1,transparent)" }} />
            <p className="max-w-xl mx-auto text-sm pt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
              Hands-on projects in security operations, automation, infrastructure, and secure application development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border overflow-hidden transition-all flex flex-col"
                style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
              >
                {/* Top accent line */}
                <div className="h-px w-full" style={{ background: `linear-gradient(90deg,transparent,${project.accent}60,transparent)` }} />

                <div className="p-6 flex flex-col flex-1 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border"
                      style={{ background: `rgba(${hexRgb(project.accent)},0.1)`, borderColor: `rgba(${hexRgb(project.accent)},0.25)` }}>
                      <project.icon className="w-5 h-5" style={{ color: project.accent }} />
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border transition-colors hover:bg-white/5 flex-shrink-0"
                      style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}>
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-sm" style={{ color: "rgba(255,255,255,0.9)" }}>{project.title}</h3>
                    <p className="text-xs" style={{ color: project.accent }}>{project.description}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {project.details}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs rounded-md border"
                        style={{ background: `rgba(${hexRgb(project.accent)},0.07)`, borderColor: `rgba(${hexRgb(project.accent)},0.2)`, color: `rgba(${hexRgb(project.accent)},0.9)` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function hexRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    name: "ISC2 Certified in Cybersecurity (CC) — Candidate",
    issuer: "ISC2",
    desc: "Pursuing the globally recognised entry-level cybersecurity certification covering core security principles.",
    accent: "#6366f1",
    status: "In Progress",
  },
  {
    name: "Ethical Hacking Essentials (EHE)",
    issuer: "CodeRED (EC-Council)",
    desc: "Foundations of ethical hacking including footprinting, scanning, enumeration, and system hacking.",
    accent: "#22d3ee",
    status: "Certified",
  },
  {
    name: "Dark Web, Anonymity & Cryptocurrency Fundamentals",
    issuer: "CodeRED (EC-Council)",
    desc: "Understanding of dark web operations, anonymity networks (Tor), and cryptocurrency tracing for threat intelligence.",
    accent: "#a78bfa",
    status: "Certified",
  },
  {
    name: "Google Cybersecurity Certificate",
    issuer: "Google / Coursera",
    desc: "Comprehensive coverage of security foundations, threat analysis, SIEM tools, Linux, Python scripting, and incident response.",
    accent: "#34d399",
    status: "In Progress",
  },
  {
    name: "Network Security",
    issuer: "Cisco NetAcad",
    desc: "Network security principles, firewall configuration, ACLs, VPN fundamentals, and intrusion prevention systems.",
    accent: "#fb923c",
    status: "Certified",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco NetAcad",
    desc: "Foundational understanding of cybersecurity landscape, threats, vulnerabilities, and digital privacy.",
    accent: "#f472b6",
    status: "Certified",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="text-center space-y-3">
            <h2 className="text-3xl lg:text-4xl" style={{ color: "#f0f2f7" }}>Certifications</h2>
            <div className="w-12 h-px mx-auto" style={{ background: "linear-gradient(90deg,transparent,#6366f1,transparent)" }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="relative rounded-2xl border p-5 transition-all flex flex-col gap-3"
                style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="h-px w-full" style={{ background: `linear-gradient(90deg,${cert.accent}50,transparent)` }} />

                <div className="flex items-start justify-between gap-2">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border"
                    style={{ background: `rgba(${hr(cert.accent)},0.1)`, borderColor: `rgba(${hr(cert.accent)},0.25)` }}>
                    <Award className="w-4 h-4" style={{ color: cert.accent }} />
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full border flex-shrink-0"
                    style={
                      cert.status === "In Progress"
                        ? { background: "rgba(251,191,36,0.1)", borderColor: "rgba(251,191,36,0.25)", color: "#fcd34d" }
                        : { background: "rgba(52,211,153,0.1)", borderColor: "rgba(52,211,153,0.25)", color: "#6ee7b7" }
                    }>
                    {cert.status}
                  </span>
                </div>

                <div className="space-y-1.5 flex-1">
                  <p className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.88)" }}>{cert.name}</p>
                  <p className="text-xs" style={{ color: cert.accent }}>{cert.issuer}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>{cert.desc}</p>
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

import { motion, AnimatePresence } from "motion/react";
import { Download, Eye, ArrowLeft, FileText, Shield, Briefcase, GraduationCap, Award, Code, Globe, Network, Cloud, Terminal, Cpu } from "lucide-react";

interface ResumePageProps {
  isOpen: boolean;
  onClose: () => void;
}

const SECTION = "mb-10";
const SECTION_TITLE = "text-xl mb-5 pb-2 border-b";

export function ResumePage({ isOpen, onClose }: ResumePageProps) {
  const resumePdfUrl = "public/BhavanaPV.pdf"; // Update with actual PDF URL

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdfUrl;
    link.download = "BhavanaPV.pdf";
    link.click();
  };

  const handleViewPdf = () => {
    window.open(resumePdfUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
          style={{ backgroundColor: "#080b12" }}
        >
          {/* Background grid */}
          <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:28px_28px]" />

          {/* Gradient orbs */}
          <div className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)" }} />
          <div className="fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />

          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            onClick={onClose}
            className="fixed top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-colors hover:bg-white/5"
            style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.03)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </motion.button>

          {/* Main content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">

            {/* ── Header ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border text-sm"
                style={{ borderColor: "rgba(99,102,241,0.35)", background: "rgba(99,102,241,0.1)", color: "#818cf8" }}>
                <FileText className="w-3.5 h-3.5" />
                Resume
              </div>
              <h1 className="text-5xl lg:text-6xl mb-3" style={{ color: "#fff" }}>
                Bhavana <span style={{ color: "#818cf8" }}>P V</span>
              </h1>
              <p className="text-base" style={{ color: "rgba(255,255,255,0.45)" }}>
                Cybersecurity Graduate&nbsp;|&nbsp;Security Operations&nbsp;|&nbsp;Technical Analysis&nbsp;|&nbsp;Cyber Defense
              </p>
            </motion.div>

            {/* ── Action buttons ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="flex flex-wrap gap-4 justify-center mb-16"
            >
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleDownload}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white"
                style={{ background: "linear-gradient(135deg,#4f46e5,#6366f1)", boxShadow: "0 0 22px rgba(99,102,241,0.35)" }}>
                <Download className="w-4 h-4" /> Download PDF
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleViewPdf}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white"
                style={{ background: "linear-gradient(135deg,#7c3aed,#8b5cf6)", boxShadow: "0 0 22px rgba(139,92,246,0.3)" }}>
                <Eye className="w-4 h-4" /> View PDF
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onClose}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border transition-colors hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.75)", background: "rgba(255,255,255,0.04)" }}>
                Contact Me
              </motion.button>
            </motion.div>

            {/* ── Professional Summary ── */}
            <FadeSection delay={0.3}>
              <div className={SECTION}>
                <h2 className={SECTION_TITLE} style={{ color: "#fff", borderColor: "rgba(255,255,255,0.1)" }}>Professional Summary</h2>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.85" }}>
                  Cybersecurity graduate with hands-on experience in Linux administration, networking, web technologies, and technical support. Completed a 7-month internship at Albus Security LLP and built practical projects involving infrastructure monitoring, troubleshooting workflows, WordPress hosting, and security operations. Passionate about problem-solving, system administration, and helping users resolve technical issues through structured support and operational workflows.
                </p>
              </div>
            </FadeSection>

            {/* ── Technical Expertise ── */}
            <FadeSection delay={0.35}>
              <div className={SECTION}>
                <h2 className={SECTION_TITLE} style={{ color: "#fff", borderColor: "rgba(255,255,255,0.1)" }}>Technical Expertise</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Network className="w-4 h-4" style={{ color: "#60a5fa" }} />,
                      label: "Networking",
                      items: ["TCP/IP", "DNS", "HTTP/HTTPS", "Network Troubleshooting", "Packet Analysis (Wireshark)", "IP Addressing"],
                    },
                    {
                      icon: <Shield className="w-4 h-4" style={{ color: "#a78bfa" }} />,
                      label: "Security Assessment",
                      items: ["OWASP Top 10", "MITRE ATT&CK", "Vulnerability Assessment", "Nmap", "Burp Suite"],
                    },
                    {
                      icon: <Cpu className="w-4 h-4" style={{ color: "#34d399" }} />,
                      label: "Operating Systems",
                      items: ["Ubuntu Server", "Kali Linux", "Windows", "VirtualBox", "VMware", "Linux CLI"],
                    },
                    {
                      icon: <Cloud className="w-4 h-4" style={{ color: "#38bdf8" }} />,
                      label: "Infrastructure & Hosting",
                      items: ["WordPress Hosting", "Apache", "MySQL", "DNS Configuration", "SSL/TLS"],
                    },
                    {
                      icon: <Terminal className="w-4 h-4" style={{ color: "#f472b6" }} />,
                      label: "Security & Monitoring Tools",
                      items: ["Wireshark", "Nmap", "OWASP ZAP", "SonarQube", "Threat Intelligence Platforms"],
                    },
                    {
                      icon: <Code className="w-4 h-4" style={{ color: "#fb923c" }} />,
                      label: "Development & Automation",
                      items: ["Python", "Bash", "HTML/CSS", "SQL", "Git", "GitHub"],
                    },
                  ].map((cat) => (
                    <div key={cat.label} className="rounded-xl p-4 border"
                      style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.08)" }}>
                      <div className="flex items-center gap-2 mb-3">
                        {cat.icon}
                        <span className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{cat.label}</span>
                      </div>
                      <ul className="space-y-1">
                        {cat.items.map((item) => (
                          <li key={item} className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>

            {/* ── Work Experience ── */}
            <FadeSection delay={0.4}>
              <div className={SECTION}>
                <h2 className={SECTION_TITLE} style={{ color: "#fff", borderColor: "rgba(255,255,255,0.1)" }}>Work Experience</h2>
                <div className="space-y-8">
                  {[
                    {
                      role: "Security Intern",
                      org: "Albus Security LLP",
                      period: "Feb 2025 – Sep 2025",
                      bullets: [
                        "Investigated network traffic and packet captures using Wireshark to identify anomalies and connectivity issues.",
                        "Performed vulnerability assessments and documented findings with remediation recommendations.",
                        "Worked in Linux-based environments for monitoring, analysis, and troubleshooting activities.",
                        "Conducted web application security research and testing to strengthen understanding of website technologies.",
                        "Created technical documentation and collaborated on security analysis activities.",
                      ],
                    },
                  ].map((exp, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0" style={{ background: "#6366f1" }} />
                        <div className="w-px flex-1 mt-1" style={{ background: "rgba(99,102,241,0.25)" }} />
                      </div>
                      <div className="pb-2">
                        <div className="flex flex-wrap items-center gap-3 mb-0.5">
                          <span className="text-sm" style={{ color: "#fff" }}>{exp.role}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(99,102,241,0.18)", color: "#a5b4fc" }}>{exp.period}</span>
                        </div>
                        <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>{exp.org}</p>
                        <ul className="space-y-1">
                          {exp.bullets.map((b, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                              <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: "rgba(99,102,241,0.7)" }} />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>

            {/* ── Education ── */}
            <FadeSection delay={0.45}>
              <div className={SECTION}>
                <h2 className={SECTION_TITLE} style={{ color: "#fff", borderColor: "rgba(255,255,255,0.1)" }}>Education</h2>
                <div className="space-y-5">
                  {[
                    {
                      degree: "Bachelor of Computer Applications (Honours) – Cybersecurity",
                      inst: "Nitte Institute of Professional Education, Mangalore",
                      period: "2022 – 2026",
                      cgpa: "CGPA: 7.82 / 10 | First Class with Distinction",
                    },
                  ].map((ed, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0" style={{ background: "#34d399" }} />
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-0.5">
                          <span className="text-sm" style={{ color: "#fff" }}>{ed.degree}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(52,211,153,0.15)", color: "#6ee7b7" }}>{ed.period}</span>
                        </div>
                        <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{ed.inst}</p>
                        <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>{ed.cgpa}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>

            {/* ── Skills ── */}
            <FadeSection delay={0.5}>
              <div className={SECTION}>
                <h2 className={SECTION_TITLE} style={{ color: "#fff", borderColor: "rgba(255,255,255,0.1)" }}>Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1">
                  <div>
                    <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                      <Code className="inline w-3.5 h-3.5 mr-1.5" style={{ color: "#60a5fa" }} />
                      Development
                    </p>
                    {[
                      { name: "Python", pct: 80 },
                      { name: "Bash / Shell", pct: 80 },
                      { name: "HTML / CSS", pct: 75 },
                      { name: "SQL", pct: 75 },
                      { name: "Git / GitHub", pct: 85 },
                    ].map((s) => <SkillBar key={s.name} {...s} color="#6366f1" />)}
                  </div>
                  <div className="mt-7 sm:mt-0">
                    <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                      <Shield className="inline w-3.5 h-3.5 mr-1.5" style={{ color: "#a78bfa" }} />
                      Cybersecurity
                    </p>
                    {[
                      { name: "Vulnerability Assessment", pct: 80 },
                      { name: "Network Security", pct: 78 },
                      { name: "Linux Administration", pct: 82 },
                      { name: "Web Application Security", pct: 75 },
                      { name: "Security Monitoring", pct: 75 },
                    ].map((s) => <SkillBar key={s.name} {...s} color="#8b5cf6" />)}
                  </div>
                </div>
              </div>
            </FadeSection>

            {/* ── Certifications ── */}
            <FadeSection delay={0.55}>
              <div className={SECTION}>
                <h2 className={SECTION_TITLE} style={{ color: "#fff", borderColor: "rgba(255,255,255,0.1)" }}>Certifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: "EC-Council CodeRed – Ethical Hacking Essentials", issuer: "EC-Council", date: "2024" },
                    { name: "EC-Council CodeRed – Dark Web and Anonymity", issuer: "EC-Council", date: "2024" },
                    { name: "HackerRank – Python (Basic)", issuer: "HackerRank", date: "2024" },
                    { name: "HackerRank – Problem Solving (Basic)", issuer: "HackerRank", date: "2024" },
                    { name: "Cisco Networking Academy – Linux Unhatched", issuer: "Cisco", date: "2023" },
                  ].map((cert) => (
                    <div key={cert.name} className="flex items-start gap-3 rounded-xl p-3 border"
                      style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}>
                      <Award className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#fbbf24" }} />
                      <div>
                        <p className="text-xs" style={{ color: "rgba(255,255,255,0.85)" }}>{cert.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{cert.issuer} · {cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>

            {/* ── Notable Projects ── */}
            <FadeSection delay={0.6}>
              <div className={SECTION}>
                <h2 className={SECTION_TITLE} style={{ color: "#fff", borderColor: "rgba(255,255,255,0.1)" }}>Projects</h2>
                <div className="space-y-5">
                  {[
                    {
                      name: "OpsPilot – AI-Powered Technical Support Assistant",
                      desc: "An intelligent support platform designed to help diagnose and troubleshoot infrastructure, hosting, networking, and system administration issues. Provides guided troubleshooting workflows, root-cause analysis suggestions, and step-by-step resolution recommendations.",
                      tags: ["Python", "Linux", "Troubleshooting", "Technical Support"],
                    },
                    {
                      name: "WordPress Hosting Deployment",
                      desc: "Self-hosted WordPress deployment on Ubuntu Server using Apache and MySQL. Covers DNS configuration, SSL/TLS implementation, firewall hardening, website administration, and Linux server management.",
                      tags: ["WordPress", "Ubuntu", "Apache", "MySQL", "DNS"],
                    },
                    {
                      name: "SecureOps – Security Monitoring Platform",
                      desc: "Centralized monitoring platform for repositories, uploaded files, and web applications with issue classification, remediation tracking, and operational visibility features.",
                      tags: ["Python", "Monitoring", "Security Operations", "Web Applications"],
                    },
                    {
                      name: "Portfolio Website",
                      desc: "Personal portfolio showcasing projects, certifications, achievements, skills, and career journey with responsive design and modern web technologies.",
                      tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
                    },
                  ].map((proj) => (
                    <div key={proj.name} className="rounded-xl p-5 border"
                      style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.08)" }}>
                      <p className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.9)" }}>{proj.name}</p>
                      <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.75" }}>{proj.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {proj.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded-md"
                            style={{ background: "rgba(99,102,241,0.15)", color: "#a5b4fc" }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>

            {/* ── Languages ── */}
            <FadeSection delay={0.65}>
              <div className={SECTION}>
                <h2 className={SECTION_TITLE} style={{ color: "#fff", borderColor: "rgba(255,255,255,0.1)" }}>Languages</h2>
                <div className="flex flex-wrap gap-4">
                  {[
                    { lang: "English", level: "Professional" },
                    { lang: "Malayalam", level: "Native" },
                    { lang: "Hindi", level: "Professional Working Proficiency" },
                    { lang: "Tamil", level: "Conversational" },
                  ].map((l) => (
                    <div key={l.lang} className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                      style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.08)" }}>
                      <Globe className="w-4 h-4" style={{ color: "#818cf8" }} />
                      <div>
                        <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{l.lang}</p>
                        <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{l.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>

            {/* ── Bottom CTA ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="pt-4 pb-8 text-center"
            >
              <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Want the full resume?</p>
              <div className="flex gap-3 justify-center">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm text-white"
                  style={{ background: "linear-gradient(135deg,#4f46e5,#6366f1)" }}>
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleViewPdf}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm border transition-colors hover:bg-white/5"
                  style={{ borderColor: "rgba(139,92,246,0.4)", color: "#a78bfa", background: "rgba(139,92,246,0.08)" }}>
                  <Eye className="w-3.5 h-3.5" /> View PDF
                </motion.button>
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Helpers ── */

function FadeSection({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}

function SkillBar({ name, pct, color }: { name: string; pct: number; color: string }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{name}</span>
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}cc)` }}
        />
      </div>
    </div>
  );
}

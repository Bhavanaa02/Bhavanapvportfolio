import { motion, AnimatePresence } from "motion/react";
import {
  Download,
  Eye,
  ArrowLeft,
  FileText,
  Shield,
  Award,
  Code,
  Globe,
  Network,
  Cloud,
  Terminal,
  Briefcase,
  GraduationCap,
} from "lucide-react";

interface ResumePageProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
}

const SECTION = "mb-10";
const SECTION_TITLE = "text-xl mb-5 pb-2 border-b";

export function ResumePage({
  isOpen,
  onClose,
  onContact,
}: ResumePageProps) {
  const resumePdfUrl = "/BHAVANA_PV_RESUME.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdfUrl;
    link.download = "BHAVANA_PV_RESUME.pdf";
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
          <div
            className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
            }}
          />

          <div
            className="fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            onClick={onClose}
            className="fixed top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-colors hover:bg-white/5"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.55)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </motion.button>

          {/* Main content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border text-sm"
                style={{
                  borderColor: "rgba(99,102,241,0.35)",
                  background: "rgba(99,102,241,0.1)",
                  color: "#818cf8",
                }}
              >
                <FileText className="w-3.5 h-3.5" />
                Resume
              </div>

              <h1
                className="text-5xl lg:text-6xl mb-3"
                style={{ color: "#fff" }}
              >
                Bhavana <span style={{ color: "#818cf8" }}>P V</span>
              </h1>

              <p
                className="text-base"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Cybersecurity Graduate&nbsp;|&nbsp;Software Development&nbsp;|&nbsp;
                Security &amp; Infrastructure
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="flex flex-wrap gap-4 justify-center mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white"
                style={{
                  background: "linear-gradient(135deg,#4f46e5,#6366f1)",
                  boxShadow: "0 0 22px rgba(99,102,241,0.35)",
                }}
              >
                <Download className="w-4 h-4" />
                Download PDF
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewPdf}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white"
                style={{
                  background: "linear-gradient(135deg,#7c3aed,#8b5cf6)",
                  boxShadow: "0 0 22px rgba(139,92,246,0.3)",
                }}
              >
                <Eye className="w-4 h-4" />
                View PDF
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onContact}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border transition-colors hover:bg-white/5"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.75)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Professional Summary */}
            <FadeSection delay={0.3}>
              <div className={SECTION}>
                <h2
                  className={SECTION_TITLE}
                  style={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  Professional Summary
                </h2>

                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: "1.85",
                  }}
                >
                  BCA (Honours) Cybersecurity graduate with hands-on
                  experience across software development, cybersecurity,
                  Linux environments, networking, and infrastructure. Built
                  practical projects involving security automation,
                  infrastructure monitoring, secure application development,
                  and network analysis. Interested in engineering
                  environments where software, security, and infrastructure
                  intersect.
                </p>
              </div>
            </FadeSection>

            {/* Technical Expertise */}
            <FadeSection delay={0.35}>
              <div className={SECTION}>
                <h2
                  className={SECTION_TITLE}
                  style={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  Technical Expertise
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Programming & Development */}
                  <SkillCard
                    icon={
                      <Code
                        className="w-4 h-4"
                        style={{ color: "#60a5fa" }}
                      />
                    }
                    label="Programming & Development"
                    items={[
                      "Python",
                      "TypeScript",
                      "SQL",
                      "Bash",
                      "HTML",
                      "CSS",
                      "React",
                      "REST APIs",
                    ]}
                  />

                  {/* Cybersecurity */}
                  <SkillCard
                    icon={
                      <Shield
                        className="w-4 h-4"
                        style={{ color: "#a78bfa" }}
                      />
                    }
                    label="Cybersecurity"
                    items={[
                      "Wireshark",
                      "Nmap",
                      "Burp Suite",
                      "OWASP Top 10",
                      "Vulnerability Assessment",
                      "Secure Code Analysis",
                      "Traffic Analysis",
                    ]}
                  />

                  {/* Operating Systems */}
                  <SkillCard
                    icon={
                      <Terminal
                        className="w-4 h-4"
                        style={{ color: "#34d399" }}
                      />
                    }
                    label="Operating Systems"
                    items={[
                      "Linux",
                      "Kali Linux",
                      "Ubuntu Server",
                      "Windows",
                      "Linux CLI",
                      "VirtualBox",
                      "VMware",
                    ]}
                  />

                  {/* Infrastructure */}
                  <SkillCard
                    icon={
                      <Cloud
                        className="w-4 h-4"
                        style={{ color: "#38bdf8" }}
                      />
                    }
                    label="Infrastructure"
                    items={[
                      "Apache",
                      "MySQL",
                      "WordPress",
                      "SSL/TLS",
                      "DNS",
                      "Linux Server Administration",
                      "Hosting",
                    ]}
                  />

                  {/* Networking */}
                  <SkillCard
                    icon={
                      <Network
                        className="w-4 h-4"
                        style={{ color: "#f472b6" }}
                      />
                    }
                    label="Networking"
                    items={[
                      "TCP/IP",
                      "DNS",
                      "HTTP/HTTPS",
                      "IP Addressing",
                      "Packet Analysis",
                      "Network Troubleshooting",
                    ]}
                  />

                  {/* Tools & Platforms */}
                  <SkillCard
                    icon={
                      <Briefcase
                        className="w-4 h-4"
                        style={{ color: "#fb923c" }}
                      />
                    }
                    label="Tools & Platforms"
                    items={[
                      "Git",
                      "GitHub",
                      "VS Code",
                      "Vercel",
                      "Figma",
                      "Semgrep",
                      "Gitleaks",
                    ]}
                  />

                </div>
              </div>
            </FadeSection>

            {/* Work Experience */}
            <FadeSection delay={0.4}>
              <div className={SECTION}>
                <h2
                  className={SECTION_TITLE}
                  style={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  Work Experience
                </h2>

                <div className="space-y-8">
                  <div className="flex gap-4">

                    <div className="flex flex-col items-center">
                      <div
                        className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0"
                        style={{ background: "#6366f1" }}
                      />

                      <div
                        className="w-px flex-1 mt-1"
                        style={{
                          background: "rgba(99,102,241,0.25)",
                        }}
                      />
                    </div>

                    <div className="pb-2">

                      <div className="flex flex-wrap items-center gap-3 mb-0.5">

                        <span
                          className="text-sm"
                          style={{ color: "#fff" }}
                        >
                          Security Intern
                        </span>

                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(99,102,241,0.18)",
                            color: "#a5b4fc",
                          }}
                        >
                          Feb 2025 – Sep 2025
                        </span>

                      </div>

                      <p
                        className="text-xs mb-2"
                        style={{
                          color: "rgba(255,255,255,0.4)",
                        }}
                      >
                        Albus Security LLP · Remote
                      </p>

                      <ul className="space-y-1">

                        {[
                          "Completed a 7-month internship focused on Information Security, Web Security, and hands-on security research.",
                          "Performed network traffic and packet analysis using Wireshark to study protocols, traffic behaviour, and security events.",
                          "Conducted vulnerability assessments and worked in Linux-based environments for security monitoring and troubleshooting.",
                          "Developed a Python-based Slowloris DoS attack automation project to study attack patterns, traffic behaviour, and server resilience in controlled environments.",
                          "Contributed to a team-based QR threat analysis solution focused on identifying phishing, malicious, and suspicious URLs under mentor guidance.",
                        ].map((bullet, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-xs"
                            style={{
                              color: "rgba(255,255,255,0.55)",
                            }}
                          >
                            <span
                              className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                              style={{
                                background:
                                  "rgba(99,102,241,0.7)",
                              }}
                            />

                            {bullet}
                          </li>
                        ))}

                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            </FadeSection>

            {/* Education */}
            <FadeSection delay={0.45}>
              <div className={SECTION}>
                <h2
                  className={SECTION_TITLE}
                  style={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  Education
                </h2>

                <div className="flex gap-4">

                  <GraduationCap
                    className="w-5 h-5 mt-1 flex-shrink-0"
                    style={{ color: "#34d399" }}
                  />

                  <div>

                    <div className="flex flex-wrap items-center gap-3 mb-1">

                      <span
                        className="text-sm"
                        style={{ color: "#fff" }}
                      >
                        Bachelor of Computer Applications (Honours) –
                        Cybersecurity
                      </span>

                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background:
                            "rgba(52,211,153,0.15)",
                          color: "#6ee7b7",
                        }}
                      >
                        Aug 2022 – May 2026
                      </span>

                    </div>

                    <p
                      className="text-xs"
                      style={{
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      Nitte Institute of Professional Education, Mangalore
                    </p>

                    <p
                      className="text-xs mt-1"
                      style={{
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      CGPA: 7.82 / 10 · First Class with Distinction
                    </p>

                  </div>
                </div>
              </div>
            </FadeSection>

            {/* Projects */}
            <FadeSection delay={0.5}>
              <div className={SECTION}>

                <h2
                  className={SECTION_TITLE}
                  style={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  Projects
                </h2>

                <div className="space-y-5">

                  {[
                    {
                      name: "SecureOps — Automated Security Analysis & Developer Guidance Platform",
                      year: "2026",
                      desc: "Security-focused platform for automated analysis, vulnerability scanning, threat intelligence, and actionable developer guidance.",
                      tags: [
                        "Python",
                        "Security Operations",
                        "Automation",
                        "Threat Intelligence",
                      ],
                    },

                    {
                      name: "OpsPilot — AI-assisted Infrastructure Monitoring and Troubleshooting Platform",
                      year: "2026",
                      desc: "Linux-focused operations platform combining system monitoring, network activity tracking, and structured troubleshooting workflows.",
                      tags: [
                        "Linux",
                        "Python",
                        "Bash",
                        "Monitoring",
                        "Troubleshooting",
                      ],
                    },

                    {
                      name: "VoteChain — Blockchain-based Secure Electronic Voting System",
                      year: "2023",
                      desc: "Blockchain-based voting system focused on vote integrity, tamper resistance, transparency, and secure electronic voting.",
                      tags: [
                        "Blockchain",
                        "Solidity",
                        "Cryptography",
                        "Web3",
                      ],
                    },

                    {
                      name: "WordPress Hosting Lab",
                      year: "2026",
                      desc: "WordPress deployment and hosting environment using Ubuntu Server, Apache, and MySQL, with DNS, SSL/TLS, and hosting troubleshooting.",
                      tags: [
                        "WordPress",
                        "Ubuntu",
                        "Apache",
                        "MySQL",
                        "DNS",
                      ],
                    },
                  ].map((project) => (
                    <div
                      key={project.name}
                      className="rounded-xl p-5 border"
                      style={{
                        background:
                          "rgba(255,255,255,0.025)",
                        borderColor:
                          "rgba(255,255,255,0.08)",
                      }}
                    >

                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">

                        <p
                          className="text-sm"
                          style={{
                            color:
                              "rgba(255,255,255,0.9)",
                          }}
                        >
                          {project.name}
                        </p>

                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background:
                              "rgba(99,102,241,0.15)",
                            color: "#a5b4fc",
                          }}
                        >
                          {project.year}
                        </span>

                      </div>

                      <p
                        className="text-xs mb-3"
                        style={{
                          color:
                            "rgba(255,255,255,0.5)",
                          lineHeight: "1.75",
                        }}
                      >
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-2">

                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-md"
                            style={{
                              background:
                                "rgba(99,102,241,0.15)",
                              color: "#a5b4fc",
                            }}
                          >
                            {tag}
                          </span>
                        ))}

                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </FadeSection>

            {/* Achievements */}
            <FadeSection delay={0.55}>
              <div className={SECTION}>

                <h2
                  className={SECTION_TITLE}
                  style={{
                    color: "#fff",
                    borderColor:
                      "rgba(255,255,255,0.1)",
                  }}
                >
                  Achievements
                </h2>

                <div className="space-y-3">

                  {[
                    "NASSCOM Academic Grand Challenge — Top 6 national-level team among 500+ teams.",
                    "MSME Idea Hackathon 3.0 — Selected for the Women Category final pitch stage.",
                    "Team Lead — Cyber Ninjas — Led collaborative preparation and technical activities for cybersecurity competitions.",
                  ].map((achievement) => (
                    <div
                      key={achievement}
                      className="flex items-start gap-3"
                    >
                      <Award
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "#fbbf24" }}
                      />

                      <p
                        className="text-xs"
                        style={{
                          color:
                            "rgba(255,255,255,0.55)",
                          lineHeight: "1.7",
                        }}
                      >
                        {achievement}
                      </p>
                    </div>
                  ))}

                </div>
              </div>
            </FadeSection>

            {/* Certifications */}
            <FadeSection delay={0.6}>
              <div className={SECTION}>

                <h2
                  className={SECTION_TITLE}
                  style={{
                    color: "#fff",
                    borderColor:
                      "rgba(255,255,255,0.1)",
                  }}
                >
                  Certifications
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  {[
                    {
                      name: "Ethical Hacking Essentials (EHE)",
                      issuer: "EC-Council CodeRED",
                    },
                    {
                      name: "Introduction to Dark Web, Anonymity, and Cryptocurrency",
                      issuer: "EC-Council CodeRED",
                    },
                    {
                      name: "Cybersecurity Job Simulation",
                      issuer: "Mastercard × Forage",
                    },
                    {
                      name: "Cybersecurity Analyst Job Simulation",
                      issuer: "Tata × Forage",
                    },
                  ].map((certification) => (
                    <div
                      key={certification.name}
                      className="flex items-start gap-3 rounded-xl p-3 border"
                      style={{
                        background:
                          "rgba(255,255,255,0.025)",
                        borderColor:
                          "rgba(255,255,255,0.07)",
                      }}
                    >

                      <Award
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "#fbbf24" }}
                      />

                      <div>

                        <p
                          className="text-xs"
                          style={{
                            color:
                              "rgba(255,255,255,0.85)",
                          }}
                        >
                          {certification.name}
                        </p>

                        <p
                          className="text-xs mt-0.5"
                          style={{
                            color:
                              "rgba(255,255,255,0.4)",
                          }}
                        >
                          {certification.issuer}
                        </p>

                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </FadeSection>

            {/* Languages */}
            <FadeSection delay={0.65}>
              <div className={SECTION}>

                <h2
                  className={SECTION_TITLE}
                  style={{
                    color: "#fff",
                    borderColor:
                      "rgba(255,255,255,0.1)",
                  }}
                >
                  Languages
                </h2>

                <div className="flex flex-wrap gap-4">

                  {[
                    {
                      lang: "English",
                      level: "Professional",
                    },
                    {
                      lang: "Malayalam",
                      level: "Native",
                    },
                    {
                      lang: "Hindi",
                      level: "Professional Working Proficiency",
                    },
                    {
                      lang: "Tamil",
                      level: "Conversational",
                    },
                  ].map((language) => (
                    <div
                      key={language.lang}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                      style={{
                        background:
                          "rgba(255,255,255,0.025)",
                        borderColor:
                          "rgba(255,255,255,0.08)",
                      }}
                    >

                      <Globe
                        className="w-4 h-4"
                        style={{
                          color: "#818cf8",
                        }}
                      />

                      <div>

                        <p
                          className="text-sm"
                          style={{
                            color:
                              "rgba(255,255,255,0.85)",
                          }}
                        >
                          {language.lang}
                        </p>

                        <p
                          className="text-xs"
                          style={{
                            color:
                              "rgba(255,255,255,0.4)",
                          }}
                        >
                          {language.level}
                        </p>

                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </FadeSection>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="pt-4 pb-8 text-center"
            >

              <p
                className="text-xs mb-4"
                style={{
                  color:
                    "rgba(255,255,255,0.3)",
                }}
              >
                Want the full resume?
              </p>

              <div className="flex gap-3 justify-center">

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm text-white"
                  style={{
                    background:
                      "linear-gradient(135deg,#4f46e5,#6366f1)",
                  }}
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleViewPdf}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm border transition-colors hover:bg-white/5"
                  style={{
                    borderColor:
                      "rgba(139,92,246,0.4)",
                    color: "#a78bfa",
                    background:
                      "rgba(139,92,246,0.08)",
                  }}
                >
                  <Eye className="w-3.5 h-3.5" />
                  View PDF
                </motion.button>

              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────
   Skill Card
───────────────────────────────────────────── */

function SkillCard({
  icon,
  label,
  items,
}: {
  icon: React.ReactNode;
  label: string;
  items: string[];
}) {
  return (
    <div
      className="rounded-xl p-4 border"
      style={{
        background: "rgba(255,255,255,0.025)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        {icon}

        <span
          className="text-sm"
          style={{
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {label}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs px-2 py-1 rounded-md"
            style={{
              background: "rgba(99,102,241,0.1)",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Fade Section
───────────────────────────────────────────── */

function FadeSection({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.45,
      }}
    >
      {children}
    </motion.div>
  );
}

import { motion } from "motion/react";
import {
  Award,
  BriefcaseBusiness,
  Trophy,
  ExternalLink,
} from "lucide-react";

const categories = [
  {
    title: "Professional Certifications",
    icon: Award,
    accent: "#22d3ee",
    items: [
      {
        name: "Ethical Hacking Essentials (EHE)",
        issuer: "CodeRED — EC-Council",
        desc: "Completed the Ethical Hacking Essentials course covering foundational ethical hacking and security concepts.",
        status: "Certified",
        certificate: "/certificates/Codered- EHE.png",
        credentialId: "197246",
      },
      {
        name: "Introduction to Dark Web, Anonymity, and Cryptocurrency",
        issuer: "CodeRED — EC-Council",
        desc: "Completed training covering dark web concepts, anonymity, and cryptocurrency.",
        status: "Certified",
        certificate: "/certificates/Codered- Darkweb.png",
        credentialId: "197252",
      },
    ],
  },

  {
    title: "Virtual Experience",
    icon: BriefcaseBusiness,
    accent: "#a78bfa",
    items: [
      {
        name: "Cybersecurity Job Simulation",
        issuer: "Mastercard × Forage",
        desc: "Completed practical tasks involving phishing email simulation and interpretation of phishing simulation results.",
        status: "Completed",
        certificate:
          "/certificates/Mastercard Cybersecurity Job Simulation — Forage.pdf",
        credentialId: "uoTNX4bAPA97Kf6DL",
      },
      {
        name: "Cybersecurity Analyst Job Simulation",
        issuer: "Tata × Forage",
        desc: "Completed practical tasks covering IAM fundamentals, IAM strategy assessment, custom IAM solutions, and platform integration.",
        status: "Completed",
        certificate:
          "/certificates/Tata Cybersecurity Analyst Job Simulation — Forage.pdf",
        credentialId: "M6Ta4Zzeu5sbLkXPW",
      },
    ],
  },

  {
    title: "Competitions & Technical Activities",
    icon: Trophy,
    accent: "#fbbf24",
    items: [
      {
        name: "Samsung Solve for Tomorrow 2023",
        issuer: "Samsung",
        desc: "Participated as a future solver and brought an idea to Samsung Solve for Tomorrow 2023.",
        status: "Participation",
        certificate:
          "/certificates/Certificate of Participation - Samsung Solve For Tomorrow.jpg",
        credentialId: "",
      },
      {
        name: "World Wide CTF 2024",
        issuer: "World Wide Flags",
        desc: "Participated in World Wide CTF 2024, a Jeopardy-style cybersecurity competition held from 30 November to 1 December 2024.",
        status: "Participation",
        certificate: "/certificates/World Wide CTF.pdf",
        credentialId: "",
      },
      {
        name: "HackTheChain",
        issuer: "HackTheChain",
        desc: "Participated in HackTheChain from 24–26 March 2023 and demonstrated cybersecurity skills and knowledge.",
        status: "Participation",
        certificate: "/certificates/HackTheChain.pdf",
        credentialId: "",
      },
      {
        name: "Code Vipassana — Season 5: Duet AI",
        issuer: "GDG Cloud Kochi",
        desc: "Received recognition for exceptional performance in Code Vipassana, Season 5: Duet AI.",
        status: "Recognition",
        certificate: "/certificates/Code Vipassana.jpg",
        credentialId: "",
      },
      {
        name: "Google Cloud Community Day Kochi 2025",
        issuer: "GDG Cloud Kochi",
        desc: "Participated in Google Cloud Community Day Kochi 2025 and contributed to the exchange of knowledge and ideas.",
        status: "Participation",
        certificate: "/certificates/Cloud Community Day.jpg",
        credentialId: "",
      },
    ],
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
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2
              className="text-3xl lg:text-4xl"
              style={{ color: "#f0f2f7" }}
            >
              Certifications & Activities
            </h2>

            <div
              className="w-12 h-px mx-auto"
              style={{
                background:
                  "linear-gradient(90deg,transparent,#6366f1,transparent)",
              }}
            />

            <p
              className="max-w-xl mx-auto text-sm pt-1"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Certifications, practical experiences, competitions, and
              technical activities.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-12">
            {categories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: categoryIndex * 0.1,
                    duration: 0.5,
                  }}
                  className="space-y-5"
                >
                  {/* Category Heading */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center border"
                      style={{
                        background: `rgba(${hr(category.accent)},0.1)`,
                        borderColor: `rgba(${hr(category.accent)},0.25)`,
                      }}
                    >
                      <CategoryIcon
                        className="w-4 h-4"
                        style={{ color: category.accent }}
                      />
                    </div>

                    <h3
                      className="text-lg"
                      style={{ color: "rgba(255,255,255,0.88)" }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Cards */}
                  <div className="grid md:grid-cols-2 gap-5">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={{ y: -3 }}
                        className="relative rounded-2xl border p-6 transition-all"
                        style={{
                          background: "rgba(255,255,255,0.025)",
                          borderColor: "rgba(255,255,255,0.07)",
                        }}
                      >
                        {/* Accent Line */}
                        <div
                          className="absolute top-0 left-6 right-6 h-px"
                          style={{
                            background: `linear-gradient(90deg,${category.accent}60,transparent)`,
                          }}
                        />

                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1.5 flex-1">
                            <h4
                              className="text-sm leading-snug"
                              style={{
                                color: "rgba(255,255,255,0.9)",
                              }}
                            >
                              {item.name}
                            </h4>

                            <p
                              className="text-xs"
                              style={{ color: category.accent }}
                            >
                              {item.issuer}
                            </p>
                          </div>

                          <span
                            className="text-xs px-2 py-0.5 rounded-full border flex-shrink-0"
                            style={{
                              background: `rgba(${hr(
                                category.accent
                              )},0.08)`,
                              borderColor: `rgba(${hr(
                                category.accent
                              )},0.2)`,
                              color: category.accent,
                            }}
                          >
                            {item.status}
                          </span>
                        </div>

                        {/* Description */}
                        <p
                          className="text-xs leading-relaxed mt-4"
                          style={{
                            color: "rgba(255,255,255,0.42)",
                          }}
                        >
                          {item.desc}
                        </p>

                        {/* Credential ID */}
                        {item.credentialId && (
                          <p
                            className="text-xs mt-4"
                            style={{
                              color: "rgba(255,255,255,0.35)",
                            }}
                          >
                            Credential ID:{" "}
                            <span
                              style={{
                                color: "rgba(255,255,255,0.55)",
                              }}
                            >
                              {item.credentialId}
                            </span>
                          </p>
                        )}

                        {/* Certificate Button */}
                        {item.certificate && (
                          <div className="mt-5">
                            <a
                              href={item.certificate}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-colors hover:bg-white/5"
                              style={{
                                borderColor:
                                  "rgba(255,255,255,0.08)",
                                color: "rgba(255,255,255,0.6)",
                              }}
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              View Certificate
                            </a>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function hr(hex: string): string {
  return `${parseInt(hex.slice(1, 3), 16)},${parseInt(
    hex.slice(3, 5),
    16
  )},${parseInt(hex.slice(5, 7), 16)}`;
}

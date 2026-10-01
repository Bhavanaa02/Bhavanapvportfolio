import { motion } from "motion/react";
import { Briefcase, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "Security Intern",
    company: "Albus Security LLP",
    period: "Feb 2025 - Sep 2025",
    responsibilities: [
      "Completed a 7-month internship focused on Information Security, Web Security, and hands-on security research",

      "Worked with Python-based security projects involving automation, network analysis, and controlled security testing",

      "Developed a Slowloris DoS attack automation project to study traffic behaviour, attack patterns, and server resilience in controlled environments",

      "Contributed to the development of a QR-based threat analysis solution as part of a team, focused on identifying phishing, malicious, and suspicious URLs",

      "Performed network traffic analysis and packet inspection using Wireshark to study protocols, traffic behaviour, and security events",

      "Gained practical experience with vulnerability assessment, web security research, technical documentation, and security-focused problem solving",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-3">
            <h2
              className="text-3xl lg:text-4xl"
              style={{ color: "#f0f2f7" }}
            >
              Experience
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
              Hands-on experience across cybersecurity, technical research,
              automation, and network analysis.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 md:pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50" />

                <div className="rounded-2xl bg-card border border-border hover:border-primary/50 p-8 space-y-6 transition-all hover:shadow-xl hover:shadow-primary/10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.title}
                          </h3>

                          <p className="text-primary">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    <span className="px-4 py-2 rounded-full bg-secondary border border-border text-sm text-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />

                        <p className="text-muted-foreground">
                          {responsibility}
                        </p>
                      </div>
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

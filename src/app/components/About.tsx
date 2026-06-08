import { motion } from "motion/react";
import { Shield, Network, Terminal, Search, Server, Lock } from "lucide-react";

const cards = [
  { icon: Shield,   label: "Security Operations",    sub: "SOC workflows & monitoring"     },
  { icon: Terminal, label: "Linux Administration",    sub: "Kali, Ubuntu, server config"    },
  { icon: Network,  label: "Network Analysis",        sub: "TCP/IP, Wireshark, packet flows" },
  { icon: Server,   label: "Infrastructure",          sub: "Apache, DNS, WordPress, VM labs" },
  { icon: Search,   label: "Vulnerability Assessment",sub: "OWASP, Nmap, Burp Suite"         },
  { icon: Lock,     label: "Threat Detection",        sub: "SIEM, log analysis, alerting"    },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="text-center space-y-3">
            
            <h2 className="text-3xl lg:text-4xl" style={{ color: "#f0f2f7" }}>About Me</h2>
            <div className="w-12 h-px mx-auto" style={{ background: "linear-gradient(90deg,transparent,#6366f1,transparent)" }} />
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-5"
            >
              <p
  className="leading-relaxed"
  style={{ color: "rgba(255,255,255,0.58)", fontSize: "1.0625rem" }}
>
  I am a BCA (Honours) graduate specialising in Cybersecurity with a strong interest in security operations, infrastructure, networking, and emerging technologies. My journey has been shaped by hands-on learning, practical projects, and real-world exposure through a 7-month internship at Albus Security LLP, where I worked on vulnerability assessment, reverse shell analysis, web application security research, and DoS testing.
</p>

<p
  className="leading-relaxed"
  style={{ color: "rgba(255,255,255,0.58)", fontSize: "1.0625rem" }}
>
  Beyond academics, I actively participate in hackathons, innovation challenges, and collaborative projects that push me to think beyond the classroom. As the team lead of Cyber Ninjas, I contributed to achieving a Top 6 national-level finish in the NASSCOM Academic Grand Challenge, while also participating in initiatives such as the MSME Idea Hackathon and Samsung Solve for Tomorrow.
</p>

<p
  className="leading-relaxed"
  style={{ color: "rgba(255,255,255,0.58)", fontSize: "1.0625rem" }}
>
  I enjoy building, experimenting, and learning through practice—whether it is exploring security concepts, deploying applications, working with Linux environments, or developing technical solutions. I believe growth comes from curiosity, consistency, and a willingness to take on new challenges. Currently, I am seeking opportunities in Cybersecurity, IT Operations, Technical Support, System Administration, and Infrastructure roles where I can contribute, learn, and continue building a strong foundation in technology.
</p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { label: "Degree",     val: "BCA (Hons) Cybersecurity"  },
                  { label: "Internship", val: "Albus Security LLP · 7 Months" },
                  { label: "Location",   val: "Kasaragod, Kerala, India"    },
                  { label: "Focus Areas",     val: "Cybersecurity · IT Operations · Infrastructure"     },
                ].map((f) => (
                  <div key={f.label} className="rounded-xl p-3 border"
                    style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}>
                    <p className="text-xs mb-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{f.label}</p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{f.val}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {cards.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i }}
                  whileHover={{ y: -3 }}
                  className="rounded-xl p-4 border transition-all cursor-default"
                  style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <c.icon className="w-6 h-6 mb-3" style={{ color: "#818cf8" }} />
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{c.label}</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.38)" }}>{c.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

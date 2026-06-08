import { motion } from "motion/react";
import { Trophy, Users, Award, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "NASSCOM Academic Grand Challenge",
    description: "Top 6 Team among 500+ teams",
    highlight: "National recognition for an innovative cybersecurity solution pitched to industry leaders.",
    accent: "#fbbf24",
  },
  {
    icon: Award,
    title: "MSME Idea Hackathon 3.0",
    description: "Women Category · Final Pitch Shortlist",
    highlight: "Selected from a competitive field to present a security-focused startup idea to industry judges.",
    accent: "#f472b6",
  },
  {
    icon: Users,
    title: "Team Lead — Cyber Ninjas",
    description: "Cybersecurity Competition Team",
    highlight: "Led a collaborative team through multi-round cybersecurity competitions, coordinating strategy and execution.",
    accent: "#818cf8",
  },
  {
    icon: Star,
    title: "Outstanding Performance Award",
    description: "Academics & Co-curricular Activities",
    highlight: "Recognised for excellence across both academic coursework and hands-on security projects.",
    accent: "#34d399",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="text-center space-y-3">
           
            <h2 className="text-3xl lg:text-4xl" style={{ color: "#f0f2f7" }}>Achievements</h2>
            <div className="w-12 h-px mx-auto" style={{ background: "linear-gradient(90deg,transparent,#6366f1,transparent)" }} />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {achievements.map((a, index) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="relative rounded-2xl border p-6 pl-8 transition-all flex gap-4"
                style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
                  style={{ background: a.accent }} />

                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border"
                  style={{ background: `rgba(${hr(a.accent)},0.1)`, borderColor: `rgba(${hr(a.accent)},0.25)` }}>
                  <a.icon className="w-5 h-5" style={{ color: a.accent }} />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-sm" style={{ color: "rgba(255,255,255,0.9)" }}>{a.title}</h3>
                  <p className="text-xs" style={{ color: a.accent }}>{a.description}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{a.highlight}</p>
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

import { motion } from "motion/react";
import { Github, FileText, ArrowRight, Shield } from "lucide-react";
import avatarImage from "../../imports/avatar.png";

interface HeroProps {
  onResumeClick: () => void;
}

export function Hero({ onResumeClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">

      {/* Background */}
      <div
  className="absolute inset-0"
  style={{
    background: "transparent"
  }}
/>

    

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_650px] gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.18 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm"
                style={{
                  background: "rgba(99,102,241,0.07)",
                  borderColor: "rgba(99,102,241,0.28)",
                  color: "#818cf8",
                }}
              >
                <Shield className="w-3.5 h-3.5" />
                BCA (Hons) · Cybersecurity Graduate
              </motion.div>

              <h1
                className="text-5xl lg:text-[3.75rem] tracking-tight"
                style={{
                  color: "#f0f2f7",
                  lineHeight: 1.12,
                }}
              >
                Bhavana{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg,#818cf8,#22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  P V
                </span>
              </h1>

              <p
                className="text-base max-w-lg leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                Cybersecurity Graduate focused on Security Operations,
                Infrastructure, and Technical Support. Building practical
                solutions through hands-on projects in network analysis,
                automation workflows, and secure application development.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                "Security Operations",
                "Linux",
                "Python",
                "Networking",
                "Infrastructure",
                "Web Security",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs border"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.09)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm text-white"
                style={{
                  background:
                    "linear-gradient(135deg,#4f46e5,#6366f1)",
                  boxShadow:
                    "0 0 24px rgba(99,102,241,0.28)",
                }}
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="https://github.com/Bhavanaa02"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm border hover:bg-white/[0.04]"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>

              <motion.button
                onClick={onResumeClick}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm border hover:bg-white/[0.04]"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                <FileText className="w-4 h-4" />
                Resume
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:flex items-center justify-end relative"
          >
            {/* Glow */}

          

            <motion.img
              src={avatarImage}
              alt="Hero Illustration"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-[980px] max-w-none object-contain translate-x-38"
              style={{
                opacity: 0.98,
                mixBlendMode: "normal",
                filter:
                  "none",
              }}
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
}
import { motion } from "motion/react";
import { Linkedin, Github, Mail } from "lucide-react";

const contacts = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    link: "https://linkedin.com/bhavanapv",
    color: "text-[#0077b5]",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View GitHub Profile",
    link: "https://github.com/Bhavanaa02",
    color: "text-foreground",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bhavanavijayan02@gmail.com",
    link: "mailto:bhavanavijayan02@gmail.com",
    color: "text-primary",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Open to opportunities in Cybersecurity, IT Operations, Technical Support, System Administration, and Infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl bg-card border border-border hover:border-primary/50 p-8 space-y-4 transition-all hover:shadow-xl hover:shadow-primary/10 text-center"
              >
                <div className="flex justify-center">
                  <div className={`p-4 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors ${contact.color}`}>
                    <contact.icon className="w-8 h-8" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{contact.label}</h3>
                  <p className="text-sm text-muted-foreground">{contact.value}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center pt-12 border-t border-border"
          >
            <p className="text-sm mt-2">
             © 2026 Bhavana P V.  All rights reserved.  Made with{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                🦋
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

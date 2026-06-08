import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Shield } from "lucide-react";

const navItems = [
  { label: "About",          href: "#about"          },
  { label: "Projects",       href: "#projects"       },
  { label: "Experience",     href: "#experience"     },
  { label: "Achievements",   href: "#achievements"   },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills",         href: "#skills"         },
  { label: "Contact",        href: "#contact"        },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="font-semibold text-foreground">Bhavana P V</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-secondary border border-border hover:bg-secondary/80 transition-colors"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) {
                menu.classList.toggle("hidden");
              }
            }}
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) {
                  menu.classList.add("hidden");
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

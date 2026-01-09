import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    Product: ["Practice Mode", "1v1 Duels", "Leaderboard", "Profile"],
    Topics: ["DSA", "DBMS", "Operating Systems", "Networks"],
    Resources: ["Documentation", "API", "GitHub", "Changelog"],
    Company: ["About", "Blog", "Careers", "Contact"]
  };

  return (
    <footer className="py-20 border-t border-border/30">
      <div className="container px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 md:gap-8">
          {/* Brand section */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
                <span className="text-background text-lg font-semibold">//</span>
              </div>
              <div>
                <span className="text-lg font-medium tracking-tight block">CS_DUELS</span>
                <span className="text-xs text-muted-foreground">Clean CS Quiz Platform</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-6">
              Master your CS fundamentals through interactive quizzes and competitive 1v1 duels. 
              Practice, compete, and climb the leaderboard.
            </p>
            <div className="flex items-center gap-4">
              {["GitHub", "Twitter", "Discord"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h4 className="text-sm font-medium mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="my-12 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Tech stack */}
          <div className="flex flex-wrap items-center gap-3">
            {["TypeScript", "React", "Tailwind", "PostgreSQL", "Prisma"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[10px] uppercase tracking-wider border border-border rounded-full text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Copyright and legal */}
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-xs text-muted-foreground">
              © 2026 CS_DUELS. All rights reserved.
            </span>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Large decorative text */}
        <div className="mt-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-[8vw] md:text-[6vw] font-light tracking-tighter text-muted-foreground/10 select-none">
              PRACTICE • COMPETE • CLIMB
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

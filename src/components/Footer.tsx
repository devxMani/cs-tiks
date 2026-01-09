import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background text-sm font-semibold">//</span>
            </div>
            <div>
              <span className="text-sm font-medium tracking-tight block">CS_DUELS</span>
              <span className="text-[10px] text-muted-foreground">Clean CS Quiz Platform</span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6 md:gap-8">
            {["Practice", "Duel", "Leaderboard", "Profile", "GitHub"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
              © 2026 CS_DUELS
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
              Built with Next.js + Prisma
            </span>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {["TypeScript", "Tailwind", "PostgreSQL", "NextAuth", "Vercel"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-[10px] uppercase tracking-wider border border-border rounded-full text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </div>
    </footer>
  );
};

export default Footer;

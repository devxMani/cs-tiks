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
            <span className="text-sm font-medium tracking-tight">CS_DUELS</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6 md:gap-8">
            {["About", "GitHub", "Discord", "Contact"].map((item) => (
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
              V_1.0.0
            </span>
          </div>
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

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full border border-border/40 bg-background/60 backdrop-blur-xl px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background text-sm font-semibold">//</span>
            </div>
            <span className="text-sm font-medium tracking-tight">CS_DUELS</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {["Practice", "Duels", "Leaderboard", "Topics"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-[10px] text-muted-foreground tracking-wider">
              V_1.0.0
            </span>
            <button className="px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors">
              Enter
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

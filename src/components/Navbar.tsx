import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md"
    >
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-coral text-xl font-bold">//</span>
            <span className="text-xl font-bold tracking-tight">CS-DUELS</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Practice
          </a>
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Duels
          </a>
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Leaderboard
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-coral text-primary-foreground rounded hover:bg-coral-glow transition-colors">
            // START DUEL //
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

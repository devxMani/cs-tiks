import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border/30 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="status-badge mb-8 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
            GET STARTED
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
            Ready to
            <span className="text-muted-foreground"> prove </span>
            your skills?
          </h2>

          <p className="text-muted-foreground mb-12 text-sm max-w-md mx-auto">
            Sign up with email or Google OAuth. Free forever. Start practicing, start dueling.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
            >
              Sign Up Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-sm font-medium border border-border rounded-full hover:bg-accent transition-colors"
            >
              View Demo
            </motion.button>
          </div>

          {/* Flow steps */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4 text-[10px] uppercase tracking-wider text-muted-foreground">
            <span className="px-3 py-1 border border-border rounded-full">1. Sign Up</span>
            <span>→</span>
            <span className="px-3 py-1 border border-border rounded-full">2. Pick Topic</span>
            <span>→</span>
            <span className="px-3 py-1 border border-border rounded-full">3. Practice or Duel</span>
            <span>→</span>
            <span className="px-3 py-1 border border-border rounded-full">4. Climb Ranks</span>
          </div>

          {/* Stats row */}
          <div className="mt-12 flex items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-light">4</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Core Topics
              </span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-light">120+</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Questions
              </span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-light">100%</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Free
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

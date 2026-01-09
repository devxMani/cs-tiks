import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden binary-pattern">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-coral/5 via-transparent to-coral/5" />

      <div className="container relative z-10 px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="badge-coral">
              <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse-glow" />
              LIVE DUELS
            </span>
          </motion.div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
            <span className="block">MASTER</span>
            <span className="block text-coral text-glow">COMPUTER SCIENCE</span>
            <span className="block">THROUGH DUELS</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-mono tracking-wide uppercase">
            Challenge yourself and others with real CS interview questions. 
            <br className="hidden md:block" />
            Level up your skills. Climb the ranks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-base font-medium bg-coral text-primary-foreground rounded glow-coral hover:bg-coral-glow transition-all"
            >
              // START PRACTICING //
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-base font-medium border border-border text-foreground rounded hover:border-muted-foreground transition-colors"
            >
              [FIND OPPONENT]
            </motion.button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider mt-1">Questions</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">12</p>
              <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider mt-1">Topics</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-coral">∞</p>
              <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider mt-1">Duels</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

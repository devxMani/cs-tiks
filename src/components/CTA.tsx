import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="badge-coral mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse-glow" />
            GET STARTED
          </span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 mb-6">
            READY TO <span className="text-coral text-glow">PROVE</span> YOUR SKILLS?
          </h2>

          <p className="text-muted-foreground text-lg font-mono uppercase tracking-wide mb-10">
            Join now. It's free forever.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 text-lg font-medium bg-coral text-primary-foreground rounded glow-coral hover:bg-coral-glow transition-all"
          >
            // CREATE ACCOUNT //
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

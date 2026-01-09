import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-medium uppercase tracking-wider rounded-full border border-border/60 bg-card/50 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Get Started
          </span>

          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Ready to prove
            <span className="text-muted-foreground"> your skills?</span>
          </h2>

          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Start practicing now. It's free forever — no credit card, no limits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup"
              className="group px-8 py-4 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all flex items-center gap-2"
            >
              Sign Up Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/practice"
              className="px-8 py-4 text-sm font-medium border border-border rounded-full hover:bg-accent transition-all"
            >
              Try Practice Mode
            </Link>
          </div>

          {/* Steps */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-wider text-muted-foreground">
            <span className="px-3 py-1.5 rounded-full border border-border/60">1. Sign Up</span>
            <span className="text-border">→</span>
            <span className="px-3 py-1.5 rounded-full border border-border/60">2. Pick Topic</span>
            <span className="text-border">→</span>
            <span className="px-3 py-1.5 rounded-full border border-border/60">3. Practice or Duel</span>
            <span className="text-border">→</span>
            <span className="px-3 py-1.5 rounded-full border border-border/60">4. Climb Ranks</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

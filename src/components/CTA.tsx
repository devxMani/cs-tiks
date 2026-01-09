import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-foreground/[0.02] blur-[120px] rounded-full" />
      </div>
      
      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="status-badge mb-8 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Get Started
          </span>

          <h2 className="section-header mb-6 animate-clip-text">
            Ready to prove
            <span className="text-muted-foreground"> your skills?</span>
          </h2>

          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Start practicing now. It's free forever — no credit card, no limits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup"
              className="group glass-button flex items-center gap-2"
            >
              Sign Up Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/practice"
              className="glass-button-outline"
            >
              Try Practice Mode
            </Link>
          </div>

          {/* Steps */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { step: "1", label: "Sign Up" },
              { step: "2", label: "Pick Topic" },
              { step: "3", label: "Practice or Duel" },
              { step: "4", label: "Climb Ranks" },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center gap-3">
                <span className="glass-card-subtle px-4 py-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {item.step}. {item.label}
                </span>
                {index < 3 && (
                  <span className="text-border/40 hidden sm:block">→</span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

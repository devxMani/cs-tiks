import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16">
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-medium uppercase tracking-wider rounded-full border border-border/60 bg-card/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              System Online
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05]">
              Master Your
              <br />
              <span className="text-muted-foreground">CS Skills</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-muted-foreground max-w-lg mx-auto text-base md:text-lg leading-relaxed mb-10"
          >
            Practice, compete in 1v1 duels, and climb the leaderboard. 
            A clean CS quiz platform for interview preparation.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/practice"
              className="group px-8 py-4 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all flex items-center gap-2"
            >
              Start Practice
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/duel"
              className="px-8 py-4 text-sm font-medium border border-border rounded-full hover:bg-accent transition-all"
            >
              Quick Duel
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-8 md:gap-16 pt-8 border-t border-border/40"
          >
            {[
              { value: "300+", label: "Questions" },
              { value: "10", label: "Topics" },
              { value: "1v1", label: "Duels" },
              { value: "Free", label: "Forever" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="block text-xl md:text-2xl font-light">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16">
      <div className="container relative z-10 px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Left content */}
          <div className="lg:w-1/2 space-y-8">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider rounded-full border border-border/60 bg-card/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                System Online
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-[1.1]">
                Master Your{" "}
                <span className="italic font-serif text-muted-foreground">CS Skills</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground max-w-md text-lg font-light leading-relaxed"
            >
              Practice, compete in 1v1 duels, and climb the leaderboard. 
              A clean CS quiz platform for interview preparation.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-4"
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
              className="flex items-center gap-8 md:gap-12 pt-8 border-t border-border/40"
            >
              {[
                { value: "300+", label: "Questions" },
                { value: "10", label: "Topics" },
                { value: "1v1", label: "Duels" },
                { value: "Free", label: "Forever" },
              ].map((stat, i) => (
                <div key={i}>
                  <span className="block text-xl md:text-2xl font-light">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - empty space for visual balance or future content */}
          <div className="hidden lg:block lg:w-1/2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

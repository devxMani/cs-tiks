import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const FlowingLines = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-20"
    viewBox="0 0 1200 800"
    fill="none"
    preserveAspectRatio="xMidYMid slice"
  >
    <path
      d="M-100 400 Q 200 200, 400 400 T 800 400 T 1300 300"
      stroke="url(#gradient1)"
      strokeWidth="1"
      fill="none"
      className="animate-beam"
    />
    <path
      d="M-100 500 Q 300 300, 500 500 T 900 450 T 1400 350"
      stroke="url(#gradient2)"
      strokeWidth="1"
      fill="none"
      className="animate-beam"
      style={{ animationDelay: "1s" }}
    />
    <path
      d="M-50 600 Q 250 400, 450 550 T 850 500 T 1350 400"
      stroke="url(#gradient1)"
      strokeWidth="0.5"
      fill="none"
      className="animate-beam"
      style={{ animationDelay: "2s" }}
    />
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(0 0% 30%)" />
        <stop offset="50%" stopColor="hsl(0 0% 50%)" />
        <stop offset="100%" stopColor="hsl(0 0% 30%)" />
      </linearGradient>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(0 0% 20%)" />
        <stop offset="50%" stopColor="hsl(0 0% 40%)" />
        <stop offset="100%" stopColor="hsl(0 0% 20%)" />
      </linearGradient>
    </defs>
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image - full cover */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Lighter gradient overlays for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />
      <FlowingLines />

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="animate-fade-up"
            >
              <span className="status-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
                SYS_READY /// DUELS_ACTIVE
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="space-y-2">
              <h1 className="animate-clip-text delay-100">
                <span className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9]">
                  Master
                </span>
              </h1>
              <div className="flex items-center gap-4 animate-clip-text delay-200">
                <span className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-muted-foreground">
                  Your
                </span>
                <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50">
                  <span className="text-xs text-muted-foreground">With</span>
                  <span className="text-xs font-medium">DuelSync™</span>
                  <span className="text-xs text-muted-foreground">Tech</span>
                </div>
              </div>
              <h1 className="animate-clip-text delay-300">
                <span className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9]">
                  CS Skills
                </span>
              </h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground max-w-md text-sm leading-relaxed"
            >
              A clean CS quiz platform with Practice Mode, 1v1 Duels, and Leaderboard.
              Pick a topic, answer questions, challenge opponents.
            </motion.p>
          </div>

          {/* Right bento grid - compact */}
          <div className="lg:col-span-4">
            <div className="bento-grid grid-cols-2 grid-rows-3 h-[340px] gap-2">
              {/* Practice card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-1 row-span-1 glass-card p-3 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
                    Practice
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                  </div>
                </div>
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-muted to-accent flex items-center justify-center">
                  <span className="text-base">⌘</span>
                </div>
              </motion.div>

              {/* Stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-1 row-span-2 glass-card p-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
                    Live Stats
                  </span>
                  <div className="mt-3 space-y-2">
                    <div>
                      <span className="text-2xl font-light">100+</span>
                      <p className="text-[9px] text-muted-foreground">Questions</p>
                    </div>
                    <div>
                      <span className="text-2xl font-light">4</span>
                      <p className="text-[9px] text-muted-foreground">Topics</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
                  <span className="text-[9px] text-muted-foreground">Active Now</span>
                </div>
              </motion.div>

              {/* Quick Duel card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="col-span-1 row-span-1 glass-card p-3"
              >
                <span className="text-sm font-light">Quick Duel</span>
                <p className="text-[9px] text-muted-foreground mt-0.5">5 Questions • 20s</p>
                <div className="mt-2 w-full h-0.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-foreground/30 rounded-full" />
                </div>
              </motion.div>

              {/* Matchmaking visualization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="col-span-2 row-span-1 glass-card p-3 relative overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 300 60"
                    fill="none"
                    className="opacity-40"
                  >
                    <circle cx="50" cy="30" r="12" stroke="hsl(0 0% 25%)" strokeWidth="1" />
                    <circle cx="150" cy="30" r="15" stroke="hsl(0 0% 30%)" strokeWidth="1" />
                    <circle cx="250" cy="30" r="12" stroke="hsl(0 0% 25%)" strokeWidth="1" />
                    <path d="M62 30 L135 30" stroke="hsl(0 0% 30%)" strokeWidth="1" className="animate-beam" />
                    <path d="M165 30 L238 30" stroke="hsl(0 0% 30%)" strokeWidth="1" className="animate-beam" style={{ animationDelay: "0.5s" }} />
                  </svg>
                </div>
                <div className="relative z-10 flex justify-between items-center">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Matchmaking</span>
                    <p className="text-[10px] mt-0.5">Random Opponent</p>
                  </div>
                  <span className="text-[9px] text-emerald-500">LIVE</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom info bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border/30 pt-8"
        >
          <div className="flex items-center gap-8">
            <div>
              <span className="block text-2xl font-light">PRACTICE</span>
              <span className="block text-2xl font-light text-muted-foreground">COMPETE</span>
              <span className="block text-2xl font-light">CLIMB</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 text-[10px] uppercase tracking-wider border border-border rounded-full">
              10 Questions
            </span>
            <span className="text-muted-foreground">—</span>
            <span className="px-3 py-1 text-[10px] uppercase tracking-wider border border-border rounded-full">
              20s Per Question
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

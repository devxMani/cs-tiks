import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="status-badge mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
            FEATURES
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mt-4 max-w-2xl">
            Everything you need to
            <span className="text-muted-foreground"> ace your interviews</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="bento-grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {/* Practice card - spans 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 glass-card p-8 min-h-[280px] flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  01_PRACTICE
                </span>
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <span className="text-lg">⌘</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-light mb-3">Solo Practice Mode</h3>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                Pick a topic (DSA, DBMS, OS, Networks). Get 10 random questions.
                Immediate feedback with correct answers and explanations.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <span className="px-3 py-1 text-[10px] uppercase tracking-wider border border-border rounded-full">
                10 Questions
              </span>
              <span className="px-3 py-1 text-[10px] uppercase tracking-wider border border-border rounded-full">
                Instant Feedback
              </span>
            </div>
          </motion.div>

          {/* Duels card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 min-h-[280px] flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  02_COMPETE
                </span>
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <span className="text-lg">⚔</span>
                </div>
              </div>
              <h3 className="text-xl font-light mb-3">1v1 Quick Duel</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Random matchmaking. Same 5 questions for both players. 
                20 seconds per question. Winner takes points.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-slow" />
              <span className="text-[10px] text-muted-foreground">Live</span>
            </div>
          </motion.div>

          {/* Leaderboard card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 min-h-[280px] flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  03_RANK
                </span>
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <span className="text-lg">◆</span>
                </div>
              </div>
              <h3 className="text-xl font-light mb-3">Leaderboard</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Top 50 players. Sort by total wins or accuracy. Track your progress and climb the ranks.
              </p>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-muted-foreground">Your Rank</span>
                <span>#---</span>
              </div>
              <div className="w-full h-1 bg-muted rounded-full" />
            </div>
          </motion.div>

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-2 glass-card p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-muted to-accent flex items-center justify-center">
                <span className="text-2xl">◈</span>
              </div>
              <div>
                <h3 className="text-xl font-light">Simple Profile</h3>
                <p className="text-sm text-muted-foreground">Username, avatar, win/loss record, accuracy %</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider">
              <span className="text-muted-foreground">Total Matches</span>
              <span className="text-muted-foreground">—</span>
              <span className="text-muted-foreground">Topic-wise Scores</span>
            </div>
          </motion.div>

          {/* Free tier card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 glass-card p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-muted to-accent flex items-center justify-center">
                <span className="text-2xl">∞</span>
              </div>
              <div>
                <h3 className="text-xl font-light">100% Free Forever</h3>
                <p className="text-sm text-muted-foreground">No credit card required. No hidden limits.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Unlimited Practice
              </span>
              <span className="text-muted-foreground">—</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Unlimited Duels
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;

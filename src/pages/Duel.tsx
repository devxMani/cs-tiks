import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Duel = () => {
  return (
    <Layout>
      <section className="min-h-screen pt-32 pb-20">
        <div className="container px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="status-badge mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
              1v1 DUEL
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mt-6 mb-4">
              Quick Duel
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Challenge a random opponent. Both players get the same 5 questions with 20 seconds each.
              Fastest and most accurate wins.
            </p>
          </motion.div>

          {/* Matchmaking visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-12 max-w-2xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-8 mb-8">
              {/* Player 1 */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-border flex items-center justify-center mb-3">
                  <span className="text-2xl">👤</span>
                </div>
                <span className="text-sm text-muted-foreground">You</span>
              </div>

              {/* VS */}
              <div className="flex flex-col items-center">
                <span className="text-2xl font-light text-muted-foreground">VS</span>
                <div className="mt-2 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/30 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/30 animate-pulse delay-100" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/30 animate-pulse delay-200" />
                </div>
              </div>

              {/* Player 2 */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-border flex items-center justify-center mb-3">
                  <span className="text-2xl">?</span>
                </div>
                <span className="text-sm text-muted-foreground">Opponent</span>
              </div>
            </div>

            <button className="w-full py-4 text-sm font-medium bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all">
              Find Opponent
            </button>
          </motion.div>

          {/* Rules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="glass-card p-6 text-center">
              <span className="text-3xl mb-3 block">5</span>
              <p className="text-sm text-muted-foreground">Questions</p>
            </div>
            <div className="glass-card p-6 text-center">
              <span className="text-3xl mb-3 block">20s</span>
              <p className="text-sm text-muted-foreground">Per Question</p>
            </div>
            <div className="glass-card p-6 text-center">
              <span className="text-3xl mb-3 block">🎯</span>
              <p className="text-sm text-muted-foreground">Same Questions</p>
            </div>
          </motion.div>

          {/* Recent duels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-xl font-light mb-6">Recent Duels</h2>
            <div className="space-y-3">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="glass-card p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm">👤</span>
                    </div>
                    <div>
                      <span className="text-sm">vs Player_{Math.floor(Math.random() * 1000)}</span>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <span className={`text-sm ${i === 0 ? "text-emerald-500" : i === 1 ? "text-red-500" : "text-emerald-500"}`}>
                    {i === 0 ? "Won" : i === 1 ? "Lost" : "Won"}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Duel;

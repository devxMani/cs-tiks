import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const players = [
  { rank: 1, name: "CodeMaster", wins: 142, losses: 23, accuracy: 94, streak: 12 },
  { rank: 2, name: "AlgoNinja", wins: 128, losses: 31, accuracy: 89, streak: 5 },
  { rank: 3, name: "ByteWarrior", wins: 115, losses: 28, accuracy: 91, streak: 8 },
  { rank: 4, name: "DataDragon", wins: 98, losses: 35, accuracy: 87, streak: 3 },
  { rank: 5, name: "LogicLord", wins: 89, losses: 42, accuracy: 85, streak: 4 },
  { rank: 6, name: "QueryQueen", wins: 82, losses: 38, accuracy: 88, streak: 6 },
  { rank: 7, name: "StackSensei", wins: 76, losses: 44, accuracy: 82, streak: 2 },
  { rank: 8, name: "TreeTitan", wins: 71, losses: 49, accuracy: 80, streak: 1 },
  { rank: 9, name: "GraphGuru", wins: 65, losses: 52, accuracy: 78, streak: 3 },
  { rank: 10, name: "HeapHero", wins: 58, losses: 55, accuracy: 76, streak: 0 },
];

const Leaderboard = () => {
  return (
    <Layout>
      <section className="min-h-screen pt-28 pb-20">
        <div className="container px-6 max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider rounded-full border border-border/60 bg-card/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
              Live Rankings
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
              Leaderboard
            </h1>
            <p className="text-muted-foreground">
              Top players ranked by total wins.
            </p>
          </motion.div>

          {/* Top 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-end justify-center gap-4 mb-10"
          >
            {[1, 0, 2].map((index) => {
              const player = players[index];
              const isFirst = index === 0;
              return (
                <div
                  key={player.rank}
                  className={`text-center ${isFirst ? "order-2" : index === 1 ? "order-1" : "order-3"}`}
                >
                  <div
                    className={`mx-auto mb-3 rounded-full flex items-center justify-center border-2 ${
                      isFirst
                        ? "w-20 h-20 border-yellow-500/50 bg-yellow-500/10"
                        : "w-16 h-16 border-border bg-card/30"
                    }`}
                  >
                    <span className="text-2xl">
                      {isFirst ? "👑" : index === 1 ? "🥈" : "🥉"}
                    </span>
                  </div>
                  <span className="block text-sm font-medium">{player.name}</span>
                  <span className="text-xs text-muted-foreground">{player.wins} wins</span>
                </div>
              );
            })}
          </motion.div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-border/50 overflow-hidden"
          >
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-card/30 text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border/50">
              <span className="col-span-1">#</span>
              <span className="col-span-4">Player</span>
              <span className="col-span-2 text-right">W/L</span>
              <span className="col-span-2 text-right">Win %</span>
              <span className="col-span-2 text-right">Accuracy</span>
              <span className="col-span-1 text-right">🔥</span>
            </div>

            {/* Rows */}
            {players.map((player, i) => (
              <motion.div
                key={player.rank}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.03 }}
                className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-border/30 last:border-0 hover:bg-card/20 transition-colors"
              >
                <span className="col-span-1 text-muted-foreground">{player.rank}</span>
                <div className="col-span-4 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-muted/50 flex items-center justify-center text-xs">
                    {player.name[0]}
                  </div>
                  <span className="text-sm">{player.name}</span>
                </div>
                <span className="col-span-2 text-right text-sm">
                  <span className="text-emerald-500">{player.wins}</span>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-red-400">{player.losses}</span>
                </span>
                <span className="col-span-2 text-right text-sm">
                  {Math.round((player.wins / (player.wins + player.losses)) * 100)}%
                </span>
                <span className="col-span-2 text-right text-sm">{player.accuracy}%</span>
                <span className="col-span-1 text-right text-sm">
                  {player.streak > 0 && <span className="text-orange-400">{player.streak}</span>}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Your rank */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span>👤</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Your Rank</span>
                  <p className="text-lg font-light">#24</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="text-right">
                  <span className="text-emerald-500">45</span>
                  <span className="text-muted-foreground">/12</span>
                  <p className="text-[10px] text-muted-foreground">W/L</p>
                </div>
                <div className="text-right">
                  <span>87%</span>
                  <p className="text-[10px] text-muted-foreground">Accuracy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Leaderboard;

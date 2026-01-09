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
      <section className="min-h-screen pt-32 pb-20">
        <div className="container px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="status-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                RANKINGS
              </span>
              <span className="text-xs text-muted-foreground">Updated in real-time</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              Leader<span className="text-muted-foreground">board</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              The top players ranked by total wins. Climb the ranks through competitive duels.
            </p>
          </motion.div>

          {/* Top 3 podium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-end justify-center gap-4 mb-16"
          >
            {/* 2nd place */}
            <motion.div 
              className="glass-card p-6 text-center w-44"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300/20 to-gray-400/20 mx-auto mb-4 flex items-center justify-center border-2 border-gray-400/30">
                <span className="text-3xl">🥈</span>
              </div>
              <span className="text-lg font-medium block">{players[1].name}</span>
              <p className="text-sm text-muted-foreground">{players[1].wins} wins</p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="text-xs text-emerald-500">{players[1].accuracy}%</span>
                <span className="text-xs text-muted-foreground">accuracy</span>
              </div>
            </motion.div>

            {/* 1st place */}
            <motion.div 
              className="glass-card p-8 text-center w-52 border-yellow-500/30 relative overflow-hidden"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent" />
              <div className="relative">
                <motion.div 
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400/30 to-amber-500/30 mx-auto mb-4 flex items-center justify-center border-2 border-yellow-500/50"
                  animate={{ 
                    boxShadow: ["0 0 0 0 rgba(234, 179, 8, 0)", "0 0 30px 10px rgba(234, 179, 8, 0.1)", "0 0 0 0 rgba(234, 179, 8, 0)"],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-4xl">👑</span>
                </motion.div>
                <span className="text-xl font-medium block">{players[0].name}</span>
                <p className="text-muted-foreground">{players[0].wins} wins</p>
                <div className="mt-3 flex items-center justify-center gap-4">
                  <div>
                    <span className="text-lg text-emerald-500">{players[0].accuracy}%</span>
                    <p className="text-[10px] text-muted-foreground">accuracy</p>
                  </div>
                  <div>
                    <span className="text-lg text-orange-500">🔥{players[0].streak}</span>
                    <p className="text-[10px] text-muted-foreground">streak</p>
                  </div>
                </div>
                <span className="inline-block mt-4 px-3 py-1.5 text-[10px] uppercase tracking-wider bg-yellow-500/10 text-yellow-500 rounded-full border border-yellow-500/30">
                  Champion
                </span>
              </div>
            </motion.div>

            {/* 3rd place */}
            <motion.div 
              className="glass-card p-6 text-center w-44"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-700/20 mx-auto mb-4 flex items-center justify-center border-2 border-amber-600/30">
                <span className="text-3xl">🥉</span>
              </div>
              <span className="text-lg font-medium block">{players[2].name}</span>
              <p className="text-sm text-muted-foreground">{players[2].wins} wins</p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="text-xs text-emerald-500">{players[2].accuracy}%</span>
                <span className="text-xs text-muted-foreground">accuracy</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Full leaderboard table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card overflow-hidden"
          >
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-border text-[10px] uppercase tracking-wider text-muted-foreground bg-muted/30">
              <span className="col-span-1">Rank</span>
              <span className="col-span-4">Player</span>
              <span className="col-span-2 text-right">Wins</span>
              <span className="col-span-2 text-right">Losses</span>
              <span className="col-span-2 text-right">Accuracy</span>
              <span className="col-span-1 text-right">Streak</span>
            </div>
            
            {/* Rows */}
            {players.map((player, index) => (
              <motion.div
                key={player.rank}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className={`grid grid-cols-12 gap-4 p-4 border-b border-border/50 hover:bg-muted/20 transition-colors ${
                  index < 3 ? "bg-gradient-to-r from-yellow-500/5 to-transparent" : ""
                }`}
              >
                <span className="col-span-1 flex items-center gap-2">
                  {index < 3 ? (
                    <span className="text-lg">{index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}</span>
                  ) : (
                    <span className="text-muted-foreground">#{player.rank}</span>
                  )}
                </span>
                <div className="col-span-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm">👤</span>
                  </div>
                  <span className="font-medium">{player.name}</span>
                </div>
                <span className="col-span-2 text-right text-emerald-500 flex items-center justify-end">{player.wins}</span>
                <span className="col-span-2 text-right text-red-500 flex items-center justify-end">{player.losses}</span>
                <span className="col-span-2 text-right flex items-center justify-end">{player.accuracy}%</span>
                <span className="col-span-1 text-right flex items-center justify-end">
                  {player.streak > 0 && <span className="text-orange-500">🔥{player.streak}</span>}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Your rank card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 glass-card p-6 border-emerald-500/30"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Your Rank</span>
                  <p className="text-2xl font-light">#24</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <span className="text-2xl font-light text-emerald-500">45</span>
                  <p className="text-xs text-muted-foreground">Wins</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-light">87%</span>
                  <p className="text-xs text-muted-foreground">Accuracy</p>
                </div>
                <button className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-foreground hover:text-background transition-all">
                  View Profile
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Leaderboard;

import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const players = [
  { rank: 1, name: "CodeMaster", wins: 142, losses: 23, accuracy: 94 },
  { rank: 2, name: "AlgoNinja", wins: 128, losses: 31, accuracy: 89 },
  { rank: 3, name: "ByteWarrior", wins: 115, losses: 28, accuracy: 91 },
  { rank: 4, name: "DataDragon", wins: 98, losses: 35, accuracy: 87 },
  { rank: 5, name: "LogicLord", wins: 89, losses: 42, accuracy: 85 },
  { rank: 6, name: "QueryQueen", wins: 82, losses: 38, accuracy: 88 },
  { rank: 7, name: "StackSensei", wins: 76, losses: 44, accuracy: 82 },
  { rank: 8, name: "TreeTitan", wins: 71, losses: 49, accuracy: 80 },
  { rank: 9, name: "GraphGuru", wins: 65, losses: 52, accuracy: 78 },
  { rank: 10, name: "HeapHero", wins: 58, losses: 55, accuracy: 76 },
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
            className="max-w-2xl mb-12"
          >
            <span className="status-badge mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
              RANKINGS
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mt-6 mb-4">
              Leaderboard
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Top 50 players ranked by wins. Climb the ranks through duels.
            </p>
          </motion.div>

          {/* Top 3 podium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-end justify-center gap-4 mb-12"
          >
            {/* 2nd place */}
            <div className="glass-card p-6 text-center w-40">
              <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🥈</span>
              </div>
              <span className="text-sm font-medium">{players[1].name}</span>
              <p className="text-xs text-muted-foreground mt-1">{players[1].wins} wins</p>
            </div>

            {/* 1st place */}
            <div className="glass-card p-8 text-center w-48 border-yellow-500/30">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 mx-auto mb-3 flex items-center justify-center">
                <span className="text-3xl">🥇</span>
              </div>
              <span className="text-lg font-medium">{players[0].name}</span>
              <p className="text-sm text-muted-foreground mt-1">{players[0].wins} wins</p>
              <span className="inline-block mt-2 px-2 py-1 text-[10px] uppercase tracking-wider bg-yellow-500/10 text-yellow-500 rounded">
                Champion
              </span>
            </div>

            {/* 3rd place */}
            <div className="glass-card p-6 text-center w-40">
              <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🥉</span>
              </div>
              <span className="text-sm font-medium">{players[2].name}</span>
              <p className="text-xs text-muted-foreground mt-1">{players[2].wins} wins</p>
            </div>
          </motion.div>

          {/* Full leaderboard table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card overflow-hidden"
          >
            <div className="grid grid-cols-5 gap-4 p-4 border-b border-border text-[10px] uppercase tracking-wider text-muted-foreground">
              <span>Rank</span>
              <span>Player</span>
              <span className="text-right">Wins</span>
              <span className="text-right">Losses</span>
              <span className="text-right">Accuracy</span>
            </div>
            {players.map((player, index) => (
              <motion.div
                key={player.rank}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="grid grid-cols-5 gap-4 p-4 border-b border-border/50 hover:bg-muted/20 transition-colors"
              >
                <span className="text-muted-foreground">#{player.rank}</span>
                <span className="font-medium">{player.name}</span>
                <span className="text-right text-emerald-500">{player.wins}</span>
                <span className="text-right text-red-500">{player.losses}</span>
                <span className="text-right">{player.accuracy}%</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Leaderboard;

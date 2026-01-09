import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Profile = () => {
  const stats = {
    wins: 45,
    losses: 12,
    accuracy: 87,
    rank: 24,
    totalQuestions: 570,
    streak: 5,
    bestStreak: 12,
    totalDuels: 57,
  };

  const topicStats = [
    { name: "DSA", accuracy: 92, questions: 180, color: "from-violet-500/20 to-purple-500/20" },
    { name: "DBMS", accuracy: 85, questions: 140, color: "from-blue-500/20 to-cyan-500/20" },
    { name: "OS", accuracy: 88, questions: 130, color: "from-emerald-500/20 to-green-500/20" },
    { name: "Networks", accuracy: 82, questions: 120, color: "from-orange-500/20 to-amber-500/20" },
  ];

  const recentActivity = [
    { type: "duel", result: "won", opponent: "AlgoNinja_423", score: "4-2", time: "2h ago" },
    { type: "practice", topic: "DSA", score: "8/10", time: "5h ago" },
    { type: "duel", result: "won", opponent: "ByteWarrior_891", score: "5-3", time: "1d ago" },
    { type: "duel", result: "lost", opponent: "CodeMaster_102", score: "2-4", time: "1d ago" },
    { type: "practice", topic: "DBMS", score: "9/10", time: "2d ago" },
  ];

  const achievements = [
    { icon: "🏆", name: "First Victory", desc: "Win your first duel" },
    { icon: "🔥", name: "On Fire", desc: "5 win streak" },
    { icon: "📚", name: "Scholar", desc: "Answer 500 questions" },
    { icon: "⚡", name: "Speed Demon", desc: "Answer in under 5 seconds" },
  ];

  return (
    <Layout>
      <section className="min-h-screen pt-32 pb-20">
        <div className="container px-6">
          {/* Profile header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 mb-8"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Avatar */}
              <motion.div 
                className="w-28 h-28 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center border-2 border-emerald-500/30 relative"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-5xl">👤</span>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-emerald-500 flex items-center justify-center">
                  <span className="text-sm">🔥</span>
                </div>
              </motion.div>
              
              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h1 className="text-3xl font-light">Guest_User</h1>
                  <span className="status-badge text-[9px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    ONLINE
                  </span>
                  <span className="px-2 py-1 text-[10px] uppercase tracking-wider bg-yellow-500/10 text-yellow-500 rounded-full border border-yellow-500/30">
                    Top 50
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Joined 3 months ago • Last active just now</p>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="px-4 py-2 text-sm border border-border rounded-xl flex items-center gap-2">
                    <span className="text-yellow-500">🏅</span> Rank #{stats.rank}
                  </span>
                  <span className="px-4 py-2 text-sm border border-emerald-500/30 text-emerald-500 rounded-xl flex items-center gap-2">
                    <span>🔥</span> {stats.streak} Win Streak
                  </span>
                  <span className="px-4 py-2 text-sm border border-border rounded-xl flex items-center gap-2">
                    <span>⚔️</span> {stats.totalDuels} Duels
                  </span>
                </div>
              </div>
              
              {/* Edit button */}
              <button className="px-6 py-3 text-sm font-medium border border-border rounded-xl hover:bg-foreground hover:text-background transition-all">
                Edit Profile
              </button>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {[
              { value: stats.wins, label: "Wins", color: "text-emerald-500", icon: "✓" },
              { value: stats.losses, label: "Losses", color: "text-red-500", icon: "✗" },
              { value: `${stats.accuracy}%`, label: "Accuracy", color: "", icon: "🎯" },
              { value: stats.totalQuestions, label: "Questions", color: "", icon: "📝" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <span className={`text-3xl font-light ${stat.color}`}>{stat.value}</span>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Win rate visualization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-6"
              >
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
                  <span>📊</span> Win Rate
                </h3>
                <div className="flex items-center gap-8 mb-6">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="hsl(142.1 76.2% 36.3%)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${(stats.wins / (stats.wins + stats.losses)) * 251.2} 251.2`}
                        initial={{ strokeDasharray: "0 251.2" }}
                        animate={{ strokeDasharray: `${(stats.wins / (stats.wins + stats.losses)) * 251.2} 251.2` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-light">{Math.round((stats.wins / (stats.wins + stats.losses)) * 100)}%</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-emerald-500">Wins</span>
                        <span className="text-sm">{stats.wins}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-emerald-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${(stats.wins / (stats.wins + stats.losses)) * 100}%` }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-red-500">Losses</span>
                        <span className="text-sm">{stats.losses}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-red-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${(stats.losses / (stats.wins + stats.losses)) * 100}%` }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Topic performance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card p-6"
              >
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
                  <span>📚</span> Topic Performance
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {topicStats.map((topic, index) => (
                    <motion.div
                      key={topic.name}
                      className={`p-4 rounded-xl bg-gradient-to-br ${topic.color} border border-border/50`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{topic.name}</span>
                        <span className="text-emerald-500">{topic.accuracy}%</span>
                      </div>
                      <div className="h-1.5 bg-background/50 rounded-full overflow-hidden mb-2">
                        <motion.div
                          className="h-full bg-foreground/50 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${topic.accuracy}%` }}
                          transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{topic.questions} questions answered</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Recent activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-card p-6"
              >
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
                  <span>⏱️</span> Recent Activity
                </h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/20 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          activity.type === "duel" ? "bg-red-500/10" : "bg-blue-500/10"
                        }`}>
                          <span>{activity.type === "duel" ? "⚔️" : "📚"}</span>
                        </div>
                        <div>
                          {activity.type === "duel" ? (
                            <>
                              <span className="text-sm">Duel vs {activity.opponent}</span>
                              <p className="text-xs text-muted-foreground">{activity.score} • {activity.time}</p>
                            </>
                          ) : (
                            <>
                              <span className="text-sm">Practice - {activity.topic}</span>
                              <p className="text-xs text-muted-foreground">{activity.score} • {activity.time}</p>
                            </>
                          )}
                        </div>
                      </div>
                      {activity.type === "duel" && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          activity.result === "won" 
                            ? "bg-emerald-500/10 text-emerald-500" 
                            : "bg-red-500/10 text-red-500"
                        }`}>
                          {activity.result?.toUpperCase()}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              {/* Quick actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-6"
              >
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link
                    to="/practice"
                    className="w-full p-4 rounded-xl border border-border hover:bg-foreground hover:text-background transition-all flex items-center gap-3"
                  >
                    <span>📚</span>
                    <span className="text-sm">Start Practice</span>
                  </Link>
                  <Link
                    to="/duel"
                    className="w-full p-4 rounded-xl border border-border hover:bg-foreground hover:text-background transition-all flex items-center gap-3"
                  >
                    <span>⚔️</span>
                    <span className="text-sm">Quick Duel</span>
                  </Link>
                  <Link
                    to="/leaderboard"
                    className="w-full p-4 rounded-xl border border-border hover:bg-foreground hover:text-background transition-all flex items-center gap-3"
                  >
                    <span>🏆</span>
                    <span className="text-sm">View Leaderboard</span>
                  </Link>
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card p-6"
              >
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                  <span>🏅</span> Achievements
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-muted/20"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <span className="text-sm font-medium">{achievement.name}</span>
                        <p className="text-xs text-muted-foreground">{achievement.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Streak info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-card p-6 border-orange-500/30"
              >
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                  <span>🔥</span> Streak
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-4xl font-light text-orange-500">{stats.streak}</span>
                    <p className="text-xs text-muted-foreground">Current streak</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-light">{stats.bestStreak}</span>
                    <p className="text-xs text-muted-foreground">Best streak</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;

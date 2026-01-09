import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { BookOpen, Swords, Trophy, Settings, TrendingUp } from "lucide-react";

const Profile = () => {
  const stats = {
    wins: 45,
    losses: 12,
    accuracy: 87,
    rank: 24,
    totalQuestions: 570,
    streak: 5,
  };

  const topicStats = [
    { name: "DSA", accuracy: 92, questions: 180 },
    { name: "DBMS", accuracy: 85, questions: 140 },
    { name: "OS", accuracy: 88, questions: 130 },
    { name: "Networks", accuracy: 82, questions: 120 },
  ];

  const recentActivity = [
    { type: "duel", result: "won", opponent: "AlgoNinja_423", score: "4-2", time: "2h ago" },
    { type: "practice", topic: "DSA", score: "8/10", time: "5h ago" },
    { type: "duel", result: "won", opponent: "ByteWarrior_891", score: "5-3", time: "1d ago" },
    { type: "duel", result: "lost", opponent: "CodeMaster_102", score: "2-4", time: "1d ago" },
  ];

  return (
    <Layout>
      <section className="min-h-screen pt-28 pb-20">
        <div className="container px-6 max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card-strong flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-xl font-medium">Guest_User</h1>
                  <span className="px-2.5 py-1 text-[9px] uppercase tracking-wider rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    Online
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Rank #{stats.rank} • {stats.streak} win streak 🔥</p>
              </div>
            </div>
            <button className="glass-button-outline flex items-center gap-2 !py-2.5">
              <Settings className="w-4 h-4" />
              Edit Profile
            </button>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            {[
              { value: stats.wins, label: "Wins", color: "text-emerald-500" },
              { value: stats.losses, label: "Losses", color: "text-red-400" },
              { value: `${stats.accuracy}%`, label: "Accuracy", color: "" },
              { value: stats.totalQuestions, label: "Questions", color: "" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="glass-card p-5 text-center"
              >
                <span className={`text-3xl font-light ${stat.color}`}>{stat.value}</span>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left: Topic stats + Activity */}
            <div className="lg:col-span-2 space-y-6">
              {/* Topic performance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card-strong p-6"
              >
                <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-5 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Topic Performance
                </h2>
                <div className="space-y-5">
                  {topicStats.map((topic, index) => (
                    <div key={topic.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{topic.name}</span>
                        <span className="text-sm text-muted-foreground">{topic.accuracy}%</span>
                      </div>
                      <div className="h-2 glass-card-subtle rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-foreground/40 to-foreground/60 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${topic.accuracy}%` }}
                          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Recent activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card-strong p-6"
              >
                <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-5">Recent Activity</h2>
                <div className="space-y-3">
                  {recentActivity.map((activity, i) => (
                    <div
                      key={i}
                      className="glass-card-subtle flex items-center justify-between p-4 hover:bg-foreground/[0.02] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          activity.type === "duel" ? "bg-red-500/10" : "bg-blue-500/10"
                        }`}>
                          {activity.type === "duel" ? "⚔️" : "📚"}
                        </div>
                        <div>
                          <span className="text-sm">
                            {activity.type === "duel" ? `vs ${activity.opponent}` : `Practice - ${activity.topic}`}
                          </span>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{activity.score}</span>
                        {activity.type === "duel" && (
                          <span className={`text-[10px] px-2.5 py-1 rounded-full ${
                            activity.result === "won"
                              ? "bg-emerald-500/10 text-emerald-500"
                              : "bg-red-500/10 text-red-400"
                          }`}>
                            {activity.result?.toUpperCase()}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Quick actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="glass-card-strong p-6">
                <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-5">Quick Actions</h2>
                <div className="space-y-2">
                  {[
                    { to: "/practice", icon: BookOpen, label: "Start Practice" },
                    { to: "/duel", icon: Swords, label: "Quick Duel" },
                    { to: "/leaderboard", icon: Trophy, label: "View Leaderboard" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="glass-card-subtle flex items-center gap-3 p-4 hover:bg-foreground/[0.03] transition-all group"
                      >
                        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Win rate */}
              <div className="glass-card-strong p-6">
                <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-5">Win Rate</h2>
                <div className="flex items-center gap-5">
                  <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted) / 0.3)" strokeWidth="8" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="hsl(142.1 76.2% 36.3%)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${(stats.wins / (stats.wins + stats.losses)) * 251.2} 251.2`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-light">
                        {Math.round((stats.wins / (stats.wins + stats.losses)) * 100)}%
                      </span>
                    </div>
                  </div>
                  <div className="text-sm space-y-1">
                    <p><span className="text-emerald-500 font-medium">{stats.wins}</span> wins</p>
                    <p><span className="text-red-400 font-medium">{stats.losses}</span> losses</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;

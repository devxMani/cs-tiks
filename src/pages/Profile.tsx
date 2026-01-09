import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Profile = () => {
  const stats = {
    wins: 45,
    losses: 12,
    accuracy: 87,
    rank: 24,
    totalQuestions: 570,
    streak: 5,
  };

  const recentActivity = [
    { type: "duel", result: "won", opponent: "Player_423", time: "2 hours ago" },
    { type: "practice", topic: "DSA", score: "8/10", time: "5 hours ago" },
    { type: "duel", result: "won", opponent: "Player_891", time: "1 day ago" },
    { type: "duel", result: "lost", opponent: "Player_102", time: "1 day ago" },
    { type: "practice", topic: "DBMS", score: "9/10", time: "2 days ago" },
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
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-muted to-accent flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-light">Guest_User</h1>
                  <span className="status-badge text-[9px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    ONLINE
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Joined 3 months ago</p>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 text-[10px] uppercase tracking-wider border border-border rounded-full">
                    Rank #{stats.rank}
                  </span>
                  <span className="px-3 py-1 text-[10px] uppercase tracking-wider border border-emerald-500/30 text-emerald-500 rounded-full">
                    🔥 {stats.streak} Win Streak
                  </span>
                </div>
              </div>
              <button className="px-6 py-2 text-sm font-medium border border-border rounded-lg hover:bg-foreground hover:text-background transition-all">
                Edit Profile
              </button>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="glass-card p-6 text-center">
              <span className="text-3xl font-light text-emerald-500">{stats.wins}</span>
              <p className="text-sm text-muted-foreground mt-1">Wins</p>
            </div>
            <div className="glass-card p-6 text-center">
              <span className="text-3xl font-light text-red-500">{stats.losses}</span>
              <p className="text-sm text-muted-foreground mt-1">Losses</p>
            </div>
            <div className="glass-card p-6 text-center">
              <span className="text-3xl font-light">{stats.accuracy}%</span>
              <p className="text-sm text-muted-foreground mt-1">Accuracy</p>
            </div>
            <div className="glass-card p-6 text-center">
              <span className="text-3xl font-light">{stats.totalQuestions}</span>
              <p className="text-sm text-muted-foreground mt-1">Questions Answered</p>
            </div>
          </motion.div>

          {/* Win/Loss ratio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 mb-8"
          >
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Win Rate</h3>
            <div className="h-4 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                style={{ width: `${(stats.wins / (stats.wins + stats.losses)) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-emerald-500">{stats.wins} Wins</span>
              <span className="text-muted-foreground">{Math.round((stats.wins / (stats.wins + stats.losses)) * 100)}%</span>
              <span className="text-red-500">{stats.losses} Losses</span>
            </div>
          </motion.div>

          {/* Recent activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-xl font-light mb-6">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="glass-card p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <span>{activity.type === "duel" ? "⚔️" : "📚"}</span>
                    </div>
                    <div>
                      {activity.type === "duel" ? (
                        <>
                          <span className="text-sm">Duel vs {activity.opponent}</span>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </>
                      ) : (
                        <>
                          <span className="text-sm">Practice - {activity.topic}</span>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </>
                      )}
                    </div>
                  </div>
                  {activity.type === "duel" ? (
                    <span className={`text-sm ${activity.result === "won" ? "text-emerald-500" : "text-red-500"}`}>
                      {activity.result === "won" ? "Won" : "Lost"}
                    </span>
                  ) : (
                    <span className="text-sm text-muted-foreground">{activity.score}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;

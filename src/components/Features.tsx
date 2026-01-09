import { motion } from "framer-motion";
import { BookOpen, Swords, Trophy, User } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Solo Practice",
    description: "Pick a topic, answer 10 questions at your own pace. Get instant feedback with explanations.",
    tags: ["10 Questions", "No Timer", "Detailed Feedback"],
  },
  {
    icon: Swords,
    title: "1v1 Quick Duel",
    description: "Random matchmaking. Same 5 questions for both players. 20 seconds per question.",
    tags: ["Real-time", "5 Questions", "20s Timer"],
  },
  {
    icon: Trophy,
    title: "Leaderboard",
    description: "Compete for the top spot. Track your rank, win rate, and accuracy against other players.",
    tags: ["Global Rankings", "Win Streaks", "Stats"],
  },
  {
    icon: User,
    title: "Your Profile",
    description: "Track your progress across all topics. View your match history and achievements.",
    tags: ["Progress Tracking", "Achievements", "History"],
  },
];

const Features = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-16"
        >
          <span className="inline-block px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider rounded-full border border-border/60 bg-card/50 mb-6">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Everything you need to
            <span className="text-muted-foreground"> ace your interviews</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 md:p-8 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full border border-border/60 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

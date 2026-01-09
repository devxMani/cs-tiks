import { BookOpen, Swords, Trophy, User, Zap, Code2 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Solo Practice",
    description: "Pick a topic, answer 10 questions at your own pace. Get instant feedback with explanations.",
    tags: ["10 Questions", "No Timer", "Detailed Feedback"],
    span: "col-span-1",
  },
  {
    icon: Swords,
    title: "1v1 Quick Duel",
    description: "Random matchmaking. Same 5 questions for both players. 20 seconds per question.",
    tags: ["Real-time", "5 Questions", "20s Timer"],
    span: "col-span-1",
  },
  {
    icon: Trophy,
    title: "Leaderboard",
    description: "Compete for the top spot. Track your rank, win rate, and accuracy against other players.",
    tags: ["Global Rankings", "Win Streaks", "Stats"],
    span: "col-span-1",
  },
  {
    icon: User,
    title: "Your Profile",
    description: "Track your progress across all topics. View your match history and achievements.",
    tags: ["Progress Tracking", "Achievements", "History"],
    span: "col-span-1",
  },
];

const Features = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Flowing beam lines - decorative SVG */}
      <div className="flow-lines opacity-20">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path
            d="M-100,100 Q400,200 800,100 T1600,150"
            fill="none"
            stroke="hsl(0 0% 25%)"
            strokeWidth="1"
            className="animate-beam"
          />
          <path
            d="M-100,300 Q300,200 700,350 T1400,250"
            fill="none"
            stroke="hsl(0 0% 20%)"
            strokeWidth="1"
            className="animate-beam"
            style={{ animationDelay: '2s' }}
          />
        </svg>
      </div>

      <div className="container px-6 relative z-10">
        {/* Header with clip animation */}
        <div className="max-w-xl mb-16">
          <div className="overflow-hidden">
            <span className="animate-clip-text delay-100 inline-block px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider rounded-full border border-border/60 bg-card/50 mb-6">
              Features
            </span>
          </div>
          <div className="overflow-hidden">
            <h2 className="animate-clip-text delay-200 text-3xl md:text-4xl font-light tracking-tight">
              Everything you need to
              <span className="text-muted-foreground"> ace your interviews</span>
            </h2>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
            return (
              <div
                key={feature.title}
                className={`animate-fade-up ${delays[index]} group glass-card p-6 md:p-8 hover:bg-card/50 transition-all duration-300 ${feature.span}`}
              >
                <div className="flex flex-col h-full">
                  <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center shrink-0 mb-4">
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
              </div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <div className="animate-clip-left delay-500 mt-12 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Instant Feedback</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Real Code Challenges</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

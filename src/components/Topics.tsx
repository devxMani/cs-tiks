import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const topics = [
  { id: "dsa", name: "Data Structures & Algorithms", shortName: "DSA", count: 35 },
  { id: "dbms", name: "Database Management", shortName: "DBMS", count: 32 },
  { id: "os", name: "Operating Systems", shortName: "OS", count: 32 },
  { id: "networks", name: "Computer Networks", shortName: "Networks", count: 32 },
  { id: "aiml", name: "AI & Machine Learning", shortName: "AI/ML", count: 35 },
  { id: "fullstack", name: "Full Stack Development", shortName: "Full Stack", count: 35 },
  { id: "webdev", name: "Web Development", shortName: "Web Dev", count: 32 },
  { id: "sysdesign", name: "System Design", shortName: "Sys Design", count: 32 },
  { id: "security", name: "Cybersecurity", shortName: "Security", count: 32 },
  { id: "cloud", name: "Cloud Computing", shortName: "Cloud", count: 32 },
];

const Topics = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border/30 relative overflow-hidden">
      {/* Flowing beam lines */}
      <div className="flow-lines opacity-20">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path
            d="M-100,150 Q400,50 800,200 T1600,100"
            fill="none"
            stroke="hsl(0 0% 22%)"
            strokeWidth="1"
            className="animate-beam"
            style={{ animationDelay: '0.5s' }}
          />
          <path
            d="M-100,350 Q500,250 900,400 T1600,300"
            fill="none"
            stroke="hsl(0 0% 18%)"
            strokeWidth="1"
            className="animate-beam"
            style={{ animationDelay: '1.5s' }}
          />
        </svg>
      </div>

      <div className="container px-6 relative z-10">
        {/* Header with clip animation */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-md">
            <div className="overflow-hidden">
              <span className="animate-clip-text delay-100 inline-block px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider rounded-full border border-border/60 bg-card/50 mb-6">
                Topics
              </span>
            </div>
            <div className="overflow-hidden">
              <h2 className="animate-clip-text delay-200 text-3xl md:text-4xl font-light tracking-tight">
                Core CS<span className="text-muted-foreground"> Subjects</span>
              </h2>
            </div>
          </div>
          <div className="overflow-hidden">
            <p className="animate-clip-left delay-300 text-sm text-muted-foreground max-w-xs">
              10 essential topics covering everything from algorithms to cloud computing.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {topics.map((topic, index) => {
            const delayClass = `delay-${Math.min((index + 1) * 100, 600)}`;
            return (
              <div
                key={topic.id}
                className={`animate-fade-up ${delayClass}`}
              >
                <Link
                  to="/practice"
                  className="group block glass-card p-4 hover:bg-card/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {topic.count}Q
                    </span>
                  </div>
                  <span className="block text-sm font-medium mb-1 group-hover:text-foreground transition-colors">
                    {topic.shortName}
                  </span>
                  <span className="flex items-center text-[10px] text-muted-foreground group-hover:text-foreground/70 transition-colors">
                    Practice
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Summary with clip animation */}
        <div className="animate-clip-left delay-700 mt-10 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <span>300+ Questions</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>10 Topics</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Updated Regularly</span>
        </div>

        {/* Bottom watermark */}
        <div className="animate-clip-left delay-1000 mt-16 flex justify-end">
          <span className="text-4xl md:text-5xl font-light tracking-tighter text-border/20">
            TopicGrid
          </span>
        </div>
      </div>
    </section>
  );
};

export default Topics;

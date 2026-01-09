import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Flowing beam lines - decorative SVG */}
      <div className="flow-lines opacity-30">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path
            d="M-100,200 Q400,100 800,300 T1600,200"
            fill="none"
            stroke="hsl(0 0% 25%)"
            strokeWidth="1"
            className="animate-beam"
          />
          <path
            d="M-100,400 Q300,300 700,500 T1400,350"
            fill="none"
            stroke="hsl(0 0% 20%)"
            strokeWidth="1"
            className="animate-beam"
            style={{ animationDelay: '1s' }}
          />
          <path
            d="M-100,600 Q500,500 900,650 T1600,550"
            fill="none"
            stroke="hsl(0 0% 18%)"
            strokeWidth="1"
            className="animate-beam"
            style={{ animationDelay: '2s' }}
          />
        </svg>
      </div>

      <div className="container relative z-10 px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Left content */}
          <div className="lg:w-1/2 space-y-8">
            {/* Status badge with clip animation */}
            <div className="animate-fade-up delay-100">
              <span className="status-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                System Online
              </span>
            </div>

            {/* Main headline with clip-path reveal */}
            <div className="overflow-hidden">
              <h1 className="animate-clip-text delay-200 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05]">
                Master Your
              </h1>
            </div>
            <div className="overflow-hidden -mt-4">
              <h1 className="animate-clip-text delay-300 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] italic text-muted-foreground">
                CS Skills
              </h1>
            </div>

            {/* Description with fade up */}
            <p className="animate-fade-up delay-500 text-muted-foreground max-w-md text-lg font-light leading-relaxed">
              Practice, compete in 1v1 duels, and climb the leaderboard. 
              A clean CS quiz platform for interview preparation.
            </p>

            {/* CTA buttons with staggered animation */}
            <div className="animate-fade-up delay-600 flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Link
                to="/practice"
                className="group px-8 py-4 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all duration-300 flex items-center gap-2"
              >
                Start Practice
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/duel"
                className="px-8 py-4 text-sm font-medium border border-border rounded-full hover:bg-accent hover:border-accent-foreground/20 transition-all duration-300"
              >
                Quick Duel
              </Link>
            </div>

            {/* Stats row with clip animation */}
            <div className="animate-clip-left delay-700 flex items-center gap-8 md:gap-12 pt-8 border-t border-border/40">
              {[
                { value: "300+", label: "Questions" },
                { value: "10", label: "Topics" },
                { value: "1v1", label: "Duels" },
                { value: "Free", label: "Forever" },
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="animate-fade-up"
                  style={{ animationDelay: `${0.9 + i * 0.1}s` }}
                >
                  <span className="block text-xl md:text-2xl font-light">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - empty space for visual balance */}
          <div className="hidden lg:block lg:w-1/2" />
        </div>
      </div>

      {/* Large watermark text at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="animate-clip-left delay-1000 text-[12vw] font-light tracking-tighter text-border/20 leading-none whitespace-nowrap">
          CodeMaster
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Zap, Brain, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-16 overflow-hidden">
      {/* Flowing beam lines - decorative SVG */}
      <div className="flow-lines opacity-40">
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

      <div className="container relative z-10 px-4 md:px-6 lg:px-8">
        {/* Top status bar */}
        <div className="flex items-center justify-between mb-8 animate-fade-up delay-100">
          <span className="text-[10px] font-mono tracking-wider text-muted-foreground">
            V_ 1.0.0 /// SYS_READY
          </span>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-wider text-muted-foreground">0%</span>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            {/* Main headline with clip-path reveal */}
            <div className="space-y-1">
              <div className="overflow-hidden">
                <p className="animate-clip-text delay-100 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[0.95]">
                  Sharpen
                </p>
              </div>
              <div className="overflow-hidden flex flex-wrap items-baseline gap-x-3">
                <span className="animate-clip-text delay-200 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[0.95] text-muted-foreground">
                  Your
                </span>
                <span className="animate-clip-text delay-300 text-xs sm:text-sm font-light tracking-widest uppercase text-muted-foreground/60 mt-2">
                  With
                </span>
                <span className="animate-clip-text delay-300 text-xs sm:text-sm font-medium tracking-wider text-foreground/80">
                  CodeSync™
                </span>
              </div>
              <div className="overflow-hidden">
                <p className="animate-clip-text delay-400 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[0.95] italic">
                  Craft
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="animate-fade-up delay-500 flex flex-col sm:flex-row items-start gap-3 pt-4">
              <Link
                to="/practice"
                className="group px-6 py-3 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all duration-300 flex items-center gap-2"
              >
                Start Practice
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/duel"
                className="px-6 py-3 text-sm font-medium border border-border rounded-full hover:bg-accent hover:border-accent-foreground/20 transition-all duration-300"
              >
                Quick Duel
              </Link>
            </div>
          </div>

          {/* Center Column - Image/Visual Area */}
          <div className="lg:col-span-3 flex items-center justify-center py-8 lg:py-0">
            <div className="animate-clip-img delay-500 relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-background border border-border/50 rounded-2xl">
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="h-1 bg-border/30 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-foreground/20 rounded-full animate-pulse-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Bento Cards */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3">
            {/* Skill Hub Card */}
            <div className="animate-fade-up delay-300 col-span-2 glass-card p-4 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium tracking-wide">Skill Hub</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-border" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 bg-border/50 rounded-full w-full" />
                  <div className="h-1.5 bg-border/30 rounded-full w-2/3" />
                </div>
              </div>
            </div>

            {/* Mind Forge Card */}
            <div className="animate-fade-up delay-400 glass-card p-4 rounded-xl flex flex-col justify-between">
              <Brain className="w-6 h-6 text-muted-foreground mb-4" />
              <div>
                <p className="text-sm font-light leading-tight">Mind Forge</p>
                <p className="text-[10px] text-muted-foreground mt-1">Syncing...</p>
              </div>
            </div>

            {/* Core Link Card */}
            <div className="animate-fade-up delay-500 glass-card p-4 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.3" className="text-border" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.3" className="text-border" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-foreground/60" />
                  <div className="w-2 h-2 rounded-full bg-foreground/40" />
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                </div>
                <div>
                  <p className="text-xs font-mono tracking-wider text-muted-foreground">Core_Link</p>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="animate-fade-up delay-600 col-span-2 glass-card p-4 rounded-xl">
              <div className="flex items-center justify-between">
                {[
                  { value: "300+", label: "Questions" },
                  { value: "10", label: "Topics" },
                  { value: "1v1", label: "Duels" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <span className="block text-lg font-light">{stat.value}</span>
                    <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left - Tagline */}
          <div className="animate-clip-left delay-700">
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-light tracking-wide text-muted-foreground">FOR FLUID</p>
              <p className="text-xs sm:text-sm font-light tracking-wide text-muted-foreground">PRECISION AND CORE</p>
              <p className="text-xs sm:text-sm font-light tracking-wide text-muted-foreground">CS MASTERY</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-[10px] font-medium px-2 py-1 rounded border border-border">DSA-FIRST</span>
              <div className="w-6 h-px bg-border" />
              <span className="text-[10px] font-medium px-2 py-1 rounded border border-border">CODE-LIGHT</span>
            </div>
          </div>

          {/* Right - Brand watermark */}
          <div className="animate-clip-left delay-1000 flex items-end justify-end">
            <div className="text-right">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-border/30">
                CodeSync
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

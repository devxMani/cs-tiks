import { Link } from "react-router-dom";
import { Cpu, Brain, Zap } from "lucide-react";
import heroBackground from "@/assets/background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="" 
          className="w-full h-full object-cover animate-clip-img"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      {/* Flowing beam lines - decorative SVG */}
      <div className="flow-lines opacity-60 z-10">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* Curved flowing beams */}
          <path
            d="M-100,200 Q400,100 800,300 T1600,200"
            fill="none"
            stroke="hsl(var(--neutral-700))"
            strokeWidth="1"
            className="animate-beam"
          />
          <path
            d="M-100,400 Q300,300 700,500 T1400,350"
            fill="none"
            stroke="hsl(var(--neutral-600))"
            strokeWidth="1"
            className="animate-beam"
            style={{ animationDelay: '1s' }}
          />
          <path
            d="M-100,600 Q500,500 900,650 T1600,550"
            fill="none"
            stroke="hsl(var(--neutral-700))"
            strokeWidth="1"
            className="animate-beam"
            style={{ animationDelay: '2s' }}
          />
          {/* Additional connecting lines */}
          <path
            d="M200,0 Q250,400 300,800"
            fill="none"
            stroke="hsl(var(--neutral-800))"
            strokeWidth="0.5"
            className="animate-beam"
            style={{ animationDelay: '0.5s' }}
          />
          <path
            d="M600,0 Q650,300 700,600"
            fill="none"
            stroke="hsl(var(--neutral-800))"
            strokeWidth="0.5"
            className="animate-beam"
            style={{ animationDelay: '1.5s' }}
          />
        </svg>
      </div>

      <div className="container relative z-20 px-4 md:px-6 lg:px-8">
        {/* Top status bar */}
        <div className="flex items-center justify-between mb-8 animate-fade-up delay-100">
          <span className="text-[10px] font-mono tracking-wider text-neutral-500">
            V_ 2.0.45 /// SYS_READY
          </span>
          <div className="flex items-center gap-6">
            {/* Forge Hub indicator */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-sm bg-orange flex items-center justify-center">
                <Zap className="w-2 h-2 text-background" />
              </div>
              <div>
                <span className="text-[10px] font-medium text-neutral-300 block">Forge Hub</span>
                <span className="text-[8px] text-neutral-600">Active</span>
              </div>
            </div>
            {/* Status dots */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-wider text-neutral-500">0%</span>
            </div>
          </div>
        </div>

        {/* Main Grid Layout - 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          
          {/* Left Column - Main Typography */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-2">
            {/* Main headline with clip-path reveal */}
            <div className="space-y-0">
              <div className="overflow-hidden">
                <p className="animate-clip-text delay-100 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[0.9]">
                  Sharpen
                </p>
              </div>
              <div className="overflow-hidden flex flex-wrap items-baseline gap-x-3">
                <span className="animate-clip-text delay-200 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[0.9] text-neutral-500">
                  Your
                </span>
                <div className="animate-clip-text delay-300 flex items-baseline gap-2 mt-2">
                  <span className="text-[10px] font-light tracking-widest uppercase text-neutral-600">
                    With
                  </span>
                  <span className="text-[10px] font-medium tracking-wider text-orange">
                    BladeSync™
                  </span>
                  <span className="text-[10px] font-light tracking-widest uppercase text-neutral-600">
                    Technology
                  </span>
                </div>
              </div>
              <div className="overflow-hidden">
                <p className="animate-clip-text delay-400 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[0.9] italic">
                  Craft
                </p>
              </div>
            </div>
          </div>

          {/* Center Column - Hero Image with Glassmorphism */}
          <div className="lg:col-span-4 flex items-center justify-center py-8 lg:py-0">
            <div className="animate-clip-img delay-500 relative w-full max-w-[320px] aspect-[3/4] glass-card-strong overflow-hidden rounded-2xl">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
              
              {/* Dot pattern overlay */}
              <div className="absolute inset-0 dot-pattern opacity-10" />
              
              {/* Center visual element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  {/* Concentric circles */}
                  <div className="absolute inset-0 rounded-full border border-neutral-700/30 animate-pulse-slow" />
                  <div className="absolute inset-4 rounded-full border border-neutral-600/40" />
                  <div className="absolute inset-8 rounded-full border border-neutral-500/50" />
                  {/* Center glow */}
                  <div className="absolute inset-10 rounded-full bg-neutral-400/10 blur-lg" />
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="corner-accent" />
              <div className="corner-accent-br" />
            </div>
          </div>

          {/* Right Column - Bento Cards */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3">
            {/* Skill Hub Card - spans 2 cols */}
            <div className="animate-fade-up delay-300 col-span-2 glass-card p-4 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium tracking-wide text-neutral-300">Skill Hub</span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-orange" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center border border-neutral-700">
                  <Cpu className="w-5 h-5 text-neutral-400" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-1 bg-neutral-700 rounded-full w-full" />
                  <div className="h-1 bg-neutral-800 rounded-full w-2/3" />
                </div>
              </div>
            </div>

            {/* Mind Forge Card */}
            <div className="animate-fade-up delay-400 glass-card p-4 rounded-xl flex flex-col justify-between min-h-[140px]">
              <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center border border-neutral-700">
                <Brain className="w-5 h-5 text-neutral-400" />
              </div>
              <div>
                <p className="text-sm font-light leading-tight text-neutral-200">Mind Forge</p>
                <p className="text-[10px] text-neutral-600 mt-1">Syncing...</p>
              </div>
            </div>

            {/* Core Link Card with SVG visualization */}
            <div className="animate-fade-up delay-500 glass-card p-4 rounded-xl relative overflow-hidden min-h-[140px]">
              {/* SVG Visualization background */}
              <div className="absolute inset-0 opacity-40">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Concentric circles */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--neutral-700))" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="hsl(var(--neutral-700))" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="hsl(var(--neutral-700))" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="10" fill="none" stroke="hsl(var(--neutral-600))" strokeWidth="0.5" />
                  {/* Cross lines */}
                  <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--neutral-800))" strokeWidth="0.3" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="hsl(var(--neutral-800))" strokeWidth="0.3" />
                  {/* Diagonal lines */}
                  <line x1="15" y1="15" x2="85" y2="85" stroke="hsl(var(--neutral-800))" strokeWidth="0.2" />
                  <line x1="85" y1="15" x2="15" y2="85" stroke="hsl(var(--neutral-800))" strokeWidth="0.2" />
                  {/* Animated dot */}
                  <circle cx="50" cy="10" r="2" fill="hsl(var(--orange-500))" className="animate-pulse" />
                </svg>
              </div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Status dots */}
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-neutral-300" />
                  <div className="w-2 h-2 rounded-full bg-neutral-500" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                </div>
                {/* Label */}
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-neutral-500">Core_Link</p>
                </div>
              </div>
            </div>

            {/* Stats/CTA Row - spans 2 cols */}
            <div className="animate-fade-up delay-600 col-span-2 flex gap-3">
              <Link
                to="/practice"
                className="flex-1 glass-button text-center text-sm"
              >
                Start Practice
              </Link>
              <Link
                to="/duel"
                className="flex-1 glass-button-outline text-center text-sm"
              >
                Quick Duel
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Tagline */}
          <div className="animate-clip-left delay-700">
            <div className="space-y-0.5">
              <p className="text-sm font-light tracking-wide text-neutral-500">FOR FLUID</p>
              <p className="text-sm font-light tracking-wide text-neutral-500">PRECISION AND CORE</p>
              <p className="text-sm font-light tracking-wide text-neutral-500">WEB MASTERY</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <span className="text-[10px] font-medium px-3 py-1.5 rounded border border-neutral-700 text-neutral-400">CSS-FIRST</span>
              <div className="w-8 h-px bg-neutral-700" />
              <span className="text-[10px] font-medium px-3 py-1.5 rounded border border-neutral-700 text-neutral-400">JS-LIGHT</span>
            </div>
          </div>

          {/* Right - Brand watermark */}
          <div className="animate-clip-left delay-1000 flex items-end justify-end">
            <div className="text-right flex items-baseline gap-3">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter text-neutral-800">
                BladeSync
              </span>
              <span className="text-2xl font-light text-orange">C</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

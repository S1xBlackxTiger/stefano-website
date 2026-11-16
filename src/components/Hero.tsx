import React from 'react';
import { Crown } from 'lucide-react';

interface HeroProps {
  online?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ online = true }) => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-32 pb-12 px-4 z-20">
      {/* Floating Quote - Top Left area */}
      <div className="absolute top-40 left-4 md:left-12 max-w-[200px] hidden sm:block">
        <p className="text-stefano-muted text-sm font-medium italic leading-relaxed border-l-2 border-crimson/50 pl-3">
          “ Dream Big... <br />
          <span className="text-white font-bold not-italic">Stay <span className="text-crimson">Legendary.</span> ”</span>
        </p>
      </div>

      {/* Main Avatar Centerpiece */}
      <div className="relative group mb-8">
        {/* Rotating Outer Ring */}
        <div className="absolute -inset-4 border-2 border-dashed border-crimson/30 rounded-full animate-spin-slow pointer-events-none" />
        <div className="absolute -inset-2 border border-crimson/40 rounded-full animate-spin-reverse pointer-events-none" />

        {/* Floating Crown above Avatar */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10 text-crimson">
          <div className="animate-float drop-shadow-[0_0_15px_#FF1A24]">
            <Crown className="w-8 h-8 fill-crimson/20" />
          </div>
        </div>

        {/* Circular Profile Frame */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-crimson via-crimson/50 to-transparent shadow-[0_0_50px_rgba(229,9,20,0.4)] transition-transform duration-500 group-hover:scale-105">
          <div className="w-full h-full rounded-full bg-[#050505] overflow-hidden border-2 border-white/5">
            <img
              src="/assets/profile.jpg"
              alt="Stefano Portrait"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Energy Particles Container */}
          <div className="absolute inset-0 rounded-full bg-crimson/5 animate-pulse-glow" />
        </div>
      </div>

      {/* STEFANO Title with Energy Slash */}
      <div className="relative mb-4">
        {/* Background Energy Slash Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-24 bg-crimson/20 blur-2xl skew-x-[-30deg] -rotate-3 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-1 bg-crimson shadow-[0_0_30px_#FF1A24] skew-x-[-30deg] -rotate-2 opacity-60" />

        <h1 className="relative font-heading font-black text-6xl md:text-8xl tracking-tight text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] italic">
          STEFANO
        </h1>
      </div>

      {/* Subtext and Online Status */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="font-inter font-light text-sm md:text-base tracking-[0.4em] text-stefano-muted uppercase">
          Welcome to my world
        </h2>

        <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
          <span className={`relative flex h-2 w-2`}>
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${online ? 'bg-green-400' : 'bg-red-400'} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${online ? 'bg-green-500' : 'bg-red-500'}`}></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-stefano-text">
            {online ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>

      {/* Vertical Indicator Dots (Left) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-4 z-40">
        <div className="w-1.5 h-1.5 rounded-full bg-crimson shadow-[0_0_8px_#FF1A24]" />
        <div className="w-1 h-1 rounded-full bg-stefano-muted opacity-40" />
        <div className="w-1 h-1 rounded-full bg-stefano-muted opacity-40" />
        <div className="w-1 h-1 rounded-full bg-stefano-muted opacity-40" />
      </div>

      {/* Kanji 'Dream' Bottom Left area */}
      <div className="absolute bottom-4 left-12 opacity-40 select-none hidden lg:block">
        <span className="font-serif text-8xl text-crimson/40 blur-[1px]">夢</span>
        <div className="text-[10px] tracking-[1em] text-stefano-muted absolute bottom-0 left-2">DREAM</div>
      </div>
    </section>
  );
};

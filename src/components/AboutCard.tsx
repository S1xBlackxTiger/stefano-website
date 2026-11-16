import React from 'react';
import { Crown, ArrowRight, BarChart3, Heart } from 'lucide-react';

interface AboutCardProps {
  onConnectClick: () => void;
}

export const AboutCard: React.FC<AboutCardProps> = ({ onConnectClick }) => {
  return (
    <div className="relative group w-full max-w-sm bg-[#0c0c10]/75 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-crimson/50 hover:shadow-[0_0_30px_rgba(229,9,20,0.3)]">
      {/* Corner metallic glow accents */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-crimson/60 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-crimson/60 rounded-bl-2xl" />

      {/* Header Title with Crimson Slash */}
      <div className="flex items-center space-x-2 mb-3">
        <div className="w-1.5 h-5 bg-crimson rounded-full shadow-[0_0_10px_#FF1A24]" />
        <h3 className="font-heading font-black text-lg tracking-wider text-white">ABOUT ME</h3>
      </div>

      {/* Bio text */}
      <p className="text-stefano-muted text-sm mb-2 italic">
        "Just a guy who loves..."
      </p>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-white mb-5">
        <span className="text-crimson-glow font-bold">Gaming</span> •
        <span>Anime</span> •
        <span>Design</span> •
        <span className="text-stefano-muted">More</span>
        <Crown className="w-4 h-4 text-crimson inline ml-1 animate-pulse" />
      </div>

      {/* Action CTA */}
      <button
        onClick={onConnectClick}
        className="group/btn flex items-center space-x-2 text-xs font-bold tracking-widest text-white uppercase hover:text-crimson-glow transition-colors mb-6 cursor-pointer"
      >
        <span>Let's connect!</span>
        <ArrowRight className="w-4 h-4 text-crimson group-hover/btn:translate-x-1.5 transition-transform" />
      </button>

      {/* Thin Red Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-crimson/40 to-transparent mb-5" />

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-3 bg-white/5 p-2.5 rounded-xl border border-white/5">
          <div className="p-2 bg-crimson/20 rounded-lg text-crimson">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-base font-black text-white">25K+</div>
            <div className="text-[10px] text-stefano-muted uppercase tracking-wider">Total Visits</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-white/5 p-2.5 rounded-xl border border-white/5">
          <div className="p-2 bg-crimson/20 rounded-lg text-crimson">
            <Heart className="w-4 h-4 text-crimson-glow" />
          </div>
          <div>
            <div className="text-base font-black text-white">98%</div>
            <div className="text-[10px] text-stefano-muted uppercase tracking-wider">Good Vibes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

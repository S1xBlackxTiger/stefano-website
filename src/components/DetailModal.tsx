import React from 'react';
import { X, User, Compass, BarChart2 } from 'lucide-react';

interface DetailModalProps {
  type: 'about' | 'interests' | 'stats' | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    about: {
      title: 'ABOUT ME',
      icon: User,
      body: 'I am STEFANO, a digital artisan fueled by shadows and fire. My journey is one of constant creation, blending the boundaries between art, technology, and gaming.',
    },
    interests: {
      title: 'INTERESTS',
      icon: Compass,
      body: 'From meticulously crafting digital experiences to battling in competitive arenas, I find beauty in the chaos. Anime, design, synthwave, and complex system architectures drive my creativity.',
    },
    stats: {
      title: 'STATISTICS',
      icon: BarChart2,
      body: 'Current Status: Living, Learning, and Leveling up. Analytics: 25K+ total interactions, 98% Good Vibes ratio. The journey continues.',
    },
  };

  const { title, icon: Icon, body } = contentMap[type];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-[#0c0c10] border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-white/5 rounded-full text-stefano-muted hover:text-white">
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-crimson/10 rounded-2xl text-crimson">
            <Icon className="w-6 h-6" />
          </div>
          <h2 className="font-heading font-bold text-2xl tracking-wider text-white">{title}</h2>
        </div>
        <p className="text-stefano-muted leading-relaxed">{body}</p>
      </div>
    </div>
  );
};

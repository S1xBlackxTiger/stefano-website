import React from 'react';
import { Crown, Settings, Home, User, Compass, BarChart2 } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenSettings: () => void;
  onOpenModal: (type: 'about' | 'interests' | 'stats') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenSettings,
  onOpenModal,
}) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 px-6 py-5 flex items-center justify-between">
      {/* Brand Logo - Removed as requested */}
      <div className="hidden" />

      {/* Navigation & Controls */}
      <nav className="flex items-center space-x-1 sm:space-x-2 bg-[#0c0c10]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
        <button
          onClick={() => setActiveSection('home')}
          className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
            activeSection === 'home'
              ? 'bg-crimson text-white shadow-[0_0_15px_rgba(229,9,20,0.6)]'
              : 'text-stefano-muted hover:text-white hover:bg-white/5'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline">Home</span>
        </button>

        <button
          onClick={() => onOpenModal('about')}
          className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium text-stefano-muted hover:text-white hover:bg-white/5 transition-all"
        >
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">About</span>
        </button>

        <button
          onClick={() => onOpenModal('interests')}
          className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium text-stefano-muted hover:text-white hover:bg-white/5 transition-all"
        >
          <Compass className="w-4 h-4" />
          <span className="hidden sm:inline">Interests</span>
        </button>

        <button
          onClick={() => onOpenModal('stats')}
          className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium text-stefano-muted hover:text-white hover:bg-white/5 transition-all"
        >
          <BarChart2 className="w-4 h-4" />
          <span className="hidden sm:inline">Stats</span>
        </button>

        <div className="h-4 w-[1px] bg-white/10 mx-1" />

        <button
          onClick={onOpenSettings}
          aria-label="Open settings"
          className="p-2 rounded-full text-stefano-muted hover:text-white hover:bg-crimson/20 border border-transparent hover:border-crimson/40 transition-all group"
        >
          <Settings className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </nav>
    </header>
  );
};

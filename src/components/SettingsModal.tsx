import React from 'react';
import { X, Volume2, VolumeX, Flame, Zap, Sliders, Monitor } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: {
    music: boolean;
    effects: boolean;
    motion: boolean;
    volume: number;
  };
  setSettings: (settings: any) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  setSettings,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md bg-[#0c0c10] border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-white/5">
          <div className="flex items-center space-x-2">
            <Sliders className="w-5 h-5 text-crimson" />
            <h2 className="font-heading font-bold text-xl tracking-wider text-white">SETTINGS</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-stefano-muted hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Audio Setting */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-crimson/10 rounded-xl text-crimson">
                {settings.music ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wide">Ambient Audio</div>
                <div className="text-xs text-stefano-muted">Background sounds & atmosphere</div>
              </div>
            </div>
            <button
              onClick={() => setSettings({ ...settings, music: !settings.music })}
              className={`w-12 h-6 rounded-full transition-all relative ${settings.music ? 'bg-crimson' : 'bg-white/10'}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${settings.music ? 'left-7' : 'left-1'}`} />
            </button>
          </div>

          {/* Volume Slider */}
          {settings.music && (
            <div className="space-y-3 px-1">
              <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-stefano-muted">
                <span>Volume</span>
                <span>{settings.volume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={settings.volume}
                onChange={(e) => setSettings({ ...settings, volume: parseInt(e.target.value) })}
                className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-crimson"
              />
            </div>
          )}

          <div className="h-[1px] w-full bg-white/5" />

          {/* Visual Effects Setting */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-crimson/10 rounded-xl text-crimson">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wide">Visual Effects</div>
                <div className="text-xs text-stefano-muted">Fire particles & energy streaks</div>
              </div>
            </div>
            <button
              onClick={() => setSettings({ ...settings, effects: !settings.effects })}
              className={`w-12 h-6 rounded-full transition-all relative ${settings.effects ? 'bg-crimson' : 'bg-white/10'}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${settings.effects ? 'left-7' : 'left-1'}`} />
            </button>
          </div>

          {/* Reduced Motion Setting */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-crimson/10 rounded-xl text-crimson">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wide">Reduced Motion</div>
                <div className="text-xs text-stefano-muted">Disable intense animations</div>
              </div>
            </div>
            <button
              onClick={() => setSettings({ ...settings, motion: !settings.motion })}
              className={`w-12 h-6 rounded-full transition-all relative ${settings.motion ? 'bg-crimson' : 'bg-white/10'}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${settings.motion ? 'left-7' : 'left-1'}`} />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-white/5 border-t border-white/5 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-crimson hover:bg-crimson-glow text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_0_15px_rgba(229,9,20,0.4)]"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { FireBackground } from './components/FireBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialCards } from './components/SocialCards';
import { AboutCard } from './components/AboutCard';
import { Footer } from './components/Footer';
import { SettingsModal } from './components/SettingsModal';
import { DetailModal } from './components/DetailModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [detailModal, setDetailModal] = useState<'about' | 'interests' | 'stats' | null>(null);
  const [settings, setSettings] = useState({
    music: false,
    effects: true,
    motion: true,
    volume: 50,
  });

  return (
    <div className="relative min-h-screen bg-bg-primary text-stefano-text selection:bg-crimson/30 overflow-x-hidden">
      <FireBackground effectsEnabled={settings.effects} reducedMotion={!settings.motion} />

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenModal={(type) => setDetailModal(type)}
      />

      <main className="relative z-10 w-full pt-16">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <Hero />
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end pt-12 lg:pt-32">
            <AboutCard onConnectClick={() => setDetailModal('about')} />
          </div>
        </div>

        <SocialCards />
        <Footer />
      </main>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        setSettings={setSettings}
      />
      <DetailModal
        type={detailModal}
        onClose={() => setDetailModal(null)}
      />
    </div>
  );
}

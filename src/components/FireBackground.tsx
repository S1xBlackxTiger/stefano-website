import React, { useEffect, useRef } from 'react';

interface FireBackgroundProps {
  effectsEnabled: boolean;
  reducedMotion: boolean;
}

export const FireBackground: React.FC<FireBackgroundProps> = ({ effectsEnabled, reducedMotion }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!effectsEnabled || reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      life: number;
      maxLife: number;
      color: string;
    }

    const particles: Particle[] = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: height + Math.random() * 200,
        size: Math.random() * 4 + 1,
        speedY: -(Math.random() * 2.2 + 0.8),
        speedX: (Math.random() - 0.5) * 1.2,
        opacity: Math.random() * 0.9 + 0.1,
        life: 0,
        maxLife: Math.random() * 250 + 100,
        color: Math.random() > 0.3 ? '#FF1A24' : '#E50914',
      });
    }

    let time = 0;

    const render = () => {
      time += 0.04;
      ctx.clearRect(0, 0, width, height);

      // Organic flickering crimson mist / fire glow waves near bottom
      const gradient = ctx.createRadialGradient(
        width * 0.5 + Math.sin(time * 0.5) * 50,
        height * 0.8 + Math.cos(time * 0.7) * 30,
        80,
        width * 0.5,
        height * 0.8,
        width * 0.8
      );
      const pulse = Math.sin(time * 2) * 0.12 + 0.35;
      gradient.addColorStop(0, `rgba(229, 9, 20, ${pulse})`);
      gradient.addColorStop(0.4, `rgba(121, 0, 8, ${pulse * 0.6})`);
      gradient.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render glowing embers & rising fire particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time * 1.5 + p.y * 0.02) * 0.8;
        p.life++;

        if (p.y < -20 || p.life > p.maxLife) {
          p.y = height + 20;
          p.x = Math.random() * width;
          p.life = 0;
          p.speedY = -(Math.random() * 2.2 + 0.8);
        }

        const currentOpacity = p.opacity * (1 - p.life / p.maxLife);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#FF1A24';
        ctx.globalAlpha = Math.max(0, currentOpacity);
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [effectsEnabled, reducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Dark Anime Background Image with breathing scale effect */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-[pulse_10s_ease-in-out_infinite] scale-105 transition-all duration-1000"
        style={{ backgroundImage: `url('/assets/dark-anime-bg.webp')` }}
      />
      {/* Cinematic dark overlays and red moon atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-crimson/15 via-transparent to-[#050505]" />

      {/* Canvas for animated rising fire & embers */}
      {effectsEnabled && !reducedMotion && (
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />
      )}
    </div>
  );
};

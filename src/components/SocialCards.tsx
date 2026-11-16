import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Play, Globe, Gamepad2, Heart, Share2 } from 'lucide-react';

interface SocialLink {
  id: string;
  name: string;
  subtitle: string;
  url: string;
  iconPath?: string;
  customImage?: string;
  accentColor: string;
  glowColor: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'discord',
    name: 'Discord',
    subtitle: 'Join My Server',
    url: 'https://discord.gg/dab9gvEp7K',
    customImage: '/assets/discord.png',
    accentColor: '#5865F2',
    glowColor: 'rgba(88, 101, 242, 0.4)',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    subtitle: 'Subscribe Now',
    url: 'https://www.youtube.com/@KICK_STEFANO',
    customImage: '/assets/youtube.png',
    accentColor: '#FF0000',
    glowColor: 'rgba(255, 0, 0, 0.4)',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    subtitle: 'Follow Me',
    url: 'https://www.instagram.com/mahmoud_____bakr/',
    customImage: '/assets/instagram.png',
    accentColor: '#E1306C',
    glowColor: 'rgba(225, 48, 108, 0.4)',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    subtitle: 'Watch My Videos',
    url: 'https://www.tiktok.com/@kickstefano',
    iconPath: '',
    customImage: '/assets/tiktok.png',
    accentColor: '#00F2FE',
    glowColor: 'rgba(0, 242, 254, 0.4)',
  },
  {
    id: 'steam',
    name: 'Steam',
    subtitle: 'Add Me',
    url: 'https://steamcommunity.com/profiles/76561198602286588/',
    customImage: '/assets/steam.png',
    accentColor: '#66c0f4',
    glowColor: 'rgba(102, 192, 244, 0.4)',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    subtitle: 'Chat With Me',
    url: 'https://wa.me/201033164841',
    iconPath: 'M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z',
    accentColor: '#25D366',
    glowColor: 'rgba(37, 211, 102, 0.4)',
  },
];

interface SocialCardsProps {
  onCardClick?: (name: string, url: string) => void;
}

export const SocialCards: React.FC<SocialCardsProps> = ({ onCardClick }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [transformStyles, setTransformStyles] = useState<{ [key: string]: string }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltX = (y / (rect.height / 2)) * -8;
    const tiltY = (x / (rect.width / 2)) * 8;

    setTransformStyles((prev) => ({
      ...prev,
      [id]: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`,
    }));
  };

  const handleMouseLeave = (id: string) => {
    setHoveredId(null);
    setTransformStyles((prev) => ({
      ...prev,
      [id]: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    }));
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SOCIAL_LINKS.map((link) => {
          const isHovered = hoveredId === link.id;

          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredId(link.id)}
              onMouseMove={(e) => handleMouseMove(e, link.id)}
              onMouseLeave={() => handleMouseLeave(link.id)}
              onClick={() => {
                if (onCardClick) {
                  onCardClick(link.name, link.url);
                }
              }}
              style={{
                transform: transformStyles[link.id] || 'none',
                transition: isHovered ? 'none' : 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              }}
              className="relative group block rounded-2xl bg-[#0c0c10]/80 backdrop-blur-xl border border-white/10 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.8)] overflow-hidden cursor-pointer"
            >
              {/* Glowing Corner Accents */}
              <div
                className="absolute top-0 right-0 w-12 h-12 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${link.glowColor}, transparent 70%)`,
                  opacity: isHovered ? 1 : 0.2,
                }}
              />

              {/* Highlight Line on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  border: `1px solid ${link.accentColor}`,
                  boxShadow: `0 0 20px ${link.glowColor}`,
                  borderRadius: '1rem',
                }}
              />

              <div className="relative z-10 flex items-center justify-between">
                {/* Left Side: Icon & Platform Info */}
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg overflow-hidden"
                    style={{
                      backgroundColor: `${link.accentColor}20`,
                      color: link.accentColor,
                      border: `1px solid ${link.accentColor}40`,
                    }}
                  >
                    {link.customImage ? (
                      <img src={link.customImage} alt={link.name} className="w-full h-full object-contain p-1.5" />
                    ) : (
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d={link.iconPath} />
                      </svg>
                    )}
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-lg text-white group-hover:text-white transition-colors">
                      {link.name}
                    </h4>
                    <p className="text-xs text-stefano-muted font-medium">{link.subtitle}</p>
                  </div>
                </div>

                {/* Right Side: Circular Arrow Button */}
                <div
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-stefano-muted transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:translate-x-1"
                >
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

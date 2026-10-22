import React from 'react';
import { MessageSquare, ExternalLink } from 'lucide-react';
import { BRAND_LOGO, STORE_INFO } from '../data/menuData';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#050b18]/95 backdrop-blur-md border-b-2 border-blue-900/50 shadow-lg shadow-black/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark with Transparent Logo Cutout & 3D Funky Typography */}
        <a
          href="#"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group"
          aria-label="Chubby Boyz Homepage"
        >
          <div className="relative w-12 h-12 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
            <img
              src={BRAND_LOGO}
              alt="Chubby Boyz Mascot"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(245,158,11,0.4)]"
            />
          </div>
          <span className="text-2xl sm:text-3xl font-funky tracking-normal leading-none select-none">
            <span className="text-3d-orange">CHUBBY</span>{' '}
            <span className="text-3d-blue">BOYZ</span>
          </span>
        </a>

        {/* Zone 2: 4-5 concise single-line text links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-lilita tracking-wide text-blue-100 uppercase">
          <a
            href="#menu"
            className="hover:text-amber-400 hover:scale-105 transition-all whitespace-nowrap shrink-0 drop-shadow-sm"
          >
            Menu
          </a>
          <a
            href="#events"
            className="text-amber-400 hover:text-amber-300 hover:scale-105 transition-all whitespace-nowrap shrink-0 drop-shadow-sm flex items-center gap-1.5"
          >
            <span>Game Nights &amp; Sports</span>
          </a>
          <a
            href="#story"
            className="hover:text-amber-400 hover:scale-105 transition-all whitespace-nowrap shrink-0 drop-shadow-sm"
          >
            Our Story
          </a>
          <a
            href="#location"
            className="hover:text-amber-400 hover:scale-105 transition-all whitespace-nowrap shrink-0 drop-shadow-sm"
          >
            Location &amp; Hours
          </a>
          <a
            href={STORE_INFO.uberEatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 hover:scale-105 transition-all whitespace-nowrap shrink-0 drop-shadow-sm flex items-center gap-1"
          >
            <span>Uber Eats</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Zone 3: Direct WhatsApp Action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hey%20Chubby%20Boyz!%20I'd%20like%20to%20book%20a%20table%20or%20place%20an%20order%20at%20289%20Fox%20Street.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-funky rounded-xl whitespace-nowrap shrink-0 btn-3d-gold uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
          >
            <MessageSquare className="w-4 h-4 text-stone-950 stroke-[3]" />
            <span className="hidden sm:inline">Book / Order via WhatsApp:</span>
            <span>076 294 5349</span>
          </a>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import { ArrowDown, Flame, Star, Sparkles, Gamepad2, MessageSquare } from 'lucide-react';
import { BRAND_LOGO, HERO_IMAGE, STORE_INFO } from '../data/menuData';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-24 border-b-2 border-blue-900/40 bg-gradient-to-b from-[#050b18] via-[#091533] to-[#050b18]">
      {/* Background Starry Neon Atmosphere */}
      <div className="absolute top-10 left-1/4 w-72 sm:w-80 h-72 sm:h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Swagger Kicker Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-blue-900/40 text-xs">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-amber-400 text-stone-950 font-funky text-[11px] sm:text-xs uppercase rounded-lg shadow-sm">
              Maboneng / Jeppestown
            </span>
            <span className="text-[11px] sm:text-xs font-lilita uppercase tracking-wider text-sky-300">
              289 Fox Street · Open Till Late
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-lilita text-amber-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>@chubbyboyz_za</span>
          </div>
        </div>

        {/* 2-Column Split: Swagger Hero Copy + Mascot Logo & Food Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Funky 3D Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* 3D Funky Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-funky tracking-tight leading-[1.12] [text-wrap:balance]">
              <span className="text-3d-orange">JUICY SMASH</span>
              <br />
              <span className="text-white text-3d-pop">BURGERS &amp; </span>
              <span className="text-3d-blue">LOADED KOTAS</span>
            </h1>

            {/* Subheading */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-blue-100 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Fresh off the flat-top at 289 Fox Street, Jeppestown! Pure smashed beef patties with crispy lacy skirts, loaded township kotas, babalaaz slap chips, and the giant Masala Tika Gatsby.
            </p>

            {/* CTA Buttons - Full width on phone, side-by-side on tablet/laptop */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-funky rounded-xl uppercase tracking-wider btn-3d-gold shadow-xl shadow-amber-500/20 active:scale-95 transition-transform"
              >
                <span>View Full Menu</span>
                <ArrowDown className="w-4 h-4 text-stone-950 stroke-[3]" />
              </button>

              <a
                href="#events"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-funky rounded-xl uppercase tracking-wider btn-3d-blue shadow-xl shadow-blue-500/20 active:scale-95 transition-transform"
              >
                <Gamepad2 className="w-4 h-4 text-white stroke-[2.5]" />
                <span>Game Nights &amp; Sports</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hey%20Chubby%20Boyz!%20I'd%20like%20to%20book%20a%20table%20at%20289%20Fox%20Street.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-funky rounded-xl uppercase tracking-wider btn-whatsapp-compact shadow-lg active:scale-95 transition-transform"
              >
                <MessageSquare className="w-4 h-4 text-white stroke-[2.5]" />
                <span>WhatsApp: 076 294 5349</span>
              </a>
            </div>

            {/* Proof and ratings */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-blue-900/40 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 text-xs font-lilita text-blue-200">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="font-mono-nums text-sm text-white">4.8★</span>
              </div>
              <span aria-hidden="true" className="text-blue-700">·</span>
              <span>140+ 5-Star Reviews</span>
              <span aria-hidden="true" className="text-blue-700">·</span>
              <span className="text-amber-400">Open Till Late Every Night</span>
            </div>
          </div>

          {/* Right Column: Mascot Logo Showcase + Food Photography */}
          <div className="lg:col-span-5 relative flex flex-col items-center mt-4 lg:mt-0">
            {/* Transparent Mascot Logo */}
            <div className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mb-[-28px] sm:mb-[-40px] z-20 hover:scale-105 transition-transform duration-300 filter drop-shadow-[0_8px_20px_rgba(245,158,11,0.35)]">
              <img
                src={BRAND_LOGO}
                alt="Chef Chubby Boyz Mascot"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Food Spread Card with Mascot Overlay */}
            <div className="w-full max-w-md sm:max-w-none relative rounded-3xl overflow-hidden border-2 border-blue-600/50 shadow-2xl bg-gradient-to-b from-blue-950 to-[#050b18] z-10 group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img
                  src={HERO_IMAGE}
                  alt="Chubby Boyz Feast"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent" />
              </div>

              <div className="p-3.5 sm:p-4 flex items-center justify-between text-xs font-lilita uppercase tracking-wide">
                <div className="flex items-center gap-2 text-white">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span className="truncate">Burgers · Kotas · Slap Chips</span>
                </div>
                <span className="text-amber-400 shrink-0 font-funky">289 Fox St</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Street Swagger Features Strip - Fully adaptive for mobile and laptop */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-blue-900/40 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <div className="p-3.5 sm:p-5 rounded-2xl bg-blue-950/60 border border-blue-800/40 shadow-lg">
            <div className="text-[10px] sm:text-xs font-funky text-amber-400 uppercase tracking-wider">The Flat-Top</div>
            <div className="text-base sm:text-xl font-funky text-white mt-0.5 sm:mt-1">100% SMASHED BEEF</div>
            <div className="text-[11px] sm:text-xs text-blue-200/70 mt-0.5 sm:mt-1 font-medium">From R 70.00 on brioche</div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-blue-950/60 border border-blue-800/40 shadow-lg">
            <div className="text-[10px] sm:text-xs font-funky text-amber-400 uppercase tracking-wider">Gatsby &amp; Kotas</div>
            <div className="text-base sm:text-xl font-funky text-white mt-0.5 sm:mt-1">MASALA TIKA SUB</div>
            <div className="text-[11px] sm:text-xs text-blue-200/70 mt-0.5 sm:mt-1 font-medium">R 350 loaf for the crew</div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-blue-950/60 border border-blue-800/40 shadow-lg">
            <div className="text-[10px] sm:text-xs font-funky text-amber-400 uppercase tracking-wider">Nightlife &amp; Games</div>
            <div className="text-base sm:text-xl font-funky text-white mt-0.5 sm:mt-1">OPEN TILL LATE</div>
            <div className="text-[11px] sm:text-xs text-blue-200/70 mt-0.5 sm:mt-1 font-medium">Hangover Tuesday nights</div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-blue-950/60 border border-blue-800/40 shadow-lg">
            <div className="text-[10px] sm:text-xs font-funky text-amber-400 uppercase tracking-wider">Bookings &amp; Orders</div>
            <div className="text-base sm:text-xl font-funky text-emerald-400 mt-0.5 sm:mt-1 font-mono-nums">076 294 5349</div>
            <div className="text-[11px] sm:text-xs text-blue-200/70 mt-0.5 sm:mt-1 font-medium">Instant WhatsApp bookings</div>
          </div>
        </div>
      </div>
    </section>
  );
};

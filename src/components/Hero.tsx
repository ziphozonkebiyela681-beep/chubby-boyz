import React from 'react';
import { ArrowDown, ExternalLink, Flame, MapPin, Star, Sparkles, Gamepad2, MessageSquare } from 'lucide-react';
import { BRAND_LOGO, HERO_IMAGE, STORE_INFO } from '../data/menuData';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b-2 border-blue-900/40 bg-gradient-to-b from-[#050b18] via-[#091533] to-[#050b18]">
      {/* Background Starry Neon Atmosphere */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Swagger Kicker Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-blue-900/40">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-amber-400 text-stone-950 font-funky text-xs uppercase rounded-lg shadow-sm">
              Jeppestown / Maboneng
            </span>
            <span className="text-xs font-lilita uppercase tracking-wider text-sky-300">
              289 Fox Street · Johannesburg · Open Till Late
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-lilita text-amber-400">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>@chubbyboyz_za on Instagram &amp; TikTok</span>
            </div>
          </div>
        </div>

        {/* 2-Column Split: Swagger Hero Copy + Giant Transparent Logo & Food Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Funky 3D Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* 3D Funky Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-funky tracking-tight leading-[1.08] [text-wrap:balance]">
              <span className="text-3d-orange">JUICY SMASH</span>
              <br />
              <span className="text-white text-3d-pop">BURGERS &amp; </span>
              <span className="text-3d-blue">LOADED KOTAS</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-base sm:text-xl text-blue-100 font-medium leading-relaxed max-w-2xl">
              Fresh off the flat-top at 289 Fox Street, Jeppestown! Pure smashed beef patties with lacy crispy skirts, township kotas, babalaaz slap chips, and the giant Masala Tika Beef Gatsby for your entire crew.
            </p>

            {/* Funky 3D CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-funky rounded-xl uppercase tracking-wider btn-3d-gold shadow-xl shadow-amber-500/20 whitespace-nowrap shrink-0"
              >
                <span>View Full Menu</span>
                <ArrowDown className="w-4 h-4 text-stone-950 stroke-[3]" />
              </button>

              <a
                href="#events"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-funky rounded-xl uppercase tracking-wider btn-3d-blue shadow-xl shadow-blue-500/20 whitespace-nowrap shrink-0"
              >
                <Gamepad2 className="w-4 h-4 text-white stroke-[2.5]" />
                <span>Hangover Tuesdays &amp; Sports</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hey%20Chubby%20Boyz!%20I'd%20like%20to%20book%20a%20table%20at%20289%20Fox%20Street.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-funky rounded-xl uppercase tracking-wider text-emerald-300 bg-emerald-950/70 border-2 border-emerald-500/50 hover:bg-emerald-900/70 transition-all whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Book Table: 076 294 5349</span>
              </a>
            </div>

            {/* Trust & Proof Adjacency */}
            <div className="mt-8 pt-6 border-t border-blue-900/40 flex flex-wrap items-center gap-4 text-xs font-lilita text-blue-200">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="font-mono-nums text-sm text-white">4.8★</span>
              </div>
              <span aria-hidden="true" className="text-blue-700">·</span>
              <span>140+ 5-Star Uber Eats &amp; Google Reviews</span>
              <span aria-hidden="true" className="text-blue-700">·</span>
              <span className="text-amber-400">Open Till Late Every Night</span>
            </div>
          </div>

          {/* Right Column: Transparent Mascot Logo Showcase + Food Photography */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Giant Transparent Mascot Logo without white background */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 mb-[-40px] z-20 hover:scale-105 transition-transform duration-300 filter drop-shadow-[0_12px_24px_rgba(245,158,11,0.35)]">
              <img
                src={BRAND_LOGO}
                alt="Chef Chubby Boyz Mascot"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Food Spread Card with Mascot Overlay */}
            <div className="w-full relative rounded-3xl overflow-hidden border-2 border-blue-600/50 shadow-2xl bg-gradient-to-b from-blue-950 to-[#050b18] z-10 group">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={HERO_IMAGE}
                  alt="Chubby Boyz Feast"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent" />
              </div>

              <div className="p-4 flex items-center justify-between text-xs font-lilita uppercase tracking-wide">
                <div className="flex items-center gap-2 text-white">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>The Chubby Feast: Burgers · Slap Chips · Combos</span>
                </div>
                <span className="text-amber-400">289 Fox St</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Street Swagger Features Strip */}
        <div className="mt-14 pt-8 border-t border-blue-900/40 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-blue-950/60 border border-blue-800/40 shadow-lg">
            <div className="text-xs font-funky text-amber-400 uppercase tracking-wider">The Flat-Top</div>
            <div className="text-xl font-funky text-white mt-1">100% SMASHED BEEF</div>
            <div className="text-xs text-blue-200/70 mt-1 font-medium">From R 70.00 on toasted brioche</div>
          </div>

          <div className="p-5 rounded-2xl bg-blue-950/60 border border-blue-800/40 shadow-lg">
            <div className="text-xs font-funky text-amber-400 uppercase tracking-wider">Gatsby &amp; Kotas</div>
            <div className="text-xl font-funky text-white mt-1">MASALA TIKA SUB</div>
            <div className="text-xs text-blue-200/70 mt-1 font-medium">Massive R 350 loaf for the crew</div>
          </div>

          <div className="p-5 rounded-2xl bg-blue-950/60 border border-blue-800/40 shadow-lg">
            <div className="text-xs font-funky text-amber-400 uppercase tracking-wider">Nightlife &amp; Games</div>
            <div className="text-xl font-funky text-white mt-1">OPEN TILL LATE</div>
            <div className="text-xs text-blue-200/70 mt-1 font-medium">Hangover Tuesday game nights</div>
          </div>

          <div className="p-5 rounded-2xl bg-blue-950/60 border border-blue-800/40 shadow-lg">
            <div className="text-xs font-funky text-amber-400 uppercase tracking-wider">Bookings &amp; Orders</div>
            <div className="text-xl font-funky text-white mt-1">076 294 5349</div>
            <div className="text-xs text-blue-200/70 mt-1 font-medium">Instant WhatsApp table bookings</div>
          </div>
        </div>
      </div>
    </section>
  );
};

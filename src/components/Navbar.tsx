import React, { useState, useEffect } from 'react';
import { MessageSquare, ExternalLink, Menu, X, Phone, MapPin } from 'lucide-react';
import { BRAND_LOGO, STORE_INFO } from '../data/menuData';
import { getUberEatsDeepLink, openUberEatsApp } from '../utils/uberEats';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#050b18]/95 backdrop-blur-md border-b border-blue-900/50 shadow-md shadow-black/30 transition-colors">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
          {/* Zone 1: Brand Wordmark with Transparent Logo Cutout & 3D Funky Typography */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 whitespace-nowrap shrink-0 group"
            aria-label="Chubby Boyz Homepage"
            onClick={closeMenu}
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
              <img
                src={BRAND_LOGO}
                alt="Chubby Boyz Mascot"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]"
              />
            </div>
            <span className="text-xl sm:text-2xl font-funky tracking-normal leading-none select-none">
              <span className="text-3d-orange">CHUBBY</span>{' '}
              <span className="text-3d-blue">BOYZ</span>
            </span>
          </a>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-lilita tracking-wide text-blue-100 uppercase">
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
              href={getUberEatsDeepLink()}
              onClick={openUberEatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 hover:scale-105 transition-all whitespace-nowrap shrink-0 drop-shadow-sm flex items-center gap-1.5"
            >
              <span>Uber Eats App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </nav>

          {/* Zone 3: Reduced Green WhatsApp Strip / Action + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Reduced Green WhatsApp Button */}
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hey%20Chubby%20Boyz!%20I'd%20like%20to%20book%20a%20table%20or%20place%20an%20order%20at%20289%20Fox%20Street.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-funky rounded-lg sm:rounded-xl whitespace-nowrap shrink-0 btn-whatsapp-compact uppercase tracking-wider active:scale-95 transition-all"
              title="Order or book via WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-white stroke-[2.5]" />
              <span className="hidden sm:inline">WhatsApp:</span>
              <span className="font-mono-nums font-bold">076 294 5349</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-blue-200 hover:text-white bg-blue-950/80 border border-blue-800/60 rounded-lg active:scale-95 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer for Phone Adaptation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#050b18]/98 backdrop-blur-xl animate-in fade-in duration-200">
          {/* Top header row of drawer */}
          <div className="h-16 px-4 flex items-center justify-between border-b border-blue-900/60">
            <div className="flex items-center gap-2.5">
              <img
                src={BRAND_LOGO}
                alt="Chubby Boyz"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-funky">
                <span className="text-3d-orange">CHUBBY</span>{' '}
                <span className="text-3d-blue">BOYZ</span>
              </span>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              className="p-2 text-blue-300 hover:text-white bg-blue-950 rounded-lg border border-blue-800"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-amber-400" />
            </button>
          </div>

          {/* Nav Links Stack for Phones */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
            <nav className="flex flex-col space-y-4 text-base font-funky tracking-wide uppercase">
              <a
                href="#menu"
                onClick={closeMenu}
                className="py-3 px-4 rounded-xl bg-blue-950/50 border border-blue-900/60 text-white hover:text-amber-400 hover:bg-blue-900/50 flex items-center justify-between transition-colors"
              >
                <span>The Chubby Menu</span>
                <span className="text-amber-400 text-xs">Burgers · Kotas</span>
              </a>

              <a
                href="#events"
                onClick={closeMenu}
                className="py-3 px-4 rounded-xl bg-blue-950/50 border border-blue-900/60 text-amber-400 hover:text-amber-300 hover:bg-blue-900/50 flex items-center justify-between transition-colors"
              >
                <span>Game Nights &amp; Live Sports</span>
                <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-md">Tue Nights</span>
              </a>

              <a
                href="#story"
                onClick={closeMenu}
                className="py-3 px-4 rounded-xl bg-blue-950/50 border border-blue-900/60 text-white hover:text-amber-400 hover:bg-blue-900/50 flex items-center justify-between transition-colors"
              >
                <span>Our Street Story</span>
                <span className="text-blue-400 text-xs">Maboneng</span>
              </a>

              <a
                href="#location"
                onClick={closeMenu}
                className="py-3 px-4 rounded-xl bg-blue-950/50 border border-blue-900/60 text-white hover:text-amber-400 hover:bg-blue-900/50 flex items-center justify-between transition-colors"
              >
                <span>Location &amp; Hours</span>
                <span className="text-emerald-400 text-xs">Open Late</span>
              </a>

              <a
                href={getUberEatsDeepLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  closeMenu();
                  openUberEatsApp(e);
                }}
                className="py-3 px-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold">Order on Uber Eats App</span>
                  <span className="text-[10px] font-funky px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    App
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </nav>

            {/* Quick Actions Footer inside Drawer */}
            <div className="pt-6 border-t border-blue-900/60 space-y-3">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hey%20Chubby%20Boyz!%20I'd%20like%20to%20book%20a%20table%20or%20place%20an%20order%20at%20289%20Fox%20Street.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 text-xs font-funky rounded-xl uppercase tracking-wider btn-whatsapp-compact flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: 076 294 5349</span>
              </a>

              <div className="flex items-center justify-between text-xs text-blue-300/80 px-1 pt-1 font-medium">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>289 Fox St, Jeppestown</span>
                </div>
                <div className="text-amber-400 font-funky">
                  <span>Open Till Late</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

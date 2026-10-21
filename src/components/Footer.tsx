import React from 'react';
import { MapPin, Phone, ExternalLink, MessageSquare } from 'lucide-react';
import { STORE_INFO, BRAND_LOGO } from '../data/menuData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030712] border-t-2 border-blue-900/50 py-12 text-xs text-blue-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-blue-900/40">
          {/* Brand Info with Transparent Logo */}
          <div className="md:col-span-2 space-y-4">
            <a
              href="#"
              className="flex items-center gap-3.5 group inline-flex"
              aria-label="Chubby Boyz"
            >
              <div className="w-12 h-12 filter drop-shadow-[0_4px_8px_rgba(245,158,11,0.4)] shrink-0">
                <img
                  src={BRAND_LOGO}
                  alt="Chubby Boyz Mascot"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-funky tracking-normal">
                <span className="text-3d-orange">CHUBBY</span>{' '}
                <span className="text-3d-blue">BOYZ</span>
              </span>
            </a>
            <p className="text-blue-200/70 text-xs max-w-sm leading-relaxed font-medium">
              Jeppestown &amp; Maboneng destination for crispy-lacy smash burgers, loaded township kotas, babalaaz slap chips, combos, and giant Masala Tika Gatsbys. Open till late!
            </p>
            <div className="flex items-center gap-2 text-blue-200/90 text-xs pt-1 font-medium">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{STORE_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200/90 text-xs font-medium">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>WhatsApp &amp; Bookings: </span>
              <a href={`tel:${STORE_INFO.phoneRaw}`} className="font-mono-nums font-bold text-amber-400 hover:underline">
                {STORE_INFO.phone}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 font-medium">
            <div className="text-xs font-funky text-white uppercase tracking-wider">
              Quick Links
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Our Menu &amp; Combos
                </a>
              </li>
              <li>
                <a href="#events" className="text-amber-400 hover:text-amber-300 font-bold transition-colors">
                  Hangover Tuesdays &amp; Sports
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-amber-400 transition-colors">
                  Our Street Story
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Location &amp; Hours
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & WhatsApp Bookings */}
          <div className="space-y-3 font-medium">
            <div className="text-xs font-funky text-white uppercase tracking-wider">
              Bookings &amp; Socials
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hey%20Chubby%20Boyz!%20I'd%20like%20to%20book%20a%20table.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-emerald-400 font-bold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Booking: 076 294 5349</span>
                </a>
              </li>
              <li>
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram: {STORE_INFO.instagram}</span>
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </a>
              </li>
              <li>
                <a
                  href={STORE_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>TikTok: {STORE_INFO.tiktok}</span>
                  <ExternalLink className="w-3 h-3 text-sky-400" />
                </a>
              </li>
              <li>
                <a
                  href={STORE_INFO.uberEatsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Uber Eats Delivery</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-2 text-amber-400 font-funky text-[11px] uppercase tracking-wider">
                <span>Open Till Late Every Day</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-blue-400/70 text-[11px] font-medium">
          <div>
            &copy; {new Date().getFullYear()} Chubby Boyz · 289 Fox Street, Jeppestown, Johannesburg. All rights reserved.
          </div>
          <div className="flex items-center gap-3 font-lilita uppercase tracking-wider">
            <span>Johannesburg, South Africa</span>
            <span aria-hidden="true" className="text-blue-800">·</span>
            <span className="text-amber-400">Street Food With Swagger</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

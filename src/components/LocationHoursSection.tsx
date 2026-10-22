import React, { useMemo } from 'react';
import { MapPin, Clock, Phone, ExternalLink, Navigation, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { STORE_INFO, BRAND_LOGO } from '../data/menuData';
import { getStoreStatus } from '../utils/storeHours';

export const LocationHoursSection: React.FC = () => {
  const storeStatus = useMemo(() => getStoreStatus(), []);

  return (
    <section id="location" className="py-16 lg:py-24 bg-[#081024] border-b-2 border-blue-900/40 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Location & Live Status */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-funky text-amber-400 tracking-wider uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Visit Us in Jeppestown / Maboneng</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-funky tracking-tight">
                <span className="text-3d-orange">LOCATION &amp;</span>{' '}
                <span className="text-3d-blue">HOURS</span>
              </h2>
              <p className="mt-2 text-blue-200/80 text-sm sm:text-base font-medium">
                Catch the smell of the grill right on Fox Street at the Maboneng Lifestyle Centre, steps from Arts on Main. Open till late!
              </p>
            </div>

            {/* Live Status Banner */}
            <div
              className={`p-4.5 rounded-2xl border-2 flex items-center justify-between gap-4 shadow-lg ${
                storeStatus.isOpen
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                  : 'bg-blue-950/60 border-blue-800/50 text-blue-200'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <span
                  className={`w-4 h-4 rounded-full ${
                    storeStatus.isOpen ? 'bg-emerald-400 shadow-md shadow-emerald-400/60' : 'bg-stone-500'
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <div className="text-xs font-funky uppercase tracking-wider">
                    {storeStatus.isOpen ? 'Kitchen Open & Grilling' : 'Kitchen Closed'}
                  </div>
                  <div className="text-xs text-blue-100 font-medium mt-0.5">Open 12:00 PM – Late Every Day</div>
                </div>
              </div>

              <div className="text-right text-xs text-blue-300 hidden sm:block font-lilita uppercase tracking-wider">
                <span>South Africa (SAST)</span>
              </div>
            </div>

            {/* Address & Quick Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-blue-950/70 border-2 border-blue-800/40 shadow-md">
                <MapPin className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs font-funky text-amber-400 uppercase tracking-wider">
                    Physical Address
                  </div>
                  <div className="text-base text-white font-bold">
                    {STORE_INFO.address}
                  </div>
                  <div className="text-xs text-blue-300/70 font-medium">
                    289 Fox Street, Jeppestown, Johannesburg, 2001
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-blue-950/70 border-2 border-blue-800/40 shadow-md">
                <Phone className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs font-funky text-amber-400 uppercase tracking-wider">
                    All Table Bookings &amp; Orders via WhatsApp
                  </div>
                  <div className="text-base text-white font-mono-nums font-bold">
                    {STORE_INFO.phone}
                  </div>
                  <div className="text-xs text-emerald-400 font-bold">
                    WhatsApp: 076 294 5349 · Make all bookings here!
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="p-4 rounded-2xl bg-blue-950/50 border border-blue-800/40 flex items-center justify-between text-xs">
                <span className="font-funky text-blue-200">Socials:</span>
                <div className="flex items-center gap-4">
                  <a
                    href={STORE_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-bold"
                  >
                    Instagram: {STORE_INFO.instagram}
                  </a>
                  <span className="text-blue-700">·</span>
                  <a
                    href={STORE_INFO.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 font-bold"
                  >
                    TikTok: {STORE_INFO.tiktok}
                  </a>
                </div>
              </div>
            </div>

            {/* Funky 3D Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href={STORE_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-funky uppercase tracking-wider btn-3d-gold rounded-xl shadow-lg whitespace-nowrap active:scale-95 transition-transform"
              >
                <Navigation className="w-4 h-4 text-stone-950 stroke-[3]" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hey%20Chubby%20Boyz!%20I'd%20like%20to%20book%20a%20table%20at%20289%20Fox%20Street.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-funky uppercase tracking-wider btn-whatsapp-compact rounded-xl shadow-lg whitespace-nowrap active:scale-95 transition-transform"
              >
                <MessageSquare className="w-4 h-4 text-white stroke-[2.5]" />
                <span>WhatsApp Booking: 076 294 5349</span>
              </a>
            </div>

            {/* Delivery Areas */}
            <div className="pt-4 border-t border-blue-900/40 text-xs font-lilita uppercase tracking-wide text-blue-300/80">
              <div className="text-white font-bold mb-2">Delivery Coverage via Uber Eats:</div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-blue-200/70">
                <span>Jeppestown</span>
                <span aria-hidden="true" className="text-blue-700">·</span>
                <span>Maboneng Precinct</span>
                <span aria-hidden="true" className="text-blue-700">·</span>
                <span>Johannesburg CBD</span>
                <span aria-hidden="true" className="text-blue-700">·</span>
                <span>Braamfontein</span>
                <span aria-hidden="true" className="text-blue-700">·</span>
                <span>Newtown</span>
                <span aria-hidden="true" className="text-blue-700">·</span>
                <span>Marshalltown</span>
              </div>
            </div>
          </div>

          {/* Right Column: Weekly Hours Table & Google Maps Frame */}
          <div className="lg:col-span-6 space-y-6">
            {/* Weekly Hours Table */}
            <div className="p-6 sm:p-7 rounded-3xl bg-blue-950/80 border-2 border-blue-800/50 shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2 text-base font-funky text-white">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span>Weekly Kitchen Hours</span>
                </div>
                {/* Transparent Mascot Thumbnail */}
                <div className="w-10 h-10 filter drop-shadow-[0_2px_6px_rgba(245,158,11,0.4)]">
                  <img
                    src={BRAND_LOGO}
                    alt="Logo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="divide-y divide-blue-900/40 text-xs font-medium">
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-blue-200">Monday</span>
                  <span className="font-mono-nums text-white font-semibold">12:00 PM – Late</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-amber-300 font-bold">Tuesday (Hangover Game Night!)</span>
                  <span className="font-mono-nums text-amber-400 font-bold">12:00 PM – Late</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-blue-200">Wednesday</span>
                  <span className="font-mono-nums text-white font-semibold">12:00 PM – Late</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-blue-200">Thursday</span>
                  <span className="font-mono-nums text-white font-semibold">12:00 PM – Late</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-amber-300 font-bold">Friday (Late Night Vibes)</span>
                  <span className="font-mono-nums text-amber-400 font-bold">12:00 PM – Late</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-amber-300 font-bold">Saturday (Market &amp; Match Day)</span>
                  <span className="font-mono-nums text-amber-400 font-bold">12:00 PM – Late</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-blue-200">Sunday (Brunch to Late)</span>
                  <span className="font-mono-nums text-white font-semibold">10:00 AM – Late</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-blue-900/40 flex items-center gap-2 text-[11px] text-blue-300/80 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>We stay open till late! Table bookings and pickup orders run via WhatsApp: 076 294 5349</span>
              </div>
            </div>

            {/* Embedded Google Maps Frame */}
            <div className="rounded-3xl overflow-hidden border-2 border-blue-800/60 bg-blue-950 shadow-xl">
              <div className="p-3.5 bg-blue-900/60 border-b border-blue-800/50 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-blue-100 font-lilita uppercase tracking-wide">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-bold text-white">289 Fox St, Jeppestown</span>
                </div>
                <a
                  href={STORE_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-funky uppercase tracking-wider text-[11px]"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative h-60 w-full bg-blue-950">
                <iframe
                  title="Chubby Boyz 289 Fox Street Jeppestown Location"
                  src="https://maps.google.com/maps?q=289+Fox+Street,+Jeppestown,+Johannesburg,+2001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

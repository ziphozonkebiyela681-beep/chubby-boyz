import React, { useState } from 'react';
import { Flame, Heart, Sparkles, Trophy, MapPin, Zap, Lamp, MessageSquare, CheckCircle2, Eye } from 'lucide-react';
import { BRAND_LOGO, CHUBBY_BOYZ_INTERIOR_IMAGE, CHUBBY_BOYZ_EXTERIOR_IMAGE, STORE_INFO } from '../data/menuData';

export const StorySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<'exterior' | 'interior'>('exterior');

  return (
    <section id="story" className="py-16 lg:py-24 bg-[#050b18] border-b-2 border-blue-900/40 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Funky Brand Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-funky text-amber-400 tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>The Chubby Boyz Culture · 289 Fox Street</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-funky tracking-tight leading-tight [text-wrap:balance]">
              <span className="text-3d-orange">BIG PORTIONS,</span>
              <br />
              <span className="text-white text-3d-pop">HEAVY DRIP &amp; </span>
              <span className="text-3d-blue">JOZI FLAVOUR!</span>
            </h2>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed font-medium">
              Maboneng is Johannesburg’s pulsing capital of street style, live beats, and Sunday markets. At <span className="text-amber-400 font-bold">Chubby Boyz</span>, we don’t do small portions or boring flavors. We brought together high-energy hip-hop streetwear culture with South Africa's most legendary comfort foods.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-blue-950/70 border-2 border-blue-800/40 space-y-2 shadow-lg">
                <div className="flex items-center gap-2 text-amber-400 font-funky text-base">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>The Searing Smash</span>
                </div>
                <p className="text-xs text-blue-200/80 leading-relaxed font-medium">
                  We smash pure beef hard on a screaming hot flat-top. The result? Ultra-crispy lacy edges, molten cheddar, and our secret burger sauce on pillowy brioche.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-blue-950/70 border-2 border-blue-800/40 space-y-2 shadow-lg">
                <div className="flex items-center gap-2 text-sky-400 font-funky text-base">
                  <Heart className="w-4 h-4 text-sky-400" />
                  <span>The Loaded Kota Tradition</span>
                </div>
                <p className="text-xs text-blue-200/80 leading-relaxed font-medium">
                  We treat the township kota like royalty. Fresh quarter-loaves hollowed and packed with hot slap chips, grilled russian, fried egg, double cheese, and spicy Jozi atchar.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-blue-900/40 flex flex-wrap items-center gap-6 text-xs font-lilita uppercase tracking-wider text-blue-300">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Zero frozen patties</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Real vinegar slap chips</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Maboneng late-night staple</span>
              </div>
            </div>
          </div>

          {/* Right Column: Transparent Mascot Showcase Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-600/50 bg-gradient-to-b from-[#0b1736] via-[#091533] to-[#050b18] p-8 shadow-2xl text-center">
              {/* Die-Cut Mascot without white background */}
              <div className="w-56 h-56 mx-auto filter drop-shadow-[0_8px_20px_rgba(245,158,11,0.4)] hover:scale-105 transition-transform duration-300">
                <img
                  src={BRAND_LOGO}
                  alt="Chef Chubby Boyz Mascot"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-6 space-y-2">
                <div className="text-xs font-funky text-amber-400 uppercase tracking-widest">
                  Chef Chubby · The Big Boss
                </div>
                <h3 className="text-2xl font-funky text-white leading-tight">
                  &quot;IF IT AIN&apos;T MESSY, IT AIN&apos;T CHUBBY!&quot;
                </h3>
                <p className="text-xs text-blue-200/80 max-w-sm mx-auto font-medium leading-relaxed">
                  Chef hat, black shades, gold dollar pendant. Serving up authentic street food with personality and heavyweight portions.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-blue-900/50 flex items-center justify-around">
                <div>
                  <div className="text-2xl font-funky text-amber-400 font-mono-nums">4.8★</div>
                  <div className="text-[10px] font-lilita uppercase tracking-wider text-blue-300">Uber Eats</div>
                </div>
                <div className="w-px h-8 bg-blue-800" />
                <div>
                  <div className="text-2xl font-funky text-sky-400 font-mono-nums">100%</div>
                  <div className="text-[10px] font-lilita uppercase tracking-wider text-blue-300">Smashed Fresh</div>
                </div>
                <div className="w-px h-8 bg-blue-800" />
                <div>
                  <div className="text-2xl font-funky text-amber-400 font-mono-nums">289</div>
                  <div className="text-[10px] font-lilita uppercase tracking-wider text-blue-300">Fox Street</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Authentic Restaurant Exterior & Interior Showcase */}
        <div className="mt-16 sm:mt-24 rounded-3xl bg-blue-950/40 border-2 border-amber-400/40 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Interactive Photo Frame (Outside & Inside Views) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* Photo View Selector Tabs */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-blue-900/60 border border-blue-700/60 mb-4 w-full max-w-sm shadow-inner">
                <button
                  type="button"
                  onClick={() => setActivePhoto('exterior')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-funky uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                    activePhoto === 'exterior'
                      ? 'bg-amber-400 text-stone-950 shadow-md font-bold'
                      : 'text-blue-200 hover:text-white hover:bg-blue-800/40'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Outside Storefront</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhoto('interior')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-funky uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                    activePhoto === 'interior'
                      ? 'bg-amber-400 text-stone-950 shadow-md font-bold'
                      : 'text-blue-200 hover:text-white hover:bg-blue-800/40'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Inside Dine-In</span>
                </button>
              </div>

              {/* Display Image Card */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-2xl w-full max-w-sm group">
                {activePhoto === 'exterior' ? (
                  <img
                    src={CHUBBY_BOYZ_EXTERIOR_IMAGE}
                    alt="Authentic Chubby Boyz Storefront Exterior at 289 Fox Street Jeppestown Maboneng at night with glowing circular logo sign and wide glass entrance"
                    referrerPolicy="no-referrer"
                    className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                ) : (
                  <img
                    src={CHUBBY_BOYZ_INTERIOR_IMAGE}
                    alt="Authentic Chubby Boyz Interior at 289 Fox Street Jeppestown featuring channel-tufted leather booth seating, timber tables, and geometric chandeliers"
                    referrerPolicy="no-referrer"
                    className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/85 border border-amber-400/60 text-[11px] font-funky text-amber-400 backdrop-blur-md uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    {activePhoto === 'exterior'
                      ? 'Fox Street Storefront'
                      : 'Dine-In Lounge Interior'}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-blue-950/90 border border-blue-700/60 backdrop-blur-md">
                  <div className="font-funky text-white text-sm flex items-center justify-between">
                    <span className="text-amber-400">
                      {activePhoto === 'exterior'
                        ? '289 Fox Street Storefront'
                        : 'Chubby Boyz Dine-In'}
                    </span>
                    <span className="text-xs text-blue-200">Maboneng Precinct</span>
                  </div>
                  <p className="text-[11px] text-blue-200/90 mt-1 font-medium">
                    {activePhoto === 'exterior'
                      ? 'Spot our glowing circular Chubby Boyz logo sign, wide glass entrance, and timber steps on Fox Street.'
                      : 'Channel-tufted cream booths, timber crew tables, charging ports & ambient Edison chandeliers.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Space Architecture & Comfort Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs font-funky text-amber-400 uppercase tracking-widest">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>The 289 Fox Street Atmosphere</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-funky text-white leading-tight">
                BUILT FOR CREWS, <span className="text-amber-400">COMFORT</span> &amp; <span className="text-sky-400">LATE NIGHTS</span>
              </h3>

              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-medium">
                Step off Fox Street into our modern urban dining room. We curated an atmosphere that blends sleek Johannesburg aesthetic with warm, unpretentious dining comfort. Whether you are popping in for a quick solo lunch or gathering ten friends for a Tuesday game night, every corner is designed for good times.
              </p>

              {/* Four Detail Cards based directly on real furniture */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-2xl bg-blue-900/30 border border-blue-800/50 space-y-1.5">
                  <div className="flex items-center gap-2 font-funky text-amber-400 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Plush Tufted Banquette</span>
                  </div>
                  <p className="text-xs text-blue-200/80 leading-relaxed font-medium">
                    Continuous ivory ribbed leather booth seating spanning the black panelled wall for ultimate lounge comfort.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-900/30 border border-blue-800/50 space-y-1.5">
                  <div className="flex items-center gap-2 font-funky text-amber-400 text-sm">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>In-Booth Phone Charging</span>
                  </div>
                  <p className="text-xs text-blue-200/80 leading-relaxed font-medium">
                    Integrated wall charging ports right at the booths so your battery stays full all night while you game and feast.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-900/30 border border-blue-800/50 space-y-1.5">
                  <div className="flex items-center gap-2 font-funky text-sky-400 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Honey Timber Tables</span>
                  </div>
                  <p className="text-xs text-blue-200/80 leading-relaxed font-medium">
                    Generous solid wooden tables with black steel pedestal bases, paired with stylish heather grey bucket chairs.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-900/30 border border-blue-800/50 space-y-1.5">
                  <div className="flex items-center gap-2 font-funky text-sky-400 text-sm">
                    <Lamp className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Edison Geometric Lighting</span>
                  </div>
                  <p className="text-xs text-blue-200/80 leading-relaxed font-medium">
                    Faceted wire-cage pendants, recessed tray downlights, and warm neon lighting creating an intimate urban evening glow.
                  </p>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hey%20Chubby%20Boyz!%20I%20love%20the%20interior%20setup%20and%20want%20to%20reserve%20a%20table%20at%20289%20Fox%20Street.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-funky uppercase tracking-wider btn-whatsapp-compact rounded-xl shadow-lg active:scale-95 transition-transform"
                >
                  <MessageSquare className="w-4 h-4 text-white stroke-[2.5]" />
                  <span>Reserve Table · WhatsApp: 076 294 5349</span>
                </a>

                <span className="text-xs text-blue-300 font-medium">
                  Open 12:00 PM – Late Every Day · Walk-ins Always Welcome
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

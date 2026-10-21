import React from 'react';
import { Flame, Heart, Sparkles, Trophy } from 'lucide-react';
import { BRAND_LOGO } from '../data/menuData';

export const StorySection: React.FC = () => {
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
                  "IF IT AIN'T MESSY, IT AIN'T CHUBBY!"
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
      </div>
    </section>
  );
};

import React from 'react';
import { Star, MessageSquareQuote, ExternalLink, Sparkles } from 'lucide-react';
import { REVIEWS, STORE_INFO, BRAND_LOGO } from '../data/menuData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#050b18] border-b-2 border-blue-900/40 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-blue-900/40">
          <div>
            <div className="flex items-center gap-2 text-xs font-funky text-amber-400 tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Verified Customer Love</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-funky tracking-tight">
              <span className="text-3d-orange">LOVED ACROSS</span>{' '}
              <span className="text-3d-blue">JOZI &amp; MABONENG</span>
            </h2>
            <p className="mt-2 text-blue-200/80 text-sm sm:text-base max-w-xl font-medium">
              Real talk from late-night Fox Street regulars and foodies ordering on Uber Eats.
            </p>
          </div>

          <div className="flex items-center gap-4 p-4.5 rounded-2xl bg-blue-950/80 border-2 border-blue-800/50 shadow-lg">
            <div className="flex items-center gap-2 text-amber-400">
              <Star className="w-6 h-6 fill-amber-400 stroke-amber-500" />
              <span className="text-3xl font-funky font-mono-nums text-white">4.8</span>
            </div>
            <div className="text-xs border-l-2 border-blue-800/70 pl-3.5">
              <div className="text-white font-funky uppercase tracking-wider">Uber Eats Certified</div>
              <div className="text-blue-300 font-medium">Over 140+ orders delivered</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-blue-950/70 to-blue-950/30 border-2 border-blue-800/40 flex flex-col justify-between hover:border-amber-400/50 transition-colors shadow-xl"
            >
              <div>
                {/* Stars + date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs text-blue-300/80 font-lilita uppercase tracking-wider">{review.date}</span>
                </div>

                <p className="text-sm text-blue-100 leading-relaxed font-medium italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-900/40 flex items-center justify-between text-xs">
                <div>
                  <div className="font-funky text-white text-sm">{review.author}</div>
                  <div className="text-blue-300/70 mt-0.5 font-medium">{review.location}</div>
                </div>
                <MessageSquareQuote className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner with Transparent Mascot */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-[#0e2154] to-blue-950 border-2 border-blue-600/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 filter drop-shadow-[0_4px_10px_rgba(245,158,11,0.5)] shrink-0">
              <img
                src={BRAND_LOGO}
                alt="Chef Chubby Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-funky text-white">
                TRIED CHUBBY BOYZ AT 289 FOX STREET?
              </h3>
              <p className="text-xs text-blue-200/80 mt-1 font-medium">
                Drop your rating on Uber Eats or Google Maps and show some love to your local Maboneng crew.
              </p>
            </div>
          </div>

          <a
            href={STORE_INFO.uberEatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-funky uppercase tracking-wider btn-3d-gold rounded-xl shadow-lg shrink-0 whitespace-nowrap"
          >
            <span>Review on Uber Eats</span>
            <ExternalLink className="w-4 h-4 text-stone-950 stroke-[3]" />
          </a>
        </div>
      </div>
    </section>
  );
};

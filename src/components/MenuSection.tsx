import React, { useState, useMemo } from 'react';
import {
  Search,
  MessageSquare,
  SlidersHorizontal,
  Flame,
  UtensilsCrossed,
  ExternalLink,
  Sparkles,
  ChevronRight,
  Info,
} from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, STORE_INFO, HERO_IMAGE } from '../data/menuData';

const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'burgers', label: 'Smash Burgers' },
  { id: 'combos', label: 'Combos' },
  { id: 'gatsby', label: 'Gatsby Sub' },
  { id: 'kotas', label: 'Kotas' },
  { id: 'wings', label: 'Wings' },
  { id: 'chips', label: 'Fries & Slap Chips' },
  { id: 'drinks', label: 'Beverages' },
] as const;

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSpice, setSelectedSpice] = useState<string>('all');
  const [selectedItemForDetails, setSelectedItemForDetails] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      if (activeCategory === 'drinks') {
        if (item.category !== 'drinks' && item.category !== 'dips') return false;
      } else if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Spice filter
      if (selectedSpice !== 'all') {
        if (selectedSpice === 'spicy' && item.spiceLevel !== 'Spicy' && item.spiceLevel !== 'Fiery') {
          return false;
        }
        if (selectedSpice === 'mild' && item.spiceLevel !== 'None' && item.spiceLevel !== 'Mild') {
          return false;
        }
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesTags) return false;
      }

      return true;
    });
  }, [activeCategory, searchQuery, selectedSpice]);

  const handleOrderWhatsApp = (item: MenuItem, extraNotes?: string) => {
    let msg = `*ORDER REQUEST - CHUBBY BOYZ (289 Fox St, Jeppestown)*\n\n`;
    msg += `I'd like to order:\n`;
    msg += `• *${item.name}* — R${item.price.toFixed(2)}\n`;
    if (extraNotes) {
      msg += `• Notes / Extras: ${extraNotes}\n`;
    }
    msg += `\nPlease confirm preparation time and payment details!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="menu" className="py-16 lg:py-24 bg-[#081024] border-b-2 border-blue-900/40 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with 3D Funky Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-blue-900/40">
          <div>
            <div className="flex items-center gap-2 text-xs font-funky text-amber-400 tracking-wider uppercase mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Official 289 Fox Street In-Store &amp; Uber Eats Menu · Every Item Pictured</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-funky tracking-tight">
              <span className="text-3d-orange">THE CHUBBY</span>{' '}
              <span className="text-3d-blue">MENU</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-blue-200/80 max-w-xl font-medium">
              Smashed fresh at 289 Fox Street, Jeppestown. Smashed burgers from R70, loaded kotas, sticky wings, combos, and the legendary Masala Tika Beef Gatsby! Order via WhatsApp or Uber Eats.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hey%20Chubby%20Boyz!%20I'd%20like%20to%20place%20an%20order%20for%20collection/delivery.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 text-xs font-funky uppercase tracking-wider btn-whatsapp-compact rounded-xl shadow-lg shrink-0"
            >
              <MessageSquare className="w-4 h-4 text-white stroke-[2.5]" />
              <span>WhatsApp Order: 076 294 5349</span>
            </a>

            <a
              href={STORE_INFO.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 text-xs font-funky uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-all rounded-xl border-b-2 sm:border-b-4 border-emerald-800 shadow-lg shadow-emerald-950/50 shrink-0"
            >
              <span>Scan on Uber Eats</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Filter Controls Row: Funky Segmented Buttons + Search */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Tabs: Funky 3D Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-funky uppercase tracking-wider whitespace-nowrap transition-all border-2 active:scale-95 ${
                    isActive
                      ? 'bg-amber-400 text-stone-950 border-amber-300 shadow-md shadow-amber-500/30'
                      : 'bg-blue-950 text-blue-200 border-blue-800/60 hover:bg-blue-900/80 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search + Spice filter */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-blue-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search burger, kota, gatsby..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-blue-950 border-2 border-blue-800 rounded-xl text-white placeholder-blue-400/50 focus:outline-none focus:border-amber-400 font-medium"
              />
            </div>

            <div className="flex items-center gap-1 bg-blue-950 border-2 border-blue-800 rounded-xl p-1">
              <button
                type="button"
                onClick={() => setSelectedSpice('all')}
                className={`px-2.5 py-1 text-xs font-funky rounded-lg transition-colors ${
                  selectedSpice === 'all' ? 'bg-blue-700 text-white' : 'text-blue-300 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setSelectedSpice('spicy')}
                className={`px-2.5 py-1 text-xs font-funky rounded-lg flex items-center gap-1 transition-colors ${
                  selectedSpice === 'spicy' ? 'bg-rose-600 text-white' : 'text-rose-400 hover:text-white'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Spicy</span>
              </button>
            </div>
          </div>
        </div>

        {/* Item Counter */}
        <div className="mt-4 flex items-center justify-between text-xs text-blue-300/80 font-medium">
          <span>Showing {filteredItems.length} items from 289 Fox Street</span>
          <span className="text-amber-400 font-funky">Open Till Late · Direct WhatsApp Orders</span>
        </div>

        {/* Menu Grid - High Visual Density with Photos for Each Item */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-[#0b1736] to-[#071026] border-2 border-blue-800/40 hover:border-amber-400/60 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-blue-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('hero_chubbyz_food')) {
                        target.src = HERO_IMAGE;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1736] via-transparent to-transparent opacity-60" />

                  {/* Spice Badge */}
                  {item.spiceLevel && item.spiceLevel !== 'None' && (
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-xl bg-stone-950/85 backdrop-blur-md border border-rose-500/40 text-[10px] font-funky text-rose-400 flex items-center gap-1 shadow-md">
                      <Flame className="w-3 h-3 text-rose-400 fill-rose-400" />
                      <span>{item.spiceLevel}</span>
                    </div>
                  )}

                  {/* Popular Tag */}
                  {item.isPopular && (
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-xl bg-amber-400 text-stone-950 font-funky text-[10px] uppercase shadow-md">
                      ★ Chubby Favorite
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Label */}
                    <div className="flex items-center gap-1.5 text-[11px] font-lilita text-blue-300 mb-1 uppercase tracking-wider">
                      <span className="text-amber-400">{item.categoryLabel}</span>
                      {item.isPopular && (
                        <>
                          <span aria-hidden="true" className="text-blue-600">·</span>
                          <span className="text-sky-300">Top Seller</span>
                        </>
                      )}
                    </div>

                    {/* Funky Title */}
                    <h3 className="text-xl font-funky text-white group-hover:text-amber-300 transition-colors leading-tight">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs text-blue-100/80 line-clamp-3 leading-relaxed font-medium">
                      {item.description}
                    </p>

                    {/* Ingredient tags */}
                    <div className="mt-3 flex flex-wrap items-center gap-1 text-[11px] text-blue-300/60 font-semibold">
                      {item.tags.slice(0, 3).map((tag, idx) => (
                        <React.Fragment key={tag}>
                          {idx > 0 && <span aria-hidden="true" className="text-blue-700">·</span>}
                          <span>{tag}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="mt-6 pt-4 border-t border-blue-900/40 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[10px] text-blue-300/70 uppercase tracking-wider font-lilita">
                        Price
                      </div>
                      <div className="text-2xl font-funky text-amber-400 font-mono-nums">
                        R {item.price.toFixed(2)}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Direct WhatsApp Order Button */}
                      <button
                        type="button"
                        onClick={() => handleOrderWhatsApp(item)}
                        className="px-3.5 py-2.5 text-xs font-funky uppercase tracking-wider btn-whatsapp-compact rounded-xl flex items-center gap-1.5 shadow-md active:scale-95 transition-transform"
                        title="Order this item on WhatsApp"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                        <span>Order</span>
                      </button>

                      {/* Info / Customizer button */}
                      <button
                        type="button"
                        onClick={() => setSelectedItemForDetails(item)}
                        className="p-2.5 text-xs text-blue-300 bg-blue-900/60 hover:bg-blue-800 border border-blue-700/50 rounded-xl transition-colors"
                        title="View ingredients and add-ons"
                      >
                        <Info className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for viewing item details and extras to order on WhatsApp */}
        {selectedItemForDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <div className="relative w-full max-w-lg bg-[#0b1736] border-2 border-amber-400/60 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 border border-blue-700/50">
                <img
                  src={selectedItemForDetails.image}
                  alt={selectedItemForDetails.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 px-3 py-1 rounded-lg bg-black/80 font-funky text-amber-400 text-lg">
                  R {selectedItemForDetails.price.toFixed(2)}
                </div>
              </div>

              <div className="text-xs font-funky text-amber-400 uppercase tracking-widest">
                {selectedItemForDetails.categoryLabel}
              </div>
              <h3 className="text-2xl font-funky text-white mt-1">
                {selectedItemForDetails.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-blue-200/90 leading-relaxed font-medium">
                {selectedItemForDetails.description}
              </p>

              {selectedItemForDetails.availableAddons && selectedItemForDetails.availableAddons.length > 0 && (
                <div className="mt-4">
                  <div className="text-xs font-funky text-blue-200 uppercase tracking-wider mb-2">
                    Available Add-ons &amp; Extras:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-blue-300">
                    {selectedItemForDetails.availableAddons.map((addon) => (
                      <div key={addon.name} className="p-2 rounded-xl bg-blue-950/80 border border-blue-800/50 flex justify-between">
                        <span>{addon.name}</span>
                        <span className="text-amber-400 font-bold">+R{addon.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedItemForDetails(null)}
                  className="flex-1 py-3 px-4 text-xs font-funky uppercase tracking-wider bg-blue-900/60 hover:bg-blue-800 text-white rounded-xl border border-blue-700/60"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleOrderWhatsApp(selectedItemForDetails);
                    setSelectedItemForDetails(null);
                  }}
                  className="flex-1 py-3 px-4 text-xs font-funky uppercase tracking-wider btn-3d-gold rounded-xl flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 text-stone-950 stroke-[3]" />
                  <span>Send to WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

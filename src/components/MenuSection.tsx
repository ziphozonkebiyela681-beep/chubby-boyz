import React, { useState, useMemo } from 'react';
import { Search, Plus, SlidersHorizontal, Flame, UtensilsCrossed, ExternalLink, Check, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, STORE_INFO } from '../data/menuData';

interface MenuSectionProps {
  onSelectItemForCustomization: (item: MenuItem) => void;
  onQuickAddToCart: (item: MenuItem) => void;
  recentlyAddedId: string | null;
}

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

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItemForCustomization,
  onQuickAddToCart,
  recentlyAddedId,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSpice, setSelectedSpice] = useState<string>('all');

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
              Smashed fresh at 289 Fox Street, Jeppestown. Smashed burgers from R70, loaded kotas, sticky wings, combos, and the legendary Masala Tika Beef Gatsby!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={STORE_INFO.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-funky uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-all rounded-xl border-b-4 border-emerald-800 shadow-lg shadow-emerald-950/50 shrink-0"
            >
              <span>Scan Live on Uber Eats</span>
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
                  className={`px-4 py-2.5 text-xs font-funky uppercase tracking-wider rounded-xl whitespace-nowrap shrink-0 transition-all ${
                    isActive
                      ? 'btn-3d-gold'
                      : 'text-blue-100 hover:text-white bg-blue-950/80 hover:bg-blue-900 border-2 border-blue-800/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar + Spice Filter */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 sm:w-72">
              <Search className="w-4 h-4 text-blue-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search burgers, kotas, chips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs text-white bg-blue-950/90 border-2 border-blue-800/70 rounded-xl placeholder-blue-300/40 focus:outline-none focus:border-amber-400 font-medium transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 hover:text-white text-xs font-funky"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-1 bg-blue-950 border-2 border-blue-800/50 rounded-xl p-1 font-funky text-[11px]">
              <button
                type="button"
                onClick={() => setSelectedSpice('all')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  selectedSpice === 'all' ? 'bg-blue-700 text-white' : 'text-blue-300 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setSelectedSpice('mild')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  selectedSpice === 'mild' ? 'bg-blue-700 text-white' : 'text-blue-300 hover:text-white'
                }`}
              >
                Mild
              </button>
              <button
                type="button"
                onClick={() => setSelectedSpice('spicy')}
                className={`px-3 py-1 rounded-lg transition-colors flex items-center gap-1 ${
                  selectedSpice === 'spicy' ? 'bg-amber-400 text-stone-950' : 'text-blue-300 hover:text-white'
                }`}
              >
                <Flame className="w-3 h-3 text-amber-400" />
                Spicy
              </button>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="mt-6 flex items-center justify-between text-xs font-lilita uppercase tracking-wider text-blue-300/70">
          <span>
            Showing <span className="font-mono-nums text-amber-400 font-bold">{filteredItems.length}</span> signature dishes
          </span>
          <span>Prices in South African Rand (ZAR / R)</span>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="mt-12 py-16 text-center border-2 border-dashed border-blue-800 rounded-3xl bg-blue-950/40">
            <UtensilsCrossed className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <h3 className="text-xl font-funky text-white">No items found</h3>
            <p className="mt-1 text-xs text-blue-200/70 font-medium">
              Try adjusting your search query or switching categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSelectedSpice('all');
              }}
              className="mt-4 px-5 py-2 text-xs font-funky uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Menu Grid - EVERY ITEM HAS AN IMAGE & FUNKY CARD STYLING */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const hasCustomizations =
              (item.availableAddons && item.availableAddons.length > 0) ||
              (item.sizes && item.sizes.length > 0);
            const isJustAdded = recentlyAddedId === item.id;

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between bg-gradient-to-b from-[#0b1736] to-[#071026] border-2 border-blue-800/40 rounded-3xl overflow-hidden hover:border-amber-400/60 hover:shadow-2xl hover:shadow-blue-950/70 transition-all duration-300 group"
              >
                {/* Product Media */}
                <div className="relative h-56 w-full bg-blue-950 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />

                  {/* Contrast gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1736] via-[#0b1736]/20 to-transparent pointer-events-none" />

                  {/* Spice indicator */}
                  {item.spiceLevel && item.spiceLevel !== 'None' && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-blue-950/90 backdrop-blur-md rounded-xl text-xs font-funky text-amber-400 flex items-center gap-1 border border-amber-400/40 shadow-md">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.spiceLevel}</span>
                    </div>
                  )}

                  {/* Mascot Favorite Badge */}
                  {item.isPopular && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-amber-400 text-stone-950 font-funky text-[11px] rounded-xl shadow-md uppercase tracking-wider">
                      ★ Chubby Favorite
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed category metadata with separators */}
                    <div className="flex items-center gap-1.5 text-[11px] font-lilita text-blue-300 mb-1 uppercase tracking-wider">
                      <span className="text-amber-400">{item.categoryLabel}</span>
                      {item.isPopular && (
                        <>
                          <span aria-hidden="true" className="text-blue-600">·</span>
                          <span className="text-sky-300">Top Seller</span>
                        </>
                      )}
                      {item.sizes && item.sizes.length > 0 && (
                        <>
                          <span aria-hidden="true" className="text-blue-600">·</span>
                          <span className="text-blue-200">Sizes</span>
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
                  <div className="mt-6 pt-4 border-t border-blue-900/40 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] text-blue-300/70 uppercase tracking-wider font-lilita">
                        {item.sizes && item.sizes.length > 0 ? 'From' : 'Price'}
                      </div>
                      <div className="text-2xl font-funky text-amber-400 font-mono-nums">
                        R {item.price.toFixed(2)}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {hasCustomizations ? (
                        <button
                          type="button"
                          onClick={() => onSelectItemForCustomization(item)}
                          className="px-4 py-2.5 text-xs font-funky uppercase tracking-wider text-white bg-blue-900 hover:bg-blue-800 active:scale-95 transition-all rounded-xl border-b-4 border-blue-950 flex items-center gap-1.5 shadow-md"
                        >
                          <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                          <span>Customize</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onQuickAddToCart(item)}
                          className={`px-5 py-2.5 text-xs font-funky uppercase tracking-wider rounded-xl active:scale-95 transition-all flex items-center gap-1.5 shadow-md ${
                            isJustAdded
                              ? 'bg-emerald-500 text-stone-950 border-b-4 border-emerald-700 font-black'
                              : 'btn-3d-gold'
                          }`}
                        >
                          {isJustAdded ? (
                            <>
                              <Check className="w-4 h-4 stroke-[3]" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-4 h-4 stroke-[3]" />
                              <span>Add to Bag</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

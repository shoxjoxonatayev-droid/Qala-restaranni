import React, { useState, useMemo } from 'react';
import { MenuCategoryKey, MenuItem } from '../types';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';
import { QalaGirihRosette, BukharaBrickBand } from './ArchitecturalVisuals';
import { 
  Salad, 
  Layers, 
  Ham, 
  Pizza, 
  Soup, 
  UtensilsCrossed, 
  Flame, 
  Fish, 
  Sandwich, 
  CookingPot, 
  FlameKindling, 
  Sparkles, 
  Wheat, 
  Coffee, 
  Croissant, 
  Search, 
  Eye 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const MenuSection: React.FC = () => {
  const { language, t, formatPrice } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<MenuCategoryKey>(MENU_CATEGORIES[0]?.key || 'non');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewDish, setPreviewDish] = useState<MenuItem | null>(null);

  const categoryIcons: Record<MenuCategoryKey, React.ReactNode> = {
    non: <Wheat size={17} />,
    salat: <Salad size={17} />,
    garnir_sous: <Layers size={17} />,
    sovuq_gazak: <Ham size={17} />,
    pizza_pide: <Pizza size={17} />,
    shorva: <Soup size={17} />,
    pasta: <UtensilsCrossed size={17} />,
    asosiy: <Flame size={17} />,
    baliq: <Fish size={17} />,
    burger: <Sandwich size={17} />,
    xamirli: <CookingPot size={17} />,
    barbekyu: <FlameKindling size={17} />,
    assorti: <Sparkles size={17} />,
    ichimlik: <Coffee size={17} />,
    desert: <Croissant size={17} />,
  };

  // Filter items by category and search term (search matches active language or any language)
  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      const matchItem = (item: MenuItem) => {
        const currentName = item.name[language]?.toLowerCase() || '';
        const currentDesc = item.description[language]?.toLowerCase() || '';
        const uzName = item.name.uz?.toLowerCase() || '';
        const ruName = item.name.ru?.toLowerCase() || '';
        const enName = item.name.en?.toLowerCase() || '';
        return (
          currentName.includes(q) ||
          currentDesc.includes(q) ||
          uzName.includes(q) ||
          ruName.includes(q) ||
          enName.includes(q)
        );
      };

      // Check in active category first
      const inCat = MENU_ITEMS.filter((item) => item.category === activeCategory && matchItem(item));
      if (inCat.length > 0) return inCat;

      // Search across all categories so user doesn't miss dishes
      return MENU_ITEMS.filter(matchItem);
    }

    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory, searchQuery, language]);

  const activeCategoryObj = MENU_CATEGORIES.find((c) => c.key === activeCategory);

  return (
    <section id="menyu" className="relative py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#8B3A2B] font-bold text-xs uppercase tracking-widest">
            <QalaGirihRosette size={18} />
            <span>{t.menuEyebrow}</span>
            <QalaGirihRosette size={18} />
          </div>

          <h1 className="font-serif-arch text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#221D17]">
            {t.menuTitle}
          </h1>

          <p className="text-sm sm:text-base text-[#221D17]/80 max-w-lg mx-auto">
            {t.menuSubtitle}
          </p>

          <BukharaBrickBand className="max-w-xs mx-auto opacity-75 pt-1" />
        </div>

        {/* Category Selection & Search Row */}
        <div className="flex flex-col gap-4 mb-8">
          
          {/* Categories Grid/Bar */}
          <div 
            role="tablist" 
            aria-label={t.menuTitle}
            className="w-full p-2.5 bg-[#E7DDD0] border border-[#8B3A2B]/30 rounded-2xl shadow-xs"
          >
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {MENU_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.key;

                return (
                  <button
                    key={cat.key}
                    role="tab"
                    id={`tab-${cat.key}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${cat.key}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => {
                      setActiveCategory(cat.key);
                      setSearchQuery('');
                    }}
                    className={`flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8B3A2B] focus-visible:outline-none min-h-[42px] shrink-0 ${
                      isActive
                        ? 'bg-[#8B3A2B] text-white shadow-md border border-[#B8863B]'
                        : 'bg-white/80 hover:bg-white text-[#221D17] hover:text-[#8B3A2B] border border-[#8B3A2B]/20 shadow-2xs hover:border-[#8B3A2B]/40'
                    }`}
                  >
                    <span className={isActive ? 'text-[#B8863B]' : 'text-[#8B3A2B]'}>
                      {categoryIcons[cat.key]}
                    </span>
                    <span className="whitespace-nowrap">{cat.label[language]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Search */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#221D17]/50">
              <Search size={16} />
            </span>
            <input
              type="text"
              id="menu-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-20 py-2.5 bg-[#E7DDD0] border border-[#8B3A2B]/30 rounded-xl text-xs sm:text-sm text-[#221D17] placeholder:text-[#221D17]/50 focus-visible:ring-2 focus-visible:ring-[#8B3A2B] focus-visible:outline-none focus:bg-white transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-semibold text-[#8B3A2B] hover:underline cursor-pointer"
              >
                {t.clearSearch}
              </button>
            )}
          </div>
        </div>

        {/* Active Category Header */}
        <div className="flex items-center gap-3 mb-6 pb-2.5 border-b border-[#8B3A2B]/20">
          <div className="w-8 h-8 rounded-lg bg-[#8B3A2B] text-[#EFE6D8] flex items-center justify-center border border-[#B8863B] shadow-2xs">
            {categoryIcons[activeCategory]}
          </div>
          <div>
            <h2 className="font-serif-arch text-lg sm:text-2xl font-bold text-[#221D17] leading-tight">
              {activeCategoryObj?.label[language]}
            </h2>
            <p className="text-xs text-[#8B3A2B] font-medium">
              {activeCategoryObj?.sublabel[language]}
            </p>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div 
          id={`panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              const nameText = item.name[language] || item.name.uz;
              const descText = item.description[language] || item.description.uz;
              const badgeText = item.badge?.[language] || item.badge?.uz;
              const prepText = item.prepMethod?.[language] || item.prepMethod?.uz;
              const portionText = item.portion?.[language] || item.portion?.uz;

              return (
                <article
                  key={item.id}
                  id={`menu-card-${item.id}`}
                  className="relative bg-[#EFE6D8] rounded-2xl overflow-hidden border border-[#8B3A2B]/25 hover:border-[#8B3A2B]/60 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    {/* Food Photo Container with Badge */}
                    <div 
                      className="relative w-full h-52 sm:h-56 bg-[#232C4B]/10 overflow-hidden cursor-pointer group"
                      onClick={() => setPreviewDish(item)}
                    >
                      <img
                        src={item.image}
                        alt={nameText}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';
                        }}
                      />

                      {/* Dark gradient for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Badges overlay */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                        {badgeText && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#8B3A2B] text-white shadow-md border border-[#B8863B]/60 uppercase tracking-wider">
                            <Sparkles size={11} className="text-[#B8863B]" />
                            {badgeText}
                          </span>
                        )}
                      </div>

                      {portionText && (
                        <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-semibold bg-[#221D17]/85 backdrop-blur-xs text-[#EFE6D8] z-10 border border-white/10">
                          {portionText}
                        </div>
                      )}

                      {/* Quick view hint on hover */}
                      <div className="absolute bottom-2.5 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-white text-[11px] font-semibold flex items-center gap-1 bg-black/60 px-2 py-1 rounded-md backdrop-blur-xs">
                        <Eye size={13} />
                        <span>{t.enlargePhoto}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6 pb-2">
                      {prepText && (
                        <p className="text-[11px] font-bold text-[#8B3A2B] uppercase tracking-wider mb-1">
                          {prepText}
                        </p>
                      )}

                      <h3 className="font-serif-arch text-xl sm:text-2xl font-bold text-[#221D17] mb-2 leading-snug">
                        {nameText}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#221D17]/80 leading-relaxed line-clamp-3">
                        {descText}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom: Price & View */}
                  <div className="p-5 sm:p-6 pt-3 border-t border-[#8B3A2B]/15 flex items-center justify-between mt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#8B3A2B]">
                        {t.priceLabel}
                      </span>
                      <span className="font-serif-arch text-lg sm:text-xl font-bold text-[#232C4B]">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    <button
                      type="button"
                      id={`view-dish-${item.id}`}
                      onClick={() => setPreviewDish(item)}
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#8B3A2B] hover:text-white bg-[#8B3A2B]/10 hover:bg-[#8B3A2B] border border-[#8B3A2B]/30 transition-all flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8B3A2B] focus-visible:outline-none"
                      aria-label={`${nameText} ${t.viewDetails}`}
                    >
                      <Eye size={14} />
                      <span>{t.viewDetails}</span>
                    </button>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="col-span-full py-16 text-center text-[#221D17]/70">
              <p className="font-serif-arch text-lg">{t.noItemsFound}</p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs font-bold text-[#8B3A2B] underline cursor-pointer"
              >
                {t.viewAllDishes}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dish Photo Lightbox Modal */}
      {previewDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setPreviewDish(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg bg-[#EFE6D8] rounded-2xl overflow-hidden border-2 border-[#8B3A2B] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-72 w-full bg-black">
              <img
                src={previewDish.image}
                alt={previewDish.name[language] || previewDish.name.uz}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setPreviewDish(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer text-sm"
                aria-label={t.closeBtn}
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-wider">
                  {previewDish.prepMethod?.[language] || previewDish.prepMethod?.uz || t.traditionBadge}
                </span>
                <span className="font-serif-arch text-xl font-bold text-[#232C4B]">
                  {formatPrice(previewDish.price)}
                </span>
              </div>
              <h3 className="font-serif-arch text-2xl font-bold text-[#221D17] mb-2">
                {previewDish.name[language] || previewDish.name.uz}
              </h3>
              <p className="text-sm text-[#221D17]/80 leading-relaxed mb-5">
                {previewDish.description[language] || previewDish.description.uz}
              </p>
              <button
                type="button"
                onClick={() => setPreviewDish(null)}
                className="w-full py-3 bg-[#8B3A2B] hover:bg-[#732f22] text-white font-bold rounded-xl transition-colors cursor-pointer text-sm"
              >
                {t.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

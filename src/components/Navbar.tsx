import React from 'react';
import { Phone, Clock, MapPin, Instagram, Compass } from 'lucide-react';
import { RESTAURANT_LOGO_URL } from '../data/restaurantData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      id="main-header" 
      className="sticky top-0 z-40 w-full bg-[#EFE6D8]/95 backdrop-blur-md border-b border-[#8B3A2B]/20 transition-all shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none shrink-0 cursor-pointer" 
            aria-label={`${t.restaurantName} ${t.restaurantType}`}
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#8B3A2B] overflow-hidden flex items-center justify-center border-2 border-[#B8863B] shadow-sm shrink-0">
              <img
                src={RESTAURANT_LOGO_URL}
                alt={`${t.restaurantName} Logo`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-arch text-2xl sm:text-3xl font-bold tracking-widest text-[#221D17] group-hover:text-[#8B3A2B] transition-colors leading-none sm:leading-tight">
                {t.restaurantName}
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8B3A2B] mt-0.5">
                {t.restaurantType}
              </span>
            </div>
          </a>

          {/* Center Info: Address, Phone & Hours (Desktop) */}
          <div className="hidden xl:flex items-center gap-5 text-xs text-[#221D17]/80">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=4-%D0%B9+%D1%82%D1%83%D0%BF+%D0%9F.%D0%9A%D0%BE%D1%80%D0%B8%D0%B9+12,+220900,+Khiva,+Uzbekistan"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#8B3A2B] transition-colors"
              title={t.addressShort}
            >
              <MapPin size={14} className="text-[#8B3A2B] shrink-0" />
              <span>{t.addressShort}</span>
            </a>
            <div className="w-1 h-1 rounded-full bg-[#8B3A2B]/40" />
            <div className="flex items-center gap-1.5">
              <Phone size={14} className="text-[#8B3A2B]" />
              <a href="tel:+998331350777" className="hover:text-[#8B3A2B] font-medium font-mono">
                +998 (33) 135-07-77
              </a>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#8B3A2B]/40" />
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#8B3A2B]" />
              <span>{t.hoursShort}</span>
            </div>
          </div>

          {/* Right: Language Switcher, Phone, Instagram & Google Maps button */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Language Switcher */}
            <LanguageSelector />

            <a
              id="header-phone-btn"
              href="tel:+998331350777"
              className="hidden sm:inline-flex xl:hidden items-center gap-1.5 px-2.5 sm:px-3 py-2 bg-white/70 hover:bg-[#8B3A2B] hover:text-[#EFE6D8] text-[#221D17] text-xs font-semibold rounded-xl border border-[#8B3A2B]/25 transition-all cursor-pointer shadow-2xs group"
              aria-label={t.callPhoneAria}
              title="+998 (33) 135-07-77"
            >
              <Phone size={14} className="text-[#8B3A2B] group-hover:text-[#EFE6D8] transition-colors" />
              <span className="font-mono">(33) 135-07-77</span>
            </a>

            <a
              id="header-instagram-btn"
              href="https://instagram.com/khiva.qala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 bg-white/70 hover:bg-[#8B3A2B] hover:text-[#EFE6D8] text-[#221D17] text-xs font-semibold rounded-xl border border-[#8B3A2B]/25 transition-all cursor-pointer shadow-2xs group"
              aria-label="Instagram: @khiva.qala"
              title="Instagram: @khiva.qala"
            >
              <Instagram size={14} className="text-[#e1306c] group-hover:text-[#EFE6D8] transition-colors" />
              <span className="hidden md:inline">@khiva.qala</span>
            </a>

            <a
              id="header-maps-btn"
              href="https://www.google.com/maps/search/?api=1&query=4-%D0%B9+%D1%82%D1%83%D0%BF+%D0%9F.%D0%9A%D0%BE%D1%80%D0%B8%D0%B9+12,+220900,+Khiva,+Uzbekistan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 bg-[#8B3A2B] hover:bg-[#732f22] text-[#EFE6D8] text-xs font-semibold rounded-xl border border-[#B8863B]/50 transition-all cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-[#232C4B] focus-visible:outline-none"
              aria-label={t.googleMapsBtn}
              title={t.googleMapsBtn}
            >
              <Compass size={14} className="text-[#B8863B]" />
              <span className="hidden xs:inline sm:inline">{t.googleMapsBtn}</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

import React from 'react';
import { MapPin, Phone, Clock, Instagram, Compass } from 'lucide-react';
import { FortressCrenellations } from './ArchitecturalVisuals';
import { RESTAURANT_LOGO_URL } from '../data/restaurantData';
import { useLanguage } from '../context/LanguageContext';

export const FooterSection: React.FC = () => {
  const { language, t } = useLanguage();

  const getDaysLabel = () => {
    if (language === 'ru') return 'Понедельник — Воскресенье';
    if (language === 'en') return 'Monday — Sunday';
    return 'Dushanba — Yakshanba';
  };

  return (
    <footer id="aloqa" className="relative bg-[#232C4B] text-[#EFE6D8] pt-0 overflow-hidden border-t-2 border-[#B8863B]">
      {/* Decorative top fortress crenellations */}
      <FortressCrenellations className="text-[#8B3A2B] bg-[#EFE6D8]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group focus-visible:outline-none cursor-pointer w-fit"
              aria-label={`${t.restaurantName} ${t.restaurantType}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#8B3A2B] overflow-hidden flex items-center justify-center border-2 border-[#B8863B] shadow-sm shrink-0 group-hover:border-white transition-colors">
                <img
                  src={RESTAURANT_LOGO_URL}
                  alt={`${t.restaurantName} Logo`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-arch text-2xl font-bold tracking-widest text-[#EFE6D8] group-hover:text-[#B8863B] transition-colors">
                  {t.restaurantName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B8863B]">
                  {t.restaurantType}
                </span>
              </div>
            </a>

            <p className="text-sm text-[#EFE6D8]/80 leading-relaxed max-w-sm">
              {t.footerAbout}
            </p>
          </div>

          {/* Col 2: Manzil & Bog'lanish */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif-arch text-lg font-bold text-[#B8863B] uppercase tracking-wider">
              {t.addressTitle}
            </h3>
            
            <ul className="space-y-3 text-sm text-[#EFE6D8]/85">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-[#8B3A2B] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=4-%D0%B9+%D1%82%D1%83%D0%BF+%D0%9F.%D0%9A%D0%BE%D1%80%D0%B8%D0%B9+12,+220900,+Khiva,+Uzbekistan"
                    target="_blank"
                    rel="noreferrer"
                    id="footer-maps-directions-link"
                    className="hover:text-[#B8863B] font-bold text-base transition-colors inline-flex items-center gap-1.5 focus-visible:underline focus-visible:outline-none group cursor-pointer"
                    aria-label={t.directionsBtn}
                  >
                    <span>{t.directionsBtn}</span>
                    <Compass size={15} className="text-[#B8863B] group-hover:rotate-45 transition-transform" />
                  </a>
                  <span className="text-xs text-[#B8863B] mt-0.5">{t.addressCity}</span>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone size={18} className="text-[#8B3A2B] shrink-0" />
                <div className="flex flex-col">
                  <a 
                    href="tel:+998331350777" 
                    className="hover:text-[#B8863B] font-bold text-base transition-colors focus-visible:underline focus-visible:outline-none"
                    aria-label={t.callPhoneAria}
                  >
                    +998 (33) 135-07-77
                  </a>
                  <span className="text-xs text-[#B8863B]">
                    {t.reservationTime}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Ish vaqti */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif-arch text-lg font-bold text-[#B8863B] uppercase tracking-wider">
              {t.hoursTitle}
            </h3>

            <div className="space-y-2 text-sm text-[#EFE6D8]/85">
              <div className="flex items-start gap-2">
                <Clock size={18} className="text-[#8B3A2B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#EFE6D8]">{getDaysLabel()}</p>
                  <p className="text-xs text-[#B8863B] font-bold">{t.hoursShort}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Ijtimoiy Tarmoqlar & Xarita ko'rinishi */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="font-serif-arch text-lg font-bold text-[#B8863B] uppercase tracking-wider mb-2">
                {t.socialTitle}
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/khiva.qala"
                  target="_blank"
                  rel="noreferrer"
                  id="social-instagram-link"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#833ab4]/30 via-[#fd1d1d]/30 to-[#fcb045]/30 hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] flex items-center gap-2.5 text-[#EFE6D8] border border-[#f56040]/60 hover:border-white transition-all text-xs font-bold focus-visible:ring-2 focus-visible:ring-[#B8863B] focus-visible:outline-none group shadow-sm"
                  aria-label="Instagram: @khiva.qala"
                >
                  <Instagram size={18} className="text-[#f56040] group-hover:text-white transition-colors" />
                  <span>@khiva.qala</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

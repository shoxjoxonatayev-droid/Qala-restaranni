import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

interface LanguageOption {
  code: Language;
  shortLabel: string;
  fullLabel: string;
  flag: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'uz', shortLabel: "O'ZB", fullLabel: "O'zbek", flag: '🇺🇿' },
  { code: 'ru', shortLabel: 'РУС', fullLabel: 'Русский', flag: '🇷🇺' },
  { code: 'en', shortLabel: 'ENG', fullLabel: 'English', flag: '🇬🇧' },
];

interface LanguageSelectorProps {
  className?: string;
  variant?: 'segmented' | 'compact';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  className = '',
}) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div 
      className={`inline-flex items-center p-0.5 sm:p-1 bg-[#E7DDD0]/90 rounded-xl border border-[#8B3A2B]/25 shadow-2xs ${className}`}
      role="group"
      aria-label="Tilni tanlash / Выбор языка / Select language"
    >
      {LANGUAGES.map((lang) => {
        const isSelected = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            aria-pressed={isSelected}
            title={lang.fullLabel}
            id={`lang-btn-${lang.code}`}
            className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer select-none ${
              isSelected
                ? 'bg-[#8B3A2B] text-white shadow-xs border border-[#B8863B]/50'
                : 'text-[#221D17]/80 hover:text-[#8B3A2B] hover:bg-white/60'
            }`}
          >
            <span className="text-xs leading-none">{lang.flag}</span>
            <span className="tracking-wide">{lang.shortLabel}</span>
          </button>
        );
      })}
    </div>
  );
};

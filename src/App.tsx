import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { MenuSection } from './components/MenuSection';
import { FooterSection } from './components/FooterSection';

function AppContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#EFE6D8] text-[#221D17] selection:bg-[#8B3A2B] selection:text-white flex flex-col font-sans">
      {/* Skip to main content for keyboard accessibility */}
      <a
        href="#menyu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#8B3A2B] text-white font-bold rounded-lg shadow-lg outline-none ring-2 ring-[#B8863B]"
      >
        {t.skipToMenu}
      </a>

      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Area: Menu Section with Photos */}
      <main id="main-content" className="flex-grow">
        <MenuSection />
      </main>

      {/* Footer / Contacts & Location */}
      <FooterSection />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

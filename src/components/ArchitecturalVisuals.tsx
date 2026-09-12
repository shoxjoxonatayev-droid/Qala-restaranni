import React from 'react';

/**
 * Authentic decorative fortress crenellations (kangun / merlon)
 */
export const FortressCrenellations: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-full overflow-hidden leading-none select-none text-[#8B3A2B] ${className}`} aria-hidden="true">
    <svg 
      className="w-full h-4 sm:h-5" 
      viewBox="0 0 1200 24" 
      preserveAspectRatio="none" 
      fill="currentColor"
    >
      <pattern id="crenellationPattern" width="40" height="24" patternUnits="userSpaceOnUse">
        <path d="M0 24 L0 8 L14 8 L14 24 L26 24 L26 0 L40 0 L40 24 Z" />
      </pattern>
      <rect width="1200" height="24" fill="url(#crenellationPattern)" />
    </svg>
  </div>
);

/**
 * Geometric brickwork ribbon inspired by Bukhara's Kalyan minaret brick reliefs
 */
export const BukharaBrickBand: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-full overflow-hidden select-none py-1.5 ${className}`} aria-hidden="true">
    <svg className="w-full h-3" viewBox="0 0 800 12" preserveAspectRatio="none">
      <pattern id="bukharaBrickPattern" width="40" height="12" patternUnits="userSpaceOnUse">
        {/* Alternating diagonal bricks */}
        <rect x="0" y="2" width="16" height="8" rx="1" fill="#8B3A2B" opacity="0.85" />
        <rect x="20" y="2" width="16" height="8" rx="1" fill="#B8863B" opacity="0.75" />
        <path d="M17 1 L19 1 L19 11 L17 11 Z" fill="#221D17" opacity="0.3" />
        <path d="M37 1 L39 1 L39 11 L37 11 Z" fill="#221D17" opacity="0.3" />
      </pattern>
      <rect width="800" height="12" fill="url(#bukharaBrickPattern)" />
    </svg>
  </div>
);

/**
 * Geometric star rosette (Girih / Shamseh) for badges and headers
 */
export const QalaGirihRosette: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 64 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    {/* Outer eight-pointed star */}
    <path 
      d="M32 0 L42 12 L58 12 L52 28 L64 38 L52 48 L58 64 L42 64 L32 52 L22 64 L6 64 L12 48 L0 38 L12 28 L6 12 L22 12 Z" 
      fill="#8B3A2B" 
      opacity="0.15" 
    />
    <path 
      d="M32 6 L40 16 L54 16 L49 30 L59 38 L49 46 L54 60 L40 60 L32 50 L24 60 L10 60 L15 46 L5 38 L15 30 L10 16 L24 16 Z" 
      stroke="#B8863B" 
      strokeWidth="1.5" 
      strokeLinejoin="round" 
    />
    <rect x="23" y="23" width="18" height="18" transform="rotate(45 32 32)" fill="#8B3A2B" />
    <circle cx="32" cy="32" r="4.5" fill="#B8863B" />
  </svg>
);

/**
 * Authentic Hero Section Visual: The Fortress Arch (Iwan / Peshtoq) with Khiva & Bukhara masonry
 */
export const FortressArchHero: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-[4/5] flex items-center justify-center select-none">
      {/* Background soft glow / shadow */}
      <div 
        className="absolute inset-0 rounded-t-[180px] rounded-b-2xl blur-xl opacity-20 -z-10"
        style={{ background: 'radial-gradient(circle, #8B3A2B 0%, #232C4B 70%)' }}
      />

      {/* Main architectural SVG portal */}
      <svg 
        viewBox="0 0 460 560" 
        className="w-full h-full drop-shadow-xl"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Mudbrick texture pattern */}
          <pattern id="heroBrickwork" width="36" height="18" patternUnits="userSpaceOnUse">
            <rect width="36" height="18" fill="#E6DAC8" />
            <rect x="1" y="1" width="34" height="7" rx="0.5" fill="#DDD0BC" stroke="#D1C2AC" strokeWidth="0.75" />
            <rect x="19" y="10" width="34" height="7" rx="0.5" fill="#DDD0BC" stroke="#D1C2AC" strokeWidth="0.75" />
            <rect x="1" y="10" width="16" height="7" rx="0.5" fill="#D8C9B4" stroke="#D1C2AC" strokeWidth="0.75" />
          </pattern>

          {/* Deep vault shadow gradient */}
          <linearGradient id="vaultDeep" x1="230" y1="90" x2="230" y2="520" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1B2239" />
            <stop offset="40%" stopColor="#232C4B" />
            <stop offset="100%" stopColor="#16120E" />
          </linearGradient>

          {/* Golden arch highlight */}
          <linearGradient id="goldArchShine" x1="120" y1="80" x2="340" y2="350" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D4A759" />
            <stop offset="50%" stopColor="#B8863B" />
            <stop offset="100%" stopColor="#875E22" />
          </linearGradient>

          {/* Burnt brick gradient */}
          <linearGradient id="brickGrad" x1="0" y1="0" x2="0" y2="560" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9C4434" />
            <stop offset="100%" stopColor="#782F22" />
          </linearGradient>
        </defs>

        {/* Outer Fortress Wall Base */}
        <rect x="20" y="40" width="420" height="500" rx="6" fill="url(#heroBrickwork)" />

        {/* Top Bastion / Kangun crenellations */}
        <path 
          d="M 20 40 L 20 18 L 48 18 L 48 40 L 76 40 L 76 18 L 104 18 L 104 40 L 132 40 L 132 18 L 160 18 L 160 40 L 300 40 L 300 18 L 328 18 L 328 40 L 356 40 L 356 18 L 384 18 L 384 40 L 412 40 L 412 18 L 440 18 L 440 40 Z" 
          fill="url(#brickGrad)" 
        />

        {/* Central Peshtoq (Portal) Frame */}
        <rect x="75" y="70" width="310" height="470" rx="4" fill="#E2D4BF" stroke="#B8863B" strokeWidth="2" />
        
        {/* Geometric Mosaic Header Band on Portal */}
        <rect x="85" y="80" width="290" height="34" fill="#232C4B" />
        <g stroke="#B8863B" strokeWidth="1.5" fill="none">
          <path d="M 95 97 L 112 80 L 129 97 L 112 114 Z" />
          <path d="M 129 97 L 146 80 L 163 97 L 146 114 Z" />
          <path d="M 163 97 L 180 80 L 197 97 L 180 114 Z" />
          <path d="M 197 97 L 214 80 L 231 97 L 214 114 Z" />
          <path d="M 231 97 L 248 80 L 265 97 L 248 114 Z" />
          <path d="M 265 97 L 282 80 L 299 97 L 282 114 Z" />
          <path d="M 299 97 L 316 80 L 333 97 L 316 114 Z" />
          <path d="M 333 97 L 350 80 L 367 97 L 350 114 Z" />
        </g>

        {/* Main Vaulted Pointed Arch Outline (Iwan) */}
        {/* Outer arch band */}
        <path 
          d="M 105 540 L 105 270 Q 105 140 230 130 Q 355 140 355 270 L 355 540 Z" 
          fill="url(#goldArchShine)" 
        />
        
        {/* Inner vault depth (Night Indigo chamber) */}
        <path 
          d="M 120 540 L 120 280 Q 120 160 230 148 Q 340 160 340 280 L 340 540 Z" 
          fill="url(#vaultDeep)" 
        />

        {/* Muqarnas / Honeycomb vault geometric lines */}
        <path 
          d="M 120 280 Q 230 255 340 280" 
          stroke="#B8863B" 
          strokeWidth="1.2" 
          opacity="0.6" 
          fill="none" 
        />
        <path 
          d="M 145 240 Q 230 215 315 240" 
          stroke="#B8863B" 
          strokeWidth="1.2" 
          opacity="0.6" 
          fill="none" 
        />
        <path 
          d="M 175 200 Q 230 185 285 200" 
          stroke="#B8863B" 
          strokeWidth="1.2" 
          opacity="0.6" 
          fill="none" 
        />
        <path 
          d="M 230 148 L 230 270" 
          stroke="#B8863B" 
          strokeWidth="1.2" 
          opacity="0.4" 
        />

        {/* Traditional carved wooden entrance door inside the vault */}
        <g id="carvedDoor">
          <rect x="165" y="320" width="130" height="220" rx="3" fill="#3D291D" stroke="#B8863B" strokeWidth="1.5" />
          {/* Door panels */}
          <rect x="175" y="335" width="50" height="90" rx="2" fill="#2C1D13" stroke="#8B3A2B" strokeWidth="1" />
          <rect x="235" y="335" width="50" height="90" rx="2" fill="#2C1D13" stroke="#8B3A2B" strokeWidth="1" />
          <rect x="175" y="435" width="50" height="95" rx="2" fill="#2C1D13" stroke="#8B3A2B" strokeWidth="1" />
          <rect x="235" y="435" width="50" height="95" rx="2" fill="#2C1D13" stroke="#8B3A2B" strokeWidth="1" />
          
          {/* Brass door knockers (Zulfin) */}
          <circle cx="215" cy="380" r="4.5" fill="#B8863B" />
          <circle cx="245" cy="380" r="4.5" fill="#B8863B" />
          <circle cx="215" cy="385" r="7" stroke="#B8863B" strokeWidth="1.5" fill="none" />
          <circle cx="245" cy="385" r="7" stroke="#B8863B" strokeWidth="1.5" fill="none" />
        </g>

        {/* Hanging copper lantern (Chiroq) in the arch */}
        <line x1="230" y1="148" x2="230" y2="235" stroke="#B8863B" strokeWidth="1.5" />
        <path d="M 222 235 L 238 235 L 243 255 L 217 255 Z" fill="#8B3A2B" stroke="#B8863B" strokeWidth="1" />
        <circle cx="230" cy="245" r="14" fill="#FFEAA7" opacity="0.4" filter="blur(2px)" />
        <circle cx="230" cy="245" r="4" fill="#FFF275" />
        <path d="M 224 255 L 236 255 L 230 268 Z" fill="#B8863B" />

        {/* Two flanking fortress minarets / columns */}
        <g id="leftMinaret">
          <rect x="35" y="55" width="30" height="485" fill="#D8C9B4" stroke="#8B3A2B" strokeWidth="1" />
          <rect x="31" y="42" width="38" height="14" fill="#8B3A2B" />
          <polygon points="31,42 50,22 69,42" fill="#232C4B" stroke="#B8863B" strokeWidth="1" />
        </g>
        <g id="rightMinaret">
          <rect x="395" y="55" width="30" height="485" fill="#D8C9B4" stroke="#8B3A2B" strokeWidth="1" />
          <rect x="391" y="42" width="38" height="14" fill="#8B3A2B" />
          <polygon points="391,42 410,22 429,42" fill="#232C4B" stroke="#B8863B" strokeWidth="1" />
        </g>

        {/* Stone steps at bottom */}
        <rect x="50" y="530" width="360" height="14" rx="1" fill="#8B3A2B" />
        <rect x="30" y="544" width="400" height="16" rx="2" fill="#221D17" />
      </svg>

      {/* Floating badge bottom-left */}
      <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-[#232C4B] text-[#EFE6D8] px-4 py-3 rounded-xl shadow-xl border border-[#B8863B]/40 max-w-[210px]">
        <div className="flex items-center gap-2 text-[#B8863B] text-xs uppercase tracking-wider font-bold mb-0.5">
          <span className="w-2 h-2 rounded-full bg-[#B8863B] animate-pulse"></span>
          Tandir va O'choq
        </div>
        <p className="text-xs text-[#EFE6D8]/90 leading-tight">
          Asl pishiq g'ishtli o'choqlarda 100% o'tin olovi tafti
        </p>
      </div>

      {/* Floating badge top-right */}
      <div className="absolute top-4 -right-2 sm:-right-4 bg-[#EFE6D8] border-2 border-[#8B3A2B] text-[#221D17] px-3.5 py-2.5 rounded-xl shadow-lg flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-[#8B3A2B] text-[#EFE6D8] flex items-center justify-center font-serif text-sm font-bold">
          X
        </div>
        <div className="text-left leading-tight">
          <p className="text-[11px] font-bold text-[#8B3A2B] uppercase tracking-wider">Qadimiy Xiva</p>
          <p className="text-xs font-semibold text-[#221D17]">Asriy retseptlar</p>
        </div>
      </div>
    </div>
  );
};

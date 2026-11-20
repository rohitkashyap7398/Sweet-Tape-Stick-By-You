import React from 'react';
import { TAPE_PRODUCTS } from '../data/sweetTapeData';
import { TapeRollSvg } from './TapeRollSvg';

export const LemonPostcard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative bg-[#F9F4E8] p-3 shadow-2xl border border-black/10 ${className}`}>
    {/* Masking tape strip holding postcard */}
    <div className="masking-tape-strip absolute -top-5 right-6 w-24 h-8 -rotate-6 z-20 opacity-95" />
    <svg viewBox="0 0 280 220" className="w-full h-full">
      <rect width="280" height="220" fill="#FBF7EE" />
      {/* Dark green painted leaves */}
      <path d="M 35 160 Q 65 95 110 115 Q 75 165 35 160 Z" fill="#0B5E36" />
      <path d="M 105 45 Q 145 15 170 55 Q 130 85 105 45 Z" fill="#0B5E36" />
      <path d="M 185 85 Q 235 45 258 95 Q 210 120 185 85 Z" fill="#0D6E3E" />
      <path d="M 135 170 Q 175 135 215 175 Q 170 205 135 170 Z" fill="#084C2B" />
      <path d="M 15 80 Q 45 45 78 75 Q 45 110 15 80 Z" fill="#0D6E3E" />
      {/* Stems */}
      <path d="M 12 180 Q 130 115 268 45" stroke="#094D2B" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Bright painted lemons */}
      <g transform="translate(88, 102) rotate(-18)">
        <ellipse cx="0" cy="0" rx="38" ry="28" fill="#F9C91E" />
        <ellipse cx="-8" cy="-7" rx="18" ry="8" fill="#FFE761" opacity="0.65" />
        <circle cx="-39" cy="0" r="4" fill="#F4BC12" />
        <circle cx="39" cy="0" r="4" fill="#F4BC12" />
      </g>
      <g transform="translate(178, 132) rotate(14)">
        <ellipse cx="0" cy="0" rx="42" ry="30" fill="#F6BE13" />
        <ellipse cx="-9" cy="-8" rx="20" ry="9" fill="#FFE55C" opacity="0.6" />
        <circle cx="-43" cy="0" r="4.5" fill="#E3AA08" />
        <circle cx="43" cy="0" r="4.5" fill="#E3AA08" />
      </g>
      <g transform="translate(222, 48) rotate(-25)">
        <ellipse cx="0" cy="0" rx="34" ry="25" fill="#F9CA1E" />
        <ellipse cx="-7" cy="-6" rx="15" ry="7" fill="#FFEC7A" opacity="0.65" />
      </g>
      <g transform="translate(54, 42) rotate(22)">
        <ellipse cx="0" cy="0" rx="32" ry="23" fill="#F3B810" />
        <ellipse cx="-6" cy="-5" rx="14" ry="6" fill="#FFE359" opacity="0.6" />
      </g>
    </svg>
  </div>
);

export const GiftBoxArt: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative shadow-2xl overflow-hidden ${className}`}>
    <svg viewBox="0 0 360 320" className="w-full h-full">
      {/* Striped wrapping paper */}
      <rect width="360" height="320" fill="#FF6F91" />
      <rect x="0" y="0" width="52" height="320" fill="#F24B38" />
      <rect x="52" y="0" width="54" height="320" fill="#FF5E8A" />
      <rect x="106" y="0" width="58" height="320" fill="#FF92AA" />
      <rect x="164" y="0" width="54" height="320" fill="#FFFDF8" />
      <rect x="218" y="0" width="44" height="320" fill="#9EE7EC" />
      <rect x="262" y="0" width="98" height="320" fill="#FF618D" />
      {/* Polka dots on right pink panel */}
      {[30, 80, 130, 180, 230, 280].map((y) =>
        [285, 325].map((x) => (
          <circle key={`${x}-${y}`} cx={x + (y % 40 === 0 ? 12 : 0)} cy={y} r="5" fill="#FFFFFF" opacity="0.85" />
        ))
      )}
      {/* Box lid horizontal seam shadow */}
      <rect x="0" y="138" width="360" height="8" fill="rgba(0,0,0,0.12)" />
      {/* White satin ribbon horizontal & vertical */}
      <rect x="0" y="114" width="360" height="28" fill="#F5F3EE" />
      <rect x="0" y="140" width="360" height="4" fill="#DCD8CE" />
      <rect x="158" y="0" width="30" height="320" fill="#F5F3EE" />
      <rect x="186" y="0" width="4" height="320" fill="#DCD8CE" />
      {/* Ribbon Bow */}
      <g transform="translate(173, 128)">
        <path d="M 0 0 C -45 -45, -85 -15, -55 15 C -30 28, -10 10, 0 0 Z" fill="#FFFFFF" stroke="#DCD8CE" strokeWidth="2" />
        <path d="M 0 0 C 45 -45, 85 -15, 55 15 C 30 28, 10 10, 0 0 Z" fill="#FFFFFF" stroke="#DCD8CE" strokeWidth="2" />
        <path d="M -8 8 L -55 68 L -32 72 L 0 18 Z" fill="#F1EFE9" stroke="#DCD8CE" strokeWidth="1.5" />
        <path d="M 8 8 L 58 66 L 34 72 L 0 18 Z" fill="#F1EFE9" stroke="#DCD8CE" strokeWidth="1.5" />
        <ellipse cx="0" cy="2" rx="14" ry="12" fill="#FFFFFF" stroke="#DCD8CE" strokeWidth="2" />
      </g>
    </svg>
  </div>
);

export const CreativeHandsArt: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative rounded-3xl overflow-hidden bg-[#5C1A82] shadow-xl ${className}`}>
    <svg viewBox="0 0 320 320" className="w-full h-full">
      {/* Studio Backdrop */}
      <rect width="320" height="320" fill="#FF7315" />
      {/* Scalloped craft paper */}
      <path d="M 0 220 Q 25 190 50 220 T 100 220 T 150 220 T 200 220 T 250 220 T 300 220 L 320 320 L 0 320 Z" fill="#F12C1A" />
      <path d="M 10 245 Q 40 215 70 245 T 130 245 T 190 245 T 250 245 T 310 245 L 320 320 L 0 320 Z" fill="#D40E05" />
      {/* Paintbrushes */}
      <g transform="translate(80, 95) rotate(-18)">
        <rect x="0" y="32" width="10" height="110" rx="4" fill="#1F2937" />
        <rect x="0" y="18" width="10" height="16" fill="#D1D5DB" />
        <path d="M 0 18 Q 5 -8 10 18 Z" fill="#3B2314" />
      </g>
      <g transform="translate(106, 110) rotate(-6)">
        <rect x="0" y="28" width="8" height="105" rx="3" fill="#B45309" />
        <rect x="0" y="16" width="8" height="14" fill="#E5E7EB" />
        <path d="M 0 16 Q 4 -6 8 16 Z" fill="#FDE047" />
      </g>
      {/* Arm & Hand holding tape */}
      <path d="M 135 320 L 145 195 Q 148 160 175 155 L 220 165 Q 232 185 212 215 L 195 320 Z" fill="#F5C49E" />
      <path d="M 178 158 Q 198 148 214 166" stroke="#DF9F74" strokeWidth="3" fill="none" />
      {/* Masking tape roll held in hand */}
      <g transform="translate(116, 86)">
        <circle cx="58" cy="58" r="56" fill="#FFCE00" stroke="#0B1F0E" strokeWidth="2.5" />
        <circle cx="58" cy="58" r="33" fill="#FBF8EE" stroke="#0B1F0E" strokeWidth="2" />
        <text x="58" y="54" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="11" fill="#053B0C">
          MASKING
        </text>
        <text x="58" y="66" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="12" fill="#053B0C">
          TAPE
        </text>
      </g>
      {/* Thumb gripping front */}
      <path d="M 188 188 Q 210 168 228 182 Q 234 198 206 212 Z" fill="#F5C49E" stroke="#DF9F74" strokeWidth="1.5" />
    </svg>
  </div>
);

export const FixHandsArt: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative rounded-3xl overflow-hidden bg-[#1D54E6] shadow-xl ${className}`}>
    <svg viewBox="0 0 320 320" className="w-full h-full">
      <rect width="320" height="320" fill="#2057EA" />
      {/* Yellow toolbox / prop corner */}
      <path d="M 0 185 L 135 235 L 95 320 L 0 320 Z" fill="#FFD200" />
      <path d="M 210 215 L 320 165 L 320 320 L 240 320 Z" fill="#FF7315" />
      {/* Hand gripping Cloth Tape */}
      <path d="M 55 155 Q 95 115 145 140 L 185 185 L 125 230 Q 75 210 55 155 Z" fill="#F4C29B" />
      <g transform="translate(120, 74)">
        <circle cx="66" cy="66" r="64" fill="#676AF6" stroke="#0B1F0E" strokeWidth="2.5" />
        <circle cx="66" cy="66" r="36" fill="#FBF8EE" stroke="#0B1F0E" strokeWidth="2" />
        <text x="66" y="62" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="12" fill="#053B0C">
          CLOTH
        </text>
        <text x="66" y="75" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="13" fill="#053B0C">
          TAPE
        </text>
      </g>
      {/* Cloth tape strip stretching across repair */}
      <path d="M 75 215 L 255 170 L 265 198 L 85 245 Z" fill="#1F244D" opacity="0.92" />
    </svg>
  </div>
);

export const ProtectHandsArt: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative rounded-3xl overflow-hidden bg-[#FF7B1A] shadow-xl ${className}`}>
    <svg viewBox="0 0 320 320" className="w-full h-full">
      <rect width="320" height="320" fill="#FF7B1A" />
      {/* Stacked cardboard boxes */}
      <rect x="48" y="38" width="160" height="105" rx="6" fill="#C99664" stroke="#87582C" strokeWidth="2" />
      <rect x="75" y="130" width="190" height="135" rx="6" fill="#BA8552" stroke="#784B21" strokeWidth="2" />
      {/* Clear/green packing tape strip */}
      <rect x="132" y="130" width="28" height="135" fill="rgba(255,255,255,0.28)" />
      {/* Sweater arms hugging boxes */}
      <path d="M 0 185 Q 50 180 95 215 L 85 265 L 0 250 Z" fill="#F55B24" />
      <path d="M 320 215 Q 255 210 210 235 L 220 285 L 320 275 Z" fill="#F55B24" />
      {/* OPP Tape roll held */}
      <g transform="translate(162, 145)">
        <circle cx="52" cy="52" r="50" fill="#8BF500" stroke="#0B1F0E" strokeWidth="2.5" />
        <circle cx="52" cy="52" r="28" fill="#FBF8EE" stroke="#0B1F0E" strokeWidth="2" />
        <text x="52" y="49" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="13" fill="#053B0C">
          OPP
        </text>
        <text x="52" y="62" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="13" fill="#053B0C">
          TAPE
        </text>
      </g>
    </svg>
  </div>
);

export const NewsHandsBouquetArt: React.FC<{ className?: string }> = ({ className = '' }) => {
  const rolls = [
    { prod: TAPE_PRODUCTS[4], x: 56, y: 82, scale: 0.34, rot: -14 },
    { prod: TAPE_PRODUCTS[5], x: 185, y: 72, scale: 0.34, rot: 12 },
    { prod: TAPE_PRODUCTS[2], x: 82, y: 175, scale: 0.35, rot: -8 },
    { prod: TAPE_PRODUCTS[0], x: 170, y: 182, scale: 0.35, rot: 6 },
    { prod: TAPE_PRODUCTS[1], x: 252, y: 165, scale: 0.35, rot: 15 },
  ];

  return (
    <div className={`relative rounded-2xl overflow-hidden bg-[#D9D4CA] shadow-lg ${className}`}>
      {/* Colorful knit sweater texture backdrop */}
      <svg viewBox="0 0 360 320" className="w-full h-full">
        <rect width="360" height="320" fill="#EAE6DC" />
        {/* Knit sweater sleeves/torso */}
        <path d="M 105 0 L 265 0 L 310 220 L 70 220 Z" fill="#E65F46" />
        <path d="M 135 0 L 235 0 L 250 180 L 110 180 Z" fill="#F5B727" />
        <path d="M 165 0 L 210 0 L 220 140 L 155 140 Z" fill="#469CE8" />
        {/* Hands holding bouquet */}
        <path d="M 30 220 Q 75 185 115 215 L 115 275 L 30 285 Z" fill="#F1C29B" />
        <path d="M 330 225 Q 285 190 250 220 L 250 285 L 330 280 Z" fill="#F1C29B" />
      </svg>
      {/* Overlay actual crisp SVG rolls */}
      {rolls.map((r) => (
        <div
          key={r.prod.id}
          className="absolute pointer-events-none"
          style={{
            left: `${(r.x / 360) * 100}%`,
            top: `${(r.y / 320) * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <TapeRollSvg product={r.prod} className="w-24 h-24 sm:w-28 sm:h-28" rotation={r.rot} />
        </div>
      ))}
    </div>
  );
};

export const DiyGiftArt: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative rounded-xl overflow-hidden bg-[#ECE8DF] ${className}`}>
    <svg viewBox="0 0 340 240" className="w-full h-full">
      <rect width="340" height="240" fill="#F1EDE4" />
      {/* Striped box */}
      <g transform="translate(55, 80) rotate(-14)">
        <rect width="160" height="150" rx="6" fill="#FF6E8D" />
        <rect x="0" y="0" width="38" height="150" fill="#E63946" />
        <rect x="38" y="0" width="42" height="150" fill="#635BFF" />
        <rect x="80" y="0" width="38" height="150" fill="#FFFDF8" />
        <rect x="118" y="0" width="42" height="150" fill="#2EC4B6" />
      </g>
      {/* Hands */}
      <path d="M 105 30 Q 145 75 185 105 L 145 140 Q 95 105 70 50 Z" fill="#F4C29B" />
      <path d="M 330 70 Q 260 95 215 130 L 245 170 Q 295 145 340 120 Z" fill="#F4C29B" />
    </svg>
    <div className="absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/4 pointer-events-none">
      <TapeRollSvg product={TAPE_PRODUCTS[1]} className="w-20 h-20" rotation={12} />
    </div>
  </div>
);

export const NavThumb: React.FC<{ type: 'home' | 'about' | 'family' | 'news' | 'contact' }> = ({ type }) => {
  const styles = {
    home: 'bg-[#B8FF00] text-[#053B0C]',
    about: 'bg-[#F04E23] text-white',
    family: 'bg-[#FFCE00] text-[#053B0C]',
    news: 'bg-[#94F021] text-[#053B0C]',
    contact: 'bg-[#BA8552] text-white',
  }[type];

  const emojiShape = {
    home: (
      <svg viewBox="0 0 40 40" className="w-7 h-7">
        <path d="M8 21 L20 10 L32 21 V32 H8 Z" fill="#053B0C" />
        <rect x="16" y="22" width="8" height="10" fill="#B8FF00" />
      </svg>
    ),
    about: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <circle cx="20" cy="20" r="14" fill="#FFD166" />
        <circle cx="15" cy="17" r="2.5" fill="#1F2937" />
        <circle cx="25" cy="17" r="2.5" fill="#1F2937" />
        <path d="M14 23 Q20 29 26 23" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    family: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <circle cx="20" cy="20" r="14" fill="#053B0C" />
        <circle cx="20" cy="20" r="7" fill="#FFCE00" />
      </svg>
    ),
    news: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <rect x="8" y="10" width="24" height="20" rx="3" fill="#053B0C" />
        <line x1="12" y1="16" x2="28" y2="16" stroke="#B8FF00" strokeWidth="2.5" />
        <line x1="12" y1="22" x2="24" y2="22" stroke="#B8FF00" strokeWidth="2" />
      </svg>
    ),
    contact: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <rect x="6" y="11" width="28" height="18" rx="3" fill="#053B0C" />
        <path d="M6 12 L20 22 L34 12" stroke="#FFCE00" strokeWidth="2.5" fill="none" />
      </svg>
    ),
  }[type];

  return (
    <span className={`inline-flex items-center justify-center w-11 h-11 rounded-lg shadow-sm shrink-0 ${styles}`}>
      {emojiShape}
    </span>
  );
};

import React, { useId } from 'react';
import { TapeProduct } from '../data/sweetTapeData';

interface TapeRollSvgProps {
  product: TapeProduct;
  className?: string;
  rotation?: number;
  showRollRim?: boolean;
}

export const TapeRollSvg: React.FC<TapeRollSvgProps> = ({
  product,
  className = 'w-64 h-64',
  rotation = 0,
  showRollRim = true,
}) => {
  const uid = useId().replace(/:/g, '');
  const topArcId = `top-arc-${uid}`;
  const bottomArcId = `bottom-arc-${uid}`;
  const rightArcId = `right-arc-${uid}`;
  const rimGradId = `rim-grad-${uid}`;

  // Split multi-word product names cleanly so they fit the inner core label like the real rolls
  const renderProductName = () => {
    const words = product.name.split(' ');
    if (product.id === 'double-sided-tissue') {
      return (
        <>
          <text
            x="160"
            y="148"
            textAnchor="middle"
            fill="#0A1A0D"
            fontFamily="'Anton', Impact, sans-serif"
            fontSize="18"
            letterSpacing="0.3"
          >
            DOUBLE-SIDED
          </text>
          <text
            x="160"
            y="168"
            textAnchor="middle"
            fill="#0A1A0D"
            fontFamily="'Anton', Impact, sans-serif"
            fontSize="20"
            letterSpacing="0.4"
          >
            TISSUE TAPE
          </text>
        </>
      );
    }
    if (words.length === 2) {
      return (
        <>
          <text
            x="160"
            y="148"
            textAnchor="middle"
            fill="#0A1A0D"
            fontFamily="'Anton', Impact, sans-serif"
            fontSize="24"
            letterSpacing="0.5"
          >
            {words[0]}
          </text>
          <text
            x="160"
            y="173"
            textAnchor="middle"
            fill="#0A1A0D"
            fontFamily="'Anton', Impact, sans-serif"
            fontSize="26"
            letterSpacing="0.6"
          >
            {words[1]}
          </text>
        </>
      );
    }
    return (
      <text
        x="160"
        y="164"
        textAnchor="middle"
        fill="#0A1A0D"
        fontFamily="'Anton', Impact, sans-serif"
        fontSize="24"
      >
        {product.name}
      </text>
    );
  };

  return (
    <div
      className={`inline-block select-none transition-transform duration-300 ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-[0_14px_24px_rgba(0,0,0,0.28)]">
        <defs>
          <radialGradient id={rimGradId} cx="42%" cy="38%" r="62%">
            <stop offset="58%" stopColor="#F5EFE0" stopOpacity="0.95" />
            <stop offset="78%" stopColor={product.rimColor} stopOpacity="0.9" />
            <stop offset="93%" stopColor="#DFD8C5" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#B2AA96" stopOpacity="0.98" />
          </radialGradient>

          {/* Top text path */}
          <path id={topArcId} d="M 74,160 A 86,86 0 0,1 246,160" fill="none" />
          {/* Right text path */}
          <path id={rightArcId} d="M 225,84 A 100,100 0 0,1 245,212" fill="none" />
          {/* Bottom text path */}
          <path id={bottomArcId} d="M 60,175 A 102,102 0 0,0 260,175" fill="none" />
        </defs>

        {/* Outer wound tape layers */}
        {showRollRim && (
          <>
            <circle cx="160" cy="160" r="154" fill={`url(#${rimGradId})`} />
            {/* Subtle concentric tape winding lines */}
            <circle cx="160" cy="160" r="147" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            <circle cx="160" cy="160" r="139" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
            <circle cx="160" cy="160" r="131" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
          </>
        )}

        {/* Colored Inner Cardboard Core */}
        <circle cx="160" cy="160" r="123" fill={product.ringColor} stroke="#0B1F0E" strokeWidth="2.5" />

        {/* Subtle inner bevel shadow */}
        <circle cx="160" cy="160" r="118" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />

        {/* Center White Label Disc */}
        <circle cx="160" cy="160" r="72" fill="#F9F8F3" stroke="#0B1F0E" strokeWidth="2" />

        {/* Colored bottom banner inside the white center disc */}
        <path
          d="M 96 193 A 71 71 0 0 0 224 193 Z"
          fill={product.ringColor}
        />

        {/* Curved Ring Text */}
        <text
          fill="#0A1A0D"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize="9.5"
          letterSpacing="0.7"
        >
          <textPath href={`#${topArcId}`} startOffset="22%" textAnchor="middle">
            {product.topCurvedText}
          </textPath>
        </text>

        <text
          fill="#0A1A0D"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize="7.5"
          letterSpacing="0.5"
        >
          <textPath href={`#${rightArcId}`} startOffset="50%" textAnchor="middle">
            {product.rightCurvedText}
          </textPath>
        </text>

        <text
          fill="#0A1A0D"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="700"
          fontSize="8.3"
          letterSpacing="0.2"
        >
          <textPath href={`#${bottomArcId}`} startOffset="50%" textAnchor="middle">
            {product.bottomCurvedText}
          </textPath>
        </text>

        {/* Mini SweetTape Logo on white disc */}
        <g transform="translate(131, 96) scale(0.32)">
          <path d="M 14 28 Q 90 4 166 28 L 158 84 Q 90 100 22 84 Z" fill="#053B0C" />
          <text x="90" y="50" textAnchor="middle" fill="#B8FF00" fontFamily="'Anton', sans-serif" fontSize="32">
            SWEET
          </text>
          <text x="90" y="80" textAnchor="middle" fill="#B8FF00" fontFamily="'Anton', sans-serif" fontSize="34">
            TAPE
          </text>
        </g>

        {/* Product Title */}
        {renderProductName()}

        {/* Crisp Barcode Strip */}
        <g transform="translate(130, 178)">
          <rect x="0" y="0" width="60" height="14" fill="#FFFFFF" rx="1" />
          {[2, 5, 7, 11, 13, 17, 20, 22, 26, 28, 31, 35, 38, 40, 44, 47, 50, 54, 57].map((bx, i) => (
            <rect
              key={bx}
              x={bx}
              y="2"
              width={i % 3 === 0 ? 2.2 : 1.1}
              height="10"
              fill="#111111"
            />
          ))}
        </g>

        {/* Bottom Variant Label (e.g. NORMAL / LOW NOISE / CELLO • EASY-TEAR) */}
        <text
          x="160"
          y="214"
          textAnchor="middle"
          fill={product.id === 'opp-low-noise' || product.id === 'masking-tape' ? '#0A1A0D' : '#FFFFFF'}
          fontFamily="'Anton', Impact, sans-serif"
          fontSize={product.bottomLabel.length > 10 ? '13' : '16'}
          letterSpacing="0.8"
        >
          {product.bottomLabel}
        </text>
      </svg>
    </div>
  );
};

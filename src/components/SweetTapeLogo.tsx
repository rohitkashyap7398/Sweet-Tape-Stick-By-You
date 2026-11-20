import React from 'react';

interface SweetTapeLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  inverted?: boolean;
}

export const SweetTapeLogo: React.FC<SweetTapeLogoProps> = ({
  className = '',
  size = 'md',
  inverted = false,
}) => {
  const dimensions = {
    xs: 'w-14 h-9',
    sm: 'w-20 h-12',
    md: 'w-28 h-16',
    lg: 'w-44 h-24',
  }[size];

  const bgFill = inverted ? '#B8FF00' : '#053B0C';
  const textFill = inverted ? '#053B0C' : '#B8FF00';
  const outlineFill = inverted ? '#053B0C' : '#FFFFFF';

  return (
    <span className={`inline-flex items-center justify-center select-none ${dimensions} ${className}`}>
      <svg viewBox="0 0 180 108" className="w-full h-full drop-shadow-sm overflow-visible" aria-label="Sweet Tape">
        {/* Outer Sticker Border */}
        <path
          d="M 14 28 Q 90 4 166 28 L 158 84 Q 90 100 22 84 Z"
          fill={outlineFill}
          stroke={outlineFill}
          strokeWidth="8"
          strokeLinejoin="round"
        />
        {/* Inner Badge Body */}
        <path
          d="M 14 28 Q 90 4 166 28 L 158 84 Q 90 100 22 84 Z"
          fill={bgFill}
        />
        {/* SWEET */}
        <text
          x="90"
          y="50"
          textAnchor="middle"
          fill={textFill}
          fontFamily="'Anton', Impact, sans-serif"
          fontSize="32"
          letterSpacing="1"
        >
          SWEET
        </text>
        {/* TAPE */}
        <text
          x="90"
          y="80"
          textAnchor="middle"
          fill={textFill}
          fontFamily="'Anton', Impact, sans-serif"
          fontSize="34"
          letterSpacing="1.5"
        >
          TAPE
        </text>
        {/* TM mark */}
        <text
          x="166"
          y="21"
          fill={bgFill}
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize="10"
        >
          TM
        </text>
      </svg>
    </span>
  );
};

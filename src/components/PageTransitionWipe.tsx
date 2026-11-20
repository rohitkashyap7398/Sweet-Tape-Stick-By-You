import React from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface PageTransitionWipeProps {
  isActive: boolean;
}

const BANDS = [
  { color: '#E3572B', delay: 0 },
  { color: '#FFCE00', delay: 0.04 },
  { color: '#B8FF00', delay: 0.08 },
  { color: '#13B3E6', delay: 0.12 },
  { color: '#676AF6', delay: 0.16 },
  { color: '#053B0C', delay: 0.2 },
];

export const PageTransitionWipe: React.FC<PageTransitionWipeProps> = ({ isActive }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          {BANDS.map((band, idx) => (
            <motion.div
              key={band.color}
              initial={{ y: '110%' }}
              animate={{ y: '-120%' }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.72,
                delay: band.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-x-[-15%] h-[145vh]"
              style={{
                zIndex: idx + 1,
              }}
            >
              <svg
                viewBox="0 0 1440 900"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <path
                  d="M0,160 Q720,-40 1440,160 L1440,740 Q720,940 0,740 Z"
                  fill={band.color}
                />
              </svg>
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

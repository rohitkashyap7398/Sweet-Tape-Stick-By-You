import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PageRoute } from '../data/sweetTapeData';
import { NavThumb } from './CraftIllustrations';
import { soundEngine } from '../utils/sound';

interface PullMeDrawerProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

const NAV_ITEMS: { id: PageRoute; label: string }[] = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'family', label: 'OUR FAMILY' },
  { id: 'news', label: 'NEWS' },
  { id: 'contact', label: 'CONTACT' },
];

export const PullMeDrawer: React.FC<PullMeDrawerProps> = ({ currentRoute, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<PageRoute | null>(null);

  const handleToggle = () => {
    soundEngine.playTapeTear();
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (route: PageRoute) => {
    soundEngine.playTapeTear();
    setIsOpen(false);
    setHoveredItem(null);
    if (route !== currentRoute) {
      onNavigate(route);
    }
  };

  return (
    <div className="fixed top-0 right-4 sm:right-8 z-40 flex flex-col items-end">
      {/* Expanded Menu Card */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.nav
            aria-label="Primary Navigation"
            initial={{ height: 0, opacity: 0.95 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0.95 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="w-[300px] sm:w-[370px] bg-[#FAF9F5] shadow-[0_18px_40px_rgba(0,0,0,0.28)] overflow-hidden border-x border-black/5"
          >
            <div className="pt-5 pb-3 px-6 flex flex-col">
              {NAV_ITEMS.map((item) => {
                const isActive = currentRoute === item.id;
                const isHovered = hoveredItem === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.id)}
                    onMouseEnter={() => {
                      setHoveredItem(item.id);
                      soundEngine.playPop(540);
                    }}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="group relative flex items-center justify-between py-2.5 border-b border-black/10 last:border-b-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#053B0C]"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <AnimatePresence>
                        {(isHovered || isActive) && (
                          <motion.div
                            initial={{ width: 0, opacity: 0, scale: 0.7 }}
                            animate={{ width: 44, opacity: 1, scale: 1 }}
                            exit={{ width: 0, opacity: 0, scale: 0.7 }}
                            transition={{ duration: 0.16 }}
                            className="shrink-0 overflow-hidden"
                          >
                            <NavThumb type={item.id} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <span
                        className={`font-display text-4xl sm:text-[42px] uppercase tracking-tight transition-colors whitespace-nowrap ${
                          isActive
                            ? 'text-[#053B0C]'
                            : 'text-[#0B2910] group-hover:text-[#053B0C]'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>

                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-150 ${
                        isActive || isHovered
                          ? 'bg-[#B8FF00] text-[#053B0C] scale-110'
                          : 'bg-[#B8FF00]/80 text-[#053B0C]'
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Bottom Serrated Tear Tab ("PULL ME") */}
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
        className="zigzag-bottom bg-[#FAF9F5] hover:bg-white text-[#053B0C] w-28 sm:w-32 pt-3 pb-4 px-3 shadow-[0_8px_20px_rgba(0,0,0,0.22)] transition-transform active:translate-y-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#053B0C]"
      >
        <div className="border-t border-dashed border-black/30 pt-2 text-center">
          <span className="font-display text-xs sm:text-sm tracking-wider uppercase block">
            {isOpen ? 'TUCK ME' : 'PULL ME'}
          </span>
        </div>
      </button>
    </div>
  );
};

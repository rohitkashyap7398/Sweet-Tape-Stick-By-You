import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PageRoute, TAPE_PRODUCTS, TapeProduct } from '../data/sweetTapeData';
import { TapeRollSvg } from '../components/TapeRollSvg';
import { PhysicsFooter } from '../components/PhysicsFooter';
import { soundEngine } from '../utils/sound';

interface OurFamilyPageProps {
  onNavigate: (route: PageRoute) => void;
  onSelectProduct: (product: TapeProduct) => void;
}

export const OurFamilyPage: React.FC<OurFamilyPageProps> = ({ onNavigate, onSelectProduct }) => {
  const [activeRoll, setActiveRoll] = useState<TapeProduct | null>(null);

  const bgColor = activeRoll ? activeRoll.pageBgColor : '#B8FF00';
  const textColor = activeRoll ? activeRoll.pageTextColor : '#053B0C';

  return (
    <div className="w-full">
      <section
        className="crumpled-paper min-h-[82vh] pt-28 sm:pt-32 pb-20 px-4 sm:px-8 transition-colors duration-300 flex flex-col justify-between"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="crumpled-content max-w-7xl mx-auto w-full flex flex-col items-center">
          <h1 className="font-display text-6xl sm:text-8xl lg:text-[108px] text-center uppercase leading-[0.88] tracking-tight mb-4">
            PICK YOUR PLAYER
          </h1>

          <div className="h-7 flex items-center justify-center mb-10">
            {activeRoll ? (
              <p className="font-hand text-2xl sm:text-3xl font-bold text-center">
                {activeRoll.name} ({activeRoll.subtitle}) — {activeRoll.tagline}
              </p>
            ) : (
              <p className="font-hand text-2xl sm:text-3xl opacity-80 text-center">
                Hover to preview color · click any roll for specs &amp; tear test
              </p>
            )}
          </div>

          {/* 6-Roll Lineup (matches video horizontal showcase) */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-3 items-center justify-items-center py-4">
            {TAPE_PRODUCTS.map((product, index) => {
              const isHovered = activeRoll?.id === product.id;
              return (
                <motion.button
                  key={product.id}
                  type="button"
                  onMouseEnter={() => {
                    setActiveRoll(product);
                    soundEngine.playPop(440 + index * 45);
                  }}
                  onFocus={() => setActiveRoll(product)}
                  onMouseLeave={() => setActiveRoll(null)}
                  onClick={() => {
                    soundEngine.playTapeTear();
                    onSelectProduct(product);
                  }}
                  whileHover={{ scale: 1.12, rotate: index % 2 === 0 ? -6 : 6, y: -10 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col items-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current rounded-full p-1"
                  aria-label={`Inspect ${product.name} ${product.subtitle}`}
                >
                  <TapeRollSvg
                    product={product}
                    className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52"
                  />
                  <span
                    className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider transition-opacity ${
                      isHovered ? 'opacity-100 bg-black/15' : 'opacity-70'
                    }`}
                  >
                    <span>{product.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <PhysicsFooter onNavigate={onNavigate} />
    </div>
  );
};

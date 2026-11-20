import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Check } from 'lucide-react';
import { TapeProduct } from '../data/sweetTapeData';
import { TapeRollSvg } from './TapeRollSvg';
import { soundEngine } from '../utils/sound';

interface ProductDetailModalProps {
  product: TapeProduct | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const [pullLength, setPullLength] = useState(32);
  const [tornCount, setTornCount] = useState(0);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 28, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#FAF9F5] text-[#053B0C] rounded-2xl shadow-2xl overflow-hidden border border-black/15"
          >
            {/* Top Tape Strip Header */}
            <div
              className="px-6 py-4 flex items-center justify-between border-b border-black/10"
              style={{ backgroundColor: product.pageBgColor, color: product.pageTextColor }}
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl sm:text-3xl tracking-tight">
                  {product.name}
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider opacity-80">
                  {product.subtitle}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  soundEngine.playPop(420);
                  onClose();
                }}
                aria-label="Close product specs"
                className="w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Roll Visual */}
              <div className="md:col-span-5 flex flex-col items-center">
                <TapeRollSvg
                  product={product}
                  className="w-52 h-52 sm:w-60 sm:h-60"
                  rotation={pullLength * 1.6}
                />
                <p className="font-hand text-xl text-[#053B0C]/80 mt-2 text-center">
                  “{product.tagline}”
                </p>
              </div>

              {/* Right Details & Interactive Pull Test */}
              <div className="md:col-span-7 space-y-5">
                <p className="text-sm sm:text-base text-[#053B0C]/85 leading-relaxed font-medium">
                  {product.description}
                </p>

                {/* Use cases as clean inline list */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-wider text-[#053B0C]/75">
                  {product.useCases.map((u, idx) => (
                    <React.Fragment key={u}>
                      <span>{u}</span>
                      {idx < product.useCases.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Spec Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-black/10 text-xs">
                  <div>
                    <span className="block text-[#053B0C]/55 font-bold uppercase">Widths</span>
                    <span className="font-bold text-sm tabular-nums">{product.specs.widths}</span>
                  </div>
                  <div>
                    <span className="block text-[#053B0C]/55 font-bold uppercase">Full Length</span>
                    <span className="font-bold text-sm tabular-nums">{product.specs.length}</span>
                  </div>
                  <div>
                    <span className="block text-[#053B0C]/55 font-bold uppercase">Carrier</span>
                    <span className="font-bold text-sm">{product.specs.backing}</span>
                  </div>
                  <div>
                    <span className="block text-[#053B0C]/55 font-bold uppercase">Adhesive</span>
                    <span className="font-bold text-sm">{product.specs.adhesion}</span>
                  </div>
                </div>

                {/* Interactive Unroll & Tear Strip */}
                <div className="bg-[#EFECE3] p-4 rounded-xl border border-black/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wide">
                    <span>Interactive Unroll Strip</span>
                    <span className="tabular-nums">{pullLength} cm pulled</span>
                  </div>
                  <div className="relative h-9 bg-white/70 rounded-lg overflow-hidden border border-black/10 flex items-center px-2">
                    <div
                      className="h-6 rounded-sm transition-all duration-75 shadow-sm flex items-center justify-end pr-2 text-[10px] font-extrabold uppercase tracking-wider"
                      style={{
                        width: `${pullLength}%`,
                        backgroundColor: product.tapeStripColor,
                        color: product.pageTextColor,
                        borderRight: '2px dashed rgba(0,0,0,0.35)',
                      }}
                    >
                      STICK!
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={12}
                      max={100}
                      value={pullLength}
                      onChange={(e) => setPullLength(Number(e.target.value))}
                      aria-label="Pull tape strip length"
                      className="flex-1 accent-[#053B0C] cursor-pointer"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        soundEngine.playTapeTear();
                        setTornCount((c) => c + 1);
                        setPullLength(18);
                      }}
                      className="px-4 py-2 rounded-lg bg-[#053B0C] text-[#B8FF00] font-display text-sm tracking-wider hover:bg-[#085413] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      TEAR STRIP
                    </button>
                  </div>
                  {tornCount > 0 && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#053B0C]">
                      <Check className="w-3.5 h-3.5" />
                      <span>
                        {tornCount} clean {tornCount === 1 ? 'strip' : 'strips'} torn · zero residue!
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

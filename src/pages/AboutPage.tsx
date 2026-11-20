import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERITAGE_MILESTONES, PageRoute, TAPE_PRODUCTS } from '../data/sweetTapeData';
import { TapeRollSvg } from '../components/TapeRollSvg';
import { PhysicsFooter } from '../components/PhysicsFooter';
import { soundEngine } from '../utils/sound';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="crumpled-paper bg-[#B8FF00] text-[#053B0C] pt-28 sm:pt-32 pb-24 sm:pb-32 px-4 relative">
        <div className="crumpled-content max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#053B0C] text-[#B8FF00] px-3 py-1 text-xs font-display tracking-widest uppercase mb-4">
            <span>OUR STORY</span>
            <span aria-hidden="true">·</span>
            <span>MADE IN MALAYSIA</span>
          </div>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-[136px] leading-[0.86] uppercase tracking-tight text-balance">
            THREE GENERATIONS OF STICKING TOGETHER
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg font-semibold text-[#053B0C]/85 leading-relaxed">
            Built by SB Tape Group Sdn Bhd, Sweet Tape has been the quiet everyday companion in Malaysian homes, classrooms, workshops, and shipping rooms for over four decades.
          </p>
        </div>

        <div className="absolute bottom-0 inset-x-0 pointer-events-none">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-14 sm:h-20 block">
            <path d="M0,90 Q720,0 1440,90 Z" fill="#053B0C" />
          </svg>
        </div>
      </section>

      {/* HERITAGE MILESTONES */}
      <section className="crumpled-paper bg-[#053B0C] text-[#FAF9F5] py-16 sm:py-24 px-4 sm:px-10">
        <div className="crumpled-content max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HERITAGE_MILESTONES.map((item, idx) => (
              <div
                key={item.era}
                className="relative bg-[#FAF9F5] text-[#053B0C] p-7 sm:p-8 rounded-2xl shadow-2xl"
                style={{ transform: `rotate(${idx === 1 ? '1deg' : idx === 0 ? '-1.5deg' : '-0.8deg'})` }}
              >
                <div className="masking-tape-strip absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-7 z-10" />
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#053B0C]/60 mb-2 tabular-nums">
                  {item.era}
                </div>
                <h2 className="font-display text-3xl uppercase leading-[0.95] mb-3">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base font-medium leading-relaxed text-[#053B0C]/85">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>

          {/* KRAFT PROMISE CARD */}
          <div className="kraft-cardboard relative p-8 sm:p-14 rounded-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="scotch-tape absolute -top-5 right-12 w-32 h-10 rotate-2 z-20" />
            <div className="lg:col-span-8 space-y-4 text-[#4B290B]">
              <h2 className="font-display text-4xl sm:text-6xl uppercase leading-[0.9]">
                FULL LENGTH. HONEST ADHESION. NO SHORTCUTS.
              </h2>
              <p className="text-base sm:text-lg font-semibold leading-relaxed">
                Every core carries our exact yardage promise (± 5% tolerance), clean unwind tension, and reliable tack formulated for tropical humidity.
              </p>
              <button
                type="button"
                onClick={() => {
                  soundEngine.playTapeTear();
                  onNavigate('family');
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#053B0C] text-[#B8FF00] font-display text-xl tracking-wide rounded-lg hover:scale-105 transition-transform cursor-pointer"
              >
                <span>MEET ALL 6 ROLLS</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <TapeRollSvg product={TAPE_PRODUCTS[2]} className="w-52 h-52 sm:w-60 sm:h-60" rotation={-10} />
            </div>
          </div>
        </div>
      </section>

      <PhysicsFooter onNavigate={onNavigate} />
    </div>
  );
};

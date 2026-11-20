import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { PageRoute, TAPE_PRODUCTS, TapeProduct } from '../data/sweetTapeData';
import { SweetTapeLogo } from '../components/SweetTapeLogo';
import { TapeRollSvg } from '../components/TapeRollSvg';
import {
  CreativeHandsArt,
  FixHandsArt,
  GiftBoxArt,
  LemonPostcard,
  ProtectHandsArt,
} from '../components/CraftIllustrations';
import { PhysicsFooter } from '../components/PhysicsFooter';
import { soundEngine } from '../utils/sound';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onSelectProduct: (product: TapeProduct) => void;
}

const CREATIVE_MODES = [
  {
    id: 'labeling',
    label: 'LABELING',
    bg: '#F3C77B',
    copy: 'Always ready for school projects, quick labels, and weekend crafts. Easy-going. Comes off clean. No drama.',
  },
  {
    id: 'paint-work',
    label: 'PAINT WORK',
    bg: '#FF9E5E',
    copy: 'Crisp paint lines on walls, canvases, and woodwork—sticks firm while you brush, peels clean when you finish.',
  },
  {
    id: 'bundling',
    label: 'BUNDLING',
    bg: '#86EFAC',
    copy: 'Bundle loose brushes, cables, or rolled posters in seconds. Hand-tearable with zero sticky residue left behind.',
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProduct }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'clean up plates', done: false },
    { id: 2, text: 'daily yoga 30 minutes', done: false },
    { id: 3, text: 'meal prep', done: false },
  ]);
  const [creativeMode, setCreativeMode] = useState(CREATIVE_MODES[0]);
  const [rollSpinCount, setRollSpinCount] = useState(0);

  const heroRollRef = useRef<HTMLDivElement | null>(null);
  const kineticRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRollRef,
    offset: ['start end', 'end start'],
  });
  const heroRollRotate = useTransform(heroProgress, [0, 1], [-18, 68]);

  const { scrollYProgress: kineticProgress } = useScroll({
    target: kineticRef,
    offset: ['start end', 'end start'],
  });
  const row1X = useTransform(kineticProgress, [0, 1], ['8%', '-12%']);
  const row2X = useTransform(kineticProgress, [0, 1], ['-10%', '8%']);
  const row3X = useTransform(kineticProgress, [0, 1], ['10%', '-10%']);

  const toggleTodo = (id: number) => {
    soundEngine.playPop(660);
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div className="w-full overflow-hidden">
      {/* SECTION 1: HERO (ACID LIME CRUMPLED PAPER) */}
      <section className="crumpled-paper bg-[#B8FF00] text-[#053B0C] pt-24 sm:pt-28 pb-36 sm:pb-48 px-4 relative">
        <div className="crumpled-content max-w-6xl mx-auto flex flex-col items-center text-center">
          {/* Sub-lockup: WE'RE [LOGO] HERE TO */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-2 sm:mb-4">
            <span className="font-display text-2xl sm:text-3xl tracking-wide">WE&apos;RE</span>
            <SweetTapeLogo size="md" />
            <span className="font-display text-2xl sm:text-3xl tracking-wide">HERE TO</span>
          </div>

          {/* Massive Hero Title */}
          <h1 className="font-display text-[112px] sm:text-[185px] lg:text-[240px] leading-[0.82] tracking-tight uppercase select-none">
            STICK
            <br />
            BY YOU
          </h1>
        </div>

        {/* Bottom Curved Dark Forest Green Horizon */}
        <div className="absolute bottom-0 inset-x-0 pointer-events-none z-10">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 sm:h-28 block">
            <path d="M0,120 Q720,-30 1440,120 Z" fill="#053B0C" />
          </svg>
        </div>

        {/* Center Peeking Giant OPP Tape Low Noise Roll */}
        <div
          ref={heroRollRef}
          className="absolute -bottom-24 sm:-bottom-32 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
          onClick={() => {
            soundEngine.playTapeTear();
            onSelectProduct(TAPE_PRODUCTS[3]);
          }}
        >
          <motion.div
            style={{ rotate: heroRollRotate }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <TapeRollSvg product={TAPE_PRODUCTS[3]} className="w-56 h-56 sm:w-80 sm:h-80" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: DEEP FOREST GREEN STORY COLLAGE */}
      <section className="crumpled-paper bg-[#053B0C] pt-36 sm:pt-44 pb-24 sm:pb-32 px-4 sm:px-10 relative">
        <div className="crumpled-content max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Binder-Clipped Yellow TO-DO LIST + Tilted Lemon Postcard */}
          <div className="lg:col-span-5 flex flex-col items-start gap-14 sm:gap-20 pt-4">
            {/* Yellow Sticky To-Do List */}
            <div className="relative bg-[#FBEA6B] text-[#2F2B11] w-full max-w-[360px] p-6 sm:p-8 shadow-[0_22px_45px_rgba(0,0,0,0.45)] -rotate-3 ml-2 sm:ml-6">
              {/* Silver Metal Binder Clip at Top-Left */}
              <div className="absolute -top-6 left-4 flex flex-col items-center pointer-events-none">
                <div className="w-7 h-5 border-2 border-[#CBD5E1] rounded-t-full -mb-1" />
                <div className="w-12 h-7 bg-gradient-to-b from-[#E2E8F0] to-[#94A3B8] rounded-sm shadow-md border border-black/25 flex items-center justify-center">
                  <div className="w-8 h-1 bg-black/20 rounded-full" />
                </div>
              </div>
              {/* Small Tape Strip on Top-Right */}
              <div className="masking-tape-strip absolute -top-3 right-6 w-16 h-6 rotate-12 opacity-90" />

              <h3 className="font-display text-3xl sm:text-4xl text-[#2F2B11] tracking-wide mb-4">
                TO-DO LIST
              </h3>

              <ul className="space-y-3">
                {todos.map((item) => (
                  <li key={item.id} className="border-b border-dashed border-[#2F2B11]/35 pb-2">
                    <button
                      type="button"
                      onClick={() => toggleTodo(item.id)}
                      className="w-full flex items-center gap-3 text-left font-hand text-2xl sm:text-[26px] leading-none cursor-pointer group"
                    >
                      <span
                        className={`w-4 h-4 rounded-full border-2 border-[#2F2B11] flex items-center justify-center shrink-0 transition-colors ${
                          item.done ? 'bg-[#053B0C] text-[#FBEA6B]' : 'bg-transparent'
                        }`}
                      >
                        {item.done && <Check className="w-3 h-3 stroke-[3]" />}
                      </span>
                      <span className={item.done ? 'line-through opacity-55' : 'group-hover:opacity-80'}>
                        {item.text}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tilted Lemon Postcard */}
            <motion.div
              whileHover={{ rotate: 1, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-[380px] -rotate-6 -ml-4 sm:ml-2"
            >
              <LemonPostcard />
            </motion.div>
          </div>

          {/* Right Column: Giant Kraft Cardboard + Tapes + Striped Gift Box */}
          <div className="lg:col-span-7 relative flex flex-col items-end">
            {/* Kraft Cardboard Sheet */}
            <div className="kraft-cardboard relative w-full p-8 sm:p-14 lg:p-16 shadow-[0_28px_60px_rgba(0,0,0,0.45)] border border-[#7C4C22]/40">
              {/* Translucent Frosted Scotch Tape on Left Edge */}
              <div className="scotch-tape absolute top-10 -left-7 w-14 h-56 sm:h-72 -rotate-1 z-20" />
              {/* Brown Packing Tape on Top Edge */}
              <div className="packing-tape absolute -top-9 left-8 right-12 h-16 sm:h-20 rotate-[0.8deg] z-20" />

              <h2 className="font-display text-4xl sm:text-6xl lg:text-[68px] text-[#663B14] leading-[0.95] uppercase tracking-tight">
                DIY FAIL,
                <br />
                MOVING DAY
                <br />
                CHAOS, SCHOOL
                <br />
                PROJECT
                <br />
                EMERGENCY,
                <br />
                LAST-MINUTES
                <br />
                FIXES. WE
                <br />
                ALWAYS STICK
                <br />
                BY YOU.
              </h2>
            </div>

            {/* Striped Gift Box Overlapping Bottom-Right */}
            <motion.div
              whileHover={{ y: -6, rotate: -1 }}
              transition={{ duration: 0.2 }}
              className="relative -mt-12 sm:-mt-20 mr-0 sm:-mr-6 w-64 sm:w-80 z-30"
            >
              <GiftBoxArt className="rounded-sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CURVED ACID LIME MARQUEE RIBBON */}
      <div className="relative bg-[#053B0C] -mt-1">
        <div className="bg-[#FF7A00] pt-10 sm:pt-14 relative overflow-hidden">
          {/* Curved Arched Lime Ribbon */}
          <div className="relative -mx-8 sm:-mx-12 -rotate-[1.6deg] bg-[#B8FF00] text-[#053B0C] py-3 sm:py-4 border-y-4 border-[#053B0C] shadow-lg overflow-hidden">
            <div className="flex w-max animate-marquee whitespace-nowrap">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex items-center gap-8 px-4 font-display text-3xl sm:text-5xl uppercase tracking-wide">
                  <span>HAS TO HOLD</span>
                  <span aria-hidden="true">·</span>
                  <span>WHEN LIFE GETS MESSY</span>
                  <span aria-hidden="true">·</span>
                  <span>SWEET TAPE STICKS BY YOU</span>
                  <span aria-hidden="true">·</span>
                  <span>THREE GENERATIONS STRONG</span>
                  <span aria-hidden="true">·</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: WARM ORANGE "THE CREATIVE" SHOWCASE */}
      <section className="crumpled-paper bg-[#FF7A00] text-[#FFE047] pt-12 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-10 relative">
        <div className="crumpled-content max-w-7xl mx-auto">
          {/* Kicker Tag */}
          <div className="flex justify-center mb-4">
            <span className="bg-[#053B0C] text-[#FAF9F5] font-display text-xs sm:text-sm tracking-widest uppercase px-4 py-1.5 rounded-sm">
              MEET THE ONE WHO STICKS
            </span>
          </div>

          {/* Giant Background Headline */}
          <h2 className="font-display text-[74px] sm:text-[138px] lg:text-[184px] text-[#FFD739] text-center leading-[0.82] uppercase select-none">
            THE
            <br />
            CREATIVE
          </h2>

          {/* 3-Column Interactive Showcase */}
          <div className="relative -mt-12 sm:-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side: Use-Case Tabs & Copy */}
            <div className="lg:col-span-4 space-y-5 order-2 lg:order-1">
              <div className="flex items-center gap-3">
                {CREATIVE_MODES.map((m) => {
                  const active = creativeMode.id === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => {
                        soundEngine.playPop(540);
                        setCreativeMode(m);
                      }}
                      className={`group flex flex-col items-center gap-1.5 cursor-pointer transition-transform ${
                        active ? 'scale-105' : 'opacity-80 hover:opacity-100'
                      }`}
                    >
                      <span
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl shadow-md border-2 flex items-center justify-center text-[10px] font-extrabold uppercase text-[#053B0C] p-1 text-center ${
                          active ? 'border-[#053B0C] ring-2 ring-[#B8FF00]' : 'border-black/20'
                        }`}
                        style={{ backgroundColor: m.bg }}
                      >
                        {m.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="text-sm sm:text-base font-semibold text-[#FFF7DA] max-w-xs leading-relaxed">
                {creativeMode.copy}
              </p>
            </div>

            {/* Center: Giant Masking Tape Roll + Explore Sticker */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative order-1 lg:order-2">
              <motion.div
                animate={{ rotate: rollSpinCount * 360 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <TapeRollSvg
                  product={TAPE_PRODUCTS[1]}
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 cursor-pointer"
                />
              </motion.div>

              {/* Circular Sticker "EXPLORE ->" */}
              <button
                type="button"
                onClick={() => {
                  soundEngine.playTapeTear();
                  onSelectProduct(TAPE_PRODUCTS[1]);
                }}
                className="absolute right-2 sm:right-4 bottom-6 sm:bottom-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FAF9F5] text-[#053B0C] shadow-xl border-2 border-[#053B0C]/15 flex flex-col items-center justify-center rotate-12 hover:scale-110 transition-transform cursor-pointer"
              >
                <span className="font-display text-lg sm:text-xl tracking-wide">EXPLORE</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Right Side: Taped Craft Card + ROLL IT! Action */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end gap-4 order-3">
              <div className="relative w-52 sm:w-60 -rotate-3">
                <div className="masking-tape-strip absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-7 rotate-2 z-20" />
                <CreativeHandsArt className="aspect-square" />
              </div>

              <button
                type="button"
                onClick={() => {
                  soundEngine.playTapeTear();
                  setRollSpinCount((c) => c + 1);
                }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <span className="font-hand text-2xl text-[#053B0C] font-bold bg-[#B8FF00] px-3 py-1 rounded-sm -rotate-6 group-hover:rotate-0 transition-transform shadow">
                  ROLL IT!
                </span>
                <div className="w-16 h-16 rounded-full border-2 border-[#053B0C] bg-[#FAF9F5] flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <TapeRollSvg product={TAPE_PRODUCTS[1]} className="w-12 h-12" showRollRim={false} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Curved Transition to Acid Lime */}
        <div className="absolute bottom-0 inset-x-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 sm:h-20 block">
            <path d="M0,80 Q720,0 1440,80 Z" fill="#B8FF00" />
          </svg>
        </div>
      </section>

      {/* SECTION 5: WHY WE EXIST + KINETIC HORIZONTAL SHOWCASE (TO CREATE / TO FIX / TO PROTECT) */}
      <section ref={kineticRef} className="crumpled-paper bg-[#B8FF00] text-[#053B0C] pt-12 sm:pt-16 pb-24 sm:pb-32 overflow-hidden">
        <div className="crumpled-content">
          {/* Header */}
          <div className="max-w-4xl mx-auto px-4 text-center mb-16 sm:mb-24">
            <div className="inline-flex items-center gap-2 bg-[#053B0C] text-[#B8FF00] px-3 py-1 text-xs font-display tracking-widest uppercase mb-4">
              <span>1</span>
              <span aria-hidden="true">·</span>
              <span>WHY WE EXIST</span>
            </div>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-[84px] leading-[0.88] uppercase text-balance">
              WE&apos;RE HERE FOR THE EVERYDAY MOMENTS.
            </h2>
          </div>

          {/* KINETIC ROW 1: TO CREATE */}
          <div className="relative py-8 sm:py-12">
            <motion.div
              style={{ x: row1X }}
              className="flex items-center justify-center gap-6 sm:gap-10 whitespace-nowrap px-4"
            >
              <span className="font-display text-[110px] sm:text-[190px] lg:text-[230px] leading-none">
                TO
              </span>

              <div className="relative shrink-0 w-44 sm:w-64 lg:w-72">
                <div className="masking-tape-strip absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 z-20" />
                <CreativeHandsArt className="aspect-square" />
                <p className="font-hand text-xl sm:text-2xl text-[#053B0C] mt-3 -rotate-2 whitespace-normal leading-tight">
                  every masterpiece needs to stick
                </p>
              </div>

              <span className="font-display text-[110px] sm:text-[190px] lg:text-[230px] leading-none">
                CREATE
              </span>

              <button
                type="button"
                onClick={() => {
                  soundEngine.playPop(540);
                  onSelectProduct(TAPE_PRODUCTS[1]);
                }}
                className="shrink-0 -ml-16 sm:-ml-24 hover:scale-110 transition-transform cursor-pointer"
                aria-label="Inspect Masking Tape"
              >
                <TapeRollSvg product={TAPE_PRODUCTS[1]} className="w-36 h-36 sm:w-52 sm:h-52" rotation={-12} />
              </button>

              <button
                type="button"
                onClick={() => {
                  soundEngine.playPop(600);
                  onSelectProduct(TAPE_PRODUCTS[5]);
                }}
                className="shrink-0 -mt-20 hover:scale-110 transition-transform cursor-pointer"
                aria-label="Inspect Double-Sided Tissue Tape"
              >
                <TapeRollSvg product={TAPE_PRODUCTS[5]} className="w-32 h-32 sm:w-48 sm:h-48" rotation={14} />
              </button>
            </motion.div>
          </div>

          {/* KINETIC ROW 2: TO FIX */}
          <div className="relative py-8 sm:py-12">
            <motion.div
              style={{ x: row2X }}
              className="flex items-center justify-center gap-6 sm:gap-10 whitespace-nowrap px-4"
            >
              <button
                type="button"
                onClick={() => {
                  soundEngine.playPop(460);
                  onSelectProduct(TAPE_PRODUCTS[0]);
                }}
                className="shrink-0 hover:scale-110 transition-transform cursor-pointer"
                aria-label="Inspect Cloth Tape"
              >
                <TapeRollSvg product={TAPE_PRODUCTS[0]} className="w-36 h-36 sm:w-52 sm:h-52" rotation={-8} />
              </button>

              <span className="font-display text-[110px] sm:text-[190px] lg:text-[230px] leading-none">
                TO FIX
              </span>

              <div className="relative shrink-0 w-44 sm:w-64 lg:w-72">
                <div className="masking-tape-strip absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 rotate-2 z-20" />
                <FixHandsArt className="aspect-square" />
                <p className="font-hand text-xl sm:text-2xl text-[#053B0C] mt-3 rotate-1 whitespace-normal leading-tight">
                  the quick fix that outlasts the thing it fixed
                </p>
              </div>
            </motion.div>
          </div>

          {/* KINETIC ROW 3: TO PROTECT */}
          <div className="relative py-8 sm:py-12">
            <motion.div
              style={{ x: row3X }}
              className="flex items-center justify-center gap-6 sm:gap-10 whitespace-nowrap px-4"
            >
              <span className="font-display text-[110px] sm:text-[190px] lg:text-[230px] leading-none">
                TO
              </span>

              <div className="relative shrink-0 w-44 sm:w-64 lg:w-72">
                <div className="scotch-tape absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 -rotate-2 z-20" />
                <ProtectHandsArt className="aspect-square" />
                <p className="font-hand text-xl sm:text-2xl text-[#053B0C] mt-3 -rotate-2 whitespace-normal leading-tight">
                  from our hands to theirs, keeping intact
                </p>
              </div>

              <span className="font-display text-[110px] sm:text-[190px] lg:text-[230px] leading-none">
                PROTECT
              </span>

              <button
                type="button"
                onClick={() => {
                  soundEngine.playPop(500);
                  onSelectProduct(TAPE_PRODUCTS[2]);
                }}
                className="shrink-0 -ml-16 sm:-ml-24 hover:scale-110 transition-transform cursor-pointer"
                aria-label="Inspect OPP Tape Normal"
              >
                <TapeRollSvg product={TAPE_PRODUCTS[2]} className="w-36 h-36 sm:w-52 sm:h-52" rotation={10} />
              </button>
            </motion.div>
          </div>

          {/* CTA Bridge to Full Family */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                soundEngine.playTapeTear();
                onNavigate('family');
              }}
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#053B0C] text-[#B8FF00] font-display text-2xl sm:text-3xl tracking-wide rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer"
            >
              <span>PICK YOUR PLAYER</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: INTERACTIVE PHYSICS FOOTER */}
      <PhysicsFooter onNavigate={onNavigate} />
    </div>
  );
};

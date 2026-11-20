import React, { useEffect, useRef, useState } from 'react';
import { PageRoute, TAPE_PRODUCTS } from '../data/sweetTapeData';
import { SweetTapeLogo } from './SweetTapeLogo';
import { TapeRollSvg } from './TapeRollSvg';
import { soundEngine } from '../utils/sound';

interface PhysicsFooterProps {
  onNavigate: (route: PageRoute) => void;
}

interface BodyState {
  id: string;
  kind: 'tape' | 'social';
  productIndex?: number;
  socialType?: 'fb' | 'ig' | 'tt';
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  angle: number;
  vAngle: number;
}

export const PhysicsFooter: React.FC<PhysicsFooterProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bodiesRef = useRef<BodyState[]>([]);
  const domRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const dragRef = useRef<{
    id: string;
    offsetX: number;
    offsetY: number;
    lastX: number;
    lastY: number;
    moved: boolean;
  } | null>(null);
  const [socialToast, setSocialToast] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 1200;
    const height = container.clientHeight || 560;
    const isSmall = width < 640;
    const tapeR = isSmall ? 56 : 108;
    const coinR = isSmall ? 32 : 52;

    const initial: BodyState[] = [
      { id: 'coin-tt', kind: 'social', socialType: 'tt', x: width * 0.08, y: height - coinR - 14, vx: 0, vy: 0, r: coinR, angle: -8, vAngle: 0 },
      { id: 'coin-fb', kind: 'social', socialType: 'fb', x: width * 0.14, y: height - coinR * 3 - 26, vx: 0, vy: 0, r: coinR, angle: 6, vAngle: 0 },
      { id: 'coin-ig', kind: 'social', socialType: 'ig', x: width * 0.18, y: height - coinR - 14, vx: 0, vy: 0, r: coinR, angle: 0, vAngle: 0 },
      { id: 'tape-stationery', kind: 'tape', productIndex: 4, x: width * 0.34, y: height - tapeR - 12, vx: 0, vy: 0, r: tapeR, angle: 12, vAngle: 0 },
      { id: 'tape-masking', kind: 'tape', productIndex: 1, x: width * 0.52, y: height - tapeR - 12, vx: 0, vy: 0, r: tapeR, angle: -18, vAngle: 0 },
      { id: 'tape-tissue', kind: 'tape', productIndex: 5, x: width * 0.70, y: height - tapeR - 12, vx: 0, vy: 0, r: tapeR, angle: 8, vAngle: 0 },
      { id: 'tape-cloth', kind: 'tape', productIndex: 0, x: width * 0.88, y: height - tapeR - 12, vx: 0, vy: 0, r: tapeR, angle: -10, vAngle: 0 },
    ];

    bodiesRef.current = initial;

    let rafId = 0;
    const gravity = 0.48;
    const bounce = 0.52;
    const friction = 0.988;

    const step = () => {
      const boxW = container.clientWidth || 1200;
      const boxH = container.clientHeight || 560;
      const bodies = bodiesRef.current;

      for (let i = 0; i < bodies.length; i++) {
        const b = bodies[i];
        if (dragRef.current && dragRef.current.id === b.id) continue;

        b.vy += gravity;
        b.vx *= friction;
        b.vy *= 0.996;
        b.vAngle *= 0.96;

        b.x += b.vx;
        b.y += b.vy;
        b.angle += b.vAngle + b.vx * 0.18;

        // Floor & Ceiling bounds
        if (b.y + b.r > boxH - 10) {
          b.y = boxH - 10 - b.r;
          if (Math.abs(b.vy) > 1.2) {
            b.vy = -b.vy * bounce;
          } else {
            b.vy = 0;
          }
          b.vx *= 0.94;
        }
        if (b.y - b.r < 12) {
          b.y = 12 + b.r;
          b.vy = Math.abs(b.vy) * bounce;
        }

        // Left & Right walls
        if (b.x - b.r < 10) {
          b.x = 10 + b.r;
          b.vx = Math.abs(b.vx) * bounce;
        }
        if (b.x + b.r > boxW - 10) {
          b.x = boxW - 10 - b.r;
          b.vx = -Math.abs(b.vx) * bounce;
        }
      }

      // Circle-circle collisions (2 solver passes for crisp stacking)
      for (let pass = 0; pass < 2; pass++) {
        for (let i = 0; i < bodies.length; i++) {
          for (let j = i + 1; j < bodies.length; j++) {
            const a = bodies[i];
            const b = bodies[j];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const dist = Math.hypot(dx, dy) || 0.001;
            const minDist = a.r + b.r;

            if (dist < minDist) {
              const nx = dx / dist;
              const ny = dy / dist;
              const overlap = minDist - dist;

              const aDragged = dragRef.current?.id === a.id;
              const bDragged = dragRef.current?.id === b.id;

              if (aDragged) {
                b.x += nx * overlap;
                b.y += ny * overlap;
              } else if (bDragged) {
                a.x -= nx * overlap;
                a.y -= ny * overlap;
              } else {
                a.x -= nx * overlap * 0.5;
                a.y -= ny * overlap * 0.5;
                b.x += nx * overlap * 0.5;
                b.y += ny * overlap * 0.5;
              }

              const rvx = b.vx - a.vx;
              const rvy = b.vy - a.vy;
              const velAlongNormal = rvx * nx + rvy * ny;

              if (velAlongNormal < 0) {
                const restitution = 0.55;
                const impulse = (-(1 + restitution) * velAlongNormal) / 2;
                if (!aDragged) {
                  a.vx -= impulse * nx;
                  a.vy -= impulse * ny;
                  a.vAngle -= impulse * 0.35;
                }
                if (!bDragged) {
                  b.vx += impulse * nx;
                  b.vy += impulse * ny;
                  b.vAngle += impulse * 0.35;
                }
              }
            }
          }
        }
      }

      // Sync transforms directly to DOM for 60fps zero-re-render performance
      for (let i = 0; i < bodies.length; i++) {
        const b = bodies[i];
        const el = domRefs.current[b.id];
        if (el) {
          el.style.transform = `translate3d(${b.x - b.r}px, ${b.y - b.r}px, 0) rotate(${b.angle}deg)`;
          el.style.width = `${b.r * 2}px`;
          el.style.height = `${b.r * 2}px`;
        }
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handlePointerDown = (id: string, e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const body = bodiesRef.current.find((b) => b.id === id);
    if (!body) return;

    e.currentTarget.setPointerCapture(e.pointerId);
    soundEngine.playPop(380);
    dragRef.current = {
      id,
      offsetX: body.x - px,
      offsetY: body.y - py,
      lastX: px,
      lastY: py,
      moved: false,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const container = containerRef.current;
    if (!drag || !container) return;

    const rect = container.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const body = bodiesRef.current.find((b) => b.id === drag.id);
    if (!body) return;

    const dx = px - drag.lastX;
    const dy = py - drag.lastY;
    if (Math.hypot(dx, dy) > 3) drag.moved = true;

    body.x = Math.max(body.r + 10, Math.min(rect.width - body.r - 10, px + drag.offsetX));
    body.y = Math.max(body.r + 10, Math.min(rect.height - body.r - 10, py + drag.offsetY));
    body.vx = Math.max(-28, Math.min(28, dx * 0.9));
    body.vy = Math.max(-28, Math.min(28, dy * 0.9));

    drag.lastX = px;
    drag.lastY = py;
  };

  const handlePointerUp = (bodyId: string, socialType?: 'fb' | 'ig' | 'tt') => {
    const wasMoved = dragRef.current?.moved;
    dragRef.current = null;
    if (!wasMoved && socialType) {
      soundEngine.playPop(620);
      const label =
        socialType === 'fb'
          ? 'Facebook · @sweettapemy'
          : socialType === 'ig'
          ? 'Instagram · @sweettapeofficial'
          : 'TikTok · @sweettapemy';
      setSocialToast(label);
      setTimeout(() => setSocialToast(null), 2600);
    }
  };

  return (
    <footer className="relative bg-[#053B0C] text-[#B8FF00] overflow-hidden pt-20 sm:pt-28">
      {/* Curved upper arch */}
      <div className="absolute top-0 inset-x-0 -translate-y-1 pointer-events-none">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-14 sm:h-20">
          <path d="M0,0 Q720,90 1440,0 L1440,0 L0,0 Z" fill="currentColor" className="text-transparent" />
        </svg>
      </div>

      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        className="crumpled-paper bg-[#053B0C] relative min-h-[540px] sm:min-h-[600px] flex flex-col justify-between px-6 sm:px-14 pb-6 select-none touch-none"
      >
        <div className="crumpled-content flex flex-col items-center">
          {/* Footer Top Navigation */}
          <nav
            aria-label="Footer navigation"
            className="w-full max-w-6xl flex flex-wrap items-center justify-between gap-4 py-6 text-[#FAF9F5]"
          >
            {(
              [
                { id: 'family', label: 'OUR FAMILY' },
                { id: 'about', label: 'ABOUT' },
                { id: 'news', label: 'NEWS' },
                { id: 'contact', label: 'CONTACT' },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  soundEngine.playTapeTear();
                  onNavigate(item.id);
                }}
                className="font-display text-2xl sm:text-3xl tracking-wide hover:text-[#B8FF00] transition-colors cursor-pointer whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Center Giant Lockup */}
          <div className="mt-4 sm:mt-8 flex flex-col items-center text-center pointer-events-none">
            <SweetTapeLogo size="md" inverted />
            <h2 className="font-display text-[68px] sm:text-[130px] lg:text-[168px] text-[#B8FF00] uppercase leading-[0.86] mt-2 tracking-tight">
              STICK
              <br />
              BY YOU
            </h2>
            <p className="mt-3 text-xs sm:text-sm font-medium text-[#B8FF00]/75 tracking-wide">
              Grab & toss the tape rolls below
            </p>
          </div>
        </div>

        {/* Interactive Physics Bodies Layer */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          {[
            { id: 'coin-tt', kind: 'social' as const, socialType: 'tt' as const },
            { id: 'coin-fb', kind: 'social' as const, socialType: 'fb' as const },
            { id: 'coin-ig', kind: 'social' as const, socialType: 'ig' as const },
            { id: 'tape-stationery', kind: 'tape' as const, productIndex: 4 },
            { id: 'tape-masking', kind: 'tape' as const, productIndex: 1 },
            { id: 'tape-tissue', kind: 'tape' as const, productIndex: 5 },
            { id: 'tape-cloth', kind: 'tape' as const, productIndex: 0 },
          ].map((item) => (
            <div
              key={item.id}
              ref={(el) => {
                domRefs.current[item.id] = el;
              }}
              onPointerDown={(e) => handlePointerDown(item.id, e)}
              onPointerUp={() => handlePointerUp(item.id, item.socialType)}
              className="absolute top-0 left-0 pointer-events-auto cursor-grab active:cursor-grabbing will-change-transform"
              role="button"
              tabIndex={0}
              aria-label={
                item.kind === 'tape'
                  ? `Draggable ${TAPE_PRODUCTS[item.productIndex!].name}`
                  : `Sweet Tape ${item.socialType} link`
              }
            >
              {item.kind === 'tape' ? (
                <TapeRollSvg
                  product={TAPE_PRODUCTS[item.productIndex!]}
                  className="w-full h-full pointer-events-none"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-[#B8FF00] text-[#053B0C] shadow-[0_10px_24px_rgba(0,0,0,0.35)] border-2 border-[#053B0C]/20 flex items-center justify-center">
                  {item.socialType === 'fb' && (
                    <span className="font-display text-3xl sm:text-5xl">f</span>
                  )}
                  {item.socialType === 'ig' && (
                    <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                    </svg>
                  )}
                  {item.socialType === 'tt' && (
                    <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-10 sm:h-10" fill="currentColor">
                      <path d="M16.5 3c.4 2.3 1.9 3.9 4.1 4.2v3.1c-1.5 0-2.9-.5-4.1-1.3v6.2a5.8 5.8 0 1 1-5-5.7v3.2a2.6 2.6 0 1 0 1.8 2.5V3h3.2z" />
                    </svg>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Toast */}
        {socialToast && (
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-30 bg-[#FAF9F5] text-[#053B0C] px-4 py-2 rounded-lg shadow-xl text-xs sm:text-sm font-bold tracking-wide">
            {socialToast}
          </div>
        )}

        {/* Copyright line */}
        <div className="crumpled-content relative z-30 text-center pt-4 pointer-events-none">
          <p className="text-xs sm:text-sm font-semibold text-[#FAF9F5]/85 tracking-wide">
            Copyright © 2026. SB Tape Group Sdn Bhd
          </p>
        </div>
      </div>
    </footer>
  );
};

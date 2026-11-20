/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { PageRoute, TapeProduct } from './data/sweetTapeData';
import { PullMeDrawer } from './components/PullMeDrawer';
import { PageTransitionWipe } from './components/PageTransitionWipe';
import { SweetTapeLogo } from './components/SweetTapeLogo';
import { ProductDetailModal } from './components/ProductDetailModal';
import { HomePage } from './pages/HomePage';
import { OurFamilyPage } from './pages/OurFamilyPage';
import { NewsPage } from './pages/NewsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { soundEngine } from './utils/sound';

export default function App() {
  const [route, setRoute] = useState<PageRoute>('home');
  const [isWiping, setIsWiping] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<TapeProduct | null>(null);
  const [soundOn, setSoundOn] = useState(false);

  const handleNavigate = (nextRoute: PageRoute) => {
    if (nextRoute === route) return;
    setIsWiping(true);
    setTimeout(() => {
      setRoute(nextRoute);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }, 310);
    setTimeout(() => {
      setIsWiping(false);
    }, 900);
  };

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    soundEngine.setEnabled(next);
  };

  return (
    <div className="min-h-screen relative bg-[#B8FF00] text-[#053B0C]">
      {/* Persistent Top-Left Heritage Tagline */}
      <div className="fixed top-4 left-4 sm:left-6 z-30 pointer-events-none">
        <p className="font-display text-xs sm:text-sm uppercase leading-[1.05] tracking-wide text-[#053B0C]">
          STICK WITH YOU THROUGH
          <br />
          THREE GENERATIONS
        </p>
      </div>

      {/* Persistent Top-Center Logo on Subpages (Home shows it in hero lockup) */}
      {route !== 'home' && (
        <button
          type="button"
          onClick={() => {
            soundEngine.playTapeTear();
            handleNavigate('home');
          }}
          aria-label="Return to Sweet Tape home"
          className="fixed top-3 left-1/2 -translate-x-1/2 z-30 cursor-pointer hover:scale-105 transition-transform"
        >
          <SweetTapeLogo size="sm" />
        </button>
      )}

      {/* Persistent Top-Right Pull-Me Drawer */}
      <PullMeDrawer currentRoute={route} onNavigate={handleNavigate} />

      {/* Curved Multi-Color Tape Page Transition */}
      <PageTransitionWipe isActive={isWiping} />

      {/* Active Page Content */}
      <main>
        {route === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
          />
        )}
        {route === 'family' && (
          <OurFamilyPage
            onNavigate={handleNavigate}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
          />
        )}
        {route === 'news' && <NewsPage onNavigate={handleNavigate} />}
        {route === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {route === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Bottom-Right Tactile Tape-Roll Sound Toggle Pill */}
      <button
        type="button"
        onClick={toggleSound}
        aria-label={soundOn ? 'Mute tape sound effects' : 'Enable tape sound effects'}
        title={soundOn ? 'Sound On' : 'Sound Off'}
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-6 z-40 flex items-center gap-2 bg-[#E9E4D5] hover:bg-[#FAF9F5] text-[#053B0C] p-1.5 pr-3 rounded-full shadow-[0_6px_18px_rgba(0,0,0,0.22)] border border-black/15 transition-all cursor-pointer"
      >
        <span
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform ${
            soundOn ? 'bg-[#B8FF00] translate-x-0.5' : 'bg-[#CFC8B4]'
          }`}
        >
          {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </span>
        <span className="font-display text-xs tracking-wider uppercase">
          {soundOn ? 'SFX ON' : 'SFX'}
        </span>
      </button>

      {/* Product Spec & Tear Test Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

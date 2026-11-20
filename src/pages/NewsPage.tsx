import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { NEWS_ARTICLES, NewsArticle, PageRoute } from '../data/sweetTapeData';
import { DiyGiftArt, NewsHandsBouquetArt } from '../components/CraftIllustrations';
import { PhysicsFooter } from '../components/PhysicsFooter';
import { soundEngine } from '../utils/sound';

interface NewsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'ALL' | 'EVENT' | 'NEWS'>('ALL');
  const [openArticle, setOpenArticle] = useState<NewsArticle | null>(null);

  const highlightArticle = NEWS_ARTICLES.find((a) => a.highlight) || NEWS_ARTICLES[0];
  const filteredArticles =
    filter === 'ALL'
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((a) => a.category === filter);

  const counts = {
    ALL: NEWS_ARTICLES.length,
    EVENT: NEWS_ARTICLES.filter((a) => a.category === 'EVENT').length,
    NEWS: NEWS_ARTICLES.filter((a) => a.category === 'NEWS').length,
  };

  return (
    <div className="w-full">
      {/* HERO: ACID LIME CRUMPLED PAPER */}
      <section className="crumpled-paper bg-[#B8FF00] text-[#053B0C] pt-28 sm:pt-32 pb-24 sm:pb-32 px-4 relative">
        <div className="crumpled-content max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#053B0C] text-[#B8FF00] px-3 py-1 text-xs font-display tracking-widest uppercase mb-4">
            <span>2</span>
            <span aria-hidden="true">·</span>
            <span>NEWS</span>
          </div>

          <h1 className="font-display text-[76px] sm:text-[138px] lg:text-[168px] leading-[0.84] uppercase tracking-tight">
            WHAT&apos;S
            <br />
            ROLLING
          </h1>

          {/* Handwritten right annotation matching video 01:19 */}
          <div className="hidden md:block absolute right-4 bottom-8 text-left rotate-[-4deg]">
            <div className="w-24 h-px bg-[#053B0C]/60 mb-1" />
            <p className="font-hand text-xl text-[#053B0C] leading-tight">
              catch the latest
              <br />
              updates, lah
            </p>
          </div>
        </div>

        {/* Bottom Curved Forest Green Horizon */}
        <div className="absolute bottom-0 inset-x-0 pointer-events-none">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-14 sm:h-20 block">
            <path d="M0,90 Q720,0 1440,90 Z" fill="#053B0C" />
          </svg>
        </div>
      </section>

      {/* DARK FOREST GREEN NEWS BOARD */}
      <section className="crumpled-paper bg-[#053B0C] text-[#FAF9F5] pt-8 sm:pt-14 pb-20 px-4 sm:px-10">
        <div className="crumpled-content max-w-6xl mx-auto space-y-20">
          {/* FEATURED HIGHLIGHT SPLIT CARD */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div
              onClick={() => {
                soundEngine.playPop(540);
                setOpenArticle(highlightArticle);
              }}
              className="lg:col-span-5 cursor-pointer group"
            >
              <NewsHandsBouquetArt className="w-full h-full min-h-[290px] group-hover:scale-[1.01] transition-transform" />
            </div>

            <div
              onClick={() => {
                soundEngine.playPop(540);
                setOpenArticle(highlightArticle);
              }}
              className="lg:col-span-7 relative lined-paper text-[#053B0C] rounded-2xl p-7 sm:p-10 shadow-2xl flex flex-col justify-between cursor-pointer group"
            >
              {/* Kraft tape holding card on left seam */}
              <div className="packing-tape absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-28 rounded-sm -rotate-1 z-20" />

              <div className="space-y-4">
                <span className="inline-block bg-[#B8FF00] text-[#053B0C] font-display text-xs tracking-widest uppercase px-2.5 py-1">
                  HIGHLIGHT
                </span>
                <h2 className="font-display text-3xl sm:text-5xl leading-[0.95] uppercase group-hover:text-[#0B6618] transition-colors">
                  {highlightArticle.title}
                </h2>
              </div>

              <div className="pt-8 flex items-end justify-between">
                <div>
                  <div className="font-display text-5xl sm:text-6xl leading-none tabular-nums">
                    {highlightArticle.day}
                  </div>
                  <div className="font-display text-sm sm:text-base tracking-wider uppercase mt-1 tabular-nums">
                    {highlightArticle.monthYear}
                  </div>
                </div>
                <span className="w-9 h-9 rounded-full bg-[#B8FF00] text-[#053B0C] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </span>
              </div>
            </div>
          </div>

          {/* FILTERABLE ALL / EVENT / NEWS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Filter Stack */}
            <div className="lg:col-span-4 space-y-1">
              {(['ALL', 'EVENT', 'NEWS'] as const).map((tab) => {
                const active = filter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => {
                      soundEngine.playPop(580);
                      setFilter(tab);
                    }}
                    className="w-full flex items-baseline justify-between py-2.5 border-b border-dashed border-[#FAF9F5]/25 text-left cursor-pointer group"
                  >
                    <span
                      className={`font-display text-5xl sm:text-6xl uppercase tracking-tight transition-colors ${
                        active ? 'text-[#B8FF00]' : 'text-[#FAF9F5] group-hover:text-[#B8FF00]/80'
                      }`}
                    >
                      {tab}
                    </span>
                    <span
                      className={`font-display text-xl sm:text-2xl tabular-nums ${
                        active ? 'text-[#B8FF00]' : 'text-[#FAF9F5]/65'
                      }`}
                    >
                      ({String(counts[tab]).padStart(2, '0')})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Article Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => {
                    soundEngine.playPop(540);
                    setOpenArticle(article);
                  }}
                  className="bg-[#FAF9F5] text-[#053B0C] rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between gap-5 cursor-pointer group hover:-translate-y-1 transition-transform"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-[#053B0C]/65 mb-2">
                      <span>{article.category}</span>
                      <span className="tabular-nums">
                        {article.day} {article.monthYear}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-[26px] leading-[1.02] uppercase mb-4 group-hover:text-[#0B6618] transition-colors">
                      {article.title}
                    </h3>
                    <span className="inline-flex w-8 h-8 rounded-full bg-[#B8FF00] text-[#053B0C] items-center justify-center mb-4">
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  </div>

                  <div className="grid grid-cols-12 gap-3 items-end">
                    <div className="col-span-4">
                      <div className="font-display text-4xl sm:text-5xl leading-none tabular-nums">
                        {article.day}
                      </div>
                      <div className="font-display text-xs tracking-wider uppercase mt-0.5 tabular-nums">
                        {article.monthYear}
                      </div>
                    </div>
                    <div className="col-span-8">
                      {article.artType === 'bouquet' ? (
                        <NewsHandsBouquetArt className="h-32 sm:h-36" />
                      ) : (
                        <DiyGiftArt className="h-32 sm:h-36" />
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      <AnimatePresence>
        {openArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenArticle(null)}
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl lined-paper text-[#053B0C] rounded-2xl shadow-2xl p-6 sm:p-10 relative border border-black/15"
            >
              <button
                type="button"
                onClick={() => setOpenArticle(null)}
                aria-label="Close article"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#053B0C] text-[#B8FF00] flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-extrabold uppercase tracking-wider text-[#053B0C]/65 mb-2 tabular-nums">
                {openArticle.category} · {openArticle.day} {openArticle.monthYear}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase leading-[0.98] mb-6 pr-10">
                {openArticle.title}
              </h2>

              <div className="space-y-4 text-sm sm:text-base font-medium leading-relaxed text-[#053B0C]/90">
                {openArticle.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <PhysicsFooter onNavigate={onNavigate} />
    </div>
  );
};

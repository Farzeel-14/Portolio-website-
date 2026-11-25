import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from './FadeIn';
import { TECH_CATEGORIES } from '../data/portfolioData';
import { Terminal, Cpu, Database, Sparkles, Layers, ArrowUpRight, CheckCircle2, FileText, Share2, Compass, Search } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'TECHNICAL & ARCHITECTURE': <Cpu size={24} className="text-[#67E8F9]" />,
  'ON-PAGE & CONTENT': <FileText size={24} className="text-[#A855F7]" />,
  'OFF-PAGE & AUTHORITY': <Share2 size={24} className="text-[#D946EF]" />,
  'LOCAL SEO & GEO': <Compass size={24} className="text-amber-400" />,
  'FRONTEND': <Cpu size={24} className="text-[#67E8F9]" />,
  'BACKEND': <Terminal size={24} className="text-[#A855F7]" />,
};

export const TechStackSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeCategory = TECH_CATEGORIES[selectedIdx];

  return (
    <section
      id="expertise"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 z-10 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading & Subtitle */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={30}>
            <span className="text-xs font-mono uppercase tracking-widest text-[#A855F7] mb-2 block">
              Core Capabilities
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 130px)' }}
            >
              SEO ARSENAL
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#9FAAB4] font-light max-w-xl mx-auto">
              Diagnostic toolkits and execution capabilities I use to capture search intent and dominate SERPs.
            </p>
          </FadeIn>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {TECH_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={cat.category}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#A855F7] to-[#D946EF] text-white shadow-[0_0_25px_rgba(168,85,247,0.35)] scale-105'
                    : 'bg-[#151515] border border-white/10 text-[#9FAAB4] hover:text-white hover:border-white/25'
                }`}
              >
                <span className="font-mono text-[11px] opacity-75">{cat.number}</span>
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Editorial Category Detail Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-[36px] sm:rounded-[48px] bg-[#121212] border border-white/10 p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Top Row: Category Meta & Large Title */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/10">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                  {CATEGORY_ICONS[activeCategory.category]}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9FAAB4] block">
                    Category {activeCategory.number} / 04
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white tracking-tight mt-1 font-['Kanit',sans-serif]">
                    {activeCategory.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#9FAAB4] max-w-md font-light leading-relaxed">
                {activeCategory.description}
              </p>
            </div>

            {/* Skills Interactive Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {activeCategory.skills.map((skill, sIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: sIdx * 0.04, duration: 0.3 }}
                  className="p-4 sm:p-5 rounded-2xl bg-[#181818] border border-white/5 hover:border-[#A855F7]/40 hover:bg-[#1f1f1f] transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/5 text-[#9FAAB4] border border-white/5">
                      {skill.tag}
                    </span>
                    <CheckCircle2 size={14} className="text-[#A855F7] opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="font-semibold text-base sm:text-lg text-white font-['Kanit',sans-serif] tracking-wide group-hover:text-[#67E8F9] transition-colors">
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </div>

            {/* Bottom summary bar */}
            <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9FAAB4]">
              <div className="flex items-center gap-2">
                <Layers size={14} className="text-[#A855F7]" />
                <span>White-hat search standards • Scalable organic growth frameworks</span>
              </div>
              <span className="font-mono text-[11px] text-[#BBCCD7]">
                Algorithmic Resilience &amp; Search Engine Ready
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { PRINCIPLES } from '../data/portfolioData';
import { ShieldCheck, Zap, Network, Sparkles, Check, ArrowUpRight } from 'lucide-react';

const PRINCIPLE_ICONS = [
  <ShieldCheck key="1" size={24} className="text-[#67E8F9]" />,
  <Zap key="2" size={24} className="text-amber-400" />,
  <Network key="3" size={24} className="text-[#A855F7]" />,
  <Sparkles key="4" size={24} className="text-[#D946EF]" />,
];

export const WhyWorkWithMeSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="why-me"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 z-10 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={30}>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D946EF] mb-2 block">
              Core Philosophy
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight font-['Kanit',sans-serif] mb-4"
              style={{ fontSize: 'clamp(2.8rem, 9.5vw, 130px)' }}
            >
              RANK WITH PURPOSE
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#9FAAB4] font-light max-w-2xl mx-auto leading-relaxed">
              Sustainable organic search growth requires more than surface-level tweaks. I focus on deep technical crawl integrity, semantic intent alignment, and defensible link authority that drive revenue.
            </p>
          </FadeIn>
        </div>

        {/* Asymmetric Editorial Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column (5 cols): Pinned Active Feature Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-8 sm:p-10 rounded-[36px] sm:rounded-[48px] bg-gradient-to-br from-[#161616] via-[#121212] to-[#0d0d0d] border border-white/10 shadow-2xl flex flex-col justify-between h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A855F7]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {PRINCIPLE_ICONS[activeIdx]}
                  </div>
                  <span className="text-4xl sm:text-5xl font-black font-['Kanit',sans-serif] text-white/20 select-none">
                    {PRINCIPLES[activeIdx].number}
                  </span>
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-[#A855F7] block mb-2">
                  Active Principle Focus
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white font-['Kanit',sans-serif] tracking-tight mb-4">
                  {PRINCIPLES[activeIdx].title}
                </h3>

                <p className="text-sm sm:text-base text-[#9FAAB4] font-light leading-relaxed mb-6">
                  {PRINCIPLES[activeIdx].description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#BBCCD7] block mb-1">
                  Core Advantage:
                </span>
                <p className="text-xs sm:text-sm font-medium text-emerald-400">
                  {PRINCIPLES[activeIdx].highlight}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive Principle Panels */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {PRINCIPLES.map((principle, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={principle.number}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-[#181818] border-[#A855F7]/60 shadow-[0_10px_30px_rgba(168,85,247,0.15)] scale-[1.01]'
                      : 'bg-[#121212]/80 border-white/5 hover:border-white/20 hover:bg-[#161616]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <span className="font-mono text-sm font-bold text-[#A855F7] pt-0.5">
                        {principle.number}
                      </span>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold uppercase text-white font-['Kanit',sans-serif] tracking-tight mb-1.5">
                          {principle.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#9FAAB4] font-light leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#A855F7] text-white'
                          : 'bg-white/5 text-[#9FAAB4]'
                      }`}
                    >
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

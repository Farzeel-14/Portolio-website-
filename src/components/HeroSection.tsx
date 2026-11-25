import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import { FuturisticDeveloperAvatar } from './FuturisticDeveloperAvatar';
import { ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = () => {
    const el = document.getElementById('marquee') || document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[680px] max-h-[1020px] flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none pt-20 sm:pt-22 md:pt-24 pb-6 sm:pb-8">
      {/* 
        Ambient Cinematic Background Lighting 
        Dual-tone purple & cyan volumetric glows
      */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-b from-[#A855F7]/12 via-[#67E8F9]/8 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-28 w-[340px] h-[340px] rounded-full bg-[#A855F7]/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-28 w-[340px] h-[340px] rounded-full bg-[#67E8F9]/8 blur-[120px] pointer-events-none -z-10" />

      {/* 1. Header Area: Eyebrow Tag & Main Headline */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 z-20 text-center pointer-events-none">
        {/* Eyebrow Chip */}
        <FadeIn delay={0.05} y={-12}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-[10.5px] sm:text-xs uppercase tracking-[0.2em] text-[#9FAAB4] mb-2 sm:mb-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
            <span className="text-white/90 font-medium">{PERSONAL_INFO.eyebrow}</span>
            <span className="text-white/30 hidden sm:inline">&bull;</span>
            <span className="text-[#9FAAB4] hidden sm:inline">{PERSONAL_INFO.eyebrowSub}</span>
          </div>
        </FadeIn>

        {/* 
          Main Headline
          Responsively clamped to eliminate clipping on all screen sizes
        */}
        <FadeIn delay={0.15} y={30}>
          <div className="w-full flex justify-center items-center overflow-hidden">
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-[0.92] text-center w-full select-none"
              style={{
                fontSize: 'clamp(2.2rem, 7.8vw, 108px)',
              }}
            >
              {PERSONAL_INFO.headline}
            </h1>
          </div>
        </FadeIn>
      </div>

      {/* 
        2. Central 3D Developer Avatar with Dimensional Overlap
        Interactive 3D tilt, magnetic cursor physics, and floating glass widgets
      */}
      <div className="relative w-full flex-1 flex items-center justify-center my-auto -mt-3 sm:-mt-5 md:-mt-8 z-10 pointer-events-auto px-4">
        <FadeIn delay={0.35} y={20} className="w-full max-w-[420px] flex justify-center items-center">
          <Magnet
            padding={140}
            strength={3.5}
            activeTransition="transform 0.25s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center items-center"
          >
            <FuturisticDeveloperAvatar className="w-full max-w-[390px]" />
          </Magnet>
        </FadeIn>
      </div>

      {/* 
        3. Bottom Bar: Supporting Copy, Small Tech Label, Dual CTAs, and Scroll Indicator
        Clean layout with full visibility within the viewport
      */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 z-30 pointer-events-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 pt-3.5 border-t border-white/[0.06]">
          {/* Left Column: Supporting Copy & Technology Label */}
          <FadeIn delay={0.45} y={15} className="max-w-[300px] sm:max-w-[360px] md:max-w-[420px]">
            <p className="text-[#D7E2EA] font-light text-xs sm:text-[13px] md:text-sm leading-relaxed mb-2">
              {PERSONAL_INFO.heroSupportingCopy}
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/10 text-[9.5px] sm:text-[11px] font-mono uppercase tracking-widest text-[#9FAAB4]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-pulse" />
              <span>{PERSONAL_INFO.heroTechLabel}</span>
            </div>
          </FadeIn>

          {/* Center: Scroll Down Indicator (Desktop Only) */}
          <FadeIn delay={0.55} y={15} className="hidden lg:flex">
            <button
              type="button"
              onClick={handleScrollToNext}
              className="flex flex-col items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity bg-transparent border-0 p-0 text-left"
              aria-label="Scroll to explore next section"
            >
              <span className="text-[9.5px] font-mono uppercase tracking-[0.25em] text-[#9FAAB4]">
                Scroll to explore
              </span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                <ChevronDown size={13} className="text-[#67E8F9]" />
              </motion.div>
            </button>
          </FadeIn>

          {/* Right Column: Dual Call-to-Action Buttons */}
          <FadeIn delay={0.5} y={15} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            {/* Secondary CTA: Explore My Work */}
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="inline-flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-medium uppercase tracking-widest px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 text-center cursor-pointer shadow-sm hover:shadow-[#A855F7]/10"
            >
              Explore My Work
            </a>

            {/* Primary CTA: Let's Work Together */}
            <ContactButton
              label="Let's Work Together"
              onClick={() => {
                if (onContactClick) {
                  onContactClick();
                } else {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="!px-6 !py-2.5 sm:!px-7 sm:!py-3 !text-xs sm:!text-sm text-center"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

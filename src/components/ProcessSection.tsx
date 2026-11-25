import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FadeIn } from './FadeIn';
import { DEVELOPMENT_STEPS } from '../data/portfolioData';
import { Search, Compass, Code, Sliders, Rocket, CheckCircle2 } from 'lucide-react';

const STEP_ICONS = [
  <Search key="1" size={20} className="text-[#67E8F9]" />,
  <Compass key="2" size={20} className="text-[#A855F7]" />,
  <Code key="3" size={20} className="text-emerald-400" />,
  <Sliders key="4" size={20} className="text-[#D946EF]" />,
  <Rocket key="5" size={20} className="text-amber-400" />,
];

export const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 z-10 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading & Intro */}
        <div className="text-center mb-20 sm:mb-24">
          <FadeIn delay={0} y={30}>
            <span className="text-xs font-mono uppercase tracking-widest text-[#67E8F9] mb-2 block">
              SEO Methodology
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight font-['Kanit',sans-serif] mb-4"
              style={{ fontSize: 'clamp(2.8rem, 9.5vw, 130px)' }}
            >
              HOW I RANK
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#9FAAB4] font-light max-w-2xl mx-auto leading-relaxed">
              From deep crawl diagnostics to targeted off-page authority and AI Overview visibility, every phase is engineered for compounding search growth.
            </p>
          </FadeIn>
        </div>

        {/* Vertical Timeline Process Journey */}
        <div className="relative">
          {/* Background Track Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden sm:block" />

          {/* Animated Glowing Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 sm:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#67E8F9] via-[#A855F7] to-[#D946EF] -translate-x-1/2 hidden sm:block shadow-[0_0_12px_rgba(168,85,247,0.7)]"
          />

          {/* Mobile left-side track */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10 sm:hidden" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {DEVELOPMENT_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <FadeIn
                  key={step.number}
                  delay={idx * 0.1}
                  y={30}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center w-full"
                >
                  {/* Central Timeline Milestone Node */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-[#151515] border-2 border-white/20 flex items-center justify-center z-20 shadow-2xl group hover:border-[#A855F7] hover:scale-110 transition-all">
                    {STEP_ICONS[idx]}
                  </div>

                  {/* Content Container (Alternating left/right on sm+) */}
                  <div
                    className={`pl-16 sm:pl-0 w-full sm:w-[45%] ${
                      isEven
                        ? 'sm:mr-auto sm:pr-8 sm:text-right'
                        : 'sm:ml-auto sm:pl-8 sm:text-left'
                    }`}
                  >
                    <div className="p-6 sm:p-7 rounded-3xl bg-[#131313] border border-white/10 hover:border-[#A855F7]/40 transition-all duration-300 shadow-xl group">
                      <div className={`flex items-center gap-3 mb-2 ${isEven ? 'sm:justify-end' : ''}`}>
                        <span className="font-mono text-xs font-semibold text-[#A855F7] px-2.5 py-0.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/20">
                          STAGE {step.number}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-['Kanit',sans-serif] tracking-tight mb-2 group-hover:text-[#67E8F9] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#9FAAB4] font-light leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Detail Checklist Items */}
                      <ul className={`flex flex-col gap-1.5 text-xs text-[#BBCCD7] ${isEven ? 'sm:items-end' : ''}`}>
                        {step.details.map((detail, dIdx) => (
                          <li
                            key={dIdx}
                            className={`flex items-center gap-2 ${isEven ? 'sm:flex-row-reverse' : ''}`}
                          >
                            <CheckCircle2 size={12} className="text-[#A855F7] shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

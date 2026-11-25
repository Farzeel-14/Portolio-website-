import React, { useRef, useState, useEffect } from 'react';
import { MARQUEE_TECH_ROW_1, MARQUEE_TECH_ROW_2 } from '../data/portfolioData';
import { calculateMarqueeOffset, calculateRow1Transform, calculateRow2Transform } from '../utils/marquee';
import {
  Search,
  TrendingUp,
  Globe,
  BarChart3,
  Cpu,
  Layers,
  Target,
  Sliders,
  FileText,
  Share2,
  Compass,
  Sparkles,
  Code,
  Terminal,
} from 'lucide-react';

const TECH_ICONS: Record<string, React.ReactNode> = {
  'Ahrefs': <Search size={18} className="text-[#A855F7]" />,
  'SEMrush': <TrendingUp size={18} className="text-orange-400" />,
  'Google Search Console': <Globe size={18} className="text-blue-400" />,
  'Google Analytics 4': <BarChart3 size={18} className="text-amber-400" />,
  'Screaming Frog': <Cpu size={18} className="text-emerald-400" />,
  'Microsoft Clarity': <Layers size={18} className="text-[#38BDF8]" />,
  'Ubersuggest': <Target size={18} className="text-orange-500" />,
  'Technical SEO': <Sliders size={18} className="text-[#67E8F9]" />,
  'On-Page SEO': <FileText size={18} className="text-[#D946EF]" />,
  'Off-Page SEO': <Share2 size={18} className="text-emerald-400" />,
  'Local SEO & GMB': <Compass size={18} className="text-amber-400" />,
  'AI Overviews (GEO)': <Sparkles size={18} className="text-[#A855F7]" />,
  'Schema Markup': <Code size={18} className="text-[#67E8F9]" />,
  'International SEO': <Globe size={18} className="text-emerald-400" />,
};

// Repeat 4x for continuous seamless looping
const ROW_1 = [...MARQUEE_TECH_ROW_1, ...MARQUEE_TECH_ROW_1, ...MARQUEE_TECH_ROW_1, ...MARQUEE_TECH_ROW_1];
const ROW_2 = [...MARQUEE_TECH_ROW_2, ...MARQUEE_TECH_ROW_2, ...MARQUEE_TECH_ROW_2, ...MARQUEE_TECH_ROW_2];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const off = calculateMarqueeOffset(
        window.scrollY,
        sectionTop,
        window.innerHeight,
        0.35
      );
      setOffset(off);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Row 1 moves LEFT: -(offset - 200)
  const row1X = calculateRow2Transform(offset, 200);
  // Row 2 moves RIGHT: offset - 200
  const row2X = calculateRow1Transform(offset, 200);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-14 overflow-hidden select-none border-y border-white/5"
    >
      {/* Decorative gradient masks at edges for seamless fading */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-4">
        {/* Row 1 - Frontend technologies (Moves LEFT) */}
        <div
          className="flex gap-4 w-max transition-transform ease-out duration-75"
          style={{
            transform: `translateX(${row1X}px)`,
            willChange: 'transform',
          }}
        >
          {ROW_1.map((item, i) => (
            <div
              key={`tech-row1-${i}`}
              className="flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-[#151515] border border-white/10 shadow-lg hover:border-[#A855F7]/50 hover:bg-[#1a1a1a] transition-all duration-300 group cursor-default shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {TECH_ICONS[item.name] || <Code size={18} />}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm sm:text-base text-white tracking-wide font-['Kanit',sans-serif] group-hover:text-[#BBCCD7] transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#9FAAB4]">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Backend, Database & Motion tools (Moves RIGHT) */}
        <div
          className="flex gap-4 w-max transition-transform ease-out duration-75"
          style={{
            transform: `translateX(${row2X}px)`,
            willChange: 'transform',
          }}
        >
          {ROW_2.map((item, i) => (
            <div
              key={`tech-row2-${i}`}
              className="flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-[#151515] border border-white/10 shadow-lg hover:border-[#67E8F9]/50 hover:bg-[#1a1a1a] transition-all duration-300 group cursor-default shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {TECH_ICONS[item.name] || <Terminal size={18} />}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm sm:text-base text-white tracking-wide font-['Kanit',sans-serif] group-hover:text-[#67E8F9] transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#9FAAB4]">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { FadeIn } from './FadeIn';
import { SERVICES } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0C0C0C]/60 mb-2 block">
              Services &amp; Capabilities
            </span>
            <h2
              className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight font-['Kanit',sans-serif]"
              style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
            >
              WHAT I DO
            </h2>
          </div>
        </FadeIn>

        {/* 6 Core SEO Services List */}
        <div className="flex flex-col border-b border-[#0C0C0C]/15">
          {SERVICES.map((service, i) => (
            <FadeIn
              key={service.number}
              delay={i * 0.08}
              y={25}
              className="py-8 sm:py-10 md:py-12 border-t border-[#0C0C0C]/15 transition-all duration-300 hover:bg-black/[0.03] px-3 sm:px-6 rounded-2xl group cursor-default"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-8 md:gap-16">
                {/* Left: Huge Number */}
                <span
                  className="font-black text-[#0C0C0C] leading-none shrink-0 tracking-tighter select-none font-['Kanit',sans-serif] group-hover:scale-105 transition-transform"
                  style={{ fontSize: 'clamp(2.8rem, 8vw, 120px)' }}
                >
                  {service.number}
                </span>

                {/* Right: Name + Description + Tags */}
                <div className="flex flex-col flex-1 max-w-2xl">
                  <div className="flex items-center justify-between gap-4 mb-2 sm:mb-3">
                    <h3
                      className="font-bold uppercase text-[#0C0C0C] tracking-tight font-['Kanit',sans-serif] group-hover:text-[#A855F7] transition-colors"
                      style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2rem)' }}
                    >
                      {service.name}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-[#0C0C0C]/20 flex items-center justify-center shrink-0 opacity-40 group-hover:opacity-100 group-hover:bg-[#0C0C0C] group-hover:text-white transition-all">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <p
                    className="font-light text-[#0C0C0C] leading-relaxed opacity-70 mb-3"
                    style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.15rem)' }}
                  >
                    {service.description}
                  </p>

                  {/* Tech Tags */}
                  {service.tags && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase bg-black/5 text-[#0C0C0C]/80 border border-black/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Search, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onContactClick?: () => void;
}

const HIGHLIGHTS = [
  {
    icon: <Search size={20} className="text-[#67E8F9]" />,
    title: 'Technical & On-Page SEO',
    description: 'Diagnosing crawl errors, structuring schema markup, and optimizing Core Web Vitals.',
    badge: 'Technical & On-Page',
  },
  {
    icon: <ShieldCheck size={20} className="text-[#A855F7]" />,
    title: 'Off-Page & Authority Building',
    description: 'Acquiring high-DR contextual backlinks and establishing authoritative brand entities.',
    badge: 'Off-Page & Authority',
  },
  {
    icon: <TrendingUp size={20} className="text-[#D946EF]" />,
    title: 'Local SEO & AI Overviews (GEO)',
    description: 'Dominating Google Maps 3-Pack and optimizing content for Generative AI search.',
    badge: 'Local SEO & GEO',
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 flex flex-col justify-center items-center overflow-hidden select-none"
    >
      {/* 4 Decorative 3D elements in corners */}
      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[110px] sm:w-[150px] md:w-[190px] pointer-events-none z-10 opacity-70">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative 3D Moon"
            className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[6%] left-[2%] sm:left-[5%] md:left-[8%] w-[90px] sm:w-[130px] md:w-[170px] pointer-events-none z-10 opacity-70">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative 3D Shape"
            className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[110px] sm:w-[150px] md:w-[190px] pointer-events-none z-10 opacity-70">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative 3D Lego"
            className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[6%] right-[2%] sm:right-[5%] md:right-[8%] w-[120px] sm:w-[160px] md:w-[200px] pointer-events-none z-10 opacity-70">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative 3D Group"
            className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Central Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Spacing */}
        <div className="h-8 sm:h-12 md:h-14" />

        {/* Animated Character-by-character Paragraph */}
        <AnimatedText
          text={PERSONAL_INFO.aboutBio}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[620px] mx-auto text-base sm:text-lg md:text-xl px-2"
        />

        {/* 3 Supporting Highlights */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-14 sm:mt-18 text-left">
          {HIGHLIGHTS.map((item, idx) => (
            <FadeIn
              key={item.title}
              delay={0.2 + idx * 0.1}
              y={25}
              className="p-5 sm:p-6 rounded-2xl bg-[#151515]/90 border border-white/10 hover:border-[#A855F7]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl backdrop-blur-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FAAB4] block mb-1">
                  {item.badge}
                </span>
                <h3 className="text-lg font-bold text-white uppercase font-['Kanit',sans-serif] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9FAAB4] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1 text-[11px] font-mono text-[#BBCCD7] group-hover:text-white transition-colors">
                <span>Production Ready</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Spacing */}
        <div className="h-14 sm:h-18 md:h-20" />

        {/* Contact Button */}
        <FadeIn delay={0.4} y={20}>
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
          />
        </FadeIn>
      </div>
    </section>
  );
};

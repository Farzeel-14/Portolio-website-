import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { calculateCardScale, calculateStickyTop, calculateStackZIndex } from '../utils/stack';
import { PROJECTS, OTHER_VERIFIED_PROJECTS, ProjectItem } from '../data/portfolioData';
import { Layers, Github, ExternalLink, Code2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface StackedProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onLiveProjectClick?: (project: ProjectItem) => void;
}

const StackedProjectCard: React.FC<StackedProjectCardProps> = ({
  project,
  index,
  totalCards,
  onLiveProjectClick,
}) => {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = calculateCardScale(index, totalCards, 0.035);
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, index === totalCards - 1 ? 1 : 0.88]);

  const topOffsetPx = calculateStickyTop(index, 72, 28);
  const zIndex = calculateStackZIndex(index);
  const isLast = index === totalCards - 1;

  return (
    <div
      ref={cardContainerRef}
      id={`project-card-${index}`}
      className="sticky w-full will-change-transform"
      style={{
        top: `calc(clamp(4rem, 7.5vh, 5.5rem) + ${index * 28}px)`,
        zIndex,
        marginBottom: isLast ? '2rem' : 'clamp(260px, 42vh, 480px)',
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
        }}
        className="relative w-full rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-[0_-20px_45px_rgba(0,0,0,0.92),0_25px_60px_rgba(0,0,0,0.95)] transition-shadow duration-300 hover:shadow-[0_-25px_60px_rgba(168,85,247,0.22),0_30px_70px_rgba(0,0,0,0.98)] will-change-transform"
      >
        {/* Subtle accent line on top edge */}
        <div
          className="absolute -top-[2px] left-12 right-12 h-[2px] rounded-full opacity-60"
          style={{
            background: `linear-gradient(90deg, transparent 0%, #D7E2EA 50%, transparent 100%)`,
          }}
        />

        {/* Top row: Number, Category, Project Name, Tech Badges, and Live Project Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {/* Huge Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none shrink-0 tracking-tighter select-none font-['Kanit',sans-serif]"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 96px)' }}
            >
              {project.number}
            </span>

            {/* Category + Name + Technologies */}
            <div className="flex flex-col">
              <span className="uppercase font-light tracking-widest text-xs sm:text-sm text-[#9FAAB4]">
                {project.category}
              </span>
              <h3 className="uppercase font-bold text-lg sm:text-2xl md:text-3xl text-white tracking-tight font-['Kanit',sans-serif]">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#BBCCD7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons: Live Project & Details */}
          <div className="flex items-center gap-3">
            <LiveProjectButton
              onClick={() => onLiveProjectClick?.(project)}
              label="Live Project"
            />
          </div>
        </div>

        {/* Bottom row: Two-column image grid (40% / 60%) */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full items-stretch">
          {/* Left Column (40% width): 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            <div
              className="w-full overflow-hidden rounded-[32px] sm:rounded-[44px] md:rounded-[50px] bg-[#161616] border border-white/5 relative group cursor-pointer"
              style={{ height: 'clamp(140px, 17vw, 240px)' }}
              onClick={() => onLiveProjectClick?.(project)}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} UI detail 1`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[32px] sm:rounded-[44px] md:rounded-[50px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                <span className="text-xs font-mono text-white flex items-center gap-1.5">
                  <ExternalLink size={12} /> Inspect Detail
                </span>
              </div>
            </div>

            <div
              className="w-full overflow-hidden rounded-[32px] sm:rounded-[44px] md:rounded-[50px] bg-[#161616] border border-white/5 relative group cursor-pointer"
              style={{ height: 'clamp(170px, 23vw, 350px)' }}
              onClick={() => onLiveProjectClick?.(project)}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} UI detail 2`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[32px] sm:rounded-[44px] md:rounded-[50px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                <span className="text-xs font-mono text-white flex items-center gap-1.5">
                  <ExternalLink size={12} /> View Component
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div className="w-full md:w-[60%] flex">
            <div
              className="w-full h-full min-h-[300px] sm:min-h-[360px] md:min-h-[480px] overflow-hidden rounded-[32px] sm:rounded-[44px] md:rounded-[50px] bg-[#161616] border border-white/5 relative group cursor-pointer"
              onClick={() => onLiveProjectClick?.(project)}
            >
              <img
                src={project.col2Image}
                alt={`${project.name} full interface showcase`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[32px] sm:rounded-[44px] md:rounded-[50px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-6 justify-between">
                <div>
                  <span className="text-xs font-mono text-[#A855F7] block uppercase tracking-wider">
                    Showcase
                  </span>
                  <p className="text-sm text-white font-medium">{project.tagline}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs text-white">
                  Preview ↗
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onLiveProjectClick?: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onLiveProjectClick,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const scrollToCard = (index: number) => {
    setActiveTab(index);
    const element = document.getElementById(`project-card-${index}`);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading & Subtitle */}
        <div className="text-center mb-10 sm:mb-14">
          <FadeIn delay={0} y={40}>
            <span className="text-xs font-mono uppercase tracking-widest text-[#A855F7] mb-2 block">
              Portfolio &amp; Case Studies
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight font-['Kanit',sans-serif] mb-3"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 140px)' }}
            >
              SELECTED WORK
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#9FAAB4] font-light max-w-xl mx-auto">
              Proven SEO case studies demonstrating organic ranking surges, commercial intent capture, and backlink authority.
            </p>
          </FadeIn>
        </div>

        {/* Interactive Deck Stepper / Tab Controller */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 sm:mb-16 px-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9FAAB4]">
            <Layers size={14} className="text-[#BBCCD7]" />
            <span>Interactive 3D Deck • Stack On Scroll</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {PROJECTS.map((proj, idx) => (
              <button
                key={proj.number}
                type="button"
                onClick={() => scrollToCard(idx)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? 'bg-[#D7E2EA] text-[#0C0C0C] shadow-md font-bold'
                    : 'text-[#9FAAB4] hover:text-white hover:bg-white/5'
                }`}
              >
                {proj.number} • {proj.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Stacked Project Cards */}
        <div className="relative w-full">
          {PROJECTS.map((project, index) => (
            <StackedProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              onLiveProjectClick={onLiveProjectClick}
            />
          ))}
        </div>

        {/* Additional Verified Client Domains Grid */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#67E8F9] block mb-1">
              Active Client Network
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white font-['Kanit',sans-serif] tracking-tight">
              More Verified SEO &amp; Optimization Engagements
            </h3>
            <p className="text-xs sm:text-sm text-[#9FAAB4] mt-2 max-w-lg mx-auto">
              Additional live client platforms optimized across international, enterprise B2B, and high-conversion commercial niches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OTHER_VERIFIED_PROJECTS.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#A855F7]/50 hover:bg-[#1a1a1a] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 size={11} /> Verified Live
                    </span>
                    <ArrowUpRight size={14} className="text-[#9FAAB4] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="font-bold text-white text-base font-['Kanit',sans-serif] uppercase tracking-tight group-hover:text-[#67E8F9] transition-colors mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#9FAAB4] font-light mb-2">
                    {item.category}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#BBCCD7]">
                  <span className="truncate max-w-[170px]">{item.url.replace('https://', '').replace('/', '')}</span>
                  <span className="text-[#A855F7]">Visit ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

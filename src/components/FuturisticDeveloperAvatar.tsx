import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Search, TrendingUp, BarChart3, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FuturisticDeveloperAvatarProps {
  className?: string;
}

export const FuturisticDeveloperAvatar: React.FC<FuturisticDeveloperAvatarProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setIsHovered] = useState(false);

  // Smooth mouse-following 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for responsive, jitter-free 60fps tracking
  const springConfig = { damping: 28, stiffness: 140 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  // Parallax offsets for floating SEO widgets
  const panel1X = useSpring(useTransform(mouseX, [-0.5, 0.5], [-24, 18]), springConfig);
  const panel1Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-16, 14]), springConfig);

  const panel2X = useSpring(useTransform(mouseX, [-0.5, 0.5], [18, -24]), springConfig);
  const panel2Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-14, 16]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ perspective: 1400 }}
    >
      {/* Dynamic Ambient Glow Behind Avatar */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
        <div className="w-[340px] sm:w-[440px] h-[340px] sm:h-[440px] rounded-full bg-gradient-to-tr from-[#A855F7]/30 via-[#67E8F9]/20 to-transparent blur-[90px] animate-pulse duration-3000" />
      </div>

      {/* 3D Perspective Card Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full max-w-[420px] aspect-[4/4.8] flex items-center justify-center"
      >
        {/* Holographic Base Ring Platform */}
        <div
          className="absolute -bottom-4 w-[260px] sm:w-[340px] md:w-[380px] h-[70px] pointer-events-none -z-10"
          style={{ transform: 'rotateX(75deg) translateZ(-35px)' }}
        >
          {/* Outer rotating dashed ring */}
          <div className="absolute inset-0 rounded-full border border-[#A855F7]/40 border-dashed animate-[spin_24s_linear_infinite]" />
          {/* Inner cyan glow ring */}
          <div className="absolute inset-2 rounded-full border border-[#67E8F9]/50 shadow-[0_0_20px_rgba(103,232,249,0.3)]" />
          {/* Core pedestal aura */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-b from-[#A855F7]/25 via-[#67E8F9]/15 to-transparent blur-md" />
        </div>

        {/* 
          1. Floating SEO Telemetry Terminal Card (Left Side)
          Shows live organic growth metrics
        */}
        <motion.div
          style={{
            x: panel1X,
            y: panel1Y,
            transform: 'translateZ(55px)',
          }}
          initial={{ opacity: 0, x: -30, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hidden sm:flex absolute -left-12 md:-left-20 lg:-left-24 top-6 z-30 flex-col gap-1.5 p-3 rounded-2xl bg-[#121217]/92 border border-white/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] pointer-events-none w-[190px] sm:w-[210px]"
        >
          {/* Window Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-[0_0_6px_#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-[0_0_6px_#27C93F]" />
            </div>
            <span className="text-[10px] font-mono text-[#9FAAB4] flex items-center gap-1">
              <Search size={11} className="text-[#A855F7]" />
              farzeel-audit.json
            </span>
          </div>

          {/* Syntax Code / SEO Metrics */}
          <div className="font-mono text-[10px] leading-relaxed text-[#D7E2EA] pt-0.5">
            <p>
              <span className="text-[#A855F7]">const</span>{' '}
              <span className="text-[#67E8F9]">metrics</span> = {'{'}
            </p>
            <p className="pl-2.5 text-[9.5px] text-[#BBCCD7]">
              organicTraffic: <span className="text-emerald-400 font-semibold">&apos;+310%&apos;</span>,
            </p>
            <p className="pl-2.5 text-[9.5px]">
              serpPosition: <span className="text-amber-300">&apos;Top 3&apos;</span>,
            </p>
            <p className="pl-2.5 text-[9.5px]">
              technicalHealth: <span className="text-emerald-400 font-semibold">99/100</span>
            </p>
            <p className="flex items-center">
              {'}'};
              <span className="inline-block w-1.5 h-3 ml-1 bg-[#67E8F9] animate-pulse" />
            </p>
          </div>
        </motion.div>

        {/* 
          2. Floating SEO Tech Stack Pill (Right Side)
        */}
        <motion.div
          style={{
            x: panel2X,
            y: panel2Y,
            transform: 'translateZ(65px)',
          }}
          initial={{ opacity: 0, x: 30, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="hidden sm:flex absolute -right-8 md:-right-16 lg:-right-20 top-14 z-30 items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-[#121217]/92 border border-white/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] pointer-events-none"
        >
          {/* Animated Growth Icon Badge */}
          <div className="relative w-7 h-7 flex items-center justify-center text-[#67E8F9] bg-[#67E8F9]/10 rounded-full border border-[#67E8F9]/30">
            <TrendingUp size={15} className="text-[#67E8F9]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-semibold text-white tracking-wide">
              Ahrefs &middot; SEMrush &middot; GSC
            </span>
            <span className="text-[9px] font-mono text-[#9FAAB4]">
              On-Page &bull; Technical &bull; GEO
            </span>
          </div>
        </motion.div>

        {/* 3. Floating Available Status Chip (Bottom Right) */}
        <motion.div
          style={{ transform: 'translateZ(50px)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="hidden md:flex absolute -right-6 lg:-right-10 bottom-6 z-30 items-center gap-2 px-3 py-1.5 rounded-full bg-[#121217]/90 border border-white/15 backdrop-blur-xl shadow-lg pointer-events-none"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#D7E2EA]">
            {PERSONAL_INFO.location} &bull; {PERSONAL_INFO.experienceYears}
          </span>
        </motion.div>

        {/* 
          4. CENTRAL AUTHENTIC PROFESSIONAL PORTRAIT
          Using Farzeel Tariq's authentic natural image (/profile.jpeg)
          Clean, elegant circular / rounded-3xl framing with subtle neon rim and 3D breathing physics
        */}
        <div
          className="relative w-full h-full flex items-center justify-center pointer-events-none"
          style={{ transform: 'translateZ(25px)' }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full flex items-center justify-center relative p-3"
          >
            {/* Outer Glow Halo Ring */}
            <div className="relative rounded-full p-1.5 bg-gradient-to-tr from-[#A855F7] via-[#67E8F9] to-[#D946EF] shadow-[0_20px_50px_rgba(168,85,247,0.35)]">
              {/* Profile Image Frame */}
              <div className="w-[240px] sm:w-[280px] md:w-[320px] aspect-square rounded-full overflow-hidden bg-[#121212] border-2 border-white/20 relative group">
                <img
                  src="/profile.jpeg"
                  alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`}
                  className="w-full h-full object-cover object-center select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Verified Expert Badge at bottom of circle */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121217] border border-white/20 shadow-xl backdrop-blur-md">
                <ShieldCheck size={13} className="text-[#67E8F9]" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-white font-semibold whitespace-nowrap">
                  Verified SEO Specialist
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

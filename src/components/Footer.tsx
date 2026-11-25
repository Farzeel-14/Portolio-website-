import React from 'react';
import { ArrowUp, Search, Mail, Linkedin, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-10 py-16 text-[#D7E2EA] z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Subtitle */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A855F7]">
              <Search size={14} />
            </div>
            <span className="hero-heading font-black text-2xl sm:text-3xl uppercase tracking-tight font-['Kanit',sans-serif]">
              FARZEEL
            </span>
          </div>
          <p className="text-xs sm:text-sm font-light text-[#9FAAB4] uppercase tracking-wider">
            {PERSONAL_INFO.title}
          </p>
          <p className="text-xs text-[#9FAAB4]/80 mt-1 max-w-sm">
            Turning keywords into conversions through technical excellence and search authority.
          </p>
        </div>

        {/* Anchor Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium uppercase tracking-wider">
          <a href="#about" className="text-[#9FAAB4] hover:text-white transition-colors">
            About
          </a>
          <a href="#expertise" className="text-[#9FAAB4] hover:text-white transition-colors">
            Arsenal
          </a>
          <a href="#services" className="text-[#9FAAB4] hover:text-white transition-colors">
            Services
          </a>
          <a href="#projects" className="text-[#9FAAB4] hover:text-white transition-colors">
            Projects
          </a>
          <a href="#process" className="text-[#9FAAB4] hover:text-white transition-colors">
            Process
          </a>
          <a href="#contact" className="text-[#9FAAB4] hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Back to Top & Direct Mail & WhatsApp & LinkedIn */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent('Hi Farzeel, I saw your SEO portfolio and would like to discuss a project.')}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-10 h-10 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:border-emerald-500 hover:bg-emerald-500/20 transition-colors cursor-pointer"
          >
            <MessageCircle size={16} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Farzeel's LinkedIn"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#D7E2EA] hover:text-[#67E8F9] hover:border-[#67E8F9] hover:bg-white/5 transition-colors cursor-pointer"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Send email to Farzeel"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#D7E2EA] hover:text-white hover:border-[#A855F7] hover:bg-white/5 transition-colors cursor-pointer"
          >
            <Mail size={16} />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#D7E2EA] hover:text-white hover:border-white/40 hover:bg-white/5 transition-colors cursor-pointer"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9FAAB4]/60 gap-4">
        <p>© {currentYear} Farzeel Tariq. All rights reserved. • Lahore, Pakistan • {PERSONAL_INFO.phone}</p>
        <p className="tracking-widest uppercase font-mono text-[11px]">
          On-Page • Technical • Off-Page • Local SEO • GEO
        </p>
      </div>
    </footer>
  );
};

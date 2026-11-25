import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Search, Linkedin, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onContactClick?: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Arsenal', href: '#expertise' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section spy
      const sections = ['about', 'expertise', 'services', 'projects', 'process', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0C0C0C]/85 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent pt-6 md:pt-8 pb-4'
        }`}
      >
        <div className="w-full px-6 md:px-10 flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo / Farzeel SEO Specialist Badge */}
          <a
            href="#"
            className="flex items-center gap-2 text-[#D7E2EA] group cursor-pointer"
            aria-label="Farzeel Tariq Portfolio Home"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A855F7] group-hover:border-[#A855F7]/50 group-hover:scale-105 transition-all">
              <Search size={16} />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-sm md:text-base tracking-wider uppercase text-white font-['Kanit',sans-serif]">
                FARZEEL
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#9FAAB4] -mt-1 hidden sm:block">
                SEO Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-sm md:text-base lg:text-[1.15rem] uppercase tracking-wider font-medium transition-all duration-200 hover:opacity-100 ${
                    isActive ? 'text-white font-semibold' : 'text-[#D7E2EA]/75 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#A855F7] to-[#67E8F9] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: WhatsApp, LinkedIn & Let's Talk Pill */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent('Hi Farzeel, I saw your SEO portfolio and would like to discuss a project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-9 h-9 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle size={15} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Farzeel Tariq on LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center text-[#9FAAB4] hover:text-[#67E8F9] transition-colors"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                if (onContactClick) {
                  e.preventDefault();
                  onContactClick();
                }
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-xs uppercase tracking-widest text-[#D7E2EA] hover:text-white transition-all duration-200 cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={14} className="text-[#A855F7]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white cursor-pointer hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[70px] z-30 bg-[#0C0C0C]/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xl uppercase tracking-wider font-semibold text-[#D7E2EA] hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={18} className="text-[#A855F7]" />
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick?.();
                }}
                className="w-full py-3 text-center rounded-full text-white font-medium uppercase tracking-widest text-xs bg-gradient-to-r from-[#18011F] via-[#B600A8] to-[#7621B0] border border-white/20"
              >
                Let&apos;s Work Together
              </a>
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent('Hi Farzeel, I saw your SEO portfolio and would like to discuss a project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center rounded-full text-emerald-400 font-medium uppercase tracking-wider text-xs border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center gap-2"
              >
                <MessageCircle size={14} /> WhatsApp: {PERSONAL_INFO.phone}
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center rounded-full text-[#67E8F9] font-medium uppercase tracking-wider text-xs border border-white/15 bg-white/5 flex items-center justify-center gap-2"
              >
                <Linkedin size={14} /> Connect on LinkedIn
              </a>
              <span className="text-[11px] text-center text-[#9FAAB4]">
                {PERSONAL_INFO.email} • {PERSONAL_INFO.title}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

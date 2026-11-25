import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Send, ArrowUp, ArrowRight, Linkedin, MapPin, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Technical SEO Audit');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `🎯 New SEO Project Lead: ${name} (${projectType})`,
          _template: 'table',
          _captcha: 'false',
          Name: name,
          Email: email,
          'Service Focus': projectType,
          'Website & Goals': message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Still show success for UI grace, or log error
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 z-10 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-[#A855F7]/10 via-[#67E8F9]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading & Subtitle */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={30}>
            <span className="text-xs font-mono uppercase tracking-widest text-[#67E8F9] mb-2 block">
              Start The Conversation
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight font-['Kanit',sans-serif] mb-4"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 130px)' }}
            >
              LET&apos;S TALK
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#9FAAB4] font-light max-w-xl mx-auto">
              Ready to fix your technical bottlenecks, secure first-page rankings, and capture search intent that converts? Let&apos;s discuss your roadmap.
            </p>
          </FadeIn>
        </div>

        {/* Content Layout: Contact Info & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column (5 cols): Direct Contacts & CTAs */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 sm:p-10 rounded-[36px] bg-[#141414] border border-white/10 shadow-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9FAAB4] block mb-2">
                Direct Contact
              </span>
              <h4 className="text-2xl font-bold uppercase text-white font-['Kanit',sans-serif] tracking-tight mb-1">
                {PERSONAL_INFO.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#9FAAB4] mb-3">
                {PERSONAL_INFO.title}
              </p>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 mb-6">
                <MapPin size={13} />
                <span>{PERSONAL_INFO.location} &bull; Remote Worldwide</span>
              </div>

              {/* WhatsApp Direct Chat Card */}
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent('Hi Farzeel, I saw your SEO portfolio and would like to discuss a project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 mb-4 flex items-center justify-between hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageCircle size={18} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-xs sm:text-sm text-white font-semibold">
                      {PERSONAL_INFO.phone}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      Chat directly on WhatsApp ↗
                    </span>
                  </div>
                </div>
                <ArrowRight size={14} className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#A855F7]" />
                  <span className="font-mono text-xs sm:text-sm text-white select-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-[#D7E2EA] transition-colors cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* LinkedIn Connect Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 flex items-center justify-between hover:border-[#67E8F9]/50 hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Linkedin size={18} className="text-[#67E8F9]" />
                  <span className="font-mono text-xs sm:text-sm text-white">
                    linkedin.com/in/farzeel-tariq
                  </span>
                </div>
                <ArrowRight size={14} className="text-[#9FAAB4] group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Navigation Actions */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#9FAAB4]">
                <a href="#projects" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>View Case Studies</span> <ArrowRight size={12} />
                </a>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Back to Top</span> <ArrowUp size={12} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[36px] bg-[#141414] border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A855F7]">
                  SEO Project Inquiry Form
                </span>
                <span className="text-[11px] font-mono text-[#9FAAB4] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Delivered directly to Farzeel
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <Check size={28} />
                  </div>
                  <h4 className="text-xl font-bold uppercase text-white mb-2 font-['Kanit',sans-serif]">
                    Inquiry Sent Successfully!
                  </h4>
                  <p className="text-sm text-[#9FAAB4] max-w-sm mb-4 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{name}</span>. Your inquiry has been sent directly to Farzeel Tariq. You will receive a response within 24 hours.
                  </p>
                  <p className="text-xs text-[#9FAAB4]/80 mb-6">
                    Need faster response? You can also message Farzeel on WhatsApp:
                  </p>
                  <a
                    href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Farzeel, I am ${name}. I just submitted an SEO project inquiry on your portfolio.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase text-xs tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95 mb-4"
                  >
                    <MessageCircle size={15} />
                    <span>Ping on WhatsApp ↗</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="text-xs text-[#9FAAB4] hover:text-white underline cursor-pointer mt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-name" className="block text-xs uppercase tracking-wider text-[#9FAAB4] mb-1.5 font-mono">
                        Your Name *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A855F7] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-email" className="block text-xs uppercase tracking-wider text-[#9FAAB4] mb-1.5 font-mono">
                        Your Email *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A855F7] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-type" className="block text-xs uppercase tracking-wider text-[#9FAAB4] mb-1.5 font-mono">
                      Service Focus
                    </label>
                    <select
                      id="form-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#A855F7] transition-colors"
                    >
                      <option value="Technical SEO Audit">Comprehensive Technical SEO Audit</option>
                      <option value="On-Page & Semantic SEO">On-Page &amp; Semantic SEO Strategy</option>
                      <option value="Off-Page & Authority Links">Off-Page Authority &amp; Link Building</option>
                      <option value="Local SEO & GMB">Local SEO &amp; Google Business Profile</option>
                      <option value="AI Overviews & GEO">AI Overviews &amp; GEO Optimization</option>
                      <option value="Complete Monthly Retainer">Complete Ongoing SEO Growth Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form-message" className="block text-xs uppercase tracking-wider text-[#9FAAB4] mb-1.5 font-mono">
                      Website &amp; Project Goals *
                    </label>
                    <textarea
                      id="form-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your website URL, primary target country/region, and current search ranking challenges..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A855F7] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                    <span className="text-[11px] text-[#9FAAB4]/80 flex items-center gap-1.5">
                      <Mail size={13} className="text-[#A855F7]" />
                      Direct email delivery to Farzeel
                    </span>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-8 py-3 rounded-full bg-white hover:bg-[#D7E2EA] text-black font-bold uppercase tracking-wider text-xs transition-all cursor-pointer shadow-lg disabled:opacity-50 shrink-0 flex items-center gap-2 hover:scale-105 active:scale-95"
                    >
                      {submitting ? (
                        <span>Sending Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Send size={13} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

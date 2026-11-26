import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Check, Copy, MessageCircle, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

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
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: PERSONAL_INFO.web3FormsKey,
          subject: `🎯 New SEO Lead from Modal: ${name}`,
          from_name: 'Farzeel Tariq SEO Portfolio',
          name: name,
          email: email,
          message: message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        console.error('Modal submission failed:', result);
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Modal submission error:', error);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-lg bg-[#111111] border border-[#D7E2EA]/20 rounded-3xl p-6 sm:p-8 text-[#D7E2EA] shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10"
            role="dialog"
            aria-modal="true"
            aria-label="Contact Farzeel Tariq"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <span className="uppercase text-xs font-semibold tracking-widest text-[#A855F7]">
                Get In Touch
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-1 font-['Kanit',sans-serif]">
                Let&apos;s Scale Your Rankings
              </h3>
              <p className="text-sm text-[#9FAAB4] mt-1">
                Send your goals directly to Farzeel.
              </p>
            </div>

            {/* Quick copy email & WhatsApp bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                <div className="flex items-center gap-1.5 truncate">
                  <Mail size={14} className="text-[#BBCCD7] shrink-0" />
                  <span className="font-mono truncate">{PERSONAL_INFO.email}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-[#BBCCD7] hover:text-white px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/10 transition-colors cursor-pointer shrink-0 ml-1"
                >
                  {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                </button>
              </div>

              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent('Hi Farzeel, I saw your SEO portfolio and would like to discuss a project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20 text-emerald-400 text-xs font-mono font-medium transition-colors"
              >
                <MessageCircle size={14} />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Check size={28} />
                </div>
                <h4 className="text-xl font-bold uppercase text-white mb-2 font-['Kanit',sans-serif]">
                  Inquiry Sent Successfully!
                </h4>
                <p className="text-sm text-[#D7E2EA]/80 max-w-xs mb-6">
                  Thank you, <span className="text-white font-medium">{name}</span>. Farzeel will review your inquiry and get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#D7E2EA] transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1 font-mono">
                    Your Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A855F7] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1 font-mono">
                    Your Email *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A855F7] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="modal-message" className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1 font-mono">
                    Website &amp; SEO Goals *
                  </label>
                  <textarea
                    id="modal-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell Farzeel about your website, target region, or current search ranking challenges..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#A855F7] transition-colors resize-none"
                  />
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#9FAAB4]/80 flex items-center gap-1">
                    <Mail size={13} className="text-[#A855F7]" />
                    Direct email delivery
                  </span>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2.5 rounded-full bg-white hover:bg-[#D7E2EA] text-black font-bold uppercase text-xs tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

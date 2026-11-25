import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Sparkles, Code2, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111111] border-2 border-[#D7E2EA]/30 rounded-3xl p-6 sm:p-8 text-[#D7E2EA] shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-10"
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
          >
            <X size={22} />
          </button>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pr-10">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/10 text-white">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-[#9FAAB4]">#{project.number}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight font-['Kanit',sans-serif]">
                {project.name}
              </h3>
              <p className="text-sm text-[#9FAAB4] mt-1 max-w-xl">
                {project.description}
              </p>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#A855F7] to-[#D946EF] text-white text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity shrink-0 shadow-lg cursor-pointer"
              >
                <span>Visit Live Site</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-[#181818] border border-white/10 text-xs font-mono text-white flex items-center gap-1.5"
              >
                <Code2 size={12} className="text-[#A855F7]" />
                <span>{t}</span>
              </span>
            ))}
          </div>

          {/* Case Study Breakdown: Challenge, Actions, Results */}
          {(project.challenge || project.actions || project.results) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left">
              {project.challenge && (
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block">
                    1. The Challenge
                  </span>
                  <p className="text-xs text-[#9FAAB4] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}
              {project.actions && project.actions.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#67E8F9] font-semibold block">
                    2. Strategic Actions
                  </span>
                  <ul className="text-xs text-[#9FAAB4] space-y-1 list-disc list-inside leading-relaxed">
                    {project.actions.map((act, idx) => (
                      <li key={idx}>{act}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.results && project.results.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                    3. Measured Results
                  </span>
                  <ul className="text-xs text-[#D7E2EA] space-y-1 leading-relaxed">
                    {project.results.map((res, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 size={12} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Visual Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <img
                  src={project.col1Image1}
                  alt={`${project.name} preview 1`}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <img
                  src={project.col1Image2}
                  alt={`${project.name} preview 2`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="h-full">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 h-full">
                <img
                  src={project.col2Image}
                  alt={`${project.name} preview main`}
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9FAAB4] gap-3">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-[#A855F7]" />
              <span>Optimized with Data-Driven Technical SEO, Link Intelligence &amp; Search Authority</span>
            </div>
            <span>© Farzeel Tariq • SEO &amp; GEO Specialist</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyWorkWithMeSection } from './components/WhyWorkWithMeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div
      className="relative w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] selection:bg-[#A855F7] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* Floating Top Navigation */}
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      <main>
        {/* 1. Hero Section */}
        <HeroSection onContactClick={() => setIsContactOpen(true)} />

        {/* 2. Animated Technology Marquee */}
        <MarqueeSection />

        {/* 3. About Me Section */}
        <AboutSection onContactClick={() => setIsContactOpen(true)} />

        {/* 4. Technical Expertise Section */}
        <TechStackSection />

        {/* 5. Services Section (What I Do) */}
        <ServicesSection />

        {/* 6. Featured Projects Section (Selected Work with Stacked Deck) */}
        <ProjectsSection
          onLiveProjectClick={(project) => setSelectedProject(project)}
        />

        {/* 7. Development Process Section (How I Build) */}
        <ProcessSection />

        {/* 8. Why Work With Me Section (Built With Purpose) */}
        <WhyWorkWithMeSection />

        {/* 9. Contact Section (Start A Conversation) */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

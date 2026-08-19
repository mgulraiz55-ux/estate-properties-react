import React, { useState, useEffect } from 'react';
import { Property, Article, Advisor } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SecuritySection } from './components/SecuritySection';
import { FeaturedProperties } from './components/FeaturedProperties';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { AdvisorsSection } from './components/AdvisorsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { JournalSection } from './components/JournalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';

const PropertyModal = React.lazy(() => import('./components/PropertyModal').then(module => ({ default: module.PropertyModal })));
const InquireModal = React.lazy(() => import('./components/InquireModal').then(module => ({ default: module.InquireModal })));
const ArticleModal = React.lazy(() => import('./components/ArticleModal').then(module => ({ default: module.ArticleModal })));
const SearchModal = React.lazy(() => import('./components/SearchModal').then(module => ({ default: module.SearchModal })));

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [inquireModalOpen, setInquireModalOpen] = useState<boolean>(false);
  const [inquirePropertyTitle, setInquirePropertyTitle] = useState<string | undefined>(undefined);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenInquire = (propertyTitle?: string) => {
    setInquirePropertyTitle(propertyTitle);
    setInquireModalOpen(true);
  };

  const handleContactAdvisor = (advisor: Advisor) => {
    handleOpenInquire(`Consultation with Advisor: ${advisor.name} (${advisor.role})`);
  };

  const handleScrollToProperties = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dynamic count animation logic
  const animateCount = (el: HTMLElement) => {
    const text = el.innerText.trim();
    // Matches numbers with potential prefixes (e.g. $) and suffixes (e.g. +, B, k)
    const match = text.match(/^([$]?)([\d.]+)([kKmMbB+]*)$/);
    if (!match) return;

    const prefix = match[1];
    const rawVal = parseFloat(match[2]);
    const suffix = match[3];

    const duration = 2000; // 2 seconds counting animation
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Luxury ease-out expo curve
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * rawVal);

      el.innerText = `${prefix}${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.innerText = text; // Set final exact initial text representation
      }
    };

    requestAnimationFrame(update);
  };

  // Active scroll highlight tracker
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['properties', 'why-us', 'services', 'process', 'advisors', 'journal', 'contact'];
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            current = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer scroll reveal setup
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.08,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Trigger numbers count-up animation when visible
          const stats = entry.target.querySelectorAll('.stat-item');
          stats.forEach((el) => {
            animateCount(el as HTMLElement);
          });

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section, footer');
    sections.forEach((sec) => {
      sec.classList.add('reveal-section');

      // Identify headings
      const heading = sec.querySelector('h2');
      if (heading) heading.classList.add('reveal-heading');

      // Identify subtitle labels
      const subheading = sec.querySelector('span.text-xs, p.tracking-wide');
      if (subheading) subheading.classList.add('reveal-subheading');

      // Identify description blocks safely using classList to avoid selector parsing issues with brackets
      const paragraphs = sec.querySelectorAll('p');
      let content: Element | null = null;
      for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i];
        if (
          !p.classList.contains('text-xs') &&
          !p.classList.contains('text-sm') &&
          !p.classList.contains('text-[10px]')
        ) {
          content = p;
          break;
        }
      }
      if (content) content.classList.add('reveal-content');

      // Identify grids and timeline containers
      const cards = sec.querySelector('.grid, .timeline-grid');
      if (cards) cards.classList.add('reveal-cards');

      // Identify CTA elements
      const buttons = sec.querySelector('button, a.bg-gradient-to-r');
      if (buttons) buttons.classList.add('reveal-buttons');

      // Identify statistics elements
      const stats = sec.querySelectorAll('.font-serif.text-5xl, .font-serif.text-6xl, .font-serif.text-3xl');
      stats.forEach((el) => {
        el.classList.add('stat-item');
      });

      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Loader />
      <CustomCursor />
      <div
        className={`min-h-screen bg-[#fbf9f9] text-[#1b1c1c] selection:bg-[#C6A76A]/30 flex flex-col antialiased transition-all duration-[1200ms] ${
          loading ? 'opacity-0 translate-y-10 filter blur-sm pointer-events-none' : 'opacity-100 translate-y-0 filter blur-none'
        }`}
        style={{
          transitionProperty: 'opacity, transform, filter',
        }}
      >

      {/* Navigation Header */}
      <Navbar
        onOpenInquire={handleOpenInquire}
        onOpenSearch={() => setSearchModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreClick={handleScrollToProperties}
          onConsultationClick={() => handleOpenInquire('Private Wealth & Architectural Consultation')}
        />

        <SecuritySection />

        <FeaturedProperties
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onInquireProperty={(title) => handleOpenInquire(title)}
        />

        <WhyChooseUs />

        <AboutSection />

        <ServicesSection
          onInquireService={(serviceName) => handleOpenInquire(`Service Inquiry: ${serviceName}`)}
        />

        <ProcessSection />

        <AdvisorsSection onContactAdvisor={handleContactAdvisor} />

        <TestimonialsSection />

        <JournalSection
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        <ContactSection onOpenInquire={() => handleOpenInquire('Global Concierge & Viewing Request')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals loaded on-demand */}
      <React.Suspense fallback={null}>
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onInquire={(title) => handleOpenInquire(title)}
        />

        <InquireModal
          isOpen={inquireModalOpen}
          onClose={() => setInquireModalOpen(false)}
          initialPropertyTitle={inquirePropertyTitle}
        />

        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />

        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onSelectArticle={(art) => setSelectedArticle(art)}
        />
      </React.Suspense>
      </div>
    </>
  );
}

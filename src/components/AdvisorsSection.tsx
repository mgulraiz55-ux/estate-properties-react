import React, { useState, useEffect } from 'react';
import { ADVISORS } from '../data/mockData';
import { Advisor } from '../types';
import { Mail, Phone } from 'lucide-react';

interface AdvisorsSectionProps {
  onContactAdvisor: (advisor: Advisor) => void;
}

export const AdvisorsSection: React.FC<AdvisorsSectionProps> = React.memo(({ onContactAdvisor }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Luxury client-facing advisor metadata mapped by ID
  const advisorMetadata: Record<
    string,
    { specialization: string; languages: string; experience: string; volume: string }
  > = {
    'alexandra-vance': {
      specialization: 'Luxury Estates',
      languages: 'English • Spanish',
      experience: '18 Years Experience',
      volume: '$3.4B Career Sales',
    },
    'julian-brooks': {
      specialization: 'International Portfolio',
      languages: 'English • French • German',
      experience: '15 Years Experience',
      volume: '$2.8B Career Sales',
    },
    'sofia-moretti': {
      specialization: 'Private Client Services',
      languages: 'English • Italian • Arabic',
      experience: '12 Years Experience',
      volume: '$2.1B Career Sales',
    },
    'marcus-thorne': {
      specialization: 'Waterfront Villas',
      languages: 'English • Portuguese',
      experience: '14 Years Experience',
      volume: '$1.9B Career Sales',
    },
  };

  return (
    <section id="advisors" className="py-36 md:py-44 bg-[#FAF9F6] border-t border-[#E5E2DA]/40 relative overflow-hidden">
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#8c7b6a_1px,transparent_1px),linear-gradient(to_bottom,#8c7b6a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-[1512px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A376] uppercase mb-4 block">
            PRIVATE ADVISORS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#1A1917] leading-tight">
            Meet Our Global Advisors
          </h2>
          <p className="text-sm sm:text-base text-[#6B665E] max-w-xl mx-auto mt-5 font-light leading-relaxed">
            A hand-selected team of elite real estate advisors serving ultra-high-net-worth clients across the world&apos;s most prestigious addresses.
          </p>
        </div>

        {/* Desktop 4 Columns Grid / Mobile Single Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {ADVISORS.map((advisor, idx) => {
            const meta = advisorMetadata[advisor.id] || {
              specialization: advisor.region,
              languages: 'English',
              experience: '10 Years Experience',
              volume: advisor.dealsCount,
            };

            return (
              <div
                key={advisor.id}
                onClick={() => onContactAdvisor(advisor)}
                style={{ transitionDelay: `${idx * 150}ms` }}
                className={`group cursor-pointer bg-white/80 border border-[#E5E2DA]/40 p-6 lg:p-7 flex flex-col justify-between rounded-[24px] shadow-sm hover:border-[#C5A376]/45 hover:shadow-[0_30px_60px_rgba(26,25,23,0.12)] hover:-translate-y-3.5 transition-all duration-[500ms] ease-out transform ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div>
                  {/* Portrait ratio 3:4 image container to make images larger focal point */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#EAE6DF] mb-8 rounded-[18px] shadow-sm">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05] filter brightness-[0.97]"
                      loading="lazy"
                    />

                    {/* Hover Social Pill */}
                    <div
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-white/95 px-4 py-2.5 rounded-full shadow-lg border border-[#E5E2DA]/50 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out translate-y-2 group-hover:translate-y-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href={`mailto:${advisor.email}`}
                        className="text-[#6B665E] hover:text-[#C5A376] transition-colors p-1"
                        aria-label={`Email ${advisor.name}`}
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                      <span className="w-[1px] h-3 bg-[#E5E2DA]" />
                      <a
                        href={`tel:${advisor.phone}`}
                        className="text-[#6B665E] hover:text-[#C5A376] transition-colors p-1"
                        aria-label={`Call ${advisor.name}`}
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                      <span className="w-[1px] h-3 bg-[#E5E2DA]" />
                      <a
                        href="#"
                        className="text-[#6B665E] hover:text-[#C5A376] transition-colors p-1"
                        aria-label={`LinkedIn profile of ${advisor.name}`}
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Content details */}
                  <h3 className="font-serif text-xl sm:text-[22px] font-light tracking-wide text-[#1A1917] mb-2 md:mb-3 group-hover:text-[#C5A376] transition-colors duration-500">
                    {advisor.name}
                  </h3>
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C5A376] uppercase mb-4 block">
                    {advisor.role}
                  </span>
                  
                  {/* Specialization Pill Badge */}
                  <div className="mb-6">
                    <span className="px-3.5 py-1.5 bg-[#FAF9F6] border border-[#C5A376]/25 text-[#C5A376] text-[9px] font-semibold tracking-[0.12em] uppercase rounded-full shadow-sm inline-block">
                      {meta.specialization}
                    </span>
                  </div>
                </div>

                {/* Glassmorphism details panel */}
                <div className="bg-[#FAF9F6]/60 backdrop-blur-sm border border-[#E5E2DA]/40 rounded-xl p-4 mt-auto shadow-sm space-y-2.5 text-[11px] font-light text-[#6B665E]">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[#8C867A] shrink-0">Languages</span>
                    <span className="font-normal text-[#1A1917] text-right">{meta.languages}</span>
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[#8C867A] shrink-0">Experience</span>
                    <span className="font-normal text-[#1A1917] text-right">{meta.experience}</span>
                  </div>
                  <div className="flex justify-between items-start gap-2 pt-1">
                    <span className="text-[#8C867A] shrink-0">Sales Volume</span>
                    <span className="font-serif font-normal text-[#C5A376] tracking-wide text-[12px] text-right">
                      {meta.volume}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="relative overflow-hidden bg-[#1A1917] text-white hover:bg-[#C5A376] text-xs font-semibold tracking-[0.25em] uppercase px-10 py-5 transition-all duration-500 shadow-md hover:shadow-[0_0_25px_rgba(197,163,118,0.3)] border border-[#1A1917] hover:border-[#C5A376] rounded-full">
            Meet Our Advisory Team
          </button>
        </div>
      </div>
    </section>
  );
});
AdvisorsSection.displayName = 'AdvisorsSection';

import React, { useState, useEffect } from 'react';
import { KeyRound, TrendingUp, EyeOff, Compass, Scale, ShieldAlert, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onInquireService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = React.memo(({ onInquireService }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: KeyRound,
      title: 'Bespoke Acquisitions',
      description: 'End-to-end representation for global buyers searching for trophy residences, historic estates, and prime architectural icons.',
      tag: 'BUY SIDE',
    },
    {
      icon: TrendingUp,
      title: 'Sales & Advisory',
      description: 'Bespoke positioning, high-fashion editorial production, and targeted placement to private global capital pools.',
      tag: 'SELL SIDE',
    },
    {
      icon: EyeOff,
      title: 'Off-Market Sourcing',
      description: 'Discreet matchmaking for unlisted estates held by private family trusts, sovereign entities, and private collectors.',
      tag: 'CONFIDENTIAL',
    },
    {
      icon: Compass,
      title: 'Architectural Concierge',
      description: 'Connecting clients with world-renowned architects, masterminds, structural engineers, and landscape directors.',
      tag: 'DESIGN & BUILD',
    },
    {
      icon: Scale,
      title: 'Private Appraisal',
      description: 'Independent, data-backed valuation reports considering micro-market metrics, land value, and unique architectural pedigree.',
      tag: 'VALUATION',
    },
    {
      icon: ShieldAlert,
      title: 'Asset Governance',
      description: 'Collaborating with your wealth managers and legal advisors on cross-border tax structuring, privacy trusts, and estate planning.',
      tag: 'FAMILY OFFICE',
    },
  ];

  return (
    <section id="services" className="py-36 md:py-44 bg-[#FAF9F6] relative overflow-hidden border-t border-b border-[#E5E2DA]/40">
      {/* Luxury Background Lights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#C5A376]/5 to-transparent rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#8C7B6A]/5 to-transparent rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8 border-b border-[#E5E2DA]/40 pb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A376] uppercase mb-4 block">
              OUR SERVICES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#1A1917] leading-tight">
              Comprehensive Advisory & Representation
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B665E] max-w-xl font-light leading-relaxed">
            Each engagement is executed with absolute precision, ensuring your privacy, financial interests, and aesthetic standards remain paramount.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.title}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className={`bg-white/75 backdrop-blur-sm p-10 md:p-12 border border-[#E5E2DA]/40 hover:border-[#C5A376]/45 hover:bg-white transition-all duration-[400ms] ease-out flex flex-col justify-between group shadow-lg hover:shadow-[0_30px_60px_rgba(26,25,23,0.12)] hover:-translate-y-3.5 rounded-[20px] transform ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    {/* Minimal Luxury Icon */}
                    <div className="w-14 h-14 bg-white text-[#C5A376] border border-[#E5E2DA] flex items-center justify-center shadow-sm group-hover:bg-[#1A1917] group-hover:text-white group-hover:border-[#1A1917] group-hover:shadow-[0_0_15px_rgba(197,163,118,0.15)] transition-all duration-[400ms] rounded-xl">
                      <IconComp className="w-6 h-6 stroke-[1.25] transition-transform duration-[400ms] group-hover:scale-105" />
                    </div>
                    <span className="text-[9px] font-semibold tracking-[0.2em] text-[#C5A376] bg-[#C5A376]/5 border border-[#C5A376]/15 px-3.5 py-1.5 uppercase rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-[#1A1917] mb-4 group-hover:text-[#C5A376] transition-colors duration-[400ms]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B665E]/80 leading-relaxed font-light mb-10">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={() => onInquireService(service.title)}
                  className="flex items-center gap-2.5 text-[10px] font-semibold tracking-[0.25em] text-[#1A1917] uppercase group-hover:text-[#C5A376] transition-colors duration-[400ms] pt-5 border-t border-[#E5E2DA]/40 w-full"
                >
                  <span>Inquire Regarding Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-all duration-[400ms]" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
ServicesSection.displayName = 'ServicesSection';

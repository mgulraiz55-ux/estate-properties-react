import React, { useState, useEffect } from 'react';
import { PROCESS_STEPS } from '../data/mockData';
import { ChevronRight, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = React.memo(() => {
  const [mode, setMode] = useState<'buying' | 'selling'>('buying');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sellingSteps = [
    {
      number: '01',
      title: 'Confidential Valuation & Positioning',
      subtitle: 'Market analytics & editorial strategy',
      description: 'We perform an exhaustive private valuation considering global micro-market liquidity, architectural provenance, and comparable trophy sales.'
    },
    {
      number: '02',
      title: 'Bespoke Media & Editorial Production',
      subtitle: 'High-fashion architectural asset creation',
      description: 'Our creative directors produce high-key cinema videos, architectural photography, and private hardcover presentation folios.'
    },
    {
      number: '03',
      title: 'Targeted Private Placements',
      subtitle: 'Reaching vetted private buyers directly',
      description: 'Rather than public MLS blasting, we present your residence directly to pre-vetted family offices, ultra-high-net-worth principals, and institutional capital.'
    },
    {
      number: '04',
      title: 'Discreet Closing & Escrow Control',
      subtitle: 'Fiduciary excellence & legal precision',
      description: 'Our senior principals manage non-disclosure compliance, wire verifications, title clearance, and white-glove handover.'
    }
  ];

  const currentSteps = mode === 'buying' ? PROCESS_STEPS : sellingSteps;

  return (
    <section id="process" className="py-36 md:py-44 bg-[#F5F4F0] relative overflow-hidden border-t border-b border-[#E5E2DA]/40">
      {/* Premium Background Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#C5A376]/5 to-transparent rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#8C7B6A]/5 to-transparent rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A376] uppercase mb-4 block">
            METHODOLOGY
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#1A1917] mb-6 leading-tight">
            The Masterpiece Journey
          </h2>
          <p className="text-sm sm:text-base text-[#6B665E] font-light leading-relaxed">
            Whether acquiring a coastal sanctuary or parting with a family legacy estate, our four-stage protocol guarantees seamless execution and complete confidentiality.
          </p>

          <div className="inline-flex bg-white/60 p-1 border border-[#E5E2DA]/60 backdrop-blur-md rounded-full shadow-sm">
            <button
              onClick={() => {
                setMode('buying');
                setActiveStep(0);
              }}
              className={`px-3 sm:px-7 py-2.5 sm:py-3 text-[9px] sm:text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 rounded-full cursor-pointer ${
                mode === 'buying'
                  ? 'bg-[#1A1917] text-white shadow-md'
                  : 'text-[#6B665E] hover:text-[#1A1917]'
              }`}
            >
              Acquisition Protocol
            </button>
            <button
              onClick={() => {
                setMode('selling');
                setActiveStep(0);
              }}
              className={`px-3 sm:px-7 py-2.5 sm:py-3 text-[9px] sm:text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 rounded-full cursor-pointer ${
                mode === 'selling'
                  ? 'bg-[#1A1917] text-white shadow-md'
                  : 'text-[#6B665E] hover:text-[#1A1917]'
              }`}
            >
              Representation Protocol
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-24">
          {/* Desktop connecting timeline line with subtle gold glow */}
          <div className="hidden lg:block absolute top-[58px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-[#C5A376]/10 via-[#C5A376]/45 to-[#C5A376]/10 z-0 pointer-events-none" />

          {/* Grid of 4 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10">
            {currentSteps.map((step, idx) => (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                style={{ transitionDelay: `${idx * 150}ms` }}
                className={`cursor-pointer p-6 sm:p-8 border transition-all duration-[400ms] ease-out flex flex-col justify-between group rounded-[20px] transform ${
                  activeStep === idx
                    ? 'bg-gradient-to-br from-[#1A1917] to-[#252321] text-white border-[#C5A376] shadow-[0_25px_50px_rgba(197,163,118,0.25)] -translate-y-3 scale-[1.02] border-t-2 border-t-[#C5A376]'
                    : 'bg-white/60 backdrop-blur-sm text-[#1A1917] border-[#E5E2DA]/50 hover:border-[#C5A376]/40 hover:bg-white hover:shadow-[0_20px_45px_rgba(26,25,23,0.06)] hover:-translate-y-2'
                } ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    {/* Luxury Circle Step Badges */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-all duration-[400ms] ${
                        activeStep === idx
                          ? 'bg-[#C5A376] border border-[#C5A376] shadow-[0_0_15px_rgba(197,163,118,0.3)]'
                          : 'bg-white border border-[#E5E2DA] group-hover:border-[#C5A376]/50'
                      }`}
                    >
                      <span
                        className={`font-serif text-sm transition-colors duration-[400ms] ${
                          activeStep === idx ? 'text-white font-medium' : 'text-[#C5A376] font-light'
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>

                    {activeStep === idx && (
                      <Sparkles className="w-4 h-4 text-[#C5A376] animate-pulse" />
                    )}
                  </div>

                  <h3
                    className={`font-serif text-2xl font-light tracking-wide mb-2.5 transition-colors duration-[400ms] ${
                      activeStep === idx ? 'text-white' : 'text-[#1A1917] group-hover:text-[#C5A376]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 transition-colors duration-[400ms] ${
                      activeStep === idx ? 'text-[#C5A376]' : 'text-[#8C7B6A]'
                    }`}
                  >
                    {step.subtitle}
                  </p>

                  <p
                    className={`text-xs font-light leading-relaxed transition-colors duration-[400ms] ${
                      activeStep === idx ? 'text-white/70' : 'text-[#6B665E]'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                <div
                  className={`mt-10 pt-5 border-t flex items-center justify-between text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-[400ms] ${
                    activeStep === idx
                      ? 'border-white/10 text-[#C5A376]'
                      : 'border-[#E5E2DA]/40 text-[#6B665E]'
                  }`}
                >
                  <span>{activeStep === idx ? 'Active Stage' : 'Select Stage'}</span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform duration-[400ms] ${
                      activeStep === idx ? 'translate-x-1.5 text-[#C5A376]' : 'group-hover:translate-x-1'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
ProcessSection.displayName = 'ProcessSection';

import React from 'react';

export const AboutSection: React.FC = React.memo(() => {
  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-16 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left B&W Editorial Image */}
        <div className="order-2 lg:order-1 relative">
          <div className="aspect-[4/3] sm:aspect-[1/1] relative z-10 shadow-xl overflow-hidden bg-[#2D2A26]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="ESTATE Advisory Executive Board Room"
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </div>
          {/* Subtle Accent Frame */}
          <div className="absolute -top-8 -right-8 w-2/3 h-2/3 border border-[#8C7B6A] -z-0 opacity-30 hidden sm:block" />
        </div>

        {/* Right Story Content */}
        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7B6A] uppercase mb-4 block">
            OUR STORY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2A26] mb-6 leading-tight">
            Defining Luxury Since 1994
          </h2>
          <p className="text-base text-[#6B665E] mb-10 leading-relaxed font-light">
            Established as a boutique advisory for the global elite, ESTATE has grown into an international powerhouse while preserving our intimate, client-first philosophy. We don&apos;t believe in volume; we believe in the value of the exceptional.
          </p>

          {/* Key Metric Rows */}
          <div className="space-y-8 border-t border-[#E5E2DA] pt-8">
            <div className="flex items-center gap-8 border-b border-[#E5E2DA] pb-8">
              <span className="font-serif text-5xl md:text-6xl text-[#8C7B6A] font-normal min-w-[120px]">
                30
              </span>
              <div>
                <div className="text-xs font-semibold tracking-[0.2em] text-[#2D2A26] uppercase mb-1">
                  YEARS OF MARKET DOMINANCE
                </div>
                <div className="text-xs text-[#6B665E]">
                  Navigating prime property cycles with unyielding precision.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8 border-b border-[#E5E2DA] pb-8">
              <span className="font-serif text-5xl md:text-6xl text-[#8C7B6A] font-normal min-w-[120px]">
                500+
              </span>
              <div>
                <div className="text-xs font-semibold tracking-[0.2em] text-[#2D2A26] uppercase mb-1">
                  RECORD-BREAKING TRANSACTIONS
                </div>
                <div className="text-xs text-[#6B665E]">
                  Representing iconic landmarks and trophy properties globally.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <span className="font-serif text-5xl md:text-6xl text-[#8C7B6A] font-normal min-w-[120px]">
                10k+
              </span>
              <div>
                <div className="text-xs font-semibold tracking-[0.2em] text-[#2D2A26] uppercase mb-1">
                  PRIVATE NETWORK MEMBERS
                </div>
                <div className="text-xs text-[#6B665E]">
                  Direct connections to family offices, collectors, and founders.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

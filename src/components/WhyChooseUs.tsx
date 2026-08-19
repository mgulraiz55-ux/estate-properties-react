import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Globe, Lock, Gem, Quote } from 'lucide-react';

const AnimatedCounter: React.FC<{ target: number; prefix?: string; suffix?: string; duration?: number }> = ({
  target,
  prefix = '',
  suffix = '',
  duration = 2000
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  useEffect(() => {
    if (!triggered) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [triggered, target, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

export const WhyChooseUs: React.FC = React.memo(() => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const distinctions = [
    {
      icon: ShieldCheck,
      title: 'UNRIVALED EXPERTISE',
      description: 'Three decades of navigating the complexities of multi-million dollar high-value international transactions.',
    },
    {
      icon: Globe,
      title: 'GLOBAL NETWORK',
      description: 'Exclusive access to off-market private portfolios and family office holdings across six continents.',
    },
    {
      icon: Lock,
      title: 'DISCRETION & PRIVACY',
      description: 'Absolute confidentiality and non-disclosure protocols for our high-net-worth individual clients.',
    },
    {
      icon: Gem,
      title: 'TAILORED ACQUISITION',
      description: 'Personalized search strategies and due diligence tailored to your exact lifestyle philosophy.',
    },
  ];

  const stats = [
    { target: 28, suffix: '+', label: 'Countries Served' },
    { target: 450, suffix: '+', label: 'Private Transactions' },
    { target: 98, suffix: '%', label: 'Client Retention' }
  ];

  return (
    <section id="why-us" className="bg-[#F5F4F0] relative overflow-hidden py-36 md:py-44 border-t border-b border-[#E5E2DA]/40">
      {/* Premium Luxury Background Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#C5A376]/5 to-transparent rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#8C7B6A]/5 to-transparent rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Text & Cards Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div 
              className={`transform transition-all duration-[1000ms] ease-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A376] uppercase mb-4 block">
                Our Distinction
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-[#1A1917] mb-6 leading-tight">
                A Legacy of Discreet Excellence
              </h2>
              <p className="text-sm sm:text-base text-[#6B665E] font-light leading-relaxed max-w-xl">
                We don&apos;t just sell properties; we curate lifestyle investments. Our bespoke approach ensures that every transaction is as unique as the architecture we represent.
              </p>
            </div>

            {/* Premium Statistics Cards Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-2">
              {stats.map((stat, idx) => (
                <div 
                  key={stat.label} 
                  style={{ transitionDelay: `${idx * 150}ms` }}
                  className={`bg-[#FAF9F6]/40 backdrop-blur-md border border-[#E5E2DA]/60 p-2 sm:p-4 rounded-xl shadow-sm text-center transform transition-all duration-700 ease-out ${
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="font-serif text-xl sm:text-2xl md:text-3xl text-[#C5A376] font-light">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="h-[1px] w-6 bg-[#C5A376]/45 mx-auto my-2" />
                  <div className="text-[7px] sm:text-[8px] font-semibold tracking-wider text-[#6B665E] uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Distinction Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {distinctions.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    style={{ transitionDelay: `${(idx + 3) * 100}ms` }}
                    className={`group p-6 border border-[#E5E2DA]/40 bg-white/60 backdrop-blur-sm hover:bg-white hover:border-[#C5A376]/40 hover:shadow-[0_20px_45px_rgba(26,25,23,0.06)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between rounded-xl transform ${
                      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div>
                      <div className="w-12 h-12 bg-white text-[#C5A376] border border-[#E5E2DA] flex items-center justify-center mb-5 group-hover:bg-[#1A1917] group-hover:text-white group-hover:border-[#1A1917] transition-all duration-500 shadow-sm rounded-lg">
                        <IconComponent className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <h3 className="text-[11px] font-semibold tracking-[0.2em] text-[#1A1917] uppercase mb-2.5 group-hover:text-[#C5A376] transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#6B665E] leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image Showcase Column with Quote Box */}
          <div className="lg:col-span-7 relative h-[500px] sm:h-[600px] md:h-[700px] group mt-10 lg:mt-0">
            {/* Elegant Outer Frame */}
            <div className="absolute inset-0 bg-white overflow-hidden border border-[#E5E2DA] p-3 shadow-2xl transition-all duration-700 group-hover:shadow-[0_30px_60px_rgba(26,25,23,0.12)] rounded-[20px]">
              <div className="w-full h-full overflow-hidden relative rounded-[16px]">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
                  srcSet="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=480&q=80 480w,
                          https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=768&q=80 768w,
                          https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80 1000w"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  alt="Architectural Craftsmanship Staircase and Detail"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03] filter brightness-[0.96]"
                  loading="lazy"
                />
                {/* Visual shade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Founder Quote Floating Badge - Upgraded with Gold Accent lines and Light Glass */}
            <div className="absolute -bottom-8 left-2 right-2 md:left-[-48px] md:right-auto md:bottom-12 md:max-w-sm bg-white/80 backdrop-blur-md p-5 sm:p-8 md:p-10 text-[#1A1917] shadow-2xl border-l-4 border-l-[#C5A376] border-y border-r border-[#E5E2DA]/65 transition-all duration-500 hover:border-[#C5A376]/50 rounded-r-2xl rounded-l-sm">
              <Quote className="w-8 h-8 text-[#C5A376] opacity-60 mb-4" />
              <p className="font-serif text-lg md:text-xl font-light italic mb-5 leading-relaxed text-[#1A1917]/95">
                &quot;Architecture is a visual art, and the buildings speak for themselves.&quot;
              </p>
              <div className="text-[9px] font-semibold tracking-[0.25em] text-[#C5A376] uppercase">
                JULIA VANCE, FOUNDER & MANAGING DIRECTOR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
WhyChooseUs.displayName = 'WhyChooseUs';

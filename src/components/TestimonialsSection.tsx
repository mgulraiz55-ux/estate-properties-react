import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = React.memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const clientPhotos: Record<string, string> = {
    '1': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', // Henrik Vogel
    '2': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80', // Catherine Sterling
    '3': 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150&q=80', // Takashi & Yumi Okamoto
  };

  const propertyPurchased: Record<string, string> = {
    '1': 'Acquired The Obsidian Estate',
    '2': 'Acquired Belvedere Penthouse',
    '3': 'Acquired Palazzo Miramar'
  };

  return (
    <section className="py-36 md:py-44 bg-[#F5F4F0] overflow-hidden border-t border-[#E5E2DA]/40 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#C5A376]/3 to-transparent rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 border-b border-[#E5E2DA]/40 pb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A376] uppercase mb-4 block">
              TESTIMONIALS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#1A1917] leading-tight">
              Words from Our Illustrious Clients
            </h2>
          </div>
          
          <div className="flex items-center gap-6">
            <p className="text-sm text-[#6B665E] max-w-xs font-light leading-relaxed hidden lg:block">
              Confidential reviews from patrons who value exceptional representation.
            </p>
            {/* Minimal Luxury Navigation Slider */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-[#E5E2DA] flex items-center justify-center text-[#6B665E] hover:border-[#C5A376] hover:text-[#C5A376] transition-all duration-300 bg-white/80"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-[#E5E2DA] flex items-center justify-center text-[#6B665E] hover:border-[#C5A376] hover:text-[#C5A376] transition-all duration-300 bg-white/80"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop grid layout (3 columns) / Mobile Carousel (Single active card) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`group bg-white/85 backdrop-blur-sm p-10 md:p-12 border border-[#E5E2DA]/40 shadow-md hover:border-[#C5A376]/45 hover:shadow-[0_25px_50px_rgba(26,25,23,0.08)] hover:-translate-y-2 transition-all duration-[400ms] ease-out flex flex-col justify-between rounded-[20px] transform ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  {/* Elegant Champagne-Gold Rating */}
                  <div className="flex gap-1 text-[#C5A376]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A376] text-[#C5A376] opacity-90" />
                    ))}
                  </div>
                  {/* Decorative luxury quote mark */}
                  <Quote className="w-8 h-8 text-[#C5A376] opacity-20 group-hover:opacity-50 transition-opacity duration-[400ms]" />
                </div>

                <p className="font-serif text-lg md:text-xl italic leading-relaxed text-[#1A1917] mb-10 min-h-[140px]">
                  {t.quote}
                </p>
              </div>

              {/* Client Info with Circular Portrait and Divider */}
              <div className="pt-6 border-t border-[#E5E2DA]/40 flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-[#E5E2DA]/50 shadow-sm">
                  <img
                    src={clientPhotos[t.id]}
                    alt={t.author}
                    className="w-full h-full object-cover transition-transform duration-[400ms] group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] text-[#1A1917] uppercase mb-1">
                    {t.author}
                  </h3>
                  <p className="text-[9px] font-semibold tracking-[0.25em] text-[#C5A376] uppercase">
                    {t.location} &bull; {propertyPurchased[t.id]}
                  </p>
                  <p className="text-[9px] font-medium tracking-[0.2em] text-[#8C867A] uppercase mt-0.5">
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Single Card Carousel with Swipe Stacking */}
        <div className="lg:hidden">
          {TESTIMONIALS.map((t, idx) => {
            if (idx !== activeIndex) return null;
            return (
              <div
                key={t.id}
                className="group bg-white/85 backdrop-blur-sm p-6 sm:p-12 border border-[#E5E2DA]/40 shadow-md hover:border-[#C5A376]/45 hover:shadow-[0_25px_50px_rgba(26,25,23,0.08)] hover:-translate-y-2 transition-all duration-[400ms] ease-out flex flex-col justify-between rounded-[20px] min-h-[420px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    {/* Elegant Champagne-Gold Rating */}
                    <div className="flex gap-1 text-[#C5A376]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C5A376] text-[#C5A376] opacity-90" />
                      ))}
                    </div>
                    {/* Decorative luxury quote mark */}
                    <Quote className="w-8 h-8 text-[#C5A376] opacity-20 group-hover:opacity-50 transition-opacity duration-[400ms]" />
                  </div>

                  <p className="font-serif text-lg md:text-xl italic leading-relaxed text-[#1A1917] mb-10">
                    {t.quote}
                  </p>
                </div>

                {/* Client Info with Circular Portrait and Divider */}
                <div className="pt-6 border-t border-[#E5E2DA]/40 flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-[#E5E2DA]/50 shadow-sm">
                    <img
                      src={clientPhotos[t.id]}
                      alt={t.author}
                      className="w-full h-full object-cover transition-transform duration-[400ms] group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.2em] text-[#1A1917] uppercase mb-1">
                      {t.author}
                    </h3>
                    <p className="text-[9px] font-semibold tracking-[0.25em] text-[#C5A376] uppercase">
                      {t.location} &bull; {propertyPurchased[t.id]}
                    </p>
                    <p className="text-[9px] font-medium tracking-[0.2em] text-[#8C867A] uppercase mt-0.5">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
});
TestimonialsSection.displayName = 'TestimonialsSection';

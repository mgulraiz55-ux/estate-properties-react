import React, { useEffect, useState } from 'react';

export const Loader: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Trigger animations in next frames
    const animTimer = setTimeout(() => {
      setAnimate(true);
    }, 50);

    // Fade out preloader at 2 seconds
    const fadeTimer = setTimeout(() => {
      setAnimate(false);
    }, 2000);

    // Hide component fully at 2.6 seconds (after fade animation completes)
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 2600);

    return () => {
      clearTimeout(animTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#111111] flex flex-col items-center justify-center transition-all duration-[800ms] ease-out pointer-events-none ${
        animate ? 'opacity-100 scale-100 filter-none' : 'opacity-0 scale-[0.98] blur-md'
      }`}
      style={{
        transitionProperty: 'opacity, transform, filter',
      }}
    >
      {/* Soft golden light glow behind the center */}
      <div className="absolute w-[400px] h-[400px] bg-[#C5A376]/5 rounded-full filter blur-[100px] pointer-events-none animate-pulse" />

      <div className="relative z-10 flex flex-col items-center gap-5 text-center">
        {/* ESTATE Logo */}
        <span
          className={`font-serif text-3xl md:text-4xl tracking-[0.25em] font-light text-white transition-all duration-[1000ms] ease-out ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          ESTATE<span className="text-[#C5A376] font-sans font-light">.</span>
        </span>

        {/* Thin Gold Divider expanding from center */}
        <div
          className={`h-[1px] bg-gradient-to-r from-transparent via-[#C5A376] to-transparent transition-all duration-[1200ms] ease-out ${
            animate ? 'w-48 opacity-100' : 'w-0 opacity-0'
          }`}
          style={{ transitionDelay: '250ms' }}
        />

        {/* Subtitle with slow reveal */}
        <span
          className={`text-[9px] font-semibold tracking-[0.3em] uppercase text-[#8C7B6A]/80 transition-all duration-[1000ms] ease-out ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          Private Advisory
        </span>
      </div>
    </div>
  );
};

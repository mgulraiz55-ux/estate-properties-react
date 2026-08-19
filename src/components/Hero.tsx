import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onConsultationClick: () => void;
}

const AnimatedCounter: React.FC<{ target: number; prefix?: string; suffix?: string; duration?: number; mounted: boolean }> = ({
  target,
  prefix = '',
  suffix = '',
  duration = 2000,
  mounted
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!mounted) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

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
  }, [target, duration, mounted]);

  return <>{prefix}{count}{suffix}</>;
};

export const Hero: React.FC<HeroProps> = React.memo(({ onExploreClick, onConsultationClick }) => {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1.08);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Very slow continuous Ken Burns zoom effect
    let animFrame: number;
    let start: number | null = null;
    const animate = (time: number) => {
      if (!start) start = time;
      const progress = (time - start) / 20000; // Slow 20 second loop cycle
      const currentScale = 1.08 + Math.sin(progress * Math.PI * 2) * 0.03;
      setScale(currentScale);
      animFrame = requestAnimationFrame(animate);
    };
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientWidth, clientHeight } = e.currentTarget;
    const x = (e.clientX / clientWidth - 0.5) * 12; // Max 12px shift
    const y = (e.clientY / clientHeight - 0.5) * 12;
    setMouse({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen lg:h-[110vh] lg:min-h-[1080px] w-full flex flex-col justify-between overflow-visible bg-[#1A1917] pt-32 pb-12 lg:pt-36 lg:pb-16"
    >
      {/* High-Resolution Background Image with Parallax & Ken Burns Zoom */}
      <div className="absolute inset-0 select-none pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
          srcSet="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=640&q=80 640w,
                  https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1024&q=80 1024w,
                  https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1440&q=80 1440w,
                  https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80 1920w"
          sizes="100vw"
          alt="Breathtaking Luxury Private Estate Sunset Golden Hour Villa"
          className="w-full h-full object-cover opacity-90 brightness-[1.10] contrast-[1.02]"
          fetchPriority="high"
          style={{
            transform: `translate3d(${mouse.x}px, ${mouse.y + scrollY * 0.15}px, 0) scale(${scale})`,
            transition: 'transform 350ms cubic-bezier(0.19, 1, 0.22, 1)',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Layered Luxury Gradient Vignette and Vignette Edge Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-[#1A1917]/30 to-[#1A1917]/95 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1917]/90 via-[#1A1917]/35 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(26,25,23,0.65)_100%)] z-10 pointer-events-none" />

      {/* Ambient Floating Particle Accents */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[25%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#C5A376]/30 animate-pulse" />
        <div className="absolute top-[35%] right-[20%] w-1.5 h-1.5 rounded-full bg-white/20 animate-ping duration-1000" />
        <div className="absolute bottom-[40%] left-[25%] w-1 h-1 rounded-full bg-[#C5A376]/45 animate-pulse" />
        <div className="absolute bottom-[30%] right-[15%] w-1.5 h-1.5 rounded-full bg-white/10 animate-pulse" />
      </div>

      {/* Empty space element to balance height spacing */}
      <div className="h-6 md:h-12" />

      {/* Central Content Column */}
      <div className="relative z-20 text-center px-6 max-w-[900px] mx-auto flex flex-col items-center gap-6 md:gap-8 mt-12 lg:mt-16">
        
        {/* Tagline Badge */}
        <div className="mb-2 md:mb-4">
          <span className="inline-block text-[9px] sm:text-[10px] font-semibold tracking-[0.45em] uppercase text-[#C5A376] bg-black/45 backdrop-blur-md px-6 py-2 border border-white/10 shadow-lg animate-fadeIn duration-[800ms]">
            THE PINNACLE OF PRIVATE WEALTH ARCHITECTURE
          </span>
        </div>

        {/* Heading - Split into two lines, refined serif - hardware composited */}
        <h1 
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight leading-[1.15] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] drop-shadow-[0_8px_32px_rgba(0,0,0,0.4)] mb-6 md:mb-8 animate-fadeIn duration-[1000ms]"
        >
          Exquisite Living,<br />Defined
        </h1>

        {/* Subtitle - High contrast, max-width 650px */}
        <p 
          className="text-xs sm:text-sm md:text-base text-white max-w-[650px] mx-auto font-medium leading-[1.8] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] animate-fadeIn duration-[1000ms]"
        >
          Curating the world&apos;s most prestigious architectural masterpieces for the most discerning global clients under strictly confidential terms.
        </p>

        {/* Action Buttons - Centered stack, matching height & width */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 md:mt-14 w-full max-w-md sm:max-w-xl animate-fadeIn duration-[1200ms]">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-80 h-[50px] bg-[#C5A376] text-[#1A1917] font-semibold text-xs tracking-[0.22em] uppercase border border-[#C5A376] hover:bg-[#B59265] hover:border-[#B59265] transition-all duration-500 shadow-xl flex items-center justify-center gap-2 group hover:shadow-[0_15px_40px_rgba(197,163,118,0.45)] hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore Properties</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onConsultationClick}
            className="w-full sm:w-80 h-[50px] bg-white/5 border border-white/20 text-white font-bold text-xs tracking-[0.22em] uppercase backdrop-blur-lg hover:bg-white/10 hover:border-white hover:shadow-[0_15px_30px_rgba(255,255,255,0.15)] transition-all duration-500 flex items-center justify-center hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
          >
            Schedule Consultation
          </button>
        </div>
      </div>

      {/* Bottom Panel containing Scroll Indicator and Statistics Card in natural flex flow */}
      <div className="relative z-20 w-full flex flex-col items-center gap-4 md:gap-5 mt-auto pb-2 lg:pb-3">
        
        {/* Animated luxury scroll indicator */}
        <div className="flex flex-col items-center gap-2 cursor-pointer mb-2 mt-4 md:mt-6" onClick={onExploreClick}>
          <span className="text-[8px] sm:text-[9px] text-[#C5A376] tracking-[0.35em] uppercase transition-colors duration-500 hover:text-white">
            SCROLL TO DISCOVER
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2 transition-all duration-500 hover:border-[#C5A376]">
            <div className="w-1.5 h-1.5 bg-[#C5A376] rounded-full animate-scroll-dot" />
          </div>
        </div>

        {/* Statistics Floating Glass Card overlapping next section by 48px naturally via negative margin */}
        <div className="w-full max-w-4xl px-6 mb-[-48px] relative z-30">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-md py-5 px-4 sm:px-10 flex justify-between items-center gap-2 sm:gap-8 shadow-2xl">
            <div className="text-center flex-1">
              <div className="font-serif text-xl sm:text-3xl md:text-4xl font-light text-white">
                <AnimatedCounter target={12} prefix="$" suffix="B+" mounted={mounted} />
              </div>
              <div className="text-[8px] font-semibold tracking-[0.15em] sm:tracking-[0.25em] text-white/50 uppercase mt-1">
                Total Sales
              </div>
            </div>
            <div className="h-10 w-[1px] bg-white/10" />
            <div className="text-center flex-1">
              <div className="font-serif text-xl sm:text-3xl md:text-4xl font-light text-white">
                <AnimatedCounter target={24} mounted={mounted} />
              </div>
              <div className="text-[8px] font-semibold tracking-[0.15em] sm:tracking-[0.25em] text-white/50 uppercase mt-1">
                Global Markets
              </div>
            </div>
            <div className="h-10 w-[1px] bg-white/10" />
            <div className="text-center flex-1">
              <div className="font-serif text-xl sm:text-3xl md:text-4xl font-light text-[#C5A376]">
                <AnimatedCounter target={30} suffix="+" mounted={mounted} />
              </div>
              <div className="text-[8px] font-semibold tracking-[0.15em] sm:tracking-[0.25em] text-white/50 uppercase mt-1">
                Years Dominance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

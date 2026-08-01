import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  const [cursorType, setCursorType] = useState<'default' | 'button' | 'link' | 'card'>('default');
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const mobileOrTouch =
        window.matchMedia('(max-width: 768px)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0;
      setIsMobile(mobileOrTouch);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) {
      document.body.classList.remove('cursor-none');
      return;
    }

    // Hide standard browser cursor
    document.body.classList.add('cursor-none');

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mousePos.current.x = -100;
      mousePos.current.y = -100;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isCard = target.closest('#properties .grid > div') || target.closest('#properties .grid > a');
      const isButton =
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.classList.contains('btn-premium') ||
        target.closest('.btn-premium');
      const isLink = target.tagName === 'A' || target.closest('a');

      if (isCard) {
        setCursorType('card');
      } else if (isButton) {
        setCursorType('button');
      } else if (isLink) {
        setCursorType('link');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseover', handleMouseOver);

    // Animation Loop with requestAnimationFrame
    let animFrameId: number;

    const updatePositions = () => {
      // Outer ring lag formula (linear interpolation)
      const ease = 0.15;

      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      // Update inner dot immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Update outer ring with lag
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId = requestAnimationFrame(updatePositions);
    };

    animFrameId = requestAnimationFrame(updatePositions);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('cursor-none');
      cancelAnimationFrame(animFrameId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  // Custom Cursor Classes based on states
  let ringClasses = 'border-[#C5A376]/45 w-7 h-7';
  let dotClasses = 'bg-[#C5A376]';

  if (cursorType === 'button') {
    ringClasses = 'border-[#C5A376] w-9 h-9 scale-110 bg-[#C5A376]/5 shadow-[0_0_15px_rgba(197,163,118,0.15)]';
    dotClasses = 'bg-[#C5A376] scale-75';
  } else if (cursorType === 'link') {
    ringClasses = 'border-white bg-[#C5A376]/10 w-8 h-8 scale-105 shadow-[0_0_10px_rgba(255,255,255,0.2)]';
    dotClasses = 'bg-white scale-90';
  } else if (cursorType === 'card') {
    ringClasses = 'border-[#C5A376] bg-[#C5A376]/10 w-14 h-14 scale-110 shadow-[0_0_25px_rgba(197,163,118,0.25)]';
    dotClasses = 'bg-[#C5A376] scale-75';
  }

  return (
    <>
      {/* Inner Dot: Small gold circle following mouse */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-300 ease-out ${dotClasses}`}
        style={{
          width: '6px',
          height: '6px',
          willChange: 'transform',
        }}
      />

      {/* Outer Ring with smooth lag */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border transition-all duration-500 ease-out ${ringClasses}`}
        style={{
          willChange: 'transform',
          transitionProperty: 'width, height, background-color, border-color, transform, box-shadow',
        }}
      />
    </>
  );
};

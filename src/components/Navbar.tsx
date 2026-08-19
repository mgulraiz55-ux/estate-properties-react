import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenInquire: (propertyTitle?: string) => void;
  onOpenSearch: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = React.memo(({ onOpenInquire, onOpenSearch, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      // Slide navbar out when scrolling down, slide in when scrolling up
      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'Off-Market', href: '#properties' },
    { name: 'Distinction', href: '#why-us' },
    { name: 'Expertise', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Advisors', href: '#advisors' },
    { name: 'Insights', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ease-in-out h-[84px] flex items-center ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled
            ? 'bg-[#FAF9F6]/85 backdrop-blur-2xl border-b border-[#E5E2DA]/50 shadow-[0_4px_30px_rgba(26,25,23,0.03)]'
            : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:pr-[40px]">
          {/* Brand Logo */}
          <div className="flex-1 flex justify-start">
            <a
              href="#"
              className={`font-serif text-2xl xl:text-3xl tracking-[0.25em] font-light transition-all duration-500 ease-in-out ${
                scrolled ? 'text-[#1A1917]' : 'text-white'
              }`}
            >
              ESTATE<span className="text-[#C5A376] font-sans font-light">.</span>
            </a>
          </div>

          {/* Desktop Links (Centered Navigation) */}
          <div className="hidden lg:flex flex-initial justify-center gap-4 xl:gap-6 2xl:gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1.5 text-[9px] xl:text-[10px] 2xl:text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-500 ease-in-out group flex items-center ${
                    isActive
                      ? 'text-[#C5A376]'
                      : scrolled
                      ? 'text-[#4A4740] hover:text-[#1A1917]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1px] transform origin-center transition-transform ease-out ${
                      isActive
                        ? 'scale-x-100 bg-[#C5A376]'
                        : scrolled
                        ? 'scale-x-0 group-hover:scale-x-100 bg-[#C5A376]'
                        : 'scale-x-0 group-hover:scale-x-100 bg-white'
                    }`}
                    style={{ transitionDuration: '400ms' }}
                  />
                </a>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex-1 flex justify-end items-center gap-3 lg:gap-5">
            <div className="hidden lg:flex items-center gap-5 xl:gap-6 lg:ml-6 xl:ml-8">
              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                className={`flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase px-4 h-[42px] flex items-center justify-center transition-all duration-500 ease-in-out border rounded-none ${
                  scrolled
                    ? 'border-[#4A4740]/10 text-[#4A4740] hover:text-[#1A1917] hover:border-[#1A1917]/30 hover:bg-[#1A1917]/5'
                    : 'border-white/10 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
              </button>

              {/* Contact / Inquire Button */}
              <button
                onClick={() => onOpenInquire()}
                className={`relative overflow-hidden text-[11px] font-semibold tracking-[0.2em] uppercase px-[18px] h-[46px] flex items-center justify-center transition-all duration-500 ease-in-out border rounded-none ${
                  scrolled
                    ? 'bg-[#1A1917]/5 border-[#1A1917]/10 text-[#4A4740] hover:bg-[#1A1917] hover:border-[#1A1917] hover:text-white'
                    : 'bg-white/5 backdrop-blur-md border-white/10 text-white hover:bg-white hover:text-[#1A1917]'
                }`}
              >
                Inquire Now
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center transition-all duration-500 ease-in-out ${
                scrolled ? 'text-[#1A1917] hover:text-[#C5A376]' : 'text-white hover:text-[#C5A376]'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1A1917]/98 backdrop-blur-2xl text-white flex flex-col justify-between p-8 md:p-12 animate-fadeIn transition-all duration-500 ease-in-out overflow-y-auto max-h-screen">
          <div className="flex justify-between items-center pb-6 border-b border-white/10">
            <span className="font-serif text-2xl tracking-[0.25em] font-light">
              ESTATE<span className="text-[#C5A376] font-sans font-light">.</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col gap-6 my-auto text-center">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${idx * 50}ms` }}
                className="font-serif text-2xl md:text-3xl tracking-[0.18em] font-light text-white/80 hover:text-[#C5A376] transition-all duration-500 hover:scale-105"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A376] hover:text-[#B59265] mt-6 transition-all duration-500"
            >
              <Search className="w-4 h-4" />
              Search Properties & Journal
            </button>
          </div>

          <div className="space-y-5 pt-8 border-t border-white/10 text-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquire();
              }}
              className="w-full bg-gradient-to-r from-[#C5A376] to-[#B59265] text-white hover:from-[#B59265] hover:to-[#A58255] text-xs font-semibold py-4 uppercase tracking-[0.22em] transition-all duration-500 hover:shadow-[0_0_20px_rgba(197,163,118,0.25)]"
            >
              Schedule Private Consultation
            </button>
            <p className="text-[10px] text-white/50 tracking-[0.25em] uppercase">
              Global Concierge:{' '}
              <a href="tel:+13108924000" className="hover:text-white transition-colors duration-300">
                +1 (310) 892-4000
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
});

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Check, Globe } from 'lucide-react';

export const Footer: React.FC = React.memo(() => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const col1Links = [
    { name: 'About', href: '#why-us' },
    { name: 'Distinction', href: '#why-us' },
    { name: 'Advisors', href: '#advisors' },
    { name: 'Journal', href: '#journal' },
  ];

  const col2Links = [
    { name: 'Featured Properties', href: '#properties' },
    { name: 'Off-Market', href: '#properties' },
    { name: 'Global Portfolio', href: '#properties' },
    { name: 'Investment', href: '#properties' },
  ];

  const col3Links = [
    { name: 'Buying Representation', href: '#services' },
    { name: 'Selling & Marketing', href: '#services' },
    { name: 'Private Advisory', href: '#services' },
    { name: 'Concierge', href: '#contact' },
  ];

  const socialIcons = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1A1917] to-[#161616] text-[#E5E2DA]/70 w-full pt-36 pb-16 border-t border-[#C5A376]/30 relative overflow-hidden">
      {/* Subtle luxury grid background texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#8c7b6a_1px,transparent_1px),linear-gradient(to_bottom,#8c7b6a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-10 left-10 w-48 h-48 bg-[#C5A376]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#" className="font-serif text-3xl md:text-4xl tracking-[0.25em] font-light text-white transition-colors duration-500">
              ESTATE<span className="text-[#C5A376] font-sans font-light">.</span>
            </a>
            
            <p className="font-serif text-lg font-light italic text-[#E5E2DA]/95 leading-relaxed max-w-sm">
              &quot;Curating exceptional residences for the world&apos;s most discerning clientele.&quot;
            </p>
            
            <p className="text-xs text-[#E5E2DA]/50 font-light leading-relaxed max-w-sm mb-4">
              The global authority in ultra-prime residential acquisitions. Bridging exceptional architectural legacy with multi-generational wealth preservation.
            </p>
            
            {/* Social Icons (Gold Outlined Circles with Hover Fills) */}
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A376] hover:text-white hover:bg-[#C5A376] hover:shadow-[0_0_15px_rgba(197,163,118,0.35)] hover:-translate-y-1 transition-all duration-[400ms] ease-out"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="font-serif text-sm font-light tracking-[0.2em] text-[#C5A376] uppercase">
              Company
            </h3>
            <ul className="space-y-4 text-xs font-light">
              {col1Links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative py-1 hover:text-[#C5A376] transition-colors duration-300 group inline-block"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A376] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Properties */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="font-serif text-sm font-light tracking-[0.2em] text-[#C5A376] uppercase">
              Properties
            </h3>
            <ul className="space-y-4 text-xs font-light">
              {col2Links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative py-1 hover:text-[#C5A376] transition-colors duration-300 group inline-block"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A376] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="font-serif text-sm font-light tracking-[0.2em] text-[#C5A376] uppercase">
              Services
            </h3>
            <ul className="space-y-4 text-xs font-light">
              {col3Links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative py-1 hover:text-[#C5A376] transition-colors duration-300 group inline-block"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A376] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="font-serif text-sm font-light tracking-[0.2em] text-[#C5A376] uppercase">
              Contact
            </h3>
            <ul className="space-y-4 text-xs font-light">
              <li className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-[#C5A376]" />
                <a href="tel:+13108924000" className="hover:text-[#C5A376] transition-colors tracking-wide">
                  +1 (310) 892-4000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-[#C5A376]" />
                <a href="mailto:concierge@estate.com" className="hover:text-[#C5A376] transition-colors tracking-wide">
                  concierge@estate.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-3.5 h-3.5 text-[#C5A376]" />
                <span className="tracking-wide">Beverly Hills HQ</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-3.5 h-3.5 text-[#C5A376]" />
                <span className="tracking-wide">Global Coverage</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Luxury Newsletter Section */}
        <div className="border-t border-[#C5A376]/20 pt-16 pb-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <h3 className="font-serif text-2xl font-light tracking-wide text-white mb-2">
                Private Market Intelligence
              </h3>
              <p className="text-xs text-[#E5E2DA]/50 font-light leading-relaxed max-w-lg">
                Receive confidential market reports, investment insights, and exclusive off-market opportunities.
              </p>
            </div>
            
            <div className="lg:col-span-6 w-full">
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C5A376] py-3.5">
                  <Check className="w-4 h-4" />
                  <span>Confidential Subscription Confirmed</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                  <input
                    id="newsletter-email"
                    aria-label="Receive Private Market Insights"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="RECEIVE PRIVATE MARKET INSIGHTS"
                    className="flex-1 bg-white/5 border border-white/10 py-3.5 px-6 text-xs font-semibold tracking-[0.15em] text-white placeholder-[#E5E2DA]/30 focus:outline-none focus:border-[#C5A376] focus:shadow-[0_0_20px_rgba(197,163,118,0.15)] transition-all duration-500 rounded-full"
                  />
                  <button
                    type="submit"
                    className="bg-[#1A1917] text-white hover:bg-[#C5A376] text-xs font-semibold tracking-[0.2em] uppercase px-8 py-3.5 border border-white/20 hover:border-[#C5A376] transition-all duration-[400ms] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(197,163,118,0.25)] rounded-full whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="text-[10px] font-semibold tracking-[0.25em] text-white/40 uppercase">
            &copy; 2026 ESTATE Private Advisory
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-semibold tracking-[0.2em] text-white/40">
            <a href="#" className="hover:text-white transition-colors duration-300">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors duration-300">TERMS</a>
            <a href="#" className="hover:text-white transition-colors duration-300">COOKIES</a>
            <a href="#" className="hover:text-white transition-colors duration-300">ACCESSIBILITY</a>
          </div>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = 'Footer';

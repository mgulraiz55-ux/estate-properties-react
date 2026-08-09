import React, { useState, useEffect } from 'react';
import { Phone, Mail, CheckCircle, Shield, Globe, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenInquire: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquire }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredMarket: 'Beverly Hills',
    budget: '$15M - $35M',
    investmentGoal: 'Acquisition',
    message: '',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredMarket: 'Beverly Hills',
        budget: '$15M - $35M',
        investmentGoal: 'Acquisition',
        message: '',
      });
    }, 5000);
  };

  const contactCards = [
    {
      icon: Shield,
      title: 'Private Advisory',
      value: 'Confidential Client Group',
      desc: 'Direct access to senior managing partners.'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      value: 'Beverly Hills • London • Monaco',
      desc: 'Serving UHNW clients on six continents.'
    },
    {
      icon: Phone,
      title: 'Direct Concierge',
      value: '+1 (310) 892-4000',
      href: 'tel:+13108924000',
      desc: 'Available 24/7 for urgent portfolio inquiries.'
    },
    {
      icon: Mail,
      title: 'Correspondence',
      value: 'concierge@estate.com',
      href: 'mailto:concierge@estate.com',
      desc: 'Encrypted communication lines for complete privacy.'
    }
  ];

  return (
    <section id="contact" className="bg-[#F5F4F0] text-[#1A1917] py-36 md:py-44 border-t border-[#E5E2DA]/40 relative overflow-hidden">
      {/* Subtle marble texture layer and radial lighting */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#8c7b6a_1px,transparent_1px),linear-gradient(to_bottom,#8c7b6a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#C5A376]/5 to-transparent rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#8C7B6A]/5 to-transparent rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Editorial Typography & Private Concierge Contacts */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div
              className={`transform transition-all duration-[1000ms] ease-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A376] uppercase mb-4 block">
                CONFIDENTIAL CONSULTATION
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#1A1917] mb-6 leading-tight">
                Private Concierge
              </h2>
              <p className="text-sm sm:text-base text-[#6B665E]/90 font-light leading-relaxed max-w-md">
                Our advisors curate highly confidential acquisitions, investment strategies, and private off-market portfolios for discerning clients worldwide.
              </p>
            </div>

            {/* Direct Scheduling Link Option */}
            <div className="p-6 bg-white/50 backdrop-blur-sm border-l-2 border-l-[#C5A376] border-y border-r border-[#E5E2DA]/40 rounded-r-xl rounded-l-sm shadow-sm flex justify-between items-center">
              <div>
                <p className="text-xs text-[#6B665E] font-light mb-1">
                  Prefer immediate digital booking?
                </p>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A1917]">
                  Book a Private Viewing
                </h3>
              </div>
              <button
                onClick={onOpenInquire}
                className="w-10 h-10 rounded-full bg-[#1A1917] text-white flex items-center justify-center hover:bg-[#C5A376] hover:shadow-[0_0_15px_rgba(197,163,118,0.25)] transition-all duration-300"
                aria-label="Open scheduling booking modal"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Premium Info Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                    className={`group p-6 bg-white/70 backdrop-blur-sm border border-[#E5E2DA]/40 rounded-xl shadow-sm hover:border-[#C5A376]/45 hover:shadow-[0_20px_45px_rgba(26,25,23,0.06)] hover:-translate-y-1.5 transition-all duration-[400ms] ease-out flex flex-col justify-between h-40 transform ${
                      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E2DA] flex items-center justify-center text-[#C5A376] shadow-sm group-hover:bg-[#1A1917] group-hover:text-white group-hover:border-[#1A1917] transition-all duration-[400ms]">
                        <IconComponent className="w-4 h-4 stroke-[1.5]" />
                      </div>
                      <span className="text-[8px] font-semibold tracking-wider text-[#8C867A] uppercase">
                        {card.title}
                      </span>
                    </div>
                    <div>
                      {card.href ? (
                        <a 
                          href={card.href} 
                          className="font-serif text-[15px] font-light text-[#1A1917] hover:text-[#C5A376] transition-colors leading-tight block mb-1"
                        >
                          {card.value}
                        </a>
                      ) : (
                        <h3 className="font-serif text-[15px] font-light text-[#1A1917] leading-tight mb-1">
                          {card.value}
                        </h3>
                      )}
                      <p className="text-[10px] text-[#6B665E] font-light leading-snug">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Luxury Form & Client benefits badge */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 border border-[#E5E2DA]/40 rounded-[20px] shadow-md hover:border-[#C5A376]/30 transition-all duration-[500ms]">
              {formSubmitted ? (
                <div className="bg-[#C5A376]/10 border border-[#C5A376]/30 p-10 text-center my-12 animate-fadeIn rounded-2xl">
                  <CheckCircle className="w-12 h-12 text-[#C5A376] mx-auto mb-4" />
                  <h4 className="font-serif text-2xl text-[#1A1917] mb-2 font-light">Communication Securely Transmitted</h4>
                  <p className="text-xs sm:text-sm text-[#6B665E]/90 max-w-md mx-auto font-light leading-relaxed">
                    Thank you, {formData.name || 'valued client'}. A managing partner from our Private Client Group will respond within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#8C867A] mb-2">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Lord Sterling"
                        className="w-full bg-[#FAF9F6] border border-[#E5E2DA]/65 focus:border-[#C5A376]/85 px-5 py-4 text-xs text-[#1A1917] placeholder-[#8C867A]/40 focus:outline-none focus:shadow-[0_0_20px_rgba(197,163,118,0.15)] transition-all duration-500 rounded-[16px]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#8C867A] mb-2">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. client@familyoffice.com"
                        className="w-full bg-[#FAF9F6] border border-[#E5E2DA]/65 focus:border-[#C5A376]/85 px-5 py-4 text-xs text-[#1A1917] placeholder-[#8C867A]/40 focus:outline-none focus:shadow-[0_0_20px_rgba(197,163,118,0.15)] transition-all duration-500 rounded-[16px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-phone" className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#8C867A] mb-2">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +1 (310) 892-4001"
                        className="w-full bg-[#FAF9F6] border border-[#E5E2DA]/65 focus:border-[#C5A376]/85 px-5 py-4 text-xs text-[#1A1917] placeholder-[#8C867A]/40 focus:outline-none focus:shadow-[0_0_20px_rgba(197,163,118,0.15)] transition-all duration-500 rounded-[16px]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-market" className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#8C867A] mb-2">
                        Preferred Market
                      </label>
                      <div className="relative">
                        <select
                          id="contact-market"
                          value={formData.preferredMarket}
                          onChange={(e) => setFormData({ ...formData, preferredMarket: e.target.value })}
                          className="w-full bg-[#FAF9F6] border border-[#E5E2DA]/65 focus:border-[#C5A376]/85 px-5 py-4 text-xs text-[#1A1917] focus:outline-none focus:shadow-[0_0_20px_rgba(197,163,118,0.15)] transition-all duration-500 rounded-[16px] appearance-none"
                        >
                          <option value="Beverly Hills">Beverly Hills</option>
                          <option value="Miami">Miami</option>
                          <option value="Dubai">Dubai</option>
                          <option value="London">London</option>
                          <option value="Monaco">Monaco</option>
                          <option value="Private Island">Private Island</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#8C867A]">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-budget" className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#8C867A] mb-2">
                        Budget Range
                      </label>
                      <div className="relative">
                        <select
                          id="contact-budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-[#FAF9F6] border border-[#E5E2DA]/65 focus:border-[#C5A376]/85 px-5 py-4 text-xs text-[#1A1917] focus:outline-none focus:shadow-[0_0_20px_rgba(197,163,118,0.15)] transition-all duration-500 rounded-[16px] appearance-none"
                        >
                          <option value="$5M - $15M">$5M - $15M</option>
                          <option value="$15M - $35M">$15M - $35M</option>
                          <option value="$35M - $75M">$35M - $75M</option>
                          <option value="$75M+">$75M+</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#8C867A]">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-goal" className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#8C867A] mb-2">
                        Investment Goal
                      </label>
                      <div className="relative">
                        <select
                          id="contact-goal"
                          value={formData.investmentGoal}
                          onChange={(e) => setFormData({ ...formData, investmentGoal: e.target.value })}
                          className="w-full bg-[#FAF9F6] border border-[#E5E2DA]/65 focus:border-[#C5A376]/85 px-5 py-4 text-xs text-[#1A1917] focus:outline-none focus:shadow-[0_0_20px_rgba(197,163,118,0.15)] transition-all duration-500 rounded-[16px] appearance-none"
                        >
                          <option value="Acquisition">Acquisition / Buying</option>
                          <option value="Capital Preservation">Capital Preservation</option>
                          <option value="Secondary Residence">Secondary Residence</option>
                          <option value="Development Opportunity">Development Opportunity</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#8C867A]">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#8C867A] mb-2">
                      Confidential Requirements (Message)
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please state specific architectural preferences, locations, or privacy instructions..."
                      className="w-full bg-[#FAF9F6] border border-[#E5E2DA]/65 focus:border-[#C5A376]/85 px-5 py-4 text-xs text-[#1A1917] placeholder-[#8C867A]/40 focus:outline-none focus:shadow-[0_0_20px_rgba(197,163,118,0.15)] transition-all duration-500 rounded-[18px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1A1917] to-[#C5A376] text-white hover:from-[#252321] hover:to-[#B59265] py-4.5 text-xs font-semibold tracking-[0.3em] uppercase transition-all duration-[400ms] hover:shadow-[0_0_25px_rgba(197,163,118,0.4)] hover:-translate-y-1 rounded-full border border-[#C5A376]/20 flex items-center justify-center gap-2 group"
                  >
                    <span>Request Private Consultation</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-[400ms]" />
                  </button>
                </form>
              )}
            </div>

            {/* Extra Luxury Card: Private Client Benefits */}
            <div className="mt-8 p-6 bg-white/40 backdrop-blur-md border border-[#E5E2DA]/60 rounded-2xl shadow-sm">
              <h4 className="text-[10px] font-semibold tracking-[0.25em] text-[#C5A376] uppercase mb-4">
                Private Client Benefits
              </h4>
              <div className="grid grid-cols-2 gap-4 text-xs text-[#6B665E] font-light">
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A376] text-sm font-semibold">✓</span>
                  <span>Dedicated Global Advisor</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A376] text-sm font-semibold">✓</span>
                  <span>Confidential Transactions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A376] text-sm font-semibold">✓</span>
                  <span>Off-Market Opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A376] text-sm font-semibold">✓</span>
                  <span>Investment Intelligence</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
ContactSection.displayName = 'ContactSection';

import React, { useState, useEffect } from 'react';
import { Property } from '../types';
import { PROPERTIES } from '../data/mockData';
import {
  X, Bed, Bath, Maximize2, Calendar, ShieldCheck, Mail, Phone, ChevronLeft, ChevronRight,
  Check, Car, Landmark, Zap, Compass, MapPin, ArrowRight, Heart, Waves, Star, Info, MessageSquare
} from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onInquire: (propertyTitle: string) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onInquire,
}) => {
  const [activeProperty, setActiveProperty] = useState<Property | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', note: '' });

  useEffect(() => {
    setActiveProperty(property);
    setSelectedImageIndex(0);
    setFormSubmitted(false);
  }, [property]);

  // Keyboard navigation for image slider & lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProperty) return;
      const gallery = activeProperty.gallery && activeProperty.gallery.length > 0 ? activeProperty.gallery : [activeProperty.image];

      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight') {
        if (lightboxOpen) {
          setSelectedImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
        } else {
          setSelectedImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
        }
      } else if (e.key === 'ArrowLeft') {
        if (lightboxOpen) {
          setSelectedImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
        } else {
          setSelectedImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProperty, lightboxOpen]);

  if (!activeProperty) return null;

  const currentGallery = activeProperty.gallery && activeProperty.gallery.length > 0 ? activeProperty.gallery : [activeProperty.image];

  // Helper values for extended luxury specifications
  const getSpecs = (p: Property) => {
    if (p.id === 'obsidian-estate') {
      return {
        garage: '8-Car Subterranean Gallery',
        lotSize: '1.24 Acres',
        type: 'Ultra Luxury Estate',
        style: 'Contemporary Brutalist',
        energy: 'A++ Certified',
      };
    }
    if (p.category === 'Coastal') {
      return {
        garage: '3 Car Heated Garage',
        lotSize: '0.85 Acres',
        type: 'Coastal Haven',
        style: 'Modern Mediterranean',
        energy: 'A+ Certified',
      };
    }
    if (p.category === 'Penthouses') {
      return {
        garage: '2 Private Valet Spaces',
        lotSize: 'N/A (Duplex Sky)',
        type: 'Sky Penthouse Suite',
        style: 'Penthouse Minimalist',
        energy: 'A Certified',
      };
    }
    return {
      garage: '3 Car Carriage House',
      lotSize: '0.65 Acres',
      type: 'Trophy Villa',
      style: 'Organic Contemporary',
      energy: 'A+ Certified',
    };
  };

  const specs = getSpecs(activeProperty);

  // Helper mapping for custom feature icons
  const getFeatureIcon = (feature: string) => {
    const f = feature.toLowerCase();
    if (f.includes('pool') || f.includes('beach')) return <Waves className="w-4 h-4 text-[#C5A376]" />;
    if (f.includes('garage') || f.includes('car')) return <Car className="w-4 h-4 text-[#C5A376]" />;
    if (f.includes('spa') || f.includes('sauna') || f.includes('wellness')) return <Heart className="w-4 h-4 text-[#C5A376]" />;
    if (f.includes('wine') || f.includes('cellar')) return <Star className="w-4 h-4 text-[#C5A376]" />;
    if (f.includes('screen') || f.includes('cinema') || f.includes('theater')) return <Maximize2 className="w-4 h-4 text-[#C5A376]" />;
    if (f.includes('smart') || f.includes('automation')) return <Zap className="w-4 h-4 text-[#C5A376]" />;
    return <Check className="w-4 h-4 text-[#C5A376]" />;
  };

  // Find 3 similar properties (excluding active one)
  const similarProperties = PROPERTIES.filter((p) => p.id !== activeProperty.id)
    .slice(0, 3);

  // Drop Cap extraction
  const firstChar = activeProperty.description.charAt(0);
  const remainingText = activeProperty.description.slice(1);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="property-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-0 sm:p-4 overflow-y-auto animate-fadeIn"
    >
      {/* Detail Showcase container */}
      <div className="bg-[#FAF9F6] text-[#2D2A26] w-full max-w-6xl max-h-[100vh] sm:max-h-[92vh] overflow-y-auto custom-scrollbar relative border border-[#E5E2DA]/40 shadow-2xl rounded-none">
        
        {/* Close Button overlay */}
        <button
          onClick={onClose}
          aria-label="Close property viewer"
          className="absolute top-6 right-6 z-30 w-12 h-12 bg-black/35 hover:bg-[#8C7B6A] text-white flex items-center justify-center transition-all duration-500 rounded-full border border-white/10 backdrop-blur-md cursor-pointer hover:rotate-90 shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. HERO SECTION (Full-Screen Immersive Cover) */}
        <div className="relative h-[65vh] sm:h-[80vh] w-full overflow-hidden flex flex-col justify-end p-6 sm:p-12 md:p-16">
          <img
            src={activeProperty.image}
            alt={activeProperty.title}
            className="w-full h-full absolute inset-0 object-cover scale-100 hover:scale-103 transition-transform duration-[4000ms] ease-out select-none"
          />
          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1C1A] via-[#1E1C1A]/40 to-black/30 z-10" />

          {/* Status Tag Overlay */}
          {activeProperty.statusTag && (
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-[#C5A376] text-white text-[9px] font-semibold tracking-[0.3em] uppercase px-4 py-2 border border-white/20 shadow-lg">
                {activeProperty.statusTag}
              </span>
            </div>
          )}

          {/* Title & Info Block */}
          <div className="relative z-20 max-w-4xl text-white">
            <span className="text-[#C5A376] font-semibold text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-3 block">
              {activeProperty.location}
            </span>
            <h1 id="property-modal-title" className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light tracking-wide mb-6 leading-tight">
              {activeProperty.title}
            </h1>
            
            {/* Quick Strip */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-6 border-t border-white/10 text-white/90">
              <div>
                <span className="text-[9px] tracking-widest text-[#B5A595] uppercase block mb-1">GUIDE PRICE</span>
                <span className="font-serif text-xl sm:text-2xl text-[#C5A376] font-medium">{activeProperty.price}</span>
              </div>
              <div className="h-8 w-[1px] bg-white/15 hidden sm:block" />
              <div>
                <span className="text-[9px] tracking-widest text-[#B5A595] uppercase block mb-1">BEDROOMS</span>
                <span className="font-serif text-xl">{activeProperty.beds} Suites</span>
              </div>
              <div className="h-8 w-[1px] bg-white/15 hidden sm:block" />
              <div>
                <span className="text-[9px] tracking-widest text-[#B5A595] uppercase block mb-1">BATHROOMS</span>
                <span className="font-serif text-xl">{activeProperty.baths} Baths</span>
              </div>
              <div className="h-8 w-[1px] bg-white/15 hidden sm:block" />
              <div>
                <span className="text-[9px] tracking-widest text-[#B5A595] uppercase block mb-1">TOTAL SPACE</span>
                <span className="font-serif text-xl">{activeProperty.sqft.toLocaleString()} SQFT</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. IMAGE GALLERY (Masonry & Interactive light box) */}
        <div className="p-6 sm:p-12 md:p-16 border-b border-[#E5E2DA]/40">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-[#8C7B6A] font-semibold text-[9px] tracking-[0.3em] uppercase block mb-2">IMMERSIVE EXPERIENCE</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1917]">Visual Gallery & Spaces</h2>
            </div>
            <button
              onClick={() => {
                setSelectedImageIndex(0);
                setLightboxOpen(true);
              }}
              className="text-[10px] font-semibold tracking-[0.25em] text-[#1A1917] hover:text-[#C5A376] uppercase flex items-center gap-2 border-b border-[#1A1917] hover:border-[#C5A376] pb-1 transition-all"
            >
              <span>View Lightbox</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Luxury Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              onClick={() => {
                setSelectedImageIndex(0);
                setLightboxOpen(true);
              }}
              className="md:col-span-2 aspect-[16/10] overflow-hidden border border-[#E5E2DA]/50 cursor-zoom-in relative group"
            >
              <img
                src={currentGallery[0]}
                alt="Main view"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
            </div>

            <div className="flex flex-col gap-6">
              {currentGallery.slice(1, 3).map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedImageIndex(idx + 1);
                    setLightboxOpen(true);
                  }}
                  className="flex-1 aspect-[16/10] overflow-hidden border border-[#E5E2DA]/50 cursor-zoom-in relative group"
                >
                  <img
                    src={img}
                    alt={`Space view ${idx + 2}`}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnail row */}
          {currentGallery.length > 3 && (
            <div className="flex gap-4 mt-6 overflow-x-auto pb-2 custom-scrollbar">
              {currentGallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-28 aspect-[16/10] overflow-hidden border transition-all shrink-0 ${
                    selectedImageIndex === idx ? 'border-[#C5A376] opacity-100 scale-[1.02]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 3. PROPERTY DETAILED INFORMATION CARDS */}
        <div className="p-6 sm:p-12 md:p-16 bg-[#F9F7F2]/45 border-b border-[#E5E2DA]/40">
          <span className="text-[#8C7B6A] font-semibold text-[9px] tracking-[0.3em] uppercase block mb-3">RESIDENCE BLUEPRINT</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1917] mb-10">Luxury Specifications</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-[#E5E2DA]/40 hover:-translate-y-1.5 transition-all shadow-sm flex items-start gap-4">
              <div className="p-3 bg-[#FAF9F6] border border-[#E5E2DA]/50 text-[#C5A376]"><Bed className="w-5 h-5" /></div>
              <div>
                <span className="text-[9px] tracking-widest text-[#8C7B6A] uppercase block mb-1">BEDROOMS</span>
                <span className="font-serif text-lg text-[#2D2A26]">{activeProperty.beds} Master Suites</span>
              </div>
            </div>
            <div className="bg-white p-6 border border-[#E5E2DA]/40 hover:-translate-y-1.5 transition-all shadow-sm flex items-start gap-4">
              <div className="p-3 bg-[#FAF9F6] border border-[#E5E2DA]/50 text-[#C5A376]"><Bath className="w-5 h-5" /></div>
              <div>
                <span className="text-[9px] tracking-widest text-[#8C7B6A] uppercase block mb-1">BATHROOMS</span>
                <span className="font-serif text-lg text-[#2D2A26]">{activeProperty.baths} Bathrooms</span>
              </div>
            </div>
            <div className="bg-white p-6 border border-[#E5E2DA]/40 hover:-translate-y-1.5 transition-all shadow-sm flex items-start gap-4">
              <div className="p-3 bg-[#FAF9F6] border border-[#E5E2DA]/50 text-[#C5A376]"><Car className="w-5 h-5" /></div>
              <div>
                <span className="text-[9px] tracking-widest text-[#8C7B6A] uppercase block mb-1">GARAGE SPACES</span>
                <span className="font-serif text-lg text-[#2D2A26]">{specs.garage}</span>
              </div>
            </div>
            <div className="bg-white p-6 border border-[#E5E2DA]/40 hover:-translate-y-1.5 transition-all shadow-sm flex items-start gap-4">
              <div className="p-3 bg-[#FAF9F6] border border-[#E5E2DA]/50 text-[#C5A376]"><Maximize2 className="w-5 h-5" /></div>
              <div>
                <span className="text-[9px] tracking-widest text-[#8C7B6A] uppercase block mb-1">INTERIOR SQFT</span>
                <span className="font-serif text-lg text-[#2D2A26]">{activeProperty.sqft.toLocaleString()} SQFT</span>
              </div>
            </div>
            <div className="bg-white p-6 border border-[#E5E2DA]/40 hover:-translate-y-1.5 transition-all shadow-sm flex items-start gap-4">
              <div className="p-3 bg-[#FAF9F6] border border-[#E5E2DA]/50 text-[#C5A376]"><Compass className="w-5 h-5" /></div>
              <div>
                <span className="text-[9px] tracking-widest text-[#8C7B6A] uppercase block mb-1">LAND AREA</span>
                <span className="font-serif text-lg text-[#2D2A26]">{specs.lotSize}</span>
              </div>
            </div>
            <div className="bg-white p-6 border border-[#E5E2DA]/40 hover:-translate-y-1.5 transition-all shadow-sm flex items-start gap-4">
              <div className="p-3 bg-[#FAF9F6] border border-[#E5E2DA]/50 text-[#C5A376]"><Calendar className="w-5 h-5" /></div>
              <div>
                <span className="text-[9px] tracking-widest text-[#8C7B6A] uppercase block mb-1">YEAR BUILT</span>
                <span className="font-serif text-lg text-[#2D2A26]">{activeProperty.yearBuilt}</span>
              </div>
            </div>
            <div className="bg-white p-6 border border-[#E5E2DA]/40 hover:-translate-y-1.5 transition-all shadow-sm flex items-start gap-4">
              <div className="p-3 bg-[#FAF9F6] border border-[#E5E2DA]/50 text-[#C5A376]"><Landmark className="w-5 h-5" /></div>
              <div>
                <span className="text-[9px] tracking-widest text-[#8C7B6A] uppercase block mb-1">PROPERTY TYPE</span>
                <span className="font-serif text-lg text-[#2D2A26]">{specs.type}</span>
              </div>
            </div>
            <div className="bg-white p-6 border border-[#E5E2DA]/40 hover:-translate-y-1.5 transition-all shadow-sm flex items-start gap-4">
              <div className="p-3 bg-[#FAF9F6] border border-[#E5E2DA]/50 text-[#C5A376]"><Compass className="w-5 h-5" /></div>
              <div>
                <span className="text-[9px] tracking-widest text-[#8C7B6A] uppercase block mb-1">ARCHITECTURAL STYLE</span>
                <span className="font-serif text-lg text-[#2D2A26]">{specs.style}</span>
              </div>
            </div>
            <div className="bg-white p-6 border border-[#E5E2DA]/40 hover:-translate-y-1.5 transition-all shadow-sm flex items-start gap-4">
              <div className="p-3 bg-[#FAF9F6] border border-[#E5E2DA]/50 text-[#C5A376]"><Zap className="w-5 h-5" /></div>
              <div>
                <span className="text-[9px] tracking-widest text-[#8C7B6A] uppercase block mb-1">ENERGY RATING</span>
                <span className="font-serif text-lg text-[#2D2A26]">{specs.energy}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. MAGAZINE NARRATIVE & FEATURES */}
        <div className="p-6 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16 border-b border-[#E5E2DA]/40">
          {/* Narrative Column */}
          <div className="lg:col-span-2">
            <span className="text-[#8C7B6A] font-semibold text-[9px] tracking-[0.3em] uppercase block mb-3">EDITORIAL OVERVIEW</span>
            <h3 className="font-serif text-3xl font-light text-[#1A1917] mb-8 leading-tight">Architectural Narratives & Spaces</h3>
            <div className="text-[#6B665E] font-light leading-[2.1] text-base md:text-lg max-w-3xl">
              {/* Drop Cap */}
              <span className="float-left text-6xl md:text-7xl font-serif text-[#C5A376] mr-4 mt-2 font-light leading-none">
                {firstChar}
              </span>
              <p className="mb-6">{remainingText}</p>
              {activeProperty.architect && (
                <p className="mt-8 pt-6 border-t border-[#E5E2DA]/50 text-sm font-semibold tracking-wider text-[#8C7B6A]">
                  DESIGN ARCHITECT: <span className="text-[#2D2A26] font-serif font-light text-base">{activeProperty.architect} ({activeProperty.yearBuilt})</span>
                </p>
              )}
            </div>
          </div>

          {/* Features Column */}
          <div className="bg-[#FAF9F6] border border-[#E5E2DA]/50 p-8 flex flex-col justify-between">
            <div>
              <span className="text-[#C5A376] font-semibold text-[9px] tracking-[0.3em] uppercase block mb-6">SIGNATURE AMENITIES</span>
              <div className="flex flex-col gap-5">
                {activeProperty.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-[#2D2A26] border-b border-[#E5E2DA]/35 pb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A376]/5 border border-[#C5A376]/15 flex items-center justify-center shrink-0">
                      {getFeatureIcon(feature)}
                    </div>
                    <span className="text-xs font-medium tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 text-[10px] text-[#8C7B6A] font-medium tracking-wider">
              <ShieldCheck className="w-5 h-5 text-[#C5A376]" />
              <span>CONFIDENTIAL NDA FORM AVAILABLE</span>
            </div>
          </div>
        </div>

        {/* 5. INTERACTIVE MAP PREVIEW & LANDMARKS */}
        <div className="p-6 sm:p-12 md:p-16 bg-[#F9F7F2]/45 border-b border-[#E5E2DA]/40">
          <span className="text-[#8C7B6A] font-semibold text-[9px] tracking-[0.3em] uppercase block mb-3">GEOGRAPHY & CONTEXT</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1917] mb-10">Elite Neighborhood Connections</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Visual Map Grid Frame */}
            <div className="lg:col-span-2 relative min-h-[300px] bg-[#EAE6DF] border border-[#E5E2DA] overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-75 group-hover:scale-102 transition-transform duration-[3000ms]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')" }} />
              <div className="absolute inset-0 bg-[#8C7B6A]/10 z-10" />
              {/* Glass Frame HUD overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#FAF9F6]/90 backdrop-blur-md border border-[#E5E2DA] p-5 z-20 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg text-[#1A1917] mb-1">{activeProperty.location}</h4>
                  <p className="text-[10px] text-[#8C7B6A] uppercase tracking-widest">PRIVATE ENCLAVE PROFILE</p>
                </div>
                <div className="w-10 h-10 bg-[#1A1917] text-white flex items-center justify-center rounded-full"><MapPin className="w-5 h-5" /></div>
              </div>
            </div>

            {/* Landmarks HUD */}
            <div className="bg-white border border-[#E5E2DA]/50 p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-[10px] font-semibold tracking-widest text-[#8C7B6A] uppercase mb-6">PROXIMITY METRICS</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between border-b border-[#E5E2DA]/30 pb-2">
                    <span className="text-xs text-[#6B665E]">International Airport</span>
                    <span className="text-xs text-[#2D2A26] font-medium">15 Mins</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E5E2DA]/30 pb-2">
                    <span className="text-xs text-[#6B665E]">Private Yacht Marina</span>
                    <span className="text-xs text-[#2D2A26] font-medium">8 Mins</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E5E2DA]/30 pb-2">
                    <span className="text-xs text-[#6B665E]">Championship Golf Course</span>
                    <span className="text-xs text-[#2D2A26] font-medium">5 Mins</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E5E2DA]/30 pb-2">
                    <span className="text-xs text-[#6B665E]">Michelin Dining Enclave</span>
                    <span className="text-xs text-[#2D2A26] font-medium">3 Mins</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E5E2DA]/30 pb-2">
                    <span className="text-xs text-[#6B665E]">Elite Preparatory Academy</span>
                    <span className="text-xs text-[#2D2A26] font-medium">10 Mins</span>
                  </div>
                </div>
              </div>
              <div className="text-[9px] text-[#8C7B6A] leading-relaxed mt-6 flex gap-2">
                <Info className="w-4 h-4 shrink-0 text-[#C5A376]" />
                <span>Travel times calculated via luxury private shuttle transit routes.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6. AGENT SECTION & INQUIRY FORM */}
        <div className="p-6 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-[#E5E2DA]/40 items-start">
          {/* Agent Profile Card */}
          <div className="bg-[#FAF9F6] border border-[#E5E2DA]/50 p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-stretch shadow-sm">
            <div className="w-36 h-48 bg-gray-200 shrink-0 overflow-hidden border border-[#E5E2DA]/40">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=350&q=80"
                alt="Executive Global Advisor"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
            <div className="flex flex-col justify-between text-center sm:text-left w-full">
              <div>
                <span className="text-[#C5A376] font-semibold text-[9px] tracking-[0.25em] uppercase block mb-1">Global Advisor</span>
                <h4 className="font-serif text-2xl text-[#1A1917] font-light">Charles de Bourbon</h4>
                <p className="text-[10px] text-[#8C7B6A] uppercase tracking-widest mb-3">Senior Managing Broker</p>
                <div className="text-xs text-[#6B665E] space-y-1 mb-5">
                  <p>Experience: <span className="text-[#2D2A26] font-medium">18+ Years Private Brokerage</span></p>
                  <p>Languages: <span className="text-[#2D2A26] font-medium">English, French, Spanish</span></p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <a href="mailto:concierge@estate.com" className="w-10 h-10 border border-[#E5E2DA] flex items-center justify-center hover:bg-[#1A1917] hover:text-white transition-all text-[#1A1917]" title="Email"><Mail className="w-4 h-4" /></a>
                <a href="tel:+13108924000" className="w-10 h-10 border border-[#E5E2DA] flex items-center justify-center hover:bg-[#1A1917] hover:text-white transition-all text-[#1A1917]" title="Phone"><Phone className="w-4 h-4" /></a>
                <a href="https://wa.me/13108924000" target="_blank" rel="noreferrer" className="w-10 h-10 border border-[#E5E2DA] flex items-center justify-center hover:bg-[#1A1917] hover:text-white transition-all text-[#1A1917]" title="WhatsApp"><MessageSquare className="w-4 h-4" /></a>
              </div>
            </div>
          </div>

          {/* Embedded Consultation Form */}
          <div className="bg-[#FAF9F6] border border-[#E5E2DA]/50 p-8 shadow-sm">
            <span className="text-[#8C7B6A] font-semibold text-[9px] tracking-[0.3em] uppercase block mb-2">SECURE BRIEFING</span>
            <h4 className="font-serif text-2xl font-light text-[#1A1917] mb-6">Book Confidential Viewing</h4>
            
            {formSubmitted ? (
              <div className="p-6 bg-[#C5A376]/5 border border-[#C5A376]/30 text-center">
                <Star className="w-8 h-8 text-[#C5A376] mx-auto mb-3 animate-pulse" />
                <h5 className="font-serif text-lg text-[#1A1917] mb-2 font-medium">Request Transmitted</h5>
                <p className="text-xs text-[#6B665E] leading-relaxed">
                  Your private briefing request has been securely logged. Charles de Bourbon will establish contact via secure channels within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF9F6] border-b border-[#E5E2DA] py-3 text-xs focus:outline-none focus:border-[#C5A376] text-[#2D2A26] transition-all"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF9F6] border-b border-[#E5E2DA] py-3 text-xs focus:outline-none focus:border-[#C5A376] text-[#2D2A26] transition-all"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF9F6] border-b border-[#E5E2DA] py-3 text-xs focus:outline-none focus:border-[#C5A376] text-[#2D2A26] transition-all"
                  />
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Provide details regarding your timing or portfolio parameters..."
                    rows={3}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full bg-[#FAF9F6] border-b border-[#E5E2DA] py-3 text-xs focus:outline-none focus:border-[#C5A376] text-[#2D2A26] transition-all resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#1A1917] text-white py-4 text-[10px] font-semibold tracking-[0.25em] uppercase hover:bg-[#C5A376] transition-all shadow-md mt-4 cursor-pointer"
                >
                  Send Consultation Request
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 7. SIMILAR PROPERTIES (Display 3 luxury properties) */}
        <div className="p-6 sm:p-12 md:p-16 bg-[#F9F7F2]/45">
          <div className="mb-10">
            <span className="text-[#8C7B6A] font-semibold text-[9px] tracking-[0.3em] uppercase block mb-2">CURATED SELECTION</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1917]">Similar Residences</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarProperties.map((simProp) => (
              <div
                key={simProp.id}
                onClick={() => {
                  setActiveProperty(simProp);
                  setSelectedImageIndex(0);
                  setFormSubmitted(false);
                  const innerContainer = document.querySelector('.max-h-\\[100vh\\]');
                  if (innerContainer) innerContainer.scrollTop = 0;
                }}
                className="group cursor-pointer bg-white border border-[#E5E2DA]/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(26,25,23,0.06)] transition-all duration-700 flex flex-col justify-between"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={simProp.image}
                    alt={simProp.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-[#1E1C1A]/10 group-hover:bg-[#1E1C1A]/0 transition-all duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-[9px] tracking-widest text-[#8C7B6A] uppercase block mb-1">{simProp.location}</span>
                  <h4 className="font-serif text-lg text-[#1A1917] mb-2 group-hover:text-[#C5A376] transition-colors">{simProp.title}</h4>
                  <div className="flex justify-between items-center pt-4 border-t border-[#E5E2DA]/40">
                    <span className="text-xs text-[#C5A376] font-semibold tracking-wider">{simProp.price}</span>
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#1A1917] uppercase flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODE OVERLAY */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/98 flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
          {/* Lightbox Head HUD */}
          <div className="flex justify-between items-center text-white z-20">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/70">
              {activeProperty.title} — {selectedImageIndex + 1} / {currentGallery.length}
            </span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#8C7B6A] transition-colors rounded-full"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Central Image and Arrows */}
          <div className="relative flex-1 flex items-center justify-center">
            <img
              src={currentGallery[selectedImageIndex]}
              alt={`${activeProperty.title} - Full size view`}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl transition-all duration-500"
            />

            {currentGallery.length > 1 && (
              <>
                <button
                  onClick={() => setSelectedImageIndex((prev) => (prev === 0 ? currentGallery.length - 1 : prev - 1))}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#8C7B6A] rounded-full transition-all"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setSelectedImageIndex((prev) => (prev === currentGallery.length - 1 ? 0 : prev + 1))}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#8C7B6A] rounded-full transition-all"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Lightbox Thumbnails strip */}
          {currentGallery.length > 1 && (
            <div className="flex gap-3 justify-center overflow-x-auto pb-4 max-w-4xl mx-auto z-20">
              {currentGallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 aspect-[16/10] overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImageIndex === idx ? 'border-[#C5A376] opacity-100 scale-105' : 'border-white/20 opacity-50 hover:opacity-90'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

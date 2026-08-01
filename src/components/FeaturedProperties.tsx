import React, { useState } from 'react';
import { Property } from '../types';
import { PROPERTIES } from '../data/mockData';
import { Eye, ArrowUpRight, Bed, Bath, Maximize2, Sparkles } from 'lucide-react';
import { getUnsplashSrcSet, getOptimizedUnsplashUrl } from '../utils/image';

interface FeaturedPropertiesProps {
  onSelectProperty: (property: Property) => void;
  onInquireProperty: (propertyTitle: string) => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = React.memo(({
  onSelectProperty,
  onInquireProperty,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showOnlyOffMarket, setShowOnlyOffMarket] = useState<boolean>(false);

  const categories = ['All', 'Estates', 'Penthouses', 'Coastal', 'Villas'];

  const filteredProperties = PROPERTIES.filter((prop) => {
    if (showOnlyOffMarket) {
      return prop.statusTag === 'OFF-MARKET';
    }
    if (activeCategory === 'All') return true;
    return prop.category === activeCategory;
  });

  return (
    <section id="properties" className="py-36 md:py-44 bg-[#FAF9F6] relative overflow-hidden border-b border-[#E5E2DA]/40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-8 border-b border-[#E5E2DA]/40 pb-10">
        <div>
          <span className="text-xs font-semibold tracking-[0.3em] text-[#C5A376] uppercase mb-3 block">
            Exclusive Portfolio
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#1A1917]">
            Current Masterpieces
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => {
              setShowOnlyOffMarket(false);
              setActiveCategory('All');
            }}
            className={`px-6 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase border transition-all duration-500 rounded-full backdrop-blur-md ${
              !showOnlyOffMarket && activeCategory === 'All'
                ? 'bg-[#C5A376] text-white border-[#C5A376] shadow-[0_4px_20px_rgba(197,163,118,0.25)]'
                : 'bg-[#FAF9F6]/40 text-[#6B665E] border-[#E5E2DA]/85 hover:bg-[#1A1917]/5 hover:text-[#1A1917] hover:border-[#1A1917]/30'
            }`}
          >
            All Collections
          </button>

          {categories.slice(1).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setShowOnlyOffMarket(false);
                setActiveCategory(cat);
              }}
              className={`px-6 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase border transition-all duration-500 rounded-full backdrop-blur-md ${
                !showOnlyOffMarket && activeCategory === cat
                  ? 'bg-[#C5A376] text-white border-[#C5A376] shadow-[0_4px_20px_rgba(197,163,118,0.25)]'
                  : 'bg-[#FAF9F6]/40 text-[#6B665E] border-[#E5E2DA]/85 hover:bg-[#1A1917]/5 hover:text-[#1A1917] hover:border-[#1A1917]/30'
              }`}
            >
              {cat}
            </button>
          ))}

          <button
            onClick={() => setShowOnlyOffMarket(!showOnlyOffMarket)}
            className={`px-6 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase border flex items-center gap-2 transition-all duration-500 rounded-full backdrop-blur-md ${
              showOnlyOffMarket
                ? 'bg-[#C5A376] text-white border-[#C5A376] shadow-[0_4px_20px_rgba(197,163,118,0.25)]'
                : 'bg-[#C5A376]/5 text-[#C5A376] border-[#C5A376]/50 hover:bg-[#C5A376] hover:text-white hover:border-[#C5A376] hover:shadow-[0_4px_20px_rgba(197,163,118,0.15)]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Off-Market Only</span>
          </button>
        </div>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-14">
        {filteredProperties.map((property, idx) => (
          <div
            key={property.id}
            className={`group cursor-pointer flex flex-col justify-between transition-all duration-700 ease-out border border-[#E5E2DA]/40 bg-white p-5 hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(26,25,23,0.08)] hover:border-[#C5A376]/40 rounded-[20px] shadow-sm ${
              idx % 3 === 1 ? 'lg:mt-6' : idx % 3 === 2 ? 'lg:mt-12' : ''
            }`}
            style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
          >
            {/* Image Box */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE6DF] mb-6 shadow-sm rounded-[16px]">
              <img
                src={getOptimizedUnsplashUrl(property.image, 640)}
                srcSet={getUnsplashSrcSet(property.image, [360, 480, 640, 768])}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] filter brightness-[0.93] contrast-[1.02]"
                loading="lazy"
              />
              {/* Subtle glass overlay on image */}
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none z-10" />
              
              {/* Luxury dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-4 z-20">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProperty(property);
                  }}
                  className="bg-white/95 text-[#1A1917] text-xs font-semibold tracking-[0.25em] uppercase px-6 py-4 shadow-xl border border-white/20 backdrop-blur-md hover:bg-[#C5A376] hover:text-white hover:border-[#C5A376] transition-all duration-500 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                </button>
              </div>

              {/* Status Badge */}
              {property.statusTag && (
                <div className="absolute top-5 left-5 z-20">
                  <span
                    className={`px-4 py-2 text-[9px] font-bold tracking-[0.25em] uppercase backdrop-blur-md border rounded-md shadow-md ${
                      property.statusTag === 'OFF-MARKET'
                        ? 'bg-gradient-to-r from-[#1A1917] to-[#2D2A26] text-[#C5A376] border-[#C5A376]/30'
                        : property.statusTag === 'NEW LISTING'
                        ? 'bg-[#FAF9F6]/95 text-[#4A4740] border-[#E5E2DA]'
                        : 'bg-[#C5A376]/20 text-[#C5A376] border-[#C5A376]/30'
                    }`}
                  >
                    {property.statusTag}
                  </span>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="px-1 pb-2 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3
                    onClick={() => onSelectProperty(property)}
                    className="font-serif text-xl md:text-2xl font-light tracking-wide text-[#1A1917] group-hover:text-[#C5A376] transition-colors duration-500 flex-1 leading-snug"
                  >
                    {property.title}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProperty(property);
                    }}
                    aria-label={`View details for ${property.title}`}
                    className="text-[#6B665E] group-hover:text-[#C5A376] p-1.5 transition-colors duration-500"
                  >
                    <ArrowUpRight className="w-5 h-5 transform group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                  </button>
                </div>

                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#8C867A]/70 uppercase mb-6">
                  {property.location}
                </p>
              </div>

              {/* Specs & Price */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#E5E2DA]/50 pt-5 mt-auto gap-4">
                <div className="flex flex-wrap items-center gap-2 text-[#6B665E] text-[10px] font-medium tracking-widest uppercase">
                  <span className="flex items-center gap-1 px-2.5 py-1 bg-[#FAF9F6] border border-[#E5E2DA]/40 rounded-full shadow-sm">
                    <Bed className="w-3.5 h-3.5 text-[#C5A376]/75" />
                    <span>{property.beds} BD</span>
                  </span>
                  <span className="flex items-center gap-1 px-2.5 py-1 bg-[#FAF9F6] border border-[#E5E2DA]/40 rounded-full shadow-sm">
                    <Bath className="w-3.5 h-3.5 text-[#C5A376]/75" />
                    <span>{property.baths} BA</span>
                  </span>
                  <span className="flex items-center gap-1 px-2.5 py-1 bg-[#FAF9F6] border border-[#E5E2DA]/40 rounded-full shadow-sm">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C5A376]/75" />
                    <span>{property.sqft.toLocaleString()} SQFT</span>
                  </span>
                </div>
                <span className="font-serif text-2xl sm:text-3xl font-light tracking-wider text-[#1A1917] group-hover:text-[#C5A376] transition-colors duration-500">
                  {property.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA for Off-Market - Redesigned as a Private Invitation */}
      <div className="mt-28 relative overflow-hidden bg-gradient-to-br from-[#121110] via-[#1A1917] to-[#141312] border-t-2 border-[#C5A376] border-x border-b border-white/5 p-12 md:p-20 shadow-2xl rounded-2xl text-white text-center">
        {/* Subtle Ambient Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#C5A376]/10 to-transparent rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#C5A376]/10 to-transparent rounded-full filter blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-[11px] font-semibold tracking-[0.4em] text-[#C5A376] uppercase mb-4">
            Private Registry & Off-Market Portfolio
          </span>
          <h3 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white mb-6 leading-tight max-w-2xl">
            Confidential Off-Market Transactions
          </h3>
          <p className="text-sm md:text-base text-white/70 font-light leading-relaxed mb-10 max-w-2xl">
            Over 50% of our premium acquisitions are handled strictly under non-disclosure agreements, bypassing public databases entirely. Connect with our Private Client Group to request bespoke access.
          </p>
          
          <button
            onClick={() => onInquireProperty('Private Off-Market Portfolio Request')}
            className="group relative overflow-hidden bg-gradient-to-r from-[#C5A376] via-[#D8B486] to-[#B59265] text-white hover:from-[#B59265] hover:to-[#A58255] text-xs font-semibold py-4.5 px-10 uppercase tracking-[0.25em] transition-all duration-500 hover:shadow-[0_0_30px_rgba(197,163,118,0.45)] rounded-full border border-[#C5A376]/20"
          >
            Request Access to Private Registry
          </button>
        </div>
      </div>
      </div>
    </section>
  );
});

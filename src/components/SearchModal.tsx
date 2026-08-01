import React, { useState, useEffect } from 'react';
import { Property, Article } from '../types';
import { PROPERTIES, ARTICLES } from '../data/mockData';
import { Search, X, ArrowUpRight, Bed, Bath, Maximize2 } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProperty: (property: Property) => void;
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProperty,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matchedProperties = PROPERTIES.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  const matchedArticles = ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-label="Search properties and journal"
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/85 backdrop-blur-lg pt-16 md:pt-24 px-4 sm:px-6 animate-fadeIn"
    >
      <div className="bg-[#FAF9F6] text-[#2D2A26] w-full max-w-3xl overflow-hidden border border-[#E5E2DA] shadow-2xl relative">
        {/* Search Input Bar */}
        <div className="p-6 border-b border-[#E5E2DA] flex items-center gap-4 bg-white">
          <Search className="w-6 h-6 text-[#8C7B6A]" />
          <input
            type="text"
            autoFocus
            aria-label="Search query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search properties by title, location (e.g., Beverly Hills, Saint-Tropez), category..."
            className="w-full bg-transparent border-0 text-base md:text-lg font-serif focus:outline-none placeholder-[#6B665E]/50"
          />
          <button
            onClick={onClose}
            aria-label="Close search modal"
            className="p-2 text-[#6B665E] hover:text-[#2D2A26]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-6 max-h-[65vh] overflow-y-auto custom-scrollbar space-y-8">
          {/* Quick Category Chips if query is empty */}
          {query.trim() === '' && (
            <div>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#8C7B6A] uppercase block mb-3">
                POPULAR SEARCH TERMS
              </span>
              <div className="flex flex-wrap gap-2">
                {['Beverly Hills', 'Saint-Tropez', 'Penthouses', 'London', 'Off-Market', 'Malibu Beach'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 text-xs bg-[#F2F0EB] border border-[#E5E2DA] text-[#2D2A26] hover:bg-[#8C7B6A] hover:text-white transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Property Results */}
          <div>
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#E5E2DA]">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#8C7B6A] uppercase">
                MATCHED PROPERTIES ({matchedProperties.length})
              </span>
            </div>

            {matchedProperties.length === 0 ? (
              <p className="text-xs text-[#6B665E] italic py-2">No matching properties found.</p>
            ) : (
              <div className="space-y-4">
                {matchedProperties.map((prop) => (
                  <div
                    key={prop.id}
                    onClick={() => {
                      onClose();
                      onSelectProperty(prop);
                    }}
                    className="flex gap-4 p-3 bg-white border border-[#E5E2DA] hover:border-[#8C7B6A] cursor-pointer group transition-all"
                  >
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="w-20 aspect-square object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-lg text-[#2D2A26] group-hover:text-[#8C7B6A] transition-colors truncate">
                          {prop.title}
                        </h4>
                        <span className="font-serif text-sm text-[#8C7B6A] font-medium ml-2 whitespace-nowrap">
                          {prop.price}
                        </span>
                      </div>
                      <p className="text-[10px] font-semibold tracking-widest text-[#6B665E] uppercase mb-2">
                        {prop.location} &bull; {prop.category}
                      </p>
                      <div className="flex gap-3 text-[10px] text-[#6B665E]">
                        <span>{prop.beds} BEDS</span>
                        <span>&bull;</span>
                        <span>{prop.baths} BATHS</span>
                        <span>&bull;</span>
                        <span>{prop.sqft.toLocaleString()} SQFT</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Article Results */}
          <div>
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#E5E2DA]">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#8C7B6A] uppercase">
                JOURNAL ARTICLES ({matchedArticles.length})
              </span>
            </div>

            {matchedArticles.length === 0 ? (
              <p className="text-xs text-[#6B665E] italic py-2">No matching articles found.</p>
            ) : (
              <div className="space-y-3">
                {matchedArticles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => {
                      onClose();
                      onSelectArticle(art);
                    }}
                    className="p-4 bg-white border border-[#E5E2DA] hover:border-[#8C7B6A] cursor-pointer group transition-all flex justify-between items-center"
                  >
                    <div>
                      <span className="text-[10px] font-semibold tracking-widest text-[#8C7B6A] uppercase block mb-1">
                        {art.category} &bull; {art.date}
                      </span>
                      <h4 className="font-serif text-base text-[#2D2A26] group-hover:text-[#8C7B6A] transition-colors">
                        {art.title}
                      </h4>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#6B665E] group-hover:text-[#8C7B6A] transition-colors" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

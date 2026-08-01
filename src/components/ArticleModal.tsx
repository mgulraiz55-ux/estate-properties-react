import React, { useEffect } from 'react';
import { Article } from '../types';
import { X, Calendar, Clock, Bookmark, Share2 } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    if (!article) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-10 overflow-y-auto animate-fadeIn"
    >
      <div className="bg-[#FAF9F6] text-[#2D2A26] w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar relative border border-[#E5E2DA] shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close article"
          className="absolute top-6 right-6 z-20 w-10 h-10 bg-[#2D2A26] text-white flex items-center justify-center hover:bg-[#8C7B6A] transition-colors shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header Image */}
        <div className="relative aspect-[21/9] w-full bg-black overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26] via-transparent to-black/40" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8C7B6A] bg-black/60 px-3 py-1 border border-[#8C7B6A]/40 inline-block mb-3">
              {article.category}
            </span>
            <h1 id="article-modal-title" className="font-serif text-2xl sm:text-4xl text-white font-normal leading-tight">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-8 md:p-14 max-w-3xl mx-auto">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E2DA] mb-10 text-xs font-semibold tracking-wider text-[#6B665E]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#8C7B6A]" />
                {article.date}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#8C7B6A]" />
                {article.readTime}
              </span>
            </div>
            <div className="flex gap-3">
              <button className="p-2 border border-[#E5E2DA] hover:bg-[#8C7B6A] hover:text-white transition-colors" title="Bookmark">
                <Bookmark className="w-4 h-4" />
              </button>
              <button className="p-2 border border-[#E5E2DA] hover:bg-[#8C7B6A] hover:text-white transition-colors" title="Share Article">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Excerpt Lead */}
          <p className="font-serif text-xl italic text-[#8C7B6A] leading-relaxed mb-8">
            &quot;{article.excerpt}&quot;
          </p>

          {/* Paragraph Blocks */}
          <div className="space-y-6 text-sm md:text-base text-[#2D2A26]/90 font-light leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Editorial Sign-off */}
          <div className="mt-12 pt-8 border-t border-[#E5E2DA] text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#8C7B6A] uppercase mb-1">
              ESTATE PRIVATE RESEARCH & ADVISORY GROUP
            </p>
            <p className="text-[11px] text-[#6B665E]">
              Published exclusively for private clients and subscribers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

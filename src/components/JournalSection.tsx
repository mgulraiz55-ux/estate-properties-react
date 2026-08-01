import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { ARTICLES } from '../data/mockData';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

interface JournalSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = React.memo(({ onSelectArticle }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const featuredArticle = ARTICLES[0];
  const remainingArticles = ARTICLES.slice(1);

  return (
    <section id="journal" className="py-36 md:py-44 bg-[#FAF9F6] border-t border-b border-[#E5E2DA]/40 relative overflow-hidden">
      {/* Subtle background architectural lines */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#8c7b6a_1px,transparent_1px),linear-gradient(to_bottom,#8c7b6a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-semibold tracking-[0.35em] text-[#C5A376] uppercase mb-4 block">
            JOURNAL
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#1A1917] mb-6 leading-tight">
            Perspectives on Luxury Living
          </h2>
          <p className="text-sm md:text-base text-[#6B665E] font-light leading-relaxed max-w-2xl">
            Market intelligence, architectural inspiration, investment insights, and exclusive stories from the world&apos;s most prestigious real estate destinations.
          </p>
        </div>

        {/* Featured Article - Side-by-Side Presentation */}
        {featuredArticle && (
          <article
            onClick={() => onSelectArticle(featuredArticle)}
            className={`group cursor-pointer bg-white/80 backdrop-blur-sm p-6 sm:p-10 border border-[#E5E2DA]/40 shadow-md hover:border-[#C5A376]/45 hover:shadow-[0_25px_50px_rgba(26,25,23,0.08)] hover:-translate-y-2 transition-all duration-[400ms] ease-out rounded-[20px] mb-12 transform ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Featured Image */}
              <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-[#EAE6DF] relative rounded-[16px] shadow-sm">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03] filter brightness-[0.96]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>

              {/* Featured Text content */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
                <div>
                  <div className="flex items-center gap-3.5 mb-6 text-[9px] font-semibold tracking-[0.2em] text-[#8C867A] uppercase">
                    <span className="text-[#C5A376] bg-[#C5A376]/5 border border-[#C5A376]/15 px-3 py-1.5 rounded-full uppercase">
                      {featuredArticle.category}
                    </span>
                    <span className="w-[1px] h-2.5 bg-[#E5E2DA]" />
                    <span className="text-[#6B665E] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C5A376]/70" />
                      {featuredArticle.date}
                    </span>
                    <span className="w-[1px] h-2.5 bg-[#E5E2DA]" />
                    <span className="text-[#6B665E] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C5A376]/70" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A376] uppercase mb-3 block">
                    FEATURED STORY
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-[#1A1917] mb-4 group-hover:text-[#C5A376] transition-colors duration-[400ms] leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-sm text-[#6B665E]/80 leading-relaxed font-light mb-8 max-w-xl">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <button className="flex items-center gap-2.5 text-[10px] font-semibold tracking-[0.25em] text-[#1A1917] uppercase group-hover:text-[#C5A376] transition-colors duration-[400ms] pt-5 border-t border-[#E5E2DA]/40 w-full relative">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-all duration-[400ms]" />
                </button>
              </div>
            </div>
          </article>
        )}

        {/* Remaining Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {remainingArticles.map((article, idx) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
              className={`group cursor-pointer bg-white/80 backdrop-blur-sm p-6 sm:p-8 border border-[#E5E2DA]/40 flex flex-col justify-between hover:border-[#C5A376]/45 hover:shadow-[0_25px_50px_rgba(26,25,23,0.08)] hover:-translate-y-2 transition-all duration-[400ms] ease-out rounded-[20px] shadow-sm transform ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div>
                {/* Image Frame (3:2 Aspect Ratio) */}
                <div className="aspect-[3/2] overflow-hidden bg-[#EAE6DF] mb-6 relative rounded-[16px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] filter brightness-[0.96]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>

                {/* Meta Row */}
                <div className="flex items-center gap-3.5 mb-5 text-[9px] font-semibold tracking-[0.2em] text-[#8C867A] uppercase">
                  <span className="text-[#C5A376] bg-[#C5A376]/5 border border-[#C5A376]/15 px-3 py-1.5 rounded-full uppercase">
                    {article.category}
                  </span>
                  <span className="w-[1px] h-2.5 bg-[#E5E2DA]" />
                  <span className="text-[#6B665E] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#C5A376]/70" />
                    {article.date}
                  </span>
                  <span className="w-[1px] h-2.5 bg-[#E5E2DA]" />
                  <span className="text-[#6B665E] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C5A376]/70" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-light tracking-wide text-[#1A1917] mb-3.5 group-hover:text-[#C5A376] transition-colors duration-[400ms] leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6B665E]/80 leading-relaxed font-light mb-8 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <button className="flex items-center gap-2.5 text-[10px] font-semibold tracking-[0.25em] text-[#1A1917] uppercase group-hover:text-[#C5A376] transition-colors duration-[400ms] pt-5 border-t border-[#E5E2DA]/40 w-full relative">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-all duration-[400ms]" />
              </button>
            </article>
          ))}
        </div>

        {/* Bottom CTA Discover More */}
        <div className="text-center mt-24 border-t border-[#E5E2DA]/40 pt-16">
          <div className="max-w-xl mx-auto flex flex-col items-center">
            <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-[#1A1917] mb-3">
              Discover More Insights
            </h3>
            <p className="text-xs md:text-sm text-[#6B665E]/80 font-light leading-relaxed mb-8">
              Explore our latest market reports, luxury lifestyle stories, and investment perspectives.
            </p>
            <button className="relative overflow-hidden bg-[#1A1917] text-white hover:bg-[#C5A376] text-xs font-semibold tracking-[0.25em] uppercase px-10 py-5 transition-all duration-500 shadow-md hover:shadow-[0_0_25px_rgba(197,163,118,0.3)] border border-[#1A1917] hover:border-[#C5A376] rounded-full">
              View All Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});
JournalSection.displayName = 'JournalSection';

import { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';

import { categories, customEsportsNews } from './newsData';

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

function FeaturedNews({ news, onClick }) {
  if (!news) return null;

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
      <div 
        className="group relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] bg-[#111] overflow-hidden cursor-pointer transition-colors duration-400 hover:border-[#ff4655]/30 animate-[fadeIn_0.5s_ease_both]"
        onClick={(e) => { e.preventDefault(); onClick(news); }}
      >
        <div className="relative overflow-hidden min-h-[280px] lg:min-h-[420px]">
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent from-40% lg:from-50% to-[#111] pointer-events-none" />
          
          <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ff4655] font-['Space_Grotesk',sans-serif] text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            FEATURED
          </div>
        </div>

        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="font-['Space_Grotesk',sans-serif] text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#ff4655] mb-4">
            {news.category}
          </div>
          <div className="font-['Space_Grotesk',sans-serif] text-[0.7rem] font-medium tracking-[0.15em] text-white/25 uppercase mb-6">
            {news.date}
          </div>
          <h2 className="font-['Space_Grotesk',sans-serif] text-2xl lg:text-[2rem] font-bold leading-tight tracking-tight text-white mb-4 transition-colors duration-300 group-hover:text-[#ff4655]">
            {news.title}
          </h2>
          <p className="text-[0.9rem] leading-relaxed text-white/40 mb-8">
            {news.excerpt}
          </p>
          <button className="group/btn relative inline-flex items-center gap-2.5 px-7 py-3 border border-gray-800 bg-transparent text-white font-['Space_Grotesk',sans-serif] text-[0.7rem] font-bold tracking-[0.2em] uppercase overflow-hidden transition-colors duration-300 hover:border-[#ff4655] self-start focus:outline-none">
            <div className="absolute inset-0 bg-[#ff4655] -translate-x-full transition-transform duration-400 ease-out group-hover/btn:translate-x-0 z-0" />
            <span className="relative z-10">Read More</span>
            <div className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
              <ArrowIcon />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

function NewsCard({ news, index, onClick }) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`group flex flex-col relative bg-[#111] cursor-pointer transition-all duration-500 ease-out hover:border-[#ff4655]/20 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} focus:outline-none`}
      style={{ transitionDelay: visible ? `${index * 0.08}s` : '0s' }}
      onClick={(e) => { e.preventDefault(); onClick(news); }}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(news)}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#ff4655] origin-left scale-x-0 transition-transform duration-400 ease-out group-hover:scale-x-100 z-10" />

      <div className="relative overflow-hidden aspect-[16/10] bg-[#0f1923]">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#111]/80 pointer-events-none" />
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/70 backdrop-blur-md  font-['Space_Grotesk',sans-serif] text-[0.6rem] font-bold tracking-[0.15em] uppercase text-[#ff4655]">
          {news.category}
        </div>
      </div>

      <div className="p-5 lg:p-6 flex flex-col flex-grow">
        <div className="font-['Space_Grotesk',sans-serif] text-[0.65rem] font-medium tracking-[0.15em] text-white/20 uppercase mb-3">
          {news.date}
        </div>
        <h3 className="font-['Space_Grotesk',sans-serif] text-[1.15rem] font-bold leading-snug text-white mb-3 transition-colors duration-300 group-hover:text-[#ff4655]">
          {news.title}
        </h3>
        <p className="text-[0.8rem] leading-relaxed text-white/35 mb-6 flex-grow line-clamp-3">
          {news.excerpt}
        </p>
        <div className="inline-flex items-center gap-2 font-['Space_Grotesk',sans-serif] text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/50 transition-colors duration-300 group-hover:text-[#ff4655] self-start">
          View 
          <div className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(6);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=12')
      .then(res => {
        const fetchedNews = res.data.map((post, index) => {
          const gameNews = customEsportsNews[index % customEsportsNews.length];
          const date = new Date();
          date.setDate(date.getDate() - (index * 3));
          const dateStr = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();
          
          return {
            id: post.id,
            title: gameNews.title,
            category: gameNews.category,
            date: dateStr,
            excerpt: gameNews.excerpt,
            image: gameNews.image,
            fullImage: gameNews.image,
            featured: index === 0,
            content: gameNews.content,
            tags: ["Esports", gameNews.game, gameNews.category]
          };
        });
        
        setTimeout(() => {
          setNewsData(fetchedNews);
          setLoading(false);
        }, 1500);
      })
      .catch(err => {
        console.error("Error fetching news, falling back to local news:", err);
        
        const fallbackNews = customEsportsNews.map((gameNews, index) => {
          const date = new Date();
          date.setDate(date.getDate() - (index * 3));
          const dateStr = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();
          
          return {
            id: `local-${index}`,
            title: gameNews.title,
            category: gameNews.category,
            date: dateStr,
            excerpt: gameNews.excerpt,
            image: gameNews.image,
            fullImage: gameNews.image,
            featured: index === 0,
            content: gameNews.content,
            tags: ["Esports", gameNews.game, gameNews.category]
          };
        });
        setNewsData(fallbackNews);
        setLoading(false);
      });
  }, []);

  const { featuredNews, regularNews, displayedNews, hasMore } = useMemo(() => {
    const filtered = activeCategory === "ALL" 
      ? newsData 
      : newsData.filter((n) => n.category === activeCategory);
      
    const regular = filtered.filter((n) => !n.featured);
    
    return {
      featuredNews: filtered.find((n) => n.featured) || null,
      regularNews: regular,
      displayedNews: regular.slice(0, visibleCount),
      hasMore: visibleCount < regular.length
    };
  }, [newsData, activeCategory, visibleCount]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  const handleNewsClick = (newsItem) => {
    setSelectedNews(newsItem);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        
        /* Mengubah warna outline fokus menjadi abu-abu */
        button:focus, a:focus, article:focus { 
          outline: 2px solid #444 !important; 
          outline-offset: 2px !important; 
        }
      `}</style>

      <div className="min-h-screen bg-[#0a0a0a] text-white font-['Inter',sans-serif] overflow-x-hidden selection:bg-[#ff4655] selection:text-white pb-24">
        
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-8 md:pt-12 mb-8">
          <div className="text-left"> 
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight -translate-x-1 font-sans m-0 leading-none">
              NEWS
            </h1>
            <p className="text-[#888] font-bold text-[0.8rem] tracking-[0.2em] uppercase mt-2">
              LATEST ESPORTS UPDATES
            </p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-8 flex flex-wrap items-center gap-1 md:gap-0 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`relative px-4 py-3 font-['Space_Grotesk',sans-serif] text-[0.65rem] font-semibold tracking-[0.15em] uppercase transition-colors duration-300 focus:outline-none ${activeCategory === cat ? 'text-white' : 'text-white/35 hover:text-white/70'}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
              <span className={`absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#ff4655] transition-transform duration-300 origin-center ${activeCategory === cat ? 'scale-x-100' : 'scale-x-0'}`} />
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center min-h-[50vh] gap-6">
            <div className="w-16 h-16 rounded-full border-4 border-[#ff4655]/20 border-t-[#ff4655] animate-spin" />
            <p className="text-[#888] tracking-[0.2em] text-[0.85rem] font-bold uppercase">MEMUAT DATA</p>
          </div>
        ) : (
          <>
            <FeaturedNews news={featuredNews} onClick={handleNewsClick} />

            <section className="max-w-[1400px] mx-auto px-4 md:px-8">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <span className="font-['Space_Grotesk',sans-serif] text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/30">
                  {activeCategory === "ALL" ? "All News" : activeCategory}
                </span>
                <span className="font-['Space_Grotesk',sans-serif] text-[0.7rem] font-medium tracking-[0.1em] text-white/20">
                  {regularNews.length} articles
                </span>
              </div>

              {displayedNews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedNews.map((news, index) => (
                    <NewsCard key={news.id} news={news} index={index} onClick={handleNewsClick} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24">
                  <div className="text-5xl mb-4 opacity-30">📭</div>
                  <p className="font-['Space_Grotesk',sans-serif] text-base text-white/30 tracking-[0.1em]">
                    No articles found in this category
                  </p>
                </div>
              )}

              {hasMore && (
                <div className="flex justify-center mt-16">
                  <button 
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="group relative px-12 py-4 border border-white/10 bg-transparent text-white font-['Space_Grotesk',sans-serif] text-[0.7rem] font-bold tracking-[0.2em] uppercase overflow-hidden transition-colors duration-300 hover:border-[#ff4655] focus:outline-none"
                  >
                    <div className="absolute inset-0 bg-[#ff4655] translate-y-full transition-transform duration-400 ease-out group-hover:translate-y-0 z-0" />
                    <span className="relative z-10">Load More</span>
                  </button>
                </div>
              )}
            </section>
          </>
        )}

        {selectedNews && (
          <div 
            className="fixed inset-0 bg-black/85 z-[9999] flex justify-center items-center p-4 md:p-8 backdrop-blur-sm animate-[fadeIn_0.3s_ease]"
            onClick={closeModal}
          >
            <div 
              className="relative bg-[#1a1a1a] rounded-xl w-full max-w-[800px] max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2.5 cursor-pointer z-20 flex items-center justify-center transition-colors focus:outline-none"
              >
                <X size={20} />
              </button>
              
              <div className="relative h-[250px] md:h-[350px] w-full shrink-0 bg-[#0f1923]">
                <img 
                  src={selectedNews.fullImage} 
                  alt={selectedNews.title} 
                  className="w-full h-full object-cover relative z-0" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent z-10" />
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto flex-grow relative z-20 -mt-20">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-[#ff4655] font-bold text-[0.8rem] tracking-[0.15em] uppercase font-['Space_Grotesk',sans-serif]">
                    {selectedNews.category}
                  </span>
                  <span className="text-[#888] text-[0.85rem] font-medium tracking-wide">
                    {selectedNews.date}
                  </span>
                </div>
                
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 font-['Space_Grotesk',sans-serif] leading-tight tracking-tight">
                  {selectedNews.title}
                </h2>
                
                <p className="text-[#ccc] leading-[1.8] text-[1.05rem] mb-8 whitespace-pre-line font-['Inter',sans-serif]">
                  {selectedNews.content}
                </p>
                
                <div className="flex flex-wrap gap-2.5">
                  {selectedNews.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-[#2a2a2a] text-white/80 px-4 py-1.5 rounded-md text-[0.75rem] font-semibold tracking-wide"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
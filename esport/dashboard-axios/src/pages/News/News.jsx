import { useState, useEffect, useRef } from 'react';
import './News.css';

// ============ NEWS DATA ============
const newsData = [
  {
    id: 1,
    title: "Nova Esport finish Masters Santiago in 2nd place!",
    category: "TOURNAMENT",
    date: "10 MAY 2026",
    excerpt: "Only the beginning, we'll come back stronger in Stage 1. The team showed incredible resilience throughout the lower bracket run.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200",
    featured: true,
    link: "#",
  },
  {
    id: 2,
    title: "Nova Esport Qualify for VCT Masters Santiago!",
    category: "TOURNAMENT",
    date: "05 MAY 2026",
    excerpt: "An incredible lower bracket run claims us the 3rd seed from VCT Pacific. The boys have done it!",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    featured: false,
    link: "#",
  },
  {
    id: 3,
    title: "Roster Update: New Talent Joins the Squad",
    category: "ROSTER",
    date: "28 APR 2026",
    excerpt: "Thank you to departing members, we wish you nothing but the best. Welcoming our newest additions to the roster.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
    featured: false,
    link: "#",
  },
  {
    id: 4,
    title: "Nova Esport are the Radiant International Invitational Champions!",
    category: "TOURNAMENT",
    date: "15 APR 2026",
    excerpt: "Two-time Radiant Invitational Champions! GGWP. An incredible run that showcased our team's dominance.",
    image: "https://images.unsplash.com/photo-1540039155733-d71efd54f14e?auto=format&fit=crop&q=80&w=800",
    featured: false,
    link: "#",
  },
  {
    id: 5,
    title: "Official Nova Esport 2026 Jersey Released",
    category: "ANNOUNCEMENT",
    date: "01 APR 2026",
    excerpt: "Jersey terbaru kami dengan teknologi bahan premium sudah bisa didapatkan di Store resmi Nova Esport.",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=800",
    featured: false,
    link: "#",
  },
  {
    id: 6,
    title: "New Assistant Coach Joins the Team",
    category: "ROSTER",
    date: "20 MAR 2026",
    excerpt: "Bringing fresh perspectives from different regions to help the team adapt to the evolving meta.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=800",
    featured: false,
    link: "#",
  },
  {
    id: 7,
    title: "Fan Meeting Perdana di Jakarta — Terima Kasih!",
    category: "EVENT",
    date: "10 MAR 2026",
    excerpt: "Terima kasih atas antusiasme luar biasa dari para pendukung Nova Esport di event offline perdana tahun ini.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800",
    featured: false,
    link: "#",
  },
  {
    id: 8,
    title: "Nova Esport x Pulsar Launch Collab Products!",
    category: "PARTNERS",
    date: "28 FEB 2026",
    excerpt: "Nova Esport x Pulsar collection available now. Premium gaming peripherals designed for champions.",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=800",
    featured: false,
    link: "#",
  },
  {
    id: 9,
    title: "VCT Pacific 2025 Champions — We Did It!",
    category: "TOURNAMENT",
    date: "15 FEB 2026",
    excerpt: "Nova Esport secure their 2nd VCT Pacific title and 3rd VCT Pacific Trophy. History has been made.",
    image: "https://images.unsplash.com/photo-1548686304-89d188a80029?auto=format&fit=crop&q=80&w=800",
    featured: false,
    link: "#",
  },
  {
    id: 10,
    title: "Content Creator Baru Bergabung!",
    category: "ANNOUNCEMENT",
    date: "01 FEB 2026",
    excerpt: "Welcoming our newest addition to the Nova Esport creator roster! Get ready for amazing content.",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=800",
    featured: false,
    link: "#",
  },
  {
    id: 11,
    title: "Secretlab Renew Partnership with Nova Esport!",
    category: "PARTNERS",
    date: "20 JAN 2026",
    excerpt: "They still got our backs. Renewed partnership continues to provide world-class gaming chairs for the team.",
    image: "https://images.unsplash.com/photo-1616588589676-62b3d4ff6e04?auto=format&fit=crop&q=80&w=800",
    featured: false,
    link: "#",
  },
  {
    id: 12,
    title: "Run it Back for VCT 2026!",
    category: "ROSTER",
    date: "10 JAN 2026",
    excerpt: "Our core roster will continue to compete under the Nova Esport banner in 2026. Let's make history again.",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=800",
    featured: false,
    link: "#",
  },
];

const categories = ["ALL", "TOURNAMENT", "ROSTER", "ANNOUNCEMENT", "PARTNERS", "EVENT"];

// ============ SVG ICONS ============
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// ============ FEATURED NEWS ============
function FeaturedNews({ news }) {
  if (!news) return null;

  return (
    <section className="news-featured">
      <div className="news-featured-card news-animate-in">
        <div className="news-featured-img">
          <img src={news.image} alt={news.title} />
          <div className="news-featured-badge">
            <span className="pulse-dot"></span>
            FEATURED
          </div>
        </div>
        <div className="news-featured-content">
          <div className="news-featured-cat">{news.category}</div>
          <div className="news-featured-date">{news.date}</div>
          <h2 className="news-featured-title">{news.title}</h2>
          <p className="news-featured-excerpt">{news.excerpt}</p>
          <a className="news-featured-link" href={news.link}>
            <span>Read More</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ NEWS CARD ============
function NewsCard({ news, index }) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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
      className="news-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.5s ease ${index * 0.08}s`,
      }}
    >
      <div className="news-card-img">
        <img src={news.image} alt={news.title} />
        <div className="news-card-cat">{news.category}</div>
      </div>
      <div className="news-card-body">
        <div className="news-card-date">{news.date}</div>
        <h3 className="news-card-title">{news.title}</h3>
        <p className="news-card-excerpt">{news.excerpt}</p>
        <a className="news-card-link" href={news.link}>
          View <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

// ============ MAIN NEWS PAGE ============
export default function News() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter based on category
  const filteredNews = activeCategory === "ALL"
    ? newsData
    : newsData.filter((n) => n.category === activeCategory);

  // Separate featured and regular news
  const featuredNews = filteredNews.find((n) => n.featured) || null;
  const regularNews = filteredNews.filter((n) => !n.featured);
  const displayedNews = regularNews.slice(0, visibleCount);
  const hasMore = visibleCount < regularNews.length;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="news-page">
      {/* Hero Header */}
      <section className="news-hero">
        <div className="news-hero-tag">Latest Updates</div>
        <h1 className="news-hero-title">News</h1>
        <p className="news-hero-desc">
          Keep up with the latest Nova Esport news, tournaments, roster changes, and media features.
        </p>
      </section>

      {/* Category Filter */}
      <div className="news-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`news-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured News */}
      {featuredNews && <FeaturedNews news={featuredNews} />}

      {/* News Grid */}
      <section className="news-grid-section">
        <div className="news-grid-header">
          <span className="news-grid-label">
            {activeCategory === "ALL" ? "All News" : activeCategory}
          </span>
          <span className="news-grid-count">
            {regularNews.length} articles
          </span>
        </div>

        {displayedNews.length > 0 ? (
          <div className="news-grid">
            {displayedNews.map((news, index) => (
              <NewsCard key={news.id} news={news} index={index} />
            ))}
          </div>
        ) : (
          <div className="news-empty">
            <div className="news-empty-icon">📭</div>
            <p className="news-empty-text">No articles found in this category</p>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="news-load-more">
            <button className="news-load-btn" onClick={handleLoadMore}>
              <span>Load More</span>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
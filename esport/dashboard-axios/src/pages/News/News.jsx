import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';
import './News.css';

const categories = ["ALL", "TOURNAMENT", "ROSTER", "ANNOUNCEMENT", "PARTNERS", "EVENT"];

const customEsportsNews = [
  {
    title: "ONIC Esports Raih Juara MPL ID Season 12",
    category: "TOURNAMENT",
    game: "Mobile Legends",
    excerpt: "ONIC Esports kembali mendominasi skena Mobile Legends Indonesia setelah menundukkan Geek Fam di Grand Final MPL ID...",
    content: "ONIC Esports berhasil mempertahankan gelar juara mereka di Mobile Legends Professional League (MPL) Indonesia. Di babak Grand Final yang berlangsung sengit, mereka sukses menundukkan kuda hitam dengan skor meyakinkan. Kemenangan ini mengukuhkan dominasi Indonesia di kancah Asia Tenggara dan membawa mereka melaju ke kompetisi dunia.",
    image: "https://asset.kompas.com/crops/zXGOWQef0EnpjHT0hySI2EWaqPY=/240x5:3586x2235/750x500/data/photo/2023/10/15/652bfbfebe84d.jpeg"
  },
  {
    title: "Paper Rex Amankan Tiket ke VCT Masters",
    category: "TOURNAMENT",
    game: "Valorant",
    excerpt: "Tim asal Asia Tenggara, Paper Rex, menunjukkan performa gemilang di VCT Pacific dan memastikan diri lolos ke turnamen global...",
    content: "Pertandingan dramatis terjadi di VCT Pacific League di mana Paper Rex (PRX) berhasil mengalahkan lawannya dengan strategi agresif andalan mereka. Kemenangan ini membuktikan bahwa region Pacific adalah penantang serius untuk turnamen tingkat dunia Valorant Champions Tour tahun ini.",
    image: "https://api.duniagames.co.id/api/content/upload/file/10043006541779354701.jpeg"
  },
  {
    title: "Alter Ego Ares Juara PMSL SEA 2023",
    category: "TOURNAMENT",
    game: "PUBG Mobile",
    excerpt: "Tim Indonesia Alter Ego Ares berhasil mempertahankan gelar juara di ajang PUBG Mobile Super League (PMSL) SEA...",
    content: "Sejarah tercipta! Alter Ego Ares kembali membuktikan bahwa mereka adalah raja Asia Tenggara. Dengan perolehan poin eliminasi dan placement yang konsisten di hari terakhir, mereka mengungguli tim-tim kuat dari Thailand dan Malaysia. Trofi juara kembali dibawa pulang ke Tanah Air.",
    image: "https://cdn.antaranews.com/cache/1200x800/2023/08/28/3394dc48-e9cd-42e1-a70b-81e805d5c162.jpeg"
  },
  {
    title: "Team Spirit Angkat Aegis of Champions di TI",
    category: "TOURNAMENT",
    game: "Dota 2",
    excerpt: "The International berakhir dengan kemenangan Team Spirit yang berhasil meraih gelar juara dunia kedua mereka dalam sejarah Dota 2...",
    content: "Team Spirit kembali mengukir sejarah! Mereka berhasil memenangkan turnamen terbesar Dota 2, The International (TI), mengalahkan lawan mereka dengan skor telak 3-0 di Grand Final. Permainan makro dan teamfight yang sempurna di late game menjadi kunci kemenangan mereka tahun ini.",
    image: "https://d1tgyzt3mf06m9.cloudfront.net/v3-staging/2023/10/Team-Spirit-Berhasil-Juarai-The-International-2023-Usai-Kalahkan-Gaimin-Gladiators-1-1024x583.jpg"
  },
  {
    title: "Vitality Sabet Gelar Juara Major Terakhir CS:GO",
    category: "TOURNAMENT",
    game: "CS:GO",
    excerpt: "Tim tuan rumah Vitality berhasil menjadi juara di BLAST.tv Paris Major, menutup era CS:GO dengan kemenangan manis...",
    content: "Di hadapan pendukungnya sendiri, Team Vitality tampil tanpa cela dan tidak kehilangan satu map pun sepanjang turnamen. Pemain bintang mereka mendapatkan gelar MVP berkat performa individunya yang tak tertandingi di turnamen Major CS:GO terakhir sebelum peralihan besar ke CS2.",
    image: "https://cdn.esports.id/media/article/834520251215035518.jpeg"
  },
  {
    title: "EVOS Divine Melaju ke FFWS Global",
    category: "TOURNAMENT",
    game: "Free Fire",
    excerpt: "EVOS Divine memastikan langkah mereka sebagai perwakilan Indonesia di panggung dunia Free Fire World Series (FFWS)...",
    content: "Persaingan sengit di liga domestik berakhir manis bagi EVOS Divine. Gaya bermain bertahan dan rotasi cerdas saat late game membuat mereka mengamankan poin krusial yang dibutuhkan untuk terbang ke turnamen global FFWS. Komunitas Survivor Indonesia menaruh harapan besar pada mereka.",
    image: "https://storage.googleapis.com/swafiles/images/2025/07/212200/1753110002_9cadf670a277e86070d5.jpg"
  },
  {
    title: "Kagendra Juara PBNC Indonesia",
    category: "TOURNAMENT",
    game: "Point Blank",
    excerpt: "Kagendra keluar sebagai kampiun Point Blank National Championship (PBNC) setelah pertarungan sengit di partai final...",
    content: "Kembalinya skena kompetitif Point Blank di Indonesia dimeriahkan oleh kemenangan Kagendra di PBNC. Aim yang akurat dan penguasaan bomb mission yang sempurna membuat mereka layak menjadi juara dan akan secara resmi mewakili Indonesia di ajang PBIC (Point Blank International Championship).",
    image: "https://www.sinyalmagz.com/wp-content/uploads/2025/07/kagendraTsel0725-1-scaled.jpg"
  },
  {
    title: "Talon Esports Raih Gelar Juara Honor of Kings",
    category: "TOURNAMENT",
    game: "Honor of Kings",
    excerpt: "Turnamen Honor of Kings Invitational dimenangkan oleh tim Talon Esports setelah laga dramatis lima game berturut-turut...",
    content: "Ekspansi global Honor of Kings (HoK) membawa warna baru di skena MOBA mobile. Talon Esports sukses menampilkan strategi draft hero yang brilian untuk mengunci kemenangan di turnamen internasional pertama tahun ini. Pertarungan di lane dan eksekusi teamfight mereka patut diacungi jempol.",
    image: "https://api.duniagames.co.id/optimize-image?url=https%3A%2F%2Fapi.duniagames.co.id%2Fapi%2Fcontent%2Fupload%2Ffile%2F17461692021760028820.jpeg&format=webp&width=736&signature=aeeea6e617bae3dfd2a7f4aadeceb828dd1594cac61cf525e6cd811aca6b0069"
  },
  {
    title: "LOUD Kalahkan Sentinels di VCT Americas",
    category: "EVENT",
    game: "Valorant",
    excerpt: "Rivalitas region Americas memanas setelah LOUD membungkam Sentinels dengan permainan yang luar biasa...",
    content: "Pertandingan el clasico Valorant Americas antara LOUD dan Sentinels menyita perhatian jutaan penonton dari seluruh dunia. LOUD sukses melakukan comeback dramatis di map ketiga, membuktikan bahwa mentalitas juara mereka tetap membara meski menghadapi rintangan berat.",
    image: "https://cdn.esports.id/media/article/882820240304080824.jpeg"
  },
  {
    title: "RRQ Hoshi Lakukan Perombakan Roster Besar-besaran",
    category: "ROSTER",
    game: "Mobile Legends",
    excerpt: "Tim raksasa Indonesia, RRQ Hoshi, mengumumkan perpisahan dengan beberapa pemain veterannya demi regenerasi tim...",
    content: "Jelang musim kompetisi baru, tim berjuluk Raja dari Segala Raja ini secara mengejutkan melepas beberapa pemain ikonik mereka. Langkah berani ini diambil manajemen untuk memberikan ruang bagi talenta-talenta muda dari liga akademi (MDL) untuk bersinar di panggung utama MPL Indonesia musim depan.",
    image: "https://cdn.medcom.id/dynamic/content/2026/05/18/1820517/coIaH0xLOW.jpg?w=1024"
  },
  {
    title: "FaZe Clan Juarai Intel Extreme Masters",
    category: "EVENT",
    game: "CS2",
    excerpt: "Turnamen Tier-1 pertama di era Counter-Strike 2 (CS2) berhasil dimenangkan oleh FaZe Clan di hadapan ribuan penonton...",
    content: "Transisi sistem game dari CS:GO ke CS2 tidak menghentikan dominasi raksasa Eropa, FaZe Clan. Bermain di panggung utama, mereka mempertontonkan adaptasi mekanik baru yang memukau. Kemenangan ini menjadikan mereka tim pertama yang menjuarai turnamen major di era baru Counter-Strike.",
    image: "https://static.upoint.id/images/news/1658242351faze1.jpg"
  },
  {
    title: "Bigetron RA Kembali Berjaya di Kancah Global",
    category: "TOURNAMENT",
    game: "PUBG Mobile",
    excerpt: "Tim alien merah, Bigetron Red Aliens, perlahan kembali menunjukkan taringnya di ajang PMGC dengan raihan WWCD berturut-turut...",
    content: "Meski sempat diragukan performanya di babak awal, Bigetron RA membuktikan mentalitas juara dunia mereka tak pernah pudar. Rotasi yang rapi dan setup pertahanan map yang kokoh di zona akhir membuat mereka berhasil mendulang poin placement yang sangat tinggi di babak penyisihan PMGC.",
    image: "https://cdn.esports.id/media/article/176320210924054306.jpeg"
  }
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

function FeaturedNews({ news, onClick }) {
  if (!news) return null;

  return (
    <section className="news-featured">
      <div className="news-featured-card news-animate-in">
        <div className="news-featured-img">
          <img src={news.image} alt={news.title} style={{ objectFit: 'cover' }} />
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
          <a className="news-featured-link" href="#" onClick={(e) => { e.preventDefault(); onClick(news); }}>
            <span>Read More</span>
            <ArrowIcon />
          </a>
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
      <div className="news-card-img" style={{ backgroundColor: '#0f1923' }}>
        <img src={news.image} alt={news.title} style={{ objectFit: 'cover' }} />
        <div className="news-card-cat">{news.category}</div>
      </div>
      <div className="news-card-body">
        <div className="news-card-date">{news.date}</div>
        <h3 className="news-card-title">{news.title}</h3>
        <p className="news-card-excerpt">{news.excerpt}</p>
        <a className="news-card-link" href="#" onClick={(e) => { e.preventDefault(); onClick(news); }}>
          View <ArrowIcon />
        </a>
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
            link: "#",
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
        console.error("Error fetching news:", err);
        setLoading(false);
      });
  }, []);

  const filteredNews = activeCategory === "ALL"
    ? newsData
    : newsData.filter((n) => n.category === activeCategory);

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

  const handleNewsClick = (newsItem) => {
    setSelectedNews(newsItem);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="news-page">
      <div className="w-100" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', paddingTop: '1rem' }}>
 <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-4">
    
    <div className="text-start"> 
  <h1 
    className="display-4 fw-bold text-white m-0" 
    style={{ 
      letterSpacing: '-2px', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      transform: 'translateX(-5px)'
    }}> NEWS </h1>
  <p className="text-secondary fw-bold mb-1 text-uppercase" 
    style={{ 
      fontSize: '0.8rem', letterSpacing: '0.2em'
    }}> LATEST ESPORTS UPDATES </p>
</div>

  </div>
</div>

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

      {loading ? (
        <div className="news-loading-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="news-spinner" style={{ width: '60px', height: '60px', border: '4px solid rgba(255, 70, 85, 0.2)', borderTopColor: '#ff4655', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <p style={{ color: '#888', letterSpacing: '0.2em', fontSize: '0.85rem', fontWeight: 'bold' }}>MEMUAT DATA</p>
          <style>
            {`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      ) : (
        <>
          {featuredNews && <FeaturedNews news={featuredNews} onClick={handleNewsClick} />}

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
                  <NewsCard key={news.id} news={news} index={index} onClick={handleNewsClick} />
                ))}
              </div>
            ) : (
              <div className="news-empty">
                <div className="news-empty-icon">📭</div>
                <p className="news-empty-text">No articles found in this category</p>
              </div>
            )}

            {hasMore && (
              <div className="news-load-more">
                <button className="news-load-btn" onClick={handleLoadMore}>
                  <span>Load More</span>
                </button>
              </div>
            )}
          </section>
        </>
      )}

      {selectedNews && (
        <div className="news-modal-overlay" onClick={closeModal} style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          padding: '2rem'
        }}>
          <div className="news-modal-content" onClick={(e) => e.stopPropagation()} style={{
            backgroundColor: '#1a1a1a', borderRadius: '12px', maxWidth: '800px', width: '100%',
            position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column',
            border: '1px solid #333', maxHeight: '90vh'
          }}>
            <button className="news-modal-close" onClick={closeModal} style={{
              position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.5)',
              border: 'none', color: 'white', borderRadius: '50%', padding: '8px', cursor: 'pointer', zIndex: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <X size={24} />
            </button>
            <div style={{ position: 'relative', height: '350px', overflow: 'hidden', backgroundColor: '#0f1923', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={selectedNews.fullImage} alt={selectedNews.title} style={{
                width: '100%', height: '100%', objectFit: 'cover', zIndex: 1
              }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, #1a1a1a, transparent)', zIndex: 2 }}></div>
            </div>
            <div style={{ padding: '2rem', overflowY: 'auto', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ color: '#ff4655', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '0.1em' }}>{selectedNews.category}</span>
                <span style={{ color: '#888', fontSize: '0.9rem' }}>{selectedNews.date}</span>
              </div>
              <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 'bold', fontFamily: 'system-ui, -apple-system, sans-serif' }}>{selectedNews.title}</h2>
              <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem', whiteSpace: 'pre-line' }}>
                {selectedNews.content}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {selectedNews.tags.map(tag => (
                  <span key={tag} style={{ backgroundColor: '#333', color: '#fff', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
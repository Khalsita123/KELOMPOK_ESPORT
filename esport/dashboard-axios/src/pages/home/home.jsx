import { useEffect, useRef, useState } from 'react';
import aboutImg from '../../assets/logo_esport1.png';
import sponsor1  from "../../assets/sponsor1.jpg";  
import sponsor2  from "../../assets/sponsor2.png";  
import sponsor3  from "../../assets/sponsor3.png";  
import sponsor4  from "../../assets/sponsor4.avif"; 
import sponsor5  from "../../assets/sponsor5.png";  
import sponsor6  from "../../assets/sponsor6.png";  
import sponsor7  from "../../assets/sponsor7.png";  
import sponsor8  from "../../assets/sponsor8.png";  
import sponsor9  from "../../assets/sponsor9.png";  
import sponsor10 from "../../assets/sponsor10.png"; 

// ============ HERO SECTION ============
function Hero() {
  return (
    <section className="hero-section text-white">
    </section>
  );
}

// ============ ABOUT SECTION ============
function About() {
  const [counted, setCounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState({ tahun: 0, divisi: 0, atlet: 0, prestasi: 0 });
  const sectionRef = useRef(null);
  const targets = { tahun: 4, divisi: 7, atlet: 50, prestasi: 100 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true);
          setVisible(true);
          animateCount();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [counted]);

  const animateCount = () => {
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      setCounts({
        tahun: Math.floor(targets.tahun * ease),
        divisi: Math.floor(targets.divisi * ease),
        atlet: Math.floor(targets.atlet * ease),
        prestasi: Math.floor(targets.prestasi * ease),
      });
      if (step >= steps) clearInterval(timer);
    }, 2000 / steps);
  };

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-inner">
        <span className="outline-top"></span>
        <span className="outline-right"></span>
        <span className="outline-bottom"></span>
        <span className="outline-left"></span>

        <div className="about-left">
          <img src={aboutImg} alt="Tim Esport" className="about-img" />
        </div>

        <div className={`about-right ${visible ? 'about-right--visible' : ''}`}>
          <div className="about-tag">WHO WE ARE</div>
          <h2 className="about-title">ABOUT US</h2>
          <div className="about-divider"></div>
          <p className="about-desc">
            <strong>HILING STRIKE</strong> adalah organisasi Esport profesional yang berdiri
            sejak tahun 2020. Kami memiliki visi untuk menjadi tim Esport
            terbaik di Asia dan melahirkan atlet-atlet berbakat yang mampu
            berkompetisi di level dunia.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">{counts.tahun}+</span>
              <span className="stat-label">TAHUN BERDIRI</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{counts.divisi}</span>
              <span className="stat-label">DIVISI GAME</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{counts.atlet}+</span>
              <span className="stat-label">ATLET</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{counts.prestasi}+</span>
              <span className="stat-label">PRESTASI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ DIVISION SECTION ============
const games = [
  { id: "pubg",      name: "PUBG MOBILE",      type: "mobile", accent: "#c8a000", bg: "linear-gradient(160deg, #1c2d4a, #0d1a30)", charImg: "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-16v1j.jpg" },
  { id: "freefire",  name: "FREE FIRE",         type: "mobile", accent: "#00bfff", bg: "linear-gradient(160deg, #0d2240, #050f20)", charImg: "https://asset.kompas.com/crops/-qfYPDY9h2x2QmPZjNuUu2T8qpE=/151x0:1231x720/1200x800/data/photo/2020/06/25/5ef405986c087.jpg" },
  { id: "mlbb",      name: "MOBILE LEGENDS",    type: "mobile", accent: "#d4a800", bg: "linear-gradient(160deg, #1a0a30, #0a0518)", charImg: "https://images.tokopedia.net/img/KRMmCm/2023/6/15/65e7e1d3-65f8-4f8b-b0a3-ac5c76acb2a2.jpg" },
  { id: "hok",       name: "HONOR OF KINGS",    type: "mobile", accent: "#ffd700", bg: "linear-gradient(160deg, #0d0d25, #050510)", charImg: "https://dt-webcons-web-xlrvm-prod-1394847165.cos.ap-jakarta.myqcloud.com/images/post/545aa85e-8522-400e-8195-73511129f424.jpg" },
  { id: "valorant",  name: "VALORANT",          type: "pc",     accent: "#ff4655", bg: "linear-gradient(160deg, #1a0a10, #0d0508)", charImg: "https://www.riotgames.com/darkroom/1200/1dbd7211e78ce5faa7a8af9d10afad47:2b5979e3922758399ba389561e797919/ps-f2p-val-console-launch-16x9.jpg" },
  { id: "dota2",     name: "DOTA 2",            type: "pc",     accent: "#c23c2a", bg: "linear-gradient(160deg, #0a1a10, #050d08)", charImg: "https://i.pcmag.com/imagery/reviews/00xeme7ybg1aolezzfqxhjv-4-hero-image-gallery.fit_scale.size_1050x594.v1569475078.jpg" },
  { id: "cs2",       name: "COUNTER-STRIKE 2",  type: "pc",     accent: "#e8b04a", bg: "linear-gradient(160deg, #111108, #080804)", charImg: "https://i0.wp.com/internet.medialities.org/wp-content/uploads/2024/02/7a767-csgo-operation-10-details.jpg?fit=1200%2C675&ssl=1&w=640" },
  { id: "pb",        name: "POINT BLANK",       type: "pc",     accent: "#00c853", bg: "linear-gradient(160deg, #0a1520, #050a10)", charImg: "https://hybrid.co.id/wp-content/uploads/2020/04/6aacf36edd9714e283ce5b32fd719461_point-blank-2020.jpg" },
];

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
    <rect x="5" y="2" width="14" height="20" rx="2" />
  </svg>
);

const PCIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

function Devision() {
  const handleMouseEnter = (e, game) => {
    const btn = e.currentTarget.querySelector(".dv-btn");
    const bar = e.currentTarget.querySelector(".dv-accent-bar");
    btn.style.background = game.accent;
    btn.style.color = "#000";
    btn.style.boxShadow = `0 0 18px ${game.accent}`;
    bar.style.transform = "scaleX(1)";
  };

  const handleMouseLeave = (e, game) => {
    const btn = e.currentTarget.querySelector(".dv-btn");
    const bar = e.currentTarget.querySelector(".dv-accent-bar");
    btn.style.background = "transparent";
    btn.style.color = game.accent;
    btn.style.boxShadow = "none";
    bar.style.transform = "scaleX(0)";
  };

  return (
    <section className="dv-section">
      <div className="dv-header">
        <p className="dv-header-label">DIVISION</p>
      </div>
      <div className="dv-scroll">
        {games.map((game) => (
          <div
            key={game.id}
            className="dv-card"
            style={{ background: game.bg }}
            onMouseEnter={(e) => handleMouseEnter(e, game)}
            onMouseLeave={(e) => handleMouseLeave(e, game)}
          >
            <div className="dv-accent-bar" style={{ background: game.accent, transform: "scaleX(0)" }} />
            <div className="dv-card-top">
              <div className="dv-icon-box">{game.type === "mobile" ? <MobileIcon /> : <PCIcon />}</div>
              <div className="dv-icon-box">{game.type === "mobile" ? <MobileIcon /> : <PCIcon />}</div>
            </div>
            <img className="dv-char" src={game.charImg} alt={game.name} />
            <div className="dv-bottom">
              <div className="dv-game-name" style={{ color: game.accent }}>{game.name}</div>
              <button className="dv-btn" style={{ color: game.accent, borderColor: game.accent }}>
                View Players
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============ MATCH SECTION ============
const gameLogos = {
  "PUBG MOBILE":      "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-16v1j.jpg",
  "FREE FIRE":        "https://asset.kompas.com/crops/-qfYPDY9h2x2QmPZjNuUu2T8qpE=/151x0:1231x720/1200x800/data/photo/2020/06/25/5ef405986c087.jpg",
  "MOBILE LEGENDS":   "https://images.tokopedia.net/img/KRMmCm/2023/6/15/65e7e1d3-65f8-4f8b-b0a3-ac5c76acb2a2.jpg",
  "VALORANT":         "https://www.riotgames.com/darkroom/1200/1dbd7211e78ce5faa7a8af9d10afad47:2b5979e3922758399ba389561e797919/ps-f2p-val-console-launch-16x9.jpg",
  "HONOR OF KINGS":   "data:image/jpeg;base64,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",
  "DOTA 2":           "https://i.pcmag.com/imagery/reviews/00xeme7ybg1aolezzfqxhjv-4-hero-image-gallery.fit_scale.size_1050x594.v1569475078.jpg",
  "COUNTER-STRIKE 2": "https://i0.wp.com/internet.medialities.org/wp-content/uploads/2024/02/7a767-csgo-operation-10-details.jpg?fit=1200%2C675&ssl=1&w=640",
  "POINT BLANK":      "https://hybrid.co.id/wp-content/uploads/2020/04/6aacf36edd9714e283ce5b32fd719461_point-blank-2020.jpg",
};

function Match() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const matchData = [
    { id: 1, game: "PUBG MOBILE",      stage: "Grand Finals",  result: "Rank 1",  team: "HS VS Team Alpha",   date: "10 May", time: "4:00 PM", win: true },
    { id: 2, game: "FREE FIRE",        stage: "Swiss Stage",   result: "Win 2:0", team: "HS VS Alter Ego",    date: "10 May", time: "3:45 PM", win: true },
    { id: 3, game: "MOBILE LEGENDS",   stage: "Playoff",       result: "Lose 1:2",team: "HS VS ONIC",         date: "10 May", time: "3:00 PM", win: false },
    { id: 4, game: "VALORANT",         stage: "Group Stage",   result: "Lose 0:2",team: "HS VS Team Secret",  date: "10 May", time: "2:15 PM", win: false },
    { id: 5, game: "HONOR OF KINGS",   stage: "Knockout",      result: "Win 2:1", team: "HS VS Dragon X",     date: "9 May",  time: "6:00 PM", win: true },
  ];

  const achievements = [
    { id: 1, game: "PUBG MOBILE",      desc: "National Championship", year: "2026 - HS", place: "1st Place", gold: true },
    { id: 2, game: "FREE FIRE",        desc: "World Series",          year: "2026 - HS", place: "1st Place", gold: true },
    { id: 3, game: "COUNTER-STRIKE 2", desc: "Regional Cup",          year: "2026 - HS", place: "1st Place", gold: true },
    { id: 4, game: "DOTA 2",           desc: "Southeast Asia League", year: "2026 - HS", place: "2nd Place", gold: false },
    { id: 5, game: "POINT BLANK",      desc: "Open Tournament",       year: "2026 - HS", place: "2nd Place", gold: false },
  ];

  if (loading) return <h1 className="text-center text-white">Loading...</h1>;

  return (
    <section className="match-section">
      <div className="match-container">

        {/* Kiri - Match Results */}
        <div className="match-col">
          <div className="match-col-header">Recent Matches</div>
          {matchData.map((match) => (
            <div className="match-item" key={match.id}>
              <div className="match-icon-box">
                {gameLogos[match.game]
                  ? <img src={gameLogos[match.game]} alt={match.game} style={{ width: 28, height: 28, objectFit: 'cover', borderRadius: 4 }} />
                  : <span style={{ fontSize: 18 }}>🎮</span>
                }
              </div>
              <div className="match-info">
                <div className="match-name">{match.game}</div>
                <div className="match-team">{match.team}</div>
              </div>
              <div className="match-stage">{match.stage}</div>
              <div className={`match-result ${match.win ? "match-result--win" : "match-result--lose"}`}>
                {match.result}
              </div>
              <div className="match-date">
                <span>{match.date}</span>
                <span>{match.time}</span>
              </div>
            </div>
          ))}
          <a href="/match" className="match-see-all">Lihat Semua Match →</a>
        </div>

        {/* Kanan - Achievements */}
        <div className="match-col">
          <div className="match-col-header">Achievements</div>
          {achievements.map((ach) => (
            <div className="match-item" key={ach.id}>
              <div className="match-icon-box">
                {gameLogos[ach.game]
                  ? <img src={gameLogos[ach.game]} alt={ach.game} style={{ width: 28, height: 28, objectFit: 'cover', borderRadius: 4 }} />
                  : <span style={{ fontSize: 18 }}>🏆</span>
                }
              </div>
              <div className="match-info">
                <div className="match-name">{ach.game} - {ach.desc}</div>
                <div className="match-team">{ach.year}</div>
              </div>
              <div className={`match-trophy ${ach.gold ? "match-trophy--gold" : "match-trophy--silver"}`}>
                {ach.gold ? "🥇" : "🥈"}
                <span>{ach.place}</span>
              </div>
            </div>
          ))}
      
        </div>

      </div>
    </section>
  );
}



// ============ PARTNER SECTION ============
function Partner() {
  const partners = [
    { name: "DIOR", img: sponsor1 },
    { name: "Napster", img: sponsor2 },
    { name: "Backforce", img: sponsor3 },
    { name: "Causony", img: sponsor4 },
    { name: "GGBT", img: sponsor5 },
    { name: "ROG", img: sponsor6 },
    { name: "Indihome", img: sponsor7 },
    { name: "Logitec", img: sponsor8 },
    { name: "Tomorow", img: sponsor9 },
    { name: "Tokopedia", img: sponsor10 },
  ];

  return (
    <section className="partner-section">
      <h2 className="partner-title">Partners</h2>
      <div className="partner-grid">
        {partners.map((item, index) => (
          <div className="partner-card" key={index}>
            {item.img
              ? <img src={item.img} alt={item.name} className="partner-img" />
              : <span className="partner-name">{item.name}</span>
            }
          </div>
        ))}
      </div>
    </section>
  );
}

// ============ CONTACT SECTION ============
function Contact() {
  return (
    <section className="container my-5 text-white">
      <h2>Contact Us</h2>
      <form>
        <input type="text" className="form-control mb-3" placeholder="Nama" />
        <input type="email" className="form-control mb-3" placeholder="Email" />
        <textarea className="form-control mb-3" placeholder="Pesan"></textarea>
        <button className="btn btn-purple">Kirim Pesan</button>
      </form>
    </section>
  );
}

// ============ MAIN HOME COMPONENT ============
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Devision />
      <Match />
      <Partner />
      <Contact />
    </>
  );
}
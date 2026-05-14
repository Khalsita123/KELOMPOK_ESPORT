import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import aboutImg from '../../assets/logo_esport1.png';
import pubgCharImg from '../../assets/images/pubg-char.jpg';

// ============ HERO SECTION ============
function Hero() {
  return (
    <section className="hero-section text-white">
      <div className="container text-center">
        <h1 className="display-2 fw-bold">WELCOME TO NOVA ESPORT</h1>
        <p>Become Legend In Gaming World</p>

        <button className="btn btn-purple me-3">
          Join Team
        </button>

        <button className="btn btn-outline-light">
          Watch Match
        </button>
      </div>
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

        {/* Outline bergerak mengelilingi 2 kolom */}
        <span className="outline-top"></span>
        <span className="outline-right"></span>
        <span className="outline-bottom"></span>
        <span className="outline-left"></span>

        {/* KIRI - Foto */}
        <div className="about-left">
          <img src={aboutImg} alt="Tim Esport" className="about-img" />
        </div>

        {/* KANAN - Teks */}
        <div className={`about-right ${visible ? 'about-right--visible' : ''}`}>
          <div className="about-tag">WHO WE ARE</div>
          <h2 className="about-title">ABOUT US</h2>
          <div className="about-divider"></div>
          <p className="about-desc">
            <strong>NAMA ESPORT</strong> adalah organisasi Esport profesional yang berdiri
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
  {
    id: "pubg",
    name: "PUBG MOBILE",
    type: "mobile",
    accent: "#c8a000",
    bg: "linear-gradient(160deg, #1c2d4a, #0d1a30)",
    charImg: pubgCharImg,
  },
  {
    id: "freefire",
    name: "FREE FIRE",
    type: "mobile",
    accent: "#00bfff",
    bg: "linear-gradient(160deg, #0d2240, #050f20)",
    charImg: "",
    logoImg: "",
  },
  {
    id: "mlbb",
    name: "MOBILE LEGENDS",
    type: "mobile",
    accent: "#d4a800",
    bg: "linear-gradient(160deg, #1a0a30, #0a0518)",
    charImg: "",
    logoImg: "",
  },
  {
    id: "hok",
    name: "HONOR OF KINGS",
    type: "mobile",
    accent: "#ffd700",
    bg: "linear-gradient(160deg, #0d0d25, #050510)",
    charImg: "",
    logoImg: "",
  },
  {
    id: "valorant",
    name: "VALORANT",
    type: "pc",
    accent: "#ff4655",
    bg: "linear-gradient(160deg, #1a0a10, #0d0508)",
    charImg: "",
    logoImg: "",
  },
  {
    id: "dota2",
    name: "DOTA 2",
    type: "pc",
    accent: "#c23c2a",
    bg: "linear-gradient(160deg, #0a1a10, #050d08)",
    charImg: "",
    logoImg: "",
  },
  {
    id: "cs2",
    name: "COUNTER-STRIKE 2",
    type: "pc",
    accent: "#e8b04a",
    bg: "linear-gradient(160deg, #111108, #080804)",
    charImg: "",
    logoImg: "",
  },
  {
    id: "pb",
    name: "POINT BLANK",
    type: "pc",
    accent: "#00c853",
    bg: "linear-gradient(160deg, #0a1520, #050a10)",
    charImg: "",
    logoImg: "",
  },
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
            <div
              className="dv-accent-bar"
              style={{ background: game.accent }}
            />

            <div className="dv-card-top">
              <div className="dv-icon-box">
                {game.type === "mobile" ? <MobileIcon /> : <PCIcon />}
              </div>
              <div className="dv-icon-box">
                {game.type === "mobile" ? <MobileIcon /> : <PCIcon />}
              </div>
            </div>

            {game.charImg ? (
              <img className="dv-char" src={game.charImg} alt={game.name} />
            ) : null}

            <div className="dv-bottom">
              <button
                className="dv-btn"
                style={{ color: game.accent, borderColor: game.accent }}
              >
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
function Match() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => {
        if (cancelled) return;
        setMatches(res.data);
      })
      .catch((err) => {
        console.error("Failed to load matches:", err);
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return <h1 className="text-center text-white">Loading...</h1>
  }

  return (
    <section className="container my-5 text-white">
      <h2>Upcoming Match</h2>

      <div className="row">
        {matches.map((match) => (
          <div className="col-md-4 mb-4" key={match.id}>
            <div className="card">
              <img src={match.url} className="card-img-top" />
              <div className="card-body">
                <h5>{match.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ============ NEWS SECTION ============
function News() {
  return (
    <section className="container my-5 text-white">
      <h2>Latest News</h2>
      <div className="card p-3">
        Tournament Nova Menang Regional
      </div>
    </section>
  );
}

// ============ CREATOR SECTION ============
function Creator() {
  const creators = ["Raply", "Cindy", "Aldo"];

  return (
    <section className="container my-5 text-white">
      <h2>Our Creators</h2>

      <div className="row">
        {creators.map((creator, index) => (
          <div className="col-md-4" key={index}>
            <div className="card p-3 text-center">
              {creator}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============ PARTNER SECTION ============
function Partner() {
  const partners = ["INDIHOME", "ROG", "Logitech", "Redbull"];

  return (
    <section className="container my-5 text-white">
      <h2>Our Partners</h2>

      <div className="row">
        {partners.map((item, index) => (
          <div className="col-md-3" key={index}>
            <div className="card p-4 text-center">
              {item}
            </div>
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
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Nama"
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
        />

        <textarea
          className="form-control mb-3"
          placeholder="Pesan"
        ></textarea>

        <button className="btn btn-purple">
          Kirim Pesan
        </button>
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
      <News />
      <Creator />
      <Partner />
      <Contact />
    </>
  );
}

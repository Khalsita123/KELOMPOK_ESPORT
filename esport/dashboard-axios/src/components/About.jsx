import { useEffect, useRef, useState } from 'react';
import aboutImg from '../assets/logo_esport1.png';

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

export default About;
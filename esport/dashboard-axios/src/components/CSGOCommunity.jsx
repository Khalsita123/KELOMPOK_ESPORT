import React, { useState } from 'react';
import { Trophy, Users, Swords, ChevronRight, Crosshair, Shield, Zap, Target, Eye, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const CSGOCommunity = () => {
  const [hoveredPlayer, setHoveredPlayer] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const players = [
    { id: 1, name: 'S1MPLE', role: 'AWPer', rating: '1.30', maps: '2840', kd: '1.28', hs: '42%', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600&h=800' },
    { id: 2, name: 'NIKO', role: 'Rifler', rating: '1.25', maps: '2100', kd: '1.22', hs: '55%', img: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=600&h=800' },
    { id: 3, name: 'ZYW0O', role: 'AWPer', rating: '1.28', maps: '1450', kd: '1.30', hs: '38%', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600&h=800' },
    { id: 4, name: 'D0NKCS', role: 'Entry', rating: '1.20', maps: '980', kd: '1.18', hs: '51%', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=600&h=800' },
    { id: 5, name: 'M0NESY', role: 'AWPer', rating: '1.24', maps: '850', kd: '1.19', hs: '40%', img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=600&h=800' },
  ];

  const matches = [
    { id: 1, teamA: 'OUR SQUAD', teamB: 'NAVI', score: '16 - 12', map: 'Dust II', status: 'WIN', event: 'IEM Katowice 2026' },
    { id: 2, teamA: 'OUR SQUAD', teamB: 'FAZE CLAN', score: '13 - 16', map: 'Mirage', status: 'LOSS', event: 'BLAST Premier' },
    { id: 3, teamA: 'OUR SQUAD', teamB: 'VITALITY', score: '16 - 9', map: 'Inferno', status: 'WIN', event: 'ESL Pro League S20' },
  ];

  const stats = [
    { label: 'World Ranking', value: '#3', icon: <Trophy size={28}/> },
    { label: 'Active Players', value: '85K+', icon: <Users size={28}/> },
    { label: 'Majors Won', value: '5', icon: <Award size={28}/> },
    { label: 'Maps Played', value: '3.2K', icon: <Target size={28}/> },
  ];

  const weapons = [
    { name: 'AK-47', kills: '48,230', accuracy: '24.5%' },
    { name: 'AWP', kills: '31,890', accuracy: '62.1%' },
    { name: 'M4A4', kills: '39,100', accuracy: '28.3%' },
    { name: 'Desert Eagle', kills: '12,450', accuracy: '35.8%' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const accent = '#F59E0B';
  const accentRgb = '245,158,11';

  return (
    <div style={{ background: '#060608', color: '#fff', minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif", overflowX: 'hidden' }}>

      {/* ═══ HERO ═══ */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <motion.div
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.45 }}
            transition={{ duration: 2.5 }}
            style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'saturate(0.3)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,8,0.3), rgba(6,6,8,0.7) 60%, #060608)' }} />
          <motion.div animate={{ y: [0, -15, 0], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity }} style={{ position: 'absolute', top: '20%', left: '15%', width: 400, height: 400, background: `radial-gradient(circle, rgba(${accentRgb},0.25), transparent 70%)`, borderRadius: '50%' }} />
          <motion.div animate={{ y: [0, 20, 0], opacity: [0.1, 0.25, 0.1] }} transition={{ duration: 6, repeat: Infinity, delay: 1.5 }} style={{ position: 'absolute', bottom: '15%', right: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(239,68,68,0.15), transparent 70%)', borderRadius: '50%' }} />
        </div>

        <motion.div variants={stagger} initial="hidden" animate="show" style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px', maxWidth: 900, margin: '80px auto 0' }}>
          <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 20px', borderRadius: 50, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', marginBottom: 32 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: accent, boxShadow: `0 0 12px ${accent}`, animation: 'pulse 2s infinite' }} />
            <span style={{ color: accent, fontWeight: 800, letterSpacing: 4, fontSize: 11, textTransform: 'uppercase' }}>Counter-Strike Division</span>
          </motion.div>

          <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(48px, 10vw, 120px)', fontWeight: 900, textTransform: 'uppercase', fontStyle: 'italic', letterSpacing: -3, lineHeight: 0.95, margin: '0 0 24px' }}>
            Tactical<br />
            <span style={{ background: `linear-gradient(135deg, ${accent}, #F97316, #EF4444)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Supremacy</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ color: '#9CA3AF', fontSize: 'clamp(16px, 2vw, 22px)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Where precision meets strategy. Join the elite <strong style={{ color: '#fff' }}>Counter-Strike 2</strong> squad dominating the competitive scene.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ background: accent, color: '#000', fontWeight: 900, padding: '16px 40px', border: 'none', textTransform: 'uppercase', letterSpacing: 3, fontSize: 14, cursor: 'pointer', clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)', transition: 'transform 0.3s' }} onMouseEnter={e => e.target.style.transform = 'scale(1.05)'} onMouseLeave={e => e.target.style.transform = 'scale(1)'}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Crosshair size={18} /> Join The Squad</span>
            </button>
            <button style={{ background: 'transparent', color: '#fff', fontWeight: 700, padding: '16px 40px', border: '1px solid rgba(255,255,255,0.15)', textTransform: 'uppercase', letterSpacing: 3, fontSize: 14, cursor: 'pointer', backdropFilter: 'blur(8px)', transition: 'border-color 0.3s' }} onMouseEnter={e => e.target.style.borderColor = accent} onMouseLeave={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Eye size={18} /> Watch Highlights</span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 10, opacity: 0.5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: accent, fontWeight: 800 }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: `linear-gradient(to bottom, ${accent}, transparent)` }} />
        </motion.div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{ position: 'relative', zIndex: 10, marginTop: -40, padding: '0 20px', maxWidth: 1200, margin: '-40px auto 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}
              style={{ background: 'rgba(10,10,14,0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', padding: '32px 24px', borderRadius: 16, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ color: accent, marginBottom: 16, filter: `drop-shadow(0 0 8px rgba(${accentRgb},0.4))` }}>{s.icon}</div>
              <div style={{ fontSize: 36, fontWeight: 900, letterSpacing: -1, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: '#6B7280', textTransform: 'uppercase', letterSpacing: 3, fontWeight: 700 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ ROSTER ═══ */}
      <section style={{ padding: '120px 20px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
            <div style={{ width: 48, height: 3, background: accent }} />
            <span style={{ color: accent, fontWeight: 800, letterSpacing: 4, textTransform: 'uppercase', fontSize: 13 }}>The Roster</span>
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, textTransform: 'uppercase', fontStyle: 'italic', letterSpacing: -2, margin: 0, lineHeight: 1 }}>
            Elite <span style={{ color: '#6B7280' }}>Operators</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
          {players.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredPlayer(p.id)} onMouseLeave={() => setHoveredPlayer(null)}
              style={{ position: 'relative', background: '#0A0A0E', borderRadius: 12, overflow: 'hidden', border: `1px solid ${hoveredPlayer === p.id ? `rgba(${accentRgb},0.4)` : 'rgba(255,255,255,0.06)'}`, transition: 'all 0.4s', boxShadow: hoveredPlayer === p.id ? `0 0 30px rgba(${accentRgb},0.1)` : 'none' }}>
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0A0A0E, rgba(10,10,14,0.3) 50%, transparent)', zIndex: 2 }} />
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: hoveredPlayer === p.id ? 'grayscale(0)' : 'grayscale(0.8)', transition: 'all 0.6s', transform: hoveredPlayer === p.id ? 'scale(1.08)' : 'scale(1)' }} />
                <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 3, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)', padding: '5px 12px', borderRadius: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Crosshair size={12} color={accent} />
                  <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' }}>{p.role}</span>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, zIndex: 3 }}>
                  <h3 style={{ fontSize: 32, fontWeight: 900, textTransform: 'uppercase', fontStyle: 'italic', margin: '0 0 4px', letterSpacing: -1 }}>{p.name}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 12, marginTop: 8, opacity: hoveredPlayer === p.id ? 1 : 0, transform: hoveredPlayer === p.id ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.4s' }}>
                    {[['Rating', p.rating], ['K/D', p.kd], ['HS%', p.hs]].map(([l, v]) => (
                      <div key={l} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 9, color: '#6B7280', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 2 }}>{l}</div>
                        <div style={{ fontSize: 16, fontWeight: 900, color: '#fff' }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, height: 3, background: accent, transition: 'width 0.4s', width: hoveredPlayer === p.id ? '100%' : '0%', zIndex: 10 }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ WEAPON STATS ═══ */}
      <section style={{ padding: '80px 20px', background: 'linear-gradient(to bottom, #060608, #0A0A10)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, background: `radial-gradient(circle, rgba(${accentRgb},0.05), transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <Target size={18} color={accent} />
              <span style={{ color: '#6B7280', fontWeight: 800, letterSpacing: 4, textTransform: 'uppercase', fontSize: 12 }}>Arsenal</span>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, textTransform: 'uppercase', fontStyle: 'italic', letterSpacing: -2, margin: 0 }}>
              Weapon <span style={{ color: accent }}>Stats</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gap: 12 }}>
            {weapons.map((w, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center', padding: '20px 28px', background: '#0C0C10', border: '1px solid rgba(255,255,255,0.04)', borderRadius: 12, transition: 'border-color 0.3s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `rgba(${accentRgb},0.2)`} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'}>
                <div style={{ fontWeight: 900, fontSize: 20, textTransform: 'uppercase', letterSpacing: 1 }}>{w.name}</div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: 10, color: '#6B7280', letterSpacing: 2, textTransform: 'uppercase' }}>Kills </span>
                  <span style={{ fontWeight: 800, color: accent }}>{w.kills}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: 10, color: '#6B7280', letterSpacing: 2, textTransform: 'uppercase' }}>Accuracy </span>
                  <span style={{ fontWeight: 800 }}>{w.accuracy}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MATCHES ═══ */}
      <section style={{ padding: '80px 20px', maxWidth: 1000, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <Zap size={18} color={accent} />
            <span style={{ color: '#6B7280', fontWeight: 800, letterSpacing: 4, textTransform: 'uppercase', fontSize: 12 }}>Battle Log</span>
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, textTransform: 'uppercase', fontStyle: 'italic', letterSpacing: -2, margin: 0 }}>
            Recent <span style={{ color: accent }}>Matches</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gap: 16 }}>
          {matches.map((m, i) => (
            <motion.div key={m.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: '24px 32px', background: '#0C0C10', border: '1px solid rgba(255,255,255,0.04)', borderRadius: 12, transition: 'border-color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `rgba(${accentRgb},0.25)`} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'}>
              <div style={{ minWidth: 150 }}>
                <div style={{ fontSize: 12, color: '#6B7280', fontWeight: 700, letterSpacing: 2, marginBottom: 4 }}>{m.event}</div>
                <div style={{ fontSize: 11, color: accent, fontWeight: 700, letterSpacing: 1 }}>{m.map}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
                <span style={{ fontWeight: 900, fontSize: 22, textTransform: 'uppercase', letterSpacing: -0.5 }}>{m.teamA}</span>
                <div style={{ background: 'rgba(0,0,0,0.5)', padding: '8px 20px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontWeight: 900, fontSize: 24, letterSpacing: 2 }}>{m.score}</span>
                </div>
                <span style={{ fontWeight: 900, fontSize: 22, textTransform: 'uppercase', color: '#6B7280', letterSpacing: -0.5 }}>{m.teamB}</span>
              </div>
              <div style={{ padding: '6px 18px', borderRadius: 50, border: `1px solid ${m.status === 'WIN' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}`, background: m.status === 'WIN' ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)', color: m.status === 'WIN' ? '#22C55E' : '#EF4444', fontSize: 12, fontWeight: 900, letterSpacing: 3, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6 }}>
                {m.status === 'WIN' ? <Trophy size={14} /> : <Shield size={14} />} {m.status}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ position: 'relative', padding: '120px 20px', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{ position: 'absolute', inset: 0, background: accent, mixBlendMode: 'multiply', opacity: 0.85, zIndex: 2 }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(1)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #060608, transparent)', zIndex: 3 }} />
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ position: 'relative', zIndex: 10, maxWidth: 700, margin: '0 auto' }}>
          <Crosshair size={48} style={{ margin: '0 auto 24px', opacity: 0.6 }} />
          <h2 style={{ fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 900, textTransform: 'uppercase', fontStyle: 'italic', letterSpacing: -2, margin: '0 0 16px', color: '#000' }}>
            Ready to <span style={{ color: '#fff' }}>Compete?</span>
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.7)', fontSize: 'clamp(14px, 2vw, 20px)', marginBottom: 40, lineHeight: 1.7, fontWeight: 600 }}>
            Join our Discord, participate in scrims, and prove your aim. The next Major champion could be you.
          </p>
          <button style={{ background: '#000', color: accent, fontWeight: 900, padding: '18px 48px', border: 'none', fontSize: 16, textTransform: 'uppercase', letterSpacing: 3, cursor: 'pointer', clipPath: 'polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%)', transition: 'transform 0.3s, box-shadow 0.3s' }} onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 0 40px rgba(0,0,0,0.5)'; }} onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'; }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>Join Discord <ChevronRight size={20} /></span>
          </button>
        </motion.div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}} />
    </div>
  );
};

export default CSGOCommunity;

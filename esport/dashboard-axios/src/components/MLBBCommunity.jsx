  import React from 'react';
  import { Trophy, Users, Swords, Gamepad2, ChevronRight, PlayCircle } from 'lucide-react';
  import { motion } from 'framer-motion';
  import Header from "./Header";
  import Navbar from "./Navbar";
  import Footer from "./Footer";
  import "../style.css";

  const MLBBCommunity = () => {
    const players = [
      { id: 1, name: 'LEMON', role: 'MIDLANER', winRate: '78%', favHero: 'Kagura', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 2, name: 'XINNN', role: 'GOLD LANER', winRate: '82%', favHero: 'Claude', image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 3, name: 'ALBERT', role: 'JUNGLER', winRate: '85%', favHero: 'Ling', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 4, name: 'VYN', role: 'ROAMER', winRate: '75%', favHero: 'Franco', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=400&h=400' },
    ];

    const matches = [
      { id: 1, teamA: 'RRQ HOSHI', teamB: 'ONIC ESPORTS', score: '3 - 1', status: 'VICTORY', date: 'Oct 24, 2026' },
      { id: 2, teamA: 'RRQ HOSHI', teamB: 'EVOS LEGENDS', score: '2 - 0', status: 'VICTORY', date: 'Oct 18, 2026' },
      { id: 3, teamA: 'RRQ HOSHI', teamB: 'ECHO', score: '1 - 3', status: 'DEFEAT', date: 'Oct 12, 2026' },
    ];

    return (
      <div className="mlbb-container">
        <header>
          <Header></Header>
        </header>
        <nav>
          <Navbar />
        </nav>

        {/* HERO SECTION */}
        <section className="hero-section">
          {/* Background Overlay */}
          <div className="hero-bg z-0">
            <div className="hero-overlay z-10" />
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080"
              alt="MLBB Background"
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#F3B229] font-bold tracking-widest text-sm md:text-xl mb-4 uppercase">
                Official MLBB Division
              </h2>
              <h1 className="hero-title drop-shadow-2xl text-white">
                Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3B229] to-[#ff9100]">The Land of Dawn</span>
              </h1>
              <p className="hero-sub mb-10">
                Join the most aggressive and elite Mobile Legends: Bang Bang community. We play to win, we play to dominate.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="btn-yellow flex items-center gap-2">
                  <Swords size={20} /> Join The Squad
                </button>
                <button className="btn-outline flex items-center gap-2">
                  <PlayCircle size={20} /> Watch Highlights
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS DIVIDER */}
        <div className="stats-grid">
            {[
              { label: 'Global Rank', value: '#1', icon: <Trophy className="text-[#F3B229] mx-auto mb-2" /> },
              { label: 'Active Members', value: '150K+', icon: <Users className="text-[#F3B229] mx-auto mb-2" /> },
              { label: 'Tournaments Won', value: '42', icon: <Swords className="text-[#F3B229] mx-auto mb-2" /> },
              { label: 'Total Matches', value: '1M+', icon: <Gamepad2 className="text-[#F3B229] mx-auto mb-2" /> },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-4"
              >
                {stat.icon}
                <h3 className="text-3xl font-black text-white">{stat.value}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">{stat.label}</p>
              </motion.div>
            ))}
        </div>

        {/* ROSTER SECTION */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-gray-800 pb-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight">
                Elite <span className="text-[#F3B229]">Roster</span>
              </h2>
              <p className="text-gray-400 mt-2">Meet the legends dominating the arena.</p>
            </div>
            <button className="hidden md:flex items-center gap-1 text-[#F3B229] hover:text-white transition-colors font-bold uppercase text-sm tracking-wider">
              View All Players <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {players.map((player, idx) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="player-card group relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                  <img
                    src={player.image}
                    alt={player.name}
                    className="player-img mix-blend-luminosity"
                  />

                  {/* Player Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <span className="text-[#F3B229] font-bold tracking-widest text-xs uppercase block mb-1">
                      {player.role}
                    </span>
                    <h3 className="text-3xl font-black uppercase italic mb-3">
                      {player.name}
                    </h3>

                    {/* Additional Stats revealed on hover */}
                    <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div>
                        <p className="text-gray-500 text-xs uppercase">Win Rate</p>
                        <p className="text-white font-bold">{player.winRate}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 text-xs uppercase">Main Hero</p>
                        <p className="text-white font-bold">{player.favHero}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-1 w-full bg-gray-800 group-hover:bg-[#F3B229] transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* LATEST MATCHES */}
        <section className="py-20 px-4 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight mb-12 text-center">
              Recent <span className="text-[#F3B229]">Matches</span>
            </h2>

            <div className="space-y-4 max-w-4xl mx-auto">
              {matches.map((match, idx) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="match-card flex flex-col md:flex-row items-center justify-between gap-6 group"
                >
                  <div className="text-gray-400 text-sm font-bold tracking-wider">
                    {match.date}
                  </div>

                  <div className="flex-1 flex items-center justify-center gap-4 md:gap-8 w-full">
                    <div className="text-right flex-1">
                      <h4 className="font-black text-xl md:text-2xl uppercase group-hover:text-[#F3B229] transition-colors">
                        {match.teamA}
                      </h4>
                    </div>

                    <div className="bg-[#1a1a1a] px-6 py-2 rounded border border-gray-800">
                      <span className="font-black text-2xl tracking-widest text-[#F3B229]">
                        {match.score}
                      </span>
                    </div>

                    <div className="text-left flex-1">
                      <h4 className="font-black text-xl md:text-2xl uppercase text-gray-300">
                        {match.teamB}
                      </h4>
                    </div>
                  </div>

                  <div className={`text-sm font-bold tracking-widest px-4 py-1 rounded ${match.status === 'VICTORY' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                    }`}>
                    {match.status}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="border border-[#F3B229] text-[#F3B229] hover:bg-[#F3B229] hover:text-black font-bold py-3 px-8 uppercase tracking-wider transition-all duration-300">
                View Schedule
              </button>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#F3B229]">
            <div className="absolute inset-0 bg-black/90 transform -skew-y-3 scale-110 origin-bottom-left" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6">
              Ready to <span className="text-[#F3B229]">Prove Yourself?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              The arena awaits. Join our community Discord, participate in scrims, and maybe you'll be the next legend on our roster.
            </p>
            <button className="bg-[#F3B229] hover:bg-white text-black font-black py-5 px-10 text-xl uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(243,178,41,0.3)]">
              Join Discord Now
            </button>
          </div>
        </section>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  };

  export default MLBBCommunity;

import { useState, useEffect } from 'react';
import './Valorant.css';

// ============ PLAYER DATA ============
const players = [
  {
    id: 1,
    ign: "JessieVash",
    name: "Jessie Cuyco",
    role: "PLAYER",
    age: 36,
    country: "Philippines",
    currentTeam: "VALORANT",
    twitter: "Secret_JcVash",
    bio: "JessieVash joined Team Secret in September 2021 to be a part of Team Secret's entrance into VALORANT. Previously known for being a Dota 2 & Overwatch professional, JessieVash has lots of experience under his belt which he will be using to guide the rest of the team.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&h=800&fit=crop&crop=face",
  },
  {
    id: 2,
    ign: "Jremy",
    name: "Jeremy Cabrera",
    role: "PLAYER",
    age: 21,
    country: "Philippines",
    currentTeam: "VALORANT",
    twitter: "Secret_Jremy",
    bio: "Jeremy is a force to be reckoned with on the battlefield. Known for his exceptional aim and tactical understanding of the game, he leads the team to victory with a quiet but confident presence. Off the battlefield, Jeremy is known for his fun-loving personality and his love of sleep, joking that he could \"sleep through a match and still frag out.\"",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
  },
  {
    id: 3,
    ign: "NDG",
    name: "Noel Quimbo De Guia",
    role: "PLAYER",
    age: 21,
    country: "Philippines",
    currentTeam: "VALORANT",
    twitter: "Secret_NDG",
    bio: "NDG is a talented young VALORANT player known for his aggressive playstyle and sharp mechanical skills. With a natural feel for the game, he continues to push boundaries and develop as a top-tier competitor in the Pacific region.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=face",
  },
  {
    id: 4,
    ign: "Invy",
    name: "Adrian Reyes",
    role: "PLAYER",
    age: 21,
    country: "Philippines",
    currentTeam: "VALORANT",
    twitter: "Secret_invy",
    bio: "Invy is a fun-loving and motivated VALORANT player known for his positive attitude and fierce competitiveness. He approaches each match with a desire to win and a willingness to put in the work to improve his skills and help the team succeed.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
  },
  {
    id: 5,
    ign: "2GE",
    name: "Michael James L. Goopio",
    role: "PLAYER",
    age: 24,
    country: "Philippines",
    currentTeam: "VALORANT",
    twitter: "Secret_2GE",
    bio: "2GE brings a combination of raw skill and calculated decision-making to the team. His versatility and adaptability make him a valuable asset in any composition or map. A true team player who always puts the squad first.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&crop=face",
  },
  {
    id: 6,
    ign: "Wild0reoo",
    name: "Brheyanne Christ Reyes",
    role: "PLAYER",
    age: 23,
    country: "Philippines",
    currentTeam: "VALORANT",
    twitter: "Secret_Wild0reo",
    bio: "Wild0reoo is an emerging talent in the VALORANT scene. With a fearless approach to the game and impressive game sense, he consistently delivers high-impact plays when it matters most. His clutch potential is unmatched.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop&crop=face",
  },
];

// ============ SVG ICONS ============
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-1 opacity-50">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// ============ RED CORNERS COMPONENT ============
const RedCorners = () => (
  <>
    <div className="absolute top-0 left-0 w-0 h-0 border-t-[8px] border-r-[8px] border-t-[#e31837] border-r-transparent z-10" />
    <div className="absolute top-0 right-0 w-0 h-0 border-t-[8px] border-l-[8px] border-t-[#e31837] border-l-transparent z-10" />
    <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[8px] border-r-[8px] border-b-[#e31837] border-r-transparent z-10" />
    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[8px] border-l-[8px] border-b-[#e31837] border-l-transparent z-10" />
  </>
);

// ============ PLAYER CARD ============
function PlayerCard({ player, onClick }) {
  return (
    <div 
      className="bg-[#111111] w-full max-w-sm mx-auto cursor-pointer group hover:-translate-y-1 transition-transform duration-300"
      onClick={() => onClick(player)}
    >
      <div className="relative bg-[#1c1c1c] aspect-[4/5] overflow-hidden flex items-end justify-center mb-6">
        <RedCorners />
        <img
          src={player.image}
          alt={player.ign}
          className="w-full h-[95%] object-cover object-bottom"
        />
        {/* Subtle inner shadow/gradient like the reference */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      <div className="text-center pb-8 px-4">
        <h3 className="text-white text-2xl font-bold font-bebas tracking-wide mb-1">
          '{player.ign.toUpperCase()}'
        </h3>
        <p className="text-white text-xl font-bebas tracking-wide mb-3">
          {player.name.toUpperCase()}
        </p>
        <p className="text-[#888888] text-xs font-semibold tracking-[0.2em]">
          {player.role.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

// ============ PLAYER MODAL ============
function PlayerModal({ player, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  if (!player) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

      <div
        className={`relative w-full max-w-[900px] bg-[#111111] flex flex-col md:flex-row transition-all duration-300 ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-20 text-white/70 hover:text-white transition-colors p-2"
          onClick={handleClose}
        >
          <CloseIcon />
        </button>

        {/* Modal Left - Image */}
        <div className="relative w-full md:w-[40%] bg-[#1c1c1c] aspect-[4/5] md:aspect-auto">
          <RedCorners />
          {/* Subtle IGN at top left of image */}
          <div className="absolute top-4 left-6 z-10 flex items-center gap-2">
            <div className="w-2 h-[2px] bg-[#e31837]" />
            <span className="text-white font-bebas text-sm tracking-widest">{player.ign.toUpperCase()}</span>
          </div>
          
          <img
            src={player.image}
            alt={player.ign}
            className="w-full h-[95%] object-cover object-bottom absolute bottom-0 left-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </div>

        {/* Modal Right - Details */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-white text-4xl md:text-[2.5rem] font-bold font-bebas tracking-wide mb-1">
              '{player.ign.toUpperCase()}'
            </h2>
            <h3 className="text-white text-3xl md:text-[2rem] font-bebas tracking-wide mb-4">
              {player.name.toUpperCase()}
            </h3>
            <p className="text-[#888888] text-xs font-semibold tracking-[0.2em]">
              {player.role.toUpperCase()}
            </p>
          </div>

          <p className="text-[#d1d1d1] text-sm leading-[1.8] font-inter mb-10 max-w-[95%]">
            {player.bio}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mt-auto">
            <div>
              <p className="text-[#888888] text-[10px] font-semibold tracking-[0.15em] mb-2 uppercase">Current Team</p>
              <p className="text-white text-xl font-bebas tracking-wide uppercase">{player.currentTeam}</p>
            </div>
            <div>
              <p className="text-[#888888] text-[10px] font-semibold tracking-[0.15em] mb-2 uppercase">Age</p>
              <p className="text-white text-xl font-bebas tracking-wide">{player.age ?? '—'}</p>
            </div>
            <div>
              <p className="text-[#888888] text-[10px] font-semibold tracking-[0.15em] mb-2 uppercase">Country</p>
              <p className="text-white text-xl font-bebas tracking-wide uppercase">{player.country}</p>
            </div>
            <div>
              <p className="text-[#888888] text-[10px] font-semibold tracking-[0.15em] mb-2 uppercase">Twitter</p>
              <a
                href={`https://twitter.com/${player.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#1da1f2] hover:text-[#1da1f2]/80 transition-colors"
              >
                <TwitterIcon />
                <span className="text-sm font-semibold tracking-wide ml-2 uppercase break-all">
                  {player.twitter}
                </span>
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ MAIN VALORANT PAGE ============
export default function Valorant() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] overflow-x-hidden pb-20">
      
      {/* Background graphic (optional subtle background behind the grid) */}
      <div className="absolute top-0 left-0 w-full h-[600px] opacity-[0.03] pointer-events-none overflow-hidden flex justify-center">
        <div className="font-bebas text-[30rem] leading-none text-white whitespace-nowrap mt-20">VALORANT</div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-32 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onClick={handlePlayerClick}
            />
          ))}
        </div>
      </div>

      {selectedPlayer && (
        <PlayerModal player={selectedPlayer} onClose={handleCloseModal} />
      )}
    </div>
  );
}

import { useState, useEffect } from 'react';
import backgroundBg from './background.jpg';
import valorantLogo from './logo valorant.png';
import xLogo from './X Logo.png';
import { players } from './playerData';


const RedCorners = () => (
  <>
    <div className="absolute top-0 left-0 w-0 h-0 border-t-[8px] border-r-[8px] border-t-[#e31837] border-r-transparent z-20" />
    <div className="absolute top-0 right-0 w-0 h-0 border-t-[8px] border-l-[8px] border-t-[#e31837] border-l-transparent z-20" />
    <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[8px] border-r-[8px] border-b-[#e31837] border-r-transparent z-20" />
    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[8px] border-l-[8px] border-b-[#e31837] border-l-transparent z-20" />
  </>
);

function PlayerCard({ player, onClick }) {
  return (
    <div 
      className="relative w-full max-w-[320px] mx-auto cursor-pointer group transition-all duration-500"
      onClick={() => onClick(player)}
    >
      <div 
        className="absolute inset-[-3px] bg-[#ff4655] opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
      ></div>
      
      <div 
        className="relative bg-[#0f1923] flex flex-col h-full z-10 transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:-translate-x-2"
        style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
      >
        <div className="absolute top-2 left-2 w-2 h-2 bg-[#ff4655] z-20"></div>

        <div className="relative aspect-square bg-[#1a252f] flex items-end justify-center overflow-hidden border-b-[3px] border-[#ff4655]">
          <img
            src={player.image}
            alt={player.ign}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500 relative z-10"
          />
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none z-0" 
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 12px)' }}
          ></div>
        </div>

        <div className="bg-[#ff4655] px-4 py-2 relative overflow-hidden group-hover:bg-[#ece8e1] transition-colors duration-300">
          <h3 className="text-[#0f1923] text-2xl font-bebas tracking-widest leading-none mb-1 relative z-10">
            {player.ign.toUpperCase()}
          </h3>
          <p className="text-[#0f1923]/80 text-[10px] font-bold tracking-wider uppercase leading-none mb-1 relative z-10">
            {player.name}
          </p>
          <p className="text-[#0f1923] text-[9px] font-bold tracking-[0.2em] uppercase leading-none relative z-10">
            {player.role}
          </p>
          
          <div className="absolute -bottom-3 -right-2 text-5xl font-bebas font-black text-[#0f1923] opacity-10 pointer-events-none">
            {player.ign.substring(0, 2).toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}

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
        className={`relative w-full max-w-[900px] bg-[#111111] flex flex-col md:flex-row transition-all duration-300 rounded-sm shadow-2xl ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-20 text-white hover:text-gray-300 transition-colors p-2"
          onClick={handleClose}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="relative w-full md:w-[40%] bg-[#0d0d0d] aspect-square md:aspect-[4/5] flex items-end justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
             <svg viewBox="0 0 100 100" fill="white" className="w-[80%] h-[80%]">
               <path d="M10 90 L30 10 L50 50 L70 10 L90 90 L75 90 L60 30 L50 60 L40 30 L25 90 Z" />
             </svg>
          </div>
          
          <RedCorners />
          
          <img
            src={player.image}
            alt={player.ign}
            className="relative z-10 w-full h-[95%] object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#111111] to-transparent z-10 pointer-events-none" />
        </div>

        <div className="flex-1 p-8 md:p-12 flex flex-col justify-start overflow-y-auto max-h-[85vh]">
          <div className="mb-8 mt-2">
            <h2 className="text-white text-[2rem] md:text-[2.5rem] font-bold font-bebas tracking-wider mb-1 leading-none">
              '{player.ign.toUpperCase()}'
            </h2>
            <h3 className="text-white text-[1.8rem] md:text-[2rem] font-bebas tracking-wide mb-6 leading-none">
              {player.name.toUpperCase()}
            </h3>
            <p className="text-[#888888] text-sm font-semibold tracking-[0.05em] uppercase font-sans">
              {player.role}
            </p>
          </div>

          <p className="text-white text-sm md:text-[15px] leading-[1.8] font-sans mb-12 max-w-[95%]">
            {player.bio}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mt-auto">
            <div>
              <p className="text-[#888888] text-[11px] font-semibold tracking-widest mb-1.5 uppercase">CURRENT TEAM</p>
              <p className="text-white text-[15px] font-semibold font-sans uppercase">{player.currentTeam}</p>
            </div>
            <div>
              <p className="text-[#888888] text-[11px] font-semibold tracking-widest mb-1.5 uppercase">AGE</p>
              <p className="text-white text-[15px] font-semibold font-sans">{player.age ?? '—'}</p>
            </div>
            <div>
              <p className="text-[#888888] text-[11px] font-semibold tracking-widest mb-1.5 uppercase">COUNTRY</p>
              <p className="text-white text-[15px] font-semibold font-sans uppercase">{player.country}</p>
            </div>
            <div>
              <p className="text-[#888888] text-[11px] font-semibold tracking-widest mb-1.5 uppercase">TWITTER</p>
              <a
                href={`https://twitter.com/${player.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#1da1f2] hover:text-[#1da1f2]/80 transition-colors text-[15px] font-semibold font-sans uppercase whitespace-nowrap"
              >
                <img 
                  src={xLogo} 
                  alt="X" 
                  className="inline-block w-[14px] h-[14px] object-contain mr-1.5 -mt-0.5" 
                  style={{ filter: 'brightness(0) saturate(100%) invert(56%) sepia(51%) saturate(3015%) hue-rotate(182deg) brightness(101%) contrast(97%)' }}
                />
                {player.twitter}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Valorant() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] overflow-x-hidden pb-20 relative">
      
      <div className="absolute top-0 left-0 w-full h-[80vh] md:h-[800px] pointer-events-none">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-top bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundBg})`,
            filter: 'grayscale(100%)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      <div className="w-full flex justify-center pt-28 pb-24 relative z-10">
        <img 
          src={valorantLogo} 
          alt="Valorant" 
          className="h-28 md:h-40 object-contain drop-shadow-2xl" 
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
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
      <style>{`
        .font-bebas {
          font-family: 'Bebas Neue', sans-serif;
        }

        .font-rajdhani {
          font-family: 'Rajdhani', sans-serif;
        }

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #111;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
}

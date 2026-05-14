import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/pubg.css";
import banner from "../../assets/pubgbanner.png";

// --- 1. DATA DUMMY PEMAIN ---
const rosterData = [
  {
    id: 1,
    ign: "'Spectre'",
    role: "IGL",
    realName: "Ahmad Fauzi",
    age: 22,
    birthPlace: "Jakarta",
    nationality: "Indonesia",
    ig: "hs_spectre",
    photo: "https://via.placeholder.com/250x300/1f2937/f97316?text=Foto+Spectre",
    weapon: {
      name: "M416",
      attachments: ["Compensator AR", "Half Grip", "Extended QD Mag", "Tactical Stock", "Red Dot Sight"],
      proTip: "Tahan recoil pakai kombinasi half grip dan compensator, trust the spray!"
    }
  },
  {
    id: 2,
    ign: "'Axe'",
    role: "RUSHER",
    realName: "Budi Santoso",
    age: 20,
    birthPlace: "Batam",
    nationality: "Indonesia",
    ig: "hs_axe",
    photo: "https://via.placeholder.com/250x300/1f2937/f97316?text=Foto+Axe",
    weapon: {
      name: "UMP45",
      attachments: ["Suppressor SMG", "Laser Sight", "Extended QD Mag", "Red Dot Sight"],
      proTip: "Laser sight wajib buat close combat, aim auto nempel ke musuh."
    }
  },
  {
    id: 3,
    ign: "'Kira'",
    role: "SUPPORT",
    realName: "Nadia Putri",
    age: 21,
    birthPlace: "Bandung",
    nationality: "Indonesia",
    ig: "hs_kira",
    photo: "https://via.placeholder.com/250x300/1f2937/f97316?text=Foto+Kira",
    weapon: {
      name: "Mini14",
      attachments: ["Compensator Sniper", "Extended QD Mag", "8x Scope"],
      proTip: "Spam tapping dari jauh buat cover rusher yang lagi open fire."
    }
  },
  {
    id: 4,
    ign: "'Echo'",
    role: "SNIPER",
    realName: "Reza Pratama",
    age: 23,
    birthPlace: "Surabaya",
    nationality: "Indonesia",
    ig: "hs_echo",
    photo: "https://via.placeholder.com/250x300/1f2937/f97316?text=Foto+Echo",
    weapon: {
      name: "Kar98k",
      attachments: ["Suppressor Sniper", "Bullet Loops", "8x Scope"],
      proTip: "Satu peluru, satu nyawa. Selalu incar kepala saat musuh sedang diam looting."
    }
  }
];

export default function Pubg() {
  const [activePlayer, setActivePlayer] = useState(null);

  const togglePlayer = (id) => {
    setActivePlayer(activePlayer === id ? null : id);
  };

  return (
    <main className="page-enter min-h-screen bg-black text-white relative">
      
      {/* --- HERO SECTION / BANNER BACKGROUND --- */}
      {/* Menggunakan absolute & z-0 agar teks dan konten bisa berada di atasnya */}
      <section className="absolute top-0 left-0 w-full h-[620px] md:h-[780px] overflow-hidden z-0">
        <img
          src={banner}
          alt="PUBG Banner"
          // opacity-30 membuat gambar meredup/gelap
          className="absolute inset-0 w-full h-full object-cover object-top opacity-30"
          aria-hidden="true"
        />
        {/* Gradasi dari transparan di atas, perlahan ke hitam pekat di bagian bawah agar menyatu dengan konten */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
      </section>

      {/* --- KONTEN UTAMA --- */}
      {/* relative & z-10 memastikan konten ini berada di atas banner background */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        
        {/* Header Teks */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black italic tracking-widest text-orange-500 uppercase drop-shadow-lg">
            Hiling Strike
          </h1>
          <h2 className="text-xl md:text-3xl font-bold tracking-widest text-white mt-2 uppercase border-b-2 border-orange-500 inline-block pb-2">
            PUBG Division
          </h2>
          <p className="text-gray-400 mt-6 text-sm md:text-base max-w-2xl mx-auto">
            Kenali roster andalan kami. Klik kartu pemain untuk melihat informasi detail, 
            rekomendasi senjata, dan loadout mematikan mereka di medan pertempuran.
          </p>
        </div>

        {/* Kontainer Daftar Pemain */}
        <div className="max-w-4xl mx-auto space-y-6">
          {rosterData.map((player) => (
            <div 
              key={player.id} 
              className="group flex flex-col w-full shadow-2xl shadow-black"
            >
              {/* BAGIAN ATAS (KARTU UTAMA) */}
              <button
                onClick={() => togglePlayer(player.id)}
                className={`relative flex flex-col sm:flex-row w-full text-left transition-all duration-300 overflow-hidden
                  ${activePlayer === player.id 
                    ? 'border-2 border-orange-500 bg-orange-500/10' 
                    : 'border border-gray-800 bg-gray-900/80 backdrop-blur-sm hover:border-orange-500/50'
                  }
                `}
              >
                {/* Blok Foto Pemain */}
                <div className="w-full sm:w-64 bg-gray-950 flex justify-center items-end relative overflow-hidden border-b-4 sm:border-b-0 sm:border-r-4 border-orange-500">
                  <img 
                    src={player.photo} 
                    alt={player.ign} 
                    className="w-full h-48 sm:h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-gray-900"></div>
                </div>

                {/* Blok Informasi Pemain */}
                <div className="flex-1 p-6 relative z-10 flex flex-col justify-center">
                  <h3 className="text-4xl md:text-5xl font-black italic text-white drop-shadow-lg">
                    {player.ign}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 mb-4">
                    <span className="bg-orange-500 text-black px-2 py-0.5 text-xs font-bold uppercase tracking-wider rounded-sm">
                      {player.role}
                    </span>
                    <span className="text-gray-300 font-medium text-lg border-l-2 border-gray-600 pl-2">
                      {player.realName}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400">
                    <p>Age <span className="font-bold text-white">{player.age}</span></p>
                    <p className="hidden sm:block">|</p>
                    <p>Birth Place <span className="font-bold text-white">{player.birthPlace}</span></p>
                    <p className="hidden sm:block">|</p>
                    <p>Nationality <span className="font-bold text-white">{player.nationality}</span></p>
                  </div>
                </div>

                {/* Ikon panah (Indikator Expand) */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 hidden md:block">
                  <svg 
                    className={`w-8 h-8 transition-transform duration-300 ${activePlayer === player.id ? 'rotate-180 text-orange-500' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* BAGIAN BAWAH (DETAIL SENJATA) */}
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden bg-gray-900/90 backdrop-blur-md border-x border-b border-gray-800
                  ${activePlayer === player.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-8 border-t border-orange-500/20">
                  
                  {/* Visual Nama Senjata */}
                  <div className="w-full md:w-1/3 flex flex-col items-center justify-center bg-black/60 rounded-lg p-6 border border-gray-800">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Favorite Weapon</p>
                    <h4 className="text-5xl font-black italic text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">
                      {player.weapon.name}
                    </h4>
                  </div>

                  {/* Attachments & Pro Tip */}
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-gray-400 text-sm font-semibold mb-3 uppercase">Loadout Recommendation</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {player.weapon.attachments.map((item, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1.5 bg-gray-950 text-orange-100 text-xs font-bold rounded-sm border border-gray-700 shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    
                    <div className="relative p-4 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-md">
                      <p className="text-sm md:text-base text-gray-300 italic pr-8">
                        "{player.weapon.proTip}"
                      </p>
                      <p className="text-xs text-orange-400 font-bold mt-2 uppercase tracking-wide">— {player.ign}'s Tip</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
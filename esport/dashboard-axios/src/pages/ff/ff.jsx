import { Link } from "react-router-dom";
import { divisions } from "../../data/divisions";

export default function Ff() {
  const division = divisions.freefire;
  const accentColor = division.accent;

  return (
    <section className="min-h-screen bg-black text-white">
      {/* Hero Section dengan Back Button */}
      <div className="relative" style={{ background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${division.banner})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}>
        <div className="absolute top-6 left-6">
          <Link to="/" className="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded transition text-sm font-bold">
            ← Kembali ke Home
          </Link>
        </div>
        <div className="flex items-center justify-center h-full pt-20 pb-20 text-center">
          <div>
            <p className="text-gray-400 mb-2 text-sm font-bold">FREE FIRE</p>
            <h1 className="text-7xl font-bold mb-4" style={{ color: accentColor, textTransform: 'uppercase', letterSpacing: '3px' }}>
              FREE FIRE DIVISION
            </h1>
            <p className="text-xl text-gray-300">{division.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Coach Section */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-center mb-16 uppercase" style={{ color: accentColor, letterSpacing: '2px' }}>
            COACH
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {division.coaches.map((coach) => (
              <div key={coach.name} className="p-8 rounded-lg border-2" style={{ borderColor: accentColor, backgroundColor: '#1a0a0a' }}>
                <div className="flex gap-6">
                  <div className="w-24 h-24 rounded-full border-2 flex-shrink-0 overflow-hidden" style={{ borderColor: accentColor }}>
                    <img src={coach.image} alt={coach.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: accentColor }}>{coach.name}</h3>
                    <p style={{ color: accentColor }} className="font-bold text-sm mb-2">{coach.position}</p>
                    <p className="text-gray-400 text-sm">Pengalaman: {coach.experience}</p>
                    <p className="text-gray-400 text-sm">Spesialis: {coach.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-center mb-16 uppercase" style={{ color: accentColor, letterSpacing: '2px' }}>
            TEAM - {division.teams[0].name.toUpperCase()}
          </h2>
          <div className="p-8 rounded-lg border-2 max-w-3xl mx-auto" style={{ borderColor: accentColor, backgroundColor: '#1a0a0a' }}>
            <div className="flex justify-center mb-6">
              <span className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-3xl">#1</span>
            </div>
            <h3 className="text-3xl font-bold text-center mb-3" style={{ color: accentColor }}>
              {division.teams[0].name}
            </h3>
            <p className="text-center text-gray-400 mb-8">Tim juara nasional dengan performa impresif</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded border text-center" style={{ borderColor: accentColor }}>
                <p className="text-gray-400 text-xs">Didirikan</p>
                <p className="text-2xl font-bold" style={{ color: accentColor }}>{division.teams[0].founded}</p>
              </div>
              <div className="p-4 rounded border text-center" style={{ borderColor: accentColor }}>
                <p className="text-gray-400 text-xs">Menang</p>
                <p className="text-2xl font-bold" style={{ color: accentColor }}>{division.teams[0].wins}</p>
              </div>
              <div className="p-4 rounded border text-center" style={{ borderColor: accentColor }}>
                <p className="text-gray-400 text-xs">Kalah</p>
                <p className="text-2xl font-bold" style={{ color: accentColor }}>{division.teams[0].losses}</p>
              </div>
              <div className="p-4 rounded border text-center" style={{ borderColor: accentColor }}>
                <p className="text-gray-400 text-xs">Win Rate</p>
                <p className="text-2xl font-bold" style={{ color: accentColor }}>{division.teams[0].winRate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Roaster Main Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 uppercase" style={{ color: accentColor, letterSpacing: '2px' }}>
            Roaster
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {division.roasterMain.map((player) => (
              <div key={player.name} className="p-6 rounded-lg border-2 text-center" style={{ borderColor: accentColor, backgroundColor: '#1a0a0a' }}>
                <img src={player.image} alt={player.name} className="w-full aspect-square bg-gray-600 rounded-lg mb-3 object-cover" />
                <h4 className="font-bold mb-1" style={{ color: accentColor }}>{player.name}</h4>
                <p style={{ color: accentColor }} className="font-bold text-sm mb-2">{player.role}</p>
                <p className="text-xs text-gray-400 mb-1">Kills: {player.kills}</p>
                <p className="text-xs" style={{ color: accentColor }}>Rating: {player.rating}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Roaster Sub Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 uppercase" style={{ color: accentColor, letterSpacing: '2px' }}>
            Sub
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {division.roasterSub.map((player) => (
              <div key={player.name} className="p-6 rounded-lg border-2 text-center" style={{ borderColor: accentColor, backgroundColor: '#1a0a0a' }}>
                <img src={player.image} alt={player.name} className="w-full aspect-square bg-gray-600 rounded-lg mb-3 object-cover" />
                <h4 className="font-bold mb-1" style={{ color: accentColor }}>{player.name}</h4>
                <p style={{ color: accentColor }} className="font-bold text-sm">{player.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 uppercase" style={{ color: accentColor, letterSpacing: '2px' }}>
            JADWAL PERTANDINGAN
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {division.teams[0].stats.map((match, idx) => (
              <div key={idx} className="p-6 rounded-lg border-l-4" style={{ borderLeftColor: accentColor, backgroundColor: '#1a0a0a' }}>
                <p style={{ color: accentColor }} className="font-bold mb-3 text-sm">{match.date}</p>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="p-3 rounded border text-sm font-bold" style={{ borderColor: accentColor }}>
                    {match.team1}
                  </div>
                  <span className="text-gray-500 font-bold">VS</span>
                  <div className="p-3 rounded border text-sm font-bold" style={{ borderColor: accentColor }}>
                    {match.team2}
                  </div>
                </div>
                <div className="text-xs text-gray-400 mb-1">{match.time}</div>
                <p style={{ color: accentColor }} className="font-bold text-xs">{match.tournament}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rankings Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 uppercase" style={{ color: accentColor, letterSpacing: '2px' }}>
            PAPAN PERINGKAT
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ backgroundColor: '#1a0a0a' }}>
                  <th className="p-3 text-left border-2" style={{ borderColor: accentColor, color: accentColor }}>#</th>
                  <th className="p-3 text-left border-2" style={{ borderColor: accentColor, color: accentColor }}>TIM</th>
                  <th className="p-3 text-left border-2" style={{ borderColor: accentColor, color: accentColor }}>POIN</th>
                  <th className="p-3 text-left border-2" style={{ borderColor: accentColor, color: accentColor }}>MENANG</th>
                  <th className="p-3 text-left border-2" style={{ borderColor: accentColor, color: accentColor }}>KALAH</th>
                </tr>
              </thead>
              <tbody>
                {division.rankings.map((row, idx) => (
                  <tr key={idx} style={{ backgroundColor: idx === 0 ? '#2a0a0a' : '#0a0a0a' }}>
                    <td className="p-3 border-2" style={{ borderColor: accentColor, color: accentColor, fontWeight: 'bold' }}>{row.rank}</td>
                    <td className="p-3 border-2" style={{ borderColor: accentColor }}>{row.team}</td>
                    <td className="p-3 border-2" style={{ borderColor: accentColor, color: accentColor }}>{row.points}</td>
                    <td className="p-3 border-2" style={{ borderColor: accentColor }}>{row.wins}</td>
                    <td className="p-3 border-2" style={{ borderColor: accentColor }}>{row.losses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        .container {
          max-width: 1200px;
        }
      `}</style>
    </section>
  );
}
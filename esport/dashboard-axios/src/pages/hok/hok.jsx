import { Link } from "react-router-dom";
import { divisions } from "../../data/divisions";

export default function Hok() {
  const division = divisions.hok;
  const accentColor = division.accent;

  return (
    <section className="min-h-screen bg-[#020716] text-white">
      <header className="relative overflow-hidden px-6 py-16 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,0,0.16),_transparent_30%)]" />
        <div className="absolute inset-y-0 right-0 w-full max-w-2xl bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_35%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#ffd70055] bg-[#ffffff11] px-4 py-2 text-sm uppercase tracking-[0.2em] text-[#ffd700]">
              HONOR OF KINGS
            </div>
            <div>
              <h1 className="text-5xl font-black uppercase leading-tight tracking-[0.22em]" style={{ color: accentColor }}>
                NOVA ESPORT <br /> HOK DIVISION
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#d1d5db]">
                {division.description}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {division.stats.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-[#ffffff19] bg-[#08101f] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#9ca3af]">{item.label}</p>
                  <p className="mt-4 text-3xl font-bold" style={{ color: accentColor }}>{item.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full border border-[#ffd70066] bg-[#ffd70014] px-6 py-3 text-sm font-semibold text-[#ffd700] transition hover:bg-[#ffd70022]"
              >
                ← Kembali ke Home
              </Link>
              <a
                href="#formation"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Lihat Formasi
              </a>
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-[#ffd70022] bg-[#09121f] shadow-[0_40px_120px_rgba(0,0,0,0.3)] overflow-hidden">
            <div
              className="min-h-[420px] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(2,7,22,0.12), rgba(2,7,22,0.96)), url(${division.banner})`,
              }}
            />
            <div className="p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#9ca3af]">Champion Lineup</p>
              <h2 className="mt-4 text-3xl font-bold" style={{ color: accentColor }}>
                {division.teams[0].name}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#cbd5e1]">
                Tim HOK kami yang menguasai lane dan objektif dengan playstyle agresif dan terkoordinasi.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 pb-20">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            <section className="rounded-[2rem] border border-[#ffffff14] bg-[#08101b] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <h2 className="text-4xl font-bold mb-8 uppercase" style={{ color: accentColor }}>
                Pelatih & Filosofi
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {division.coaches.map((coach) => (
                  <div key={coach.name} className="rounded-3xl border border-[#ffffff1a] bg-[#0f1726] p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-20 w-20 overflow-hidden rounded-3xl border border-[#ffd70033]">
                        <img src={coach.image} alt={coach.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold" style={{ color: accentColor }}>{coach.name}</p>
                        <p className="text-sm text-[#9ca3af]">{coach.position}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-[#cbd5e1]">{coach.specialty}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#9ca3af]">{coach.experience}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="formation" className="rounded-[2rem] border border-[#ffffff14] bg-[#08101b] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <h2 className="text-4xl font-bold mb-8 uppercase" style={{ color: accentColor }}>
                Formasi Pemain
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {division.roasterMain.map((player) => (
                  <div key={player.name} className="rounded-3xl border border-[#ffffff1a] bg-[#0f1726] overflow-hidden">
                    <div className="relative">
                      <img src={player.image} alt={player.name} className="h-52 w-full object-cover" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020716]/95 to-transparent p-4">
                        <p className="text-lg font-semibold" style={{ color: accentColor }}>{player.name}</p>
                        <p className="text-sm text-[#d1d5db]">{player.role}</p>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 p-6">
                      <div className="rounded-2xl bg-[#111827] p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#9ca3af]">Kills</p>
                        <p className="mt-2 text-xl font-bold" style={{ color: accentColor }}>{player.kills}</p>
                      </div>
                      <div className="rounded-2xl bg-[#111827] p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#9ca3af]">Rating</p>
                        <p className="mt-2 text-xl font-bold" style={{ color: accentColor }}>{player.rating}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#ffffff14] bg-[#08101b] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <h2 className="text-4xl font-bold mb-8 uppercase" style={{ color: accentColor }}>
                Strategi Utama
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#ffd70033] bg-[#0f1726] p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9ca3af]">Kontrol Objektif</p>
                  <p className="mt-4 text-lg text-[#e5e7eb]">
                    Fokus pada turtle dan lord untuk mendapatkan keunggulan inti di fase tengah dan akhir.
                  </p>
                </div>
                <div className="rounded-3xl border border-[#ffd70033] bg-[#0f1726] p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9ca3af]">Draft Hero</p>
                  <p className="mt-4 text-lg text-[#e5e7eb]">
                    Pilih hero fleksibel dengan counter kuat dan sinergi tim untuk dominasi lane.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-[2rem] border border-[#ffffff14] bg-[#08101b] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <h2 className="text-3xl font-bold mb-6 uppercase" style={{ color: accentColor }}>
                Prestasi Tim
              </h2>
              <div className="space-y-4">
                <div className="rounded-3xl bg-[#0f1726] p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9ca3af]">Juara</p>
                  <p className="mt-3 text-3xl font-bold" style={{ color: accentColor }}>{division.teams[0].wins}</p>
                  <p className="mt-2 text-sm text-[#cbd5e1]">Catatan kemenangan tim HOK.</p>
                </div>
                <div className="rounded-3xl bg-[#0f1726] p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9ca3af]">Win Rate</p>
                  <p className="mt-3 text-3xl font-bold" style={{ color: accentColor }}>{division.teams[0].winRate}</p>
                  <p className="mt-2 text-sm text-[#cbd5e1]">Konsistensi performa di setiap turnamen.</p>
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#ffffff14] bg-[#08101b] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <h2 className="text-3xl font-bold mb-6 uppercase" style={{ color: accentColor }}>
                Sub Player
              </h2>
              <div className="grid gap-4">
                {division.roasterSub.map((player) => (
                  <div key={player.name} className="flex items-center gap-4 rounded-3xl bg-[#0f1726] p-4">
                    <img src={player.image} alt={player.name} className="h-16 w-16 rounded-3xl object-cover" />
                    <div>
                      <p className="font-semibold" style={{ color: accentColor }}>{player.name}</p>
                      <p className="text-sm text-[#9ca3af]">{player.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#ffffff14] bg-[#08101b] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <h2 className="text-3xl font-bold mb-6 uppercase" style={{ color: accentColor }}>
                Jadwal Pertandingan
              </h2>
              <div className="space-y-4">
                {division.teams[0].stats.map((match, idx) => (
                  <div key={idx} className="rounded-3xl bg-[#0f1726] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm text-[#9ca3af]">{match.date}</p>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#d1d5db]">VS</span>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                      <p className="font-bold" style={{ color: accentColor }}>{match.team1}</p>
                      <p className="text-sm text-[#cbd5e1]">{match.time}</p>
                      <p className="font-bold" style={{ color: accentColor }}>{match.team2}</p>
                    </div>
                    <p className="mt-3 text-sm text-[#9ca3af]">{match.tournament}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </section>
      </main>
    </section>
  );
}

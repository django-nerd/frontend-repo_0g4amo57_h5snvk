import { useState } from 'react';

const filters = ['Tutti', 'Residenziale', 'Commerciale', 'Industriale'];

const projects = [
  { id: 1, title: 'Attico centro storico', type: 'Residenziale', img: 'https://images.unsplash.com/photo-1600607687920-4ce8c559d8df?q=80&w=1600&auto=format&fit=crop', kpi: ['90 gg', 'Classe A2', 'Legno/Acciaio'] },
  { id: 2, title: 'Showroom automotive', type: 'Commerciale', img: 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?q=80&w=1600&auto=format&fit=crop', kpi: ['120 gg', 'Illuminotecnica', 'Pavimento resina'] },
  { id: 3, title: 'Capannone logistico', type: 'Industriale', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop', kpi: ['150 gg', 'C.A. prefabbricato', 'Sprinkler'] },
  { id: 4, title: 'Villa panoramica', type: 'Residenziale', img: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1600&auto=format&fit=crop', kpi: ['180 gg', 'NZEB', 'Pompa di calore'] },
];

export default function Projects() {
  const [active, setActive] = useState('Tutti');
  const visible = active === 'Tutti' ? projects : projects.filter(p => p.type === active);

  return (
    <section id="progetti" className="py-16 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Progetti</h2>
          <div className="hidden sm:flex gap-2">
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)} className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-colors ${active===f ? 'bg-[#D6001C] text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="sm:hidden mb-4">
          <select value={active} onChange={(e)=>setActive(e.target.value)} className="w-full bg-white/10 text-white border border-white/20 rounded-md p-2">
            {filters.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <article key={p.id} className="group relative overflow-hidden rounded-xl">
              <img src={p.img} alt={p.title} className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.kpi.map(k => (
                    <span key={k} className="text-xs bg-white/10 px-2 py-1 rounded">{k}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#contatti" className="inline-flex px-6 py-3 rounded-md bg-[#D6001C] text-white font-semibold">Scopri i nostri cantieri</a>
        </div>
      </div>
    </section>
  );
}

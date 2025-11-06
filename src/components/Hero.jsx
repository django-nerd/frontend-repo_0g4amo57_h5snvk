import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full grid lg:grid-cols-2">
      <div className="relative bg-[#0A0A0A] text-white flex items-center justify-center p-6 sm:p-10">
        <div className="absolute inset-0 opacity-60">
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 max-w-xl space-y-6">
          <p className="inline-flex items-center text-xs uppercase tracking-widest text-white/70">Impresa Edile • LUAN SRL</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Costruiamo qualità, ristrutturiamo valore, consegniamo puntuali.
          </h1>
          <p className="text-lg text-white/80">
            Gestione completa del cantiere, tecnici certificati, zero sorprese su tempi e costi.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contatti" className="px-6 py-3 rounded-md bg-[#D6001C] hover:opacity-90 font-semibold">Richiedi preventivo</a>
            <a href="#progetti" className="px-6 py-3 rounded-md bg-white text-[#0A0A0A] hover:bg-neutral-100 font-semibold">I nostri lavori</a>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-4">
            {[
              { k: 'Anni attività', v: '15+' },
              { k: 'Cantieri conclusi', v: '320+' },
              { k: 'Soddisfazione', v: '4.9/5' },
            ].map((n) => (
              <div key={n.k} className="">
                <p className="text-3xl font-extrabold text-white">{n.v}</p>
                <p className="text-xs text-white/70">{n.k}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-white p-6 sm:p-10 flex flex-col justify-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] mb-4">Perché scegliere LUAN SRL</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { t: 'Qualità', d: 'Materiali certificati e controlli accurati' },
              { t: 'Sicurezza', d: 'Procedure e DPI secondo normativa' },
              { t: 'Puntualità', d: 'Pianificazione e consegna nei tempi' },
            ].map((p) => (
              <div key={p.t} className="p-4 border border-neutral-200 rounded-lg">
                <p className="text-lg font-bold text-[#0A0A0A]">{p.t}</p>
                <p className="text-sm text-neutral-600">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-6">
            <img src="https://images.unsplash.com/photo-1646126682328-8833241095f4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJU08lMjA5MDAxfGVufDB8MHx8fDE3NjI0MTg0ODB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="ISO 9001" className="h-10 w-auto" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1630127323416-0fd0c48e1d39?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJU08lMjAxNDAwMXxlbnwwfDB8fHwxNzYyNDE4NDgxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="ISO 14001" className="h-10 w-auto" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1545868260-9d9d24fc6669?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDRXxlbnwwfDB8fHwxNzYyNDE4NDgyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="CE" className="h-10 w-auto" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

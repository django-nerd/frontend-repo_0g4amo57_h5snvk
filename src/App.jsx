import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';

export default function App() {
  useEffect(() => {
    document.title = 'Impresa Edile LUAN SRL | Ristrutturazioni chiavi in mano a Milano';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'LUAN SRL: impresa edile moderna. Ristrutturazioni, nuove costruzioni, cappotti termici e impianti. Qualità, sicurezza e puntualità. Preventivi rapidi.');
    }
  }, []);

  return (
    <div className="font-sans text-[#0A0A0A] bg-white">
      <a href="#contatti" className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-[#D6001C] text-white font-semibold shadow-lg hover:opacity-90">Parla con un tecnico</a>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <section id="chi-siamo" className="bg-neutral-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold">Chi Siamo</h2>
              <p className="mt-4 text-neutral-700">Da oltre 15 anni costruiamo e ristrutturiamo edifici con un approccio ingegneristico e una gestione trasparente. Certificazioni ISO, coperture assicurative e team di tecnici specializzati.</p>
              <ul className="mt-6 space-y-2 text-neutral-700">
                <li>• Mission: qualità misurabile e sicurezza totale</li>
                <li>• Valori: responsabilità, precisione, affidabilità</li>
                <li>• Differenziatori: capitolati chiari, direzione lavori interna, report digitale di cantiere</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-white border border-neutral-200">
                <p className="font-bold">Timeline cantieri</p>
                <p className="text-sm text-neutral-600">Dalla progettazione al collaudo, pianifichiamo ogni fase con KPI chiari e scadenze condivise.</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-neutral-200">
                <p className="font-bold">Team</p>
                <p className="text-sm text-neutral-600">Ingegneri, architetti, capi cantiere e maestranze certificate. Assicurazione RC professionale attiva.</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-neutral-200">
                <p className="font-bold">Certificazioni</p>
                <p className="text-sm text-neutral-600">ISO 9001, ISO 14001, SOA e abilitazioni impiantistiche.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contatti" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold">Contatti</h2>
              <p className="mt-3 text-neutral-700">Parla con un tecnico e ricevi un preventivo: risposta entro 24 ore.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-start lg:justify-end">
              <a href="tel:+39000000000" className="px-5 py-3 rounded-md border border-neutral-300 font-semibold">Chiama ora</a>
              <a href="https://wa.me/39000000000" className="px-5 py-3 rounded-md bg-[#0A0A0A] text-white font-semibold">WhatsApp</a>
              <a href="#" className="px-5 py-3 rounded-md bg-[#D6001C] text-white font-semibold">Richiedi preventivo</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-3 gap-8">
          <div>
            <p className="text-xl font-extrabold">LUAN SRL</p>
            <p className="text-sm text-white/70 mt-2">Impresa edile • Ristrutturazioni chiavi in mano</p>
          </div>
          <div>
            <p className="font-bold mb-2">Sede</p>
            <p className="text-sm text-white/80">Via Esempio 10, Milano</p>
            <p className="text-sm text-white/80">P.IVA 00000000000</p>
          </div>
          <div>
            <p className="font-bold mb-2">Contatti</p>
            <p className="text-sm text-white/80">info@luansrl.it • +39 000 000 0000</p>
            <a href="#contatti" className="inline-block mt-3 px-4 py-2 rounded-md bg-[#D6001C] font-semibold">Richiedi preventivo</a>
          </div>
        </div>
        <div className="border-t border-white/10 text-xs text-white/60 py-4 text-center">
          © {new Date().getFullYear()} LUAN SRL • Tutti i diritti riservati
        </div>
      </footer>
    </div>
  );
}

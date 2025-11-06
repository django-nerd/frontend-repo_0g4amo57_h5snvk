import { CheckCircle, Wrench, Building2, Thermometer, Plug, Hammer, Shield } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Ristrutturazioni',
    desc: 'Appartamenti, ville e locali commerciali chiavi in mano',
    benefits: ['Direzione lavori', 'Pratiche edilizie', 'Cronoprogramma chiaro'],
  },
  {
    icon: Hammer,
    title: 'Nuove costruzioni',
    desc: 'Strutture in c.a., acciaio e legno ad alte prestazioni',
    benefits: ['Capitolati trasparenti', 'Collaudi certificati', 'Assistenza post-opera'],
  },
  {
    icon: Thermometer,
    title: 'Cappotti termici',
    desc: 'Isolamento e riqualificazione energetica con bonus attivi',
    benefits: ['Materiali ETICS', 'Ponti termici ridotti', 'Sopralluogo gratuito'],
  },
  {
    icon: Plug,
    title: 'Impiantistica',
    desc: 'Impianti elettrici e idro-termo-sanitari integrati',
    benefits: ['Quadri certificati', 'Domotica', 'Prove di tenuta'],
  },
  {
    icon: Wrench,
    title: 'Carpenteria',
    desc: 'Strutture metalliche e opere in carpenteria pesante',
    benefits: ['Saldature certificate', 'Progettazione officina', 'Verniciatura a norma'],
  },
  {
    icon: Shield,
    title: 'Manutenzioni',
    desc: 'Piani programmati per condomini, aziende e retail',
    benefits: ['Interventi rapidi', 'Reportistica', 'Contratti SLA'],
  },
];

export default function Services() {
  return (
    <section id="servizi" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A]">Servizi</h2>
          <a href="#contatti" className="hidden sm:inline-flex px-5 py-2 rounded-md bg-[#D6001C] text-white font-semibold">Calcola il tuo preventivo</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group p-6 rounded-xl border border-neutral-200 hover:border-neutral-300 transition-shadow hover:shadow-lg">
              <div className="h-12 w-12 rounded-md bg-[#0A0A0A] text-white flex items-center justify-center mb-4">
                <s.icon />
              </div>
              <h3 className="text-xl font-bold text-[#0A0A0A] mb-1">{s.title}</h3>
              <p className="text-neutral-600 mb-4">{s.desc}</p>
              <ul className="space-y-2 mb-4">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="text-[#D6001C]" size={18} /> {b}
                  </li>
                ))}
              </ul>
              <a href="#contatti" className="inline-flex text-sm font-semibold text-[#D6001C]">Richiedi info</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

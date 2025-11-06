import { useState } from 'react';
import { Phone, Menu, X, ChevronDown, MessageCircle } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Progetti', href: '#progetti' },
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Contatti', href: '#contatti' },
];

const serviziVoci = [
  'Ristrutturazioni chiavi in mano',
  'Nuove costruzioni',
  'Cappotti termici e isolamento',
  'Impiantistica integrata',
  'Carpenteria e strutture',
  'Manutenzioni programmate',
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openMega, setOpenMega] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      {/* Barra rapida "richiama ora" */}
      <div className="w-full bg-[#0A0A0A] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <span className="font-medium tracking-tight">LUAN SRL • Impresa edile a servizio completo</span>
          <a href="tel:+39000000000" className="inline-flex items-center gap-2 text-[#D6001C] hover:text-white transition-colors">
            <Phone size={16} />
            <span className="font-semibold">Richiama ora</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-baseline gap-2">
          <div className="w-8 h-8 rounded-sm bg-[#D6001C]" />
          <span className="text-xl font-extrabold tracking-tight text-[#0A0A0A]">LUAN SRL</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-neutral-800 hover:text-[#D6001C] transition-colors">
              {item.label}
            </a>
          ))}
          <div className="relative">
            <button onMouseEnter={() => setOpenMega(true)} onMouseLeave={() => setOpenMega(false)} className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 hover:text-[#D6001C]">
              Servizi <ChevronDown size={16} />
            </button>
            {openMega && (
              <div onMouseEnter={() => setOpenMega(true)} onMouseLeave={() => setOpenMega(false)} className="absolute left-0 mt-3 w-[560px] rounded-lg border border-neutral-200 bg-white shadow-xl p-6 grid grid-cols-2 gap-4">
                {serviziVoci.map((voce) => (
                  <a key={voce} href="#servizi" className="group p-3 rounded-md hover:bg-neutral-50 transition-colors">
                    <p className="text-sm font-semibold text-neutral-900 group-hover:text-[#D6001C]">{voce}</p>
                    <p className="text-xs text-neutral-600">Scopri come lavoriamo e le garanzie</p>
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contatti" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-200 hover:border-neutral-300 text-sm font-semibold">Parla con un tecnico</a>
          <a href="#contatti" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#D6001C] text-white font-semibold hover:opacity-90">Richiedi preventivo</a>
        </div>

        <button className="md:hidden inline-flex items-center p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-base font-medium text-neutral-900">
                {item.label}
              </a>
            ))}
            <a href="#servizi" onClick={() => setOpen(false)} className="text-base font-semibold text-neutral-900">
              Servizi
            </a>
            <div className="pt-2 flex items-center gap-2">
              <a href="#contatti" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-neutral-200 text-sm font-semibold">Parla con un tecnico</a>
              <a href="#contatti" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#D6001C] text-white text-sm font-semibold">Richiedi preventivo</a>
            </div>
            <a href="https://wa.me/39000000000" className="inline-flex items-center gap-2 text-[#0A0A0A] font-semibold"><MessageCircle size={18}/> WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  );
}

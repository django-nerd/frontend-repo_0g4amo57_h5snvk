import { MessageCircle, Phone, Mail, MapPin, Upload } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contatti" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] mb-4">Richiedi un preventivo</h2>
            <p className="text-neutral-700 mb-6">Compila il form: un tecnico ti contatterà entro 24 ore.</p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-800">Nome e cognome</label>
                  <input type="text" required className="mt-1 w-full rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#D6001C]" placeholder="Mario Rossi" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-800">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#D6001C]" placeholder="mario@email.it" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-800">Telefono</label>
                  <input type="tel" required className="mt-1 w-full rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#D6001C]" placeholder="+39" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-800">Città</label>
                  <input type="text" className="mt-1 w-full rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#D6001C]" placeholder="Milano" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-800">Budget indicativo</label>
                  <select className="mt-1 w-full rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#D6001C]">
                    <option>Fino a 20.000€</option>
                    <option>20.000€ - 50.000€</option>
                    <option>50.000€ - 100.000€</option>
                    <option>Oltre 100.000€</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-800">Tipologia intervento</label>
                  <select className="mt-1 w-full rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#D6001C]">
                    <option>Ristrutturazione</option>
                    <option>Nuova costruzione</option>
                    <option>Cappotto termico</option>
                    <option>Impiantistica</option>
                    <option>Altro</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-800">Descrizione progetto</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border border-neutral-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#D6001C]" placeholder="Raccontaci obiettivi, tempi e materiali desiderati..." />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-800">Planimetrie / foto</label>
                <div className="mt-1 flex items-center justify-center border-2 border-dashed border-neutral-300 rounded-md p-6 text-neutral-600">
                  <Upload className="mr-2" /> Trascina qui o carica file
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm text-neutral-600">
                <input type="checkbox" id="privacy" className="mt-1" required />
                <label htmlFor="privacy">Acconsento al trattamento dei dati secondo la privacy policy.</label>
              </div>
              <button type="submit" className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#D6001C] text-white font-semibold">Invia richiesta</button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
              <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">Contatti diretti</h3>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-center gap-2"><Phone className="text-[#D6001C]" size={18}/> +39 000 000 0000</li>
                <li className="flex items-center gap-2"><Mail className="text-[#D6001C]" size={18}/> info@luansrl.it</li>
                <li className="flex items-center gap-2"><MapPin className="text-[#D6001C]" size={18}/> Via Esempio 10, Milano</li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a href="https://wa.me/39000000000" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0A0A0A] text-white font-semibold"><MessageCircle size={18}/> WhatsApp</a>
                <a href="tel:+39000000000" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 font-semibold">Chiama ora</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <iframe title="Mappa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.916614970786!2d9.1900!3d45.4642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMilano!5e0!3m2!1sit!2sit!4v1610000000000" width="100%" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="p-6 rounded-xl bg-white border border-neutral-200">
              <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">Recensioni</h3>
              <div className="flex items-center gap-2">
                {Array.from({length:5}).map((_,i)=> (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#D6001C" className="w-5 h-5"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.801 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.801-2.034a1 1 0 00-1.175 0L6.364 16.28c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.73 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
                <span className="text-sm font-semibold text-neutral-800">4.9/5 su 200+ recensioni</span>
              </div>
              <p className="text-sm text-neutral-600 mt-2">"Lavoro impeccabile e tempi rispettati. Consigliati!" — G. Bianchi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react'

const ContactInfo = ({ icon, title, children }) => {
  return (
    <div className="flex items-start space-x-6">
      <div className="w-12 h-12 rounded-lg bg-[#adc7ff]/10 border border-[#adc7ff]/20 flex items-center justify-center text-[#adc7ff] flex-shrink-0">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <h4 className="font-bold text-[#E0E2ED] mb-2">{title}</h4>
        <div className="text-[#8B90A0]">{children}</div>
      </div>
    </div>
  )
}

const Contact = () => {
  const phone = "2281113715"
  
  return (
    <section className="py-32 border-y border-[#2C2C2E]" id="contacto" style={{ background: 'linear-gradient(180deg, #0A0A0B 0%, #080e18 50%, #0A0A0B 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="font-label-md text-label-md text-[#adc7ff] tracking-[0.2em] uppercase mb-4 block">
              Encuéntranos
            </span>
            <h2 className="font-headline-lg text-headline-lg mb-8 tracking-tighter">
              Estamos para servirte
            </h2>
            <p className="text-body-lg font-body-lg text-[#8B90A0] mb-12">
              Llámanos, escríbenos o visítanos directamente en nuestra sucursal en Teziutlán.
            </p>
            <div className="space-y-8">
              <ContactInfo icon="location_on" title="Ubicación">
                B. Juárez Ote. 1, Barrio del Fresnillo<br />
                73887 Teziutlán, Pue.
              </ContactInfo>
              <ContactInfo icon="schedule" title="Horario de Atención">
                Lunes a Sábado: 9:00 AM – 7:00 PM<br />
                Domingo: Cerrado
              </ContactInfo>
              <ContactInfo icon="phone_iphone" title="Contacto Directo">
                <p className="text-[#8B90A0]">Tel: (52 1) 228 111 3715</p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <a 
                    className="bg-[#adc7ff] text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors"
                    href={`tel:${phone}`}
                  >
                    Llamar Ahora
                  </a>
                  <a 
                    className="border border-[#adc7ff] text-[#adc7ff] px-6 py-2 rounded-full font-bold text-sm hover:bg-[#adc7ff]/10 transition-colors"
                    href={`https://wa.me/521${phone}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              </ContactInfo>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-[#2C2C2E] shadow-xl bg-[#0A0A0B]">
            <img 
              className="w-full h-full object-cover grayscale opacity-50"
              alt="Mapa Teziutlán"
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a 
                href="https://maps.google.com/?q=19.8105,-97.379361"
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-6 rounded-xl text-center shadow-2xl border-[#adc7ff]/30 hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined text-4xl text-[#adc7ff] mb-4 block">
                  pin_drop
                </span>
                <span className="font-bold text-[#E0E2ED]">
                  Abrir en Google Maps
                </span>
                <p className="text-xs text-[#8B90A0] mt-2">
                  Teziutlán, Puebla
                </p>
              </a>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

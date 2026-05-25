import React from 'react'

const About = () => {
  return (
    <section className="py-32" id="nosotros">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 border-t-4 border-l-4 border-[#FF5F1F] opacity-50"></div>
            <div className="rounded-xl overflow-hidden border border-[#2C2C2E] shadow-2xl relative group aspect-[4/3] bg-[#1C1C1E]">
              <img 
                alt="Dueño de Galaviz Automotriz trabajando en una camioneta"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/media/dueno_trabajando.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-10">
              <div className="glass-panel p-4 md:p-8 rounded-xl shadow-xl">
                <span className="text-[#FF5F1F] font-black text-xl md:text-headline-md">
                  Teziutlán, Pue.
                </span>
                <p className="text-[#8B90A0] text-xs md:text-label-md">
                  Sede Principal
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="font-label-md text-label-md text-[#FF5F1F] tracking-[0.2em] uppercase mb-4 block">
              Quiénes somos
            </span>
            <h2 className="font-headline-lg text-headline-lg mb-8 tracking-tighter">
              Más de 15 años cuidando tu vehículo
            </h2>
            <p className="text-body-lg font-body-lg text-[#8B90A0] mb-6">
              En Galaviz Automotriz nos especializamos en brindar un servicio mecánico integral de la más alta calidad. Desde nuestros inicios, hemos atendido a cientos de clientes con profesionalismo, honestidad y un compromiso inquebrantable con la excelencia.
            </p>
            <p className="text-body-md font-body-md text-[#c1c6d7] mb-8">
              Contamos con técnicos altamente capacitados y tecnología de vanguardia para garantizar que tu vehículo reciba la atención que merece.
            </p>
            <div className="mb-8 p-4 bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl flex items-center gap-4">
              <span className="material-symbols-outlined text-[#adc7ff] text-3xl flex-shrink-0">
                graphic_eq
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-label-md text-label-md text-[#c1c6d7] uppercase tracking-widest mb-2">
                  Escucha nuestro mensaje
                </p>
                <audio 
                  controls 
                  preload="none"
                  className="w-full h-9"
                  style={{ colorScheme: 'dark' }}
                >
                  <source src="/media/audio_galaviz.mp4" type="audio/mp4" />
                  Tu navegador no soporta audio.
                </audio>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Diagnóstico Digital", "Refacciones Originales", "Transparencia Total"].map((item) => (
                <div key={item} className="flex items-center space-x-2 bg-[#1C1C1E] border border-[#2C2C2E] px-4 py-2 rounded-lg">
                  <span className="material-symbols-outlined text-[#FF5F1F] text-base">
                    check_circle
                  </span>
                  <span className="font-label-md text-label-md">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

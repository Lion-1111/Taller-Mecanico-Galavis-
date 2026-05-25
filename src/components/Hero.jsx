import React from 'react'

const Hero = () => {
  const phone = "2281113715"
  
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 110%, #1a3a6e 0%, transparent 65%), #0A0A0B' }}>
      <div className="hero-grain" aria-hidden="true"></div>
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full text-white" fill="none" viewBox="0 0 696 316" preserveAspectRatio="none">
          <path className="moving-path" d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875" stroke="currentColor" strokeWidth="0.5" />
          <path className="moving-path" d="M-370 -180C-370 -180 -302 225 162 352C626 479 694 884 694 884" stroke="currentColor" strokeWidth="0.8" style={{ animationDelay: "-5s" }} />
          <path className="moving-path" d="M-360 -171C-360 -171 -292 234 172 361C636 488 704 893 704 893" stroke="currentColor" strokeWidth="1.1" style={{ animationDelay: "-10s" }} />
          <path className="moving-path" d="M400 -100C400 -100 500 200 100 400C-300 600 -400 900 -400 900" stroke="currentColor" strokeWidth="0.6" style={{ animationDelay: "-2s" }} />
        </svg>
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full border border-[#adc7ff]/30 text-[#adc7ff] text-sm mb-6 uppercase tracking-widest bg-[#adc7ff]/5">
            Desde 2009 en Teziutlán
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-[#E0E2ED]">
            Galaviz Automotriz: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#adc7ff] via-white to-[#4a8eff]">
              Tu taller de confianza
            </span>
          </h1>
          <p className="text-lg text-[#8B90A0] max-w-2xl mx-auto mb-12">
            Servicio profesional garantizado. Más de 15 años cuidando tu vehículo con la precisión técnica que merece.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="group relative bg-gradient-to-b from-white/10 to-black/10 p-px rounded-full overflow-hidden shadow-lg transition-all duration-300">
              <a className="inline-flex items-center px-10 py-5 rounded-full font-semibold bg-white text-black hover:bg-[#adc7ff] transition-all duration-300 group-hover:-translate-y-1" href={`tel:${phone}`}>
                <span className="material-symbols-outlined mr-2">call</span>
                Llamar ahora
              </a>
            </div>
            <a className="inline-flex items-center px-10 py-5 rounded-full font-semibold border border-[#2C2C2E] text-[#E0E2ED] hover:bg-white/5 transition-all duration-300" href="#servicios">
              Ver Servicios
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

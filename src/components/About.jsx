import React, { useEffect, useRef, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="py-16 md:py-32" id="nosotros" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className="relative max-w-md mx-auto lg:max-w-none w-full order-1 lg:order-1">
            <div className="absolute -top-4 -left-4 w-12 h-12 md:w-24 md:h-24 border-t-4 border-l-4 border-[#FF5F1F] opacity-50"></div>
            <div className={`rounded-xl overflow-hidden border border-[#2C2C2E] shadow-2xl relative group aspect-[4/3] bg-[#1C1C1E] transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ minHeight: '260px' }}>
              <img 
                alt="Dueño de Galaviz Automotriz trabajando en una camioneta"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/media/dueno_trabajando.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-2 md:-bottom-10 md:-right-10">
              <div className="glass-panel p-3 md:p-8 rounded-xl shadow-xl">
                <span className="text-[#FF5F1F] font-black text-lg md:text-headline-md">
                  Teziutlán, Pue.
                </span>
                <p className="text-[#8B90A0] text-xs md:text-label-md">
                  Sede Principal
                </p>
              </div>
            </div>
          </div>
          <div className={`order-2 lg:order-2 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="font-label-md text-label-md text-[#FF5F1F] tracking-[0.2em] uppercase mb-4 block">
              Quiénes somos
            </span>
            <h2 className="font-headline-lg text-headline-lg mb-6 md:mb-8 tracking-tighter">
              Más de 15 años cuidando tu vehículo
            </h2>
            <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #FF5F1F, transparent)', borderRadius: '2px', marginBottom: '1.5rem' }}></div>
            <p className="text-body-lg font-body-lg text-[#8B90A0] mb-4 md:mb-6">
              En Galaviz Automotriz nos especializamos en brindar un servicio mecánico integral de la más alta calidad. Desde nuestros inicios, hemos atendido a cientos de clientes con profesionalismo, honestidad y un compromiso inquebrantable con la excelencia.
            </p>
            <p className="text-body-md font-body-md text-[#c1c6d7] mb-6 md:mb-8">
              Contamos con técnicos altamente capacitados y tecnología de vanguardia para garantizar que tu vehículo reciba la atención que merece.
            </p>
            <div className="mb-6 md:mb-8 p-3 md:p-4 bg-[#1C1C1E] border border-[#2C2C2E] rounded-xl flex items-center gap-3 md:gap-4">
              <span className="material-symbols-outlined text-[#adc7ff] text-2xl md:text-3xl flex-shrink-0">
                graphic_eq
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-label-md text-label-md text-[#c1c6d7] uppercase tracking-widest mb-2 text-xs md:text-sm">
                  Escucha nuestro mensaje
                </p>
                <audio 
                  controls 
                  preload="none"
                  className="w-full h-8 md:h-9"
                  style={{ colorScheme: 'dark' }}
                >
                  <source src="/media/audio_galaviz.mp4" type="audio/mp4" />
                  Tu navegador no soporta audio.
                </audio>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center space-x-2 px-4 py-3 rounded-lg" style={{ background: 'linear-gradient(135deg, rgba(255,95,31,0.18) 0%, rgba(173,199,255,0.08) 100%)', border: '1px solid rgba(255,95,31,0.35)' }}>
                <span className="material-symbols-outlined text-[#FF5F1F] text-lg md:text-xl">
                  verified
                </span>
                <span className="font-label-md text-label-md text-xs md:text-sm text-[#E0E2ED]">Diagnóstico Digital</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-3 rounded-lg" style={{ background: 'linear-gradient(135deg, rgba(173,199,255,0.12) 0%, rgba(255,95,31,0.08) 100%)', border: '1px solid rgba(173,199,255,0.25)' }}>
                <span className="material-symbols-outlined text-[#adc7ff] text-lg md:text-xl">
                  inventory_2
                </span>
                <span className="font-label-md text-label-md text-xs md:text-sm text-[#E0E2ED]">Refacciones Originales</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-3 rounded-lg" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(173,199,255,0.1) 100%)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span className="material-symbols-outlined text-[#E0E2ED] text-lg md:text-xl">
                  shield_check
                </span>
                <span className="font-label-md text-label-md text-xs md:text-sm text-[#E0E2ED]">Transparencia Total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

import React, { useEffect, useRef, useState } from 'react'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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

  const services = [
    {
      icon: "minor_crash",
      title: "Servicio de Frenos",
      desc: "Revisión completa de pastillas, discos y líquido de frenos para garantizar tu seguridad en el camino."
    },
    {
      icon: "oil_barrel",
      title: "Cambio de Aceite",
      desc: "Lubricantes de alta calidad para proteger y alargar la vida de tu motor."
    },
    {
      icon: "settings_suggest",
      title: "Afinación",
      desc: "Bujías, filtros y cables para un rendimiento óptimo de tu vehículo."
    },
    {
      icon: "battery_charging_full",
      title: "Sistema Eléctrico",
      desc: "Diagnóstico, carga y reemplazo de baterías. Alternadores y arrancadores."
    },
    {
      icon: "engineering",
      title: "Suspensión",
      desc: "Reparación de amortiguadores, resortes y componentes de dirección."
    },
    {
      icon: "biotech",
      title: "Diagnóstico",
      desc: "Lectura de códigos de error con escáner profesional de última generación."
    },
    {
      icon: "ac_unit",
      title: "Aire Acondicionado",
      desc: "Diagnóstico, recarga de gas y reparación del sistema de climatización."
    },
    {
      icon: "wallet",
      title: "Pagos con Tarjeta",
      desc: "Aceptamos todas las tarjetas Visa y Mastercard para tu mayor comodidad."
    }
  ]

  return (
    <section className="py-16 md:py-32 relative overflow-hidden" id="servicios" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="font-label-md text-label-md text-[#adc7ff] tracking-[0.2em] uppercase mb-4 block">
            Lo que hacemos
          </span>
          <h2 className="font-headline-lg text-headline-lg mb-4 md:mb-6 tracking-tighter">
            Nuestros Servicios
          </h2>
          <div className="mx-auto" style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #adc7ff, #FF5F1F)', borderRadius: '2px', marginBottom: '1rem' }}></div>
          <p className="text-body-lg font-body-lg text-[#8B90A0] max-w-2xl mx-auto text-sm md:text-base">
            Atención completa para tu vehículo con técnicos especializados y equipo de diagnóstico de última generación.
          </p>
        </div>
        
        {/* Mobile: Horizontal carousel */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-4 scrollbar-hide">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden p-5 border border-[#2C2C2E] bg-[#1C1C1E] hover:border-[#adc7ff] transition-colors duration-500 rounded-xl snap-center w-[85vw] max-w-[320px] transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 grid-pattern-bg opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <span 
                  className="material-symbols-outlined text-[#adc7ff] text-3xl mb-6 block"
                  style={{ fontVariationSettings: "'wght' 200" }}
                >
                  {service.icon}
                </span>
                <h3 className="font-headline-md text-[18px] font-bold mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-body-md font-body-md text-[#8B90A0] font-light relative z-10 text-sm">
                  {service.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-[#2C2C2E]/50 relative z-10">
                  <a 
                    className="text-[#adc7ff] font-label-md text-label-md flex items-center hover:translate-x-2 transition-transform text-sm"
                    href="#cotizacion"
                  >
                    Ver detalles
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_right_alt</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & Desktop: Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden p-6 md:p-8 border border-[#2C2C2E] bg-[#1C1C1E] hover:border-[#adc7ff] transition-colors duration-500 rounded-xl transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 grid-pattern-bg opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <span 
                className="material-symbols-outlined text-[#adc7ff] text-3xl md:text-4xl mb-6 md:mb-10 block"
                style={{ fontVariationSettings: "'wght' 200" }}
              >
                {service.icon}
              </span>
              <h3 className="font-headline-md text-[18px] md:text-[20px] font-bold mb-3 md:mb-4 relative z-10">
                {service.title}
              </h3>
              <p className="text-body-md font-body-md text-[#8B90A0] font-light relative z-10 text-sm md:text-base">
                {service.desc}
              </p>
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-[#2C2C2E]/50 relative z-10">
                <a 
                  className="text-[#adc7ff] font-label-md text-label-md flex items-center hover:translate-x-2 transition-transform text-sm md:text-base"
                  href="#cotizacion"
                >
                  Ver detalles
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_right_alt</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

import React from 'react'

const Services = () => {
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
    <section className="py-32 relative overflow-hidden" id="servicios">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="font-label-md text-label-md text-[#adc7ff] tracking-[0.2em] uppercase mb-4 block">
            Lo que hacemos
          </span>
          <h2 className="font-headline-lg text-headline-lg mb-6 tracking-tighter">
            Nuestros Servicios
          </h2>
          <p className="text-body-lg font-body-lg text-[#8B90A0] max-w-2xl mx-auto">
            Atención completa para tu vehículo con técnicos especializados y equipo de diagnóstico de última generación.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden p-8 border border-[#2C2C2E] bg-[#1C1C1E] hover:border-[#adc7ff] transition-colors duration-500 rounded-xl"
            >
              <div className="absolute inset-0 grid-pattern-bg opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <span 
                className="material-symbols-outlined text-[#adc7ff] text-4xl mb-10 block"
                style={{ fontVariationSettings: "'wght' 200" }}
              >
                {service.icon}
              </span>
              <h3 className="font-headline-md text-[20px] font-bold mb-4 relative z-10">
                {service.title}
              </h3>
              <p className="text-body-md font-body-md text-[#8B90A0] font-light relative z-10">
                {service.desc}
              </p>
              <div className="mt-8 pt-6 border-t border-[#2C2C2E]/50 relative z-10">
                <a 
                  className="text-[#adc7ff] font-label-md text-label-md flex items-center hover:translate-x-2 transition-transform"
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

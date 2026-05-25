import React from 'react'

const Gallery = () => {
  return (
    <section className="py-32" id="galeria" style={{ background: 'linear-gradient(180deg, #0A0A0B 0%, #0d1520 50%, #0A0A0B 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="font-label-md text-label-md text-[#FF5F1F] tracking-[0.2em] uppercase mb-4 block">
              Nuestro trabajo
            </span>
            <h2 className="font-headline-lg text-headline-lg tracking-tighter mb-6">
              Galería del Taller
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #FF5F1F, #adc7ff)', borderRadius: '2px', marginBottom: '1.5rem' }}></div>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-[#8B90A0] text-body-md max-w-sm">
              Cada trabajo refleja nuestro compromiso con la calidad y el detalle técnico.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-12 md:grid-rows-2 gap-3 md:gap-4 md:h-[600px]">
          <div className="col-span-2 md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-xl border border-[#2C2C2E] aspect-[4/3] md:aspect-auto">
            <img 
              alt="Taller mecánico Galaviz - vista completa"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="/media/taller_completo.jpg"
            />
          </div>
          <div className="md:col-span-4 relative group overflow-hidden rounded-xl border border-[#2C2C2E] aspect-square md:aspect-auto">
            <img 
              alt="Trabajo en motor Cadillac"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="/media/motor.jpg"
            />
          </div>
          <div className="md:col-span-4 relative group overflow-hidden rounded-xl border border-[#2C2C2E] aspect-square md:aspect-auto">
            <img 
              alt="Mantenimiento de cuerpo de aceleración"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="/media/cuerpo_aceleracion.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery

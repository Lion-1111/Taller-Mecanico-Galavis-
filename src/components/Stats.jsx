import React from 'react'

const Stats = () => {
  return (
    <section className="py-12 border-y border-[#2C2C2E] bg-[#1C1C1E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-headline-md text-[#FF5F1F] font-black">15+</div>
            <div className="font-label-md text-label-md text-[#8B90A0] uppercase tracking-widest">
              Años de Experiencia
            </div>
          </div>
          <div>
            <div className="text-headline-md text-[#adc7ff] font-black">1000+</div>
            <div className="font-label-md text-label-md text-[#8B90A0] uppercase tracking-widest">
              Clientes Satisfechos
            </div>
          </div>
          <div>
            <div className="text-headline-md text-[#E0E2ED] font-black">100%</div>
            <div className="font-label-md text-label-md text-[#8B90A0] uppercase tracking-widest">
              Garantía en Servicio
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats

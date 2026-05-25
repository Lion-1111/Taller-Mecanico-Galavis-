import React from 'react'

const Tour = () => {
  return (
    <section className="py-32 bg-[#1C1C1E] border-y border-[#2C2C2E]" id="taller">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="font-label-md text-label-md text-[#adc7ff] tracking-[0.2em] uppercase mb-4 block">
            Conoce el taller
          </span>
          <h2 className="font-headline-lg text-headline-lg tracking-tighter">
            Un recorrido por nuestras instalaciones
          </h2>
        </div>
        <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden border border-[#2C2C2E] shadow-2xl bg-black">
          <video 
            className="w-full h-auto block"
            controls
            playsInline
            preload="metadata"
            poster="/media/taller_completo.jpg"
          >
            <source src="/media/taller.mp4" type="video/mp4" />
            Tu navegador no soporta video.
          </video>
        </div>
      </div>
    </section>
  )
}

export default Tour

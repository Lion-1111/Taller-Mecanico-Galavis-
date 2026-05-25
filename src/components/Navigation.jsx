import React from 'react'

const Navigation = () => {
  const phone = "2281113715"
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0B]/80 backdrop-blur-lg border-b border-[#2C2C2E] shadow-md">
      <nav className="flex justify-between items-center h-20 px-6 w-full max-w-7xl mx-auto">
        <div className="font-bold text-2xl tracking-tighter text-[#E0E2ED]">
          Galaviz Automotriz
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a className="text-sm font-medium text-[#adc7ff] border-b-2 border-[#adc7ff] pb-1" href="#servicios">
            Servicios
          </a>
          <a className="text-sm font-medium text-[#c1c6d7] hover:text-[#E0E2ED] transition-colors" href="#galeria">
            Galería
          </a>
          <a className="text-sm font-medium text-[#c1c6d7] hover:text-[#E0E2ED] transition-colors" href="#nosotros">
            Nosotros
          </a>
          <a className="text-sm font-medium text-[#c1c6d7] hover:text-[#E0E2ED] transition-colors" href="#contacto">
            Contacto
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a className="hidden lg:block text-sm font-medium text-[#adc7ff] hover:text-white transition-colors" href={`tel:${phone}`}>
            (228) 111-3715
          </a>
          <a href="#cotizacion" className="bg-[#4a8eff] text-[#00285b] px-6 py-2 rounded-full text-sm font-bold active:scale-95 hover:bg-[#adc7ff] transition-all duration-300">
            Agendar Cita
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navigation

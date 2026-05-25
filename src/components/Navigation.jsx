import React from 'react'

const Navigation = () => {
  const phone = "2281113715"
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b shadow-md" style={{ background: 'linear-gradient(90deg, rgba(26,58,110,0.45) 0%, rgba(10,10,11,0.92) 55%)', borderColor: 'rgba(173,199,255,.12)' }}>
      <nav className="flex justify-between items-center h-20 px-6 w-full max-w-7xl mx-auto">
        <div>
          <div style={{ fontSize: '15px', fontWeight: '700', background: 'linear-gradient(90deg, #fff, #adc7ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '.04em' }}>Galaviz Automotriz</div>
          <div style={{ fontSize: '9px', color: 'rgba(173,199,255,.5)', letterSpacing: '.12em' }}>TALLER MECÁNICO</div>
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
          <button style={{ background: 'linear-gradient(90deg, rgba(173,199,255,.15), rgba(173,199,255,.06))', color: '#adc7ff', fontSize: '12px', fontWeight: '600', padding: '8px 16px', borderRadius: '6px', letterSpacing: '.04em' }} onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}>
            Agendar Cita
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navigation

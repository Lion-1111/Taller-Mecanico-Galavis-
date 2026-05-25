import React from 'react'

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h4 className="text-[#E0E2ED] font-bold mb-6">{title}</h4>
      <ul className="space-y-4">
        {links.map(([text, href]) => (
          <li key={text}>
            <a className="text-[#8B90A0] hover:text-[#E0E2ED] transition-colors" href={href}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0B] pt-20 border-t border-[#2C2C2E]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
        <div className="md:col-span-1">
          <div className="font-headline-md text-headline-md font-black text-[#E0E2ED] mb-6">
            Galaviz Automotriz
          </div>
          <p className="text-[#8B90A0] text-body-md mb-8">
            Líderes en servicio mecánico en Teziutlán desde 2009. Tecnología y experiencia a su servicio.
          </p>
        </div>
        <FooterLinks 
          title="Explorar"
          links={[
            ["Servicios", "#servicios"],
            ["Galería", "#galeria"],
            ["Nosotros", "#nosotros"],
            ["Contacto", "#contacto"]
          ]}
        />
        <FooterLinks 
          title="Legal"
          links={[
            ["Aviso de Privacidad", "#"],
            ["Términos de Servicio", "#"],
            ["Garantías", "#"]
          ]}
        />
        <div>
          <h4 className="text-[#E0E2ED] font-bold mb-6">Cotización rápida</h4>
          <p className="text-[#8B90A0] text-sm mb-6">
            Cuéntanos qué necesita tu auto y te respondemos por WhatsApp.
          </p>
          <a 
            href="#cotizacion"
            className="inline-flex items-center justify-center w-full bg-[#adc7ff] text-black font-bold py-3 rounded-lg hover:bg-white transition-colors active:scale-95 duration-200"
          >
            <span className="material-symbols-outlined mr-2">chat</span>
            Pedir cotización
          </a>
        </div>
      </div>
      <div className="border-t border-[#2C2C2E]/50 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[#8B90A0] text-sm gap-4">
          <p>© 2024 Galaviz Automotriz. Excelencia Mecánica y Precisión.</p>
          <div className="flex space-x-6">
            <span className="flex items-center">
              <span className="material-symbols-outlined text-xs mr-2">verified_user</span>
              Profesionalismo
            </span>
            <span className="flex items-center">
              <span className="material-symbols-outlined text-xs mr-2">verified_user</span>
              Honestidad
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

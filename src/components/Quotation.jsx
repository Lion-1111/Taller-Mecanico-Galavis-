import React, { useState } from 'react'

const FormLabel = ({ label, children }) => {
  return (
    <label className="block">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-2 block">
        {label}
      </span>
      {children}
    </label>
  )
}

const Quotation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  })
  const [error, setError] = useState(null)
  const phone = "2281113715"
  const services = [
    "Servicio de Frenos",
    "Cambio de Aceite",
    "Afinación",
    "Sistema Eléctrico",
    "Suspensión",
    "Diagnóstico",
    "Aire Acondicionado",
    "Otro"
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = formData.name.trim()
    const phoneNum = formData.phone.trim()
    const service = formData.service.trim()
    const message = formData.message.trim()

    if (!name || name.length > 100) {
      return setError("Ingresa tu nombre (máx. 100 caracteres).")
    }
    if (!/^[0-9 +()-]{7,20}$/.test(phoneNum)) {
      return setError("Ingresa un teléfono válido.")
    }
    if (!service) {
      return setError("Selecciona el servicio que necesitas.")
    }
    if (message.length > 500) {
      return setError("El mensaje es demasiado largo.")
    }

    setError(null)
    const text = `Hola, soy ${name}.
Tel: ${phoneNum}
Servicio: ${service}
${message ? `Detalle: ${message}\n` : ""}Me gustaría una cotización.`
    const whatsappUrl = `https://wa.me/521${phone}?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-32 bg-[#0A0A0B]" id="cotizacion">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-label-md text-label-md text-[#FF5F1F] tracking-[0.2em] uppercase mb-4 block">
            Cotización gratuita
          </span>
          <h2 className="font-headline-lg text-headline-lg mb-4 tracking-tighter">
            Pide tu cotización por WhatsApp
          </h2>
          <p className="text-[#8B90A0] text-body-md">
            Llena el formulario y al enviar abrimos WhatsApp con tu mensaje listo para enviar.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-[#1C1C1E] border border-[#2C2C2E] rounded-2xl p-6 md:p-10 space-y-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormLabel label="Nombre">
              <input
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                name="name"
                className="form-input"
                placeholder="Ej. Juan Pérez"
              />
            </FormLabel>
            <FormLabel label="Teléfono">
              <input
                type="tel"
                required
                maxLength={20}
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                className="form-input"
                placeholder="228 111 3715"
              />
            </FormLabel>
          </div>
          <FormLabel label="Servicio que necesitas">
            <select
              required
              value={formData.service}
              onChange={handleChange}
              name="service"
              className="form-input"
            >
              <option value="">Selecciona un servicio</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </FormLabel>
          <FormLabel label="Detalle (opcional)">
            <textarea
              rows={4}
              maxLength={500}
              value={formData.message}
              onChange={handleChange}
              name="message"
              className="form-input resize-none"
              placeholder="Cuéntanos qué le pasa a tu auto..."
            />
          </FormLabel>
          {error && (
            <p className="text-sm text-[#FF5F1F]" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center bg-[#adc7ff] text-black font-bold py-4 rounded-lg hover:bg-white transition-colors active:scale-95 duration-200"
          >
            <span className="material-symbols-outlined mr-2">chat</span>
            Enviar por WhatsApp
          </button>
          <p className="text-xs text-[#8B90A0] text-center">
            Te responderemos en horario de atención: Lun a Sáb, 9:00 AM – 7:00 PM.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Quotation

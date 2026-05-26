import React, { useEffect, useRef, useState } from 'react'

const GalleryNew = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')
  const itemsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible')
          }, i * 100)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item)
    })

    return () => {
      itemsRef.current.forEach(item => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  const openLightbox = (imgSrc) => {
    setLightboxImage(imgSrc)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage('')
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const trabajos = [
    {
      num: '01 —',
      title: 'Reparación mayor de motor',
      desc: 'Toyota · Reconstrucción completa con colector de admisión',
      tag: 'Motor',
      grid: 'grid-2',
      fotos: [
        { badge: 'badge-antes', badgeText: 'Antes', img: '/media/galeria/trabajo_1.jpg', caption: 'Motor con colector de admisión retirado', height: 'tall' },
        { badge: 'badge-despues', badgeText: 'Después', img: '/media/galeria/trabajo_2.jpg', caption: 'Motor reconstruido y limpio', height: 'tall' }
      ]
    },
    {
      num: '02 —',
      title: 'Limpieza de cuerpo de aceleración',
      desc: 'Toyota · Carbonilla severa en mariposa y colector',
      tag: 'Motor',
      grid: 'grid-2-1',
      fotos: [
        { badge: 'badge-antes', badgeText: 'Antes', img: '/media/galeria/trabajo_3.jpg', caption: 'Mariposa completamente negra de carbonilla', height: '' },
        { badge: 'badge-proceso', badgeText: 'Durante', img: '/media/galeria/trabajo_4.jpg', caption: 'Colector de admisión retirado para limpieza', height: '' },
        { badge: 'badge-despues', badgeText: 'Después', img: '/media/galeria/trabajo_5.jpg', caption: 'Mariposa y colector limpios', height: '' }
      ]
    },
    {
      num: '03 —',
      title: 'Cambio de banda de distribución',
      desc: 'VW / Audi · Kit original con bomba de agua y tensores',
      tag: 'Distribución',
      grid: 'grid-3',
      fotos: [
        { badge: 'badge-antes', badgeText: 'Antes', img: '/media/galeria/trabajo_6.jpg', caption: 'Sistema de distribución desgastado', height: '' },
        { badge: 'badge-proceso', badgeText: 'Kit nuevo', img: '/media/galeria/trabajo_7.jpg', caption: 'Kit VW/Audi original: banda, bomba y tensores', height: '' },
        { badge: 'badge-despues', badgeText: 'Después', img: '/media/galeria/trabajo_8.jpg', caption: 'Banda nueva instalada y tensada', height: '' }
      ]
    },
    {
      num: '04 —',
      title: 'Reconstrucción de bloque de motor',
      desc: 'Desarme completo · Cigüeñal · Pistones · Limpieza interna',
      tag: 'Overhaul',
      grid: 'grid-3',
      fotos: [
        { badge: 'badge-antes', badgeText: 'Antes', img: '/media/galeria/trabajo_9.jpg', caption: 'Bloque con acumulación severa de aceite quemado', height: '' },
        { badge: 'badge-proceso', badgeText: 'Limpieza', img: '/media/galeria/trabajo_10.jpg', caption: 'Lavado a presión del interior del bloque', height: '' },
        { badge: 'badge-despues', badgeText: 'Después', img: '/media/galeria/trabajo_11.jpg', caption: 'Bloque limpio con cigüeñal instalado', height: '' },
        { badge: 'badge-proceso', badgeText: 'Piezas', img: '/media/galeria/trabajo_12.jpg', caption: 'Todas las piezas del motor desarmadas', height: 'short' },
        { badge: 'badge-proceso', badgeText: 'Cigüeñal', img: '/media/galeria/trabajo_13.jpg', caption: 'Cigüeñal rectificado y pulido', height: 'short' },
        { badge: 'badge-despues', badgeText: 'Pistones', img: '/media/galeria/trabajo_14.jpg', caption: 'Pistones nuevos instalados en bloque', height: 'short' }
      ]
    }
  ]

  const getGridClass = (grid) => {
    switch(grid) {
      case 'grid-2': return 'grid grid-cols-2 gap-[3px]'
      case 'grid-2-1': return 'grid grid-cols-[1.4fr_1fr] gap-[3px]'
      case 'grid-3': return 'grid grid-cols-3 gap-[3px]'
      default: return 'grid grid-cols-2 gap-[3px]'
    }
  }

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

        <div className="flex flex-col gap-[80px]">
          {trabajos.map((trabajo, index) => (
            <div 
              key={index}
              ref={el => itemsRef.current[index] = el}
              className="trabajo opacity-0 translate-y-6 transition-all duration-700"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5 flex-wrap gap-2">
                <div>
                  <div className="font-['Anton'] text-[13px] tracking-[0.1em] text-[#e63329]">{trabajo.num}</div>
                  <div className="font-['Anton'] text-[clamp(22px,3vw,32px)] tracking-[0.02em] uppercase leading-none mt-1.5">{trabajo.title}</div>
                  <div className="text-[12px] text-[#888] mt-1.5 font-light">{trabajo.desc}</div>
                </div>
                <div className="text-[10px] tracking-[0.12em] uppercase px-[10px] py-1 border border-[#2a2a2a] text-[#888] self-start">
                  {trabajo.tag}
                </div>
              </div>

              <div className={getGridClass(trabajo.grid)}>
                {trabajo.fotos.map((foto, fotoIndex) => (
                  <div 
                    key={fotoIndex}
                    className={`relative overflow-hidden bg-[#1a1a1a] cursor-zoom-in ${foto.height === 'tall' ? 'h-[420px]' : foto.height === 'short' ? 'h-[220px]' : 'h-[300px]'}`}
                    onClick={() => openLightbox(foto.img)}
                  >
                    <img 
                      src={foto.img}
                      alt={foto.caption}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 hover:brightness-100 brightness-[0.92]"
                    />
                    <div className={`absolute top-0 left-0 px-[14px] py-2 text-[9px] font-semibold tracking-[0.18em] uppercase z-2 ${
                      foto.badge === 'badge-antes' ? 'bg-[rgba(230,51,41,0.9)] text-white' :
                      foto.badge === 'badge-despues' ? 'bg-[rgba(20,20,20,0.85)] text-[#4dff91] border-b-2 border-[#4dff91]' :
                      'bg-[rgba(20,20,20,0.85)] text-[#ffd84d] border-b-2 border-[#ffd84d]'
                    }`}>
                      {foto.badgeText}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-[14px] py-2.5 text-[11px] text-[rgba(240,236,230,0.7)] bg-gradient-to-t from-black/70 to-transparent font-light">
                      {foto.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center cursor-zoom-out"
          onClick={closeLightbox}
        >
          <span 
            className="fixed top-5 right-7 text-[32px] text-white cursor-pointer leading-none font-['Anton']"
            onClick={closeLightbox}
          >
            ✕
          </span>
          <img 
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-[92vw] max-h-[92vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default GalleryNew

import React, { useEffect, useRef, useState } from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'

const GalleryNew = () => {
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

  const trabajos = [
    {
      num: '01 —',
      title: 'Reparación de Motores',
      desc: 'Desmontaje, rectificación y armado completo. Desliza para comparar antes y después.',
      tag: 'Motor',
      beforeImg: '/media/galeria/trabajo_1.png',
      afterImg: '/media/galeria/trabajo_2.png',
      beforeLabel: 'ANTES',
      afterLabel: 'DESPUÉS'
    },
    {
      num: '02 —',
      title: 'Reparación de Motores',
      desc: 'Desmontaje, rectificación y armado completo. Desliza para comparar antes y después.',
      tag: 'Motor',
      beforeImg: '/media/galeria/trabajo_3.jpg',
      afterImg: '/media/galeria/trabajo_4.jpg',
      beforeLabel: 'ANTES',
      afterLabel: 'DESPUÉS'
    },
    {
      num: '03 —',
      title: 'Cambio de Aceite y Limpieza',
      desc: 'Aceite Toyota/Lexus SAE 5W-30 semi-sintético. Limpieza y detallado completo del motor.',
      tag: 'Aceite',
      beforeImg: '/media/galeria/trabajo_5.png',
      afterImg: '/media/galeria/trabajo_6.png',
      beforeLabel: 'PROCESO',
      afterLabel: 'LISTO'
    }
  ]

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

              <BeforeAfterSlider 
                beforeImg={trabajo.beforeImg}
                afterImg={trabajo.afterImg}
                beforeLabel={trabajo.beforeLabel}
                afterLabel={trabajo.afterLabel}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryNew

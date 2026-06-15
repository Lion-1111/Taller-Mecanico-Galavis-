import React, { useRef, useState } from 'react'

/* ─── Before/After Slider ─────────────────────────────────────────── */
const BeforeAfterSlider = ({ imgBefore, imgAfter, labelBefore = 'ANTES', labelAfter = 'DESPUÉS' }) => {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)
  const rafId = useRef(null)
  const pendingX = useRef(null)

  const calcPos = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    return (x / rect.width) * 100
  }

  const flush = () => {
    if (pendingX.current !== null) {
      setPos(calcPos(pendingX.current))
      pendingX.current = null
    }
    rafId.current = null
  }

  const onPointerDown = (e) => {
    isDragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (!isDragging.current) return
    pendingX.current = e.clientX
    if (!rafId.current) rafId.current = requestAnimationFrame(flush)
  }

  const onPointerUp = () => {
    isDragging.current = false
    if (rafId.current) { cancelAnimationFrame(rafId.current); rafId.current = null }
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{
        position: 'relative', width: '100%', aspectRatio: '16/9',
        overflow: 'hidden', borderRadius: '6px',
        cursor: 'col-resize', userSelect: 'none',
        touchAction: 'pan-y',  /* permite scroll vertical libremente */
        background: '#111',
        willChange: 'transform',
      }}
    >
      {/* Hint bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
        textAlign: 'center', padding: '8px 0',
        fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.4)',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)',
        pointerEvents: 'none', textTransform: 'uppercase',
      }}>
        ◀ {labelBefore} &nbsp;|&nbsp; {labelAfter} ▶
      </div>

      {/* After image */}
      <img src={imgAfter} alt={labelAfter} draggable={false}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />

      {/* Before image (clipped con clip-path — GPU) */}
      <img src={imgBefore} alt={labelBefore} draggable={false}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
        }} />

      {/* Divider */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0,
        left: `${pos}%`, transform: 'translateX(-50%)',
        width: '1px', background: 'rgba(255,255,255,0.6)',
        zIndex: 5, pointerEvents: 'none',
      }} />

      {/* Handle */}
      <div style={{
        position: 'absolute', top: '50%', left: `${pos}%`,
        transform: 'translate(-50%, -50%)',
        width: '34px', height: '34px', borderRadius: '50%',
        background: '#fff', zIndex: 6, cursor: 'col-resize',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.45)', pointerEvents: 'none',
      }}>
        <svg width="13" height="9" viewBox="0 0 14 10" fill="none">
          <path d="M1 5H13M1 5L4 2M1 5L4 8M13 5L10 2M13 5L10 8" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Badges */}
      <div style={{
        position: 'absolute', top: '10px', left: '10px', zIndex: 7,
        background: 'rgba(0,0,0,0.55)', color: 'rgba(255,255,255,0.8)',
        fontSize: '9px', fontWeight: '600', letterSpacing: '0.13em',
        padding: '3px 8px', borderRadius: '3px', textTransform: 'uppercase',
        backdropFilter: 'blur(4px)', pointerEvents: 'none',
      }}>{labelBefore}</div>

      <div style={{
        position: 'absolute', top: '10px', right: '10px', zIndex: 7,
        background: 'rgba(0,0,0,0.55)', color: 'rgba(255,255,255,0.8)',
        fontSize: '9px', fontWeight: '600', letterSpacing: '0.13em',
        padding: '3px 8px', borderRadius: '3px', textTransform: 'uppercase',
        backdropFilter: 'blur(4px)', pointerEvents: 'none',
      }}>{labelAfter}</div>
    </div>
  )
}

/* ─── Photo Grid ──────────────────────────────────────────────────── */
const PhotoGrid = ({ fotos, onOpen }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '4px',
    marginTop: '4px',
    contain: 'layout',
  }}>
    {fotos.map((f, i) => (
      <div
        key={i}
        onClick={() => onOpen(f.img)}
        style={{
          position: 'relative', overflow: 'hidden',
          borderRadius: '4px', cursor: 'pointer',
          background: '#111', aspectRatio: '4/3',
        }}
      >
        <img src={f.img} alt={f.caption || ''} loading="lazy" decoding="async"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transition: 'transform 0.35s ease',
            willChange: 'transform',
          }}
          onMouseEnter={e => { e.target.style.transform = 'scale(1.04)' }}
          onMouseLeave={e => { e.target.style.transform = 'scale(1)' }}
        />
        {f.caption && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '18px 10px 6px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            fontSize: '10px', color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.02em', pointerEvents: 'none',
          }}>{f.caption}</div>
        )}
      </div>
    ))}
  </div>
)

/* ─── Step Indicator ──────────────────────────────────────────────── */
const StepIndicator = ({ steps }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '50%',
            background: step.active ? '#e8e8e8' : '#1e1e1e',
            border: step.active ? 'none' : '1px solid #2e2e2e',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '12px', fontWeight: '600',
            color: step.active ? '#0a0a0a' : '#444',
          }}>{i + 1}</div>
          <div style={{
            fontSize: '9px', letterSpacing: '0.1em', marginTop: '5px',
            color: step.active ? '#bbb' : '#3a3a3a',
            textTransform: 'uppercase',
          }}>{step.label}</div>
        </div>
        {i < steps.length - 1 && (
          <div style={{ flex: 2, height: '1px', background: '#1e1e1e', marginBottom: '16px' }} />
        )}
      </React.Fragment>
    ))}
  </div>
)

/* ─── Sub-label ───────────────────────────────────────────────────── */
const SubLabel = ({ text }) => (
  <div style={{
    fontSize: '9px', letterSpacing: '0.18em', color: '#3a3a3a',
    textTransform: 'uppercase', marginTop: '12px', marginBottom: '4px',
  }}>{text}</div>
)

/* ─── Main Gallery ────────────────────────────────────────────────── */
const Gallery = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')
  const [visible, setVisible] = useState(true)

  const openLightbox = (src) => { setLightboxImage(src); setLightboxOpen(true) }
  const closeLightbox = () => setLightboxOpen(false)

  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') closeLightbox() }
    document.addEventListener('keydown', h)
    return () => document.removeEventListener('keydown', h)
  }, [])

  const switchTab = (i) => {
    if (i === activeTab) return
    setVisible(false)
    setTimeout(() => { setActiveTab(i); setVisible(true) }, 180)
  }

  const tabs = [
    {
      label: 'Diagnóstico',
      num: 'Servicio 01',
      title: 'Diagnóstico con Escáner',
      desc: 'Lectura de códigos de falla con equipo Launch Professional. Detectamos el problema antes de tocar una pieza.',
      content: 'diagnostico',
    },
    {
      label: 'Motores',
      num: 'Servicio 02',
      title: 'Reparación de Motores',
      desc: 'Desmontaje, rectificación y armado completo. Desliza para comparar antes y después.',
      content: 'motores',
    },
    {
      label: 'Banda',
      num: 'Servicio 03',
      title: 'Reemplazo de Banda',
      desc: 'Kit original Audi/VW. Proceso completo documentado paso a paso.',
      steps: [
        { label: 'Antes', active: true },
        { label: 'Proceso', active: false },
        { label: 'Después', active: true },
      ],
      content: 'banda',
    },
    {
      label: 'Aceite',
      num: 'Servicio 04',
      title: 'Cambio de Aceite',
      desc: 'Aceite Toyota/Lexus SAE 5W-30 semi-sintético. Limpieza y detallado completo del motor.',
      content: 'aceite',
    },
  ]

  const renderContent = (tab) => {
    switch (tab.content) {

      case 'diagnostico':
        return (
          <div>
            <div
              onClick={() => openLightbox('/media/galeria/trabajo_1.jpg')}
              style={{ borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', aspectRatio: '16/7', background: '#111' }}
            >
              <img src="/media/galeria/trabajo_1.jpg" alt="Escáner Launch Professional"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  transition: 'transform 0.4s ease' }}
                onMouseEnter={e => { e.target.style.transform = 'scale(1.03)' }}
                onMouseLeave={e => { e.target.style.transform = 'scale(1)' }}
              />
            </div>
            <PhotoGrid
              fotos={[
                { img: '/media/galeria/trabajo_2.jpg', caption: 'Sensor Injetech' },
                { img: '/media/galeria/trabajo_3.jpg', caption: 'Interior VW' },
                { img: '/media/galeria/diagnostico_extra.jpg', caption: 'Diagnóstico' },
              ]}
              onOpen={openLightbox}
            />
          </div>
        )

      case 'motores':
        return (
          <div>
            <BeforeAfterSlider
              imgBefore="/media/galeria/trabajo_5.png"
              imgAfter="/media/galeria/motor_despues.jpg"
            />
            <SubLabel text="Proceso" />
            <PhotoGrid
              fotos={[
                { img: '/media/galeria/trabajo_6.png', caption: 'Motor abierto' },
                { img: '/media/galeria/trabajo_7.png', caption: 'Desmontaje' },
                { img: '/media/galeria/trabajo_8.png', caption: 'Piezas' },
                { img: '/media/galeria/trabajo_9.png', caption: 'Cabeza armada' },
                { img: '/media/galeria/trabajo_10.png', caption: 'Motor listo' },
                { img: '/media/galeria/trabajo_11.png', caption: 'En caballete' },
              ]}
              onOpen={openLightbox}
            />
          </div>
        )

      case 'banda':
        return (
          <div>
            <BeforeAfterSlider
              imgBefore="/media/galeria/banda_antes.jpg"
              imgAfter="/media/galeria/trabajo_12.jpg"
            />
            <SubLabel text="Proceso" />
            <PhotoGrid
              fotos={[
                { img: '/media/galeria/trabajo_14.jpg', caption: 'Capó abierto' },
                { img: '/media/galeria/trabajo_15.jpg', caption: 'Engranaje' },
                { img: '/media/galeria/trabajo_16.jpg', caption: 'En proceso' },
                { img: '/media/galeria/trabajo_17.jpg', caption: 'Tensor nuevo' },
                { img: '/media/galeria/trabajo_18.jpg', caption: 'Kit original' },
                { img: '/media/galeria/trabajo_19.jpg', caption: 'Banda instalada' },
              ]}
              onOpen={openLightbox}
            />
          </div>
        )

      case 'aceite':
        return (
          <div>
            <BeforeAfterSlider
              imgBefore="/media/galeria/trabajo_21.png"
              imgAfter="/media/galeria/trabajo_20.png"
              labelBefore="PROCESO"
              labelAfter="LISTO"
            />
            <SubLabel text="Fotos" />
            <PhotoGrid
              fotos={[
                { img: '/media/galeria/trabajo_22.png', caption: 'Aceite 5W-30' },
                { img: '/media/galeria/trabajo_23.png', caption: 'Vaciado' },
                { img: '/media/galeria/trabajo_24.png', caption: 'Motor detallado' },
                { img: '/media/galeria/trabajo_25.png', caption: 'Listo' },
              ]}
              onOpen={openLightbox}
            />
          </div>
        )

      default: return null
    }
  }

  const tab = tabs[activeTab]

  return (
    <section id="galeria" style={{ background: '#0a0a0a', padding: '72px 0 80px' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 20px' }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: '40px', borderBottom: '1px solid #1a1a1a', paddingBottom: '28px' }}>
          <span style={{
            fontSize: '10px', letterSpacing: '0.2em', color: '#555',
            textTransform: 'uppercase', display: 'block', marginBottom: '10px',
          }}>
            Nuestro trabajo
          </span>
          <h2 style={{
            fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: '700',
            letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 16px',
            fontFamily: "'Anton', sans-serif", color: '#e8e8e8',
          }}>
            Galería del Taller
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '1px', height: '32px', background: '#2e2e2e' }} />
            <div>
              <div style={{
                fontSize: '13px', fontWeight: '600', color: '#c8c8c8',
                letterSpacing: '0.04em', textTransform: 'uppercase',
                fontFamily: "'Anton', sans-serif",
              }}>
                Josué Galaviz Rosas
              </div>
              <div style={{ fontSize: '11px', color: '#444', marginTop: '2px' }}>
                Mecánica automotriz · Desde 2009 · Teziutlán, Pue.
              </div>
            </div>
          </div>
        </div>

        {/* ── Tab bar (underline style) ── */}
        <div style={{
          display: 'flex', gap: '0',
          overflowX: 'auto', overflowY: 'hidden',
          marginBottom: '28px',
          borderBottom: '1px solid #1a1a1a',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        }}>
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => switchTab(i)}
              style={{
                padding: '10px 20px', background: 'none', border: 'none',
                borderBottom: activeTab === i ? '2px solid #e8e8e8' : '2px solid transparent',
                color: activeTab === i ? '#e8e8e8' : '#444',
                fontSize: '12px', fontWeight: activeTab === i ? '600' : '400',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                cursor: 'pointer', whiteSpace: 'nowrap',
                transition: 'color 0.2s ease, border-color 0.2s ease',
                marginBottom: '-1px',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Tab content ── */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
        }}>
          {/* Service header */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{
              fontSize: '10px', letterSpacing: '0.14em', color: '#444',
              textTransform: 'uppercase', marginBottom: '4px',
            }}>
              {tab.num}
            </div>
            <div style={{
              fontSize: 'clamp(20px, 3.5vw, 28px)', fontWeight: '700',
              color: '#e8e8e8', letterSpacing: '-0.01em', lineHeight: 1.1,
              fontFamily: "'Anton', sans-serif", textTransform: 'uppercase',
              marginBottom: '8px',
            }}>
              {tab.title}
            </div>
            <p style={{ fontSize: '12px', color: '#555', margin: 0, lineHeight: 1.7, maxWidth: '520px' }}>
              {tab.desc}
            </p>
          </div>

          {/* Steps (solo Banda) */}
          {tab.steps && <StepIndicator steps={tab.steps} />}

          {/* Content */}
          {renderContent(tab)}
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)',
            zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: 'fixed', top: '18px', right: '22px',
              background: 'none', border: '1px solid #2e2e2e', borderRadius: '4px',
              color: '#aaa', fontSize: '18px', cursor: 'pointer',
              width: '36px', height: '36px', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>
          <img
            src={lightboxImage}
            alt="Vista ampliada"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '92vw', maxHeight: '92vh', objectFit: 'contain', borderRadius: '4px' }}
          />
        </div>
      )}
    </section>
  )
}

export default Gallery

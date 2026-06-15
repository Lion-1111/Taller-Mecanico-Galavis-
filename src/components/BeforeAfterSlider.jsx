import React, { useRef, useState, useEffect } from 'react'

const BeforeAfterSlider = ({ beforeImg, afterImg, beforeLabel = 'PROCESO', afterLabel = 'LISTO' }) => {
  const containerRef = useRef(null)
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleStart = (e) => {
    setIsDragging(true)
    e.preventDefault()
  }

  const handleMove = (e) => {
    if (!isDragging || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches ? e.touches[0].clientX : e.clientX
    const newPosition = Math.max(0, Math.min(((x - rect.left) / rect.width) * 100, 100))
    setPosition(newPosition)
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMove)
      document.addEventListener('touchmove', handleMove, { passive: false })
      document.addEventListener('mouseup', handleEnd)
      document.addEventListener('touchend', handleEnd)
      
      return () => {
        document.removeEventListener('mousemove', handleMove)
        document.removeEventListener('touchmove', handleMove)
        document.removeEventListener('mouseup', handleEnd)
        document.removeEventListener('touchend', handleEnd)
      }
    }
  }, [isDragging])

  return (
    <div className="ba-wrap">
      <div 
        ref={containerRef}
        className="ba-container"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        style={{ 
          position: 'relative',
          width: '100%',
          aspectRatio: '4/3',
          borderRadius: '12px',
          overflow: 'hidden',
          cursor: 'col-resize',
          border: '0.5px solid rgba(255,255,255,0.1)',
          userSelect: 'none'
        }}
      >
        {/* Imagen de después (fondo) */}
        <img 
          src={afterImg} 
          alt="Después" 
          className="ba-after"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
        
        {/* Imagen de antes (superpuesta con clip) */}
        <div 
          className="ba-before-wrap"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: `${position}%`,
            overflow: 'hidden',
            pointerEvents: 'none'
          }}
        >
          <img 
            src={beforeImg} 
            alt="Antes" 
            className="ba-before"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transform: `scaleX(${100 / position})`
            }}
          />
        </div>
        
        {/* Línea divisoria naranja */}
        <div 
          className="ba-divider"
          style={{
            position: 'absolute',
            top: 0,
            left: `${position}%`,
            width: '2px',
            height: '100%',
            background: '#FF5F1F',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            zIndex: 10
          }}
        />
        
        {/* Manija de arrastre */}
        <div 
          className="ba-handle"
          style={{
            position: 'absolute',
            top: '50%',
            left: `${position}%`,
            transform: 'translate(-50%, -50%)',
            width: '40px',
            height: '40px',
            background: '#FF5F1F',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
            pointerEvents: 'none',
            zIndex: 10
          }}
        >
          ⟺
        </div>
        
        {/* Etiqueta "PROCESO" (izquierda) */}
        <span 
          className="ba-badge ba-badge-left"
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            padding: '4px 10px',
            borderRadius: '20px',
            background: 'rgba(0,0,0,0.7)',
            color: '#ff8888',
            border: '0.5px solid rgba(255,100,100,0.3)',
            fontSize: '10px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            zIndex: 5
          }}
        >
          {beforeLabel}
        </span>
        
        {/* Etiqueta "LISTO" (derecha) */}
        <span 
          className="ba-badge ba-badge-right"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '4px 10px',
            borderRadius: '20px',
            background: 'rgba(0,0,0,0.7)',
            color: '#88ff88',
            border: '0.5px solid rgba(100,255,100,0.3)',
            fontSize: '10px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            zIndex: 5
          }}
        >
          {afterLabel}
        </span>
      </div>
    </div>
  )
}

export default BeforeAfterSlider

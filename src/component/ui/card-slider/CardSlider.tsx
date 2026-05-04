import { useState, useEffect, type ReactNode } from 'react'
import React from 'react'
import './CardSlider.css'

const useVisible = () => {
  const get = () => {
    if (typeof window === 'undefined') return 1
    if (window.matchMedia('(min-width: 1280px)').matches) return 3
    if (window.matchMedia('(min-width: 768px)').matches) return 2
    return 1
  }
  const [v, setV] = useState(get)
  useEffect(() => {
    const fn = () => setV(get())
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return v
}

const CardSlider = ({ children }: { children: ReactNode }) => {
  const items = React.Children.toArray(children)
  const total = items.length
  const visible = useVisible()
  const pages = Math.ceil(total / visible)
  const [page, setPage] = useState(0)

  useEffect(() => {
    setPage(p => Math.min(p, pages - 1))
  }, [pages])

  return (
    <div className="card-slider">
      <div className="card-slider-row">
        {pages > 1 && (
          <button
            className="card-slider-btn"
            onClick={() => setPage(p => p - 1)}
            disabled={page === 0}
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
        )}

        <div className="card-slider-viewport">
          <div
            className="card-slider-track"
            style={
              { '--visible': visible, transform: `translateX(-${page * 100}%)` } as React.CSSProperties
            }
          >
            {items.map((item, i) => (
              <div key={i} className="card-slider-item">
                {item}
              </div>
            ))}
          </div>
        </div>

        {pages > 1 && (
          <button
            className="card-slider-btn"
            onClick={() => setPage(p => p + 1)}
            disabled={page === pages - 1}
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        )}
      </div>

      {pages > 1 && (
        <div className="card-slider-dots">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              className={`card-slider-dot${i === page ? ' card-slider-dot--active' : ''}`}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CardSlider

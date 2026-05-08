import { useState } from 'react'
import { createPortal } from 'react-dom'
import './ImageSlider.css'

interface SlideImage {
  src: string
  alt: string
}

interface ImageSliderProps {
  images: SlideImage[]
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [current, setCurrent] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const multi = images.length > 1

  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)
  const next = () => setCurrent(i => (i + 1) % images.length)

  return (
    <>
      <div className="slider">
        <div className="slider-frame">
          <img
            key={current}
            src={images[current].src}
            alt={images[current].alt}
            className="slider-img slider-img--clickable"
            onClick={() => setModalOpen(true)}
          />
          {multi && (
            <>
              <button onClick={prev} className="slider-arrow slider-arrow--prev" aria-label="Previous image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button onClick={next} className="slider-arrow slider-arrow--next" aria-label="Next image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </>
          )}
        </div>
        {multi && (
          <div className="slider-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`slider-dot${i === current ? ' slider-dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Image ${i + 1} of ${images.length}`}
              />
            ))}
          </div>
        )}
      </div>

      {modalOpen && createPortal(
        <div
          className="slider-modal"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={images[current].alt}
        >
          <button
            className="slider-modal-close"
            onClick={() => setModalOpen(false)}
            aria-label="Close preview"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="slider-modal-img"
            onClick={e => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  )
}

export default ImageSlider

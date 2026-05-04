import { useState } from 'react'
import SectionTitle from "../../component/common/section-title/SectionTitle"
import "./DesignProcess.css"

interface DesignSlide {
  src: string
  alt: string
  badge: string
  caption: string
}

const slides: DesignSlide[] = [
  {
    src: './img/design-process/design-01.png',
    alt: 'Affinity Mapping',
    badge: '01 · Research',
    caption: 'Affinity Mapping — clustered user needs and pain points into key themes',
  },
  {
    src: './img/design-process/design-02.png',
    alt: 'Problem Prioritize Matrix',
    badge: '02 · Research',
    caption: 'Priority Matrix — ranked problems by impact vs. effort to define scope',
  },
  {
    src: './img/design-process/design-03.png',
    alt: 'Site Map',
    badge: '03 · Architecture',
    caption: 'Site Map — mapped the full content hierarchy before any visual work began',
  },
  {
    src: './img/design-process/design-04.png',
    alt: 'Color Palette',
    badge: '04 · Design System',
    caption: 'Color Palette — defined brand colors with semantic meaning for each tone',
  },
  {
    src: './img/design-process/design-05.png',
    alt: 'Typography',
    badge: '05 · Design System',
    caption: 'Typography — set the type scale using Raleway for headings, Montserrat for body',
  },
  {
    src: './img/design-process/design-06.png',
    alt: 'Lofi Wireframes',
    badge: '06 · Wireframes',
    caption: 'Lofi Wireframes — validated layout and content structure before visual styling',
  },
  {
    src: './img/design-process/design-07.png',
    alt: 'Hi-Fi Design — Fasilitas',
    badge: '07 · Visual Design',
    caption: 'Hi-Fi Mockup — translated wireframes into finished UI for the Fasilitas page',
  },
  {
    src: './img/design-process/design-08.png',
    alt: 'Hi-Fi Design — Services',
    badge: '08 · Visual Design',
    caption: 'Hi-Fi Mockup — applied the design system across all service page variants',
  },
]

const DesignProcess = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length)
  const next = () => setCurrent(i => (i + 1) % slides.length)

  const slide = slides[current]

  return (
    <section id="design-process" className="design-process-section">
      <div className="design-process-container">
      <div className="design-process-header">
        <SectionTitle>Design Process</SectionTitle>
        <p className="design-process-intro">
          Before writing a single line of code, I go through a structured design thinking workflow —
          starting from user research and information architecture, through wireframing, and into
          high-fidelity visual design. The slides below walk through how the OBM Company Profile
          was designed end-to-end.
        </p>
        <a
          href="https://www.figma.com/design/RTi874nNGomEYkrUUrhDD3/Wireframe-Edisi-Revisi-Revisi?m=auto&t=chVvYueggK7uKMIr-6"
          target="_blank"
          rel="noopener noreferrer"
          className="design-figma-btn"
        >
          <svg className="design-figma-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#FF3A3A" />
            <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
          </svg>
          View in Figma
        </a>
      </div>
      <div className="design-slider">
        <div className="design-slider-frame">
          <img
            key={current}
            src={slide.src}
            alt={slide.alt}
            className="design-slider-img"
          />
          <span className="design-slide-badge">{slide.badge}</span>
          <button onClick={prev} className="design-slider-arrow design-slider-arrow--prev" aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button onClick={next} className="design-slider-arrow design-slider-arrow--next" aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
        <div className="design-slider-footer">
          <p className="design-slide-caption">{slide.caption}</p>
          <div className="design-slider-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`design-slider-dot${i === current ? ' design-slider-dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1} of ${slides.length}`}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default DesignProcess

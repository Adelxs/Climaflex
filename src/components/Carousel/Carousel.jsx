import { useState, useEffect } from 'react'
import styles from './Carousel.module.css'

const slides = [
  { img: '/img/img1.jpeg', label: 'Compresores de refrigeración' },
  { img: '/img/img2.jpeg', label: 'Unidades evaporadoras' },
  { img: '/img/img3.jpeg', label: 'Condensadores industriales' },
  { img: '/img/img4.jpeg', label: 'Tableros eléctricos' },
  { img: '/img/img5.jpeg', label: 'Verificación de presiones' },
  { img: '/img/img6.jpeg', label: 'Control de gas refrigerante' },
  { img: '/img/img7.jpeg', label: 'Sistemas de refrigeración comercial' }
]

function Carousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)
  const next = () => setCurrent((current + 1) % slides.length)

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>

      
        {/* Slides */}
     <div className={styles.track}>
          <div
            className={styles.slidesInner}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className={styles.slide}>
                <img src={slide.img} alt={slide.label} className={styles.img} />
                <div className={styles.overlay}>
                  <span className={styles.slideLabel}>{slide.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones */}
        <button className={`${styles.btn} ${styles.btnLeft}`} onClick={prev}>‹</button>
        <button className={`${styles.btn} ${styles.btnRight}`} onClick={next}>›</button>

        {/* Dots */}
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Carousel
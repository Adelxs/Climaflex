import styles from './Services.module.css'
import { useState } from 'react'

const services = [
  {
    color: 'red',
    icon: '❄️',
    title: 'Refrigeradores',
    desc: 'Diagnóstico y reparación de todo tipo de refrigeradores y congeladores domésticos y comerciales.',
    items: [
      'Carga y recarga de gas refrigerante',
      'Cambio de termostatos y sensores',
      'Reparación de compresor',
      'Cambio de resistencias y ventiladores',
      'Limpieza profunda del evaporador',
    ],
    detalle: {
      intro: 'Nuestro servicio de refrigeración cubre todo tipo de equipos domésticos y comerciales. Contamos con técnicos especializados y repuestos disponibles para la mayoría de las marcas del mercado.',
      marcas: ['Samsung', 'LG', 'Mabe', 'Fensa', 'Whirlpool', 'Bosch'],
      garantia: '3 meses en mano de obra y repuestos instalados.',
      tiempo: 'Diagnóstico en el mismo día, reparación en 24 a 48 hrs según disponibilidad de repuestos.',
    },
  },
  {
    color: 'blue',
    icon: '🌬️',
    title: 'Aires Acondicionados',
    desc: 'Instalación, mantenimiento y reparación de sistemas split y equipos de ventana.',
    items: [
      'Instalación de equipos nuevos',
      'Limpieza de filtros y evaporador',
      'Recarga de gas freón',
      'Reparación de fallas eléctricas',
      'Revisión del sistema de drenaje',
    ],
    detalle: {
      intro: 'Instalamos y reparamos todo tipo de sistemas de climatización, desde equipos split residenciales hasta sistemas de mayor capacidad para locales comerciales.',
      marcas: ['Inverter', 'Midea', 'Carrier', 'Rheem', 'Daikin', 'Fujitsu'],
      garantia: '6 meses en instalación y 3 meses en reparaciones.',
      tiempo: 'Instalación coordinada según disponibilidad, reparaciones en 24 hrs.',
    },
  },
  {
    color: 'orange',
    icon: '🔧',
    title: 'Mantenimiento Preventivo',
    desc: 'Programas de mantenimiento para alargar la vida útil de tus equipos y evitar fallas costosas.',
    items: [
      'Revisión general del sistema',
      'Limpieza de serpentines',
      'Verificación de presiones',
      'Control de temperatura y consumo',
      'Informe de estado del equipo',
    ],
    detalle: {
      intro: 'El mantenimiento preventivo es la mejor inversión para tus equipos. Evita fallas inesperadas, reduce el consumo eléctrico y alarga la vida útil de refrigeradores y aires acondicionados.',
      marcas: ['Todas las marcas del mercado'],
      garantia: 'Informe escrito del estado del equipo incluido en cada visita.',
      tiempo: 'Visita programada según conveniencia del cliente.',
    },
  },
  {
    color: 'yellow',
    icon: '⚡',
    title: 'Servicio de Urgencia',
    desc: '¿Tu equipo falló en el peor momento? Atención rápida para restaurar el funcionamiento a la brevedad.',
    items: [
      'Atención el mismo día',
      'Diagnóstico en terreno',
      'Repuestos disponibles',
      'Disponible fines de semana',
      'Presupuesto sin costo',
    ],
    detalle: {
      intro: 'Sabemos que una falla en el momento menos esperado puede ser crítica, especialmente en negocios. Por eso ofrecemos atención de urgencia con respuesta rápida los 7 días de la semana.',
      marcas: ['Todas las marcas del mercado'],
      garantia: 'Presupuesto sin costo antes de iniciar cualquier trabajo.',
      tiempo: 'Respuesta en menos de 2 horas dentro de las comunas atendidas.',
    },
  },
]
const marcas = [
  { nombre: 'Samsung', dominio: 'samsung.com'},
  { nombre: 'LG', dominio: 'lg.com' },
  { nombre: 'Mabe', dominio: 'mabe.com' },
  { nombre: 'Fensa', dominio: 'fensa.cl' },
  { nombre: 'Whirlpool', dominio: 'whirlpool.com' },
  { nombre: 'Bosch', dominio: 'bosch.com' },
  { nombre: 'Carrier', dominio: 'carrier.com' },
  { nombre: 'Daikin', dominio: 'daikin.com' },
  { nombre: 'Midea', dominio: 'midea.com' },
  { nombre: 'Fujitsu', dominio: 'fujitsu.com' },
  { nombre: 'Rheem', dominio: 'rheem.com' },
  { nombre: 'Electrolux', dominio: 'electrolux.com' },
]



function Services() {
  const [selected, setSelected] = useState(null)

  return (
    <section className={styles.section} id="servicios">
      <div className={styles.container}>
        <p className={styles.label}>Lo que hacemos</p>
        <h2 className={styles.title}>Nuestros <em>servicios</em></h2>
        <p className={styles.desc}>
          Atendemos todo tipo de equipos de refrigeración y climatización,
          tanto para hogares como para negocios.
        </p>
        <div className={styles.grid}>
          {services.map((s) => (
            <div
              key={s.title}
              className={`${styles.card} ${styles[s.color]}`}
              onClick={() => setSelected(s)}
            >
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className={styles.list}>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className={styles.verMas}>Ver más detalles →</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className={styles.overlay} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelected(null)}>✕</button>
            <div className={`${styles.modalHeader} ${styles[selected.color]}`}>
              <span className={styles.modalIcon}>{selected.icon}</span>
              <h3>{selected.title}</h3>
            </div>
            <div className={styles.modalBody}>
              <p className={styles.modalIntro}>{selected.detalle.intro}</p>

              <div className={styles.modalSection}>
                <h4>¿Qué incluye?</h4>
                <ul className={styles.modalList}>
                  {selected.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <h4>Marcas que atendemos</h4>
                <div className={styles.marcasList}>
                  {selected.detalle.marcas.map((m) => (
                    <span key={m} className={styles.marcaTag}>{m}</span>
                  ))}
                </div>
              </div>

              <div className={styles.modalGrid}>
                <div className={styles.modalInfo}>
                  <span>🛡️</span>
                  <div>
                    <h5>Garantía</h5>
                    <p>{selected.detalle.garantia}</p>
                  </div>
                </div>
                <div className={styles.modalInfo}>
                  <span>⏱️</span>
                  <div>
                    <h5>Tiempo de respuesta</h5>
                    <p>{selected.detalle.tiempo}</p>
                  </div>
                </div>
              </div>

              <a
                href="#contacto"
                className={styles.modalCta}
                onClick={() => setSelected(null)}>
              
                Solicitar este servicio →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Slider de marcas */}
      <div className={styles.sliderWrapper}>
        <p className={styles.sliderLabel}>Marcas que atendemos</p>
        <div className={styles.sliderTrack}>
          <div className={styles.sliderContent}>
            {[...marcas, ...marcas].map((m, i) => (
             <div key={i} className={styles.marcaItem}>
              <img
                  src={m.logo ? m.logo : `https://www.google.com/s2/favicons?domain=${m.dominio}&sz=128`}
                  alt={m.nombre}
                  className={styles.marcaLogo}
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              <span className={styles.marcaNombre}>{m.nombre}</span>
            </div>
            ))}
          </div>
        </div>
      </div>
    
    </section>
  )
}

export default Services
import styles from './WhyUs.module.css'

const features = [
  { icon: '🏅', title: 'Técnicos certificados', desc: 'Formación técnica especializada en refrigeración y climatización con experiencia comprobada.' },
  { icon: '🛡️', title: 'Garantía en todos los trabajos', desc: 'Respaldamos cada reparación e instalación con garantía escrita para tu tranquilidad.' },
  { icon: '💬', title: 'Atención personalizada', desc: 'Comunicación directa desde el diagnóstico hasta la entrega. Sin intermediarios.' },
]

const reasons = [
  { accent: 'blue', title: 'Presupuesto gratuito sin compromiso', desc: 'Evaluamos tu equipo en terreno y te entregamos un presupuesto claro antes de iniciar cualquier trabajo.' },
  { accent: 'blue', title: 'Repuestos originales y compatibles', desc: 'Trabajamos con proveedores confiables para garantizar que los repuestos sean de calidad y larga duración.' },
  { accent: 'red',  title: 'Puntualidad y orden en cada visita', desc: 'Llegamos a la hora acordada, trabajamos con cuidado y dejamos el lugar tal como lo encontramos.' },
  { accent: 'orange', title: 'Precios justos y transparentes', desc: 'Cobros claros, sin sorpresas. Siempre te explicamos qué necesita tu equipo y cuánto costará.' },
]

function WhyUs() {
  return (
    <section className={styles.section} id="nosotros">
      <div className={styles.container}>
        <p className={styles.label}>¿Por qué elegirnos?</p>
        <h2 className={styles.title}>Técnicos que <em>saben lo que hacen</em></h2>
        <div className={styles.layout}>
          <div className={styles.visual}>
            <div className={styles.visualBg}>CF</div>
            <h3 className={styles.visualTitle}>Compromiso con cada trabajo</h3>
            {features.map((f) => (
              <div key={f.title} className={styles.feature}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.list}>
            {reasons.map((r) => (
              <div key={r.title} className={`${styles.item} ${styles[r.accent]}`}>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
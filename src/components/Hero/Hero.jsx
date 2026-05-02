import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.bgText}>CLIMAFLEX</div>
      <div className={styles.content}>
        <span className={styles.badge}>🌡️ Servicio técnico profesional</span>
        <h1 className={styles.title}>
          Frío, calor.<br /><span>Siempre</span> a punto.
        </h1>
        <p className={styles.desc}>
          Instalación, reparación y mantenimiento de refrigeradores y aires acondicionados.
          Soluciones rápidas, precios justos y garantía en cada trabajo.
        </p>
        <div className={styles.actions}>
          <a href="#contacto" className={styles.btnPrimary}>Pide una cotización</a>
          <a href="#servicios" className={styles.btnOutline}>Ver servicios</a>
        </div>
        <div className={styles.stats}>
          {[
            { num: '+500', label: 'Clientes atendidos' },
            { num: '+8',   label: 'Años de experiencia' },
            { num: '100%', label: 'Garantía en trabajos' },
            { num: '24h',  label: 'Respuesta urgente' },
          ].map((s) => (
            <div className={styles.stat} key={s.label}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
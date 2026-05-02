import styles from './Gallery.module.css'

const items = [
  { label: 'Instalación split residencial',    icon: '🌡️', span: 'tall',  bg: 'linear-gradient(160deg,#1A237E,#1565C0)' },
  { label: 'Reparación de refrigerador',        icon: '❄️', span: '',     bg: 'linear-gradient(160deg,#BF360C,#E64A19)' },
  { label: 'Cámara frigorífica',                icon: '🏪', span: '',     bg: 'linear-gradient(160deg,#1B5E20,#2E7D32)' },
  { label: 'Mantenimiento preventivo multi-equipo', icon: '🔧', span: 'wide', bg: 'linear-gradient(160deg,#4A148C,#6A1B9A)' },
  { label: 'Diagnóstico eléctrico',             icon: '⚡', span: '',     bg: 'linear-gradient(160deg,#E65100,#F57C00)' },
  { label: 'Limpieza profunda A/C',             icon: '💨', span: '',     bg: 'linear-gradient(160deg,#006064,#00838F)' },
]

function Gallery() {
  return (
    <section className={styles.section} id="galeria">
      <div className={styles.container}>
        <p className={styles.label}>Nuestros trabajos</p>
        <h2 className={styles.title}>Resultados que <em>hablan solos</em></h2>
        <p className={styles.desc}>Una muestra de los equipos que hemos instalado, reparado y mantenido.</p>
        <div className={styles.grid}>
          {items.map((item) => (
            <div
              key={item.label}
              className={`${styles.item} ${item.span ? styles[item.span] : ''}`}
              style={{ background: item.bg }}
            >
              <div className={styles.placeholder}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.itemLabel}>{item.label}</span>
              </div>
              <div className={styles.overlay}>
                <span className={styles.overlayText}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <a href="#contacto" className={styles.btn}>Solicita un presupuesto</a>
          <p className={styles.note}>¿Quieres ver más trabajos? Contáctanos por WhatsApp y te enviamos más fotos.</p>
        </div>
      </div>
    </section>
  )
}

export default Gallery
import styles from './Navbar.module.css'

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        {/*<span className={styles.logoText}>CLIMAFLEX</span>*/}
        <img className={styles.img} src="/img/climaflex.jpeg" alt="" />
        <span className={styles.logoSub}>Refrigeración &amp; Climatización</span>
      </div>
      <div className={styles.links}>
        <a href="#servicios">Servicios</a>
        <a href="#galeria">Trabajos</a>
        <a href="#nosotros">Nosotros</a>
        
      </div>
      <button className={styles.cta} onClick={() => scrollTo('contacto')}>
        Solicitar Servicio
      </button>
    </nav>
  )
}

export default Navbar
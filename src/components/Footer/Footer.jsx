import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>CLIMAFLEX</div>
            <p>Sistema de Refrigeración y Climatización. Técnicos especializados a tu servicio.</p>
          </div>
          <div className={styles.links}>
            <h5>Servicios</h5>
            <ul>
              <li><a href="#servicios">Refrigeradores</a></li>
              <li><a href="#servicios">Aires Acondicionados</a></li>
              <li><a href="#servicios">Mantenimiento</a></li>
              <li><a href="#servicios">Urgencias</a></li>
            </ul>
          </div>
          <div className={styles.links}>
            <h5>Empresa</h5>
            <ul>
              <li><a href="#nosotros">¿Por qué nosotros?</a></li>
              <li><a href="#galeria">Trabajos realizados</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2025 Climaflex. Hecho con <span>♥</span> para nuestros clientes.</p>
          <p>Diseñado para destacar en cada trabajo.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
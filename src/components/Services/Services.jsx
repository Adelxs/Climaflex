import styles from './Services.module.css'

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
  },
]

function Services() {
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
            <div key={s.title} className={`${styles.card} ${styles[s.color]}`}>
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className={styles.list}>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
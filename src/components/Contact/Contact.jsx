import { useState } from 'react'
import styles from './Contact.module.css'

const WHATSAPP_NUMBER = '56958510594' // ← reemplaza con el número real (sin +)

const zones = ['Providencia','Santiago','Puente Alto','La Florida','San Bernardo','La Pintana','Peñalolen','Ñuñoa', 'Pirque', 'Buin', 'San Jose de Maipo', 'San Joaquin']

function Contact() {
  const [form, setForm] = useState({
    nombre: '', telefono: '', email: '', comuna: '',  servicio: '', mensaje: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    const { nombre, telefono, servicio, mensaje } = form
    if (!nombre || !telefono || !servicio) {
      alert('Por favor completa nombre, teléfono y tipo de servicio.')
      return
    }
    const text = [
      `*Solicitud de servicio - Climaflex*`,
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Comuna: ${form.comuna}`,
      `Servicio: ${servicio}`,
      mensaje ? `Detalle: ${mensaje}` : '',
    ].filter(Boolean).join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')

    setForm({ nombre: '', telefono: '', email: '', comuna: '', servicio: '', mensaje: '' })
  }

  return (
    <section className={styles.section} id="contacto">
      <div className={styles.container}>
        <p className={styles.label}>Habla con nosotros</p>
        <h2 className={styles.title}>Contáctanos y <em>resolvemos</em></h2>
        <p className={styles.desc}>Llénanos el formulario o escríbenos directamente. Respondemos rápido.</p>
        <div className={styles.layout}>

          {/* Info */}
          <div className={styles.info}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📱</div>
              <div>
                <h4>WhatsApp / Teléfono</h4>
                <a>+56 9 5851 0594</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📧</div>
              <div>
                <h4>Correo electrónico</h4>
                <a href="mailto:contacto@climaflex.cl">chilenavas.33@gmail.com</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>🕐</div>
              <div>
                <h4>Horario de atención</h4>
                <p>Lunes a Sábado: 8:00 – 19:00 hrs<br />Urgencias: disponible los 7 días</p>
              </div>
            </div>
            <div className={styles.zones}>
              <h4>Comunas atendidas</h4>
              <div className={styles.zonesList}>
                {zones.map((z) => <span key={z} className={styles.zoneTag}>{z}</span>)}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={styles.form}>
            <p className={styles.formTitle}>Solicita una visita técnica</p>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Nombre</label>
                <input name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label>Teléfono</label>
                <input name="telefono" placeholder="+56 9 ..." value={form.telefono} onChange={handleChange} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Correo electrónico</label>
              <input name="email" type="email" placeholder="tu@correo.com" value={form.email} onChange={handleChange} />
            </div>
            <div className={styles.formGroup}>
                  <label>Comuna</label>
                  <input
                    name="comuna"
                    placeholder="Tu comuna..."
                    value={form.comuna}
                    onChange={handleChange}
                  />
                </div>
            <div className={styles.formGroup}>
              <label>Tipo de servicio</label>
              <select name="servicio" value={form.servicio} onChange={handleChange}>
                <option value="">Selecciona un servicio...</option>
                <option>Reparación de refrigerador</option>
                <option>Instalación de aire acondicionado</option>
                <option>Reparación de aire acondicionado</option>
                <option>Mantenimiento preventivo</option>
                <option>Servicio de urgencia</option>
                <option>Otro</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Describe el problema</label>
              <textarea
                name="mensaje"
                placeholder="Cuéntanos brevemente qué está pasando con tu equipo..."
                value={form.mensaje}
                onChange={handleChange}
              />
            </div>
            <button className={styles.submit} onClick={handleSubmit}>
              Enviar por WhatsApp →
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
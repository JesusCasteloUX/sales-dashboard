export default function Configuracion() {
  return (
    <div className="main">
      <div className="main-header">
        <h2>Configuración</h2>
        <p>Ajustes de la cuenta</p>
      </div>
      <div className="chart-card" style={{ maxWidth: '500px' }}>
        {[
          ['Nombre', 'Jesus Castelo'],
          ['Email', 'jesus@email.com'],
          ['Rol', 'Frontend Dev'],
          ['Plan', 'Pro'],
          ['Zona horaria', 'America/Monterrey'],
        ].map(([label, value]) => (
          <div key={label} className="summary-item">
            <span className="summary-label">{label}</span>
            <span className="summary-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
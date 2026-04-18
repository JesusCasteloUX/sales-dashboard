const clientes = [
  { nombre: 'Ana García', email: 'ana@email.com', ordenes: 12, total: '$4,230', status: 'activo' },
  { nombre: 'Carlos López', email: 'carlos@email.com', ordenes: 8, total: '$2,890', status: 'activo' },
  { nombre: 'María Torres', email: 'maria@email.com', ordenes: 5, total: '$1,450', status: 'inactivo' },
  { nombre: 'José Martínez', email: 'jose@email.com', ordenes: 15, total: '$6,780', status: 'activo' },
  { nombre: 'Laura Sánchez', email: 'laura@email.com', ordenes: 3, total: '$890', status: 'activo' },
  { nombre: 'Pedro Ramírez', email: 'pedro@email.com', ordenes: 9, total: '$3,120', status: 'inactivo' },
]

export default function Clientes() {
  return (
    <div className="main">
      <div className="main-header">
        <h2>Clientes</h2>
        <p>Base de clientes registrados</p>
      </div>
      <div className="orders-card">
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                {['Cliente', 'Email', 'Órdenes', 'Total gastado', 'Estado'].map(h => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {clientes.map((c, i) => (
                <tr key={i}>
                  <td style={{ color: '#e2e8f0', fontWeight: 500 }}>{c.nombre}</td>
                  <td style={{ color: '#64748b' }}>{c.email}</td>
                  <td>{c.ordenes}</td>
                  <td style={{ color: '#818cf8', fontWeight: 500 }}>{c.total}</td>
                  <td>
                    <span className={`status-badge ${c.status === 'activo' ? 'status-completado' : 'status-cancelado'}`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
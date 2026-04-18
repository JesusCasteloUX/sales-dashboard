import { recentOrders } from '../data/mockData'

export default function Ordenes() {
  return (
    <div className="main">
      <div className="main-header">
        <h2>Órdenes</h2>
        <p>Todas las órdenes del sistema</p>
      </div>
      <div className="orders-card">
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                {['Orden', 'Cliente', 'Producto', 'Monto', 'Estado', 'Fecha'].map(h => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, i) => (
                <tr key={i}>
                  <td className="order-id">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td style={{ color: '#e2e8f0', fontWeight: 500 }}>{order.amount}</td>
                  <td>
                    <span className={`status-badge status-${order.status}`}>
                      {order.status}
                    </span>
                  </td>
                  <td style={{ color: '#475569', fontSize: '12px' }}>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
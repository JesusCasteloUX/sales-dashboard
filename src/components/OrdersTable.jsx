import { useState } from 'react'
import { recentOrders } from '../data/mockData'

export default function OrdersTable() {
  const [filter, setFilter] = useState('todos')

  const filtered = filter === 'todos'
    ? recentOrders
    : recentOrders.filter(o => o.status === filter)

  return (
    <div className="orders-card">
      <div className="orders-header">
        <p className="chart-title" style={{ margin: 0 }}>Órdenes recientes</p>
        <div className="filter-buttons">
          {['todos', 'completado', 'pendiente', 'cancelado'].map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`filter-btn ${filter === s ? 'active' : ''}`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>
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
            {filtered.map((order, i) => (
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
  )
}
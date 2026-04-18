import MetricCard from './MetricCard'
import SalesLineChart from './SalesLineChart'
import CategoryBarChart from './CategoryBarChart'
import RegionDonutChart from './RegionDonutChart'
import OrdersTable from './OrdersTable'
import { metrics } from '../data/mockData'

export default function Dashboard() {
  return (
    <main className="main">
      <div className="main-header">
        <h2>Dashboard</h2>
        <p>Resumen de ventas — Abril 2026</p>
      </div>
      <div className="metrics-grid">
        {metrics.map((m, i) => (
          <MetricCard key={i} {...m} />
        ))}
      </div>
      <div className="charts-grid">
        <SalesLineChart />
        <RegionDonutChart />
      </div>
      <div className="charts-grid-2">
        <CategoryBarChart />
        <div className="chart-card">
          <p className="chart-title">Resumen rápido</p>
          {[
            ['Mejor mes', 'Diciembre — $28,900'],
            ['Categoría top', 'Electrónica — $32,400'],
            ['Región líder', 'Norte — 35%'],
            ['Órdenes hoy', '24 órdenes'],
            ['Tasa de cancelación', '12.5%'],
          ].map(([label, value]) => (
            <div key={label} className="summary-item">
              <span className="summary-label">{label}</span>
              <span className="summary-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <OrdersTable />
    </main>
  )
}
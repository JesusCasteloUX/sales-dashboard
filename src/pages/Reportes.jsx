import SalesLineChart from '../components/SalesLineChart'
import CategoryBarChart from '../components/CategoryBarChart'
import RegionDonutChart from '../components/RegionDonutChart'

export default function Reportes() {
  return (
    <div className="main">
      <div className="main-header">
        <h2>Reportes</h2>
        <p>Análisis detallado de ventas</p>
      </div>
      <div className="charts-grid" style={{ marginBottom: '24px' }}>
        <SalesLineChart />
        <RegionDonutChart />
      </div>
      <CategoryBarChart />
    </div>
  )
}
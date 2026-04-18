export default function MetricCard({ label, value, change, positive }) {
  return (
    <div className="metric-card">
      <p className="metric-label">{label}</p>
      <p className="metric-value">{value}</p>
      <span className={`metric-badge ${positive ? 'positive' : 'negative'}`}>
        {change} vs mes anterior
      </span>
    </div>
  )
}
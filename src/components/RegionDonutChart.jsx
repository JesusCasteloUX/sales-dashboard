import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { salesByRegion } from '../data/mockData'

const COLORS = ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd']

export default function RegionDonutChart() {
  return (
    <div className="chart-card">
      <p className="chart-title">Ventas por región</p>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie data={salesByRegion} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" paddingAngle={3}>
            {salesByRegion.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ background: '#0f1117', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
            formatter={v => [`${v}%`, 'Participación']}
          />
          <Legend
                formatter={(value, entry) => (
                <span style={{ color: '#64748b', fontSize: '12px' }}>
                {entry.payload.region} — {entry.payload.value}%
                </span>
                )}
                    />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { salesByCategory } from '../data/mockData'

export default function CategoryBarChart() {
  return (
    <div className="chart-card">
      <p className="chart-title">Ventas por categoría</p>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={salesByCategory} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" horizontal={false} />
          <XAxis type="number" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v/1000).toFixed(0)}k`} />
          <YAxis type="category" dataKey="category" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} width={80} />
          <Tooltip
            contentStyle={{ background: '#0f1117', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
            labelStyle={{ color: '#94a3b8' }}
            formatter={v => [`$${v.toLocaleString('es')}`, 'Ventas']}
          />
          <Bar dataKey="ventas" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
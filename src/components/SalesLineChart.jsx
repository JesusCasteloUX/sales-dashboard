import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { salesByMonth } from '../data/mockData'

export default function SalesLineChart() {
  return (
    <div className="chart-card">
      <p className="chart-title">Ventas por mes</p>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={salesByMonth}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
          <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v/1000).toFixed(0)}k`} />
          <Tooltip
            contentStyle={{ background: '#0f1117', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
            labelStyle={{ color: '#94a3b8' }}
            formatter={v => [`$${v.toLocaleString('es')}`, 'Ventas']}
          />
          <Line type="monotone" dataKey="ventas" stroke="#6366f1" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: '#6366f1' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
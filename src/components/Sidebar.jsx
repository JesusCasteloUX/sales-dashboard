import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Dashboard', path: '/' },
  { label: 'Órdenes', path: '/ordenes' },
  { label: 'Productos', path: '/productos' },
  { label: 'Clientes', path: '/clientes' },
  { label: 'Reportes', path: '/reportes' },
  { label: 'Configuración', path: '/configuracion' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <p className="sidebar-title">SalesDash</p>
        <p className="sidebar-sub">Panel de control</p>
      </div>
      {links.map(link => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === '/'}
          className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
        >
          {link.label}
        </NavLink>
      ))}
      <div className="sidebar-footer">
        <p>Jesus Castelo</p>
        <p>Frontend Dev</p>
      </div>
    </aside>
  )
}
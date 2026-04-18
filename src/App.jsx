import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Ordenes from './pages/Ordenes'
import Productos from './pages/Productos'
import Clientes from './pages/Clientes'
import Reportes from './pages/Reportes'
import Configuracion from './pages/Configuracion'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ordenes" element={<Ordenes />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
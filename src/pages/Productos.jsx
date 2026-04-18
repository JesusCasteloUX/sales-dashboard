const productos = [
  { nombre: 'MacBook Pro', categoria: 'Electrónica', precio: '$1,299', stock: 24, ventas: 142 },
  { nombre: 'iPhone 15', categoria: 'Electrónica', precio: '$899', stock: 56, ventas: 289 },
  { nombre: 'Nike Air Max', categoria: 'Ropa', precio: '$120', stock: 134, ventas: 412 },
  { nombre: 'Samsung TV 55"', categoria: 'Electrónica', precio: '$650', stock: 18, ventas: 97 },
  { nombre: 'iPad Air', categoria: 'Electrónica', precio: '$749', stock: 43, ventas: 178 },
  { nombre: 'Adidas Ultraboost', categoria: 'Ropa', precio: '$180', stock: 89, ventas: 234 },
  { nombre: 'Dyson V15', categoria: 'Hogar', precio: '$520', stock: 12, ventas: 67 },
  { nombre: 'PS5', categoria: 'Electrónica', precio: '$499', stock: 8, ventas: 203 },
]

export default function Productos() {
  return (
    <div className="main">
      <div className="main-header">
        <h2>Productos</h2>
        <p>Catálogo completo de productos</p>
      </div>
      <div className="orders-card">
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                {['Producto', 'Categoría', 'Precio', 'Stock', 'Ventas'].map(h => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {productos.map((p, i) => (
                <tr key={i}>
                  <td style={{ color: '#e2e8f0', fontWeight: 500 }}>{p.nombre}</td>
                  <td>{p.categoria}</td>
                  <td style={{ color: '#818cf8', fontWeight: 500 }}>{p.precio}</td>
                  <td>
                    <span style={{
                      color: p.stock < 20 ? '#f87171' : '#34d399',
                      fontWeight: 500
                    }}>
                      {p.stock} uds
                    </span>
                  </td>
                  <td>{p.ventas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
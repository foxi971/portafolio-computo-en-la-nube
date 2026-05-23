import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Portada from './pages/Portada'
import Indice from './pages/Indice'
import IntroduccionObjetivos from './pages/IntroduccionObjetivos'
import Unidad1 from './pages/Unidad1'
import Unidad2 from './pages/Unidad2'
import Unidad3 from './pages/Unidad3'
import Unidad4 from './pages/Unidad4'
import Unidad5 from './pages/Unidad5'
import ReflexionConclusion from './pages/ReflexionConclusion'
import AnexosVideo from './pages/AnexosVideo'

function App() {
  const location = useLocation()
  
  // Mapeo de rutas a números de página
  const paginaActual = {
    '/': 1,
    '/indice': 2,
    '/introduccion': 3,
    '/unidad1': 4,
    '/unidad2': 5,
    '/unidad3': 6,
    '/unidad4': 7,
    '/unidad5': 8,
    '/reflexion': 9,
    '/anexos': 10,
  }[location.pathname] || 1

  const totalPaginas = 10

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fondo Cinemático */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-500/10 blur-[160px] rounded-full" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 backdrop-blur-xl border-b border-white/10 bg-black/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="TecNM" className="h-16 md:h-20 object-contain" />
              <img src="/escudo_2977c841a7.png" alt="ITS" className="h-12 md:h-16 object-contain" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-zinc-400 text-sm">
              <Link to="/" className="hover:text-white transition">Portada</Link>
              <Link to="/indice" className="hover:text-white transition">Índice</Link>
              <Link to="/introduccion" className="hover:text-white transition">Introducción</Link>
              <Link to="/unidad1" className="hover:text-white transition">Unidad 1</Link>
              <Link to="/unidad2" className="hover:text-white transition">Unidad 2</Link>
              <Link to="/unidad3" className="hover:text-white transition">Unidad 3</Link>
              <Link to="/unidad4" className="hover:text-white transition">Unidad 4</Link>
              <Link to="/unidad5" className="hover:text-white transition">Unidad 5</Link>
              <Link to="/reflexion" className="hover:text-white transition">Reflexión</Link>
              <Link to="/anexos" className="hover:text-white transition">Anexos</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido de cada página */}
      <div className="min-h-[calc(100vh-200px)]">
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/indice" element={<Indice />} />
          <Route path="/introduccion" element={<IntroduccionObjetivos />} />
          <Route path="/unidad1" element={<Unidad1 />} />
          <Route path="/unidad2" element={<Unidad2 />} />
          <Route path="/unidad3" element={<Unidad3 />} />
          <Route path="/unidad4" element={<Unidad4 />} />
          <Route path="/unidad5" element={<Unidad5 />} />
          <Route path="/reflexion" element={<ReflexionConclusion />} />
          <Route path="/anexos" element={<AnexosVideo />} />
        </Routes>
      </div>

      {/* Navegación entre páginas */}
      <div className="border-t border-white/10 bg-black/30 backdrop-blur-xl mt-8">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            {paginaActual > 1 && (
              <Link
                to={paginaActual === 2 ? '/' : 
                     paginaActual === 3 ? '/indice' :
                     paginaActual === 4 ? '/introduccion' :
                     paginaActual === 5 ? '/unidad1' :
                     paginaActual === 6 ? '/unidad2' :
                     paginaActual === 7 ? '/unidad3' :
                     paginaActual === 8 ? '/unidad4' :
                     paginaActual === 9 ? '/unidad5' : '/reflexion'}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition"
              >
                ← Anterior
              </Link>
            )}
          </div>
          <div className="text-zinc-500 text-sm">
            Página {paginaActual} de {totalPaginas}
          </div>
          <div>
            {paginaActual < totalPaginas && (
              <Link
                to={paginaActual === 1 ? '/indice' :
                     paginaActual === 2 ? '/introduccion' :
                     paginaActual === 3 ? '/unidad1' :
                     paginaActual === 4 ? '/unidad2' :
                     paginaActual === 5 ? '/unidad3' :
                     paginaActual === 6 ? '/unidad4' :
                     paginaActual === 7 ? '/unidad5' :
                     paginaActual === 8 ? '/reflexion' : '/anexos'}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition"
              >
                Siguiente →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

import { Link } from 'react-router-dom'

function Indice() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-24">
      <h2 className="text-4xl font-black mb-10">Índice</h2>
      
      <div className="border border-white/10 bg-white/5 rounded-[32px] overflow-hidden backdrop-blur-xl">
        
        {/* Secciones Generales */}
        <div className="p-6 border-b border-white/10">
          <h3 className="text-lg font-bold text-zinc-400 mb-4">📋 Secciones Generales</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <Link 
              to="/"
              className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
            >
              <span>📖 Portada / Inicio</span>
              <span className="text-zinc-500 text-sm">Página 1 →</span>
            </Link>
            <Link 
              to="/indice"
              className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
            >
              <span>📑 Índice</span>
              <span className="text-zinc-500 text-sm">Página 2 →</span>
            </Link>
            <Link 
              to="/introduccion"
              className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
            >
              <span>🎯 Introducción y Objetivos</span>
              <span className="text-zinc-500 text-sm">Página 3 →</span>
            </Link>
          </div>
        </div>

        {/* Unidades del Curso */}
        <div className="p-6 border-b border-white/10">
          <h3 className="text-lg font-bold text-zinc-400 mb-4">📚 Unidades del Curso</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <Link 
              to="/unidad1"
              className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
            >
              <span>📘 Unidad 1 - Introducción y fundamentos</span>
              <span className="text-zinc-500 text-sm">Página 4 →</span>
            </Link>
            <Link 
              to="/unidad2"
              className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
            >
              <span>📗 Unidad 2 - Arquitectura de la nube</span>
              <span className="text-zinc-500 text-sm">Página 5 →</span>
            </Link>
            <Link 
              to="/unidad3"
              className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
            >
              <span>📙 Unidad 3 - Consideraciones para el desarrollo</span>
              <span className="text-zinc-500 text-sm">Página 6 →</span>
            </Link>
            <Link 
              to="/unidad4"
              className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
            >
              <span>📕 Unidad 4 - Seguridad</span>
              <span className="text-zinc-500 text-sm">Página 7 →</span>
            </Link>
            <Link 
              to="/unidad5"
              className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
            >
              <span>📔 Unidad 5 - Diseño y desarrollo de aplicaciones</span>
              <span className="text-zinc-500 text-sm">Página 8 →</span>
            </Link>
          </div>
        </div>

        {/* Reflexión y Conclusiones */}
        <div className="p-6 border-b border-white/10">
          <h3 className="text-lg font-bold text-zinc-400 mb-4">💭 Reflexión y Conclusiones</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <Link 
              to="/reflexion"
              className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
            >
              <span>💭 Reflexión final</span>
              <span className="text-zinc-500 text-sm">Página 9 →</span>
            </Link>
            <Link 
              to="/reflexion"
              className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
            >
              <span>🔚 Conclusión</span>
              <span className="text-zinc-500 text-sm">Página 9 →</span>
            </Link>
          </div>
        </div>

        {/* Anexos y Video */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-zinc-400 mb-4">📎 Anexos y Recursos</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <Link 
              to="/anexos"
              className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
            >
              <span>🎥 Video demostrativo</span>
              <span className="text-zinc-500 text-sm">Página 10 →</span>
            </Link>
            <Link 
              to="/anexos"
              className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
            >
              <span>📎 Anexos y material de apoyo</span>
              <span className="text-zinc-500 text-sm">Página 10 →</span>
            </Link>
          </div>
        </div>

        {/* Indicador de navegación */}
        <div className="p-4 border-t border-white/10 bg-white/5 text-center">
          <p className="text-zinc-500 text-sm">
            💡 Haz clic en cualquier elemento del índice para navegar directamente
          </p>
        </div>
      </div>
    </section>
  )
}

export default Indice

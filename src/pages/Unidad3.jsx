function Unidad3() {
  const evidencias = [
    {
      id: "3.1",
      titulo: "Sinopsis de los microservicios y flujo DevOps",
      fecha: "26/02/2026",
      estado: "Completada",
      tipo: "Sinopsis escrita a mano",
      pdf: "/3.1 síntesis de los microservicios y flujo devops, Alejandro Felipe Macías Martinez -1.pdf",
      descripcion: "Desarrollo de una sinopsis de una cuartilla sobre microservicios (punto 3.1.1) y flujo DevOps (punto 3.1.2). Escrita a mano, fotografiada y subida en formato PDF a la plataforma Educatec.",
      resultados: "Comprendí que los microservicios son una arquitectura donde una aplicación se divide en pequeños servicios independientes, cada uno con su propia base de datos y desplegable por separado. Aprendí que DevOps es una cultura que combina desarrollo y operaciones, y que CI/CD (Integración Continua/Despliegue Continuo) automatiza la construcción, prueba y despliegue de software. Entendí cómo los microservicios facilitan el despliegue continuo al permitir actualizar un servicio sin afectar a los demás.",
      reflexion: "Realizar la sinopsis a mano me ayudó a retener mejor los conceptos. Escribir manualmente sobre microservicios y DevOps reforzó mi comprensión de cómo estas arquitecturas y culturas de trabajo son fundamentales en el desarrollo cloud moderno.",
      conceptos: [
        "Microservicios: Servicios pequeños e independientes",
        "Monolito vs Microservicios",
        "DevOps: Cultura de colaboración Dev + Ops",
        "CI: Integración Continua",
        "CD: Despliegue Continuo",
        "Automatización de pruebas",
        "Escalado independiente por servicio",
        "Contenedores (Docker) como facilitadores"
      ],
      archivosReferencia: [
        "3.1 Aspectos básicos para el desarrollo",
        "3.1.1 Ejemplos de microservicios",
        "3.1.2 Flujo DevOps CI/CD",
        "3.2 Desarrollo en Nube vs Tradicional",
        "3.3 Consideraciones para Análisis, Diseño y Desarrollo",
        "3.3.1 Buenas prácticas",
        "3.4 Herramientas de desarrollo: Instalación",
        "3.4.1 Guía práctica de Docker"
      ]
    }
  ]

  const temasUnidad = [
    "Arquitectura de microservicios",
    "Monolitos vs Microservicios",
    "DevOps y cultura colaborativa",
    "CI/CD - Integración y Despliegue Continuo",
    "Desarrollo en la nube vs tradicional",
    "Buenas prácticas para desarrollo cloud",
    "Contenedores y Docker",
    "Herramientas de desarrollo cloud"
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-24">
      {/* Cabecera de la unidad */}
      <div className="mb-12">
        <span className="text-zinc-500 text-sm">Unidad 3</span>
        <h1 className="text-4xl font-black mt-2">Consideraciones para el desarrollo</h1>
        <p className="text-zinc-400 mt-4 text-lg">Buenas prácticas y tecnologías para aplicaciones cloud.</p>
      </div>

      {/* Temas cubiertos en la unidad */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">📚 Temas cubiertos en esta unidad</h2>
        <div className="flex flex-wrap gap-2">
          {temasUnidad.map((tema, idx) => (
            <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm text-zinc-300 border border-white/10">
              {tema}
            </span>
          ))}
        </div>
      </div>

      {/* Material de apoyo */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">📁 Material de apoyo proporcionado</h2>
        <div className="border border-white/10 bg-white/5 rounded-2xl p-4">
          <p className="text-zinc-400 text-sm mb-2">Documentos de referencia del profesor:</p>
          <div className="flex flex-wrap gap-2">
            {evidencias[0].archivosReferencia.map((archivo, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-white/10 rounded-full text-zinc-400">
                📄 {archivo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Evidencias del alumno */}
      <h2 className="text-2xl font-bold mb-6">✅ Mis evidencias de aprendizaje</h2>
      <div className="grid lg:grid-cols-1 gap-6 max-w-4xl">
        {evidencias.map((ev, idx) => (
          <div key={idx} className="border border-white/10 bg-white/5 rounded-[32px] overflow-hidden backdrop-blur-xl hover:bg-white/10 transition">
            
            <div className="h-28 flex items-center justify-center text-2xl bg-gradient-to-br from-green-900/30 to-zinc-900">
              ✅ Actividad completada
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 items-center">
                  <span className="text-zinc-500 text-sm">Actividad {ev.id}</span>
                  <span className="text-xs px-2 py-0.5 bg-white/10 rounded-full text-zinc-400">{ev.tipo}</span>
                </div>
                <span className="text-sm px-3 py-1 rounded-full border bg-green-500/10 text-green-400 border-green-500/20">
                  {ev.estado}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{ev.titulo}</h3>
              
              <div className="mb-3">
                <p className="text-zinc-500 text-sm font-semibold">📅 Fecha:</p>
                <p className="text-zinc-300 text-sm">{ev.fecha}</p>
              </div>

              <div className="mb-3">
                <p className="text-zinc-500 text-sm font-semibold">📝 Descripción:</p>
                <p className="text-zinc-300 text-sm">{ev.descripcion}</p>
              </div>

              <div className="mb-3 p-3 bg-white/5 rounded-xl">
                <p className="text-zinc-500 text-sm font-semibold">🏆 Resultados (lo aprendido / logro):</p>
                <p className="text-zinc-300 text-sm">{ev.resultados}</p>
              </div>

              {ev.conceptos && (
                <div className="mb-3 p-3 bg-white/5 rounded-xl">
                  <p className="text-zinc-500 text-sm font-semibold">✨ Conceptos clave:</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {ev.conceptos.map((concepto, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-full text-zinc-300">
                        {concepto}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-4 p-3 bg-white/5 rounded-xl border-l-4 border-blue-500/50">
                <p className="text-zinc-500 text-sm font-semibold">💭 Reflexión personal:</p>
                <p className="text-zinc-300 text-sm">{ev.reflexion}</p>
              </div>

              {/* 5. ANEXOS - PDF */}
              <div className="mt-3 p-3 bg-white/5 rounded-xl">
                <p className="text-zinc-500 text-sm font-semibold mb-2">📎 Anexos:</p>
                <a 
                  href={encodeURI(ev.pdf)} 
                  className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📄 Ver sinopsis escrita a mano (PDF)
                </a>
                <p className="text-zinc-500 text-xs mt-1">* Documento escaneado de la sinopsis realizada a mano</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Unidad3

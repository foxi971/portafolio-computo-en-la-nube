function Unidad1() {
  const evidencias = [
    {
      id: "1.1",
      titulo: "Arquitectura de red de computadoras",
      fecha: "29/01/2026 - 06/02/2026",
      estado: "Completada",
      tipo: "Dibujo / Esquema",
      pdf: "/Act1.1 Alejandro Felipe Macías.pdf",
      descripcion: "Diseño de una arquitectura de red local para alojar una aplicación web utilizando Apache2, PHP y MySQL en servidores Linux.",
      resultados: "Comprendí cómo se estructura una red local, la función de cada servidor y la importancia del firewall.",
      reflexion: "Esta actividad me permitió visualizar de forma práctica los componentes de una infraestructura de red."
    },
    {
      id: "1.2",
      titulo: "Síntesis de características del cómputo en la nube",
      fecha: "04/02/2026",
      estado: "Completada",
      tipo: "Síntesis",
      pdf: "/Alejandro Macías act 1.2 síntesis .pdf",
      descripcion: "Investigación y síntesis de las principales características del cloud computing.",
      resultados: "Identifiqué las 6 características esenciales del cómputo en la nube.",
      reflexion: "El cloud computing transforma la forma en que se desarrolla software."
    },
    {
      id: "1.3",
      titulo: "Ventajas, desventajas y riesgos",
      fecha: "05/02/2026",
      estado: "No realizada",
      tipo: "Análisis",
      descripcion: "Análisis comparativo de los beneficios y desafíos del cómputo en la nube.",
      resultados: "Actividad pendiente.",
      reflexion: "Actividad pendiente."
    },
    {
      id: "1.4",
      titulo: "Mapa mental de los elementos del cómputo en la nube",
      fecha: "09/02/2026",
      estado: "No realizada",
      tipo: "Mapa mental",
      descripcion: "Representación gráfica de los componentes clave del cloud computing.",
      resultados: "Actividad pendiente.",
      reflexion: "Actividad pendiente."
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-24">
      <h1 className="text-4xl font-black mb-2">Unidad 1</h1>
      <h2 className="text-2xl text-zinc-400 mb-6">Introducción y fundamentos de cómputo en la nube</h2>
      <div className="grid lg:grid-cols-2 gap-6">
        {evidencias.map((ev, idx) => (
          <div key={idx} className="border border-white/10 bg-white/5 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-zinc-500 text-sm">Actividad {ev.id}</span>
              <span className={`text-xs px-3 py-1 rounded-full border ${ev.estado === "Completada" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}>{ev.estado}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{ev.titulo}</h3>
            <p className="text-zinc-400 text-sm">📅 {ev.fecha}</p>
            <p className="text-zinc-300 mt-3">{ev.descripcion}</p>
            <div className="mt-3 p-3 bg-white/5 rounded-xl">
              <p className="text-zinc-500 text-sm font-semibold">🏆 Resultados:</p>
              <p className="text-zinc-300 text-sm">{ev.resultados}</p>
            </div>
            <div className="mt-3 p-3 bg-white/5 rounded-xl border-l-4 border-blue-500/50">
              <p className="text-zinc-500 text-sm font-semibold">💭 Reflexión:</p>
              <p className="text-zinc-300 text-sm">{ev.reflexion}</p>
            </div>
            {ev.pdf && ev.estado === "Completada" && (
              <div className="mt-3 p-3 bg-white/5 rounded-xl">
                <a href={encodeURI(ev.pdf)} target="_blank" className="text-blue-400 hover:text-blue-300 text-sm">📄 Ver PDF de la actividad</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Unidad1

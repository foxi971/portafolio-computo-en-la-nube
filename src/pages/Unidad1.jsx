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
      resultados: "Logré comprender cómo se estructura una red local, la función de cada servidor (aplicaciones, base de datos, réplicas) y la importancia del firewall como capa de seguridad. Aprendí a especificar IPs y dominios, y a diferenciar la red interna de la que tiene salida a internet.",
      reflexion: "Esta actividad me permitió visualizar de forma práctica los componentes de una infraestructura de red. El esquema hecho a mano reforzó mi comprensión sobre cómo interactúan los servidores entre sí y cómo se protege el sistema con un firewall.",
      requisitos: [
        "Servidor de aplicaciones (A) con Apache2 + PHP",
        "Servidor de base de datos (B) con MySQL",
        "Servidor de réplicas (C) con salida a internet",
        "Firewall para seguridad",
        "Sistema operativo Linux para todos los servidores",
        "IP y dominio para el servidor (C)"
      ]
    },
    {
      id: "1.2",
      titulo: "Síntesis de características del cómputo en la nube",
      fecha: "04/02/2026",
      estado: "Completada",
      tipo: "Síntesis / Mapa conceptual",
      pdf: "/Alejandro Macías act 1.2 síntesis .pdf",
      descripcion: "Investigación y síntesis de las principales características del cloud computing y su impacto en el desarrollo tecnológico moderno.",
      resultados: "Identifiqué y comprendí las 6 características esenciales del cómputo en la nube: autoservicio bajo demanda, acceso amplio a la red, agrupación de recursos, elasticidad rápida, servicio medido y pago por uso.",
      reflexion: "El cloud computing transforma la forma en que se desarrolla software. Aprendí que la elasticidad permite escalar recursos según la demanda y que el pago por uso reduce costos iniciales. Esta síntesis me ayudó a entender por qué las empresas migran a la nube.",
      caracteristicas: [
        "Autoservicio bajo demanda",
        "Acceso amplio a la red",
        "Agrupación de recursos",
        "Elasticidad rápida",
        "Servicio medido",
        "Pago por uso"
      ]
    },
    {
      id: "1.3",
      titulo: "Ventajas, desventajas y riesgos",
      fecha: "05/02/2026",
      estado: "No realizada",
      tipo: "Análisis",
      descripcion: "Análisis comparativo de los beneficios y desafíos del cómputo en la nube.",
      resultados: "Actividad pendiente de realizar.",
      reflexion: "Actividad pendiente. Se identificarán aspectos como: ventajas (escalabilidad, reducción de costos), desventajas (dependencia de internet, latencia) y riesgos (seguridad, vendor lock-in)."
    },
    {
      id: "1.4",
      titulo: "Mapa mental de los elementos del cómputo en la nube",
      fecha: "09/02/2026",
      estado: "No realizada",
      tipo: "Mapa mental",
      descripcion: "Representación gráfica de los componentes clave del cloud computing: tipos de servicio (IaaS, PaaS, SaaS) y modelos de implementación (pública, privada, híbrida, comunitaria).",
      resultados: "Actividad pendiente de realizar.",
      reflexion: "Actividad pendiente. El mapa mental ayudará a visualizar relaciones entre conceptos clave del cloud computing."
    }
  ]

  // Temas cubiertos en la unidad
  const temasUnidad = [
    "Conceptos de Cómputo en la Nube",
    "Características del Cómputo en la Nube",
    "Ventajas, desventajas y riesgos",
    "Tipos de servicio (IaaS, PaaS, SaaS)",
    "Modelos de implementación (pública, privada, híbrida, comunitaria)",
    "Casos de éxito"
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-24">
      {/* Cabecera de la unidad */}
      <div className="mb-12">
        <span className="text-zinc-500 text-sm">Unidad 1</span>
        <h1 className="text-4xl font-black mt-2">Introducción y fundamentos de cómputo en la nube</h1>
        <p className="text-zinc-400 mt-4 text-lg">Conceptos fundamentales, modelos de servicio y evolución del cloud computing.</p>
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

      {/* Evidencias del alumno */}
      <h2 className="text-2xl font-bold mb-6">✅ Mis evidencias de aprendizaje</h2>
      <div className="grid lg:grid-cols-2 gap-6">
        {evidencias.map((ev, idx) => (
          <div key={idx} className="border border-white/10 bg-white/5 rounded-[32px] overflow-hidden backdrop-blur-xl hover:bg-white/10 transition">
            
            {/* Header con icono según estado */}
            <div className={`h-28 flex items-center justify-center text-2xl ${
              ev.estado === "Completada" 
                ? "bg-gradient-to-br from-green-900/30 to-zinc-900" 
                : "bg-gradient-to-br from-yellow-900/30 to-zinc-900"
            }`}>
              {ev.estado === "Completada" ? "✅ Actividad completada" : "⚠️ Actividad pendiente"}
            </div>

            <div className="p-6">
              {/* ID y tipo */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 items-center">
                  <span className="text-zinc-500 text-sm">Actividad {ev.id}</span>
                  <span className="text-xs px-2 py-0.5 bg-white/10 rounded-full text-zinc-400">{ev.tipo}</span>
                </div>
                <span className={`text-sm px-3 py-1 rounded-full border ${
                  ev.estado === "Completada"
                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                    : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                }`}>
                  {ev.estado}
                </span>
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold mb-3">{ev.titulo}</h3>
              
              {/* 1. FECHA */}
              <div className="mb-3">
                <p className="text-zinc-500 text-sm font-semibold">📅 Fecha:</p>
                <p className="text-zinc-300 text-sm">{ev.fecha}</p>
              </div>

              {/* 2. DESCRIPCIÓN */}
              <div className="mb-3">
                <p className="text-zinc-500 text-sm font-semibold">📝 Descripción:</p>
                <p className="text-zinc-300 text-sm">{ev.descripcion}</p>
              </div>

              {/* 3. RESULTADOS */}
              <div className="mb-3 p-3 bg-white/5 rounded-xl">
                <p className="text-zinc-500 text-sm font-semibold">🏆 Resultados (lo aprendido / logro):</p>
                <p className="text-zinc-300 text-sm">{ev.resultados}</p>
              </div>

              {/* Requisitos específicos para actividad 1.1 */}
              {ev.requisitos && (
                <div className="mb-3 p-3 bg-white/5 rounded-xl">
                  <p className="text-zinc-500 text-sm font-semibold">🔧 Requisitos del esquema:</p>
                  <ul className="text-zinc-300 text-sm list-disc list-inside space-y-1">
                    {ev.requisitos.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Características para actividad 1.2 */}
              {ev.caracteristicas && (
                <div className="mb-3 p-3 bg-white/5 rounded-xl">
                  <p className="text-zinc-500 text-sm font-semibold">✨ Características identificadas:</p>
                  <ul className="text-zinc-300 text-sm list-disc list-inside space-y-1">
                    {ev.caracteristicas.map((car, i) => (
                      <li key={i}>{car}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 4. REFLEXIÓN PERSONAL */}
              <div className="mb-4 p-3 bg-white/5 rounded-xl border-l-4 border-blue-500/50">
                <p className="text-zinc-500 text-sm font-semibold">💭 Reflexión personal:</p>
                <p className="text-zinc-300 text-sm">{ev.reflexion}</p>
              </div>

              {/* 5. ANEXOS (PDF) */}
              {ev.pdf && ev.estado === "Completada" && (
                <div className="mt-3 p-3 bg-white/5 rounded-xl">
                  <p className="text-zinc-500 text-sm font-semibold mb-2">📎 Anexos:</p>
                  <a 
                    href={encodeURI(ev.pdf)} 
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📄 Ver documento de la actividad (PDF)
                  </a>
                  <p className="text-zinc-500 text-xs mt-1">* Documento escaneado de la actividad realizada a mano</p>
                </div>
              )}

              {!ev.pdf && ev.estado === "No realizada" && (
                <div className="mt-3 p-3 bg-white/5 rounded-xl">
                  <p className="text-zinc-500 text-sm font-semibold">📎 Anexos:</p>
                  <p className="text-zinc-500 text-sm">Pendiente de entregar</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Unidad1

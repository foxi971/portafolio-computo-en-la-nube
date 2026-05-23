function Unidad4() {
  const evidencias = [
    {
      id: "4.1",
      titulo: "Práctica de seguridad informática - Escalada de privilegios",
      fecha: "05/03/2026",
      estado: "Completada",
      tipo: "Práctica",
      pdf: "/escala de privilegios.pdf",
      descripcion: "Demostración de escalada de privilegios en Linux mediante mala configuración de sudoers.",
      resultados: "Aprendí que una mala configuración de sudoers permite escalar a root.",
      reflexion: "Configurar correctamente los permisos de sudo es crítico para la seguridad."
    },
    {
      id: "4.2",
      titulo: "Demostrar la inyección SQL",
      fecha: "19/03/2026",
      estado: "Completada",
      tipo: "Práctica",
      pdf: "/Demostrar la inyección SQL Macias Martinez Alejandro Felipe.pdf",
      descripcion: "Creación de BD vulnerable y demostración de inyección SQL.",
      resultados: "Comprendí cómo funciona la inyección SQL y aprendí a corregirla.",
      reflexion: "La inyección SQL es crítica. Las consultas preparadas son la solución."
    },
    {
      id: "4.3",
      titulo: "Seguridad (hardening) en servidor web Apache 2",
      fecha: "20/03/2026",
      estado: "Completada",
      tipo: "Práctica",
      pdf: "/Seguridad (hardening) en servidor web Apache 2 Macias Martinez Alejandro Felipe.pdf",
      descripcion: "Hardening en Apache2: ocultar versión, SSL, firewall.",
      resultados: "Aprendí a ocultar la versión de Apache y activar HTTPS.",
      reflexion: "Un servidor debe estar protegido, no solo funcionando."
    },
    {
      id: "4.5",
      titulo: "Comandos Dorks de Google",
      fecha: "09/03/2026",
      estado: "Completada",
      tipo: "Investigación",
      pdf: "/ACT 4.5 Macías Martinez Alejandro Felipe -1.pdf",
      descripcion: "Exploración de Google Dorks: operadores avanzados.",
      resultados: "Aprendí operadores como site:, intitle:, filetype:",
      reflexion: "Google Dorks es útil para auditorías de seguridad."
    },
    {
      id: "4.6",
      titulo: "Lluvia de conceptos de ciberseguridad en la nube",
      fecha: "11/03/2026",
      estado: "Completada",
      tipo: "Lluvia de ideas",
      pdf: "/lluvia de ideas(1).jpeg",
      descripcion: "Brainstorming de conceptos clave de seguridad en la nube.",
      resultados: "Identifiqué conceptos como 2FA, IAM, KMS, HTTPS, VPN.",
      reflexion: "La seguridad en la nube es responsabilidad compartida."
    },
    {
      id: "4.7",
      titulo: "Encontrar la contraseña (OverTheWire - Bandit)",
      fecha: "11/03/2026",
      estado: "Completada",
      tipo: "Laboratorio",
      pdf: "/encontrar la contraseña, Macias Martinez Alejandro Felipe.pdf",
      descripcion: "Resolución de niveles del juego Bandit.",
      resultados: "Aprendí comandos Linux: ls, cat, find, grep, base64, ssh.",
      reflexion: "OverTheWire es excelente para aprender seguridad práctica."
    },
    {
      id: "4.8",
      titulo: "Amenazas y Riesgos en Cómputo en la Nube",
      fecha: "18/03/2026 - 19/03/2026",
      estado: "No realizada",
      tipo: "Investigación",
      pdf: null,
      descripcion: "Análisis de las principales amenazas en el cloud computing.",
      resultados: "Actividad no realizada durante el curso.",
      reflexion: "Actividad pendiente."
    },
    {
      id: "4.9",
      titulo: "Políticas de ciberseguridad en CN",
      fecha: "23/03/2026",
      estado: "Completada",
      tipo: "Mapa conceptual",
      pdf: "/Mapa conceptual con Macías Martinez Alejandro Felipe .pdf",
      descripcion: "Mapa conceptual sobre políticas de ciberseguridad en la nube.",
      resultados: "Comprendí políticas de seguridad y normativas ISO/IEC 27017.",
      reflexion: "Las políticas de ciberseguridad son esenciales en entornos cloud."
    },
    {
      id: "4.10",
      titulo: "Análisis de tráfico de red con Wireshark",
      fecha: "25/03/2026",
      estado: "Completada",
      tipo: "Práctica",
      pdf: "/trafico de red macias artinez alejandro felipe.pdf",
      descripcion: "Captura y análisis de tráfico HTTP, DNS y TCP.",
      resultados: "Observé que HTTP muestra datos en texto plano.",
      reflexion: "HTTPS es obligatorio para proteger datos en tránsito."
    }
  ]

  const temasUnidad = [
    "Modelo de referencia NIST SP 500-292",
    "ISO/IEC 27017 - Seguridad en la nube",
    "Consideraciones y riesgos del cloud computing",
    "Opciones de seguridad",
    "Técnicas de gestión de identidad (IAM)",
    "Principales amenazas en la nube",
    "Google Dorks",
    "Escalada de privilegios",
    "Inyección SQL",
    "Hardening de Apache",
    "Políticas de ciberseguridad",
    "Análisis de tráfico con Wireshark"
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-24">
      <div className="mb-12">
        <span className="text-zinc-500 text-sm">Unidad 4</span>
        <h1 className="text-4xl font-black mt-2">Seguridad</h1>
        <p className="text-zinc-400 mt-4 text-lg">Protección de servicios, autenticación y amenazas en la nube.</p>
      </div>

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

      <h2 className="text-2xl font-bold mb-6">✅ Mis evidencias de aprendizaje</h2>
      <div className="grid lg:grid-cols-2 gap-6">
        {evidencias.map((ev, idx) => (
          <div key={idx} className="border border-white/10 bg-white/5 rounded-[32px] overflow-hidden backdrop-blur-xl hover:bg-white/10 transition">
            
            <div className={`h-24 flex items-center justify-center text-xl ${
              ev.estado === "Completada" 
                ? "bg-gradient-to-br from-green-900/30 to-zinc-900" 
                : "bg-gradient-to-br from-red-900/30 to-zinc-900"
            }`}>
              {ev.estado === "Completada" ? "✅ Actividad completada" : "❌ Actividad no realizada"}
            </div>

            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <div className="flex gap-2 items-center">
                  <span className="text-zinc-500 text-sm">Actividad {ev.id}</span>
                  <span className="text-xs px-2 py-0.5 bg-white/10 rounded-full text-zinc-400">{ev.tipo}</span>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full border ${
                  ev.estado === "Completada"
                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                    : "bg-red-500/10 text-red-400 border-red-500/20"
                }`}>
                  {ev.estado}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2">{ev.titulo}</h3>
              
              <div className="mb-2">
                <p className="text-zinc-500 text-xs font-semibold">📅 Fecha:</p>
                <p className="text-zinc-300 text-sm">{ev.fecha}</p>
              </div>

              <div className="mb-2">
                <p className="text-zinc-500 text-xs font-semibold">📝 Descripción:</p>
                <p className="text-zinc-300 text-sm">{ev.descripcion}</p>
              </div>

              <div className="mb-2 p-2 bg-white/5 rounded-xl">
                <p className="text-zinc-500 text-xs font-semibold">🏆 Resultados:</p>
                <p className="text-zinc-300 text-sm">{ev.resultados}</p>
              </div>

              <div className="mb-3 p-2 bg-white/5 rounded-xl border-l-4 border-blue-500/50">
                <p className="text-zinc-500 text-xs font-semibold">💭 Reflexión personal:</p>
                <p className="text-zinc-300 text-sm">{ev.reflexion}</p>
              </div>

              {ev.pdf && ev.estado === "Completada" && (
                <div className="mt-2 p-2 bg-white/5 rounded-xl">
                  <p className="text-zinc-500 text-xs font-semibold mb-1">📎 Anexos:</p>
                  <a 
                    href={encodeURI(ev.pdf)} 
                    className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-2 break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📄 {ev.pdf.substring(1)}
                  </a>
                </div>
              )}

              {!ev.pdf && ev.estado === "No realizada" && (
                <div className="mt-2 p-2 bg-white/5 rounded-xl">
                  <p className="text-zinc-500 text-xs font-semibold">📎 Anexos:</p>
                  <p className="text-zinc-500 text-xs">No entregado</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Unidad4

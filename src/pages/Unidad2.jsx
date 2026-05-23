function Unidad2() {
  const evidencias = [
    {
      id: "2.1",
      titulo: "Explorar la plataforma AWS",
      fecha: "10/02/2026 - 13/02/2026",
      estado: "Completada",
      tipo: "Exploración / Investigación",
      pdf: "/DOC-20260219-WA0000..pdf",
      descripcion: "Exploración de Amazon Web Services (AWS), sus servicios principales, regiones, zonas de disponibilidad, almacenamiento, cómputo, redes, seguridad y bases de datos.",
      resultados: "Aprendí sobre: Consola de administración de AWS, Regiones y Zonas de Disponibilidad (alta disponibilidad y tolerancia a fallos), Servicios de almacenamiento (S3, EBS, Glacier), Servicios de cómputo (EC2, Auto Scaling, Elastic Load Balancing), Redes (VPC, subredes, Security Groups), Seguridad e identidad (IAM con usuarios, roles y políticas), Bases de datos (RDS y DynamoDB), Monitoreo (CloudWatch), y el modelo de pago por uso (Free Tier).",
      reflexion: "AWS es la plataforma cloud más completa del mercado. Me pareció muy interesante cómo organiza los servicios en categorías (cómputo, almacenamiento, redes, bases de datos) y cómo permite escalar automáticamente con Auto Scaling. El modelo de pago por uso y el Free Tier hacen que sea accesible para aprender sin invertir dinero.",
      conceptos: [
        "Consola de administración",
        "Regiones y Zonas de Disponibilidad",
        "Alta disponibilidad y tolerancia a fallos",
        "EC2 - Máquinas virtuales",
        "Auto Scaling - Escalado automático",
        "Elastic Load Balancing - Balanceo de carga",
        "S3 - Almacenamiento de objetos",
        "EBS - Discos virtuales",
        "Glacier - Almacenamiento de respaldos",
        "VPC - Red virtual privada",
        "Security Groups - Firewall virtual",
        "IAM - Usuarios, roles y políticas",
        "RDS - Bases de datos relacionales",
        "DynamoDB - Base de datos NoSQL",
        "CloudWatch - Monitoreo",
        "Pago por uso y Free Tier"
      ]
    },
    {
      id: "2.2",
      titulo: "Explorar plataforma Google Cloud",
      fecha: "17/02/2026 - 20/02/2026",
      estado: "Completada",
      tipo: "Exploración / Investigación",
      pdf: "/GCP_Actividad_Extendida.pdf",
      descripcion: "Exploración de Google Cloud Platform (GCP), sus servicios principales, ventajas y casos de uso.",
      resultados: "Aprendí sobre: Compute Engine, App Engine, Cloud Run, Cloud Storage, Cloud SQL, Firestore, BigQuery, VPC, IAM y GKE. Comprendí por qué GCP es líder en Big Data e inteligencia artificial.",
      reflexion: "GCP me pareció ideal para proyectos de datos e IA. Sus herramientas como BigQuery permiten analizar grandes volúmenes de datos. Kubernetes (creado por Google) se integra perfectamente con GKE.",
      caracteristicas: [
        "Compute Engine - Máquinas virtuales",
        "App Engine - Plataforma serverless",
        "Cloud Run - Contenedores",
        "Cloud Storage - Almacenamiento",
        "BigQuery - Data warehouse",
        "GKE - Kubernetes Engine"
      ]
    },
    {
      id: "2.3",
      titulo: "Actividad GitHub",
      fecha: "17/02/2026 - 25/02/2026",
      estado: "No realizada",
      tipo: "Gestión de versiones",
      descripcion: "Uso de GitHub para control de versiones, repositorios, ramas y colaboración en proyectos.",
      resultados: "Actividad pendiente de realizar.",
      reflexion: "Actividad pendiente. Se aprenderá a usar Git y GitHub para gestionar el código fuente del proyecto."
    },
    {
      id: "2.4",
      titulo: "Explorar la plataforma MS Azure",
      fecha: "15/03/2026 - 22/03/2026",
      estado: "No realizada",
      tipo: "Exploración",
      descripcion: "Exploración de Microsoft Azure y creación de máquinas virtuales en la nube.",
      resultados: "Actividad pendiente de realizar.",
      reflexion: "Actividad pendiente. Se explorarán los servicios de Azure y se creará una VM para comprender su funcionamiento."
    }
  ]

  // Temas cubiertos en la unidad
  const temasUnidad = [
    "Infraestructura como servicio (IaaS)",
    "Plataforma como servicio (PaaS)",
    "Virtualización y contenedores",
    "Redes en la nube (VPC, balanceadores)",
    "Almacenamiento en la nube",
    "Bases de datos en la nube",
    "AWS - Amazon Web Services",
    "Google Cloud Platform (GCP)",
    "Microsoft Azure",
    "GitHub - Control de versiones"
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-24">
      {/* Cabecera de la unidad */}
      <div className="mb-12">
        <span className="text-zinc-500 text-sm">Unidad 2</span>
        <h1 className="text-4xl font-black mt-2">Arquitectura de la nube</h1>
        <p className="text-zinc-400 mt-4 text-lg">Infraestructura, virtualización, redes y arquitecturas escalables.</p>
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
            
            <div className={`h-28 flex items-center justify-center text-2xl ${
              ev.estado === "Completada" 
                ? "bg-gradient-to-br from-green-900/30 to-zinc-900" 
                : "bg-gradient-to-br from-yellow-900/30 to-zinc-900"
            }`}>
              {ev.estado === "Completada" ? "✅ Actividad completada" : "⚠️ Actividad pendiente"}
            </div>

            <div className="p-6">
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
                  <p className="text-zinc-500 text-sm font-semibold">✨ Conceptos explorados en AWS:</p>
                  <div className="flex flex-wrap gap-1 mt-2 max-h-32 overflow-y-auto">
                    {ev.conceptos.map((concepto, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-full text-zinc-300">
                        {concepto}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {ev.caracteristicas && (
                <div className="mb-3 p-3 bg-white/5 rounded-xl">
                  <p className="text-zinc-500 text-sm font-semibold">✨ Servicios explorados en GCP:</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {ev.caracteristicas.map((car, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-full text-zinc-300">
                        {car}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-4 p-3 bg-white/5 rounded-xl border-l-4 border-blue-500/50">
                <p className="text-zinc-500 text-sm font-semibold">💭 Reflexión personal:</p>
                <p className="text-zinc-300 text-sm">{ev.reflexion}</p>
              </div>

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

export default Unidad2

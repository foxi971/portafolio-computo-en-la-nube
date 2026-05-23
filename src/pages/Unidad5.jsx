function Unidad5() {
  const evidencias = [
    {
      id: "5.2",
      titulo: "Análisis y Diseño de una Arquitectura de Red en la Nube (Caso Real)",
      fecha: "16/04/2026",
      estado: "Completada",
      tipo: "Análisis y Diseño",
      pdf: "/5.2 Analisis Diseño Arquitectura Macias Alejandro.pdf",
      descripcion: "Diseño de una arquitectura en GCP para una universidad con 1,200 estudiantes. Incluye análisis de situación actual, identificación de problemas, selección de proveedor, diseño de arquitectura, reglas de firewall, control de accesos, respaldos y estimación de costos.",
      resultados: "Aprendí a diseñar una solución cloud completa para un caso real. La arquitectura incluye: balanceador de carga, instancias e2-medium para Moodle, e2-micro para sistema administrativo, Cloud SQL, Cloud Storage, VPC segmentada, firewall con 8 reglas, VPN para acceso remoto, respaldos automáticos diarios y costos de $88.46 USD/mes ($1,637 MXN).",
      reflexion: "Este ejercicio me demostró que la nube no es solo para grandes empresas. Con GCP y su capa gratuita, una universidad con presupuesto limitado puede tener infraestructura de calidad, escalable y segura. El ahorro es del 67% comparado con el servidor local."
    },
    {
      id: "5.3",
      titulo: "Curso introducción a la contenerización y virtualización",
      fecha: "21/04/2026",
      estado: "No realizada",
      tipo: "Curso",
      pdf: null,
      descripcion: "Curso introductorio sobre contenerización (Docker) y virtualización.",
      resultados: "Actividad no realizada durante el curso.",
      reflexion: "Actividad pendiente. Se aprenderán los fundamentos de contenedores vs máquinas virtuales."
    },
    {
      id: "5.4",
      titulo: "Instalación de Docker",
      fecha: "22/04/2026",
      estado: "Completada",
      tipo: "Práctica",
      pdf: "/dockers Macias Martinez Alejandro.pdf",
      descripcion: "Instalación de Docker en Debian/Ubuntu, configuración de repositorios, prueba con hello-world, descarga y ejecución de contenedor nginx.",
      resultados: "Instalé Docker correctamente. Ejecuté 'docker run hello-world' para verificar. Descargué nginx con 'docker run -d -p 8080:80 nginx'. Tuve un conflicto de puertos y lo solucioné usando el puerto 8081. Aprendí a usar 'docker ps' para ver contenedores activos.",
      reflexion: "Docker facilita el despliegue de aplicaciones sin preocuparse por dependencias. Los contenedores son ligeros y portátiles. Aprendí a resolver problemas de puertos y a verificar el estado de los contenedores."
    },
    {
      id: "5.7",
      titulo: "Creación de VM en la nube (Azure)",
      fecha: "23/04/2026 - 24/04/2026",
      estado: "Completada",
      tipo: "Práctica",
      pdf: "/MN Azure Macias Martinez Alejandro Felipe.pdf",
      descripcion: "Creación de una máquina virtual en Microsoft Azure, conexión por SSH y buenas prácticas para evitar cargos extras.",
      resultados: "Creé una VM en Azure, me conecté por SSH, busqué una región económica y apagué la VM al finalizar para evitar cargos.",
      reflexion: "Lo más tardado fue buscar una región y memoria barata. Azure es robusto y usado en entornos empresariales. Apagar la VM es clave para no gastar de más."
    },
    {
      id: "5.8",
      titulo: "Instalación del entorno LAMP en una máquina virtual",
      fecha: "27/04/2026 - 29/04/2026",
      estado: "Completada",
      tipo: "Práctica",
      pdf: "/LAMP Macias Martinez Alejandro.pdf",
      descripcion: "Instalación de entorno LAMP (Linux, Apache, MySQL, PHP) en una VM de Azure. Configuración de Apache, PHP y MySQL, y creación de base de datos de prueba.",
      resultados: "Instalé Apache2, PHP 8.3 y MySQL. Verifiqué que Apache estuviera activo. Creé una base de datos 'prueba_lamp' y un script PHP testdb.php para verificar conexión a MySQL. La conexión fue exitosa.",
      reflexion: "El entorno LAMP es fundamental para aplicaciones web. Aprendí a instalar y configurar cada componente, y a verificar que todo funcione correctamente."
    },
    {
      id: "5.9",
      titulo: "Despliegue de aplicación CRUD en la nube",
      fecha: "28/04/2026 - 30/04/2026",
      estado: "Completada",
      tipo: "Práctica",
      pdf: "/CRUD Macias Martinez Alejandro Felipe.pdf",
      descripcion: "Despliegue de una aplicación CRUD (Flask) en Azure. Subida por SSH, descompresión y ejecución.",
      resultados: "Subí la aplicación .zip por SSH a Azure, la descomprimí y ejecuté 'python3 app.py'. La aplicación corrió en http://10.0.0.4:5000. Realicé pruebas de inserción de datos.",
      reflexion: "Desplegar una aplicación en la nube es sencillo con SSH. Flask es fácil de usar, pero para producción se necesita un servidor WSGI como Gunicorn."
    },
    {
      id: "5.10",
      titulo: "Migración a servicios administrados",
      fecha: "04/05/2026 - 08/05/2026",
      estado: "No realizada",
      tipo: "Migración",
      pdf: null,
      descripcion: "Migración de aplicaciones a servicios administrados en la nube (ej: Cloud SQL, App Engine, etc.).",
      resultados: "Actividad no realizada durante el curso.",
      reflexion: "Actividad pendiente. Se migrará la aplicación a servicios administrados para reducir operaciones."
    }
  ]

  const temasUnidad = [
    "Análisis y diseño de arquitecturas cloud",
    "Selección de proveedores (AWS, GCP, Azure)",
    "Diseño de VPC, subredes y firewall",
    "VPN y acceso remoto seguro",
    "Respaldos automáticos y recuperación",
    "Estimación de costos en la nube",
    "Contenerización y Docker",
    "Virtualización vs contenedores",
    "Creación de VMs en Azure",
    "Entorno LAMP (Linux, Apache, MySQL, PHP)",
    "Despliegue de aplicaciones CRUD",
    "Migración a servicios administrados"
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-24">
      <div className="mb-12">
        <span className="text-zinc-500 text-sm">Unidad 5</span>
        <h1 className="text-4xl font-black mt-2">Diseño y Desarrollo de Aplicaciones en la Nube</h1>
        <p className="text-zinc-400 mt-4 text-lg">Creación de aplicaciones modernas basadas en servicios cloud.</p>
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

export default Unidad5

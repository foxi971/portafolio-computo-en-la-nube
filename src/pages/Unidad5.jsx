function Unidad5() {
  const evidencias = [
    {
      id: "5.2",
      titulo: "Análisis y Diseño de una Arquitectura de Red en la Nube (Caso Real)",
      fecha: "16/04/2026",
      estado: "Completada",
      tipo: "Análisis y Diseño",
      pdf: "/5.2 Análisis y Diseño de una Arquitectura Macias Macias Alejandro.pdf",
      descripcion: "Diseño de una arquitectura en GCP para una universidad con 1,200 estudiantes. Incluye análisis, selección de proveedor, diseño de arquitectura, reglas de firewall y estimación de costos.",
      resultados: "La arquitectura incluye balanceador de carga, instancias e2-medium para Moodle, Cloud SQL, Cloud Storage, VPN, firewall y respaldos. Costo mensual: $88.46 USD ($1,637 MXN), ahorro del 67% vs servidor local.",
      reflexion: "La nube no es solo para grandes empresas. Con GCP y su capa gratuita, una universidad con presupuesto limitado puede tener infraestructura de calidad."
    },
    {
      id: "5.3",
      titulo: "Curso introducción a la contenerización y virtualización",
      fecha: "21/04/2026",
      estado: "No realizada",
      tipo: "Curso",
      descripcion: "Curso introductorio sobre contenerización (Docker) y virtualización.",
      resultados: "Actividad no realizada durante el curso.",
      reflexion: "Actividad pendiente."
    },
    {
      id: "5.4",
      titulo: "Instalación de Docker",
      fecha: "22/04/2026",
      estado: "Completada",
      tipo: "Práctica",
      pdf: "/dockers Macias Martinez Alejandro.pdf",
      descripcion: "Instalación de Docker en Debian/Ubuntu, prueba con hello-world, descarga y ejecución de contenedor nginx.",
      resultados: "Instalé Docker, ejecuté 'docker run hello-world', descargué nginx y lo corrí en los puertos 8080 y 8081.",
      reflexion: "Docker facilita el despliegue de aplicaciones sin preocuparse por dependencias."
    },
    {
      id: "5.7",
      titulo: "Creación de VM en la nube (Azure)",
      fecha: "23/04/2026 - 24/04/2026",
      estado: "Completada",
      tipo: "Práctica",
      pdf: "/MN Azure Macias Martinez Alejandro Felipe.pdf",
      descripcion: "Creación de una máquina virtual en Microsoft Azure, conexión por SSH y buenas prácticas para evitar cargos extras.",
      resultados: "Creé una VM en Azure, me conecté por SSH, busqué una región económica y apagué la VM al finalizar.",
      reflexion: "Lo más tardado fue buscar una región y memoria barata. Apagar la VM es clave para no gastar de más."
    },
    {
      id: "5.8",
      titulo: "Instalación del entorno LAMP en una máquina virtual",
      fecha: "27/04/2026 - 29/04/2026",
      estado: "Completada",
      tipo: "Práctica",
      pdf: "/LAMP MAcias MArtinez Alejandro.pdf",
      descripcion: "Instalación de entorno LAMP (Linux, Apache, MySQL, PHP) en una VM de Azure.",
      resultados: "Instalé Apache2, PHP 8.3 y MySQL. Verifiqué que Apache estuviera activo. Creé una base de datos 'prueba_lamp' y conecté exitosamente.",
      reflexion: "El entorno LAMP es fundamental para aplicaciones web. Aprendí a instalar y configurar cada componente."
    },
    {
      id: "5.9",
      titulo: "Despliegue de aplicación CRUD en la nube",
      fecha: "28/04/2026 - 30/04/2026",
      estado: "Completada",
      tipo: "Práctica",
      pdf: "/CRUD Macias Martinez Alejandro Felipe.pdf",
      descripcion: "Despliegue de una aplicación CRUD (Flask) en Azure. Subida por SSH, descompresión y ejecución.",
      resultados: "Subí la aplicación .zip por SSH, la descomprimí y ejecuté 'python3 app.py'. La aplicación corrió correctamente.",
      reflexion: "Desplegar una aplicación en la nube es sencillo con SSH. Para producción se necesita un servidor WSGI como Gunicorn."
    },
    {
      id: "5.10",
      titulo: "Migración a servicios administrados",
      fecha: "04/05/2026 - 08/05/2026",
      estado: "No realizada",
      tipo: "Migración",
      descripcion: "Migración de aplicaciones a servicios administrados en la nube.",
      resultados: "Actividad no realizada durante el curso.",
      reflexion: "Actividad pendiente."
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-24">
      <h1 className="text-4xl font-black mb-2">Unidad 5</h1>
      <h2 className="text-2xl text-zinc-400 mb-6">Diseño y Desarrollo de Aplicaciones en la Nube</h2>
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
                <a href={encodeURI(ev.pdf)} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">📄 Ver PDF de la actividad</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Unidad5

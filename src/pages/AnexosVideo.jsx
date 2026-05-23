function AnexosVideo() {
  // Lista de todos los anexos (PDFs disponibles)
  const anexos = [
    { nombre: "Unidad 1 - Arquitectura de red", archivo: "/Act1.1 Alejandro Felipe Macías.pdf", unidad: "Unidad 1" },
    { nombre: "Unidad 1 - Sintesis caracteristicas cloud", archivo: "/Alejandro Macías act 1.2 síntesis .pdf", unidad: "Unidad 1" },
    { nombre: "Unidad 2 - Exploracion AWS", archivo: "/DOC-20260219-WA0000..pdf", unidad: "Unidad 2" },
    { nombre: "Unidad 2 - Exploracion GCP", archivo: "/GCP_Actividad_Extendida.pdf", unidad: "Unidad 2" },
    { nombre: "Unidad 2 - Azure VM", archivo: "/MN Azure Macias Martinez Alejandro Felipe.pdf", unidad: "Unidad 2" },
    { nombre: "Unidad 3 - Sinopsis microservicios y DevOps", archivo: "/3.1 síntesis de los microservicios y flujo devops, Alejandro Felipe Macías Martinez -1.pdf", unidad: "Unidad 3" },
    { nombre: "Unidad 4 - Escalada de privilegios", archivo: "/escala de privilegios.pdf", unidad: "Unidad 4" },
    { nombre: "Unidad 4 - Inyeccion SQL", archivo: "/Demostrar la inyección SQL Macias Martinez Alejandro Felipe.pdf", unidad: "Unidad 4" },
    { nombre: "Unidad 4 - Hardening Apache", archivo: "/Seguridad (hardening) en servidor web Apache 2 Macias Martinez Alejandro Felipe.pdf", unidad: "Unidad 4" },
    { nombre: "Unidad 4 - Google Dorks", archivo: "/ACT 4.5 Macías Martinez Alejandro Felipe -1.pdf", unidad: "Unidad 4" },
    { nombre: "Unidad 4 - Lluvia de ideas", archivo: "/lluvia de ideas(1).jpeg", unidad: "Unidad 4" },
    { nombre: "Unidad 4 - OverTheWire Bandit", archivo: "/encontrar la contraseña, Macias Martinez Alejandro Felipe.pdf", unidad: "Unidad 4" },
    { nombre: "Unidad 4 - Politicas ciberseguridad (Mapa conceptual)", archivo: "/Mapa conceptual con Macías Martinez Alejandro Felipe .pdf", unidad: "Unidad 4" },
    { nombre: "Unidad 4 - Analisis Wireshark", archivo: "/trafico de red macias artinez alejandro felipe.pdf", unidad: "Unidad 4" },
    { nombre: "Unidad 5 - Analisis arquitectura universidad", archivo: "/5.2 Analisis Diseño Arquitectura Macias Alejandro.pdf", unidad: "Unidad 5" },
    { nombre: "Unidad 5 - Instalacion Docker", archivo: "/dockers Macias Martinez Alejandro.pdf", unidad: "Unidad 5" },
    { nombre: "Unidad 5 - Entorno LAMP", archivo: "/LAMP Macias Martinez Alejandro.pdf", unidad: "Unidad 5" },
    { nombre: "Unidad 5 - Aplicacion CRUD", archivo: "/CRUD Macias Martinez Alejandro Felipe.pdf", unidad: "Unidad 5" }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-24">
      <h2 className="text-4xl font-black mb-10">Anexos y Video Demostrativo</h2>
      
      {/* Video */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Video demostrativo</h3>
        <div className="border border-white/10 bg-white/5 rounded-[32px] p-6 backdrop-blur-xl">
          <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center border border-white/10">
            <div className="text-center">
              <div className="text-6xl mb-4">📹</div>
              <p className="text-zinc-400 mb-2">URL del video demostrativo</p>
              <a 
                href="https://youtu.be/lhfbWw_QZk0" 
                className="text-blue-400 hover:text-blue-300 break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://youtu.be/lhfbWw_QZk0
              </a>
              <p className="text-zinc-500 text-sm mt-4">
                Duracion: 3 minutos · Explicacion de las actividades del curso
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Anexos - Todos los PDFs del portafolio */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Material de apoyo - Evidencias</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {anexos.map((anexo, idx) => (
            <a 
              key={idx}
              href={encodeURI(anexo.archivo)} 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 bg-white/5 rounded-xl p-4 backdrop-blur-xl hover:bg-white/10 transition flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📄</span>
                <div>
                  <p className="font-semibold text-sm group-hover:text-blue-400 transition">{anexo.nombre}</p>
                  <p className="text-zinc-500 text-xs">{anexo.unidad}</p>
                </div>
              </div>
              <span className="text-zinc-500 text-sm group-hover:text-blue-400 transition">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* Referencias bibliograficas */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Referencias bibliograficas</h3>
        <div className="border border-white/10 bg-white/5 rounded-2xl p-6 backdrop-blur-xl">
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li>• Amazon Web Services. (2026). <span className="text-zinc-400">Documentacion oficial de AWS. https://aws.amazon.com/documentation/</span></li>
            <li>• Google Cloud. (2026). <span className="text-zinc-400">Documentacion de Google Cloud Platform. https://cloud.google.com/docs</span></li>
            <li>• Microsoft Azure. (2026). <span className="text-zinc-400">Documentacion de Microsoft Azure. https://docs.microsoft.com/azure</span></li>
            <li>• Docker. (2026). <span className="text-zinc-400">Documentacion oficial de Docker. https://docs.docker.com/</span></li>
            <li>• OverTheWire. (2026). <span className="text-zinc-400">Bandit Wargame. https://overthewire.org/wargames/bandit/</span></li>
            <li>• NIST. (2011). <span className="text-zinc-400">NIST SP 500-292: Cloud Computing Reference Architecture.</span></li>
            <li>• ISO/IEC 27017. (2015). <span className="text-zinc-400">Code of practice for information security controls for cloud services.</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AnexosVideo

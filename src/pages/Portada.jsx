function Portada() {
  const temas = [
    { numero: "01", titulo: "Introducción y fundamentos de cómputo en la nube", descripcion: "Conceptos fundamentales, modelos de servicio y evolución del cloud computing." },
    { numero: "02", titulo: "Arquitectura de la nube", descripcion: "Infraestructura, virtualización, redes y arquitecturas escalables." },
    { numero: "03", titulo: "Consideraciones para el desarrollo", descripcion: "Buenas prácticas y tecnologías para aplicaciones cloud." },
    { numero: "04", titulo: "Seguridad", descripcion: "Protección de servicios, autenticación y amenazas en la nube." },
    { numero: "05", titulo: "Diseño y desarrollo de aplicaciones", descripcion: "Creación de aplicaciones modernas basadas en servicios cloud." },
  ]

  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex gap-3 items-center border border-white/10 bg-white/5 rounded-full px-4 py-2 text-sm text-zinc-400 mb-8 backdrop-blur-xl">
            <img src="/escudo_2977c841a7.png" alt="ITS" className="h-6 object-contain" />
            TecNM Saltillo · Cómputo en la Nube
          </div>
          <h1 className="text-6xl md:text-7xl font-black leading-tight">
            Portafolio de
            <span className="block text-zinc-500">Evidencias</span>
          </h1>
          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Proyecto académico desarrollado para documentar las actividades, conocimientos y prácticas
            realizadas durante el curso de Cómputo en la Nube.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
              <p className="text-zinc-500 text-sm">Alumno</p>
              <h3 className="mt-2 font-semibold">Alejandro Felipe Macias Martinez</h3>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
              <p className="text-zinc-500 text-sm">Profesor</p>
              <h3 className="mt-2 font-semibold">Salazar Del Bosque Miguel</h3>
            </div>
          </div>
        </div>

        <div className="relative border border-white/10 bg-white/[0.03] rounded-[32px] p-8 backdrop-blur-2xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <div className="relative flex justify-between items-center mb-8">
            <div>
              <p className="text-zinc-500 text-sm">Materia</p>
              <h2 className="text-2xl font-bold mt-2">Cómputo en la Nube</h2>
            </div>
            <div className="text-5xl">☁️</div>
          </div>
          <div className="relative space-y-4">
            {temas.map((tema) => (
              <div key={tema.numero} className="border border-white/10 bg-black/30 rounded-2xl p-4 backdrop-blur-xl hover:bg-white/5 transition">
                <div className="flex gap-4">
                  <div className="text-zinc-500 font-bold">{tema.numero}</div>
                  <div>
                    <h3 className="font-semibold">{tema.titulo}</h3>
                    <p className="text-zinc-400 text-sm mt-2">{tema.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portada

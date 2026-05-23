function IntroduccionObjetivos() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-24">
      {/* Introducción */}
      <div className="mb-16">
        <h2 className="text-4xl font-black mb-6">Introducción</h2>
        <div className="border border-white/10 bg-white/5 rounded-[32px] p-8 backdrop-blur-xl">
          <p className="text-zinc-300 leading-relaxed mb-4">
            El presente portafolio de evidencias documenta las actividades, prácticas y aprendizajes 
            realizados durante el curso de <span className="text-white font-semibold">Cómputo en la Nube</span> 
            en el TecNM Campus Saltillo.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            <span className="text-white font-semibold">¿Qué se documenta?</span> Cada una de las actividades 
            desarrolladas en las 5 unidades del curso, incluyendo prácticas de laboratorio, investigaciones, 
            diagramas de arquitectura, y el desarrollo de una aplicación en la nube.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            <span className="text-white font-semibold">¿Por qué es importante?</span> Este portafolio permite 
            evidenciar las competencias adquiridas, sirve como material de consulta y demuestra la capacidad 
            de aplicar los conceptos del cloud computing en proyectos reales.
          </p>
        </div>
      </div>

      {/* Objetivos */}
      <div>
        <h2 className="text-4xl font-black mb-6">Objetivos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-white/10 bg-white/5 rounded-[32px] p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Objetivo General</h3>
            <p className="text-zinc-300 leading-relaxed">
              Desarrollar aplicaciones web escalables y seguras utilizando los fundamentos, arquitecturas 
              y buenas prácticas del cómputo en la nube.
            </p>
          </div>
          <div className="border border-white/10 bg-white/5 rounded-[32px] p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Objetivos Específicos</h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex gap-3"><span className="text-green-400">✓</span> Identificar los modelos de servicio y despliegue en la nube.</li>
              <li className="flex gap-3"><span className="text-green-400">✓</span> Diseñar arquitecturas escalables y tolerantes a fallos.</li>
              <li className="flex gap-3"><span className="text-green-400">✓</span> Implementar medidas de seguridad en aplicaciones cloud.</li>
              <li className="flex gap-3"><span className="text-green-400">✓</span> Desplegar una aplicación funcional utilizando servicios cloud.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroduccionObjetivos

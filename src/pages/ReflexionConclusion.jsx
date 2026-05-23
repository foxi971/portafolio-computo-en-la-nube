function ReflexionConclusion() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-24">
      {/* Reflexion final */}
      <div className="mb-16">
        <h2 className="text-4xl font-black mb-6">Reflexion final</h2>
        <div className="border border-white/10 bg-white/5 rounded-[32px] p-8 backdrop-blur-xl">
          
          <h3 className="text-xl font-bold text-zinc-400 mb-4">Resumen de lo aprendido</h3>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Durante el curso de Computo en la Nube, aprendi los fundamentos del cloud computing, 
            desde la virtualizacion hasta el despliegue de aplicaciones completas en plataformas cloud.
            Comprendi los modelos IaaS, PaaS y SaaS, asi como las arquitecturas escalables y las 
            consideraciones de seguridad.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-6">
            En la <span className="text-white font-semibold">Unidad 1</span> aprendi los conceptos 
            fundamentales y realice un esquema de arquitectura de red local. En la 
            <span className="text-white font-semibold"> Unidad 2</span> explore AWS, GCP y Azure, 
            comprendiendo sus diferencias y casos de uso. En la <span className="text-white font-semibold">Unidad 3</span> 
            estudie microservicios y DevOps. En la <span className="text-white font-semibold">Unidad 4</span> 
            realice practicas de escalada de privilegios, inyeccion SQL, hardening de Apache y analisis de trafico 
            con Wireshark. Finalmente, en la <span className="text-white font-semibold">Unidad 5</span> 
            disene una arquitectura completa para una universidad, instale Docker, desplegue una VM en Azure, 
            configure un entorno LAMP y desplegue una aplicacion CRUD.
          </p>
          
          <h3 className="text-xl font-bold text-zinc-400 mb-4">Fortalezas identificadas</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-6">
            <li>Capacidad para disenar arquitecturas cloud escalables y seguras.</li>
            <li>Implementacion de medidas de seguridad como firewall, consultas preparadas y hardening.</li>
            <li>Despliegue de aplicaciones usando servicios cloud (Azure, GCP).</li>
            <li>Manejo de herramientas como Docker, Git y Wireshark.</li>
            <li>Analisis de costos y optimizacion de recursos en la nube.</li>
          </ul>

          <h3 className="text-xl font-bold text-zinc-400 mb-4">Areas de oportunidad</h3>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-6">
            <li>Profundizar en orquestacion con Kubernetes.</li>
            <li>Optimizacion avanzada de costos en servicios cloud.</li>
            <li>Automatizacion de despliegues con CI/CD (GitHub Actions, Jenkins).</li>
            <li>Migracion de aplicaciones a servicios administrados.</li>
            <li>Mejorar en la realizacion de actividades a tiempo.</li>
          </ul>

          <h3 className="text-xl font-bold text-zinc-400 mb-4">Aplicacion futura</h3>
          <p className="text-zinc-300 leading-relaxed">
            Aplicare estos conocimientos en proyectos profesionales y personales, desarrollando 
            aplicaciones nativas de la nube que sean escalables, seguras y eficientes. Tambien 
            me servira para certificaciones como AWS Cloud Practitioner o Azure Fundamentals, 
            y para mi desempeno laboral en el area de infraestructura cloud.
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <div>
        <h2 className="text-4xl font-black mb-6">Conclusion</h2>
        <div className="border border-white/10 bg-white/5 rounded-[32px] p-8 backdrop-blur-xl">
          <p className="text-zinc-300 leading-relaxed mb-4">
            Este portafolio de evidencias representa mi trayectoria de aprendizaje en el curso 
            de Computo en la Nube. Cada actividad documentada demuestra las competencias adquiridas 
            y refleja mi compromiso con la formacion profesional.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            El portafolio no solo es un requisito academico, sino una herramienta valiosa para 
            mostrar mis habilidades tecnicas y mi capacidad para resolver problemas del mundo real 
            usando tecnologias cloud. A traves de las 5 unidades, he podido:
          </p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
            <li>Comprender los fundamentos del cloud computing.</li>
            <li>Explorar las principales plataformas cloud (AWS, GCP, Azure).</li>
            <li>Aplicar buenas practicas de seguridad.</li>
            <li>Desplegar aplicaciones en infraestructura cloud.</li>
          </ul>
          <p className="text-zinc-300 leading-relaxed">
            Este portafolio quedara como evidencia de mi formacion y como consulta para futuros 
            proyectos profesionales.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ReflexionConclusion

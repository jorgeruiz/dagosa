import Image from "next/image"

const differentiators = [
  {
    icon: "⚡",
    title: "Flota propia de +80 equipos",
    desc: "No somos intermediarios. Todos los equipos son nuestros, lo que garantiza disponibilidad inmediata y precios directos.",
  },
  {
    icon: "📋",
    title: "Tecnología paperless",
    desc: "Reportes digitales en tiempo real tras cada servicio de mantenimiento. Tu gerente siempre sabe el estado exacto de cada equipo.",
  },
  {
    icon: "🛡️",
    title: "Empresa 100% mexicana",
    desc: "Más de 8 años de constitución y más de 10 años de experiencia acumulada en el sector de manejo de materiales.",
  },
  {
    icon: "⚙️",
    title: "3 niveles de mantenimiento",
    desc: "Pólizas estructuradas con revisiones progresivas para garantizar la máxima vida útil de tu flota.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="bg-[#F8F9FA] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-24">

        {/* Main grid */}
        <div
          className="about-content grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch mb-16"
          data-reveal
        >
          <div>
            <span className="inline-block text-[#3DAE4B] font-semibold text-xs tracking-widest uppercase mb-4 font-[family-name:var(--font-inter)]">
              Quiénes somos
            </span>
            <h2
              className="font-[family-name:var(--font-sora)] font-bold text-[#0F172A] leading-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              Más de 10 años moviendo la industria de Nuevo León
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-6 font-[family-name:var(--font-inter)]">
              Dagosa es una empresa mexicana con sede en Apodaca, Nuevo León, especializada
              en venta, renta y mantenimiento de montacargas eléctricos para empresas
              manufactureras, logísticas y comerciales en la Zona Metropolitana de Monterrey.
            </p>
            <p className="text-[#64748B] text-base leading-relaxed font-[family-name:var(--font-inter)]">
              Fundada hace 8 años y con más de 10 años de experiencia operativa en el sector,
              contamos con una flota propia de más de 80 equipos de diversas categorías
              disponibles para renta semanal, mensual o contrato anual. Adicionalmente,
              contamos con presencia en San Juan, Texas, EUA.
            </p>

            {/* Verificable data — AEO */}
            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { label: "Antigüedad", value: "8 años constituida" },
                { label: "Experiencia", value: "+10 años en el sector" },
                { label: "Flota", value: "+80 equipos propios" },
                { label: "Cobertura", value: "Zona Metro Monterrey" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#3DAE4B] pl-3">
                  <div className="text-xs text-[#64748B] uppercase tracking-wide font-[family-name:var(--font-inter)]">
                    {item.label}
                  </div>
                  <div className="text-[#0F172A] font-semibold text-sm mt-0.5 font-[family-name:var(--font-sora)]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image — vertical */}
          <div className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-0 lg:self-stretch aspect-[3/4] lg:aspect-auto">
            <Image
              src="/images/about-section.webp"
              alt="Flota de montacargas eléctricos Dagosa en instalación industrial de Nuevo León"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/40 to-transparent" />
          </div>
        </div>

        {/* Differentiators */}
        <div className="about-diff-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((d, i) => (
            <div
              key={d.title}
              data-reveal
              data-delay={i * 70}
              className="card-hover bg-white rounded-2xl p-6 border border-slate-100 hover:border-[#3DAE4B]/40 transition-colors duration-200"
            >
              <div className="text-3xl mb-4">{d.icon}</div>
              <h3 className="font-[family-name:var(--font-sora)] font-semibold text-[#0F172A] text-base mb-2">
                {d.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

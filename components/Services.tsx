import Image from "next/image"

const services = [
  {
    id: "venta",
    image: "/images/service-venta.webp",
    alt: "Venta de montacargas eléctricos nuevos para empresas en Nuevo León",
    badge: "Venta",
    title: "Venta de Montacargas Eléctricos Seminuevos",
    desc: "DAGOSA ofrece equipos eléctricos seminuevos con los más altos estándares de rendimiento y durabilidad, ideal para empresas que buscan optimizar costos sin comprometer su operación.",
    features: [
      "Hombre parado contrabalanceado tipo tijera",
      "Hombre parado contrabalanceado",
      "Hombre sentado de 4 ruedas",
      "Revisados y certificados para operación",
    ],
    cta: "Consultar disponibilidad",
  },
  {
    id: "renta",
    image: "/images/service-renta.webp",
    alt: "Renta de montacargas eléctricos para operaciones industriales y logísticas",
    badge: "Renta",
    title: "Renta de Montacargas Eléctricos",
    desc: "Renta semanal, mensual o bajo contrato anual para empresas en Nuevo León. El contrato anual incluye equipo disponible, mantenimiento prioritario y soporte técnico todo el año.",
    features: [
      "Renta semanal — proyectos puntuales",
      "Renta mensual — flexibilidad operativa",
      "Contrato anual — equipo garantizado 12 meses",
      "Mantenimiento prioritario incluido en contrato anual",
    ],
    cta: "Cotizar renta",
  },
  {
    id: "mantenimiento-general",
    image: "/images/service-mantenimiento.webp",
    alt: "Técnico especializado realizando mantenimiento a montacargas eléctrico",
    badge: "Mantenimiento",
    title: "Mantenimiento Preventivo y Correctivo",
    desc: "Pólizas de mantenimiento con 3 niveles de revisión y servicio correctivo de respuesta ágil. Documentación digital en tiempo real para que tu empresa siempre sepa el estado de su flota.",
    features: [
      "3 niveles de revisión preventiva",
      "Reportes digitales en tiempo real (paperless)",
      "Servicio correctivo para fallas urgentes",
      "Venta de refacciones nuevas y seminuevas",
    ],
    cta: "Ver pólizas",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-[#111827] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-24">

        {/* Header */}
        <div className="text-center mb-14" data-reveal>
          <span className="inline-block text-[#3DAE4B] font-semibold text-xs tracking-widest uppercase mb-4 font-[family-name:var(--font-inter)]">
            Servicios
          </span>
          <h2
            className="font-[family-name:var(--font-sora)] font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Renta de Montacargas Eléctricos en Monterrey
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg font-[family-name:var(--font-inter)]">
            Soluciones completas para el manejo de materiales en tu empresa.
            Desde la adquisición hasta el mantenimiento continuo.
          </p>
        </div>

        {/* Cards */}
        <div className="services-grid grid lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.id}
              data-reveal
              data-delay={i * 80}
              className="card-hover group relative overflow-hidden rounded-2xl bg-[#0d1f33] border border-white/10 hover:border-[#3DAE4B]/40 transition-colors duration-200"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f33] via-[#0d1f33]/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#3DAE4B] text-white text-xs font-semibold px-3 py-1 rounded-full font-[family-name:var(--font-inter)]">
                    {s.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-sora)] font-bold text-white text-lg mb-3">
                  {s.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5 font-[family-name:var(--font-inter)]">
                  {s.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-white/70 text-sm font-[family-name:var(--font-inter)]">
                      <span className="text-[#3DAE4B] mt-0.5 flex-shrink-0">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/528125591045"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contactar por WhatsApp — ${s.title}`}
                  className="block text-center bg-[#3DAE4B]/10 hover:bg-[#3DAE4B] border border-[#3DAE4B]/30 hover:border-[#3DAE4B] text-[#3DAE4B] hover:text-white font-semibold text-sm py-3 rounded-xl transition-all duration-[180ms] ease-out active:scale-[0.97] font-[family-name:var(--font-inter)]"
                >
                  {s.cta}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Additional services row */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Maniobras por día", desc: "Capacidad operativa puntual sin contrato extendido" },
            { title: "Venta de refacciones", desc: "Refacciones nuevas y seminuevas para montacargas eléctricos" },
            { title: "Mantenimiento correctivo", desc: "Respuesta ágil ante fallas para no detener tu operación" },
          ].map((item, i) => (
            <div
              key={item.title}
              data-reveal
              data-delay={i * 60}
              className="bg-[#0d1f33]/60 border border-white/10 hover:border-[#3DAE4B]/30 rounded-xl p-5 flex items-start gap-4 transition-colors duration-200"
            >
              <span className="text-[#3DAE4B] text-xl mt-0.5">→</span>
              <div>
                <h4 className="font-[family-name:var(--font-sora)] font-semibold text-white text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-white/50 text-xs font-[family-name:var(--font-inter)]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

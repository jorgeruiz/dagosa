import Image from "next/image"

const fleetModels = [
  {
    id: "tijera",
    name: "Montacargas Hombre Parado Contrabalanceado Tipo Tijera",
    shortName: "Hombre Parado Tipo Tijera",
    desc: "Ideal para operación en pasillos estrechos y manejo de materiales en altura. Alta maniobrabilidad en espacios limitados.",
    image: "/images/fleet-tijera.webp",
    alt: "Montacargas hombre parado contrabalanceado tipo tijera eléctrico",
    tags: ["Pasillos estrechos", "Alta elevación", "Seminuevo"],
  },
  {
    id: "parado",
    name: "Montacargas Hombre Parado Contrabalanceado",
    shortName: "Hombre Parado Contrabalanceado",
    desc: "Para manejo eficiente de materiales en almacenes y plantas industriales. Versatilidad y precisión en cada maniobra.",
    image: "/images/service-renta.webp",
    alt: "Montacargas hombre parado contrabalanceado eléctrico en bodega",
    tags: ["Almacenes", "Versatilidad", "Seminuevo"],
  },
  {
    id: "sentado",
    name: "Montacargas Eléctrico Hombre Sentado 4 Ruedas",
    shortName: "Hombre Sentado 4 Ruedas",
    desc: "Para cargas pesadas y operación intensiva en pisos industriales. Máxima estabilidad y capacidad de carga.",
    image: "/images/service-venta.webp",
    alt: "Montacargas eléctrico hombre sentado de 4 ruedas en planta industrial",
    tags: ["Cargas pesadas", "Operación intensiva", "Seminuevo"],
  },
]

export function Fleet() {
  return (
    <section id="flota" className="bg-[#F8F9FA] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-24">

        {/* Header */}
        <div className="text-center mb-14" data-reveal>
          <span className="inline-block text-[#3DAE4B] font-semibold text-xs tracking-widest uppercase mb-4 font-[family-name:var(--font-inter)]">
            Flota disponible
          </span>
          <h2
            className="font-[family-name:var(--font-sora)] font-bold text-[#0F172A] leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Montacargas Eléctricos Seminuevos en Venta y Renta
          </h2>
          <p className="text-[#64748B] mt-4 max-w-2xl mx-auto text-lg font-[family-name:var(--font-inter)]">
            Más de 80 equipos en diversas categorías. Todos revisados y certificados
            para operación bajo estándares de rendimiento industrial.
          </p>
        </div>

        {/* Fleet grid */}
        <div className="fleet-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {fleetModels.map((model, i) => (
            <article
              key={model.id}
              data-reveal
              data-delay={i * 80}
              className="card-hover group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#3DAE4B]/30 transition-colors duration-200"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1F3A5F]">
                <Image
                  src={model.image}
                  alt={model.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {model.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-[#3DAE4B] bg-[#3DAE4B]/10 px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0F172A] text-base mb-2">
                  {model.shortName}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-5 font-[family-name:var(--font-inter)]">
                  {model.desc}
                </p>
                <a
                  href="https://wa.me/528125591045"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar disponibilidad de ${model.name}`}
                  className="inline-flex items-center gap-2 text-[#3DAE4B] hover:text-[#2E9E47] hover:gap-3 font-semibold text-sm transition-all duration-[180ms] ease-out font-[family-name:var(--font-inter)]"
                >
                  Consultar disponibilidad
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="mt-12 text-center" data-reveal>
          <p className="text-[#64748B] mb-4 font-[family-name:var(--font-inter)]">
            ¿No encuentras el modelo que necesitas? Contáctanos — tenemos más de 80 equipos disponibles.
          </p>
          <a
            href="https://wa.me/528125591045"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp para consultar disponibilidad de flota"
            className="inline-flex items-center gap-3 bg-[#1F3A5F] hover:bg-[#0d1f33] text-white font-semibold px-8 py-4 rounded-full transition-all duration-[180ms] ease-out hover:scale-[1.02] active:scale-[0.97] font-[family-name:var(--font-inter)]"
          >
            Ver catálogo completo por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

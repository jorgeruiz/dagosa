import Image from "next/image"

const testimonials = [
  {
    quote:
      "Llevamos 3 años con Dagosa en contrato anual. La tranquilidad de tener equipo garantizado y mantenimiento incluido no tiene precio. Su tiempo de respuesta ante cualquier falla es impresionante.",
    author: "Gerente de Operaciones",
    company: "Empresa de manufactura, Apodaca N.L.",
    initials: "GO",
  },
  {
    quote:
      "Los reportes digitales después de cada mantenimiento son un diferenciador real. Puedo mostrarle al director el historial completo de cada montacargas en segundos. Muy profesionales.",
    author: "Jefe de Almacén",
    company: "Distribuidora logística, San Nicolás N.L.",
    initials: "JA",
  },
  {
    quote:
      "Necesitábamos equipos para una temporada alta de 2 meses. Dagosa nos los tuvo disponibles en poco tiempo y el estado de los montacargas era excelente. Los recomiendo sin dudar.",
    author: "Responsable de Compras",
    company: "Empresa retail, Monterrey N.L.",
    initials: "RC",
  },
]

export function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/testimonials-bg.webp"
          alt="Interior de planta industrial moderna con montacargas eléctricos al fondo"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0d1f33]/85" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#3DAE4B] font-semibold text-xs tracking-widest uppercase mb-4 font-[family-name:var(--font-inter)]">
            Lo que dicen nuestros clientes
          </span>
          <h2
            className="font-[family-name:var(--font-sora)] font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Empresas que confían en Dagosa
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-[#3DAE4B]/30 transition-all duration-300"
            >
              {/* Quote mark */}
              <div
                className="text-[#3DAE4B] font-bold mb-4 font-[family-name:var(--font-sora)]"
                style={{ fontSize: "3rem", lineHeight: "1" }}
                aria-hidden="true"
              >
                "
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6 font-[family-name:var(--font-inter)]">
                {t.quote}
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3DAE4B]/20 border border-[#3DAE4B]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#3DAE4B] font-bold text-sm font-[family-name:var(--font-sora)]">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm font-[family-name:var(--font-sora)]">
                    {t.author}
                  </div>
                  <div className="text-white/50 text-xs font-[family-name:var(--font-inter)]">
                    {t.company}
                  </div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

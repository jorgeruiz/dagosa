const levels = [
  {
    num: "01",
    title: "Nivel 1 — Mantenimiento Básico",
    desc: "Revisión y mantenimiento general del equipo para garantizar operación continua.",
    items: [
      "Limpieza general del equipo",
      "Revisión y reposición de fluidos",
      "Revisión de lubricantes",
      "Ajustes generales",
      "Revisión de frenos y dirección",
    ],
  },
  {
    num: "02",
    title: "Nivel 2 — Mantenimiento Electrónico",
    desc: "Revisión profunda de sistemas eléctricos y electrónicos del montacargas.",
    items: [
      "Todo lo del Nivel 1",
      "Revisión y limpieza de conectores eléctricos",
      "Revisión de componentes electrónicos",
      "Diagnóstico de sistema de carga",
      "Revisión de controladores",
    ],
    featured: true,
  },
  {
    num: "03",
    title: "Nivel 3 — Mantenimiento Integral",
    desc: "Revisión completa incluyendo motores para máxima vida útil del equipo.",
    items: [
      "Todo lo del Nivel 2",
      "Revisión completa de motores eléctricos",
      "Revisión de transmisión",
      "Inspección de estructura y mástil",
      "Reporte digital detallado en tiempo real",
    ],
  },
]

export function Maintenance() {
  return (
    <section id="mantenimiento" className="bg-[#0d1f33] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-24">

        {/* Header */}
        <div className="text-center mb-14" data-reveal>
          <span className="inline-block text-[#3DAE4B] font-semibold text-xs tracking-widest uppercase mb-4 font-[family-name:var(--font-inter)]">
            Pólizas de Mantenimiento
          </span>
          <h2
            className="font-[family-name:var(--font-sora)] font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Mantenimiento Preventivo de Montacargas en Monterrey
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg font-[family-name:var(--font-inter)]">
            Tres niveles de revisión progresiva con documentación digital en tiempo real.
            Más vida útil para tu flota, menos paros de operación.
          </p>
        </div>

        {/* Levels grid */}
        <div className="maint-grid grid lg:grid-cols-3 gap-6">
          {levels.map((level, i) => (
            <div
              key={level.num}
              data-reveal
              data-delay={i * 80}
              className={`card-hover relative rounded-2xl p-8 border transition-colors duration-200 ${
                level.featured
                  ? "bg-[#3DAE4B] border-[#3DAE4B] shadow-2xl shadow-[#3DAE4B]/20 scale-[1.02]"
                  : "bg-[#1F3A5F]/50 border-white/10 hover:border-[#3DAE4B]/40"
              }`}
            >
              {level.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-[#3DAE4B] text-xs font-bold px-4 py-1 rounded-full font-[family-name:var(--font-inter)]">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              <div className={`font-[family-name:var(--font-sora)] font-bold text-5xl mb-2 ${level.featured ? "text-white/30" : "text-[#3DAE4B]/30"}`}>
                {level.num}
              </div>
              <h3 className="font-[family-name:var(--font-sora)] font-bold text-xl mb-3 text-white">
                {level.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 font-[family-name:var(--font-inter)] ${level.featured ? "text-white/80" : "text-white/60"}`}>
                {level.desc}
              </p>

              <ul className="space-y-3 mb-8">
                {level.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 text-sm font-[family-name:var(--font-inter)] ${level.featured ? "text-white" : "text-white/70"}`}
                  >
                    <span className={`flex-shrink-0 mt-0.5 ${level.featured ? "text-white" : "text-[#3DAE4B]"}`}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/528125591045"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Cotizar ${level.title} por WhatsApp`}
                className={`block text-center font-semibold py-3 rounded-xl transition-all duration-[180ms] ease-out active:scale-[0.97] text-sm font-[family-name:var(--font-inter)] ${
                  level.featured
                    ? "bg-white text-[#3DAE4B] hover:bg-white/90"
                    : "bg-[#3DAE4B]/10 border border-[#3DAE4B]/30 hover:bg-[#3DAE4B] text-[#3DAE4B] hover:text-white"
                }`}
              >
                Cotizar esta póliza
              </a>
            </div>
          ))}
        </div>

        {/* Correctivo */}
        <div className="mt-12 bg-[#1F3A5F]/40 border border-white/10 rounded-2xl p-8 lg:p-10" data-reveal>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start lg:items-center">
            <div className="flex-1">
              <h3 className="font-[family-name:var(--font-sora)] font-bold text-white text-xl mb-3">
                Mantenimiento Correctivo — Atención a Fallas
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                ¿Tu montacargas presentó una falla? Dagosa ofrece servicio de reparación y
                mantenimiento correctivo para montacargas eléctricos, disponible para atender
                averías aunque no exista una póliza preventiva vigente. Respuesta ágil para
                que tu operación no se detenga.
              </p>
            </div>
            <a
              href="https://wa.me/528125591045"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar servicio correctivo de emergencia por WhatsApp"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-[#1F3A5F] hover:bg-[#3DAE4B] hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-[180ms] ease-out active:scale-[0.97] text-sm font-[family-name:var(--font-inter)]"
            >
              Solicitar servicio urgente
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

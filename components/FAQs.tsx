"use client"

import { useState } from "react"

const faqs = [
  {
    q: "¿Qué tipos de montacargas eléctricos tienen disponibles?",
    a: "Contamos con más de 80 unidades en diversas categorías: montacargas hombre parado contrabalanceado tipo tijera, montacargas hombre parado contrabalanceado y montacargas eléctricos hombre sentado de 4 ruedas. Todos nuestros equipos están disponibles para venta o renta según las necesidades de tu empresa.",
  },
  {
    q: "¿Cuál es la diferencia entre renta semanal, mensual y contrato anual?",
    a: "La renta semanal y mensual es ideal para proyectos o picos de operación puntuales, ofreciéndote flexibilidad sin compromiso de largo plazo. El contrato anual garantiza equipo disponible durante todo el año, mantenimiento prioritario y soporte técnico continuo, ideal para empresas con operación constante que buscan tranquilidad operativa.",
  },
  {
    q: "¿Qué incluyen las pólizas de mantenimiento preventivo?",
    a: "Todas nuestras pólizas de mantenimiento preventivo incluyen 3 niveles de revisión: Nivel 1 — Limpieza, revisión de fluidos y lubricantes, y ajustes generales. Nivel 2 — Revisión y limpieza de conectores y componentes electrónicos. Nivel 3 — Revisión de motores. El mantenimiento preventivo regular aumenta la vida útil de tus equipos y reduce paros de operación.",
  },
  {
    q: "¿Por qué elegir montacargas eléctricos en lugar de montacargas de combustión?",
    a: "Los montacargas eléctricos eliminan el gasto en gasolina o gas LP, reducen significativamente los costos de mantenimiento, no emiten gases contaminantes en espacios cerrados y generan menos ruido operativo. Para empresas en manufactura, retail o logística, representan una reducción de costos operativos de largo plazo.",
  },
  {
    q: "¿Cuánto cuesta rentar un montacargas eléctrico en Monterrey?",
    a: "El costo de renta de un montacargas eléctrico en Monterrey varía según el modelo, la capacidad de carga y el plazo del contrato (semanal, mensual o anual). Dagosa maneja esquemas de renta semanal, mensual y bajo contrato anual; el precio específico se cotiza según el equipo requerido y la duración del servicio. Para obtener una cotización, puedes contactar a Dagosa directamente al +52 (81) 2559 1045 o 1046.",
  },
  {
    q: "¿Venden refacciones para montacargas eléctricos?",
    a: "Sí. Contamos con refacciones nuevas y seminuevas para montacargas eléctricos. Ofrecemos las piezas necesarias para mantener tus equipos en operación, ya sean equipos adquiridos con Dagosa o de otras marcas.",
  },
  {
    q: "¿Cuánto tiempo tardan en atender una falla o avería de mi montacargas?",
    a: "Nuestro servicio de mantenimiento correctivo está diseñado para darte una pronta solución y que tu operación no se detenga. El tiempo de respuesta depende de la ubicación y la naturaleza de la falla. Contáctanos directamente al +52 (81) 2559 1045 para coordinación inmediata.",
  },
  {
    q: "¿Atienden empresas fuera de Monterrey dentro de Nuevo León?",
    a: "Sí. Ofrecemos servicio en toda el área metropolitana de Monterrey y municipios del estado de Nuevo León. También contamos con presencia en San Juan, Texas, EUA. Contáctanos para confirmar cobertura en tu ubicación específica.",
  },
  {
    q: "¿Cómo solicito una cotización?",
    a: "Puedes solicitar tu cotización llenando el formulario de contacto en nuestro sitio web, escribiéndonos por WhatsApp o llamando al +52 (81) 2559 1045 o 1046. Un asesor te contactará para entender tus requerimientos y presentarte las opciones más adecuadas para tu operación.",
  },
]

export function FAQs() {
  // First 3 open by default — AEO requirement
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0, 1, 2]))

  const toggle = (i: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <section id="faqs" className="bg-[#F8F9FA] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12" data-reveal>
            <span className="inline-block text-[#3DAE4B] font-semibold text-xs tracking-widest uppercase mb-4 font-[family-name:var(--font-inter)]">
              Preguntas frecuentes
            </span>
            <h2
              className="font-[family-name:var(--font-sora)] font-bold text-[#0F172A] leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Todo lo que necesitas saber sobre montacargas eléctricos
            </h2>
          </div>

          {/* FAQ list */}
          <div className="faq-list space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openItems.has(i)
              const panelId = `faq-answer-${i}`

              return (
                <div
                  key={i}
                  data-reveal
                  data-delay={i * 40}
                  className={`faq-item bg-white rounded-2xl border transition-all duration-200 ${
                    isOpen ? "border-[#3DAE4B]/30 shadow-md" : "border-slate-100"
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                  >
                    <span className="font-[family-name:var(--font-sora)] font-semibold text-[#0F172A] text-base leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
                        isOpen
                          ? "border-[#3DAE4B] bg-[#3DAE4B] text-white"
                          : "border-slate-300 text-slate-400"
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M2 4l4 4 4-4" />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={panelId}
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
                    style={!isOpen ? { visibility: "hidden" } : undefined}
                  >
                    <p className="px-6 pb-6 text-[#64748B] text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center" data-reveal>
            <p className="text-[#64748B] mb-4 text-sm font-[family-name:var(--font-inter)]">
              ¿Tienes otra pregunta? Un asesor te responde en minutos.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[#3DAE4B] hover:bg-[#2E9E47] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-[180ms] ease-out hover:scale-[1.03] active:scale-[0.97] text-sm font-[family-name:var(--font-inter)]"
            >
              Ir al formulario de cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

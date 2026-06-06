"use client"

import { useRef } from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const schema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  empresa: z.string().min(2, "El nombre de la empresa es requerido"),
  telefono: z.string().min(10, "Ingresa un número de teléfono válido"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

type FormData = z.infer<typeof schema>

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    const msg = encodeURIComponent(
      `Hola Dagosa, me gustaría solicitar una cotización.\n\nNombre: ${data.nombre}\nEmpresa: ${data.empresa}\nTeléfono: ${data.telefono}\nMensaje: ${data.mensaje}`
    )
    window.open(`https://wa.me/528125591045?text=${msg}`, "_blank")
    reset()
  }

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-bg.webp"
          alt="Muelle de carga industrial en Nuevo León al atardecer con montacargas al fondo"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0d1f33]/90" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — info */}
          <div>
            <span className="inline-block text-[#3DAE4B] font-semibold text-xs tracking-widest uppercase mb-4 font-[family-name:var(--font-inter)]">
              Cotiza ahora
            </span>
            <h2
              className="font-[family-name:var(--font-sora)] font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              ¿Listo para optimizar tu operación con montacargas eléctricos?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8 font-[family-name:var(--font-inter)]">
              Un asesor de Dagosa te contactará para entender tus requerimientos y
              presentarte las opciones más adecuadas para tu empresa en Nuevo León.
            </p>

            {/* Direct contacts */}
            <div className="space-y-4">
              <a
                href="https://wa.me/528125591045"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp al +52 81 2559 1045"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#3DAE4B]/20 border border-[#3DAE4B]/30 flex items-center justify-center group-hover:bg-[#3DAE4B]/40 transition-colors">
                  <span className="text-[#3DAE4B] text-lg">📱</span>
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wide font-[family-name:var(--font-inter)]">
                    WhatsApp / Teléfono
                  </div>
                  <div className="text-white font-semibold font-[family-name:var(--font-sora)] group-hover:text-[#3DAE4B] transition-colors">
                    +52 (81) 2559 1045 y 1046
                  </div>
                </div>
              </a>

              <a
                href="mailto:ventas@equiposdagosa.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#3DAE4B]/20 border border-[#3DAE4B]/30 flex items-center justify-center group-hover:bg-[#3DAE4B]/40 transition-colors">
                  <span className="text-[#3DAE4B] text-lg">✉️</span>
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wide font-[family-name:var(--font-inter)]">
                    Email
                  </div>
                  <div className="text-white font-semibold font-[family-name:var(--font-sora)] group-hover:text-[#3DAE4B] transition-colors">
                    ventas@equiposdagosa.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3DAE4B]/20 border border-[#3DAE4B]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#3DAE4B] text-lg">📍</span>
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wide font-[family-name:var(--font-inter)]">
                    Ubicación
                  </div>
                  <address className="text-white font-semibold not-italic font-[family-name:var(--font-sora)] text-sm leading-snug mt-0.5">
                    Antigua Carretera a Roma 329,<br />
                    Valle de Mexquital, Apodaca, N.L., C.P. 66632
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 lg:p-9">
            <h3 className="font-[family-name:var(--font-sora)] font-bold text-white text-xl mb-6">
              Solicitar cotización
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-white/70 text-sm mb-1.5 font-[family-name:var(--font-inter)]"
                >
                  Nombre *
                </label>
                <input
                  id="nombre"
                  type="text"
                  autoComplete="name"
                  {...register("nombre")}
                  aria-describedby={errors.nombre ? "nombre-error" : undefined}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#3DAE4B] transition-colors font-[family-name:var(--font-inter)]"
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <p id="nombre-error" className="text-red-400 text-xs mt-1 font-[family-name:var(--font-inter)]">
                    {errors.nombre.message}
                  </p>
                )}
              </div>

              {/* Empresa */}
              <div>
                <label
                  htmlFor="empresa"
                  className="block text-white/70 text-sm mb-1.5 font-[family-name:var(--font-inter)]"
                >
                  Empresa *
                </label>
                <input
                  id="empresa"
                  type="text"
                  autoComplete="organization"
                  {...register("empresa")}
                  aria-describedby={errors.empresa ? "empresa-error" : undefined}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#3DAE4B] transition-colors font-[family-name:var(--font-inter)]"
                  placeholder="Nombre de tu empresa"
                />
                {errors.empresa && (
                  <p id="empresa-error" className="text-red-400 text-xs mt-1 font-[family-name:var(--font-inter)]">
                    {errors.empresa.message}
                  </p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-white/70 text-sm mb-1.5 font-[family-name:var(--font-inter)]"
                >
                  Teléfono *
                </label>
                <input
                  id="telefono"
                  type="tel"
                  autoComplete="tel"
                  {...register("telefono")}
                  aria-describedby={errors.telefono ? "telefono-error" : undefined}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#3DAE4B] transition-colors font-[family-name:var(--font-inter)]"
                  placeholder="+52 81 0000 0000"
                />
                {errors.telefono && (
                  <p id="telefono-error" className="text-red-400 text-xs mt-1 font-[family-name:var(--font-inter)]">
                    {errors.telefono.message}
                  </p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-white/70 text-sm mb-1.5 font-[family-name:var(--font-inter)]"
                >
                  ¿Qué necesitas? *
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  {...register("mensaje")}
                  aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#3DAE4B] transition-colors resize-none font-[family-name:var(--font-inter)]"
                  placeholder="Cuéntanos qué tipo de montacargas necesitas, cuántos equipos, por cuánto tiempo, etc."
                />
                {errors.mensaje && (
                  <p id="mensaje-error" className="text-red-400 text-xs mt-1 font-[family-name:var(--font-inter)]">
                    {errors.mensaje.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3DAE4B] hover:bg-[#2E9E47] disabled:bg-[#3DAE4B]/50 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] disabled:scale-100 text-sm font-[family-name:var(--font-inter)]"
              >
                {isSubmitting ? "Enviando..." : "Enviar por WhatsApp"}
              </button>

              <p className="text-white/40 text-xs text-center font-[family-name:var(--font-inter)]">
                Al enviar serás redirigido a WhatsApp para completar tu solicitud.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Emil Kowalski: strong ease-out for UI entrances
const EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const ctx = gsap.context(() => {
      // On-mount stagger — no pin, no scrub, no ScrollTrigger
      // Emil: ease-out, short durations, small y offsets
      gsap.from(".hero-badge", {
        opacity: 0, y: 16, duration: 0.55, ease: EASE_OUT, delay: 0.15,
      })
      gsap.from(".hero-h1", {
        opacity: 0, y: 28, duration: 0.65, ease: EASE_OUT, delay: 0.3,
      })
      gsap.from(".hero-sub", {
        opacity: 0, y: 20, duration: 0.55, ease: EASE_OUT, delay: 0.48,
      })
      gsap.from(".hero-cta-btn", {
        opacity: 0, y: 14, duration: 0.45, ease: EASE_OUT, delay: 0.62, stagger: 0.08,
      })
      gsap.from(".hero-stat", {
        opacity: 0, y: 10, duration: 0.4, ease: EASE_OUT, delay: 0.78, stagger: 0.06,
      })

      // Parallax suave en la imagen de fondo
      // Usamos heroRef.current como trigger (no el selector "#hero" que gsap.context no puede encontrar como descendiente)
      if (window.innerWidth >= 768 && heroRef.current) {
        gsap.to(".hero-bg-img", {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden py-28 lg:py-0"
    >
      {/* Background image */}
      <div className="hero-bg-img absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="Montacargas eléctrico moderno operando en bodega industrial en Nuevo León"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f33]/92 via-[#0d1f33]/68 to-[#0d1f33]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f33]/75 via-transparent to-[#0d1f33]/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-24 pt-16 lg:pt-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-[#3DAE4B]" />
            <span className="text-[#3DAE4B] font-semibold text-xs tracking-widest uppercase font-[family-name:var(--font-inter)]">
              Empresa 100% Mexicana · +10 años de experiencia
            </span>
          </div>

          {/* H1 */}
          <h1
            className="hero-h1 font-[family-name:var(--font-sora)] font-bold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 4.25rem)" }}
          >
            Renta y Venta de{" "}
            <span className="text-[#3DAE4B]">Montacargas Eléctricos</span>{" "}
            en Nuevo León
          </h1>

          {/* Lead paragraph */}
          <p className="hero-sub font-[family-name:var(--font-inter)] text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            Dagosa es una empresa mexicana con más de 10 años de experiencia especializada
            en venta, renta y mantenimiento de montacargas eléctricos para empresas en la
            Zona Metropolitana de Monterrey. Flota propia de más de 80 equipos disponibles.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://wa.me/528125591045"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="hero-cta-btn inline-flex items-center gap-3 bg-[#3DAE4B] text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-[#3DAE4B]/30 text-base transition-all duration-200 hover:bg-[#2E9E47] hover:scale-[1.03] active:scale-[0.97]"
            >
              <WhatsAppIcon />
              Cotizar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="hero-cta-btn inline-flex items-center gap-2 border-2 border-white/30 hover:border-[#3DAE4B] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base active:scale-[0.97]"
            >
              Ver servicios
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 border-t border-white/10 pt-6">
            {[
              { number: "80+", label: "Equipos en flota" },
              { number: "10+", label: "Años de experiencia" },
              { number: "3", label: "Niveles de mantenimiento" },
            ].map((stat) => (
              <div key={stat.label} className="hero-stat">
                <div
                  className="font-[family-name:var(--font-sora)] font-bold text-[#3DAE4B]"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  {stat.number}
                </div>
                <div className="text-white/60 text-sm mt-0.5 font-[family-name:var(--font-inter)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-xs tracking-widest uppercase font-[family-name:var(--font-inter)]">
          Scroll
        </span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

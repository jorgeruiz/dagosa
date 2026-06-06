import Image from "next/image"

const footerLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#flota", label: "Flota" },
  { href: "#mantenimiento", label: "Mantenimiento" },
  { href: "#nosotros", label: "Quiénes somos" },
  { href: "#faqs", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0a1625] border-t border-white/10">
      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-24 py-14 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Dagosa — Montacargas Eléctricos"
              width={140}
              height={40}
              className="h-10 w-auto object-contain mb-5"
            />
            <p className="text-white/60 text-sm leading-relaxed font-[family-name:var(--font-inter)] max-w-xs">
              Empresa mexicana especializada en venta, renta y mantenimiento
              de montacargas eléctricos en Nuevo León. Más de 10 años en el sector.
            </p>
            {/* Slogan */}
            <p className="text-[#3DAE4B] font-semibold text-sm mt-4 font-[family-name:var(--font-sora)]">
              Tu operación nunca se detiene.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 font-[family-name:var(--font-inter)]">
              Navegación
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors font-[family-name:var(--font-inter)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — texto plano AEO requirement */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 font-[family-name:var(--font-inter)]">
              Contacto
            </h3>
            <address className="not-italic space-y-3">
              {/* Phone */}
              <div>
                <a
                  href="tel:+528125591045"
                  className="text-white/60 hover:text-white text-sm transition-colors font-[family-name:var(--font-inter)]"
                >
                  +52 (81) 2559 1045
                </a>
                <span className="text-white/30 mx-2">·</span>
                <a
                  href="tel:+528125591046"
                  className="text-white/60 hover:text-white text-sm transition-colors font-[family-name:var(--font-inter)]"
                >
                  1046
                </a>
              </div>

              {/* Email */}
              <div>
                <a
                  href="mailto:ventas@equiposdagosa.com"
                  className="text-white/60 hover:text-white text-sm transition-colors font-[family-name:var(--font-inter)]"
                >
                  ventas@equiposdagosa.com
                </a>
              </div>

              {/* Address — AEO: en texto plano y HTML estático */}
              <div className="text-white/60 text-sm font-[family-name:var(--font-inter)] leading-relaxed">
                Antigua Carretera a Roma 329,<br />
                Valle de Mexquital, Apodaca, N.L.<br />
                C.P. 66632, México
              </div>

              {/* Coverage — AEO data point */}
              <div className="text-white/40 text-xs font-[family-name:var(--font-inter)] pt-1">
                Cobertura: Zona Metropolitana de Monterrey, Nuevo León<br />
                Presencia adicional: San Juan, Texas, EUA
              </div>

              {/* Years — AEO data point */}
              <div className="inline-flex items-center gap-2 bg-[#3DAE4B]/10 border border-[#3DAE4B]/20 rounded-full px-3 py-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-[#3DAE4B]" />
                <span className="text-[#3DAE4B] text-xs font-semibold font-[family-name:var(--font-inter)]">
                  Más de 10 años en el sector
                </span>
              </div>
            </address>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/528125591045"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="inline-flex items-center gap-2 mt-5 bg-[#3DAE4B] hover:bg-[#2E9E47] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.03] font-[family-name:var(--font-inter)]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-24 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs font-[family-name:var(--font-inter)]">
            © {year} Dagosa — Equipos Eléctricos. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs font-[family-name:var(--font-inter)]">
            equiposdagosa.com · Apodaca, Nuevo León, México
          </p>
        </div>
      </div>
    </footer>
  )
}

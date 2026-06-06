const items = [
  "Renta de Montacargas Eléctricos",
  "Venta de Equipos Seminuevos",
  "Mantenimiento Preventivo",
  "+80 Equipos en Flota",
  "Monterrey · Nuevo León",
  "Contratos Anuales",
  "Servicio Correctivo 24 h",
  "Empresa 100% Mexicana",
]

export function Marquee() {
  return (
    <div className="bg-[#3DAE4B] py-3 overflow-hidden" aria-hidden="true">
      <div className="flex whitespace-nowrap animate-marquee will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-8 text-white font-semibold text-xs tracking-widest uppercase font-[family-name:var(--font-inter)]"
          >
            <span className="w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

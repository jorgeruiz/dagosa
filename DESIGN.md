# DESIGN.md — Dagosa Sistema de Diseño
**Path:** Standalone · **Nivel visual:** Experiencial · **Generado:** 4 de junio 2026

---

## Paleta de color

| Token | Valor | Uso |
|-------|-------|-----|
| `primary` | `#1F3A5F` | Azul marino — fondos de secciones oscuras, navbar |
| `primary-dark` | `#0d1f33` | Azul marino profundo — fondos hero, overlays |
| `accent` | `#3DAE4B` | Verde eléctrico — CTAs principales, acentos, bordes hover |
| `accent-dark` | `#2E9E47` | Verde oscuro — hover state del CTA |
| `surface` | `#F8F9FA` | Gris muy claro — fondos de secciones claras |
| `surface-dark` | `#111827` | Casi negro — alt section backgrounds |
| `text-primary` | `#0F172A` | Titulares en secciones claras |
| `text-muted` | `#64748B` | Body text secundario |
| `white` | `#FFFFFF` | Texto sobre fondos oscuros |

**Regla:** Secciones alternantes oscuro/claro. Hero → oscuro. About → claro. Servicios → oscuro. Flota → claro. Mantenimiento → dark. FAQs → claro. Testimonios → imagen. Contacto → oscuro. Footer → primary-dark.

---

## Tipografía

| Rol | Fuente | Peso | Tamaño base |
|-----|--------|------|-------------|
| Display (hero H1) | **Sora** | 700–800 | `clamp(2.5rem, 6vw, 5rem)` |
| Headings H2–H3 | **Sora** | 600–700 | H2: `clamp(1.75rem, 3.5vw, 3rem)` |
| Body | **Inter** | 400–500 | `1rem` / `1.125rem` |
| Label / Badge | **Inter** | 600 | `0.75rem` uppercase + tracking |

Cargadas via `next/font/google` con `display: 'swap'`. Preload de Sora 700 para el hero.

---

## Espaciado y layout

- **Container max-width:** `1280px` con `px-5 md:px-10 lg:px-16 xl:px-24`
- **Section padding vertical:** `py-20 lg:py-28`
- **Grid de servicios:** 1 col mobile → 3 col desktop
- **Grid de flota:** 1 col sm → 2 col md → 3 col lg → 4 col xl
- **Gap estándar:** `gap-6 lg:gap-8`

---

## Componentes clave

### Botón primario (CTA WhatsApp)
```
bg-accent hover:bg-accent-dark text-white
px-8 py-4 rounded-full font-semibold text-base
transition-all duration-200 ease-out hover:scale-[1.03]
shadow-lg shadow-accent/20
```

### Botón secundario (outline)
```
border-2 border-white/30 text-white hover:border-accent
px-6 py-3 rounded-full transition-colors duration-200
```

### Card de servicio
```
group relative overflow-hidden rounded-2xl
bg-primary-dark border border-white/10
hover:border-accent/40 transition-all duration-300
```

### Badge / etiqueta de sección
```
inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3
```

### Stat counter
```
text-5xl lg:text-6xl font-bold text-white
con sufijo en accent color
```

---

## Animaciones (GSAP)

Ver `docs/brief-tecnico.md` para especificaciones completas.

- Hero: pinned + scrub (solo `lg:`)
- Secciones: `opacity 0→1 + yPercent 8→0`, `power2.out`, `once: true`
- Cards stagger: `0.09s` desktop, `0.05s` mobile
- Smooth scroll: Lenis (solo dispositivos no-touch)
- Custom cursor: `gsap.quickTo`, solo `lg:`

---

## Iconografía

SVG inline para íconos de servicios. Sin librerías de iconos externas.
Íconos: CheckCircle, Wrench, Truck, Package, Zap, Shield, Clock, MapPin, Phone, Mail, WhatsApp.

---

## Navbar

- Fondo: `transparent` en top → `bg-primary-dark/95 backdrop-blur-md` al scroll
- Logo: izq · Links: centro (anclas) · CTA: der
- Mobile: hamburger drawer desde la derecha
- Transición de fondo: CSS transition, NO GSAP (spec lo indica explícitamente)

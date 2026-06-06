"use client"

// Lenis descartado — conflictúa con GSAP ScrollTrigger causando que los elementos
// queden en opacity:0 permanente. Ver postmortem Resorts All Inclusive (mayo 2026).
// Smooth scroll manejado con CSS: scroll-behavior: smooth en globals.css

export function SmoothScroll() {
  return null
}

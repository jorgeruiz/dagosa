"use client"

import { useEffect } from "react"

// Global IntersectionObserver que anima todos los elementos [data-reveal].
// No usa GSAP → no interfiere con el lazy loading de Next.js Image.
// Elementos ya visibles al cargar la página nunca se ocultan (no hay flash).
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const all = document.querySelectorAll<HTMLElement>("[data-reveal]")
    const toObserve: HTMLElement[] = []

    all.forEach((el) => {
      const rect = el.getBoundingClientRect()
      // Ya visible → no animar
      if (rect.top < window.innerHeight && rect.bottom > 0) return

      const delay = el.dataset.delay ?? "0"
      el.style.opacity = "0"
      el.style.transform = "translateY(22px)"
      el.style.transition = [
        `opacity 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
        `transform 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      ].join(", ")
      toObserve.push(el)
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
          io.unobserve(el)
        })
      },
      { rootMargin: "0px 0px -48px 0px", threshold: 0.06 }
    )

    toObserve.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}

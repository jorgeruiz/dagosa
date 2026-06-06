"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" })
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" })
    const xDot = gsap.quickTo(dot, "x", { duration: 0.1 })
    const yDot = gsap.quickTo(dot, "y", { duration: 0.1 })

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
      xDot(e.clientX)
      yDot(e.clientY)
    }

    const onEnter = () => cursor.classList.add("scale-[2.5]")
    const onLeave = () => cursor.classList.remove("scale-[2.5]")

    window.addEventListener("mousemove", onMove)

    const interactables = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label"
    )
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    return () => {
      window.removeEventListener("mousemove", onMove)
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-[9999] top-0 left-0 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="w-8 h-8 rounded-full border-2 border-accent transition-transform duration-200" />
      </div>
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-[9999] top-0 left-0 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
      </div>
    </>
  )
}

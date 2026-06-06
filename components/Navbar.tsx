"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#flota", label: "Flota" },
  { href: "#mantenimiento", label: "Mantenimiento" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#faqs", label: "FAQs" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1f33]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <a href="#servicios" className="sr-only focus:not-sr-only">
        Saltar al contenido principal
      </a>

      <nav className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Dagosa — Inicio">
          <Image
            src="/images/logo.png"
            alt="Dagosa — Montacargas Eléctricos"
            width={140}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 bg-[#3DAE4B] hover:bg-[#2E9E47] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-[#3DAE4B]/20"
        >
          Cotizar ahora
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          ref={menuRef}
          className="md:hidden bg-[#0d1f33]/98 backdrop-blur-md border-t border-white/10"
        >
          <ul className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-white/80 hover:text-white font-medium text-base transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="block text-center bg-[#3DAE4B] hover:bg-[#2E9E47] text-white font-semibold py-3 rounded-full transition-colors"
              >
                Cotizar ahora
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

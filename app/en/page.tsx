import Image from "next/image"
import { JsonLd } from "@/components/JsonLd"
import { localBusinessSchema } from "@/lib/schemas"
import { WhatsAppFloat } from "@/components/WhatsAppFloat"
import { Footer } from "@/components/Footer"

// EN version — Electric Forklift Rental & Sales Monterrey
export default function EnHomePage() {
  const enFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of electric forklifts do you have available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have over 80 units in various categories: standing operator counterbalanced scissor forklifts, standing operator counterbalanced forklifts, and seated operator 4-wheel electric forklifts. All our equipment is available for sale or rental based on your company's needs.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the difference between weekly, monthly rental and annual contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Weekly and monthly rental is ideal for specific projects or operational peaks, giving you flexibility without long-term commitment. The annual contract guarantees equipment availability for the entire year, with priority maintenance and continuous technical support — ideal for companies with constant operations.",
        },
      },
      {
        "@type": "Question",
        "name": "What do Dagosa's preventive maintenance plans include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All our preventive maintenance plans include 3 levels: Level 1 — cleaning, fluid check, and general adjustments. Level 2 — inspection and cleaning of electrical connectors and electronic components. Level 3 — motor inspection. All services are documented with real-time digital reports.",
        },
      },
    ],
  }

  return (
    <>
      <JsonLd data={localBusinessSchema as unknown as Record<string, unknown>} />
      <JsonLd data={enFaqSchema} />

      {/* Navbar EN */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0d1f33]/95 backdrop-blur-md">
        <nav className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 h-16 md:h-20 flex items-center justify-between">
          <a href="/en/" aria-label="Dagosa — Home">
            <Image
              src="/images/logo.png"
              alt="Dagosa — Electric Forklifts"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </a>
          <div className="hidden md:flex items-center gap-6">
            {[
              { href: "#services", label: "Services" },
              { href: "#fleet", label: "Fleet" },
              { href: "#maintenance", label: "Maintenance" },
              { href: "#about", label: "About" },
              { href: "#faqs", label: "FAQs" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors font-[family-name:var(--font-inter)]"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/528125591045"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp"
              className="hidden md:inline-flex items-center gap-2 bg-[#3DAE4B] hover:bg-[#2E9E47] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.03] font-[family-name:var(--font-inter)]"
            >
              Get a Quote
            </a>
            <a
              href="/"
              className="text-white/50 hover:text-white text-xs font-medium transition-colors font-[family-name:var(--font-inter)]"
              hrefLang="es"
            >
              ES
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero EN */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-home.webp"
              alt="Modern electric forklift operating in an industrial warehouse in Nuevo León"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f33]/90 via-[#0d1f33]/70 to-[#0d1f33]/40" />
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-24 pt-20 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-[#3DAE4B]" />
                <span className="text-[#3DAE4B] font-semibold text-xs tracking-widest uppercase font-[family-name:var(--font-inter)]">
                  Mexican company · 10+ years of experience
                </span>
              </div>

              <h1
                className="font-[family-name:var(--font-sora)] font-bold text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
              >
                Electric Forklift{" "}
                <span className="text-[#3DAE4B]">Rental & Sales</span>{" "}
                in Nuevo León
              </h1>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-[family-name:var(--font-inter)]">
                Dagosa is a Mexican company with over 10 years of experience specializing
                in electric forklift sales, rental and maintenance for businesses in the
                Monterrey Metropolitan Area. Fleet of 80+ owned units available.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/528125591045"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact via WhatsApp"
                  className="inline-flex items-center gap-3 bg-[#3DAE4B] hover:bg-[#2E9E47] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] shadow-xl shadow-[#3DAE4B]/30 text-base font-[family-name:var(--font-inter)]"
                >
                  Get a Quote via WhatsApp
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-[#3DAE4B] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base font-[family-name:var(--font-inter)]"
                >
                  View services ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services EN */}
        <section id="services" className="bg-[#111827] py-20 lg:py-28">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-24">
            <div className="text-center mb-14">
              <span className="text-[#3DAE4B] font-semibold text-xs tracking-widest uppercase font-[family-name:var(--font-inter)]">Services</span>
              <h2
                className="font-[family-name:var(--font-sora)] font-bold text-white mt-3"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
              >
                Electric Forklift Rental & Maintenance in Monterrey
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Electric Forklift Sales",
                  desc: "Pre-owned electric forklifts with the highest performance standards. Ideal for companies looking to optimize costs without compromising operations.",
                  icon: "🏗️",
                },
                {
                  title: "Forklift Rental",
                  desc: "Weekly, monthly or annual contract rental. Annual contracts include priority maintenance and year-round technical support for uninterrupted operations.",
                  icon: "🔄",
                },
                {
                  title: "Preventive Maintenance",
                  desc: "3-level maintenance plans with real-time digital reports. Maximize your fleet's lifespan and reduce unplanned downtime.",
                  icon: "🔧",
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="bg-[#0d1f33] border border-white/10 rounded-2xl p-7 hover:border-[#3DAE4B]/40 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-[family-name:var(--font-sora)] font-bold text-white text-lg mb-3">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5 font-[family-name:var(--font-inter)]">{s.desc}</p>
                  <a
                    href="https://wa.me/528125591045"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contact via WhatsApp — ${s.title}`}
                    className="text-[#3DAE4B] hover:text-[#2E9E47] font-semibold text-sm transition-colors font-[family-name:var(--font-inter)]"
                  >
                    Get a quote →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs EN */}
        <section id="faqs" className="bg-[#F8F9FA] py-20 lg:py-28">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-24 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#3DAE4B] font-semibold text-xs tracking-widest uppercase font-[family-name:var(--font-inter)]">FAQ</span>
              <h2
                className="font-[family-name:var(--font-sora)] font-bold text-[#0F172A] mt-3"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Frequently asked questions about electric forklifts
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "What types of electric forklifts do you have available?",
                  a: "We have over 80 units in various categories: standing operator counterbalanced scissor forklifts, standing operator counterbalanced forklifts, and seated operator 4-wheel electric forklifts. All available for sale or rental.",
                },
                {
                  q: "Do you offer forklift rental near San Juan, Texas?",
                  a: "Yes. Dagosa has a location in San Juan, Texas, in addition to our main facility in Apodaca, Nuevo León. Contact us to confirm coverage and availability in your area.",
                },
                {
                  q: "What do the preventive maintenance plans include?",
                  a: "3 levels of progressive inspection: Level 1 — cleaning, fluids, general adjustments. Level 2 — electrical connectors and electronic components. Level 3 — motor inspection. All documented with real-time digital reports.",
                },
                {
                  q: "How do I request a quote?",
                  a: "Contact us via WhatsApp at +52 (81) 2559 1045 or email ventas@equiposdagosa.com. An advisor will contact you to understand your requirements and present the most suitable options.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6">
                  <h3 className="font-[family-name:var(--font-sora)] font-semibold text-[#0F172A] text-base mb-3">{faq.q}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed font-[family-name:var(--font-inter)]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact EN */}
        <section id="contact" className="bg-[#0d1f33] py-20 lg:py-28">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 xl:px-24 text-center">
            <span className="text-[#3DAE4B] font-semibold text-xs tracking-widest uppercase font-[family-name:var(--font-inter)]">Contact</span>
            <h2
              className="font-[family-name:var(--font-sora)] font-bold text-white mt-4 mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              Ready to optimize your operations?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto font-[family-name:var(--font-inter)]">
              Contact Dagosa today. Our team will help you find the right forklift solution for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/528125591045"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact via WhatsApp"
                className="inline-flex items-center gap-2 bg-[#3DAE4B] hover:bg-[#2E9E47] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] font-[family-name:var(--font-inter)]"
              >
                WhatsApp: +52 (81) 2559 1045
              </a>
              <a
                href="mailto:ventas@equiposdagosa.com"
                className="inline-flex items-center border-2 border-white/30 hover:border-[#3DAE4B] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 font-[family-name:var(--font-inter)]"
              >
                ventas@equiposdagosa.com
              </a>
            </div>
            {/* Address — AEO */}
            <address className="not-italic mt-10 text-white/40 text-sm font-[family-name:var(--font-inter)]">
              Antigua Carretera a Roma 329, Valle de Mexquital, Apodaca, N.L., C.P. 66632, México<br />
              Also serving: San Juan, Texas, USA
            </address>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}

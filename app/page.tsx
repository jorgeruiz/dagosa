import { JsonLd } from "@/components/JsonLd"
import { faqPageSchema, serviceSchemas, productListSchema } from "@/lib/schemas"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { Fleet } from "@/components/Fleet"
import { Maintenance } from "@/components/Maintenance"
import { Testimonials } from "@/components/Testimonials"
import { FAQs } from "@/components/FAQs"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { WhatsAppFloat } from "@/components/WhatsAppFloat"
import { SmoothScroll } from "@/components/SmoothScroll"
import { CustomCursor } from "@/components/CustomCursor"
import { RevealObserver } from "@/components/RevealObserver"
import { Marquee } from "@/components/Marquee"

export default function HomePage() {
  return (
    <>
      {/* Schema.org JSON-LD — content page schemas */}
      <JsonLd data={faqPageSchema as unknown as Record<string, unknown>} />
      <JsonLd data={serviceSchemas as unknown as Record<string, unknown>[]} />
      <JsonLd data={productListSchema as unknown as Record<string, unknown>} />

      {/* Client-side animation/scroll init */}
      <SmoothScroll />
      <CustomCursor />
      <RevealObserver />

      {/* Page */}
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Fleet />
        <Maintenance />
        <Testimonials />
        <FAQs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

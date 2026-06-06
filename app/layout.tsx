import type { Metadata } from "next"
import { Sora, Inter } from "next/font/google"
import "./globals.css"
import { JsonLd } from "@/components/JsonLd"
import { localBusinessSchema } from "@/lib/schemas"

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://equiposdagosa.com"),
  title: {
    default: "Renta y Venta de Montacargas Eléctricos en Monterrey | Dagosa",
    template: "%s | Dagosa — Montacargas Eléctricos Monterrey",
  },
  description:
    "Dagosa — Empresa mexicana con +10 años de experiencia en renta, venta y mantenimiento de montacargas eléctricos en Nuevo León. Flota propia de +80 equipos. Pólizas de mantenimiento preventivo. Contacta ahora.",
  keywords: [
    "renta de montacargas eléctricos en Monterrey",
    "venta de montacargas eléctricos",
    "montacargas eléctricos Nuevo León",
    "montacargas eléctricos seminuevos",
    "mantenimiento preventivo montacargas",
    "póliza de mantenimiento montacargas Monterrey",
    "renta montacargas eléctrico Monterrey",
    "montacargas eléctrico para bodega industrial",
  ],
  authors: [{ name: "Dagosa — Equipos Eléctricos" }],
  creator: "Dagosa",
  publisher: "Dagosa",
  formatDetection: { telephone: true, email: true },
  alternates: {
    canonical: "https://equiposdagosa.com/",
    languages: {
      es: "https://equiposdagosa.com/",
      en: "https://equiposdagosa.com/en/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://equiposdagosa.com/",
    siteName: "Dagosa",
    title: "Renta y Venta de Montacargas Eléctricos en Monterrey | Dagosa",
    description:
      "Empresa mexicana con +10 años de experiencia en renta, venta y mantenimiento de montacargas eléctricos en Nuevo León. Flota propia de +80 equipos.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Dagosa — Montacargas Eléctricos Monterrey, Nuevo León",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renta y Venta de Montacargas Eléctricos en Monterrey | Dagosa",
    description:
      "Empresa mexicana con +10 años de experiencia en renta, venta y mantenimiento de montacargas eléctricos en Nuevo León.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <JsonLd data={localBusinessSchema as unknown as Record<string, unknown>} />
      </head>
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

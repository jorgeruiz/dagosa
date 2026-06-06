import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Electric Forklift Rental & Sales in Monterrey | Dagosa",
    template: "%s | Dagosa — Electric Forklifts Monterrey",
  },
  description:
    "Dagosa — Mexican company with 10+ years of experience in electric forklift rental, sales and maintenance in Nuevo León. Fleet of 80+ units. Preventive maintenance plans. Contact us now.",
  alternates: {
    canonical: "https://equiposdagosa.com/en/",
    languages: {
      es: "https://equiposdagosa.com/",
      en: "https://equiposdagosa.com/en/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://equiposdagosa.com/en/",
    siteName: "Dagosa",
    title: "Electric Forklift Rental & Sales in Monterrey | Dagosa",
    description:
      "Mexican company with 10+ years of experience in electric forklift rental, sales and maintenance in Nuevo León. Fleet of 80+ units.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Dagosa — Electric Forklifts Monterrey, Nuevo León",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electric Forklift Rental & Sales in Monterrey | Dagosa",
    description:
      "Mexican company with 10+ years of experience in electric forklift rental, sales and maintenance in Nuevo León.",
    images: ["/og-default.jpg"],
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

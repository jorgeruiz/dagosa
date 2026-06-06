// Structured Data / Schema.org — Dagosa
// Fuente: docs/schema-org.md

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Dagosa — Equipos Eléctricos",
  "alternateName": "Equipos Dagosa",
  "description":
    "Empresa mexicana especializada en venta, renta y mantenimiento de montacargas eléctricos para empresas en Nuevo León. Más de 10 años de experiencia, flota de +80 unidades y tecnología paperless para reportes en tiempo real.",
  "url": "https://equiposdagosa.com/",
  "telephone": "+52-81-2559-1045",
  "email": "ventas@equiposdagosa.com",
  "logo": "https://equiposdagosa.com/images/logo.png",
  "image": "https://equiposdagosa.com/og-default.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Antigua Carretera a Roma 329, Valle de Mexquital",
    "addressLocality": "Apodaca",
    "addressRegion": "Nuevo León",
    "postalCode": "66632",
    "addressCountry": "MX",
  },
  "areaServed": [
    { "@type": "State", "name": "Nuevo León" },
    { "@type": "City", "name": "Monterrey" },
    { "@type": "City", "name": "Apodaca" },
    { "@type": "City", "name": "San Nicolás de los Garza" },
    { "@type": "City", "name": "Guadalupe" },
  ],
  "priceRange": "$$",
  "currenciesAccepted": "MXN",
  "foundingDate": "2016",
  "slogan": "Tu operación nunca se detiene",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 10,
    "maxValue": 49,
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Montacargas Eléctricos",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Venta de Montacargas Eléctricos Seminuevos",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Renta de Montacargas Eléctricos",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mantenimiento Preventivo y Correctivo de Montacargas",
        },
      },
    ],
  },
} as const;

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué tipos de montacargas eléctricos tienen disponibles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contamos con más de 80 unidades en diversas categorías: montacargas hombre parado contrabalanceado tipo tijera, montacargas hombre parado contrabalanceado y montacargas eléctricos hombre sentado de 4 ruedas. Todos nuestros equipos están disponibles para venta o renta según las necesidades de tu empresa.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre renta semanal, mensual y contrato anual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La renta semanal y mensual es ideal para proyectos o picos de operación puntuales, ofreciéndote flexibilidad sin compromiso de largo plazo. El contrato anual garantiza equipo disponible durante todo el año, mantenimiento prioritario y soporte técnico continuo, ideal para empresas con operación constante que buscan tranquilidad operativa.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Qué incluyen las pólizas de mantenimiento preventivo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Todas nuestras pólizas de mantenimiento preventivo incluyen 3 niveles de revisión: Nivel 1 — Limpieza, revisión de fluidos y lubricantes, y ajustes generales. Nivel 2 — Revisión y limpieza de conectores y componentes electrónicos. Nivel 3 — Revisión de motores. El mantenimiento preventivo regular aumenta la vida útil de tus equipos y reduce paros de operación.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Por qué elegir montacargas eléctricos en lugar de montacargas de combustión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los montacargas eléctricos eliminan el gasto en gasolina o gas LP, reducen significativamente los costos de mantenimiento, no emiten gases contaminantes en espacios cerrados y generan menos ruido operativo. Para empresas en manufactura, retail o logística, representan una reducción de costos operativos de largo plazo.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Venden refacciones para montacargas eléctricos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Contamos con refacciones nuevas y seminuevas para montacargas eléctricos. Ofrecemos las piezas necesarias para mantener tus equipos en operación, ya sean equipos adquiridos con Dagosa o de otras marcas.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tardan en atender una falla o avería de mi montacargas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestro servicio de mantenimiento correctivo está diseñado para darte una pronta solución y que tu operación no se detenga. El tiempo de respuesta depende de la ubicación y la naturaleza de la falla. Contáctanos directamente al +52 (81) 2559 1045 para coordinación inmediata.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Atienden empresas fuera de Monterrey dentro de Nuevo León?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Ofrecemos servicio en toda el área metropolitana de Monterrey y municipios del estado de Nuevo León. También contamos con presencia en San Juan, Texas, EUA. Contáctanos para confirmar cobertura en tu ubicación específica.",
      },
    },
    {
      "@type": "Question",
      "name": "¿Cómo solicito una cotización?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes solicitar tu cotización llenando el formulario de contacto en nuestro sitio web, escribiéndonos por WhatsApp o llamando al +52 (81) 2559 1045 o 1046. Un asesor te contactará para entender tus requerimientos y presentarte las opciones más adecuadas para tu operación.",
      },
    },
  ],
} as const;

export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Venta de Montacargas Eléctricos Seminuevos",
    "description":
      "DAGOSA ofrece equipos eléctricos seminuevos con los más altos estándares de rendimiento y durabilidad, ideal para empresas que buscan optimizar costos sin comprometer su operación. Disponibles en modelos: hombre parado contrabalanceado tipo tijera, hombre parado contrabalanceado y hombre sentado 4 ruedas.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dagosa — Equipos Eléctricos",
      "url": "https://equiposdagosa.com/",
    },
    "areaServed": { "@type": "State", "name": "Nuevo León" },
    "serviceType": "Venta de equipos de manejo de materiales",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Empresas de manufactura, retail y logística",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Renta de Montacargas Eléctricos",
    "description":
      "Renta semanal, mensual o bajo contrato anual de montacargas eléctricos para empresas en Nuevo León. La renta semanal y mensual ofrece flexibilidad para proyectos específicos; el contrato anual garantiza equipo disponible, mantenimiento prioritario y soporte técnico todo el año.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dagosa — Equipos Eléctricos",
      "url": "https://equiposdagosa.com/",
    },
    "areaServed": { "@type": "State", "name": "Nuevo León" },
    "serviceType": "Renta de montacargas eléctricos",
    "termsOfService": "Disponible en modalidad semanal, mensual y contrato anual",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Empresas de manufactura, retail y logística",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mantenimiento Preventivo de Montacargas",
    "description":
      "Pólizas de mantenimiento preventivo para montacargas eléctricos con 3 niveles de revisión: Nivel 1 — limpieza, fluidos y ajustes generales; Nivel 2 — revisión de conectores y componentes electrónicos; Nivel 3 — revisión de motores.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dagosa — Equipos Eléctricos",
      "url": "https://equiposdagosa.com/",
    },
    "areaServed": { "@type": "State", "name": "Nuevo León" },
    "serviceType": "Mantenimiento preventivo de montacargas eléctricos",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Empresas con flota de montacargas eléctricos",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mantenimiento Correctivo y Reparación de Montacargas",
    "description":
      "Servicio de reparación y mantenimiento correctivo para montacargas eléctricos. Respuesta ágil para que tu operación no se detenga. Incluye diagnóstico, reparación de componentes y restauración de la unidad a condiciones operativas.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dagosa — Equipos Eléctricos",
      "url": "https://equiposdagosa.com/",
    },
    "areaServed": { "@type": "State", "name": "Nuevo León" },
    "serviceType": "Reparación y mantenimiento correctivo de montacargas",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Empresas con montacargas en falla o necesidad de reparación urgente",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Venta de Refacciones para Montacargas Eléctricos",
    "description":
      "Venta de refacciones nuevas y seminuevas para montacargas eléctricos. Piezas de calidad para mantener tus equipos en operación continua y reducir tiempos de paro.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dagosa — Equipos Eléctricos",
      "url": "https://equiposdagosa.com/",
    },
    "areaServed": { "@type": "State", "name": "Nuevo León" },
    "serviceType": "Venta de refacciones para montacargas eléctricos",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Maniobras por Día y Traslados de Montacargas",
    "description":
      "Servicio de maniobras por día y traslados de montacargas eléctricos para empresas que requieren capacidad operativa puntual sin compromiso de renta extendida.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dagosa — Equipos Eléctricos",
      "url": "https://equiposdagosa.com/",
    },
    "areaServed": { "@type": "State", "name": "Nuevo León" },
    "serviceType": "Maniobras industriales y traslado de montacargas",
  },
];

export const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Modelos de Montacargas Eléctricos Disponibles — Dagosa",
  "description":
    "Catálogo de montacargas eléctricos seminuevos disponibles para venta y renta en Dagosa, Nuevo León.",
  "numberOfItems": 3,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "Montacargas Hombre Parado Contrabalanceado Tipo Tijera",
        "description":
          "Montacargas eléctrico seminuevo tipo tijera contrabalanceado, ideal para operación en pasillos estrechos y manejo de materiales en altura.",
        "brand": { "@type": "Brand", "name": "Dagosa — Equipos Eléctricos" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "MXN",
          "availability": "https://schema.org/InStock",
          "seller": { "@type": "LocalBusiness", "name": "Dagosa — Equipos Eléctricos" },
        },
      },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "Montacargas Hombre Parado Contrabalanceado",
        "description":
          "Montacargas eléctrico seminuevo hombre parado contrabalanceado para manejo eficiente de materiales en almacenes y plantas industriales.",
        "brand": { "@type": "Brand", "name": "Dagosa — Equipos Eléctricos" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "MXN",
          "availability": "https://schema.org/InStock",
          "seller": { "@type": "LocalBusiness", "name": "Dagosa — Equipos Eléctricos" },
        },
      },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "Montacargas Eléctrico Hombre Sentado 4 Ruedas",
        "description":
          "Montacargas eléctrico seminuevo hombre sentado de 4 ruedas, adecuado para cargas pesadas y operación intensiva en pisos industriales.",
        "brand": { "@type": "Brand", "name": "Dagosa — Equipos Eléctricos" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "MXN",
          "availability": "https://schema.org/InStock",
          "seller": { "@type": "LocalBusiness", "name": "Dagosa — Equipos Eléctricos" },
        },
      },
    },
  ],
} as const;

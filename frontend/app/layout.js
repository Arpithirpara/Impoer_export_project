import "./globals.css";
import Header from "../components/Header.js/page";
import Footer from "../components/footer.js/page";
import Preloader from "../components/Preloader/Preloader";

export const metadata = {
  metadataBase: new URL("https://www.ecoexport.in"),
  title: {
    default: "ECO EXPORT | Premium Indian Agricultural Exporter & Global B2B Supplier",
    template: "%s | ECO EXPORT - Agro Commodities Supplier",
  },
  description:
    "ECO EXPORT is India's leading B2B exporter of premium Basmati Rice, Spices, Milling Wheat, Pulses, Oil Seeds, and Cattle Feed to 30+ countries worldwide. Fast ocean freight dispatch from Mundra, Kandla & Pipavav ports.",
  keywords: [
    "Indian Agricultural Exporter",
    "Basmati Rice Exporter India",
    "Indian Spices Wholesaler",
    "Durum Wheat Milling Supplier",
    "Sesame Seeds Exporter",
    "Cattle Feed Export India",
    "Mundra Port Agro Logistics",
    "Global Trade Exhibition Supplier",
    "ECO EXPORT India",
  ],
  authors: [{ name: "ECO EXPORT", url: "https://www.ecoexport.in" }],
  creator: "ECO EXPORT",
  publisher: "ECO EXPORT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ECO EXPORT | Premium Indian Agricultural Exporter & Global Supplier",
    description:
      "Global B2B supplier of Spices, Basmati Rice, Wheat, Pulses & Oil Seeds exporting to 30+ countries. Direct port logistics from Gujarat, India.",
    url: "https://www.ecoexport.in",
    siteName: "ECO EXPORT",
    images: [
      {
        url: "/home_Page_img/image.png",
        width: 1200,
        height: 630,
        alt: "ECO EXPORT Global Agro Products & Port Dispatch",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECO EXPORT | Premium Agro Commodities Exporter",
    description:
      "Exporting certified Spices, Rice, Wheat & Seeds to 30+ countries worldwide.",
    images: ["/home_Page_img/image.png"],
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
  icons: {
    icon: "/header/logo.png",
    shortcut: "/header/logo.png",
    apple: "/header/logo.png",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ECO EXPORT",
  "altName": "Eco Export Agro Commodities",
  "url": "https://www.ecoexport.in",
  "logo": "https://www.ecoexport.in/header/logo.png",
  "description":
    "Leading Indian exporter & B2B supplier of Basmati Rice, Spices, Wheat, Pulses, Oil Seeds & Cattle Feed.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Agro Trade Hub, Near Mundra Port Access Highway",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380001",
    "addressCountry": "IN",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9016343662",
    "contactType": "sales",
    "areaServed": ["AE", "SA", "SG", "NL", "EG", "MY", "US", "DE"],
    "availableLanguage": ["English", "Hindi"],
  },
  "sameAs": [
    "https://www.facebook.com/ecoexport",
    "https://www.linkedin.com/company/ecoexport",
  ],
};

export default function RootElement({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

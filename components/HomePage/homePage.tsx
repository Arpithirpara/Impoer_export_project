"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

const heroHighlights = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Fast Quotes",
    value: "Received within 24 hours",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    label: "Custom Packaging",
    value: "Export-ready containers & labeling",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "Trusted Partners",
    value: "Buyers across 50+ countries",
  },
];

const stats = [
  {
    value: "13+",
    unit: "Years",
    label: "Years Experience",
    subtext: "Global Trade Expertise",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    value: "50+",
    unit: "Countries",
    label: "Countries Served",
    subtext: "Worldwide Freight Ports",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    value: "150+",
    unit: "Partners",
    label: "Export Partners",
    subtext: "Verified Buyer Network",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "99%",
    unit: "Success",
    label: "On-Time Shipping",
    subtext: "Customs & Fast Dispatch",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const whyChoosePoints = [
  {
    tag: "100% Quality Assured",
    title: "Premium Quality Produce",
    description: "Every shipment of tea, coffee, rice, spices, and grains undergoes multi-tier quality testing, lab grading, and international standard certification before export.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15l-2 5l9-11h-7l2-5l-9 11h7z" />
      </svg>
    ),
  },
  {
    tag: "APEDA & ISO Certified",
    title: "Export Compliance & Standards",
    description: "Complete hassle-free documentation — APEDA registration, Phytosanitary Certificates, FSSAI compliance, certificate of origin, and custom export clearance.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    tag: "Farm-to-Port Sourcing",
    title: "Direct Farmer Network",
    description: "We source directly from over 5,000+ verified agricultural cooperatives across India, eliminating middlemen to deliver fresh produce at direct wholesale rates.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    tag: "Export-Ready Containers",
    title: "Modern Packaging Infrastructure",
    description: "State-of-the-art vacuum sealing, moisture-proof multi-ply bags, custom private labeling, and climate-controlled container packaging tailored for long ocean voyages.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    tag: "Ocean & Air Freight",
    title: "Export & Freight Expertise",
    description: "13+ years of specialized experience in international maritime sea freight, port handling, swift customs clearance, and seamless tracking to 50+ countries.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    tag: "Trusted Global Buyers",
    title: "100% Client Satisfaction",
    description: "Dedicated account managers offering transparent wholesale pricing, flexible export payment terms (LC/TT), 24-hour quotation responses, and total buyer satisfaction.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const certifications = [
  {
    code: "APEDA",
    name: "Agricultural & Processed Food Export Authority",
    badgeText: "Govt. of India Registered",
    description: "Registered exporter for premium quality grains, rice, fruits, and processed agro commodities.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    code: "FSSAI",
    name: "Food Safety & Standards Authority of India",
    badgeText: "Food Safety Certified",
    description: "100% compliant with strict hygienic storage, handling, packaging, and food quality safety standards.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    code: "ISO 22000",
    name: "International Quality Management Standard",
    badgeText: "Global Quality Standard",
    description: "Certified food safety management system ensuring international hazard analysis and quality assurance.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    code: "SPICES BOARD",
    name: "Spices Board of India (Ministry of Commerce)",
    badgeText: "Authentic Spice Exporter",
    description: "Authorized exporter of premium Indian spices, powders, whole seeds, and essential oleoresins.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    code: "IOPEPC",
    name: "Indian Oilseeds & Produce Export Council",
    badgeText: "Verified Export Member",
    description: "Recognized merchant exporter for oilseeds, sesame, peanuts, and specialty agricultural produce.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    code: "DGFT / FIEO",
    name: "Federation of Indian Export Organisations",
    badgeText: "Export License Verified",
    description: "Official IEC licensed global trader with full custom documentation and port clearance privileges.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

const continentPills = [
  { region: "North America", flag: "🌎" },
  { region: "Europe & UK", flag: "🌍" },
  { region: "Middle East & Gulf", flag: "🕌" },
  { region: "Asia-Pacific", flag: "🌏" },
  { region: "Africa & LATAM", flag: "🌐" },
];

export default function Homesection() {
  return (
    <>
      <section className={styles.homeSection}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <div className={styles.tagBadge}>
              <span className={styles.tagDot}></span>
              <span>Import • Export • Global Logistics</span>
            </div>
            <h1>
              Leading Import & Export Solutions for{" "}
              <span className={styles.highlightText}>Agricultural Commodities</span>
            </h1>
            <p>
              We deliver premium tea, coffee, rice, spices and grains from farm to market with trusted logistics, complete export documentation, and a customer-first approach.
            </p>

            <div className={styles.ctaRow}>
              <Link href="/product" className={styles.primaryButton}>
                <span>Explore Products</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                <span>Request A Quote</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </Link>
            </div>

            <div className={styles.statsGrid}>
              {stats.map((stat, idx) => (
                <div key={idx} className={styles.statCard}>
                  <div className={styles.statIconHeader}>
                    <div className={styles.statIcon}>{stat.icon}</div>
                    <strong>{stat.value}</strong>
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                  <div className={styles.statSubtext}>{stat.subtext}</div>
                </div>
              ))}
            </div>

            <div className={styles.heroHighlights}>
              {heroHighlights.map((item) => (
                <div key={item.label} className={styles.heroHighlightCard}>
                  <div className={styles.highlightIconWrapper}>
                    {item.icon}
                  </div>
                  <div className={styles.highlightContent}>
                    <span className={styles.highlightLabel}>{item.label}</span>
                    <strong className={styles.highlightValue}>{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageCard}>
              <Image
                src="/Hero_slider_img/Hero_img_1.png"
                alt="Import Export Banner"
                width={700}
                height={520}
                className={styles.heroImage}
                priority
              />
              <div className={styles.floatingBadgeTop}>
                <span className={styles.badgeIcon}>🚢</span>
                <div className={styles.badgeText}>
                  <strong>Global Sea & Air Freight</strong>
                  <span>100% Certified Cargo</span>
                </div>
              </div>
              <div className={styles.floatingBadgeBottom}>
                <span className={styles.badgeIcon}>📜</span>
                <div className={styles.badgeText}>
                  <strong>Customs Clearance</strong>
                  <span>Full Documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Eco Export Section */}
      <section className={styles.whySection}>
        <div className={styles.whyContainer}>
          <div className={styles.whyHeader}>
            <div className={styles.whyBadge}>
              <span className={styles.whyBadgeDot}></span>
              <span>Why Choose Eco Export</span>
            </div>
            <h2>
              Your Trusted Partner for <span className={styles.whyHighlight}>Global Agricultural Trade</span>
            </h2>
            <p>
              Combining farm-fresh sourcing, rigorous quality compliance, advanced packaging infrastructure, and worldwide freight expertise to deliver excellence at every port.
            </p>
          </div>

          <div className={styles.whyGrid}>
            {whyChoosePoints.map((item, index) => (
              <div key={index} className={styles.whyCard}>
                <div className={styles.whyCardHeader}>
                  <div className={styles.whyIconBox}>
                    {item.icon}
                  </div>
                  <span className={styles.whyCardTag}>{item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.whyCardFooter}>
                  <span className={styles.whyCheckText}>✓ Guaranteed Quality & Compliance</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Presence On World Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <div className={styles.mapHeader}>
            <div className={styles.mapBadge}>
              <span className={styles.mapBadgeDot}></span>
              <span>OUR PRESENCE ON WORLD MAP</span>
            </div>
            <h2>
              Exporting To <span className={styles.mapHighlight}>50+ Countries</span>
            </h2>
            <p>
              Serving Importers, Food Brands, and Wholesalers Across Continents
            </p>
            <div className={styles.continentPillsRow}>
              {continentPills.map((c, i) => (
                <div key={i} className={styles.continentPill}>
                  <span className={styles.pillFlag}>{c.flag}</span>
                  <span>{c.region}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.mapImageWrapper}>
            <div className={styles.mapImageCard}>
              <Image
                src="/home_Page_img/Map_img.png"
                alt="Our Presence On World Map - Exporting To 50+ Countries"
                width={1200}
                height={680}
                className={styles.mapImage}
                priority
              />
              <div className={styles.mapFloatingBadgeLeft}>
                <span className={styles.mapBadgeIcon}>📍</span>
                <div className={styles.mapBadgeText}>
                  <strong>50+ Destination Ports</strong>
                  <span>Global Import-Export Reach</span>
                </div>
              </div>
              <div className={styles.mapFloatingBadgeRight}>
                <span className={styles.mapBadgeIcon}>🚢</span>
                <div className={styles.mapBadgeText}>
                  <strong>Worldwide Freight</strong>
                  <span>Sea & Air Cargo Logistics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognized & Certified Exporter Section */}
      <section className={styles.certSection}>
        <div className={styles.certContainer}>
          <div className={styles.certHeader}>
            <div className={styles.certBadge}>
              <span className={styles.certBadgeDot}></span>
              <span>Govt. Approved Accreditation</span>
            </div>
            <h2>
              Recognized & <span className={styles.certHighlight}>Certified Exporter</span>
            </h2>
            <p>
              Holding full accreditation, export licenses, and international quality certifications from leading Indian & global trade authorities.
            </p>
          </div>

          <div className={styles.certGrid}>
            {certifications.map((cert, index) => (
              <div key={index} className={styles.certCard}>
                <div className={styles.certCardTop}>
                  <div className={styles.certEmblemBox}>
                    {cert.icon}
                  </div>
                  <span className={styles.certBadgePill}>{cert.badgeText}</span>
                </div>
                <h3 className={styles.certCode}>{cert.code}</h3>
                <h4 className={styles.certName}>{cert.name}</h4>
                <p className={styles.certDesc}>{cert.description}</p>
                <div className={styles.certFooter}>
                  <span className={styles.certVerifyText}>✓ Official Govt. Verified License</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}






"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

const features = [
  {
    title: "Global Sourcing",
    description:
      "Connect with trusted farms and suppliers across continents for reliable commodity supply.",
  },
  {
    title: "Export Compliance",
    description:
      "Transparent documentation, customs clearance support, and quality certification for every shipment.",
  },
  {
    title: "Fresh Quality",
    description:
      "Premium agricultural products selected for freshness, traceability, and export-grade standards.",
  },
];

const heroHighlights = [
  {
    label: "Fast Quotes",
    value: "Received within 24 hours",
  },
  {
    label: "Custom Packaging",
    value: "Export-ready containers & labeling",
  },
  {
    label: "Trusted Partners",
    value: "Buyers across 25+ countries",
  },
];

export default function Homesection() {
  return (
    <section className={styles.homeSection}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.tag}>Import • Export • Global Trade</span>
          <h1>Leading Import & Export Solutions for Agricultural Commodities</h1>
          <p>
            We deliver premium tea, coffee, rice, spices and grains from farm to market with trusted logistics, complete export documentation, and a customer-first approach.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/product" className={styles.primaryButton}>
              Explore Products
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Request A Quote
            </Link>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <strong>150+</strong>
              <span>Export Partners</span>
            </div>
            <div className={styles.statCard}>
              <strong>25+</strong>
              <span>Countries served</span>
            </div>
            <div className={styles.statCard}>
              <strong>99%</strong>
              <span>On-time shipping</span>
            </div>
          </div>

          <div className={styles.heroHighlights}>
            {heroHighlights.map((item) => (
              <div key={item.label} className={styles.heroHighlightCard}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageCard}>
            <Image
              src="/mainsecton_img/import_export_banner.png"
              alt="Import Export Banner"
              width={700}
              height={520}
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.featuresSection}>
        <div className={styles.featuresIntro}>
          <p className={styles.sectionLabel}>Why Work With Us</p>
          <h2>Built for exporters, buyers, and global supply chains.</h2>
        </div>

        <div className={styles.featureCards}>
          {features.map((feature) => (
            <article key={feature.title} className={styles.featureCard}>
              <div className={styles.featureIcon} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.servicesSection}>
        <div className={styles.servicesHeader}>
          <p className={styles.sectionLabel}>Value Delivered</p>
          <h2>Export services designed for speed, trust and growth.</h2>
        </div>

        <div className={styles.servicesGrid}>
          {[
            {
              title: "End-to-end Logistics",
              description:
                "Door-to-door coordination, freight planning, and customs handling for hassle-free export shipments.",
              icon: "🚚",
            },
            {
              title: "Quality Certification",
              description:
                "Inspection, grading, and export documentation delivered with every shipment for buyer confidence.",
              icon: "✅",
            },
            {
              title: "Global Market Access",
              description:
                "Trusted international channels and buyer relationships that help your commodities move faster.",
              icon: "🌍",
            },
          ].map((service) => (
            <article key={service.title} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

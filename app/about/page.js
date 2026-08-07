import Image from "next/image";
import { Fraunces, Inter } from "next/font/google";
import styles from "./about.module.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const values = [
  {
    title: "Quality First",
    description:
      "Every shipment is graded and inspected against international export standards.",
  },
  {
    title: "Trusted Sourcing",
    description:
      "Long-term partnerships with growers who share our commitment to quality.",
  },
  {
    title: "Global Reach",
    description:
      "Serving buyers across 30+ countries with reliable, on-time delivery.",
  },
];

const stats = [
  { number: "15+", label: "Years of Experience" },
  { number: "30+", label: "Countries Served" },
  { number: "500+", label: "Happy Clients" },
  { number: "10K+", label: "Tons Exported Yearly" },
];

export default function AboutPage() {
  return (
    <main className={inter.className}>
      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src="/mainsecton_img/import_export_banner.png"
          alt="Premium agricultural export showcase"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={fraunces.className}>About AgriHarvest</h1>
          <p>
            Connecting farms to global markets with quality, trust and
            reliability since 2010.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className={styles.story}>
        <div className={styles.storyText}>
          <h2 className={fraunces.className}>Our Story</h2>
          <p>
            AgriHarvest began with a simple mission — to bring premium
            agricultural produce from trusted farms directly to buyers
            around the world. What started as a small trading operation has
            grown into a global network spanning fruits, vegetables, grains
            and spices.
          </p>
          <p>
            Today, we work closely with growers, cooperatives and logistics
            partners to ensure every shipment meets the highest standards of
            quality, freshness and compliance.
          </p>
        </div>
        <div className={styles.storyImageWrap}>
          <Image
            src="/mainsecton_img/image.png"
            alt="Farmers harvesting produce"
            fill
            className={styles.storyImage}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <h2 className={`${styles.valuesHeading} ${fraunces.className}`}>
          What We Stand For
        </h2>
        <div className={styles.valuesGrid}>
          {values.map((v) => (
            <div className={styles.valueCard} key={v.title}>
              <h3 className={fraunces.className}>{v.title}</h3>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        {stats.map((s) => (
          <div className={styles.statItem} key={s.label}>
            <span className={`${styles.statNumber} ${fraunces.className}`}>
              {s.number}
            </span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
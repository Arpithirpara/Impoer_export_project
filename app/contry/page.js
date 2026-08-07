"use client";

import { useState } from "react";
import { Fraunces, Inter } from "next/font/google";
import styles from "./contry.module.css";

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

const regions = ["All", "Middle East", "Asia", "Europe", "Africa", "Americas"];

const countries = [
  { name: "United Arab Emirates", flag: "🇦🇪", region: "Middle East" },
  { name: "Saudi Arabia", flag: "🇸🇦", region: "Middle East" },
  { name: "Qatar", flag: "🇶🇦", region: "Middle East" },
  { name: "Oman", flag: "🇴🇲", region: "Middle East" },

  { name: "Singapore", flag: "🇸🇬", region: "Asia" },
  { name: "Malaysia", flag: "🇲🇾", region: "Asia" },
  { name: "Sri Lanka", flag: "🇱🇰", region: "Asia" },
  { name: "Bangladesh", flag: "🇧🇩", region: "Asia" },
  { name: "Vietnam", flag: "🇻🇳", region: "Asia" },

  { name: "United Kingdom", flag: "🇬🇧", region: "Europe" },
  { name: "Germany", flag: "🇩🇪", region: "Europe" },
  { name: "Netherlands", flag: "🇳🇱", region: "Europe" },
  { name: "Russia", flag: "🇷🇺", region: "Europe" },

  { name: "Egypt", flag: "🇪🇬", region: "Africa" },
  { name: "Nigeria", flag: "🇳🇬", region: "Africa" },
  { name: "Kenya", flag: "🇰🇪", region: "Africa" },
  { name: "South Africa", flag: "🇿🇦", region: "Africa" },

  { name: "United States", flag: "🇺🇸", region: "Americas" },
  { name: "Canada", flag: "🇨🇦", region: "Americas" },
  { name: "Brazil", flag: "🇧🇷", region: "Americas" },
];

export default function CountriesPage() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? countries : countries.filter((c) => c.region === active);

  return (
    <main className={inter.className}>
      <section className={styles.header}>
        <h1 className={fraunces.className}>Countries We Serve</h1>
        <p>
          A trusted export network spanning 20+ countries across five
          continents.
        </p>
      </section>

      <section className={styles.stats}>
        <div className={styles.statItem}>
          <span className={`${styles.statNumber} ${fraunces.className}`}>
            20+
          </span>
          <span className={styles.statLabel}>Countries</span>
        </div>
        <div className={styles.statItem}>
          <span className={`${styles.statNumber} ${fraunces.className}`}>
            5
          </span>
          <span className={styles.statLabel}>Continents</span>
        </div>
        <div className={styles.statItem}>
          <span className={`${styles.statNumber} ${fraunces.className}`}>
            500+
          </span>
          <span className={styles.statLabel}>Global Partners</span>
        </div>
      </section>

      <div className={styles.filters}>
        {regions.map((r) => (
          <button
            key={r}
            onClick={() => setActive(r)}
            className={`${styles.filterBtn} ${
              active === r ? styles.filterBtnActive : ""
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <section className={styles.grid}>
        {visible.map((c) => (
          <div className={styles.card} key={c.name}>
            <span className={styles.flag}>{c.flag}</span>
            <h3>{c.name}</h3>
            <span className={styles.region}>{c.region}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
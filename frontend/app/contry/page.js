"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fraunces, inter } from "../fonts";
import styles from "./contry.module.css";

const regions = [
  { label: "All Regions", value: "All", icon: "🌐" },
  { label: "Middle East", value: "Middle East", icon: "🌙" },
  { label: "Asia", value: "Asia", icon: "🌏" },
  { label: "Europe", value: "Europe", icon: "🇪🇺" },
  { label: "Africa", value: "Africa", icon: "🌍" },
  { label: "Americas", value: "Americas", icon: "🌎" },
];

const countries = [
  // Middle East
  { name: "United Arab Emirates", flag: "🇦🇪", region: "Middle East", ports: "Dubai, Jebel Ali", products: ["Basmati Rice", "Spices", "Wheat"] },
  { name: "Saudi Arabia", flag: "🇸🇦", region: "Middle East", ports: "Jeddah, Dammam", products: ["Durum Wheat", "Pulses", "Oil Seeds"] },
  { name: "Qatar", flag: "🇶🇦", region: "Middle East", ports: "Hamad Port", products: ["Non-Basmati Rice", "Millet", "Spices"] },
  { name: "Oman", flag: "🇴🇲", region: "Middle East", ports: "Sohar, Salalah", products: ["Wheat Semolina", "Maize", "Cattle Feed"] },
  { name: "Kuwait", flag: "🇰🇼", region: "Middle East", ports: "Shuwaikh Port", products: ["Spices", "Sesame Seeds", "Rice"] },
  { name: "Bahrain", flag: "🇧🇭", region: "Middle East", ports: "Khalifa Bin Salman", products: ["Flour", "Pulses", "Grains"] },

  // Asia
  { name: "Singapore", flag: "🇸🇬", region: "Asia", ports: "Singapore Port", products: ["Organic Spices", "Basmati Rice", "Tea"] },
  { name: "Malaysia", flag: "🇲🇾", region: "Asia", ports: "Port Klang", products: ["Cattle Feed", "Oil Seeds", "Maize"] },
  { name: "Sri Lanka", flag: "🇱🇰", region: "Asia", ports: "Colombo", products: ["Wheat Flour", "Pulses", "Chilli"] },
  { name: "Bangladesh", flag: "🇧🇩", region: "Asia", ports: "Chittagong", products: ["Raw Cotton", "Wheat", "Oil Seeds"] },
  { name: "Vietnam", flag: "🇻🇳", region: "Asia", ports: "Ho Chi Minh Port", products: ["Sesame Seeds", "Maize", "Spices"] },
  { name: "Indonesia", flag: "🇮🇩", region: "Asia", ports: "Tanjung Priok", products: ["Groundnut", "Animal Feed", "Rice"] },

  // Europe
  { name: "United Kingdom", flag: "🇬🇧", region: "Europe", ports: "Felixstowe, London", products: ["Basmati Rice", "Turmeric", "Spices"] },
  { name: "Germany", flag: "🇩🇪", region: "Europe", ports: "Hamburg, Bremerhaven", products: ["Sesame Seeds", "Non-GMO Grains", "Tea"] },
  { name: "Netherlands", flag: "🇳🇱", region: "Europe", ports: "Rotterdam", products: ["Spices", "Oil Seeds", "Coffee"] },
  { name: "Russia", flag: "🇷🇺", region: "Europe", ports: "Novorossiysk", products: ["Rice", "Flour", "Cattle Feed"] },
  { name: "Italy", flag: "🇮🇹", region: "Europe", ports: "Genoa, Trieste", products: ["Durum Wheat", "Semolina", "Spices"] },

  // Africa
  { name: "Egypt", flag: "🇪🇬", region: "Africa", ports: "Alexandria, Port Said", products: ["Sesame Seeds", "Maize", "Wheat"] },
  { name: "Nigeria", flag: "🇳🇬", region: "Africa", ports: "Lagos, Apapa", products: ["Rice", "Wheat Flour", "Sugar"] },
  { name: "Kenya", flag: "🇰🇪", region: "Africa", ports: "Mombasa", products: ["Grains", "Pulses", "Animal Feed"] },
  { name: "South Africa", flag: "🇿🇦", region: "Africa", ports: "Durban, Cape Town", products: ["Spices", "Rice", "Flour"] },

  // Americas
  { name: "United States", flag: "🇺🇸", region: "Americas", ports: "New York, Los Angeles", products: ["Organic Spices", "Basmati Rice", "Tea"] },
  { name: "Canada", flag: "🇨🇦", region: "Americas", ports: "Vancouver, Montreal", products: ["Pulses", "Rice", "Spices"] },
  { name: "Brazil", flag: "🇧🇷", region: "Americas", ports: "Santos", products: ["Sesame Seeds", "Cattle Feed", "Grains"] },
];

export default function CountriesPage() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? countries : countries.filter((c) => c.region === active);

  return (
    <main className={inter.className}>
      {/* Clean Text Header (No Banner Image) */}
      <section style={{ background: "#F8FAFC", padding: "48px 24px 32px", textAlign: "center", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F0FDF4", border: "1px solid #BBF7D0", padding: "6px 14px", borderRadius: 999, fontSize: "0.78rem", fontWeight: 800, color: "#16A34A", letterSpacing: "0.08em", marginBottom: 12 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#16A34A" }}></span>
            <span>ECO EXPORT GLOBAL NETWORK</span>
          </div>
          <h1 className={fraunces.className} style={{ fontSize: "2.4rem", fontWeight: 800, color: "#0B192C", margin: "0 0 10px" }}>Countries We Export To</h1>
          <p style={{ color: "#64748B", fontSize: "1.05rem", maxWidth: 700, margin: "0 auto" }}>
            Delivering 100% certified Indian agro commodities to buyers across <strong>30+ countries & 5 continents</strong>.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <span className={`${styles.statNum} ${fraunces.className}`}>30+</span>
              <span className={styles.statLabel}>Countries Served</span>
            </div>
            <div className={styles.statBox}>
              <span className={`${styles.statNum} ${fraunces.className}`}>5</span>
              <span className={styles.statLabel}>Continents Connected</span>
            </div>
            <div className={styles.statBox}>
              <span className={`${styles.statNum} ${fraunces.className}`}>3</span>
              <span className={styles.statLabel}>Strategic Indian Ports</span>
            </div>
            <div className={styles.statBox}>
              <span className={`${styles.statNum} ${fraunces.className}`}>10,000+ MT</span>
              <span className={styles.statLabel}>Annual Export Volume</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.tagBadge}>
              <span className={styles.tagDot}></span>
              <span>GLOBAL DESTINATIONS</span>
            </div>
            <h2 className={`${styles.heading} ${fraunces.className}`}>
              Explore Our <span className={styles.highlightText}>Global Reach</span>
            </h2>
            <p className={styles.subHeading}>
              Filter by continent to view the international markets where Eco Export supplies high quality grains, rice, spices, and animal feed.
            </p>
          </div>

          {/* Region Filters */}
          <div className={styles.filters}>
            {regions.map((r) => (
              <button
                key={r.value}
                onClick={() => setActive(r.value)}
                className={`${styles.filterBtn} ${
                  active === r.value ? styles.filterBtnActive : ""
                }`}
              >
                <span>{r.icon}</span> {r.label}
              </button>
            ))}
          </div>

          {/* Countries Grid */}
          <div className={styles.grid}>
            {visible.map((c) => (
              <div className={styles.card} key={c.name}>
                <div className={styles.cardHeader}>
                  <div className={styles.flagCircle}>{c.flag}</div>
                  <span className={styles.regionBadge}>{c.region}</span>
                </div>

                <h3 className={`${styles.countryName} ${fraunces.className}`}>{c.name}</h3>

                <div className={styles.portRow}>
                  <span className={styles.anchorIcon}>⚓</span>
                  <span className={styles.portText}>Major Ports: <strong>{c.ports}</strong></span>
                </div>

                <div className={styles.productTags}>
                  {c.products.map((p) => (
                    <span key={p} className={styles.productTag}>
                      {p}
                    </span>
                  ))}
                </div>

                <Link href="/contact" className={styles.inquireLink}>
                  Request Freight Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Location Advantage Section */}
      <section className={styles.locationBanner}>
        <div className={styles.container}>
          <div className={styles.bannerBox}>
            <div className={styles.bannerLeft}>
              <span className={styles.bannerBadge}>⚓ FAST PORT SHIPMENT FROM INDIA</span>
              <h2 className={`${styles.bannerTitle} ${fraunces.className}`}>
                Strategic Shipping Proximity to Mundra, Kandla & Pipavav Ports
              </h2>
              <p className={styles.bannerDesc}>
                Located in Ahmedabad, Eco Export benefits from direct highway access to Gujarat’s major sea ports. We guarantee rapid container loading, hassle-free customs clearance, and reduced transit times to your destination port.
              </p>
            </div>
            <div className={styles.bannerRight}>
              <Link href="/contact" className={styles.bannerBtn}>
                Contact Export Desk 🚀
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
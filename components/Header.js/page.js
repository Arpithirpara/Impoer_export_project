"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Left - Nav */}
        <div className={styles.leftSection}>
          <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
            <ul>
              <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link href="/product" onClick={() => setMenuOpen(false)}>Products</Link></li>
              <li><Link href="/exhibitions" onClick={() => setMenuOpen(false)}>Exhibitions</Link></li>
              <li><Link href="/contry" onClick={() => setMenuOpen(false)}>Countries</Link></li>
              <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
              <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
        </div>

        {/* Center - Logo */}
        <div className={styles.logoSection}>
          <img
            src="/header/CompanyLogo.png"
            alt="Logo"
            className={styles.logo}
          />

          <div>
            <h2 className={styles.title}>Eco Export</h2>
            <p className={styles.subtitle}>Global Import & Export</p>
          </div>
        </div>

        {/* Right - Search + Language */}
        <div className={styles.rightSection}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search products..."
              className={styles.searchInput}
            />
            <button className={styles.searchBtn} aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          <select className={styles.language}>
            <option>EN</option>
            <option>HI</option>
          </select>
        </div>

        {/* Mobile Button */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
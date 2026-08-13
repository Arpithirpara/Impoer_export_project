"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();

  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.growthLine}></div>

      <div className={styles.container}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <h3 className={styles.brandName}>
            <span className={styles.leaf}>🌿</span> Eco Export
          </h3>
          <p className={styles.tagline}>
            Leading Agro Commodity & Food Grain Exporters from India — Sourced, processed, and packaged for overseas markets worldwide with stringent quality standards.
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}>f</a>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}>ig</a>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>in</a>
            <a href="#" aria-label="WhatsApp" className={styles.socialIcon}>wa</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Eco Export</Link></li>
            <li><Link href="/product">Products</Link></li>
            <li><Link href="/exhibitions">Trade Exhibitions</Link></li>
            <li><Link href="/contry">Countries Served</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Export Categories</h4>
          <ul className={styles.linkList}>
            <li><Link href="/product?category=Spices">Spices & Seasonings</Link></li>
            <li><Link href="/product?category=Rice">Rice Varieties</Link></li>
            <li><Link href="/product?category=Grains%20%26%20Cereals">Grains & Cereals</Link></li>
            <li><Link href="/product?category=Flour">Flour & Agro Meals</Link></li>
            <li><Link href="/product?category=Oil%20Seeds">Oil Seeds</Link></li>
            <li><Link href="/product?category=Cattle%20Feed">Animal & Cattle Feed</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact & Location</h4>
          <ul className={styles.contactList}>
            <li>📍 Ahmedabad, Gujarat, India (Near Mundra & Kandla Ports)</li>
            <li>📞 +91 98765 43210 / +91 79 1234 5678</li>
            <li>✉️ info@ecoexport.in / export@ecoexport.in</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Eco Export. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <Link href="/contact">Privacy Policy</Link>
          <Link href="/contact">Terms of Service</Link>
          <Link href="/contact">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}

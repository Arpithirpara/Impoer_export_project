"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState(null);

  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Top Accent Gradient Line */}
      <div className={styles.growthLine}></div>

      <div className={styles.container}>
        {/* Brand Column with Company Logo */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brandLogoWrapper}>
            <img
              src="/header/CompanyLogo.png"
              alt="Eco Export Logo"
              className={styles.brandLogo}
            />
            <div className={styles.brandTextGroup}>
              <h3 className={styles.brandTitle}>ECO EXPORT</h3>
              <span className={styles.brandSub}>Global Import & Export</span>
            </div>
          </Link>

          <p className={styles.tagline}>
            India&apos;s trusted exporter of premium Agro Commodities, Spices, Grains, Rice & Oil Seeds. Sourced, processed, and packaged to meet worldwide international standards.
          </p>

          {/* Quick Contact Action Buttons for Mobile Phone */}
          <div className={styles.mobileQuickActions}>
            <a href="tel:+919876543210" className={styles.mobileActionBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Us</span>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={`${styles.mobileActionBtn} ${styles.whatsappBtn}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className={styles.social}>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialIcon}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.573-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className={`${styles.col} ${openSection === "quickLinks" ? styles.expanded : ""}`}>
          <div className={styles.colHeader} onClick={() => toggleSection("quickLinks")}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div className={styles.colContent}>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Eco Export</Link></li>
              <li><Link href="/product">Products Catalogue</Link></li>
              <li><Link href="/exhibitions">Trade Exhibitions</Link></li>
              <li><Link href="/contry">Countries Served</Link></li>
              <li><Link href="/gallery">Gallery & Media</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Categories Column */}
        <div className={`${styles.col} ${openSection === "categories" ? styles.expanded : ""}`}>
          <div className={styles.colHeader} onClick={() => toggleSection("categories")}>
            <h4 className={styles.colTitle}>Export Categories</h4>
            <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div className={styles.colContent}>
            <ul className={styles.linkList}>
              <li><Link href="/product?category=Spices">Spices & Seasonings</Link></li>
              <li><Link href="/product?category=Rice">Basmati & Non-Basmati Rice</Link></li>
              <li><Link href="/product?category=Grains%20%26%20Cereals">Grains & Cereals</Link></li>
              <li><Link href="/product?category=Flour">Flour & Agro Meals</Link></li>
              <li><Link href="/product?category=Oil%20Seeds">Oil Seeds & Kernels</Link></li>
              <li><Link href="/product?category=Cattle%20Feed">Animal & Cattle Feed</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Column */}
        <div className={`${styles.col} ${openSection === "contact" ? styles.expanded : ""}`}>
          <div className={styles.colHeader} onClick={() => toggleSection("contact")}>
            <h4 className={styles.colTitle}>Contact & Location</h4>
            <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div className={styles.colContent}>
            <ul className={styles.contactList}>
              <li>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Ahmedabad, Gujarat, India (Near Mundra & Kandla Ports)</span>
              </li>
              <li>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <div className={styles.contactPhoneGroup}>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                  <span className={styles.slash}>/</span>
                  <a href="tel:+917912345678">+91 79 1234 5678</a>
                </div>
              </li>
              <li>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <div>
                  <a href="mailto:info@ecoexport.in">info@ecoexport.in</a>
                </div>
              </li>
            </ul>

            {/* Interactive Luxury Google Map Embed */}
            <div className={styles.footerMapBox}>
              <div className={styles.mapBadgeRow}>
                <div className={styles.mapPinHeader}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Ahmedabad HQ Location</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Ahmedabad,Gujarat,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapDirectLink}
                >
                  <span>Open Maps</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </a>
              </div>

              <div className={styles.iframeWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29966395982!2d72.41492983794303!3d23.020181762100806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="125"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eco Export Office Location"
                  className={styles.mapIframe}
                ></iframe>
              </div>
            </div>

            {/* Certifications Badge Pills */}
            <div className={styles.certPills}>
              <span className={styles.certPill}>ISO 9001:2015</span>
              <span className={styles.certPill}>APEDA</span>
              <span className={styles.certPill}>FIEO</span>
              <span className={styles.certPill}>FSSAI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} <strong>ECO EXPORT</strong>. All rights reserved.
          </p>

          <div className={styles.bottomLinks}>
            <Link href="/contact">Privacy Policy</Link>
            <span className={styles.dot}>•</span>
            <Link href="/contact">Terms of Service</Link>
            <span className={styles.dot}>•</span>
            <Link href="/contact">Sitemap</Link>
          </div>

          <button onClick={scrollToTop} className={styles.scrollTopBtn} aria-label="Scroll to top">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}


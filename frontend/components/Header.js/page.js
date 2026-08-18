"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import styles from "./header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "en", label: "EN - English", flag: "🇬🇧" },
    { code: "hi", label: "HI - हिंदी", flag: "🇮🇳" },
    { code: "gu", label: "GU - ગુજરાતી", flag: "🇮🇳" },
    { code: "es", label: "ES - Español", flag: "🇪🇸" },
    { code: "fr", label: "FR - Français", flag: "🇫🇷" },
    { code: "de", label: "DE - Deutsch", flag: "🇩🇪" },
    { code: "ar", label: "AR - العربية", flag: "🇦🇪" },
    { code: "zh", label: "ZH - 中文", flag: "🇨🇳" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/product?query=${encodeURIComponent(searchQuery.trim())}`);
      setMenuOpen(false);
      setSearchOpen(false);
      setMobileSearchOpen(false);
    } else if (searchOpen || mobileSearchOpen) {
      router.push("/product");
      setMenuOpen(false);
      setSearchOpen(false);
      setMobileSearchOpen(false);
    } else {
      setSearchOpen(true);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/product" },
    { name: "Exhibitions", path: "/exhibitions" },
    { name: "Countries", path: "/contry" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Left Group - Logo & Navigation Links */}
        <div className={styles.headerLeftGroup}>
          <Link href="/" className={styles.logoSection}>
            <img
              src="/header/CompanyLogo.png"
              alt="Eco Export Logo"
              className={styles.logo}
            />
            <div className={styles.brandDetails}>
              <h2 className={styles.title}>ECO EXPORT</h2>
              <p className={styles.subtitle}>Global Import & Export</p>
            </div>
          </Link>

          <nav className={styles.desktopNav}>
            <ul>
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={isActive ? styles.activeLink : ""}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Right Section - Search Icon + Static Language Select + Quote Button */}
        <div className={styles.rightSection}>
          <form
            onSubmit={handleSearch}
            className={`${styles.searchBox} ${searchOpen ? styles.searchBoxExpanded : ""}`}
          >
            <button
              type="submit"
              onClick={() => {
                if (!searchOpen) setSearchOpen(true);
              }}
              className={styles.searchBtn}
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => {
                if (!searchQuery.trim()) {
                  setTimeout(() => setSearchOpen(false), 200);
                }
              }}
              className={styles.searchInput}
            />
          </form>

          {/* Static Language Selector */}
          <select
            className={styles.language}
            aria-label="Language selector"
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
          >
            {languages.map((l) => (
              <option key={l.code} value={l.code}>
                {l.flag} {l.label}
              </option>
            ))}
          </select>

          <Link href="/inquiry" className={styles.ctaBtn}>
            Get Quote
          </Link>
        </div>

        {/* Mobile Header Controls */}
        <div className={styles.mobileHeaderRight}>
          <button
            className={`${styles.mobileSearchToggleBtn} ${mobileSearchOpen ? styles.activeSearchBtn : ""}`}
            onClick={() => setMobileSearchOpen((prev) => !prev)}
            aria-label="Toggle Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <Link href="/inquiry" className={styles.mobileHeaderCta}>
            Get Quote
          </Link>

          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Expandable Mobile Search Bar (Directly below main header bar) */}
      {mobileSearchOpen && (
        <div className={styles.mobileTopSearchContainer}>
          <form onSubmit={handleSearch} className={styles.mobileTopSearchForm}>
            <div className={styles.mobileTopSearchInputWrap}>
              <svg
                className={styles.mobileTopSearchIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className={styles.mobileTopSearchInput}
              />
              {searchQuery && (
                <button
                  type="button"
                  className={styles.mobileTopSearchClear}
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear text"
                >
                  ✕
                </button>
              )}
            </div>
            <button type="submit" className={styles.mobileTopSearchSubmit}>
              Search
            </button>
          </form>
        </div>
      )}

      {/* FULL SCREEN MOBILE OVERLAY MENU */}
      {menuOpen && (
        <div className={styles.mobileMenuOverlay}>
          {/* Header Row in Overlay with Close Button */}
          <div className={styles.mobileOverlayHeader}>
            <Link href="/" className={styles.mobileBrandLogo} onClick={() => setMenuOpen(false)}>
              <img src="/header/CompanyLogo.png" alt="Eco Export Logo" className={styles.overlayLogoImg} />
              <div className={styles.overlayBrandGroup}>
                <span className={styles.overlayBrandTitle}>ECO EXPORT</span>
                <span className={styles.overlayBrandSub}>Global Trade</span>
              </div>
            </Link>

            <button
              className={styles.closeBtn}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Centered Scrollable Overlay Content */}
          <div className={styles.mobileOverlayBody}>
            {/* Mobile Search Box */}
            <form onSubmit={handleSearch} className={styles.mobileSearchForm}>
              <button type="submit" className={styles.mobileSearchSubmitBtn} aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.mobileSearchInput}
              />
            </form>

            {/* Navigation Links */}
            <ul className={styles.mobileNavList}>
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={isActive ? styles.mobileActiveLink : styles.mobileLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Static Language Selector */}
            <div className={styles.mobileLanguageWrap} style={{ margin: "16px 0", width: "100%", maxWidth: "280px" }}>
              <select
                className={styles.language}
                style={{ width: "100%", padding: "10px 14px", fontSize: "14px" }}
                aria-label="Mobile language selector"
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
              >
                {languages.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.flag} {l.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Divider Line */}
            <div className={styles.mobileDivider}></div>

            {/* Contact Us Section */}
            <div className={styles.mobileContactSection}>
              <span className={styles.contactLabel}>CONTACT US</span>
              <a href="tel:+919265000000" className={styles.contactPhone}>
                +91 92650 XXXXX
              </a>
              <a href="mailto:info@ecoexport.in" className={styles.contactEmail}>
                info@ecoexport.in
              </a>

              {/* Social Media Icons Row */}
              <div className={styles.mobileSocialRow}>
                <a href="#" aria-label="Facebook" className={styles.mobileSocialChip}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className={styles.mobileSocialChip}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className={styles.mobileSocialChip}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" aria-label="WhatsApp" className={styles.mobileSocialChip}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.573-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
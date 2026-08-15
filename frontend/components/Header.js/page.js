"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import styles from "./header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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

  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/product?category=${encodeURIComponent(searchQuery.trim())}`);
      setMenuOpen(false);
    } else {
      router.push("/product");
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/product" },
    { name: "Exhibitions", path: "/exhibitions" },
    { name: "Countries", path: "/contry" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Left - Logo & Brand */}
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

        {/* Center - Desktop Navigation Menu */}
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          {/* Mobile Search inside drawer */}
          <div className={styles.mobileSearchBox}>
            <form onSubmit={handleSearch} className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchBtn} aria-label="Search">
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
            </form>
          </div>

          <ul>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={isActive ? styles.activeLink : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={styles.mobileActionBox}>
            <Link
              href="/inquiry"
              className={styles.mobileCtaBtn}
              onClick={() => setMenuOpen(false)}
            >
              Get Quote
            </Link>
            <div className={styles.mobileLang}>
              <label htmlFor="mobileLangSelect">Language: </label>
              <select id="mobileLangSelect" className={styles.language}>
                <option>EN</option>
                <option>HI</option>
              </select>
            </div>
          </div>
        </nav>

        {/* Right - Desktop Search + Language + Quote Button */}
        <div className={styles.rightSection}>
          <form onSubmit={handleSearch} className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchBtn} aria-label="Search">
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
          </form>

          <select className={styles.language} aria-label="Language selector">
            <option>EN</option>
            <option>HI</option>
          </select>

          <Link href="/inquiry" className={styles.ctaBtn}>
            Get Quote
          </Link>
        </div>

        {/* Mobile Header Right Controls: Compact Quote CTA + Hamburger */}
        <div className={styles.mobileHeaderRight}>
          <Link href="/inquiry" className={styles.mobileHeaderCta}>
            Get Quote
          </Link>

          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
"use client";

import { useState, useEffect } from "react";
import styles from "./preloader.module.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Lock background scroll during preloader
    document.body.classList.add("preloaderActive");

    // Small time lag (~1 second quick transition)
    const displayTimer = setTimeout(() => {
      setFadeOut(true);
      document.body.classList.add("pageEntering");

      // Unmount preloader after smooth fade-out completes
      const unmountTimer = setTimeout(() => {
        setLoading(false);
        document.body.classList.remove("preloaderActive");
      }, 550);

      return () => clearTimeout(unmountTimer);
    }, 900); // 900ms display time for fast logo reveal

    return () => {
      clearTimeout(displayTimer);
      document.body.classList.remove("preloaderActive");
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`${styles.preloaderOverlay} ${fadeOut ? styles.fadeOut : ""}`}>
      {/* Background Ambient Glow Orbs */}
      <div className={styles.glowOrb1}></div>
      <div className={styles.glowOrb2}></div>

      <div className={styles.preloaderContent}>
        {/* Animated Logo Container */}
        <div className={styles.logoWrapper}>
          <div className={styles.logoGlowRing}></div>
          <img
            src="/header/Eco_Logo.png"
            alt="Eco Export Logo"
            className={styles.logoImg}
          />
        </div>

        {/* Brand Name & Tagline */}
        <div className={styles.brandGroup}>
          <h1 className={styles.brandTitle}>
            ECO <span className={styles.brandTitleGreen}>EXPORT</span>
          </h1>
          <p className={styles.brandSubtitle}>Global Import & Export Partner</p>
        </div>
      </div>
    </div>
  );
}

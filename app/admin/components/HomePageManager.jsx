"use client";

import Image from "next/image";
import {
  ImageIcon,
  Ship,
  Upload,
  Save,
  CheckCircle,
  Edit,
} from "lucide-react";
import styles from "../admin.module.css";

export default function HomePageManager({
  homeSubNav,
  setHomeSubNav,
  heroSlides,
  portData,
}) {
  return (
    <div className={styles.homeManagerContainer}>
      {/* Home Sub-Tabs Bar */}
      <div className={styles.subTabHeaderBar}>
        <button
          onClick={() => setHomeSubNav("hero")}
          className={`${styles.subTabButton} ${homeSubNav === "hero" ? styles.activeSubTabButton : ""}`}
        >
          <ImageIcon size={18} />
          <span>Hero Banner Slider ({heroSlides.length})</span>
        </button>
        <button
          onClick={() => setHomeSubNav("ports")}
          className={`${styles.subTabButton} ${homeSubNav === "ports" ? styles.activeSubTabButton : ""}`}
        >
          <Ship size={18} />
          <span>Port Data ({portData.length})</span>
        </button>
      </div>

      {/* SUB-TAB 1: HERO BANNER SLIDER */}
      {homeSubNav === "hero" && (
        <div className={styles.tableCard}>
          <div className={styles.tableHeaderFlex}>
            <div>
              <h3>Home Hero Slider Banners</h3>
              <p>Manage main homepage slider images, headline titles, and subtext.</p>
            </div>
            <button className={styles.primaryActionBtn}>
              <Upload size={16} style={{ marginRight: 6 }} />
              Upload New Banner
            </button>
          </div>

          <div className={styles.slidesList}>
            {heroSlides.map((slide, idx) => (
              <div key={slide.id} className={styles.slideItemCard}>
                <div className={styles.slideThumbWrap}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className={styles.slideThumb}
                  />
                  <span className={styles.slideNumberBadge}>Slide #{idx + 1}</span>
                </div>

                <div className={styles.slideFormFields}>
                  <div className={styles.fieldGroup}>
                    <label>Main Headline Title</label>
                    <input
                      type="text"
                      defaultValue={slide.title}
                      className={styles.slideInput}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label>Subtitle / Description</label>
                    <input
                      type="text"
                      defaultValue={slide.subtitle}
                      className={styles.slideInput}
                    />
                  </div>

                  <div className={styles.slideActionsRow}>
                    <span className={styles.statusActivePill}>
                      <CheckCircle size={14} style={{ marginRight: 4 }} />
                      {slide.status}
                    </span>

                    <button className={styles.saveSlideBtn}>
                      <Save size={14} style={{ marginRight: 4 }} />
                      Save Banner Changes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: PORT LOGISTICS DATA */}
      {homeSubNav === "ports" && (
        <div className={styles.tableCard}>
          <div className={styles.tableHeaderFlex}>
            <div>
              <h3>Home Port Logistics Data (Mundra, Kandla, Pipavav)</h3>
              <p>Manage port proximity, distances, and cargo dispatches displayed on Homepage.</p>
            </div>
          </div>

          <div className={styles.portDataGrid}>
            {portData.map((port) => (
              <div key={port.id} className={styles.portEditBox}>
                <div className={styles.portBoxHeader}>
                  <h4>⚓ {port.name}</h4>
                  <span className={styles.portStatusTag}>{port.status}</span>
                </div>

                <div className={styles.portFieldGroup}>
                  <label>Distance & Transit</label>
                  <input type="text" defaultValue={port.distance} className={styles.slideInput} />
                </div>

                <div className={styles.portFieldGroup}>
                  <label>Primary Cargo Products</label>
                  <input type="text" defaultValue={port.products} className={styles.slideInput} />
                </div>

                <button className={styles.savePortBtn}>
                  <Edit size={14} style={{ marginRight: 4 }} />
                  Update Port Data
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

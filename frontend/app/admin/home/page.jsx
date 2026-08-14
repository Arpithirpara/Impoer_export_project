"use client";

import { useState } from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Fraunces, Inter } from "next/font/google";
import { ImageIcon, Upload, Save, CheckCircle } from "lucide-react";
import styles from "../admin.module.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const initialHeroSlides = [
  {
    id: "slide-1",
    title: "Leading Agro Commodity Exporters from India",
    subtitle: "From growing to processing & packaging for worldwide overseas markets.",
    image: "/Hero_slider_img/Hero_img_1.png",
    status: "Active",
  },
  {
    id: "slide-2",
    title: "Strategic Port Proximity (Mundra, Kandla & Pipavav)",
    subtitle: "Quick container shipments with minimal logistics overheads.",
    image: "/Hero_slider_img/Hero_img_2.png",
    status: "Active",
  },
  {
    id: "slide-3",
    title: "100% Quality Certified Agro Products",
    subtitle: "Stringent laboratory testing and phytosanitary compliance.",
    image: "/Hero_slider_img/Hero_img_3.png",
    status: "Active",
  },
];

export default function AdminHomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");
  const [heroSlides, setHeroSlides] = useState(initialHeroSlides);

  return (
    <div className={`${styles.adminLayout} ${inter.className}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={styles.mainWrapper}>
        <TopHeader
          activeNav="home"
          homeSubNav="hero"
          frauncesFont={fraunces}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <main className={styles.mainContent}>
          <div className={styles.tableCard}>
            <div className={styles.tableHeaderFlex}>
              <div>
                <h3>
                  <ImageIcon size={20} style={{ display: "inline", marginRight: 8, color: "#15803d" }} />
                  Home Hero Slider Banners
                </h3>
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
                    <Image src={slide.image} alt={slide.title} fill className={styles.slideThumb} />
                    <span className={styles.slideNumberBadge}>Slide #{idx + 1}</span>
                  </div>

                  <div className={styles.slideFormFields}>
                    <div className={styles.fieldGroup}>
                      <label>Main Headline Title</label>
                      <input type="text" defaultValue={slide.title} className={styles.slideInput} />
                    </div>

                    <div className={styles.fieldGroup}>
                      <label>Subtitle / Description</label>
                      <input type="text" defaultValue={slide.subtitle} className={styles.slideInput} />
                    </div>

                    <div className={styles.slideActionsRow}>
                      <span className={styles.statusActivePill}>
                        <CheckCircle size={14} style={{ marginRight: 4 }} />
                        {slide.status}
                      </span>
                      <button className={styles.saveSlideBtn}>
                        <Save size={14} style={{ marginRight: 4 }} />
                        Save Banner
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

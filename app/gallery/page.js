"use client";

import { useState } from "react";
import Image from "next/image";
import { Fraunces, Inter } from "next/font/google";
import styles from "./gallery.module.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const categoryList = [
  { id: "All", label: "All Showcase", icon: "✨" },
  { id: "Grains & Wheat", label: "Grains & Wheat", icon: "🌾" },
  { id: "Spices & Seeds", label: "Spices & Seeds", icon: "🌶️" },
  { id: "Rice Varieties", label: "Rice Varieties", icon: "🍚" },
  { id: "Processing & Ports", label: "Processing & Port Logistics", icon: "⚓" },
];

const items = [
  {
    id: "g1",
    title: "Durum Wheat & Grain Milling Facility",
    category: "Grains & Wheat",
    image: "/Hero_slider_img/Hero_img_2.png",
  },
  {
    id: "g2",
    title: "Export Grade Indian Spices & Turmeric Processing",
    category: "Spices & Seeds",
    image: "/categories_img/Spices_img.png",
  },
  {
    id: "g3",
    title: "Premium Basmati Rice Quality Sorting",
    category: "Rice Varieties",
    image: "/categories_img/rice.png",
  },
  {
    id: "g4",
    title: "Oil Seeds & Cattle Feed Packaging",
    category: "Grains & Wheat",
    image: "/categories_img/Grains_img.png",
  },
  {
    id: "g5",
    title: "Mundra Port Container Loading & Dispatch",
    category: "Processing & Ports",
    image: "/Hero_slider_img/Hero_img_1.png",
  },
  {
    id: "g6",
    title: "Gulfood Dubai International Stall Showcase",
    category: "Processing & Ports",
    image: "/Hero_slider_img/Hero_img_3.png",
  },
  {
    id: "g7",
    title: "Natural Sesame & Mustard Seed Storage",
    category: "Spices & Seeds",
    image: "/categories_img/mix_img.png",
  },
  {
    id: "g8",
    title: "Non-Basmati Long Grain Rice Export Bags",
    category: "Rice Varieties",
    image: "/categories_img/Pulses & Lentils.png",
  },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const visibleItems =
    active === "All" ? items : items.filter((item) => item.category === active);

  const getItemCount = (catId) => {
    if (catId === "All") return items.length;
    return items.filter((item) => item.category === catId).length;
  };

  return (
    <main className={`${styles.page} ${inter.className}`}>
      {/* Clean Header (No Banner Image as requested) */}
      <section className={styles.cleanHeader}>
        <div className={styles.container}>
          <div className={styles.tagBadge}>
            <span className={styles.tagDot}></span>
            <span>PHOTO & MEDIA SHOWCASE</span>
          </div>
          <h1 className={`${styles.headerTitle} ${fraunces.className}`}>
            Eco Export <span className={styles.highlightText}>Photo Gallery</span>
          </h1>
          <p className={styles.headerSub}>
            A visual walkthrough of our produce harvesting, hygienic processing facilities, port logistics, and trade exhibition showcases worldwide.
          </p>
        </div>
      </section>

      {/* Filter Tabs Container */}
      <div className={styles.filterContainer}>
        <div className={styles.container}>
          <div className={styles.filters}>
            {categoryList.map((cat) => {
              const count = getItemCount(cat.id);
              const isActive = active === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`${styles.filterBtn} ${
                    isActive ? styles.filterBtnActive : ""
                  }`}
                >
                  <span className={styles.catIcon}>{cat.icon}</span>
                  <span className={styles.catLabel}>{cat.label}</span>
                  <span className={`${styles.catCount} ${isActive ? styles.catCountActive : ""}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {visibleItems.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={95}
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.overlay}>
                    <span className={styles.categoryTag}>{item.category}</span>
                    <h3 className={`${styles.cardTitle} ${fraunces.className}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


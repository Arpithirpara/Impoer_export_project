"use client";

import { useState } from "react";
import Image from "next/image";
import { fraunces, inter } from "../fonts";
import styles from "./gallery.module.css";

const categoryList = [
  { id: "All", label: "All Showcase", icon: "✨" },
  { id: "Grains & Wheat", label: "Grains & Wheat", icon: "🌾" },
  { id: "Rice Varieties", label: "Rice Varieties", icon: "🍚" },
  { id: "Pulses & Lentils", label: "Pulses & Lentils", icon: "🫘" },
  { id: "Tea & Coffee", label: "Tea & Coffee", icon: "☕" },
];

const items = [
  {
    id: "g1",
    title: "Premium Basmati Rice Export Sorting",
    category: "Rice Varieties",
    image: "/product_img/Basmat_rice.png",
  },
  {
    id: "g2",
    title: "Assam Black Tea Leaves Harvest",
    category: "Tea & Coffee",
    image: "/product_img/asam_black-tea.png",
  },
  {
    id: "g3",
    title: "Robusta Coffee Beans Processing",
    category: "Tea & Coffee",
    image: "/product_img/Robusta Coffee.jpg",
  },
  {
    id: "g4",
    title: "Golden Durum Milling Wheat Grains",
    category: "Grains & Wheat",
    image: "/product_img/wheat.jpg",
  },
  {
    id: "g5",
    title: "Natural Green Gram (Moong) Pulses",
    category: "Pulses & Lentils",
    image: "/product_img/Green gram.jpg",
  },
  {
    id: "g6",
    title: "Pearl Millet (Bajra) Grain Processing",
    category: "Grains & Wheat",
    image: "/product_img/Bajara.jpg",
  },
  {
    id: "g7",
    title: "Export Grade Kabuli Chana (Chickpeas)",
    category: "Pulses & Lentils",
    image: "/product_img/kabuli_chana.jpg",
  },
  {
    id: "g8",
    title: "Parboiled Rice Steam Processing Plant",
    category: "Rice Varieties",
    image: "/product_img/Parboiled Rice Processing Plant Project Report 2026.jpg",
  },
  {
    id: "g9",
    title: "Robust Barley Grains & Malting Facility",
    category: "Grains & Wheat",
    image: "/product_img/Robust Barley.jpg",
  },
  {
    id: "g10",
    title: "Arabica Coffee Roast & Blend",
    category: "Tea & Coffee",
    image: "/product_img/coffee.jpg",
  },
  {
    id: "g11",
    title: "Freeze-Dried Instant Coffee Powder",
    category: "Tea & Coffee",
    image: "/product_img/coffee_powder.jpg",
  },
  {
    id: "g12",
    title: "Organic Green Tea Processing",
    category: "Tea & Coffee",
    image: "/product_img/green_tea.jpg",
  },
  {
    id: "g13",
    title: "Split Red Lentils (Masoor Dal)",
    category: "Pulses & Lentils",
    image: "/product_img/musoor_dal.jpg",
  },
  {
    id: "g14",
    title: "Non-Basmati Long Grain Rice Shipment",
    category: "Rice Varieties",
    image: "/product_img/non-Basmati_rice.jpg",
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
      {/* Clean Header */}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

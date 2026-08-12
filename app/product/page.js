"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Fraunces, Inter } from "next/font/google";
import styles from "./product.module.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const filters = [
  "All",
  "Tea",
  "Coffee",
  "Rice",
  "Pulses & Lentils",
  "Grains & Cereals",
  "Global Sourcing",
];

const products = [
  // Tea
  {
    id: "assam-black-tea",
    name: "Assam Black Tea",
    category: "Tea",
    description: "Bold, malty CTC tea leaves sourced from Assam estates.",
    image: "/product_img/asam_black-tea.png",
  },
  {
    id: "green-tea-leaves",
    name: "Green Tea Leaves",
    category: "Tea",
    description: "Fresh, minimally processed green tea with a light finish.",
    image: "/product_img/green_tea.jpg",
  },

  // Coffee
  {
    id: "arabica-coffee-beans",
    name: "Arabica Coffee Beans",
    category: "Coffee",
    description: "Smooth, aromatic beans with balanced acidity.",
    image: "/product_img/coffee.jpg",
  },
  {
    id: "robusta-coffee-beans",
    name: "Robusta Coffee Beans",
    category: "Coffee",
    description: "Bold, high-caffeine beans ideal for espresso blends.",
    image: "/product_img/Robusta Coffee.jpg",
  },
  {
    id: "instant-coffee-powder",
    name: "Instant Coffee Powder",
    category: "Coffee",
    description: "Freeze-dried coffee granules for consistent flavor.",
    image: "/product_img/coffee_powder.jpg",
  },

  // Rice
  {
    id: "basmati-rice",
    name: "Basmati Rice",
    category: "Rice",
    description: "Long-grain aromatic rice, aged for extra fragrance.",
    image: "/product_img/Basmat_rice.png",
  },
  {
    id: "non-basmati-rice",
    name: "Non-Basmati Long Grain",
    category: "Rice",
    description: "Reliable everyday long-grain rice for bulk export.",
    image: "/product_img/non-Basmati_rice.jpg",
  },
  {
    id: "parboiled-rice",
    name: "Parboiled Rice",
    category: "Rice",
    description: "Steamed and dried rice with higher nutrient retention.",
    image:
      "/product_img/Parboiled Rice Processing Plant Project Report 2026.jpg",
  },

  // Pulses & Lentils
  {
    id: "red-lentils",
    name: "Red Lentils (Masoor)",
    category: "Pulses & Lentils",
    description: "Split red lentils, quick-cooking and high in protein.",
    image: "/product_img/musoor_dal.jpg",
  },
  {
    id: "chickpeas",
    name: "Chickpeas (Kabuli Chana)",
    category: "Pulses & Lentils",
    description: "Large, cream-colored chickpeas graded for export.",
    image: "/product_img/kabuli_chana.jpg",
  },
  {
    id: "green-moong",
    name: "Green Moong Beans",
    category: "Pulses & Lentils",
    description: "Whole green gram, sourced from trusted growers.",
    image: "/product_img/Green gram.jpg",
  },

  // Grains & Cereals
  {
    id: "wheat",
    name: "Wheat",
    category: "Grains & Cereals",
    description: "Milling-grade wheat with consistent protein content.",
    image: "/product_img/wheat.jpg",
  },
  {
    id: "barley",
    name: "Barley",
    category: "Grains & Cereals",
    description: "Feed and malting grade barley, cleaned and graded.",
    image: "/product_img/Robust Barley.jpg",
  },
  {
    id: "millets",
    name: "Millets (Bajra)",
    category: "Grains & Cereals",
    description: "Nutrient-dense pearl millet for global cereal markets.",
    image: "/product_img/Bajara.jpg",
  },
];

function ProductContent() {
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category") || "All";

  const [active, setActive] = useState(selectedCategory);

  useEffect(() => {
    setActive(selectedCategory);
  }, [selectedCategory]);

  const visibleProducts =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <main className={inter.className}>
      <section className={styles.header}>
        <h1 className={fraunces.className}>Our Products</h1>
        <p>
          Explore our full range across six categories — sourced, graded and
          export-ready.
        </p>
      </section>

      <div className={styles.filters}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`${styles.filterBtn} ${
              active === f ? styles.filterBtnActive : ""
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <section className={styles.grid}>
        {visibleProducts.map((p) => (
          <div className={styles.card} key={p.id}>
            <div className={styles.imageWrap}>
              <Image
                src={p.image}
                alt={p.name}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 25vw"
              />

              <span className={styles.tag}>{p.category}</span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={fraunces.className}>{p.name}</h3>

              <p>{p.description}</p>

              <div className={styles.actions}>
                <Link href={`/Details/${p.id}`} className={styles.link}>
                  View Details
                </Link>

                <Link href="/inquiry">
                  <button className={styles.buyBtn}>Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductContent />
    </Suspense>
  );
}
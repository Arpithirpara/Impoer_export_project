import Image from "next/image";
import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";
import styles from "./categories.module.css";

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

const categories = [
  {
    id: "tea",
    title: "Tea",
    category: "Tea",
    description:
      "Handpicked black, green and herbal teas sourced from premium estates.",
    image: "/categories_img/Gemini_Generated_Image_a5w3qaa5w3qaa5w3.png",
  },
  {
    id: "coffee",
    title: "Coffee",
    category: "Coffee",
    description:
      "Premium Arabica and Robusta coffees with consistent profile and quality.",
    image: "/categories_img/coffee_img.png",
  },
  {
    id: "rice",
    title: "Rice",
    category: "Rice",
    description:
      "Long-grain and aromatic rice varieties graded for export standards.",
    image: "/categories_img/rice.png",
  },
  {
    id: "pulses",
    title: "Pulses & Lentils",
    category: "Pulses & Lentils",
    description:
      "High-protein lentils, chickpeas and beans sourced from trusted growers.",
    image: "/categories_img/Pulses & Lentils.png",
  },
  {
    id: "grains",
    title: "Grains & Cereals",
    category: "Grains & Cereals",
    description:
      "Wheat, barley, oats and millets processed to international quality norms.",
    image: "/categories_img/mix_img.png",
  },
  {
    id: "global-sourcing",
    title: "Global Sourcing",
    category: "Global Sourcing",
    description:
      "End-to-end sourcing network spanning farms across multiple continents.",
    image: "/categories_img/global&sorching.png",
  },
];

export default function CategoryGrid() {
  return (
    <section className={`${styles.section} ${inter.className}`}>
      <div className={styles.header}>
        <h2 className={`${styles.heading} ${fraunces.className}`}>
          Our Product Categories
        </h2>

        <p className={styles.subheading}>
          Premium agricultural commodities sourced globally to meet buyer
          requirements.
        </p>
      </div>

      <div className={styles.grid}>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/product?category=${encodeURIComponent(cat.category)}`}
            className={styles.card}
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className={styles.image}
              sizes="(max-width:768px) 100vw, 33vw"
            />

            <div className={styles.overlay}></div>

            {/* Always-visible category badge */}
            <span className={`${styles.badge} ${inter.className}`}>
              {cat.category}
            </span>

            <div className={styles.content}>
              <h3 className={`${styles.title} ${fraunces.className}`}>
                {cat.title}
              </h3>

              <p className={styles.description}>
                {cat.description}
              </p>

              <span className={styles.link}>
                View Products →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
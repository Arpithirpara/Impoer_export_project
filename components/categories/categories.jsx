import Image from "next/image";
import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";
import styles from "./categories.module.css";

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

const categories = [
  {
    id: "spices",
    title: "Spices & Seasonings",
    category: "Spices",
    image: "/categories_img/Spices_img.png",
  },
  {
    id: "grains",
    title: "Grains & Cereals",
    category: "Grains & Cereals",
    image: "/categories_img/Grains_img.png",
  },
  {
    id: "rice",
    title: "Rice Varieties",
    category: "Rice",
    image: "/categories_img/Rice_img.jpg",
  },
  {
    id: "flour",
    title: "Flour & Agro Meals",
    category: "Flour",
    image: "/categories_img/Flour_img.png",
  },
  {
    id: "oil-seeds",
    title: "Oil Seeds",
    category: "Oil Seeds",
    image: "/categories_img/Oil Seeds.png",
  },
  {
    id: "cattle-feed",
    title: "Animal & Cattle Feed",
    category: "Cattle Feed",
    image: "/categories_img/Cattle Feed_Animal Feed.png",
  },
];

export default function CategoryGrid() {
  return (
    <section className={`${styles.section} ${inter.className}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tagBadge}>
            <span className={styles.tagDot}></span>
            <span>WHAT WE EXPORT</span>
          </div>
          <h2 className={`${styles.heading} ${fraunces.className}`}>
            Our Agricultural <span className={styles.headingHighlight}>Export Categories</span>
          </h2>
          <p className={styles.subheading}>
            Supplying premium quality agricultural products across global markets.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/product?category=${encodeURIComponent(cat.category)}`}
              className={styles.card}
            >
              {/* Clean Crisp Image Box */}
              <div className={styles.imageWrapper}>
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  quality={95}
                  priority
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Title & Details Set Below Image */}
              <div className={styles.cardBody}>
                <div className={styles.titleRow}>
                  <h3 className={`${styles.catName} ${fraunces.className}`}>
                    {cat.title}
                  </h3>
                  <div className={styles.arrowCircle}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.exploreText}>View Products →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
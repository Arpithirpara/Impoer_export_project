"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Search, X, SlidersHorizontal, PackageSearch } from "lucide-react";
import { fraunces, inter } from "../fonts";
import QuickRfqModal from "../../components/QuickRfqModal/QuickRfqModal";
import styles from "./product.module.css";

const filters = [
  "All",
  "Spices",
  "Grains & Cereals",
  "Rice",
  "Flour",
  "Oil Seeds",
  "Cattle Feed",
  "Tea",
  "Coffee",
  "Pulses & Lentils",
];

const products = [
  // Spices
  {
    id: "premium-spices-mix",
    name: "Indian Spices & Seasonings",
    category: "Spices",
    description: "Export-grade whole and ground authentic Indian spices.",
    image: "/categories_img/Spices_img.png",
  },

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
    image: "/product_img/Basmat_rice.png",
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
    name: "Milling Wheat",
    category: "Grains & Cereals",
    description: "Milling-grade wheat with consistent protein content.",
    image: "/product_img/wheat.jpg",
  },
  {
    id: "barley",
    name: "Robust Barley",
    category: "Grains & Cereals",
    description: "Feed and malting grade barley, cleaned and graded.",
    image: "/product_img/Robust Barley.jpg",
  },
  {
    id: "millets",
    name: "Pearl Millets (Bajra)",
    category: "Grains & Cereals",
    description: "Nutrient-dense pearl millet for global cereal markets.",
    image: "/product_img/Bajara.jpg",
  },

  // Flour
  {
    id: "wheat-flour-atta",
    name: "Flour & Agro Meals",
    category: "Flour",
    description: "Finely milled high-protein wheat flour for baking & bread.",
    image: "/categories_img/Flour_img.png",
  },

  // Oil Seeds
  {
    id: "oil-seeds-export",
    name: "Premium Oil Seeds",
    category: "Oil Seeds",
    description: "High oil yield mustard, sesame, and sunflower seeds.",
    image: "/categories_img/Oil Seeds.png",
  },

  // Cattle Feed
  {
    id: "animal-cattle-feed",
    name: "Animal & Cattle Feed",
    category: "Cattle Feed",
    description: "High protein meal and nutritious fodder mixes for export.",
    image: "/categories_img/Cattle Feed_Animal Feed.png",
  },
];

function ProductContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialQuery = searchParams.get("query") || "";

  const [active, setActive] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    if (searchParams.get("category")) {
      setActive(searchParams.get("category"));
    }
    if (searchParams.get("query")) {
      setSearchQuery(searchParams.get("query"));
    }
  }, [searchParams]);

  const openRfqModal = (prodName) => {
    setSelectedProduct(prodName);
    setRfqModalOpen(true);
  };

  const visibleProducts = products.filter((p) => {
    const matchesCategory =
      active === "All" ||
      p.category.toLowerCase() === active.toLowerCase() ||
      p.category.toLowerCase().includes(active.toLowerCase()) ||
      active.toLowerCase().includes(p.category.toLowerCase());

    const matchesQuery =
      !searchQuery.trim() ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase().trim());

    return matchesCategory && matchesQuery;
  });

  const handleResetFilters = () => {
    setActive("All");
    setSearchQuery("");
  };

  return (
    <main className={inter.className} style={{ background: "#fbfbf8", minHeight: "80vh" }}>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.tagBadge}>
          <span className={styles.tagDot}></span>
          <span>EXPORT PRODUCT CATALOGUE</span>
        </div>
        <h1 className={fraunces.className}>
          Explore Our <span className={styles.highlightText}>Agro Products</span>
        </h1>
        <p>
          High quality agricultural commodities grown, processed, and packaged
          to meet international standards.
        </p>
      </section>

      {/* Search & Category Filter Section */}
      <div className={styles.filtersWrapper}>
        <div className={styles.searchBarBox}>
          <div className={styles.searchInputWrap}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search products (e.g. Basmati, Cumin, Wheat, Sesame)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button
                className={styles.clearSearchBtn}
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <div className={styles.countBadge}>
            <SlidersHorizontal size={14} />
            <span>Showing {visibleProducts.length} of {products.length} Products</span>
          </div>
        </div>

        <div className={styles.filters}>
          {filters.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`${styles.filterBtn} ${
                active.toLowerCase() === category.toLowerCase()
                  ? styles.filterBtnActive
                  : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <section className={styles.grid}>
        {visibleProducts.length > 0 ? (
          visibleProducts.map((prod) => (
            <div key={prod.id} className={styles.card}>
              <div className={styles.imageWrap}>
                {prod.image ? (
                  <Image
                    src={prod.image}
                    alt={`${prod.name} - Premium Indian Agricultural Exporter ECO EXPORT`}
                    fill
                    quality={80}
                    className={styles.image}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                ) : (
                  <div className={styles.placeholderImg}>
                    <span style={{ fontSize: "1.8rem", marginBottom: "4px" }}>🌾</span>
                    <span>{prod.name}</span>
                  </div>
                )}
                <span className={styles.tag}>{prod.category}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={`${styles.prodTitle} ${fraunces.className}`}>
                  {prod.name}
                </h3>
                <p className={styles.prodDesc}>{prod.description}</p>
                <div className={styles.actions}>
                  <Link href={`/product/${prod.id}`} className={styles.link}>
                    Details
                  </Link>
                  <button
                    onClick={() => openRfqModal(prod.name)}
                    className={styles.buyBtn}
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.emptyState}>
            <PackageSearch size={48} className={styles.emptyIcon} />
            <h3>No products found</h3>
            <p>We couldn't find any products matching "{searchQuery}". Try searching for another commodity.</p>
            <button onClick={handleResetFilters} className={styles.resetBtn}>
              Reset Filters & Search
            </button>
          </div>
        )}
      </section>

      {/* Quick RFQ Popup Modal */}
      <QuickRfqModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        productName={selectedProduct}
      />
    </main>
  );
}

export default function ProductPage() {
  return (
    <Suspense fallback={<div style={{ padding: "60px 20px", textAlign: "center" }}>Loading Products...</div>}>
      <ProductContent />
    </Suspense>
  );
}
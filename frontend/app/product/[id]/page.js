import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { fraunces, inter } from "../../fonts";
import { products } from "../../data/products";
import styles from "./productDetail.module.css";

const WHATSAPP_NUMBER = "919265000000";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return {};

  return {
    title: `${product.name} | Export Products`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  // Find product by exact ID or case-insensitive match
  const product = products.find(
    (p) => p.id === id || p.id.toLowerCase() === id.toLowerCase()
  );

  if (!product) return notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const displayRelated =
    related.length > 0
      ? related
      : products.filter((p) => p.id !== product.id).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in "${product.name}". Could you share pricing and availability?`
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  const inquiryLink = `/inquiry?product=${encodeURIComponent(product.name)}`;

  return (
    <main className={inter.className} style={{ background: "#F8FAFC", paddingBottom: "80px" }}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/product">Products</Link>
        <span>/</span>
        <span>{product.category}</span>
        <span>/</span>
        <span className={styles.current}>{product.name}</span>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.imageWrap}>
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={styles.image}
              sizes="(max-width:768px) 100vw, 45vw"
              priority
            />
          ) : (
            <div style={{ width: "100%", height: "100%", background: "#f1f5f9", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#94a3b8", fontSize: "1rem", fontWeight: 600 }}>
              <span style={{ fontSize: "2.5rem", marginBottom: "8px" }}>🌾</span>
              <span>{product.name}</span>
            </div>
          )}
          <span className={styles.tag}>{product.category}</span>
        </div>

        <div className={styles.info}>
          <h1 className={fraunces.className}>{product.name}</h1>

          <p className={styles.description}>
            {product.longDescription || product.description}
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Origin</span>
              <span className={styles.metaValue}>{product.origin || "India"}</span>
            </div>

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Packaging</span>
              <span className={styles.metaValue}>{product.packaging || "25kg / 50kg PP Bags"}</span>
            </div>

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>MOQ</span>
              <span className={styles.metaValue}>{product.moq || "1 Metric Ton"}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className={styles.actions}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.51 2 12.04 2zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.12-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.17-1.56-1.17-2.98 0-1.41.74-2.1 1-2.39.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.21.72-.84.92-1.13.19-.28.38-.24.64-.14.26.09 1.66.78 1.94.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
              </svg>
              Chat on WhatsApp
            </a>

            <Link href={inquiryLink} className={styles.inquiryBtn}>
              Send Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className={styles.specsSection}>
        <h2 className={fraunces.className}>Export Product Specifications</h2>

        <div className={styles.specsGrid}>
          {product.specs ? (
            product.specs.map((spec) => (
              <div className={styles.specCard} key={spec.label}>
                <span className={styles.specLabel}>{spec.label}</span>
                <span className={styles.specValue}>{spec.value}</span>
              </div>
            ))
          ) : (
            <>
              <div className={styles.specCard}>
                <span className={styles.specLabel}>Quality Grade</span>
                <span className={styles.specValue}>Export Grade A+</span>
              </div>
              <div className={styles.specCard}>
                <span className={styles.specLabel}>Moisture</span>
                <span className={styles.specValue}>≤ 12% Max</span>
              </div>
              <div className={styles.specCard}>
                <span className={styles.specLabel}>Purity</span>
                <span className={styles.specValue}>99% Min</span>
              </div>
              <div className={styles.specCard}>
                <span className={styles.specLabel}>Shelf Life</span>
                <span className={styles.specValue}>24 Months</span>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Related Products */}
      {displayRelated.length > 0 && (
        <section className={styles.relatedSection}>
          <h2 className={fraunces.className}>Related Products</h2>

          <div className={styles.relatedGrid}>
            {displayRelated.map((r) => (
              <Link
                key={r.id}
                href={`/product/${r.id}`}
                className={styles.relatedCard}
              >
                <div className={styles.relatedImageWrap}>
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    className={styles.relatedImage}
                    sizes="(max-width:768px) 50vw, 20vw"
                  />
                  <span className={styles.tag}>{r.category}</span>
                </div>

                <div style={{ padding: "14px 16px" }}>
                  <span className={styles.relatedName} style={{ padding: 0, fontWeight: 700, fontSize: "0.95rem" }}>
                    {r.name}
                  </span>
                  <p style={{ color: "#64748B", fontSize: "0.8rem", margin: "4px 0 0" }}>
                    {r.origin || "Origin: India"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

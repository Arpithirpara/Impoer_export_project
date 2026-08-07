import Link from "next/link";
import styles from "./blog.module.css";

const posts = [
  {
    title: "How to Export Agricultural Commodities with Confidence",
    excerpt:
      "Discover the export-ready checklist for quality, certifications, and international logistics.",
    category: "Export Tips",
    date: "Aug 1, 2026",
  },
  {
    title: "Top Global Markets for Tea, Coffee, Rice and Spices",
    excerpt:
      "Explore high-demand destinations and how to approach market-specific compliance.",
    category: "Market Insights",
    date: "Jul 24, 2026",
  },
  {
    title: "Sustainable Sourcing Practices for Modern Trade",
    excerpt:
      "Learn how sustainability adds value to exporters and strengthens international buyer trust.",
    category: "Sustainability",
    date: "Jul 10, 2026",
  },
];

export default function BlogPage() {
  return (
    <main className={styles.blogPage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>Insights & Trade Stories</p>
          <h1>News, tips, and export strategies for agricultural businesses.</h1>
          <p className={styles.heroText}>
            Stay ahead with actionable guides, market updates, and export best practices crafted for import-export professionals.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Talk to our export team
            </Link>
            <Link href="/product" className={styles.secondaryButton}>
              Explore products
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.postsSection}>
        <div className={styles.postsHeader}>
          <p className={styles.sectionLabel}>Latest Articles</p>
          <h2>Fresh perspectives for exporters, buyers, and supply chain leaders.</h2>
        </div>

        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <article key={post.title} className={styles.postCard}>
              <div className={styles.postMeta}>
                <span>{post.category}</span>
                <time>{post.date}</time>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link href="/blog" className={styles.readMore}>
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2>Grow your export business with expert support.</h2>
          <p>
            Our team helps you connect with global buyers, prepare export documentation, and move products safely across borders.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get export advice
          </Link>
        </div>
      </section>
    </main>
  );
}

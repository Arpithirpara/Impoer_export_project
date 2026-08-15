import Link from "next/link";
import Image from "next/image";
import { fraunces, inter } from "../fonts";
import styles from "./blog.module.css";

const posts = [
  {
    id: "blog-1",
    title: "How Eco Export Ensures 100% Quality Certification for Global Markets",
    excerpt:
      "Discover our step-by-step quality grading, lab testing, and international phytosanitary compliance processes for overseas agro shipments.",
    category: "Export Standards",
    date: "Aug 12, 2026",
    readTime: "5 min read",
    image: "/Hero_slider_img/Hero_img_2.png",
  },
  {
    id: "blog-2",
    title: "Navigating Port Logistics: Mundra, Kandla & Pipavav Advantages",
    excerpt:
      "Learn how strategic port proximity in Gujarat reduces container transit times, freight overheads, and logistics bottlenecks for agricultural buyers.",
    category: "Logistics & Supply",
    date: "Aug 04, 2026",
    readTime: "6 min read",
    image: "/Hero_slider_img/Hero_img_1.png",
  },
  {
    id: "blog-3",
    title: "Global Commodity Trends: Rising Demand for Indian Spices & Basmati Rice",
    excerpt:
      "An in-depth analysis of Middle East, Asian, and European market demand for premium long-grain rice, sesame seeds, and ground spices.",
    category: "Market Insights",
    date: "Jul 28, 2026",
    readTime: "4 min read",
    image: "/Hero_slider_img/Hero_img_3.png",
  },
];

export default function BlogPage() {
  return (
    <main className={`${styles.blogPage} ${inter.className}`}>
      {/* Clean Header */}
      <section className={styles.cleanHeader}>
        <div className={styles.container}>
          <div className={styles.tagBadge}>
            <span className={styles.tagDot}></span>
            <span>AGRO EXPORT INSIGHTS</span>
          </div>
          <h1 className={`${styles.headerTitle} ${fraunces.className}`}>
            Latest News & <span className={styles.highlightText}>Export Articles</span>
          </h1>
          <p className={styles.headerSub}>
            Stay informed with market updates, international trade guidelines, and quality assurance standards from the Eco Export team.
          </p>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className={styles.postsSection}>
        <div className={styles.container}>
          <div className={styles.postsGrid}>
            {posts.map((post) => (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.imageWrap}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    quality={95}
                    className={styles.postImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className={styles.categoryBadge}>{post.category}</span>
                </div>

                <div className={styles.postBody}>
                  <div className={styles.postMeta}>
                    <span>📅 {post.date}</span>
                    <span>•</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>

                  <h2 className={`${styles.postTitle} ${fraunces.className}`}>
                    {post.title}
                  </h2>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>

                  <Link href="/contact" className={styles.readMoreBtn}>
                    Read Article & Inquire →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaLeft}>
              <span className={styles.ctaBadge}>🌿 NEED AGRO COMMODITY ADVICE?</span>
              <h2 className={`${styles.ctaTitle} ${fraunces.className}`}>
                Partner with India's Trusted Agro Export Specialist
              </h2>
              <p className={styles.ctaDesc}>
                Whether you need bulk container pricing, lab analysis certificates, or custom packaging options, our export team is here to assist.
              </p>
            </div>
            <div className={styles.ctaRight}>
              <Link href="/contact" className={styles.ctaBtn}>
                Get Export Advice 🚀
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

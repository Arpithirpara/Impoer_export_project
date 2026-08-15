import Image from "next/image";
import { fraunces, inter } from "../fonts";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={inter.className}>
      {/* Main Content Section */}

      {/* Main Content Section (Text Left + Right Showcase Image) */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            {/* Left Content Column */}
            <div className={styles.leftCol}>
              <div className={styles.tagBadge}>
                <span className={styles.tagDot}></span>
                <span>ABOUT OUR COMPANY</span>
              </div>
              <h2 className={`${styles.heading} ${fraunces.className}`}>
                Why <span className={styles.highlightText}>Eco Export?</span>
              </h2>

              <p className={styles.paragraph}>
                Based in India, we handle the entire production process right from growing the produce to processing and packaging it for overseas markets. This ensures that our products meet the most stringent quality standards.
              </p>

              <p className={styles.paragraph}>
                We have a team of qualified professionals who are experts in their domain. They have been taught to follow the best industry practices and hygiene, this is followed meticulously. Their work complements each other and this brings in high levels of productivity.
              </p>

              <p className={styles.paragraph}>
                At Eco Export, we give you the assurance of high quality products, competitive pricing and excellent warehousing. We promise timely delivery as we have a wide distribution network and strong logistic support.
              </p>

              {/* Location Advantage Box */}
              <div className={styles.locationCard}>
                <div className={styles.locationIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className={styles.locationContent}>
                  <h3 className={`${styles.locationTitle} ${fraunces.className}`}>
                    Location Advantage
                  </h3>
                  <p className={styles.locationDesc}>
                    We enjoy proximity to <strong>Mundra, Kandla and Pipavav ports</strong> as we are located in Ahmedabad. This ensures that our products like Durum Wheat Semolina, Wheat, Millet, Maize, Rice can be quickly shipped to their destinations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className={styles.rightCol}>
              <div className={styles.imageWrapper}>
                <div className={styles.mainImageContainer}>
                  <Image
                    src="/Hero_slider_img/Hero_img_2.png"
                    alt="Eco Export Agro Commodity Processing & Overseas Shipping"
                    fill
                    quality={95}
                    className={styles.showcaseImage}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  <div className={styles.imageOverlayGradient}></div>
                </div>

                {/* Floating Port Access Badge */}
                <div className={styles.floatingPortBadge}>
                  <div className={styles.badgeIcon}>⚓</div>
                  <div>
                    <h4 className={fraunces.className}>Strategic Port Access</h4>
                    <p>Mundra • Kandla • Pipavav</p>
                  </div>
                </div>

                {/* Floating Quality Badge */}
                <div className={styles.floatingQualityBadge}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>100% Stringent Quality Checked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className={styles.vmSection}>
        <div className={styles.container}>
          <div className={styles.vmHeader}>
            <h2 className={`${styles.vmMainTitle} ${fraunces.className}`}>
              Our <span className={styles.highlightText}>Vision & Mission</span>
            </h2>
            <p className={styles.vmSub}>Setting the epitome of quality food and business standards in international trade.</p>
          </div>

          <div className={styles.vmGrid}>
            {/* Vision Card */}
            <div className={styles.vmCard}>
              <div className={styles.vmCardHeader}>
                <div className={styles.vmIconWrap}>👁️</div>
                <h3 className={`${styles.vmCardTitle} ${fraunces.className}`}>Our Vision</h3>
              </div>
              <p className={styles.vmCardText}>
                We wish to become one of the leading Agro Commodity & Food Grain exporters from India, a company that sells only quality material. We dream of times when every item we export, is cherished by our clients.
              </p>
            </div>

            {/* Mission Card */}
            <div className={styles.vmCard}>
              <div className={styles.vmCardHeader}>
                <div className={styles.vmIconWrap}>🎯</div>
                <h3 className={`${styles.vmCardTitle} ${fraunces.className}`}>Our Mission</h3>
              </div>
              <p className={styles.vmCardText}>
                <strong>For us quality is the biggest mission.</strong> We wish to export the best & healthy quality of products. At the same time, we are determined to keep the highest standards of business dealings – something that becomes an epitome in quality food in the times to come.
              </p>

              <ul className={styles.missionBullets}>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span>To bring our customers the highest benefits of best quality at reasonable price.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span>To create food innovation through research together with the effective management.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span>To search incessantly for new business opportunities.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span>To seriously implement the corporate social responsibility by serving societies, communities and taking good care of the natural resources and environment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
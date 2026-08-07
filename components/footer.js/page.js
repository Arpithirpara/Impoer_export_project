import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.growthLine}></div>

      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brandCol}>
          <h3 className={styles.brandName}>
            <span className={styles.leaf}>🌿</span> AgriHarvest
          </h3>
          <p className={styles.tagline}>
            Import & Export of Premium Quality Fruits, Vegetables, Grains &
            Spices — connecting farms to markets worldwide.
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}>f</a>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}>ig</a>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>in</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><a href="/about">About Us</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/exhibitions">Exhibitions</a></li>
            <li><a href="/countries">Countries We Serve</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Product Categories</h4>
          <ul className={styles.linkList}>
            <li><a href="/product?category=Tea">Tea</a></li>
            <li><a href="/product?category=Coffee">Coffee</a></li>
            <li><a href="/product?category=Rice">Rice</a></li>
            <li><a href="/product?category=Grains%20%26%20Cereals">Grains & Cereals</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Get in Touch</h4>
          <ul className={styles.contactList}>
            <li>Ahmedabad, Gujarat, India</li>
            <li>+91 98765 43210</li>
            <li>info@agriharvest.com</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} AgriHarvest. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

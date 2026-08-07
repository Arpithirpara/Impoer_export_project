import Image from "next/image";
import styles from "./exhibition.module.css";

const exhibitions = [
  {
    title: "India Global Agri Expo",
    location: "Ahmedabad, India",
    date: "Sep 18 - 21, 2026",
    category: "Agriculture & Trade",
    image: "/mainsecton_img/image.png",
    flag: "🇮🇳",
  },
  {
    title: "Dubai Trade Harvest",
    location: "Dubai, UAE",
    date: "Oct 5 - 8, 2026",
    category: "Export & Logistics",
    image: "/mainsecton_img/import_export_banner.png",
    flag: "🇦🇪",
  },
  {
    title: "Frankfurt Agri Connect",
    location: "Frankfurt, Germany",
    date: "Nov 12 - 15, 2026",
    category: "Global Sourcing",
    image: "/mainsecton_img/image.png",
    flag: "🇩🇪",
  },
  {
    title: "Singapore Agro Summit",
    location: "Singapore",
    date: "Dec 4 - 7, 2026",
    category: "Innovation & Trade",
    image: "/mainsecton_img/import_export_banner.png",
    flag: "🇸🇬",
  },
  {
    title: "USA Agri Expo",
    location: "New York, USA",
    date: "Jan 20 - 23, 2027",
    category: "International Buyers",
    image: "/mainsecton_img/image.png",
    flag: "🇺🇸",
  },
];

const galleryImages = [
  "/mainsecton_img/import_export_banner.png",
  "/mainsecton_img/image.png",
  "/mainsecton_img/import_export_banner.png",
  "/mainsecton_img/image.png",
];

const testimonials = [
  {
    name: "Anjali Patel",
    role: "Founder, SpiceRoots",
    review:
      "The exhibition helped me connect with buyers from Europe and the Middle East. The entire event felt premium and well curated.",
  },
  {
    name: "Vikram Sharma",
    role: "Export Head, GreenGrain",
    review:
      "Exceptional networking opportunities across India and international markets. The registration flow was smooth and the venue experience was outstanding.",
  },
  {
    name: "Lisa Chen",
    role: "Procurement Director, Global Foods",
    review:
      "I found new business partners and high-quality agricultural suppliers. The events are perfect for serious exporters.",
  },
];

export default function ExhibitionPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>India & International Exhibitions</span>
          <h1>Global Agriculture Exhibitions & Trade Events</h1>
          <p>
            Showcase rice, wheat, spices, tea, coffee, fruits and vegetables across premium trade fairs in India and worldwide.
          </p>
          <div className={styles.heroActions}>
            <a href="/contact" className={styles.primaryButton}>
              Register Now
            </a>
            <a href="#events" className={styles.secondaryButton}>
              Explore Events
            </a>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageCard}>
            <Image
              src="/mainsecton_img/import_export_banner.png"
              alt="Trade exhibition with global logistics imagery"
              fill
              className={styles.heroImage}
            />
            <div className={styles.heroGlow}></div>
          </div>
        </div>
      </section>

      <section className={styles.events} id="events">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Upcoming Exhibitions</p>
          <h2>India to international markets — events designed for agricultural exporters.</h2>
        </div>
        <div className={styles.eventGrid}>
          {exhibitions.map((event) => (
            <article key={event.title} className={styles.eventCard}>
              <div className={styles.eventMedia}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className={styles.eventImage}
                />
              </div>
              <div className={styles.eventBody}>
                <div className={styles.eventMetaTop}>
                  <span className={styles.flag}>{event.flag}</span>
                  <span className={styles.eventCategory}>{event.category}</span>
                </div>
                <h3>{event.title}</h3>
                <p className={styles.eventLocation}>{event.location}</p>
                <p className={styles.eventDate}>{event.date}</p>
                <a href="/contact" className={styles.eventLink}>
                  Enquire Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.mapHeader}>
          <p className={styles.sectionLabel}>World Map</p>
          <h2>Exhibition connections from India to Dubai, Europe, Singapore and USA.</h2>
        </div>
        <div className={styles.mapCard}>
          <Image
            src="/mainsecton_img/image.png"
            alt="World map with connection lines"
            fill
            className={styles.mapImage}
          />
          <div className={styles.mapOverlay} />
        </div>
      </section>

      <section className={styles.gallery}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Gallery</p>
          <h2>Top exhibition halls, business meetings and product presentations.</h2>
        </div>
        <div className={styles.galleryGrid}>
          {galleryImages.map((src, index) => (
            <div key={index} className={styles.galleryCard}>
              <Image src={src} alt={`Gallery ${index + 1}`} fill className={styles.galleryImg} />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>50+</span>
            <p>Countries</p>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>200+</span>
            <p>Exhibitions</p>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>1000+</span>
            <p>Business Partners</p>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>24/7</span>
            <p>Support</p>
          </div>
        </div>
      </section>

      <section className={styles.whyAttend}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Why Attend</p>
          <h2>Build global relationships and scale your agriculture business.</h2>
        </div>
        <div className={styles.whyGrid}>
          {[
            "Global networking",
            "New business opportunities",
            "International buyers",
            "Product showcase",
            "Trusted partnerships",
          ].map((item) => (
            <div key={item} className={styles.whyCard}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Testimonials</p>
          <h2>What our event participants say.</h2>
        </div>
        <div className={styles.testimonialGrid}>
          {testimonials.map((item) => (
            <div key={item.name} className={styles.testimonialCard}>
              <div className={styles.testimonialBody}>
                <p>“{item.review}”</p>
              </div>
              <div className={styles.testimonialFooter}>
                <div className={styles.avatar}>{item.name.charAt(0)}</div>
                <div>
                  <p className={styles.testimonialName}>{item.name}</p>
                  <p className={styles.testimonialRole}>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.contactHeader}>
          <p className={styles.sectionLabel}>Contact</p>
          <h2>Register for your next exhibition opportunity.</h2>
        </div>
        <div className={styles.contactPanel}>
          <form className={styles.contactForm}>
            <div className={styles.formGrid}>
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Company Name
                <input type="text" placeholder="Company" />
              </label>
              <label>
                Email
                <input type="email" placeholder="Email address" />
              </label>
              <label>
                Phone Number
                <input type="tel" placeholder="Phone number" />
              </label>
              <label>
                Country
                <select>
                  <option>India</option>
                  <option>UAE</option>
                  <option>Germany</option>
                  <option>Singapore</option>
                  <option>USA</option>
                </select>
              </label>
              <label className={styles.fullWidth}>
                Message
                <textarea placeholder="Tell us about your participation needs" />
              </label>
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit Registration
            </button>
          </form>

          <div className={styles.contactVisual}>
            <Image
              src="/mainsecton_img/import_export_banner.png"
              alt="Exhibition registration image"
              fill
              className={styles.contactImage}
            />
            <div className={styles.contactVisualOverlay} />
            <div className={styles.contactVisualLabel}>
              <h3>Exhibition Enquiries</h3>
              <p>Talk to our event team and secure your premium booth today.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

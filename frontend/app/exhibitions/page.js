"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fraunces, inter } from "../fonts";
import styles from "./exhibition.module.css";

const exhibitions = [
  // India Events
  {
    id: "indus-food-india",
    title: "Indus Food India Expo 2026",
    location: "Greater Noida, NCR, India",
    region: "India",
    date: "Jan 12 - 15, 2026",
    stall: "Hall 5, Stall A-24",
    flag: "🇮🇳",
    category: "Food Grain & Agro",
    image: "/Hero_slider_img/Hero_img_1.png",
    description: "Showcasing Eco Export's premium Basmati Rice, Wheat, Pulses & Spices to international buyers.",
  },
  {
    id: "agrotech-india",
    title: "AgroTech India International",
    location: "Chandigarh, India",
    region: "India",
    date: "Mar 10 - 13, 2026",
    stall: "Hall 2, Stall C-08",
    flag: "🇮🇳",
    category: "Agro Commodities",
    image: "/Hero_slider_img/Hero_img_2.png",
    description: "Exhibiting high-protein Animal Feed, Oil Seeds, and Milling Grains direct from Indian growers.",
  },
  {
    id: "kisan-agro-expo",
    title: "National Kisan Agro Summit",
    location: "Pune, Maharashtra, India",
    region: "India",
    date: "Dec 05 - 08, 2026",
    stall: "Pavilion 3, Stall D-15",
    flag: "🇮🇳",
    category: "Farmer & Exporter Trade",
    image: "/Hero_slider_img/Hero_img_3.png",
    description: "Connecting local farming cooperatives with Eco Export's global distribution network.",
  },

  // Out of India (International Events)
  {
    id: "gulfood-dubai",
    title: "Gulfood Dubai 2026",
    location: "Dubai World Trade Centre, UAE",
    region: "Out of India",
    date: "Feb 17 - 21, 2026",
    stall: "Za'abeel Hall 6, Booth Z6-E12",
    flag: "🇦🇪",
    category: "Global Food & Beverage",
    image: "/Hero_slider_img/Hero_img_2.png",
    description: "The Middle East's largest food trade fair featuring Eco Export's full agricultural portfolio.",
  },
  {
    id: "foodex-japan",
    title: "Foodex Japan International",
    location: "Tokyo, Japan",
    region: "Out of India",
    date: "Apr 07 - 10, 2026",
    stall: "Hall 3, Booth 3B-40",
    flag: "🇯🇵",
    category: "Asian Trade Fair",
    image: "/Hero_slider_img/Hero_img_3.png",
    description: "Presenting organic spices, specialty rice varieties, and sesame oil seeds to Asian importers.",
  },
  {
    id: "anuga-germany",
    title: "Anuga Food Fair Germany",
    location: "Cologne, Germany",
    region: "Out of India",
    date: "Oct 10 - 14, 2026",
    stall: "Hall 11.2, Stand B-050",
    flag: "🇩🇪",
    category: "European Trade Summit",
    image: "/Hero_slider_img/Hero_img_1.png",
    description: "Connecting with European buyers for certified non-GMO grains, tea, coffee and animal feed.",
  },
];

export default function ExhibitionPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    exhibition: "Gulfood Dubai 2026 (UAE)",
    productInterest: "All Agro Products",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredEvents =
    activeTab === "All"
      ? exhibitions
      : exhibitions.filter((e) => e.region === activeTab);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className={inter.className}>
      {/* Clean Text Header (No Banner Image) */}
      <section style={{ background: "#F8FAFC", padding: "48px 24px 32px", textAlign: "center", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F0FDF4", border: "1px solid #BBF7D0", padding: "6px 14px", borderRadius: 999, fontSize: "0.78rem", fontWeight: 800, color: "#16A34A", letterSpacing: "0.08em", marginBottom: 12 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#16A34A" }}></span>
            <span>ECO EXPORT GLOBAL EVENTS</span>
          </div>
          <h1 className={fraunces.className} style={{ fontSize: "2.4rem", fontWeight: 800, color: "#0B192C", margin: "0 0 10px" }}>Trade Exhibitions & Expo Schedule</h1>
          <p style={{ color: "#64748B", fontSize: "1.05rem", maxWidth: 700, margin: "0 auto" }}>
            Meet the Eco Export team live at major agricultural summits across <strong>India & Overseas International Fairs</strong>.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <span className={`${styles.statNum} ${fraunces.className}`}>25+</span>
              <span className={styles.statLabel}>Exhibitions Attended</span>
            </div>
            <div className={styles.statBox}>
              <span className={`${styles.statNum} ${fraunces.className}`}>15+</span>
              <span className={styles.statLabel}>Countries Represented</span>
            </div>
            <div className={styles.statBox}>
              <span className={`${styles.statNum} ${fraunces.className}`}>5000+</span>
              <span className={styles.statLabel}>Global Buyer Meetings</span>
            </div>
            <div className={styles.statBox}>
              <span className={`${styles.statNum} ${fraunces.className}`}>100%</span>
              <span className={styles.statLabel}>Certified Quality Produce</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Exhibitions Grid Section */}
      <section className={styles.eventsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.tagBadge}>
              <span className={styles.tagDot}></span>
              <span>WHERE TO FIND US</span>
            </div>
            <h2 className={`${styles.heading} ${fraunces.className}`}>
              Eco Export <span className={styles.highlightText}>Exhibition Schedule</span>
            </h2>
            <p className={styles.subHeading}>
              We regularly participate in premier food grain and agricultural trade expos in India and worldwide.
            </p>
          </div>

          {/* Filter Tabs (All, India, Out of India) */}
          <div className={styles.filterTabs}>
            {["All", "India", "Out of India"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ""}`}
              >
                {tab === "All" && "🌐 All Events"}
                {tab === "India" && "🇮🇳 India Exhibitions"}
                {tab === "Out of India" && "✈️ Out of India (International)"}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className={styles.eventsGrid}>
            {filteredEvents.map((event) => (
              <div key={event.id} className={styles.eventCard}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className={styles.cardImg}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.regionTag}>
                    <span>{event.flag}</span> {event.region}
                  </div>
                  <div className={styles.categoryBadge}>{event.category}</div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={`${styles.eventTitle} ${fraunces.className}`}>{event.title}</h3>
                  <div className={styles.infoRow}>
                    <span className={styles.infoIcon}>📍</span>
                    <span>{event.location}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoIcon}>📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className={styles.stallBox}>
                    <span className={styles.stallLabel}>BOOTH / STALL:</span>
                    <strong className={styles.stallVal}>{event.stall}</strong>
                  </div>

                  <p className={styles.eventDesc}>{event.description}</p>

                  <a href="#inquiryForm" className={styles.cardCta}>
                    Book Stall Meeting →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Inquiry & Meeting Form Section */}
      <section className={styles.formSection} id="inquiryForm">
        <div className={styles.container}>
          <div className={styles.formGrid}>
            {/* Left Form */}
            <div className={styles.formCard}>
              <div className={styles.tagBadge}>
                <span className={styles.tagDot}></span>
                <span>SCHEDULE A MEETING</span>
              </div>
              <h2 className={`${styles.formTitle} ${fraunces.className}`}>
                Meet Eco Export at <span className={styles.highlightText}>Our Next Expo</span>
              </h2>
              <p className={styles.formDesc}>
                Fill out the form below to reserve an exclusive one-on-one meeting with our export directors at any upcoming exhibition.
              </p>

              {submitted && (
                <div className={styles.successAlert}>
                  ✓ Thank you! Your exhibition meeting request has been submitted. Our team will contact you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.actualForm}>
                <div className={styles.inputRow}>
                  <div className={styles.fieldGroup}>
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma / John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label>Company Name & Country *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Commodities, UAE"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.inputRow}>
                  <div className={styles.fieldGroup}>
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label>Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.inputRow}>
                  <div className={styles.fieldGroup}>
                    <label>Select Exhibition *</label>
                    <select
                      value={formData.exhibition}
                      onChange={(e) => setFormData({ ...formData, exhibition: e.target.value })}
                    >
                      <option>Gulfood Dubai 2026 (UAE)</option>
                      <option>Indus Food India Expo 2026 (India)</option>
                      <option>Foodex Japan 2026 (Japan)</option>
                      <option>AgroTech India International (India)</option>
                      <option>Anuga Food Fair Germany (Germany)</option>
                      <option>General International Exhibition Inquiry</option>
                    </select>
                  </div>
                  <div className={styles.fieldGroup}>
                    <label>Commodity of Interest</label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    >
                      <option>All Agro Products</option>
                      <option>Spices & Seasonings</option>
                      <option>Basmati & Non-Basmati Rice</option>
                      <option>Grains & Wheat</option>
                      <option>Flour & Agro Meals</option>
                      <option>Oil Seeds</option>
                      <option>Animal & Cattle Feed</option>
                    </select>
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label>Message / Specific Requirement</label>
                  <textarea
                    rows={4}
                    placeholder="Let us know your meeting preferences, expected order volume, or visit schedule..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Submit Exhibition Meeting Request 🚀
                </button>
              </form>
            </div>

            {/* Right Visual Card */}
            <div className={styles.rightInfoCard}>
              <div className={styles.infoBoxWrapper}>
                <div className={styles.badgeFloating}>
                  <span>🤝</span> EXCLUSIVE STALL MEETINGS
                </div>
                <h3 className={`${styles.rightTitle} ${fraunces.className}`}>
                  Direct Connection with Eco Export Leadership
                </h3>
                <p className={styles.rightText}>
                  Whether you are visiting us at major expos in <strong>India or Internationally (Dubai, Germany, Japan, Singapore)</strong>, our export management team will be ready with product samples, lab test certifications, and container pricing.
                </p>

                <div className={styles.contactList}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📧</span>
                    <div>
                      <strong>Exhibition Desk Email:</strong>
                      <p>info@ecoexport.in / export@ecoexport.in</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📞</span>
                    <div>
                      <strong>Direct WhatsApp / Call:</strong>
                      <p>+91 98765 43210 / +91 79 1234 5678</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📍</span>
                    <div>
                      <strong>Head Office:</strong>
                      <p>Ahmedabad, Gujarat, India (Near Mundra & Kandla Ports)</p>
                    </div>
                  </div>
                </div>

                <div className={styles.bannerBadgeBox}>
                  <span className={styles.sparkle}>✨</span>
                  <span>Free Product Samples Available at Our Stalls!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

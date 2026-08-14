"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";
import { QrCode, X, ExternalLink, Download, Printer, Send, AlertCircle } from "lucide-react";
import styles from "./exhibition.module.css";

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
    status: "Active",
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
    status: "Active",
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
    status: "Active",
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
    status: "Active",
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
    status: "Active",
  },
  {
    id: "sial-paris",
    title: "SIAL Paris Food Expo",
    location: "Paris Nord Villepinte, France",
    region: "Out of India",
    date: "Oct 18 - 22, 2026",
    stall: "Hall 5A, Stand E-092",
    flag: "🇫🇷",
    category: "European Trade Summit",
    image: "/Hero_slider_img/Hero_img_3.png",
    description: "Global agro trade summit featuring grain export lines and custom packaging solutions.",
    status: "Closed",
  },
];

export default function ExhibitionPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeQrModal, setActiveQrModal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const filteredEvents =
    activeTab === "All"
      ? exhibitions
      : exhibitions.filter((e) => e.region === activeTab);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is compulsory";
    if (!formData.company.trim()) newErrors.company = "Company Name is compulsory";
    if (!formData.country.trim()) newErrors.country = "Country is compulsory";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone/WhatsApp is compulsory";
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = "Min 7 digits required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is compulsory";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      setErrorMessage("⚠️ Please complete all compulsory fields before submitting.");
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setErrors({});
    }, 5000);
  };

  const getQrUrl = (id) => {
    const publicUrl = `http://localhost:3001/exhibition/${id}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(publicUrl)}`;
  };

  return (
    <main className={inter.className}>
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
              We regularly participate in premier food grain and agricultural trade expos in India and worldwide. Scan QR Code or submit inquiry online.
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

                  {/* Dual Action Buttons: Submit Inquiry + Scan QR Code */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
                    <Link
                      href={`/exhibition/${event.id}`}
                      className={styles.cardCta}
                      style={{ textDecoration: "none", textAlign: "center", display: "block" }}
                    >
                      Submit Inquiry (Online Form) →
                    </Link>

                    <button
                      type="button"
                      onClick={() => setActiveQrModal(event)}
                      style={{
                        padding: "10px",
                        background: "#f1f5f9",
                        color: "#000000",
                        border: "1.5px solid #cbd5e1",
                        borderRadius: "10px",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                      }}
                    >
                      <QrCode size={16} />
                      <span>Scan Stall Mobile QR Code</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QR CODE POPUP MODAL FOR VISITORS */}
      {activeQrModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(6px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "440px",
              background: "#ffffff",
              borderRadius: "24px",
              padding: "32px 24px",
              position: "relative",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
              textAlign: "center",
              border: "3px solid #143528",
            }}
          >
            <button
              onClick={() => setActiveQrModal(null)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "#f1f5f9",
                border: "none",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#000000",
              }}
            >
              <X size={20} />
            </button>

            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#143528", margin: "0 0 4px", fontFamily: "Georgia, serif" }}>
              Scan Mobile QR Code
            </h2>
            <p style={{ fontSize: "0.85rem", color: "#64748b", margin: "0 0 20px" }}>
              {activeQrModal.flag} {activeQrModal.title} • {activeQrModal.stall}
            </p>

            {/* Generated Unique QR Code */}
            <div
              style={{
                width: "220px",
                height: "220px",
                margin: "0 auto 16px",
                padding: "14px",
                background: "#ffffff",
                border: "2.5px solid #000000",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={getQrUrl(activeQrModal.id)}
                alt={`QR Code for ${activeQrModal.title}`}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>

            <p style={{ fontSize: "0.82rem", color: "#334155", margin: "0 0 20px", lineHeight: 1.5 }}>
              Scan with your smartphone camera to open the official Eco Export Stall Visitor Form directly!
            </p>

            <Link
              href={`/exhibition/${activeQrModal.id}`}
              style={{
                display: "block",
                padding: "12px",
                background: "#143528",
                color: "#ffffff",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              Open Form Direct On Web →
            </Link>
          </div>
        </div>
      )}

      {/* Clean Visitor Contact Form Section */}
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
                Connect With <span className={styles.highlightText}>Eco Export</span>
              </h2>
              <p className={styles.formDesc}>
                Fill out your contact details below and our export management team will reach out to you immediately.
              </p>

              {submitted && (
                <div className={styles.successAlert}>
                  ✓ Thank you! Your contact inquiry has been submitted. Our team will reach out shortly.
                </div>
              )}

              {errorMessage && (
                <div style={{ background: "#fef2f2", border: "1.5px solid #ef4444", borderRadius: "12px", padding: "12px 14px", color: "#dc2626", fontSize: "0.85rem", fontWeight: 700, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className={styles.actualForm}>
                <div className={styles.inputRow}>
                  <div className={styles.fieldGroup}>
                    <label>Full Name <span style={{ color: "#ef4444" }}>*</span></label>
                    <input
                      type="text"
                      placeholder="e.g. Ahmed Al-Hashimi / John Smith"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      style={{ border: errors.name ? "2px solid #ef4444" : undefined }}
                    />
                    {errors.name && <span style={{ fontSize: "0.75rem", color: "#ef4444", fontWeight: 700, marginTop: 4, display: "block" }}>{errors.name}</span>}
                  </div>
                  <div className={styles.fieldGroup}>
                    <label>Company Name <span style={{ color: "#ef4444" }}>*</span></label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Commodities"
                      value={formData.company}
                      onChange={(e) => {
                        setFormData({ ...formData, company: e.target.value });
                        if (errors.company) setErrors({ ...errors, company: "" });
                      }}
                      style={{ border: errors.company ? "2px solid #ef4444" : undefined }}
                    />
                    {errors.company && <span style={{ fontSize: "0.75rem", color: "#ef4444", fontWeight: 700, marginTop: 4, display: "block" }}>{errors.company}</span>}
                  </div>
                </div>

                <div className={styles.inputRow}>
                  <div className={styles.fieldGroup}>
                    <label>Country / City <span style={{ color: "#ef4444" }}>*</span></label>
                    <input
                      type="text"
                      placeholder="e.g. Dubai, UAE"
                      value={formData.country}
                      onChange={(e) => {
                        setFormData({ ...formData, country: e.target.value });
                        if (errors.country) setErrors({ ...errors, country: "" });
                      }}
                      style={{ border: errors.country ? "2px solid #ef4444" : undefined }}
                    />
                    {errors.country && <span style={{ fontSize: "0.75rem", color: "#ef4444", fontWeight: 700, marginTop: 4, display: "block" }}>{errors.country}</span>}
                  </div>
                  <div className={styles.fieldGroup}>
                    <label>Phone / WhatsApp <span style={{ color: "#ef4444" }}>*</span></label>
                    <input
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                      }}
                      style={{ border: errors.phone ? "2px solid #ef4444" : undefined }}
                    />
                    {errors.phone && <span style={{ fontSize: "0.75rem", color: "#ef4444", fontWeight: 700, marginTop: 4, display: "block" }}>{errors.phone}</span>}
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label>Email Address <span style={{ color: "#ef4444" }}>*</span></label>
                  <input
                    type="email"
                    placeholder="buyer@domain.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    style={{ border: errors.email ? "2px solid #ef4444" : undefined }}
                  />
                  {errors.email && <span style={{ fontSize: "0.75rem", color: "#ef4444", fontWeight: 700, marginTop: 4, display: "block" }}>{errors.email}</span>}
                </div>

                <div className={styles.fieldGroup}>
                  <label>Message / Inquiry Details (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Mention target commodities, order requirements, or notes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Right Visual Card */}
            <div className={styles.rightInfoCard}>
              <div className={styles.infoBoxWrapper}>
                <div className={styles.badgeFloating}>
                  <span>🤝</span> DIRECT EXPORT CONNECTION
                </div>
                <h3 className={`${styles.rightTitle} ${fraunces.className}`}>
                  Direct Connection with Eco Export Leadership
                </h3>
                <p className={styles.rightText}>
                  Whether you are visiting us at major expos in <strong>India or Overseas (Dubai, Germany, Japan, France)</strong>, our export management team will be ready with product samples, lab test certifications, and container pricing.
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

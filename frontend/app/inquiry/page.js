"use client";

import { useState } from "react";
import { fraunces, inter } from "../fonts";
import styles from "./inquiry.module.css";

const products = [
  "Assam Black Tea",
  "Green Tea Leaves",
  "Arabica Coffee Beans",
  "Robusta Coffee Beans",
  "Instant Coffee Powder",
  "Basmati Rice",
  "Non-Basmati Long Grain",
  "Parboiled Rice",
  "Red Lentils (Masoor)",
  "Chickpeas (Kabuli Chana)",
  "Green Moong Beans",
  "Wheat",
  "Barley",
  "Millets (Bajra)",
  "Other / Not Listed",
];

export default function InquiryPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO: wire up to your API route / email service
    await new Promise((res) => setTimeout(res, 900));

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className={`${inter.className} ${styles.main}`}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={fraunces.className}>Inquiry Sent</h2>
          <p>
            Thank you, {form.name.split(" ")[0] || "there"}. Our export team
            will get back to you within 24 hours.
          </p>
          <a href="/" className={styles.homeLink}>
            Back to Home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className={inter.className}>
      <section className={styles.header}>
        <h1 className={fraunces.className}>Send an Inquiry</h1>
        <p>
          Tell us what you're looking for and our team will send you a
          quote and specification sheet within 24 hours.
        </p>
      </section>

      <section className={styles.formSection}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Carter"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="phone">Phone / WhatsApp</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 234 567 8901"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="country">Country *</label>
              <input
                id="country"
                name="country"
                type="text"
                required
                value={form.country}
                onChange={handleChange}
                placeholder="United States"
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="product">Product of Interest *</label>
              <select
                id="product"
                name="product"
                required
                value={form.product}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a product
                </option>
                {products.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="quantity">Estimated Quantity</label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                value={form.quantity}
                onChange={handleChange}
                placeholder="e.g. 20 MT / month"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us more about your requirements, destination port, packaging, or timeline..."
            />
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>

        <aside className={styles.sideInfo}>
          <h3 className={fraunces.className}>Why Inquire With Us</h3>
          <ul>
            <li>Response within 24 hours</li>
            <li>Free sample & spec sheet on request</li>
            <li>Export documentation handled end-to-end</li>
            <li>Trusted by buyers in 30+ countries</li>
          </ul>
          <div className={styles.divider} />
          <h3 className={fraunces.className}>Direct Contact</h3>
          <p className={styles.contactLine}>export@yourcompany.com</p>
          <p className={styles.contactLine}>+91 92650 XXXXX</p>
        </aside>
      </section>
    </main>
  );
}
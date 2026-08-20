"use client";

import { useState } from "react";
import { fraunces, inter } from "../fonts";
import styles from "./contact.module.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactClient() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please fill in your name, email and message.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      return "Please enter a valid email address.";
    }
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setErrorMsg(validationError);
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    // UI-only demo: simulates a network delay, no backend call.
    // Connect this to a real API route or email service when ready.
    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
    }, 900);
  }

  return (
    <div className={inter.className}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={fraunces.className}>Get in Touch</h1>
          <p>
            Have a question about bulk orders, sourcing or partnerships?
            Our team typically responds within 24 hours.
          </p>
        </div>
      </section>

      <div className={styles.wrapper}>
        {/* Info cards */}
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>📍</span>
            <h3>Our Office</h3>
            <p>Ahmedabad, Gujarat, India</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>📞</span>
            <h3>Call Us</h3>
            <p>+91 92650 XXXXX</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>✉️</span>
            <h3>Email Us</h3>
            <p>info@agriharvest.com</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>🕐</span>
            <h3>Working Hours</h3>
            <p>Mon – Sat, 9:00 AM – 6:30 PM</p>
          </div>
        </div>

        {/* Form + Map */}
        <div className={styles.contentGrid}>
          <div className={styles.formCard}>
            <h2 className={fraunces.className}>Send Us a Message</h2>
            <p className={styles.formSubtitle}>
              Fill out the form and our team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 92650 XXXXX"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Bulk order inquiry"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement..."
                ></textarea>
              </div>

              {status === "error" && (
                <p className={styles.errorText}>{errorMsg}</p>
              )}
              {status === "success" && (
                <p className={styles.successText}>
                  Your message has been sent. We'll get back to you soon!
                </p>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className={styles.mapWrap}>
            <iframe
              title="AgriHarvest location"
              src="https://www.google.com/maps?q=Ahmedabad,Gujarat,India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
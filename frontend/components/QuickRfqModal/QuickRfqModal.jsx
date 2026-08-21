"use client";

import { useState } from "react";
import { X, Send, CheckCircle2, Globe, Building2, PackageCheck } from "lucide-react";
import styles from "./QuickRfqModal.module.css";

export default function QuickRfqModal({ isOpen, onClose, productName = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    company: "",
    quantity: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modalCard}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className={styles.successState}>
            <CheckCircle2 size={54} className={styles.successIcon} />
            <h2>RFQ Submitted Successfully!</h2>
            <p>
              Thank you for your inquiry regarding <strong>{productName || "Agro Commodities"}</strong>. Our export team will contact you with pricing & shipping details within 12 hours.
            </p>
            <button className={styles.primaryBtn} onClick={handleReset}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div className={styles.headerBox}>
              <span className={styles.badge}>B2B IMPORT RFQ</span>
              <h2>Request Quote: <span className={styles.highlight}>{productName || "Agro Commodity"}</span></h2>
              <p>Direct port dispatch & export-grade packaging specification</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label>Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Business Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label>Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Destination Country *</label>
                  <input
                    type="text"
                    name="country"
                    required
                    placeholder="e.g. UAE, Netherlands, USA"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="e.g. General Trading LLC"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Required Quantity (MT/Containers)</label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder="e.g. 500 Metric Tons / 2x40ft FCL"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Packing & Specific Requirement</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Specify grain size, moisture %, PP bag packaging (25kg/50kg), etc."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? (
                  <span>Submitting RFQ...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Submit B2B Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

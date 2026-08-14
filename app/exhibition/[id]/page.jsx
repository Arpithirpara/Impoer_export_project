"use client";

import { useState, use } from "react";
import Link from "next/link";
import { Sprout, CheckCircle2, Send, AlertTriangle, AlertCircle } from "lucide-react";

export default function PublicExhibitionRegisterPage({ params }) {
  const resolvedParams = use(params);
  const exhId = resolvedParams?.id || "gulfood-dubai";

  // Dynamic Country & Exhibition Registry
  const exhibitionDetails = {
    "gulfood-dubai": { title: "Gulfood Dubai 2026", location: "Dubai World Trade Centre, UAE", flag: "🇦🇪", stallNo: "Za'abeel Hall 6 • Booth Z6-E12", dates: "Feb 17 - Feb 21, 2026", status: "Active" },
    "anuga-germany": { title: "Anuga Food Fair Germany", location: "Koelnmesse, Cologne, Germany", flag: "🇩🇪", stallNo: "Hall 11.2 • Stand B-050", dates: "Oct 10 - Oct 14, 2026", status: "Active" },
    "sial-paris": { title: "SIAL Paris Food Expo", location: "Paris Nord Villepinte, France", flag: "🇫🇷", stallNo: "Hall 5A • Stand E-092", dates: "Oct 18 - Oct 22, 2026", status: "Closed" },
    "foodex-japan": { title: "Foodex Japan International", location: "Tokyo, Japan", flag: "🇯🇵", stallNo: "Hall 3 • Booth 3B-40", dates: "Apr 07 - Apr 10, 2026", status: "Active" },
    "indus-food-india": { title: "Indus Food India Expo 2026", location: "Greater Noida, NCR, India", flag: "🇮🇳", stallNo: "Hall 5 • Stall A-24", dates: "Jan 12 - Jan 15, 2026", status: "Active" },
    "agrotech-india": { title: "AgroTech India International", location: "Chandigarh, India", flag: "🇮🇳", stallNo: "Hall 2 • Stall C-08", dates: "Mar 10 - Mar 13, 2026", status: "Active" },
  }[exhId] || { title: `Trade Exhibition (${exhId})`, location: "International Trade Fair Centre", flag: "🌐", stallNo: "Eco Export Booth", dates: "Active Event", status: "Active" };

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is compulsory";
    if (!formData.company.trim()) newErrors.company = "Company Name is compulsory";
    if (!formData.country.trim()) newErrors.country = "Country is compulsory";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone/WhatsApp is compulsory";
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = "Enter a valid phone number (min 7 digits)";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is compulsory";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address (e.g. name@domain.com)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      setErrorMessage("⚠️ Please fill in all compulsory fields marked with red (*)");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f8fafc 100%)",
        padding: "24px 16px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          margin: "0 auto",
          background: "#ffffff",
          border: "2px solid #143528",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 20px 40px -15px rgba(20, 53, 40, 0.15)",
        }}
      >
        {/* Header Banner */}
        <div style={{ background: "#143528", color: "#ffffff", padding: "26px 20px", textAlign: "center", position: "relative" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "16px",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#143528",
              margin: "0 auto 10px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            }}
          >
            <Sprout size={30} />
          </div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 4px", fontFamily: "Georgia, serif" }}>ECO EXPORT</h1>
          <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#a7f3d0", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "monospace" }}>
            VISITOR CONTACT REGISTRATION
          </span>

          {/* Exhibition Details */}
          <div
            style={{
              marginTop: "16px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "14px",
              padding: "12px 16px",
              textAlign: "left",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
              <span style={{ fontSize: "1.05rem", fontWeight: 800 }}>{exhibitionDetails.flag} {exhibitionDetails.title}</span>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "999px",
                  background: exhibitionDetails.status === "Active" ? "#22c55e" : "#ef4444",
                  color: "#ffffff",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                {exhibitionDetails.status === "Active" ? "LIVE EVENT" : "CLOSED"}
              </span>
            </div>
            <p style={{ margin: "2px 0", fontSize: "0.8rem", color: "#e2eadf" }}>📍 {exhibitionDetails.location}</p>
            <p style={{ margin: "2px 0", fontSize: "0.8rem", color: "#a7f3d0", fontWeight: 700 }}>🎪 {exhibitionDetails.stallNo}</p>
          </div>
        </div>

        {/* Clean Contact Data Form */}
        <div style={{ padding: "24px 20px" }}>
          {exhibitionDetails.status === "Closed" ? (
            <div style={{ textAlign: "center", padding: "30px 10px" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#fef2f2", color: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <AlertTriangle size={32} />
              </div>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#000000", margin: "0 0 8px" }}>Visitor Registration Closed</h2>
              <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "0 0 20px" }}>
                Thank you for visiting Eco Export stall! This exhibition event has finished. Contact us at <strong>info@ecoexport.in</strong>.
              </p>
              <Link href="/" style={{ display: "inline-block", background: "#000000", color: "#ffffff", padding: "12px 24px", borderRadius: "12px", fontWeight: 800, textDecoration: "none", fontSize: "0.88rem" }}>
                Visit Storefront Website
              </Link>
            </div>
          ) : submitted ? (
            <div style={{ textAlign: "center", padding: "24px 10px" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#dcfce7", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                <CheckCircle2 size={36} />
              </div>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#143528", margin: "0 0 8px" }}>Inquiry Submitted!</h2>
              <p style={{ fontSize: "0.88rem", color: "#334155", lineHeight: 1.5, margin: "0 0 20px" }}>
                Thank you for visiting Eco Export stall at <strong>{exhibitionDetails.title}</strong>! Our sales director will connect with you shortly.
              </p>
              <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "14px", padding: "14px", textAlign: "left", fontSize: "0.85rem", color: "#475569" }}>
                <p style={{ margin: "2px 0", fontWeight: 700, color: "#000000" }}>Name: {formData.name}</p>
                <p style={{ margin: "2px 0" }}>Company: {formData.company} ({formData.country})</p>
                <p style={{ margin: "2px 0" }}>Contact: {formData.phone} | {formData.email}</p>
              </div>
              <button
                onClick={() => { setSubmitted(false); setErrors({}); }}
                style={{ marginTop: "20px", background: "#143528", color: "#ffffff", border: "none", padding: "12px 24px", borderRadius: "12px", fontWeight: 800, cursor: "pointer", fontSize: "0.88rem" }}
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Validation Banner Alert */}
              {errorMessage && (
                <div
                  style={{
                    background: "#fef2f2",
                    border: "1.5px solid #ef4444",
                    borderRadius: "12px",
                    padding: "12px 14px",
                    color: "#dc2626",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
                  Your Full Name <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ahmed Al-Hashimi"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    background: "#f8fafc",
                    border: errors.name ? "2px solid #ef4444" : "1.5px solid #cbd5e1",
                    borderRadius: 10,
                    color: "#000000",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                  }}
                />
                {errors.name && <span style={{ fontSize: "0.75rem", color: "#ef4444", fontWeight: 700, marginTop: 4, display: "block" }}>{errors.name}</span>}
              </div>

              {/* Company Name & Country */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
                    Company / Firm <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => {
                      setFormData({ ...formData, company: e.target.value });
                      if (errors.company) setErrors({ ...errors, company: "" });
                    }}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "#f8fafc",
                      border: errors.company ? "2px solid #ef4444" : "1.5px solid #cbd5e1",
                      borderRadius: 10,
                      color: "#000000",
                      fontSize: "0.92rem",
                    }}
                  />
                  {errors.company && <span style={{ fontSize: "0.75rem", color: "#ef4444", fontWeight: 700, marginTop: 4, display: "block" }}>{errors.company}</span>}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
                    Country / City <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dubai, UAE"
                    value={formData.country}
                    onChange={(e) => {
                      setFormData({ ...formData, country: e.target.value });
                      if (errors.country) setErrors({ ...errors, country: "" });
                    }}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "#f8fafc",
                      border: errors.country ? "2px solid #ef4444" : "1.5px solid #cbd5e1",
                      borderRadius: 10,
                      color: "#000000",
                      fontSize: "0.92rem",
                    }}
                  />
                  {errors.country && <span style={{ fontSize: "0.75rem", color: "#ef4444", fontWeight: 700, marginTop: 4, display: "block" }}>{errors.country}</span>}
                </div>
              </div>

              {/* Phone & Email */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
                    Phone / WhatsApp <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "#f8fafc",
                      border: errors.phone ? "2px solid #ef4444" : "1.5px solid #cbd5e1",
                      borderRadius: 10,
                      color: "#000000",
                      fontSize: "0.92rem",
                    }}
                  />
                  {errors.phone && <span style={{ fontSize: "0.75rem", color: "#ef4444", fontWeight: 700, marginTop: 4, display: "block" }}>{errors.phone}</span>}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
                    Email Address <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="buyer@domain.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "#f8fafc",
                      border: errors.email ? "2px solid #ef4444" : "1.5px solid #cbd5e1",
                      borderRadius: 10,
                      color: "#000000",
                      fontSize: "0.92rem",
                    }}
                  />
                  {errors.email && <span style={{ fontSize: "0.75rem", color: "#ef4444", fontWeight: 700, marginTop: 4, display: "block" }}>{errors.email}</span>}
                </div>
              </div>

              {/* Message / Inquiry Notes (Optional) */}
              <div>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
                  Message / Inquiry Details (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention target commodities, order requirements, or notes..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.92rem" }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#143528",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  boxShadow: "0 6px 20px rgba(20, 53, 40, 0.2)",
                  marginTop: "4px",
                }}
              >
                <Send size={18} />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

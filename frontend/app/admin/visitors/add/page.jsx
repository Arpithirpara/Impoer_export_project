"use client";

import { useState } from "react";
import AdminFormLayout from "../../components/AdminFormLayout";

export default function AddVisitorPage() {
  const [formData, setFormData] = useState({
    id: "VIS-1083",
    ip: "185.220.101.99",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    city: "Dubai",
    page: "/products/basmati-rice",
    duration: "5m 20s",
    status: "Active",
  });

  return (
    <AdminFormLayout
      title="Add Manual Visitor Record"
      subtitle="Log a visitor session, IP location, and target product page interest."
      backUrl="/admin/visitors"
      isEdit={false}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Row 1: IP Address & Country */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Visitor IP Address *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 185.220.101.5"
              value={formData.ip}
              onChange={(e) => setFormData({ ...formData, ip: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontFamily: "monospace", fontWeight: 700 }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Country Location *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. United Arab Emirates"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            />
          </div>
        </div>

        {/* Row 2: City & Flag Emoji */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              City / State
            </label>
            <input
              type="text"
              placeholder="e.g. Dubai"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Flag Emoji
            </label>
            <input
              type="text"
              placeholder="e.g. 🇦🇪"
              value={formData.flag}
              onChange={(e) => setFormData({ ...formData, flag: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "1.2rem" }}
            />
          </div>
        </div>

        {/* Row 3: Landed Page & Time Spent */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Landed Product Page
            </label>
            <input
              type="text"
              placeholder="e.g. /products/basmati-rice"
              value={formData.page}
              onChange={(e) => setFormData({ ...formData, page: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontFamily: "monospace" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Session Duration
            </label>
            <input
              type="text"
              placeholder="e.g. 4m 12s"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }}
            />
          </div>
        </div>
      </div>
    </AdminFormLayout>
  );
}

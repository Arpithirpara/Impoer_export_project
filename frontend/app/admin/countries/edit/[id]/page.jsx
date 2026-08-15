"use client";

import { useState, use } from "react";
import AdminFormLayout from "../../../components/AdminFormLayout";

export default function EditCountryPage({ params }) {
  const resolvedParams = use(params);
  const countryId = resolvedParams?.id || "cnt-1";

  const [formData, setFormData] = useState({
    name: "United Arab Emirates (UAE)",
    flag: "🇦🇪",
    region: "Middle East",
    mainCommodity: "Basmati Rice & Spices",
    port: "Jebel Ali Port",
    status: "Active",
  });

  return (
    <AdminFormLayout
      title={`Edit Export Destination (ID: ${countryId})`}
      subtitle="Modify destination country info, commodities, and target seaport."
      backUrl="/admin/countries"
      isEdit={true}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Row 1: Country Name & Flag Emoji */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Country Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Flag Emoji
            </label>
            <input
              type="text"
              value={formData.flag}
              onChange={(e) => setFormData({ ...formData, flag: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "1.2rem" }}
            />
          </div>
        </div>

        {/* Row 2: Region & Status */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Geographic Region
            </label>
            <select
              value={formData.region}
              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            >
              <option value="Middle East">Middle East</option>
              <option value="Southeast Asia">Southeast Asia</option>
              <option value="Europe">Europe</option>
              <option value="North Africa">North Africa</option>
              <option value="Americas">Americas</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            >
              <option value="Active">Active Destination</option>
              <option value="Pending">Pending Setup</option>
            </select>
          </div>
        </div>

        {/* Row 3: Commodity & Port */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Major Export Commodity
            </label>
            <input
              type="text"
              value={formData.mainCommodity}
              onChange={(e) => setFormData({ ...formData, mainCommodity: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Destination Seaport
            </label>
            <input
              type="text"
              value={formData.port}
              onChange={(e) => setFormData({ ...formData, port: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }}
            />
          </div>
        </div>
      </div>
    </AdminFormLayout>
  );
}

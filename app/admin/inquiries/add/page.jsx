"use client";

import { useState } from "react";
import AdminFormLayout from "../../components/AdminFormLayout";

export default function AddInquiryPage() {
  const [formData, setFormData] = useState({
    id: "RFQ-905",
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "Dubai, UAE",
    product: "Durum Wheat Semolina",
    qty: "500 MT",
    status: "Active",
  });

  return (
    <AdminFormLayout
      title="Add New Buyer Inquiry Lead (RFQ)"
      subtitle="Register a new international buyer inquiry or sales lead into the system."
      backUrl="/admin/inquiries"
      isEdit={false}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Row 1: Buyer Name & Company */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Buyer / Contact Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ahmed Al-Mansoori"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Company / Business Firm
            </label>
            <input
              type="text"
              placeholder="e.g. Al-Baraka General Trading"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }}
            />
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="buyer@domain.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Phone / WhatsApp Number
            </label>
            <input
              type="text"
              placeholder="+971 50 123 4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }}
            />
          </div>
        </div>

        {/* Row 3: Product Requested & Quantity */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Requested Commodity
            </label>
            <input
              type="text"
              placeholder="e.g. Non-Basmati Rice"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Target Quantity (Metric Tons)
            </label>
            <input
              type="text"
              placeholder="e.g. 500 MT"
              value={formData.qty}
              onChange={(e) => setFormData({ ...formData, qty: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            />
          </div>
        </div>
      </div>
    </AdminFormLayout>
  );
}

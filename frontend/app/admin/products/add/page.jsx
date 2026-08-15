"use client";

import { useState } from "react";
import Image from "next/image";
import AdminFormLayout from "../../components/AdminFormLayout";
import { UploadCloud, Image as ImageIcon, Check, RefreshCw } from "lucide-react";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    category: "Spices",
    origin: "Gujarat, India",
    image: "/categories_img/Spices_img.png",
    specs: "Export Grade 1 • Moisture < 10%",
    status: "Active",
    description: "",
  });

  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("/categories_img/Spices_img.png");

  const productPresets = [
    { label: "Spices & Seasonings", url: "/categories_img/Spices_img.png" },
    { label: "Durum Wheat Grain", url: "/categories_img/Wheat.jpg" },
    { label: "Basmati Rice 1121", url: "/categories_img/Rice.png" },
    { label: "Natural Sesame Seeds", url: "/categories_img/Oil_Seeds.png" },
    { label: "Chickpeas & Pulses", url: "/categories_img/Pulse.jpg" },
  ];

  const handleFileDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setFormData({ ...formData, image: url });
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setFormData({ ...formData, image: url });
    }
  };

  const selectPreset = (url) => {
    setPreviewUrl(url);
    setFormData({ ...formData, image: url });
  };

  return (
    <AdminFormLayout
      title="Add New Export Product"
      subtitle="Fill in the product specifications, origin, category, and upload main showcase image."
      backUrl="/admin/products"
      isEdit={false}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* SMART FULL-COVERAGE AUTO-FIT DROPZONE */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 8, textTransform: "uppercase", fontFamily: "monospace" }}>
            1. Product Showcase Image (Drag & Drop or Upload) *
          </label>

          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleFileDrop}
            style={{
              position: "relative",
              width: "100%",
              height: "260px",
              borderRadius: "18px",
              border: isDragging ? "2.5px solid #000000" : "2px dashed #94a3b8",
              background: isDragging ? "#f1f5f9" : "#f8fafc",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0,
                cursor: "pointer",
                zIndex: 10,
              }}
            />

            {previewUrl ? (
              <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#0f172a" }}>
                {/* Ambient Blurred Background */}
                <Image
                  src={previewUrl}
                  alt="Backdrop blur"
                  fill
                  style={{ objectFit: "cover", opacity: 0.3, filter: "blur(16px)" }}
                />

                {/* Main Product Image - Contain Mode Handles Vertical & Horizontal Photos */}
                <Image
                  src={previewUrl}
                  alt="Product Showcase Preview"
                  fill
                  style={{ objectFit: "contain", padding: "12px" }}
                />
                
                {/* Overlay Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "rgba(0, 0, 0, 0.8)",
                    backdropFilter: "blur(6px)",
                    color: "#ffffff",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    fontFamily: "monospace",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <ImageIcon size={14} />
                  <span>PRODUCT PREVIEW (VERTICAL & HORIZONTAL FIT)</span>
                </div>

                {/* Replace Button */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "14px",
                    right: "14px",
                    background: "#000000",
                    color: "#ffffff",
                    padding: "8px 16px",
                    borderRadius: "10px",
                    fontSize: "0.82rem",
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
                    pointerEvents: "none",
                  }}
                >
                  <RefreshCw size={14} />
                  <span>Click / Drop To Replace</span>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "#e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000000",
                    margin: "0 auto 12px",
                  }}
                >
                  <UploadCloud size={26} />
                </div>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#000000", margin: "0 0 4px" }}>
                  Drag & Drop Product Image Here
                </h4>
                <p style={{ fontSize: "0.8rem", color: "#64748b", margin: 0 }}>
                  Supports Vertical (Portrait), Horizontal (Landscape) & Square Photos
                </p>
              </div>
            )}
          </div>

          <div style={{ marginTop: 10 }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", fontFamily: "monospace" }}>
              Or Choose Preset Commodity Photo:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
              {productPresets.map((p) => (
                <button
                  key={p.url}
                  type="button"
                  onClick={() => selectPreset(p.url)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    background: previewUrl === p.url ? "#000000" : "#f1f5f9",
                    color: previewUrl === p.url ? "#ffffff" : "#000000",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {previewUrl === p.url && <Check size={12} />}
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Row 1: Name & Category */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              2. Product Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Basmati Rice 1121"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              3. Category Classification *
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            >
              <option value="Spices">Spices & Seasonings</option>
              <option value="Rice">Rice Varieties</option>
              <option value="Grains & Cereals">Grains & Milling Wheat</option>
              <option value="Pulses & Lentils">Pulses & Lentils</option>
              <option value="Tea & Coffee">Tea & Coffee</option>
              <option value="Cattle Feed">Cattle Feed</option>
            </select>
          </div>
        </div>

        {/* Row 2: Origin & Status */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              4. Farm / State Origin
            </label>
            <input
              type="text"
              placeholder="e.g. Gujarat / Rajasthan"
              value={formData.origin}
              onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              5. Publish Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            >
              <option value="Active">Active (Visible on Storefront)</option>
              <option value="Pending">Pending Review</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>

        {/* Row 3: Product Image URL & Specs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Cover Image URL / Path
            </label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => {
                setFormData({ ...formData, image: e.target.value });
                setPreviewUrl(e.target.value);
              }}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Quality Specifications
            </label>
            <input
              type="text"
              value={formData.specs}
              onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }}
            />
          </div>
        </div>

        {/* Row 4: Description */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
            Export Description & Details
          </label>
          <textarea
            rows={4}
            placeholder="Describe produce quality, moisture content, packaging options (Jute/PP bags), and export certification..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }}
          />
        </div>
      </div>
    </AdminFormLayout>
  );
}

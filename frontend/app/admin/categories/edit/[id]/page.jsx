"use client";

import { useState, use } from "react";
import Image from "next/image";
import AdminFormLayout from "../../../components/AdminFormLayout";
import { UploadCloud, Image as ImageIcon, Check, RefreshCw } from "lucide-react";

export default function EditCategoryPage({ params }) {
  const resolvedParams = use(params);
  const catId = resolvedParams?.id || "c1";

  const [formData, setFormData] = useState({
    name: "Spices & Seasonings",
    slug: "spices-seasonings",
    icon: "🌶️",
    image: "/categories_img/Spices_img.png",
    status: "Active",
    description: "Export quality Indian spices including Turmeric, Cumin seeds, Coriander, Black Pepper, and Chilli powder.",
  });

  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("/categories_img/Spices_img.png");

  const categoryPresets = [
    { label: "Spices & Seasonings", url: "/categories_img/Spices_img.png" },
    { label: "Wheat & Milling Grains", url: "/categories_img/Wheat.jpg" },
    { label: "Basmati & Non-Basmati Rice", url: "/categories_img/Rice.png" },
    { label: "Oil Seeds & Sesame", url: "/categories_img/Oil_Seeds.png" },
    { label: "Pulses & Lentils", url: "/categories_img/Pulse.jpg" },
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
      title={`Edit Category (ID: ${catId})`}
      subtitle="Modify category line name, slug, emoji icon, and showcase thumbnail image."
      backUrl="/admin/categories"
      isEdit={true}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* TOP DRAG & DROP CATEGORY IMAGE UPLOADER */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 8, textTransform: "uppercase", fontFamily: "monospace" }}>
            1. Category Showcase Image (Drag & Drop or Upload) *
          </label>

          {/* Category Dropzone Box */}
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleFileDrop}
            style={{
              position: "relative",
              width: "100%",
              height: "200px",
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
              <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f1f5f9" }}>
                <div style={{ position: "relative", width: "220px", height: "150px", borderRadius: "14px", overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", border: "2px solid #ffffff" }}>
                  <Image
                    src={previewUrl}
                    alt="Category Showcase Preview"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                
                {/* Category Badge Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "#000000",
                    color: "#ffffff",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    fontFamily: "monospace",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <ImageIcon size={14} />
                  <span>CATEGORY THUMBNAIL PREVIEW</span>
                </div>

                {/* Replace Button */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    background: "#000000",
                    color: "#ffffff",
                    padding: "8px 14px",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    pointerEvents: "none",
                  }}
                >
                  <RefreshCw size={14} />
                  <span>Replace Photo</span>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "#e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000000",
                    margin: "0 auto 12px",
                  }}
                >
                  <UploadCloud size={24} />
                </div>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#000000", margin: "0 0 4px" }}>
                  Drag & Drop Category Showcase Image
                </h4>
                <p style={{ fontSize: "0.8rem", color: "#64748b", margin: 0 }}>
                  PNG, JPG, WEBP (Recommended: Category Header Thumbnail)
                </p>
              </div>
            )}
          </div>

          {/* Quick Presets */}
          <div style={{ marginTop: 10 }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", fontFamily: "monospace" }}>
              Or Choose Preset Category Image:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
              {categoryPresets.map((c) => (
                <button
                  key={c.url}
                  type="button"
                  onClick={() => selectPreset(c.url)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    background: previewUrl === c.url ? "#000000" : "#f1f5f9",
                    color: previewUrl === c.url ? "#ffffff" : "#000000",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {previewUrl === c.url && <Check size={12} />}
                  <span>{c.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Row 1: Category Name & Slug */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              2. Category Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => {
                const nameVal = e.target.value;
                setFormData({
                  ...formData,
                  name: nameVal,
                  slug: nameVal.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""),
                });
              }}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              3. Category Slug
            </label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontFamily: "monospace" }}
            />
          </div>
        </div>

        {/* Row 2: Icon Emoji & Status */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              4. Icon Emoji / Symbol
            </label>
            <input
              type="text"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "1.1rem" }}
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
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Row 3: Description */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
            Category Overview
          </label>
          <textarea
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }}
          />
        </div>
      </div>
    </AdminFormLayout>
  );
}

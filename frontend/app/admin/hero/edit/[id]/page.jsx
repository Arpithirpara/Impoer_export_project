"use client";

import { useState, use } from "react";
import Image from "next/image";
import AdminFormLayout from "../../../components/AdminFormLayout";
import { UploadCloud, Image as ImageIcon, Check, RefreshCw } from "lucide-react";

export default function EditHeroBannerPage({ params }) {
  const resolvedParams = use(params);
  const slideId = resolvedParams?.id || "s1";

  const [formData, setFormData] = useState({
    title: "Premium Indian Spices & Grains Exporter",
    subtitle: "Leading exporter of Basmati Rice, Sesame Seeds, Wheat & Spices from Mundra Port to Global Destinations.",
    image: "/Hero_slider_img/image copy.png",
    btnText: "Request Export Quote",
    status: "Active",
  });

  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("/Hero_slider_img/image copy.png");

  const presetImages = [
    { label: "Slide #1 (Primary Export Banner)", url: "/Hero_slider_img/image copy.png" },
    { label: "Slide #2 (Mundra Port Ship)", url: "/Hero_slider_img/Hero_img_2.png" },
    { label: "Slide #3 (Agricultural Grain Fields)", url: "/Hero_slider_img/Hero_img_1.png" },
    { label: "Slide #4 (Basmati Rice & Spices)", url: "/Hero_slider_img/Hero_img_3.png" },
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
      title={`Edit Hero Banner Slide (ID: ${slideId})`}
      subtitle="Modify homepage slider banner image, main headline title, and subtitle text."
      backUrl="/admin/hero"
      isEdit={true}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* TOP DRAG & DROP BANNER UPLOADER ZONE */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 8, textTransform: "uppercase", fontFamily: "monospace" }}>
            1. Hero Slider Banner Image (Drag & Drop or Upload) *
          </label>

          {/* Banner Dropzone Container */}
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
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={previewUrl}
                  alt="Hero Banner Preview"
                  fill
                  style={{ objectFit: "cover" }}
                />
                
                {/* Banner Overlay Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "rgba(0, 0, 0, 0.8)",
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
                  }}
                >
                  <ImageIcon size={14} />
                  <span>HERO BANNER LIVE PREVIEW</span>
                </div>

                {/* Change Photo Overlay Button */}
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
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    pointerEvents: "none",
                  }}
                >
                  <RefreshCw size={14} />
                  <span>Click / Drop To Replace Image</span>
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
                  <UploadCloud size={28} />
                </div>
                <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#000000", margin: "0 0 4px" }}>
                  Drag & Drop Hero Banner Image Here
                </h4>
                <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0 }}>
                  Supports PNG, JPG, WEBP (Recommended Banner Size: 1920 x 800 px)
                </p>
              </div>
            )}
          </div>

          {/* Quick Preset Selector Buttons */}
          <div style={{ marginTop: 12 }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", fontFamily: "monospace" }}>
              Or Choose From Preset Export Banners:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
              {presetImages.map((p) => (
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

        {/* 2. Main Headline Title */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
            2. Main Headline Title *
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
          />
        </div>

        {/* 3. Subtitle / Caption */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
            3. Subtitle / Caption Text
          </label>
          <input
            type="text"
            value={formData.subtitle}
            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }}
          />
        </div>

        {/* Row: Image URL & Status */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Banner Image URL / File Path
            </label>
            <input
              type="text"
              required
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
              Publish Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            >
              <option value="Active">Active (Live on Slider)</option>
              <option value="Draft">Draft (Hidden)</option>
            </select>
          </div>
        </div>

      </div>
    </AdminFormLayout>
  );
}

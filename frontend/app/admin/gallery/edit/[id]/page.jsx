"use client";

import { useState, use } from "react";
import Image from "next/image";
import AdminFormLayout from "../../../components/AdminFormLayout";
import { UploadCloud, Image as ImageIcon, Check, RefreshCw } from "lucide-react";

export default function EditGalleryPhotoPage({ params }) {
  const resolvedParams = use(params);
  const photoId = resolvedParams?.id || "g1";

  const [formData, setFormData] = useState({
    title: "Modern Processing & Automated Sorting Plant",
    category: "Processing Facility",
    image: "/home_Page_img/image.png",
    status: "Active",
  });

  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("/home_Page_img/image.png");

  const galleryPresets = [
    { label: "Processing & Sorting Plant", url: "/home_Page_img/image.png" },
    { label: "Grain Silos Warehousing", url: "/categories_img/Wheat.jpg" },
    { label: "Port Dispatch Operations", url: "/Hero_slider_img/Hero_img_2.png" },
    { label: "Quality Control Lab", url: "/categories_img/Spices_img.png" },
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
      title={`Edit Gallery Photo (ID: ${photoId})`}
      subtitle="Update caption details, category tags, and media file path."
      backUrl="/admin/gallery"
      isEdit={true}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* SMART FULL-COVERAGE AUTO-FIT DROPZONE */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 8, textTransform: "uppercase", fontFamily: "monospace" }}>
            1. Gallery Media Photo (Drag & Drop or Upload) *
          </label>

          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleFileDrop}
            style={{
              position: "relative",
              width: "100%",
              height: "280px",
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
                {/* Ambient Blurred Background Layer */}
                <Image
                  src={previewUrl}
                  alt="Backdrop blur"
                  fill
                  style={{ objectFit: "cover", opacity: 0.3, filter: "blur(16px)" }}
                />

                {/* Main Photo (Contain mode handles Vertical, Horizontal & Square photos perfectly) */}
                <Image
                  src={previewUrl}
                  alt="Gallery Photo Preview"
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
                  <span>GALLERY PREVIEW (VERTICAL & HORIZONTAL FIT)</span>
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
                <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#000000", margin: "0 0 4px" }}>
                  Drag & Drop Gallery Photo Here
                </h4>
                <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0 }}>
                  Supports Vertical (Portrait), Horizontal (Landscape) & Square Photos
                </p>
              </div>
            )}
          </div>

          <div style={{ marginTop: 10 }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", fontFamily: "monospace" }}>
              Or Choose Preset Gallery Photo:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
              {galleryPresets.map((g) => (
                <button
                  key={g.url}
                  type="button"
                  onClick={() => selectPreset(g.url)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    background: previewUrl === g.url ? "#000000" : "#f1f5f9",
                    color: previewUrl === g.url ? "#ffffff" : "#000000",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {previewUrl === g.url && <Check size={12} />}
                  <span>{g.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Photo Caption Title */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
            2. Photo Caption / Media Title *
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
          />
        </div>

        {/* Row 2: Category & Status */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              3. Facility Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            >
              <option value="Processing Facility">Processing Facility</option>
              <option value="Storage & Warehousing">Storage & Warehousing</option>
              <option value="Port Operations">Port Operations</option>
              <option value="Quality Assurance">Quality Assurance</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              4. Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            >
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>

      </div>
    </AdminFormLayout>
  );
}

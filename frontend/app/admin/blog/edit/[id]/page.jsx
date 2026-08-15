"use client";

import { useState, use } from "react";
import Image from "next/image";
import AdminFormLayout from "../../../components/AdminFormLayout";
import CKEditor from "../../../components/CKEditor";
import { UploadCloud, Image as ImageIcon, Check, RefreshCw } from "lucide-react";

export default function EditBlogArticlePage({ params }) {
  const resolvedParams = use(params);
  const articleId = resolvedParams?.id || "b1";

  const [formData, setFormData] = useState({
    title: "How Eco Export Ensures 100% Quality Certification for Global Markets",
    category: "Export Standards",
    readTime: "5 min read",
    image: "/Hero_slider_img/Hero_img_2.png",
    status: "Published",
    content: "Eco Export enforces strict laboratory testing for all agro commodities prior to container sealing and port dispatch...",
  });

  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("/Hero_slider_img/Hero_img_2.png");

  const blogPresets = [
    { label: "Mundra Port Logistics", url: "/Hero_slider_img/Hero_img_2.png" },
    { label: "Quality Certification", url: "/Hero_slider_img/Hero_img_1.png" },
    { label: "Global Spices Demand", url: "/Hero_slider_img/Hero_img_3.png" },
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
      title={`Edit Article (ID: ${articleId})`}
      subtitle="Modify article headline, category, image, and body text."
      backUrl="/admin/blog"
      isEdit={true}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* TOP DRAG & DROP COVER IMAGE UPLOADER */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 8, textTransform: "uppercase", fontFamily: "monospace" }}>
            1. Article Cover Image (Drag & Drop or Upload) *
          </label>

          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleFileDrop}
            style={{
              position: "relative",
              width: "100%",
              height: "220px",
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
                <div style={{ position: "relative", width: "260px", height: "160px", borderRadius: "14px", overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", border: "2px solid #ffffff" }}>
                  <Image
                    src={previewUrl}
                    alt="Article Cover Preview"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                
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
                  <span>ARTICLE COVER PREVIEW</span>
                </div>

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
                  <span>Replace Image</span>
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
                  Drag & Drop Article Cover Image
                </h4>
                <p style={{ fontSize: "0.8rem", color: "#64748b", margin: 0 }}>
                  PNG, JPG, WEBP (Recommended: Blog Article Header)
                </p>
              </div>
            )}
          </div>

          <div style={{ marginTop: 10 }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", fontFamily: "monospace" }}>
              Or Choose Preset Article Cover:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
              {blogPresets.map((b) => (
                <button
                  key={b.url}
                  type="button"
                  onClick={() => selectPreset(b.url)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    background: previewUrl === b.url ? "#000000" : "#f1f5f9",
                    color: previewUrl === b.url ? "#ffffff" : "#000000",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {previewUrl === b.url && <Check size={12} />}
                  <span>{b.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Article Headline Title */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
            2. Article Headline Title *
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
              3. Article Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            >
              <option value="Export Standards">Export Standards</option>
              <option value="Logistics & Supply">Logistics & Supply</option>
              <option value="Market Insights">Market Insights</option>
              <option value="Company News">Company News</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              4. Publish Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            >
              <option value="Published">Published (Live)</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>

        {/* Cover Image Path Input */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
            Cover Image Path / URL
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

        {/* Content */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 8, textTransform: "uppercase", fontFamily: "monospace" }}>
            5. Article Body Content (CKEditor Rich Text Editor) *
          </label>
          <CKEditor
            value={formData.content}
            onChange={(data) => setFormData({ ...formData, content: data })}
            placeholder="Write full article body content with rich formatting, headings, and lists..."
          />
        </div>
      </div>
    </AdminFormLayout>
  );
}

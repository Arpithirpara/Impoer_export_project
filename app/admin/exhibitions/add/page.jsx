"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AdminFormLayout from "../../components/AdminFormLayout";
import { UploadCloud, Image as ImageIcon, Check, RefreshCw, QrCode, Download, ExternalLink, Printer } from "lucide-react";

export default function AddExhibitionPage() {
  const [formData, setFormData] = useState({
    title: "",
    country: "India",
    date: "",
    location: "Dubai World Trade Centre, UAE",
    stallNo: "Hall 4 • Stall S-112",
    image: "/Hero_slider_img/Hero_img_1.png",
    status: "Active",
  });

  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("/Hero_slider_img/Hero_img_1.png");

  const exhibitionPresets = [
    { label: "Gulfood Dubai Exhibition", url: "/Hero_slider_img/Hero_img_1.png" },
    { label: "Anuga Food Fair Cologne", url: "/Hero_slider_img/Hero_img_2.png" },
    { label: "SIAL Paris Expo", url: "/Hero_slider_img/Hero_img_3.png" },
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

  const generatedQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    "http://localhost:3001/exhibition/ex1"
  )}`;

  return (
    <AdminFormLayout
      title="Add New Exhibition Event & Generate Stall QR Code"
      subtitle="Configure trade fair details for India or Overseas, upload poster, and auto-generate client registration QR code."
      backUrl="/admin/exhibitions"
      isEdit={false}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* TOP SMART DUAL-LAYER AUTO-FIT UPLOADER */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 8, textTransform: "uppercase", fontFamily: "monospace" }}>
            1. Exhibition Stall / Event Poster Image (Drag & Drop or Upload) *
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
                <Image
                  src={previewUrl}
                  alt="Backdrop blur"
                  fill
                  style={{ objectFit: "cover", opacity: 0.3, filter: "blur(16px)" }}
                />

                <Image
                  src={previewUrl}
                  alt="Exhibition Poster Preview"
                  fill
                  style={{ objectFit: "contain", padding: "12px" }}
                />
                
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
                  <span>EXHIBITION BANNER (AUTO-FIT PREVIEW)</span>
                </div>

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
                  Drag & Drop Exhibition Poster / Stall Image
                </h4>
                <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0 }}>
                  Supports Vertical (Portrait), Horizontal (Landscape) & Square Banners
                </p>
              </div>
            )}
          </div>

          <div style={{ marginTop: 10 }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", fontFamily: "monospace" }}>
              Or Choose Preset Exhibition Poster:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
              {exhibitionPresets.map((ex) => (
                <button
                  key={ex.url}
                  type="button"
                  onClick={() => selectPreset(ex.url)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    background: previewUrl === ex.url ? "#000000" : "#f1f5f9",
                    color: previewUrl === ex.url ? "#ffffff" : "#000000",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {previewUrl === ex.url && <Check size={12} />}
                  <span>{ex.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* STALL QR CODE GENERATOR SECTION */}
        <div style={{ background: "#f8fafc", border: "2px solid #143528", borderRadius: "20px", padding: "24px", display: "grid", gridTemplateColumns: "180px 1fr", gap: "24px", alignItems: "center" }}>
          {/* QR Box */}
          <div style={{ width: "180px", height: "180px", background: "#ffffff", padding: "12px", borderRadius: "16px", border: "2px solid #000000", boxShadow: "0 6px 18px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={generatedQrUrl} alt="Stall QR Code Preview" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>

          {/* QR Details & Action */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#143528", fontWeight: 800, fontSize: "1.1rem", marginBottom: 4 }}>
              <QrCode size={22} />
              <span>Stall Client Registration QR Code</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#475569", margin: "0 0 14px", lineHeight: 1.5 }}>
              Clients visiting your stall in India or Overseas can scan this QR code on their smartphones to open the Eco Export Inquiry Registration Form.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <a
                href={generatedQrUrl}
                target="_blank"
                download="Stall_QR_Code.png"
                style={{ padding: "10px 18px", background: "#143528", color: "#ffffff", borderRadius: 10, fontWeight: 800, fontSize: "0.82rem", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
              >
                <Download size={15} />
                <span>Download QR Code</span>
              </a>

              <button
                type="button"
                onClick={() => window.print()}
                style={{ padding: "10px 18px", background: "#000000", color: "#ffffff", border: "none", borderRadius: 10, fontWeight: 800, fontSize: "0.82rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}
              >
                <Printer size={15} />
                <span>Print Poster</span>
              </button>

              <Link
                href="/exhibition/ex1"
                target="_blank"
                style={{ padding: "10px 18px", background: "#0284c7", color: "#ffffff", borderRadius: 10, fontWeight: 800, fontSize: "0.82rem", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
              >
                <ExternalLink size={15} />
                <span>Test Client Form</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Event Title */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
            2. Exhibition / Event Title *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Gulfood 2026 Dubai"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
          />
        </div>

        {/* Row 2: Event Region & Dates */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              3. Region Scope (India or Overseas)
            </label>
            <select
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            >
              <option value="India">🇮🇳 India Event</option>
              <option value="UAE">🇦🇪 UAE / Middle East</option>
              <option value="Germany">🇩🇪 Germany / Europe</option>
              <option value="France">🇫🇷 France / Europe</option>
              <option value="Singapore">🇸🇬 Singapore / Asia</option>
              <option value="USA">🇺🇸 USA / Americas</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              4. Event Dates
            </label>
            <input
              type="text"
              placeholder="e.g. Feb 17 - Feb 21, 2026"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }}
            />
          </div>
        </div>

        {/* Row 3: Stall No & Registration Status */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              5. Venue Location & Stall No.
            </label>
            <input
              type="text"
              placeholder="e.g. Dubai World Trade Centre • Hall 4 Stall S-112"
              value={formData.stallNo}
              onChange={(e) => setFormData({ ...formData, stallNo: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              6. Client QR Form Registration Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            >
              <option value="Active">Active (Stall QR Registration Open)</option>
              <option value="Closed">Closed (Exhibition Finished)</option>
            </select>
          </div>
        </div>
      </div>
    </AdminFormLayout>
  );
}

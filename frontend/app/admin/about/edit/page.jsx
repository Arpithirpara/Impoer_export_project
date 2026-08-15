"use client";

import { useState } from "react";
import Image from "next/image";
import AdminFormLayout from "../../components/AdminFormLayout";
import CKEditor from "../../components/CKEditor";
import { UploadCloud, Image as ImageIcon, Check, RefreshCw, Anchor, MapPin, Target, Eye } from "lucide-react";

export default function EditAboutPage() {
  const [formData, setFormData] = useState({
    tagline: "ABOUT OUR COMPANY",
    heading: "Why Eco Export?",
    overviewHtml: `<p>Based in India, we handle the entire production process right from growing the produce to processing and packaging it for overseas markets. This ensures that our products meet the most stringent quality standards.</p><p>We have a team of qualified professionals who are experts in their domain. They have been taught to follow the best industry practices and hygiene, this is followed meticulously. Their work complements each other and this brings in high levels of productivity.</p><p>At Eco Export, we give you the assurance of high quality products, competitive pricing and excellent warehousing. We promise timely delivery as we have a wide distribution network and strong logistic support.</p>`,
    locationTitle: "Location Advantage",
    locationDesc: "We enjoy proximity to Mundra, Kandla and Pipavav ports as we are located in Ahmedabad. This ensures that our products like Durum Wheat Semolina, Wheat, Millet, Maize, Rice can be quickly shipped to their destinations.",
    ports: "Mundra • Kandla • Pipavav",
    visionText: "We wish to become one of the leading Agro Commodity & Food Grain exporters from India, a company that sells only quality material. We dream of times when every item we export, is cherished by our clients.",
    missionText: "For us quality is the biggest mission. We wish to export the best & healthy quality of products. At the same time, we are determined to keep the highest standards of business dealings – something that becomes an epitome in quality food in the times to come.",
    heroImage: "/Hero_slider_img/Hero_img_1.png",
    showcaseImage: "/Hero_slider_img/Hero_img_2.png",
    status: "Published",
  });

  const [heroPreviewUrl, setHeroPreviewUrl] = useState("/Hero_slider_img/Hero_img_1.png");
  const [showcasePreviewUrl, setShowcasePreviewUrl] = useState("/Hero_slider_img/Hero_img_2.png");

  const imagePresets = [
    { label: "Agro Farm Processing", url: "/Hero_slider_img/Hero_img_1.png" },
    { label: "Mundra Port Ocean Freight", url: "/Hero_slider_img/Hero_img_2.png" },
    { label: "Quality Lab Certification", url: "/Hero_slider_img/Hero_img_3.png" },
    { label: "Commodity Stock Warehouse", url: "/home_Page_img/image.png" },
  ];

  return (
    <AdminFormLayout
      title="Edit About Page Content"
      subtitle="Modify public About Us company overview, location advantage, port logistics, vision, mission, and showcase images."
      backUrl="/admin/about"
      isEdit={true}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        
        {/* SECTION 1: TAGLINE & HEADING */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              1. Tagline Badge Text *
            </label>
            <input
              type="text"
              required
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              2. Main Section Heading *
            </label>
            <input
              type="text"
              required
              value={formData.heading}
              onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
            />
          </div>
        </div>

        {/* SECTION 2: COMPANY OVERVIEW RICH TEXT EDITOR (CKEDITOR 5) */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 8, textTransform: "uppercase", fontFamily: "monospace" }}>
            3. Detailed Company Overview (CKEditor Rich Text Editor) *
          </label>
          <CKEditor
            value={formData.overviewHtml}
            onChange={(data) => setFormData({ ...formData, overviewHtml: data })}
            placeholder="Write full company overview, background history, team expertise, quality assurances..."
          />
        </div>

        {/* SECTION 3: LOCATION ADVANTAGE & PORT LOGISTICS */}
        <div style={{ background: "#f8fafc", padding: "24px", borderRadius: "16px", border: "1.5px solid #e2e8f0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <MapPin size={20} style={{ color: "#16a34a" }} />
            <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 800, color: "#0B192C" }}>
              Location Advantage & Port Logistics Configuration
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
                  Location Card Title
                </label>
                <input
                  type="text"
                  value={formData.locationTitle}
                  onChange={(e) => setFormData({ ...formData, locationTitle: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", background: "#ffffff", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.9rem", fontWeight: 700 }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
                  Strategic Ports Tagline
                </label>
                <input
                  type="text"
                  value={formData.ports}
                  onChange={(e) => setFormData({ ...formData, ports: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", background: "#ffffff", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.9rem", fontWeight: 700 }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
                Location Advantage Description
              </label>
              <textarea
                rows={3}
                value={formData.locationDesc}
                onChange={(e) => setFormData({ ...formData, locationDesc: e.target.value })}
                style={{ width: "100%", padding: "10px 14px", background: "#ffffff", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.9rem", lineHeight: 1.6 }}
              />
            </div>
          </div>
        </div>

        {/* SECTION 4: VISION & MISSION */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Our Vision Statement
            </label>
            <textarea
              rows={4}
              value={formData.visionText}
              onChange={(e) => setFormData({ ...formData, visionText: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.92rem", lineHeight: 1.6 }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
              Our Mission Statement
            </label>
            <textarea
              rows={4}
              value={formData.missionText}
              onChange={(e) => setFormData({ ...formData, missionText: e.target.value })}
              style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.92rem", lineHeight: 1.6 }}
            />
          </div>
        </div>

        {/* SECTION 5: HERO & SHOWCASE IMAGES */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* Top Hero Banner Selector */}
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 8, textTransform: "uppercase", fontFamily: "monospace" }}>
              Top Banner Image URL
            </label>
            <div style={{ position: "relative", width: "100%", height: 160, borderRadius: 12, overflow: "hidden", border: "1.5px solid #cbd5e1", marginBottom: 10 }}>
              <Image src={heroPreviewUrl} alt="Hero Banner Preview" fill style={{ objectFit: "cover" }} />
            </div>
            <input
              type="text"
              value={formData.heroImage}
              onChange={(e) => {
                setFormData({ ...formData, heroImage: e.target.value });
                setHeroPreviewUrl(e.target.value);
              }}
              style={{ width: "100%", padding: "10px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.85rem" }}
            />
          </div>

          {/* Right Showcase Image Selector */}
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 8, textTransform: "uppercase", fontFamily: "monospace" }}>
              Right Column Showcase Image URL
            </label>
            <div style={{ position: "relative", width: "100%", height: 160, borderRadius: 12, overflow: "hidden", border: "1.5px solid #cbd5e1", marginBottom: 10 }}>
              <Image src={showcasePreviewUrl} alt="Showcase Preview" fill style={{ objectFit: "cover" }} />
            </div>
            <input
              type="text"
              value={formData.showcaseImage}
              onChange={(e) => {
                setFormData({ ...formData, showcaseImage: e.target.value });
                setShowcasePreviewUrl(e.target.value);
              }}
              style={{ width: "100%", padding: "10px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.85rem" }}
            />
          </div>
        </div>

        {/* SECTION 6: PUBLISH STATUS */}
        <div>
          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 800, color: "#000000", marginBottom: 6, textTransform: "uppercase", fontFamily: "monospace" }}>
            Publish Status
          </label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            style={{ width: "100%", padding: "12px 14px", background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }}
          >
            <option value="Published">Published (Live On Site)</option>
            <option value="Draft">Draft</option>
          </select>
        </div>

      </div>
    </AdminFormLayout>
  );
}

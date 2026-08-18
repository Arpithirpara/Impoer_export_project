"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, CheckCircle, Edit, Trash2, Search, Filter } from "lucide-react";
import styles from "../admin.module.css";

const heroBanners = [
  { id: 1, title: "Agricultural Export & Import Solutions", subtitle: "Quality produce from our farms to the world", image: "/Hero_slider_img/image.png", status: "Active" },
  { id: 2, title: "Export Grade Indian Spices & Grains", subtitle: "100% certified quality for overseas markets", image: "/Hero_slider_img/Hero_img_1.png", status: "Active" },
  { id: 3, title: "Mundra & Kandla Port Strategic Access", subtitle: "Fast ocean freight dispatch to 30+ countries", image: "/Hero_slider_img/Hero_img_2.png", status: "Active" },
  { id: 4, title: "Gulfood & International Expo Showcase", subtitle: "Meet Eco Export live at major summits", image: "/Hero_slider_img/Hero_img_3.png", status: "Active" },
];

export default function AdminHeroPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = heroBanners.filter((slide) => {
    const matchesSearch =
      slide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || slide.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className={styles.adminLayout}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`${styles.mainWrapper} ${!sidebarOpen ? styles.mainWrapperFull : ""}`}>
        <TopHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className={styles.mainContent}>
          {/* Header Action Section */}
          <div className={styles.moduleHeader}>
            <div>
              <h1>Hero Banner Slider Manager</h1>
              <p>Manage homepage Swiper banners, headline titles, and subtext slides in table view.</p>
            </div>
            <Link href="/admin/hero/add" className={styles.primaryActionBtn} style={{ textDecoration: "none" }}>
              <Plus size={18} />
              <span>Add New Hero Banner</span>
            </Link>
          </div>

          {/* Table Container Box */}
          <div className={styles.cardBox}>
            {/* Table Search & Filter Toolbar */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 18 }}>
              <div style={{ position: "relative", flex: 1, minWidth: 240, maxWidth: 400 }}>
                <Search size={18} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#64748B" }} />
                <input
                  type="text"
                  placeholder="Search slides by headline or subtitle..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "9px 14px 9px 38px",
                    borderRadius: "10px",
                    border: "1.5px solid #CBD5E1",
                    background: "#F8FAFC",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "#0B192C",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Filter size={16} style={{ color: "#64748B" }} />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  style={{
                    padding: "9px 14px",
                    borderRadius: "10px",
                    border: "1.5px solid #CBD5E1",
                    background: "#FFFFFF",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#0B192C",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="All">All Banner Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Slide ID</th>
                    <th>Banner Preview</th>
                    <th>Headline Title</th>
                    <th>Subtitle / Caption</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length > 0 ? (
                    filtered.map((slide) => (
                      <tr key={slide.id}>
                        <td style={{ fontWeight: 800, color: "#000000" }}>#{slide.id}</td>
                        <td>
                          <div style={{ position: "relative", width: 110, height: 56, borderRadius: 8, overflow: "hidden", background: "#000000", border: "1px solid #cbd5e1" }}>
                            <Image src={slide.image} alt={slide.title} fill style={{ objectFit: "cover" }} />
                          </div>
                        </td>
                        <td style={{ fontWeight: 800, color: "#000000", maxWidth: 220 }}>{slide.title}</td>
                        <td style={{ color: "#475569", maxWidth: 260 }}>{slide.subtitle}</td>
                        <td>
                          <span className={`${styles.statusBadge} ${styles.statusActive}`}>
                            <CheckCircle size={12} /> {slide.status}
                          </span>
                        </td>
                        <td>
                          <div className={styles.actionRow}>
                            <Link href={`/admin/hero/edit/${slide.id}`} className={styles.editBtn} style={{ textDecoration: "none" }}>
                              <Edit size={14} /> Edit
                            </Link>
                            <button className={styles.deleteBtn}>
                              <Trash2 size={14} /> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} style={{ textAlign: "center", padding: "24px", color: "#64748B", fontWeight: 600 }}>
                        No hero banners match your search/filter criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

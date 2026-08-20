"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Edit, Trash2, CheckCircle, Search, Filter } from "lucide-react";
import styles from "../admin.module.css";

const aboutSectionsList = [
  {
    id: "a1",
    name: "Why Eco Export? (Company Overview)",
    category: "Main Story",
    details: "Full agro produce growing, processing & export packaging in India.",
    image: "/Hero_slider_img/Hero_img_1.png",
    status: "Active",
  },
  {
    id: "a2",
    name: "Location Advantage & Port Logistics",
    category: "Logistics Access",
    details: "Proximity to Mundra, Kandla & Pipavav ports for ocean freight.",
    image: "/Hero_slider_img/Hero_img_2.png",
    status: "Active",
  },
  {
    id: "a3",
    name: "Our Vision Statement",
    category: "Corporate Vision",
    details: "Becoming India's leading quality food grain & commodity exporter.",
    image: "/Hero_slider_img/Hero_img_3.png",
    status: "Active",
  },
  {
    id: "a4",
    name: "Our Mission Statement",
    category: "Quality Mission",
    details: "100% quality checked products, research innovation & environment care.",
    image: "/home_Page_img/image.png",
    status: "Active",
  },
];

export default function AdminAboutPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = ["All", "Main Story", "Logistics Access", "Corporate Vision", "Quality Mission"];

  const filtered = aboutSectionsList.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.details.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" || item.category === categoryFilter;

    return matchesSearch && matchesCategory;
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
              <h1>About & Logistics Manager</h1>
              <p>Manage About Us page sections, location advantage, vision, mission, and showcase imagery in table view.</p>
            </div>
            <Link href="/admin/about/edit" className={styles.primaryActionBtn} style={{ textDecoration: "none" }}>
              <Edit size={18} />
              <span>Edit About Page Content</span>
            </Link>
          </div>

          {/* Table Container Box */}
          <div className={styles.cardBox}>
            {/* Table Search & Category Filter Toolbar */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 18 }}>
              <div style={{ position: "relative", flex: 1, minWidth: 240, maxWidth: 400 }}>
                <Search size={18} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#64748B" }} />
                <input
                  type="text"
                  placeholder="Search section title, category, or details..."
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
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
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
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === "All" ? "All Section Categories" : cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Cover</th>
                    <th>Section Title</th>
                    <th>Category</th>
                    <th>Details Summary</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length > 0 ? (
                    filtered.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div style={{ position: "relative", width: 56, height: 44, borderRadius: 8, overflow: "hidden", background: "#ffffff", border: "1px solid #cbd5e1" }}>
                            <Image src={item.image} alt={item.name} fill style={{ objectFit: "cover" }} />
                          </div>
                        </td>
                        <td style={{ fontWeight: 800, color: "#0B192C" }}>{item.name}</td>
                        <td>{item.category}</td>
                        <td style={{ color: "#475569" }}>{item.details}</td>
                        <td>
                          <span className={`${styles.statusBadge} ${styles.statusActive}`}>
                            <CheckCircle size={12} /> {item.status}
                          </span>
                        </td>
                        <td>
                          <div className={styles.actionRow}>
                            <Link href="/admin/about/edit" className={styles.editBtn} style={{ textDecoration: "none" }}>
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
                        No about sections match your search/filter criteria.
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

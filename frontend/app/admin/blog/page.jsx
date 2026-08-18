"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, Edit, Trash2, CheckCircle, Search, Filter } from "lucide-react";
import styles from "../admin.module.css";

const blogArticles = [
  { id: "b1", title: "How Eco Export Ensures 100% Quality Certification for Global Markets", category: "Export Standards", date: "Aug 12, 2026", readTime: "5 min read", image: "/Hero_slider_img/Hero_img_2.png", status: "Published" },
  { id: "b2", title: "Navigating Port Logistics: Mundra, Kandla & Pipavav Advantages", category: "Logistics & Supply", date: "Aug 04, 2026", readTime: "6 min read", image: "/Hero_slider_img/Hero_img_1.png", status: "Published" },
  { id: "b3", title: "Global Commodity Trends: Demand for Indian Spices & Basmati Rice", category: "Market Insights", date: "Jul 28, 2026", readTime: "4 min read", image: "/Hero_slider_img/Hero_img_3.png", status: "Published" },
];

export default function AdminBlogPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = ["All", "Export Standards", "Logistics & Supply", "Market Insights"];

  const filtered = blogArticles.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "All" || b.category === categoryFilter;
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
              <h1>Blog & Market Articles Manager</h1>
              <p>Create and publish agricultural market news, export guidelines, and quality standards.</p>
            </div>
            <Link href="/admin/blog/add" className={styles.primaryActionBtn} style={{ textDecoration: "none" }}>
              <Plus size={18} />
              <span>Write New Article</span>
            </Link>
          </div>

          {/* Table Container Box */}
          <div className={styles.cardBox}>
            {/* Table Search & Category Filter Bar */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 18 }}>
              <div style={{ position: "relative", flex: 1, minWidth: 240, maxWidth: 400 }}>
                <Search size={18} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#64748B" }} />
                <input
                  type="text"
                  placeholder="Search articles by title or category..."
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
                      {cat === "All" ? "All Article Categories" : cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Article Cover</th>
                    <th>Headline Title</th>
                    <th>Category</th>
                    <th>Publish Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length > 0 ? (
                    filtered.map((b) => (
                      <tr key={b.id}>
                        <td>
                          <div style={{ position: "relative", width: 70, height: 48, borderRadius: 8, overflow: "hidden", background: "#000000", border: "1px solid #cbd5e1" }}>
                            <Image src={b.image} alt={b.title} fill style={{ objectFit: "cover" }} />
                          </div>
                        </td>
                        <td style={{ fontWeight: 800, color: "#000000", maxWidth: 320 }}>{b.title}</td>
                        <td>{b.category}</td>
                        <td>{b.date}</td>
                        <td>
                          <span className={`${styles.statusBadge} ${styles.statusActive}`}>
                            <CheckCircle size={12} /> {b.status}
                          </span>
                        </td>
                        <td>
                          <div className={styles.actionRow}>
                            <Link href={`/admin/blog/edit/${b.id}`} className={styles.editBtn} style={{ textDecoration: "none" }}>
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
                        No articles match your search/filter criteria.
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

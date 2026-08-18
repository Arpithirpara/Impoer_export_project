"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, Edit, Trash2, CheckCircle, Search, Filter } from "lucide-react";
import styles from "../admin.module.css";

const categoryItems = [
  { id: "c1", name: "Spices & Seasonings", slug: "spices", count: "8 Products", icon: "🌶️", status: "Active" },
  { id: "c2", name: "Rice Varieties (Basmati & Non-Basmati)", slug: "rice", count: "6 Products", icon: "🍚", status: "Active" },
  { id: "c3", name: "Grains & Milling Wheat", slug: "grains-wheat", count: "5 Products", icon: "🌾", status: "Active" },
  { id: "c4", name: "Oil Seeds & Sesame", slug: "oil-seeds", count: "4 Products", icon: "🌻", status: "Active" },
  { id: "c5", name: "Tea & Coffee", slug: "tea-coffee", count: "4 Products", icon: "☕", status: "Active" },
  { id: "c6", name: "Pulses & Lentils", slug: "pulses-lentils", count: "5 Products", icon: "🫘", status: "Active" },
  { id: "c7", name: "Cattle Feed", slug: "cattle-feed", count: "3 Products", icon: "🌾", status: "Active" },
  { id: "c8", name: "Flour & Semolina", slug: "flour-semolina", count: "3 Products", icon: "🌽", status: "Active" },
];

export default function AdminCategoriesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = categoryItems.filter((cat) => {
    const matchesSearch =
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.slug.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || cat.status === statusFilter;
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
              <h1>Categories & Commodity Lines</h1>
              <p>Manage product category lines and commodity classifications displayed on the storefront.</p>
            </div>
            <Link href="/admin/categories/add" className={styles.primaryActionBtn} style={{ textDecoration: "none" }}>
              <Plus size={18} />
              <span>Add New Category</span>
            </Link>
          </div>

          {/* Table Container Box */}
          <div className={styles.cardBox}>
            {/* Table Search & Status Filter Bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 18, flexWrap: "wrap" }}>
              <div style={{ position: "relative", flex: 1, minWidth: 240, maxWidth: 380 }}>
                <Search size={18} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#64748B" }} />
                <input
                  type="text"
                  placeholder="Search categories by name or slug..."
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
                  <option value="All">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Icon</th>
                    <th>Category Name</th>
                    <th>Slug</th>
                    <th>Item Count</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length > 0 ? (
                    filtered.map((cat) => (
                      <tr key={cat.id}>
                        <td>
                          <span style={{ fontSize: "1.4rem" }}>{cat.icon}</span>
                        </td>
                        <td style={{ fontWeight: 800, color: "#000000" }}>{cat.name}</td>
                        <td style={{ fontFamily: "monospace", color: "#64748b" }}>{cat.slug}</td>
                        <td style={{ fontWeight: 700 }}>{cat.count}</td>
                        <td>
                          <span className={`${styles.statusBadge} ${styles.statusActive}`}>
                            <CheckCircle size={12} /> {cat.status}
                          </span>
                        </td>
                        <td>
                          <div className={styles.actionRow}>
                            <Link href={`/admin/categories/edit/${cat.id}`} className={styles.editBtn} style={{ textDecoration: "none" }}>
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
                        No categories match your search/filter criteria.
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

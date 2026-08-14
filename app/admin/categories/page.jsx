"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, Edit, Trash2, CheckCircle } from "lucide-react";
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
  const [searchFilter, setSearchFilter] = useState("");

  const filtered = categoryItems.filter((cat) =>
    cat.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    cat.slug.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className={styles.adminLayout}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`${styles.mainWrapper} ${!sidebarOpen ? styles.mainWrapperFull : ""}`}>
        <TopHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
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

          {/* Table Container */}
          <div className={styles.cardBox}>
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
                  {filtered.map((cat) => (
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

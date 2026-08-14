"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, Edit, Trash2, CheckCircle } from "lucide-react";
import styles from "../admin.module.css";

const blogArticles = [
  { id: "b1", title: "How Eco Export Ensures 100% Quality Certification for Global Markets", category: "Export Standards", date: "Aug 12, 2026", readTime: "5 min read", image: "/Hero_slider_img/Hero_img_2.png", status: "Published" },
  { id: "b2", title: "Navigating Port Logistics: Mundra, Kandla & Pipavav Advantages", category: "Logistics & Supply", date: "Aug 04, 2026", readTime: "6 min read", image: "/Hero_slider_img/Hero_img_1.png", status: "Published" },
  { id: "b3", title: "Global Commodity Trends: Demand for Indian Spices & Basmati Rice", category: "Market Insights", date: "Jul 28, 2026", readTime: "4 min read", image: "/Hero_slider_img/Hero_img_3.png", status: "Published" },
];

export default function AdminBlogPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className={styles.adminLayout}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`${styles.mainWrapper} ${!sidebarOpen ? styles.mainWrapperFull : ""}`}>
        <TopHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
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

          {/* Table Container */}
          <div className={styles.cardBox}>
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
                  {blogArticles.map((b) => (
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

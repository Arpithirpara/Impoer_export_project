"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, CheckCircle, Edit, Trash2 } from "lucide-react";
import styles from "../admin.module.css";

const heroBanners = [
  { id: 1, title: "Agricultural Export & Import Solutions", subtitle: "Quality produce from our farms to the world", image: "/Hero_slider_img/image.png", status: "Active" },
  { id: 2, title: "Export Grade Indian Spices & Grains", subtitle: "100% certified quality for overseas markets", image: "/Hero_slider_img/Hero_img_1.png", status: "Active" },
  { id: 3, title: "Mundra & Kandla Port Strategic Access", subtitle: "Fast ocean freight dispatch to 30+ countries", image: "/Hero_slider_img/Hero_img_2.png", status: "Active" },
  { id: 4, title: "Gulfood & International Expo Showcase", subtitle: "Meet Eco Export live at major summits", image: "/Hero_slider_img/Hero_img_3.png", status: "Active" },
];

export default function AdminHeroPage() {
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
              <h1>Hero Banner Slider Manager</h1>
              <p>Manage homepage Swiper banners, headline titles, and subtext slides in table view.</p>
            </div>
            <Link href="/admin/hero/add" className={styles.primaryActionBtn} style={{ textDecoration: "none" }}>
              <Plus size={18} />
              <span>Add New Hero Banner</span>
            </Link>
          </div>

          {/* Table Container */}
          <div className={styles.cardBox}>
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
                  {heroBanners.map((slide) => (
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

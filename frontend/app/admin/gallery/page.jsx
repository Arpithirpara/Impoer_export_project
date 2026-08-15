"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, Edit, Trash2, CheckCircle } from "lucide-react";
import styles from "../admin.module.css";

const galleryItems = [
  { id: "g1", title: "Modern Processing & Automated Sorting Plant", category: "Processing Facility", image: "/home_Page_img/image.png", status: "Active" },
  { id: "g2", title: "Grain Storage Silos & Warehousing Hub", category: "Storage & Warehousing", image: "/categories_img/Grains_img.png", status: "Active" },
  { id: "g3", title: "Port Dispatch & Containerized Ocean Freight", category: "Port Operations", image: "/Hero_slider_img/Hero_img_2.png", status: "Active" },
  { id: "g4", title: "Export Quality Testing & Seed Inspection Lab", category: "Quality Assurance", image: "/categories_img/Spices_img.png", status: "Active" },
];

export default function AdminGalleryPage() {
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
              <h1>Photo & Media Showcase Gallery</h1>
              <p>Manage processing facility photos, warehouse imagery, and port dispatch media.</p>
            </div>
            <Link href="/admin/gallery/add" className={styles.primaryActionBtn} style={{ textDecoration: "none" }}>
              <Plus size={18} />
              <span>Upload New Gallery Photo</span>
            </Link>
          </div>

          {/* Table Container */}
          <div className={styles.cardBox}>
            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Photo Thumbnail</th>
                    <th>Media Caption / Title</th>
                    <th>Facility Category</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {galleryItems.map((g) => (
                    <tr key={g.id}>
                      <td>
                        <div style={{ position: "relative", width: 80, height: 50, borderRadius: 8, overflow: "hidden", background: "#000000", border: "1px solid #cbd5e1" }}>
                          <Image src={g.image} alt={g.title} fill style={{ objectFit: "cover" }} />
                        </div>
                      </td>
                      <td style={{ fontWeight: 800, color: "#000000" }}>{g.title}</td>
                      <td>{g.category}</td>
                      <td>
                        <span className={`${styles.statusBadge} ${styles.statusActive}`}>
                          <CheckCircle size={12} /> {g.status}
                        </span>
                      </td>
                      <td>
                        <div className={styles.actionRow}>
                          <Link href={`/admin/gallery/edit/${g.id}`} className={styles.editBtn} style={{ textDecoration: "none" }}>
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

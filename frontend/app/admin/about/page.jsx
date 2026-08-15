"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, Edit, Trash2, CheckCircle } from "lucide-react";
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
  const [searchFilter, setSearchFilter] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const filtered = aboutSectionsList.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.category.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.details.toLowerCase().includes(searchFilter.toLowerCase());
    if (activeTab === "All") return matchesSearch;
    return matchesSearch && item.status === activeTab;
  });

  return (
    <div className={styles.adminLayout}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`${styles.mainWrapper} ${!sidebarOpen ? styles.mainWrapperFull : ""}`}>
        <TopHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
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

          {/* Status Filter Badges (Matching All Admin Pages) */}
          <div className={styles.filterBar}>
            <button
              onClick={() => setActiveTab("All")}
              className={`${styles.filterPill} ${activeTab === "All" ? styles.activeFilterPill : ""}`}
            >
              All ({aboutSectionsList.length})
            </button>
            <button
              onClick={() => setActiveTab("Active")}
              className={`${styles.filterPill} ${activeTab === "Active" ? styles.activeFilterPill : ""}`}
            >
              Active ({aboutSectionsList.filter((item) => item.status === "Active").length})
            </button>
            <button
              onClick={() => setActiveTab("Inactive")}
              className={`${styles.filterPill} ${activeTab === "Inactive" ? styles.activeFilterPill : ""}`}
            >
              Inactive (0)
            </button>
            <button
              onClick={() => setActiveTab("Draft")}
              className={`${styles.filterPill} ${activeTab === "Draft" ? styles.activeFilterPill : ""}`}
            >
              Draft (0)
            </button>
          </div>

          {/* Table Container */}
          <div className={styles.cardBox}>
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
                  {filtered.map((item) => (
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

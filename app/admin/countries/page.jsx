"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, Edit, Trash2, CheckCircle } from "lucide-react";
import styles from "../admin.module.css";

const countriesList = [
  { id: "cnt-1", name: "United Arab Emirates (UAE)", flag: "🇦🇪", region: "Middle East", mainCommodity: "Basmati Rice & Spices", port: "Jebel Ali Port" },
  { id: "cnt-2", name: "Saudi Arabia", flag: "🇸🇦", region: "Middle East", mainCommodity: "Wheat & Milling Grains", port: "Jeddah Islamic Port" },
  { id: "cnt-3", name: "Singapore", flag: "🇸🇬", region: "Southeast Asia", mainCommodity: "Spices & Sesame Seeds", port: "Port of Singapore" },
  { id: "cnt-4", name: "Netherlands", flag: "🇳🇱", region: "Europe", mainCommodity: "Oil Seeds & Cattle Feed", port: "Port of Rotterdam" },
  { id: "cnt-5", name: "Egypt", flag: "🇪🇬", region: "North Africa", mainCommodity: "Durum Wheat & Pulses", port: "Port of Alexandria" },
  { id: "cnt-6", name: "Malaysia", flag: "🇲🇾", region: "Southeast Asia", mainCommodity: "Tea & Spices", port: "Port Klang" },
];

export default function AdminCountriesPage() {
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
              <h1>Export Destination Countries</h1>
              <p>Manage overseas export market network across Middle East, Asia, Europe, and Africa.</p>
            </div>
            <Link href="/admin/countries/add" className={styles.primaryActionBtn} style={{ textDecoration: "none" }}>
              <Plus size={18} />
              <span>Add Destination Country</span>
            </Link>
          </div>

          {/* Table Container */}
          <div className={styles.cardBox}>
            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Country Name</th>
                    <th>Region</th>
                    <th>Major Commodity</th>
                    <th>Destination Port</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {countriesList.map((c) => (
                    <tr key={c.id}>
                      <td style={{ fontWeight: 800, color: "#000000", display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: "1.4rem" }}>{c.flag}</span>
                        <span>{c.name}</span>
                      </td>
                      <td>{c.region}</td>
                      <td>{c.mainCommodity}</td>
                      <td>{c.port}</td>
                      <td>
                        <span className={`${styles.statusBadge} ${styles.statusActive}`}>
                          <CheckCircle size={12} /> Active Destination
                        </span>
                      </td>
                      <td>
                        <div className={styles.actionRow}>
                          <Link href={`/admin/countries/edit/${c.id}`} className={styles.editBtn} style={{ textDecoration: "none" }}>
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

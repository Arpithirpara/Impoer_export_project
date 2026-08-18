"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, Edit, Trash2, CheckCircle, Search, Filter } from "lucide-react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");

  const regions = ["All", "Middle East", "Southeast Asia", "Europe", "North Africa"];

  const filtered = countriesList.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.mainCommodity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.port.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = regionFilter === "All" || c.region === regionFilter;
    return matchesSearch && matchesRegion;
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
              <h1>Export Destination Countries</h1>
              <p>Manage overseas export market network across Middle East, Asia, Europe, and Africa.</p>
            </div>
            <Link href="/admin/countries/add" className={styles.primaryActionBtn} style={{ textDecoration: "none" }}>
              <Plus size={18} />
              <span>Add Destination Country</span>
            </Link>
          </div>

          {/* Table Container Box */}
          <div className={styles.cardBox}>
            {/* Table Search & Region Filter Bar */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 18 }}>
              <div style={{ position: "relative", flex: 1, minWidth: 240, maxWidth: 400 }}>
                <Search size={18} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#64748B" }} />
                <input
                  type="text"
                  placeholder="Search by country, port, or major commodity..."
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
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
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
                  {regions.map((reg) => (
                    <option key={reg} value={reg}>
                      {reg === "All" ? "All Regions" : reg}
                    </option>
                  ))}
                </select>
              </div>
            </div>

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
                  {filtered.length > 0 ? (
                    filtered.map((c) => (
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
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} style={{ textAlign: "center", padding: "24px", color: "#64748B", fontWeight: 600 }}>
                        No destination countries match your search/filter criteria.
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

"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, Edit, Trash2, CheckCircle, Save } from "lucide-react";
import styles from "../admin.module.css";

const portsList = [
  { id: "p-1", name: "Mundra Port (Gujarat)", distance: "Proximity from Ahmedabad HQ", capacity: "Deep Water Container Terminal", status: "Primary Hub" },
  { id: "p-2", name: "Kandla Port (Gujarat)", distance: "Direct Container Logistics", capacity: "Bulk Agro Freight Loading", status: "Active Hub" },
  { id: "p-3", name: "Pipavav Port (Gujarat)", distance: "APM Terminals Access", capacity: "Reefer & Dry Cargo Berth", status: "Active Hub" },
];

export default function AdminAboutPage() {
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
              <h1>About Company & Port Logistics Manager</h1>
              <p>Manage corporate mission/vision statements and strategic Indian port access details.</p>
            </div>
            <button className={styles.primaryActionBtn}>
              <Plus size={18} />
              <span>Add New Strategic Port</span>
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Strategic Ports Table Box */}
            <div className={styles.cardBox}>
              <div className={styles.cardTitleBar}>
                <h3>Strategic Indian Export Sea Ports</h3>
              </div>

              <div className={styles.tableContainer}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>Port Name</th>
                      <th>Logistics Distance</th>
                      <th>Terminal Capacity</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portsList.map((p) => (
                      <tr key={p.id}>
                        <td style={{ fontWeight: 800, color: "#000000" }}>⚓ {p.name}</td>
                        <td>{p.distance}</td>
                        <td>{p.capacity}</td>
                        <td>
                          <span className={`${styles.statusBadge} ${styles.statusActive}`}>
                            <CheckCircle size={12} /> {p.status}
                          </span>
                        </td>
                        <td>
                          <div className={styles.actionRow}>
                            <button className={styles.editBtn}>
                              <Edit size={14} /> Edit
                            </button>
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

            {/* Corporate Info Fields */}
            <div className={styles.cardBox}>
              <div className={styles.cardTitleBar}>
                <h3>Corporate Overview & Vision Statements</h3>
                <button className={styles.primaryActionBtn} style={{ padding: "8px 16px", fontSize: "0.82rem" }}>
                  <Save size={16} />
                  <span>Save Corporate Info</span>
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>Company Introduction</label>
                  <textarea rows={4} defaultValue="Based in India, we handle the entire production process right from growing produce to processing and packaging it for overseas markets..." style={{ width: "100%", padding: 14, background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 12, color: "#000000", fontSize: "0.9rem" }} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>Corporate Vision</label>
                    <textarea rows={3} defaultValue="To become one of the leading Agro Commodity & Food Grain exporters from India..." style={{ width: "100%", padding: 14, background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 12, color: "#000000", fontSize: "0.9rem" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>Corporate Mission</label>
                    <textarea rows={3} defaultValue="For us quality is the biggest mission. We wish to export the best & healthy quality of products..." style={{ width: "100%", padding: 14, background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 12, color: "#000000", fontSize: "0.9rem" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

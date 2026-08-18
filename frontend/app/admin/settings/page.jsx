"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Settings, Save, ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import styles from "../admin.module.css";

export default function AdminSettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className={styles.adminLayout}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`${styles.mainWrapper} ${!sidebarOpen ? styles.mainWrapperFull : ""}`}>
        <TopHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
        <main className={styles.mainContent}>
          <div className={styles.moduleHeader}>
            <div>
              <h1>Export Site Settings & Contact Info</h1>
              <p>Configure general website metadata, contact phone/email, and social media handles.</p>
            </div>
            <button className={styles.primaryActionBtn}>
              <Save size={18} />
              <span>Save System Settings</span>
            </button>
          </div>

          <div className={styles.cardBox} style={{ maxWidth: 800 }}>
            <div className={styles.cardTitleBar}>
              <h3>General Export Configuration</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>Export Firm Name</label>
                <input type="text" defaultValue="Eco Export" style={{ width: "100%", padding: 12, background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem", fontWeight: 700 }} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>Official Export Email</label>
                  <input type="text" defaultValue="info@ecoexport.in" style={{ width: "100%", padding: 12, background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }} />
                </div>
                <div>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>Contact Phone / WhatsApp</label>
                  <input type="text" defaultValue="+91 92650 XXXXX" style={{ width: "100%", padding: 12, background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }} />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#64748b", display: "block", marginBottom: 6 }}>Headquarters Address</label>
                <input type="text" defaultValue="Ahmedabad, Gujarat, India (Near Mundra & Kandla Ports)" style={{ width: "100%", padding: 12, background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: 10, color: "#000000", fontSize: "0.95rem" }} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

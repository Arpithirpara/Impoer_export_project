"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Fraunces, Inter } from "next/font/google";
import { Info, Save } from "lucide-react";
import styles from "../admin.module.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export default function AdminAboutPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className={`${styles.adminLayout} ${inter.className}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={styles.mainWrapper}>
        <TopHeader
          activeNav="about"
          homeSubNav="about"
          frauncesFont={fraunces}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <main className={styles.mainContent}>
          <div className={styles.tableCard}>
            <div className={styles.tableHeaderFlex}>
              <div>
                <h3>
                  <Info size={20} style={{ display: "inline", marginRight: 8, color: "#15803d" }} />
                  About Company Content & Vision
                </h3>
                <p>Manage Eco Export company description, Location Advantage text, Vision & Mission statements.</p>
              </div>
              <button className={styles.primaryActionBtn}>
                <Save size={16} style={{ marginRight: 6 }} />
                Save Changes
              </button>
            </div>

            <div className={styles.fieldGroup} style={{ marginBottom: 16 }}>
              <label>Company Overview Paragraph 1</label>
              <textarea
                rows={3}
                defaultValue="Based in India, we handle the entire production process right from growing the produce to processing and packaging it for overseas markets."
                className={styles.slideInput}
              />
            </div>

            <div className={styles.fieldGroup} style={{ marginBottom: 16 }}>
              <label>Location Advantage (Ports Text)</label>
              <textarea
                rows={2}
                defaultValue="We enjoy proximity to Mundra, Kandla and Pipavav ports as we are located in Ahmedabad."
                className={styles.slideInput}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

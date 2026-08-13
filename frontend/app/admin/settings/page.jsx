"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import SettingsManager from "../components/SettingsManager";
import { Fraunces, Inter } from "next/font/google";
import styles from "../admin.module.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export default function AdminSettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className={`${styles.adminLayout} ${inter.className}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={styles.mainWrapper}>
        <TopHeader
          activeNav="settings"
          homeSubNav="settings"
          frauncesFont={fraunces}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <main className={styles.mainContent}>
          <SettingsManager />
        </main>
      </div>
    </div>
  );
}

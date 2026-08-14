"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Fraunces, Inter } from "next/font/google";
import { Mail } from "lucide-react";
import styles from "../admin.module.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export default function AdminContactPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className={`${styles.adminLayout} ${inter.className}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={styles.mainWrapper}>
        <TopHeader
          activeNav="contact"
          homeSubNav="contact"
          frauncesFont={fraunces}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <main className={styles.mainContent}>
          <div className={styles.tableCard}>
            <div className={styles.tableHeaderFlex}>
              <div>
                <h3>
                  <Mail size={20} style={{ display: "inline", marginRight: 8, color: "#15803d" }} />
                  Customer Contact Messages
                </h3>
                <p>Messages and general feedback received from website Contact Us form.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

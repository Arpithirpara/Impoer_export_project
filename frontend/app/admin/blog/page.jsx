"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Fraunces, Inter } from "next/font/google";
import { FileText, Plus } from "lucide-react";
import styles from "../admin.module.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export default function AdminBlogPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className={`${styles.adminLayout} ${inter.className}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={styles.mainWrapper}>
        <TopHeader
          activeNav="blog"
          homeSubNav="blog"
          frauncesFont={fraunces}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <main className={styles.mainContent}>
          <div className={styles.tableCard}>
            <div className={styles.tableHeaderFlex}>
              <div>
                <h3>
                  <FileText size={20} style={{ display: "inline", marginRight: 8, color: "#15803d" }} />
                  Blog Articles & Agro Insights
                </h3>
                <p>Create, edit, and publish trade news, market updates, and quality standards.</p>
              </div>
              <button className={styles.primaryActionBtn}>
                <Plus size={16} style={{ marginRight: 6 }} />
                New Article
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

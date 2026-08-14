"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Fraunces, Inter } from "next/font/google";
import { Grid, Plus } from "lucide-react";
import styles from "../admin.module.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const categoriesList = [
  { id: "c1", name: "Spices & Seasonings", count: 12, icon: "🌶️" },
  { id: "c2", name: "Rice Varieties", count: 8, icon: "🍚" },
  { id: "c3", name: "Grains & Cereals", count: 10, icon: "🌾" },
  { id: "c4", name: "Flour & Agro Meals", count: 6, icon: "🌽" },
  { id: "c5", name: "Oil Seeds", count: 7, icon: "🌻" },
  { id: "c6", name: "Animal & Cattle Feed", count: 5, icon: "🐄" },
];

export default function AdminCategoriesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className={`${styles.adminLayout} ${inter.className}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={styles.mainWrapper}>
        <TopHeader
          activeNav="categorys"
          homeSubNav="categorys"
          frauncesFont={fraunces}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <main className={styles.mainContent}>
          <div className={styles.tableCard}>
            <div className={styles.tableHeaderFlex}>
              <div>
                <h3>
                  <Grid size={20} style={{ display: "inline", marginRight: 8, color: "#15803d" }} />
                  Agro Export Categories Manager
                </h3>
                <p>Manage product category titles, icons, and item counts.</p>
              </div>
              <button className={styles.primaryActionBtn}>
                <Plus size={16} style={{ marginRight: 6 }} />
                Add New Category
              </button>
            </div>

            <div className={styles.cardsGrid}>
              {categoriesList.map((cat) => (
                <div key={cat.id} className={styles.infoCard}>
                  <span className={styles.cardFlag}>{cat.icon}</span>
                  <h4>{cat.name}</h4>
                  <p>
                    <strong>Listed Commodities:</strong> {cat.count} Active Items
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

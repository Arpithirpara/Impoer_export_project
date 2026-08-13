"use client";

import Link from "next/link";
import { Search, Globe } from "lucide-react";
import styles from "../admin.module.css";

export default function TopHeader({
  activeNav,
  homeSubNav,
  frauncesFont,
  searchFilter,
  setSearchFilter,
}) {
  return (
    <header className={styles.topNavbar}>
      <div className={styles.navbarLeft}>
        <h2 className={`${styles.pageHeaderTitle} ${frauncesFont.className}`}>
          {activeNav === "dashboard" && "Dashboard Overview"}
          {activeNav === "homepage" &&
            (homeSubNav === "hero" ? "Home Hero Banner Manager" : "Home Port Data Manager")}
          {activeNav === "inquiries" && "Buyer Inquiries & Leads"}
          {activeNav === "products" && "Product Inventory Catalog"}
          {activeNav === "exhibitions" && "Trade Exhibition Schedule"}
          {activeNav === "logistics" && "Port Logistics & Freight"}
          {activeNav === "settings" && "Portal Settings & System Status"}
        </h2>
      </div>

      <div className={styles.navbarRight}>
        <div className={styles.searchBox}>
          <Search size={16} className={styles.searchIconSvg} />
          <input
            type="text"
            placeholder="Search orders, buyers, products..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
          />
        </div>

        <div className={styles.serverStatus}>
          <span className={styles.pulseDot}></span>
          <span>System Live</span>
        </div>

        <Link href="/" className={styles.websiteBtn}>
          <Globe size={16} style={{ marginRight: 6 }} />
          Main Website
        </Link>
      </div>
    </header>
  );
}

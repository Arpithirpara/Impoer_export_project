"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, Bell, ExternalLink, ShieldCheck } from "lucide-react";
import styles from "../admin.module.css";

const routeTitles = {
  "/admin": { title: "Dashboard Overview", category: "System Analytics" },
  "/admin/hero": { title: "Hero Banner Slider Manager", category: "Homepage Design" },
  "/admin/categories": { title: "Categories & Commodity Lines", category: "Catalog Management" },
  "/admin/products": { title: "Export Products Catalog", category: "Inventory & Produce" },
  "/admin/countries": { title: "Export Destination Countries", category: "Global Trade Network" },
  "/admin/exhibitions": { title: "Trade Fairs & Exhibitions", category: "Events Schedule" },
  "/admin/blog": { title: "Blog & Market Articles", category: "Content Marketing" },
  "/admin/gallery": { title: "Photo & Media Showcase", category: "Visual Gallery" },
  "/admin/about": { title: "About Company & Port Access", category: "Corporate Logistics" },
  "/admin/inquiries": { title: "Buyer Inquiries & Quotes", category: "Sales Leads" },
  "/admin/visitors": { title: "Visitor Traffic & Real-Time Analytics", category: "Visitor Management" },
  "/admin/settings": { title: "Export Site Settings", category: "System Configuration" },
};

export default function TopHeader({ sidebarOpen, setSidebarOpen, searchFilter, setSearchFilter }) {
  const pathname = usePathname();
  const currentRoute = routeTitles[pathname] || {
    title: "Admin Panel",
    category: "Eco Export Admin",
  };

  return (
    <header className={styles.topHeader}>
      <div className={styles.headerLeft}>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={styles.menuToggleBtn}
          aria-label="Toggle navigation menu"
          title="Toggle Sidebar"
        >
          <Menu size={20} />
        </button>

        <div className={styles.pageTitleBox}>
          <h2>{currentRoute.title}</h2>
          <span className={styles.pageBreadcrumb}>Eco Export / {currentRoute.category}</span>
        </div>
      </div>

      <div className={styles.headerRight}>
        {/* Global Search Input if setSearchFilter is passed */}
        {setSearchFilter && (
          <div className={styles.searchBox}>
            <Search size={16} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search items..."
              value={searchFilter || ""}
              onChange={(e) => setSearchFilter(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        )}

        <Link href="/" target="_blank" className={styles.viewSiteBtn} title="View Live Website">
          <span>Live Site</span>
          <ExternalLink size={14} />
        </Link>

        {/* Notifications Icon with Badge */}
        <button className={styles.notifBtn} aria-label="Notifications" title="Notifications">
          <Bell size={18} />
          <span className={styles.notifBadge}>3</span>
        </button>

        {/* User Profile Card */}
        <div className={styles.headerUserCard}>
          <div className={styles.headerUserAvatar}>EE</div>
          <span className={styles.headerUserName}>Arpit Hirpara</span>
        </div>
      </div>
    </header>
  );
}

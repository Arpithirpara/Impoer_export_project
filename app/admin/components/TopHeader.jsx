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
        >
          <Menu size={20} />
        </button>

        <div className={styles.pageTitleBox}>
          <h2>{currentRoute.title}</h2>
          <span className={styles.pageBreadcrumb}>Eco Export / {currentRoute.category}</span>
        </div>
      </div>

      <div className={styles.headerRight}>
        <Link href="/" target="_blank" className={styles.viewSiteBtn}>
          <span>Live Website</span>
          <ExternalLink size={14} />
        </Link>

        <button className={styles.notifBtn} aria-label="Notifications">
          <Bell size={18} />
          <span className={styles.notifDot}></span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: "#0B192C", fontWeight: 700 }}>
          <ShieldCheck size={16} style={{ color: "#16A34A" }} />
          <span>Active</span>
        </div>
      </div>
    </header>
  );
}

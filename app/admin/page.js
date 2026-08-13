"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";
import { Fraunces, Inter } from "next/font/google";
import {
  Inbox,
  Package,
  Landmark,
  Anchor,
  TrendingUp,
  Home as HomeIcon,
  Info,
  Grid,
  Globe2,
  Image as ImageIcon,
  FileText,
  Mail,
  Settings,
  ArrowRight,
} from "lucide-react";
import styles from "./admin.module.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const modulesList = [
  { label: "Home Banners", path: "/admin/home", icon: HomeIcon, desc: "Hero Slider Images & Headlines" },
  { label: "About Page", path: "/admin/about", icon: Info, desc: "Company Text & Location Advantage" },
  { label: "Products Catalog", path: "/admin/product", icon: Package, desc: "Commodity Listings & FOB Prices" },
  { label: "Category Manager", path: "/admin/categorys", icon: Grid, desc: "Categories & Icon Badges" },
  { label: "Trade Exhibitions", path: "/admin/exhibitions", icon: Landmark, desc: "Stall Bookings & Fair Schedule" },
  { label: "Countries & Ports", path: "/admin/contry", icon: Globe2, desc: "Mundra, Kandla & Pipavav Ports" },
  { label: "Gallery Media", path: "/admin/gallery", icon: ImageIcon, desc: "Processing & Port Loading Photos" },
  { label: "Blog Articles", path: "/admin/blog", icon: FileText, desc: "Agro Insights & Quality Guides" },
  { label: "Contact Messages", path: "/admin/contact", icon: Mail, desc: "Customer Inquiries & Messages" },
  { label: "Buyer Quotations", path: "/admin/inquiry", icon: Inbox, desc: "Container Inquiries & RFQs" },
  { label: "Portal Settings", path: "/admin/settings", icon: Settings, desc: "Server & URL Configuration" },
];

export default function AdminDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className={`${styles.adminLayout} ${inter.className}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={styles.mainWrapper}>
        <TopHeader
          activeNav="dashboard"
          homeSubNav="dashboard"
          frauncesFont={fraunces}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <main className={styles.mainContent}>
          <div className={styles.dashboardContainer}>
            {/* Stat Overview Cards */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIconWrap}>
                  <Inbox size={26} color="#15803d" />
                </div>
                <div className={styles.statDetails}>
                  <span className={styles.statLabel}>Total Inquiries</span>
                  <span className={styles.statNumber}>142 Requests</span>
                  <span className={styles.statTrendPositive}>
                    <TrendingUp size={14} style={{ display: "inline", marginRight: 3 }} />
                    +14.2% this month
                  </span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIconWrap}>
                  <Package size={26} color="#15803d" />
                </div>
                <div className={styles.statDetails}>
                  <span className={styles.statLabel}>Active Commodities</span>
                  <span className={styles.statNumber}>48 Products</span>
                  <span className={styles.statSub}>100% Export Grade</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIconWrap}>
                  <Landmark size={26} color="#15803d" />
                </div>
                <div className={styles.statDetails}>
                  <span className={styles.statLabel}>Exhibition Meetings</span>
                  <span className={styles.statNumber}>28 Meetings</span>
                  <span className={styles.statSub}>Gulfood & Indus Food</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIconWrap}>
                  <Anchor size={26} color="#15803d" />
                </div>
                <div className={styles.statDetails}>
                  <span className={styles.statLabel}>Export Volume</span>
                  <span className={styles.statNumber}>12,450 MT</span>
                  <span className={styles.statTrendPositive}>
                    <TrendingUp size={14} style={{ display: "inline", marginRight: 3 }} />
                    Mundra & Kandla
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Admin Modules Grid */}
            <div className={styles.tableCard}>
              <div className={styles.tableHeader}>
                <h3>Eco Export Admin Modules</h3>
                <p>Quick access to all project management subfolders matching your website structure.</p>
              </div>

              <div className={styles.cardsGrid}>
                {modulesList.map((m) => {
                  const IconComp = m.icon;
                  return (
                    <Link key={m.path} href={m.path} style={{ textDecoration: "none" }}>
                      <div className={styles.infoCard} style={{ transition: "all 0.25s ease", cursor: "pointer" }}>
                        <IconComp size={28} color="#15803d" style={{ marginBottom: 8 }} />
                        <h4>{m.label}</h4>
                        <p>{m.desc}</p>
                        <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#15803d", display: "inline-flex", alignItems: "center", gap: 4 }}>
                          Manage Module <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

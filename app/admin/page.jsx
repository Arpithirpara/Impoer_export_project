"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";
import {
  Package,
  Globe,
  MessageSquare,
  TrendingUp,
  ArrowUpRight,
  Plus,
  CheckCircle,
  Clock,
  Eye,
  Calendar,
  Layers,
  Award,
  Edit,
  Trash2,
} from "lucide-react";
import styles from "./admin.module.css";

export default function AdminDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  const overviewStats = [
    { title: "Export Products", value: "24", trend: "+4 this month", icon: Package, link: "/admin/products" },
    { title: "Export Destinations", value: "30+ Countries", trend: "5 Continents", icon: Globe, link: "/admin/countries" },
    { title: "Active Inquiries", value: "18 Leads", trend: "+6 new today", icon: MessageSquare, link: "/admin/inquiries" },
    { title: "Trade Exhibitions", value: "3 Upcoming", trend: "Gulfood & Spice Expo", icon: Calendar, link: "/admin/exhibitions" },
  ];

  const recentInquiries = [
    { id: "RFQ-904", client: "Al-Baraka General Trading", country: "Dubai, UAE", product: "Durum Wheat Semolina", qty: "500 MT", status: "Active" },
    { id: "RFQ-903", client: "Nile Import & Agro LLC", country: "Cairo, Egypt", product: "Non-Basmati Long Grain Rice", qty: "1,200 MT", status: "Pending" },
    { id: "RFQ-902", client: "Singa Spice Distribution", country: "Singapore", product: "Organic Turmeric & Cumin", qty: "150 MT", status: "Active" },
    { id: "RFQ-901", client: "Euro Agro Commodities", country: "Rotterdam, Netherlands", product: "Natural Sesame Seeds", qty: "300 MT", status: "Active" },
  ];

  const quickModules = [
    { label: "Hero Banner Slider", count: "4 Slides Active", href: "/admin/hero", icon: Layers, color: "#10b981" },
    { label: "Categories Grid", count: "10 Commodity Lines", href: "/admin/categories", icon: Package, color: "#3b82f6" },
    { label: "Exhibitions & Events", count: "Gulfood 2026 Scheduled", href: "/admin/exhibitions", icon: Calendar, color: "#8b5cf6" },
    { label: "Port Logistics (Mundra/Kandla)", count: "3 Strategic Ports", href: "/admin/about", icon: Award, color: "#f59e0b" },
  ];

  return (
    <div className={styles.adminLayout}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className={`${styles.mainWrapper} ${!sidebarOpen ? styles.mainWrapperFull : ""}`}>
        <TopHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />

        <main className={styles.mainContent}>
          {/* Header Banner */}
          <div className={styles.moduleHeader}>
            <div>
              <h1>Welcome to Eco Export Admin Control</h1>
              <p>Manage products, hero banners, trade exhibitions, export destinations, and buyer RFQs.</p>
            </div>
            <Link href="/admin/products" className={styles.primaryActionBtn}>
              <Plus size={18} />
              <span>Add New Commodity Product</span>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            {overviewStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className={styles.statCard}>
                  <div className={styles.statCardHeader}>
                    <div className={styles.statIconWrap}>
                      <Icon size={22} />
                    </div>
                    <span className={styles.statTrend}>{stat.trend}</span>
                  </div>
                  <h3 className={styles.statValue}>{stat.value}</h3>
                  <p className={styles.statTitle}>{stat.title}</p>
                </div>
              );
            })}
          </div>

          {/* Main Grid Content */}
          <div className={styles.contentGrid}>
            {/* Left: Recent Inquiries Table */}
            <div className={styles.cardBox}>
              <div className={styles.cardTitleBar}>
                <h3>Recent Buyer Inquiries & RFQs</h3>
                <Link href="/admin/inquiries" style={{ color: "#000000", fontSize: "0.88rem", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                  <span>View All Leads</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className={styles.tableContainer}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>RFQ ID</th>
                      <th>Client Name</th>
                      <th>Country</th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentInquiries.map((row) => (
                      <tr key={row.id}>
                        <td style={{ fontWeight: 800, color: "#000000" }}>{row.id}</td>
                        <td style={{ fontWeight: 700, color: "#0f172a" }}>{row.client}</td>
                        <td>{row.country}</td>
                        <td>{row.product}</td>
                        <td>{row.qty}</td>
                        <td>
                          <span
                            className={`${styles.statusBadge} ${
                              row.status === "Active"
                                ? styles.statusActive
                                : styles.statusPending
                            }`}
                          >
                            {row.status === "Active" ? <CheckCircle size={12} /> : <Clock size={12} />}
                            {row.status}
                          </span>
                        </td>
                        <td>
                          <div className={styles.actionRow}>
                            <button className={styles.editBtn}>
                              <Edit size={14} /> Edit
                            </button>
                            <button className={styles.deleteBtn}>
                              <Trash2 size={14} /> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Quick Module Links */}
            <div className={styles.cardBox}>
              <div className={styles.cardTitleBar}>
                <h3>Quick Management Modules</h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {quickModules.map((m, idx) => {
                  const Icon = m.icon;
                  return (
                    <Link
                      key={idx}
                      href={m.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "14px 16px",
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "12px",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: "#000000", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff" }}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <p style={{ margin: 0, fontWeight: 700, fontSize: "0.92rem", color: "#000000" }}>{m.label}</p>
                          <span style={{ fontSize: "0.78rem", color: "#64748b" }}>{m.count}</span>
                        </div>
                      </div>
                      <ArrowUpRight size={18} style={{ color: "#000000" }} />
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

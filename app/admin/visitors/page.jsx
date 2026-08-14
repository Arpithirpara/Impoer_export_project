"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, Edit, Trash2, CheckCircle, Eye, Globe, Users, Clock, Activity } from "lucide-react";
import styles from "../admin.module.css";

const visitorsList = [
  { id: "VIS-1082", ip: "185.220.101.5", country: "United Arab Emirates", flag: "🇦🇪", city: "Dubai", page: "/products/basmati-rice", duration: "4m 12s", time: "10 mins ago", status: "Active" },
  { id: "VIS-1081", ip: "194.165.16.89", country: "Saudi Arabia", flag: "🇸🇦", city: "Riyadh", page: "/categories/spices", duration: "6m 45s", time: "25 mins ago", status: "Active" },
  { id: "VIS-1080", ip: "103.252.202.1", country: "Singapore", flag: "🇸🇬", city: "Singapore", page: "/exhibitions", duration: "2m 18s", time: "1 hour ago", status: "Completed" },
  { id: "VIS-1079", ip: "84.17.52.12", country: "Netherlands", flag: "🇳🇱", city: "Rotterdam", page: "/about", duration: "8m 30s", time: "2 hours ago", status: "Completed" },
  { id: "VIS-1078", ip: "41.130.12.90", country: "Egypt", flag: "🇪🇬", city: "Cairo", page: "/inquiries", duration: "5m 04s", time: "3 hours ago", status: "Completed" },
];

export default function AdminVisitorsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  const filtered = visitorsList.filter((v) =>
    v.country.toLowerCase().includes(searchFilter.toLowerCase()) ||
    v.ip.includes(searchFilter) ||
    v.page.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className={styles.adminLayout}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`${styles.mainWrapper} ${!sidebarOpen ? styles.mainWrapperFull : ""}`}>
        <TopHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
        <main className={styles.mainContent}>
          {/* Header Action Section */}
          <div className={styles.moduleHeader}>
            <div>
              <h1>Visitor Traffic & Real-Time Analytics</h1>
              <p>Track live website visitors, IP locations, landed pages, and engagement durations.</p>
            </div>
            <Link href="/admin/visitors/add" className={styles.primaryActionBtn} style={{ textDecoration: "none" }}>
              <Plus size={18} />
              <span>Add Visitor Record</span>
            </Link>
          </div>

          {/* Visitor Traffic Stat Cards */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statCardHeader}>
                <div className={styles.statIconWrap}><Users size={22} /></div>
                <span className={styles.statTrend}>+12.4% this week</span>
              </div>
              <h3 className={styles.statValue}>12,450</h3>
              <p className={styles.statTitle}>Total Storefront Visitors</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statCardHeader}>
                <div className={styles.statIconWrap} style={{ background: "#0B192C" }}><Activity size={22} /></div>
                <span className={styles.statTrend}>Live Now</span>
              </div>
              <h3 className={styles.statValue}>18</h3>
              <p className={styles.statTitle}>Active Online Visitors</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statCardHeader}>
                <div className={styles.statIconWrap}><Globe size={22} /></div>
                <span className={styles.statTrend}>30+ Ports</span>
              </div>
              <h3 className={styles.statValue}>42</h3>
              <p className={styles.statTitle}>Countries Reached</p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statCardHeader}>
                <div className={styles.statIconWrap}><Clock size={22} /></div>
                <span className={styles.statTrend}>Avg Session</span>
              </div>
              <h3 className={styles.statValue}>4m 42s</h3>
              <p className={styles.statTitle}>Average Time Spent</p>
            </div>
          </div>

          {/* Data Table Container */}
          <div className={styles.cardBox}>
            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Visitor ID</th>
                    <th>IP Address</th>
                    <th>Country & City</th>
                    <th>Landed Page</th>
                    <th>Time Spent</th>
                    <th>Visited At</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((v) => (
                    <tr key={v.id}>
                      <td style={{ fontWeight: 800, color: "#0B192C" }}>{v.id}</td>
                      <td style={{ fontFamily: "monospace", fontWeight: 700 }}>{v.ip}</td>
                      <td>
                        <strong style={{ color: "#0B192C", display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ fontSize: "1.2rem" }}>{v.flag}</span> {v.country}
                        </strong>
                        <span style={{ fontSize: "0.8rem", color: "#64748B" }}>{v.city}</span>
                      </td>
                      <td style={{ fontFamily: "monospace", color: "#0B192C" }}>{v.page}</td>
                      <td style={{ fontWeight: 700 }}>⏱️ {v.duration}</td>
                      <td style={{ fontSize: "0.85rem", color: "#64748B" }}>{v.time}</td>
                      <td>
                        <span className={`${styles.statusBadge} ${v.status === "Active" ? styles.statusActive : styles.statusPending}`}>
                          <CheckCircle size={12} /> {v.status}
                        </span>
                      </td>
                      <td>
                        <div className={styles.actionRow}>
                          <Link href={`/admin/visitors/edit/${v.id}`} className={styles.editBtn} style={{ textDecoration: "none" }}>
                            <Edit size={14} /> Edit
                          </Link>
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
        </main>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, CheckCircle, Clock, Edit, Trash2, Search, Filter } from "lucide-react";
import styles from "../admin.module.css";

const inquiriesList = [
  { id: "RFQ-904", name: "Ahmed Al-Mansoori", company: "Al-Baraka General Trading", email: "ahmed@albarakatrade.ae", phone: "+971 50 123 4567", country: "Dubai, UAE", product: "Durum Wheat Semolina", qty: "500 MT", date: "Aug 14, 2026", status: "Active" },
  { id: "RFQ-903", name: "Tarek Hassan", company: "Nile Import & Agro LLC", email: "thassan@nileagro.eg", phone: "+20 100 987 6543", country: "Cairo, Egypt", product: "Non-Basmati Long Grain Rice", qty: "1,200 MT", date: "Aug 13, 2026", status: "Pending" },
  { id: "RFQ-902", name: "Lin Wei", company: "Singa Spice Distribution", email: "linwei@singaspice.sg", phone: "+65 9123 4567", country: "Singapore", product: "Organic Turmeric & Cumin", qty: "150 MT", date: "Aug 12, 2026", status: "Active" },
  { id: "RFQ-901", name: "Jan Van Der Berg", company: "Euro Agro Commodities", email: "jan@euroagro.nl", phone: "+31 10 456 7890", country: "Rotterdam, Netherlands", product: "Natural Sesame Seeds", qty: "300 MT", date: "Aug 11, 2026", status: "Active" },
];

export default function AdminInquiriesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = inquiriesList.filter((i) => {
    const matchesSearch =
      i.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.product.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "All" || i.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className={styles.adminLayout}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`${styles.mainWrapper} ${!sidebarOpen ? styles.mainWrapperFull : ""}`}>
        <TopHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className={styles.mainContent}>
          {/* Header Action Section */}
          <div className={styles.moduleHeader}>
            <div>
              <h1>Buyer Inquiries & Quote Requests (RFQs)</h1>
              <p>Manage international buyer inquiries received via the storefront quote form.</p>
            </div>
            <Link href="/admin/inquiries/add" className={styles.primaryActionBtn} style={{ textDecoration: "none" }}>
              <Plus size={18} />
              <span>Add New Inquiry Lead</span>
            </Link>
          </div>

          {/* Table Container Box */}
          <div className={styles.cardBox}>
            {/* Table Search & Filter Toolbar */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 18 }}>
              <div style={{ position: "relative", flex: 1, minWidth: 240, maxWidth: 400 }}>
                <Search size={18} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#64748B" }} />
                <input
                  type="text"
                  placeholder="Search by RFQ ID, Buyer name, company, product..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "9px 14px 9px 38px",
                    borderRadius: "10px",
                    border: "1.5px solid #CBD5E1",
                    background: "#F8FAFC",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "#0B192C",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Filter size={16} style={{ color: "#64748B" }} />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  style={{
                    padding: "9px 14px",
                    borderRadius: "10px",
                    border: "1.5px solid #CBD5E1",
                    background: "#FFFFFF",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#0B192C",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="All">All Lead Statuses</option>
                  <option value="Active">Active Leads</option>
                  <option value="Pending">Pending Review</option>
                </select>
              </div>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>RFQ ID</th>
                    <th>Buyer & Company</th>
                    <th>Contact Info</th>
                    <th>Destination</th>
                    <th>Product & Quantity</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length > 0 ? (
                    filtered.map((i) => (
                      <tr key={i.id}>
                        <td style={{ fontWeight: 800, color: "#000000" }}>{i.id}</td>
                        <td>
                          <strong style={{ color: "#0f172a", display: "block" }}>{i.name}</strong>
                          <span style={{ fontSize: "0.8rem", color: "#64748b" }}>{i.company}</span>
                        </td>
                        <td>
                          <span style={{ display: "block", fontSize: "0.82rem", color: "#334155" }}>✉️ {i.email}</span>
                          <span style={{ display: "block", fontSize: "0.82rem", color: "#64748b" }}>📞 {i.phone}</span>
                        </td>
                        <td>{i.country}</td>
                        <td>
                          <strong style={{ color: "#0f172a", display: "block" }}>{i.product}</strong>
                          <span style={{ fontSize: "0.8rem", color: "#000000", fontWeight: 800 }}>{i.qty}</span>
                        </td>
                        <td>
                          <span className={`${styles.statusBadge} ${i.status === "Active" ? styles.statusActive : styles.statusPending}`}>
                            {i.status === "Active" ? <CheckCircle size={12} /> : <Clock size={12} />} {i.status}
                          </span>
                        </td>
                        <td>
                          <div className={styles.actionRow}>
                            <Link href={`/admin/inquiries/edit/${i.id}`} className={styles.editBtn} style={{ textDecoration: "none" }}>
                              <Edit size={14} /> View/Edit
                            </Link>
                            <button className={styles.deleteBtn}>
                              <Trash2 size={14} /> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} style={{ textAlign: "center", padding: "24px", color: "#64748B", fontWeight: 600 }}>
                        No buyer inquiries match your search/filter criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

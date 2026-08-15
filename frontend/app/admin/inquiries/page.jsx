"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, CheckCircle, Clock, Edit, Trash2 } from "lucide-react";
import styles from "../admin.module.css";

const inquiriesList = [
  { id: "RFQ-904", name: "Ahmed Al-Mansoori", company: "Al-Baraka General Trading", email: "ahmed@albarakatrade.ae", phone: "+971 50 123 4567", country: "Dubai, UAE", product: "Durum Wheat Semolina", qty: "500 MT", date: "Aug 14, 2026", status: "Active" },
  { id: "RFQ-903", name: "Tarek Hassan", company: "Nile Import & Agro LLC", email: "thassan@nileagro.eg", phone: "+20 100 987 6543", country: "Cairo, Egypt", product: "Non-Basmati Long Grain Rice", qty: "1,200 MT", date: "Aug 13, 2026", status: "Pending" },
  { id: "RFQ-902", name: "Lin Wei", company: "Singa Spice Distribution", email: "linwei@singaspice.sg", phone: "+65 9123 4567", country: "Singapore", product: "Organic Turmeric & Cumin", qty: "150 MT", date: "Aug 12, 2026", status: "Active" },
  { id: "RFQ-901", name: "Jan Van Der Berg", company: "Euro Agro Commodities", email: "jan@euroagro.nl", phone: "+31 10 456 7890", country: "Rotterdam, Netherlands", product: "Natural Sesame Seeds", qty: "300 MT", date: "Aug 11, 2026", status: "Active" },
];

export default function AdminInquiriesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className={styles.adminLayout}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`${styles.mainWrapper} ${!sidebarOpen ? styles.mainWrapperFull : ""}`}>
        <TopHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
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

          {/* Table Container */}
          <div className={styles.cardBox}>
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
                  {inquiriesList.map((i) => (
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

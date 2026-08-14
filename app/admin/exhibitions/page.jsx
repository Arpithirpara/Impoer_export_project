"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, Edit, Trash2, CheckCircle, QrCode, ExternalLink, X, Printer, Download, ToggleLeft, ToggleRight } from "lucide-react";
import styles from "../admin.module.css";

const initialExhibitions = [
  { id: "ex1", name: "Gulfood Dubai International Agro Expo", flag: "🇦🇪", date: "Feb 17-21, 2026", location: "Dubai World Trade Centre, UAE", stallNo: "Hall 4 • Stand A-102", status: "Active" },
  { id: "ex2", name: "Anuga Food Fair Cologne", flag: "🇩🇪", date: "Oct 04-08, 2026", location: "Koelnmesse, Cologne, Germany", stallNo: "Passage 4/5 • Stand B-040", status: "Active" },
  { id: "ex3", name: "SIAL Paris Food Summit", flag: "🇫🇷", date: "Oct 18-22, 2026", location: "Paris Nord Villepinte, France", stallNo: "Hall 5A • Stand E-092", status: "Closed" },
  { id: "ex4", name: "World Food India Agro Expo", flag: "🇮🇳", date: "Nov 05-08, 2026", location: "Pragati Maidan, New Delhi, India", stallNo: "Hall 12 • Stand E-45", status: "Active" },
];

export default function AdminExhibitionsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");
  const [exhibitions, setExhibitions] = useState(initialExhibitions);
  const [activeQrModal, setActiveQrModal] = useState(null);

  const toggleStatus = (id) => {
    setExhibitions(
      exhibitions.map((ex) =>
        ex.id === id ? { ...ex, status: ex.status === "Active" ? "Closed" : "Active" } : ex
      )
    );
  };

  const getQrUrl = (id) => {
    const publicUrl = `http://localhost:3001/exhibition/${id}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(publicUrl)}`;
  };

  return (
    <div className={styles.adminLayout}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`${styles.mainWrapper} ${!sidebarOpen ? styles.mainWrapperFull : ""}`}>
        <TopHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
        <main className={styles.mainContent}>
          
          {/* Header Action Section */}
          <div className={styles.moduleHeader}>
            <div>
              <h1>Exhibition Visitor Management & Stall QR Codes</h1>
              <p>Schedule trade fairs in India & Overseas, generate stall QR codes, and toggle event registration status.</p>
            </div>
            <Link href="/admin/exhibitions/add" className={styles.primaryActionBtn} style={{ textDecoration: "none" }}>
              <Plus size={18} />
              <span>Add New Exhibition Event</span>
            </Link>
          </div>

          {/* Data Table Container */}
          <div className={styles.cardBox}>
            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Stall QR Code</th>
                    <th>Exhibition Name</th>
                    <th>Schedule Date</th>
                    <th>Venue Location</th>
                    <th>Stall / Stand No</th>
                    <th>Registration Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {exhibitions.map((ex) => (
                    <tr key={ex.id}>
                      <td>
                        <button
                          type="button"
                          onClick={() => setActiveQrModal(ex)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "6px 12px",
                            background: "#000000",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: 8,
                            fontSize: "0.78rem",
                            fontWeight: 800,
                            cursor: "pointer",
                          }}
                        >
                          <QrCode size={16} />
                          <span>View QR</span>
                        </button>
                      </td>
                      <td style={{ fontWeight: 800, color: "#000000" }}>
                        <span style={{ fontSize: "1.2rem", marginRight: 6 }}>{ex.flag}</span>
                        <span>{ex.name}</span>
                      </td>
                      <td style={{ fontWeight: 700 }}>📅 {ex.date}</td>
                      <td>{ex.location}</td>
                      <td style={{ fontWeight: 800, color: "#000000" }}>⛺ {ex.stallNo}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => toggleStatus(ex.id)}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <span
                            className={`${styles.statusBadge} ${
                              ex.status === "Active" ? styles.statusActive : styles.statusPending
                            }`}
                          >
                            <CheckCircle size={12} /> {ex.status === "Active" ? "Open (Live)" : "Closed"}
                          </span>
                        </button>
                      </td>
                      <td>
                        <div className={styles.actionRow}>
                          <Link href={`/exhibition/${ex.id}`} target="_blank" className={styles.editBtn} style={{ textDecoration: "none", background: "#0284c7", borderColor: "#0369a1", color: "#ffffff" }}>
                            <ExternalLink size={14} /> Test Form
                          </Link>
                          <Link href={`/admin/exhibitions/edit/${ex.id}`} className={styles.editBtn} style={{ textDecoration: "none" }}>
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

          {/* QR CODE MODAL POPUP */}
          {activeQrModal && (
            <div
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(6px)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "460px",
                  background: "#ffffff",
                  borderRadius: "24px",
                  padding: "32px",
                  position: "relative",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                  textAlign: "center",
                  border: "3px solid #143528",
                }}
              >
                <button
                  onClick={() => setActiveQrModal(null)}
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "#f1f5f9",
                    border: "none",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#000000",
                  }}
                >
                  <X size={20} />
                </button>

                <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#143528", margin: "0 0 4px", fontFamily: "Georgia, serif" }}>
                  Eco Export Stall QR Code
                </h2>
                <p style={{ fontSize: "0.85rem", color: "#64748b", margin: "0 0 20px" }}>
                  {activeQrModal.flag} {activeQrModal.name} • {activeQrModal.stallNo}
                </p>

                {/* Generated QR Code Box */}
                <div
                  style={{
                    width: "220px",
                    height: "220px",
                    margin: "0 auto 20px",
                    padding: "16px",
                    background: "#ffffff",
                    border: "2.5px solid #000000",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={getQrUrl(activeQrModal.id)}
                    alt={`QR Code for ${activeQrModal.name}`}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>

                <p style={{ fontSize: "0.8rem", color: "#334155", fontFamily: "monospace", margin: "0 0 20px", background: "#f8fafc", padding: "8px 12px", borderRadius: 8, border: "1px solid #e2e8f0" }}>
                  URL: http://localhost:3001/exhibition/{activeQrModal.id}
                </p>

                {/* Action Buttons */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <a
                    href={getQrUrl(activeQrModal.id)}
                    target="_blank"
                    download={`Eco_Export_Stall_QR_${activeQrModal.id}.png`}
                    style={{
                      padding: "12px",
                      background: "#143528",
                      color: "#ffffff",
                      borderRadius: "12px",
                      fontWeight: 800,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                    }}
                  >
                    <Download size={16} />
                    <span>Download QR</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => window.print()}
                    style={{
                      padding: "12px",
                      background: "#000000",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "12px",
                      fontWeight: 800,
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                    }}
                  >
                    <Printer size={16} />
                    <span>Print Poster</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

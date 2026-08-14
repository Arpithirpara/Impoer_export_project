"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, CheckCircle2 } from "lucide-react";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";
import styles from "../admin.module.css";

export default function AdminFormLayout({
  title,
  subtitle,
  backUrl,
  onSubmit,
  isEdit = false,
  children,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className={styles.adminLayout}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className={`${styles.mainWrapper} ${
          !sidebarOpen ? styles.mainWrapperFull : ""
        }`}
      >
        <TopHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className={styles.mainContent}>
          {/* Top Form Navigation & Action Header */}
          <div className={styles.moduleHeader} style={{ marginBottom: 20 }}>
            <div>
              <Link
                href={backUrl}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#64748B",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  marginBottom: 8,
                }}
              >
                <ArrowLeft size={16} />
                <span>Back to Listing</span>
              </Link>
              <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0B192C", margin: 0 }}>
                {title}
              </h1>
              <p style={{ color: "#64748B", fontSize: "0.9rem", margin: "4px 0 0" }}>
                {subtitle}
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Link
                href={backUrl}
                style={{
                  padding: "10px 18px",
                  borderRadius: 12,
                  border: "1.5px solid #CBD5E1",
                  background: "#ffffff",
                  color: "#0B192C",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  textDecoration: "none",
                }}
              >
                Cancel
              </Link>
              <button
                type="submit"
                form="admin-module-form"
                className={styles.primaryActionBtn}
              >
                <Save size={18} />
                <span>{isEdit ? "Update Changes" : "Save & Create"}</span>
              </button>
            </div>
          </div>

          {/* Success Banner Alert */}
          {savedSuccess && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "#16A34A",
                color: "#ffffff",
                padding: "14px 20px",
                borderRadius: 12,
                fontSize: "0.9rem",
                fontWeight: 700,
                marginBottom: 24,
                boxShadow: "0 4px 14px rgba(22, 163, 74, 0.3)",
              }}
            >
              <CheckCircle2 size={20} style={{ color: "#ffffff" }} />
              <span>Record successfully saved to system!</span>
            </div>
          )}

          {/* Form Card Container */}
          <form id="admin-module-form" onSubmit={handleSubmit}>
            <div
              className={styles.cardBox}
              style={{
                maxWidth: 900,
                background: "#ffffff",
                border: "1.5px solid #E2E8F0",
                borderRadius: 18,
                padding: 32,
              }}
            >
              {children}
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
